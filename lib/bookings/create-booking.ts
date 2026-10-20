import crypto from 'crypto';
import prisma from '@/lib/db/client';
import { pgPool } from '@/lib/db/client';
import { validateSoftLock } from '@/lib/occupancy/soft-lock';
import { calculateStayPrice } from '@/lib/pricing/calculator';
import { calculateNights, parseDateString, formatDateISO } from '@/lib/utils/date';
import { differenceInYears } from 'date-fns';

export interface CreateBookingInput {
  softLockToken: string;
  categoryId: string;
  checkIn: string;
  checkOut: string;
  adults: number;
  children?: number;
  currency: 'ARS' | 'USD';
  guest: {
    docType: 'DNI' | 'PASSPORT' | 'CI' | 'OTHER';
    docNumber: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    birthDate: string; // YYYY-MM-DD
  };
  companions?: Array<{
    firstName: string;
    lastName: string;
    docType?: 'DNI' | 'PASSPORT' | 'CI' | 'OTHER';
    docNumber?: string;
    birthDate?: string;
  }>;
  notes?: string;
}

export interface BookingConfirmationResult {
  bookingCode: string;
  status: 'PENDING';
  totalPrice: number;
  currency: 'ARS' | 'USD';
  guest: {
    fullName: string;
    email: string;
  };
  dates: {
    checkIn: string;
    checkOut: string;
  };
  message: string;
}

export function generateBookingCode(): string {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; // exclude ambiguous chars like 0, O, 1, I
  let code = '';
  const bytes = crypto.randomBytes(6);
  for (let i = 0; i < 6; i++) {
    code += chars[bytes[i] % chars.length];
  }
  return `IG-${code}`;
}

export async function createWebBooking(input: CreateBookingInput): Promise<BookingConfirmationResult> {
  const { softLockToken, categoryId, checkIn, checkOut, adults, children = 0, currency, guest, companions = [], notes } = input;

  // 1. Validate soft lock
  const lockInfo = await validateSoftLock(softLockToken);
  if (!lockInfo.isValid || !lockInfo.unitId || !lockInfo.occupancyId) {
    throw new Error('El bloqueo temporal de 15 minutos ha expirado. Por favor, selecciona nuevamente las fechas.');
  }

  // 2. Validate titular age >= 18
  const birthDateObj = parseDateString(guest.birthDate);
  const age = differenceInYears(new Date(), birthDateObj);
  if (age < 18) {
    throw new Error('El titular de la reserva debe ser mayor de 18 años.');
  }

  // 3. Fetch category and calculate exact price
  const category = await prisma.category.findUnique({
    where: { id: categoryId },
    include: {
      seasonPrices: {
        include: { season: true },
        where: { season: { isActive: true } },
      },
    },
  });

  if (!category) {
    throw new Error('Categoría no encontrada');
  }

  const discountRules = await prisma.discountRule.findMany({
    where: { isActive: true },
  });

  const formattedSeasonPrices = category.seasonPrices.map((sp) => ({
    seasonName: sp.season.name,
    startDate: sp.season.startDate,
    endDate: sp.season.endDate,
    priceArs: Number(sp.priceArs),
    priceUsd: Number(sp.priceUsd),
  }));

  const pricing = calculateStayPrice({
    checkIn,
    checkOut,
    basePriceArs: Number(category.basePriceArs),
    basePriceUsd: Number(category.basePriceUsd),
    currency,
    discountRules: discountRules.map((r) => ({
      minNights: r.minNights,
      discountPercent: r.discountPercent,
    })),
    seasonPrices: formattedSeasonPrices,
  });

  // 4. Upsert Guest (RF-57, RF-58: update phone/email with latest booking)
  const normalizedDocNumber = guest.docNumber.trim().toUpperCase();
  const dbGuest = await prisma.guest.upsert({
    where: {
      docType_docNumber: {
        docType: guest.docType,
        docNumber: normalizedDocNumber,
      },
    },
    update: {
      firstName: guest.firstName.trim(),
      lastName: guest.lastName.trim(),
      email: guest.email.trim().toLowerCase(),
      phone: guest.phone.trim(),
      birthDate: birthDateObj,
    },
    create: {
      docType: guest.docType,
      docNumber: normalizedDocNumber,
      firstName: guest.firstName.trim(),
      lastName: guest.lastName.trim(),
      email: guest.email.trim().toLowerCase(),
      phone: guest.phone.trim(),
      birthDate: birthDateObj,
    },
  });

  // 5. Generate unique booking code
  let bookingCode = generateBookingCode();
  let codeExists = await prisma.reservation.findUnique({ where: { code: bookingCode } });
  while (codeExists) {
    bookingCode = generateBookingCode();
    codeExists = await prisma.reservation.findUnique({ where: { code: bookingCode } });
  }

  // 6. Transaction to create reservation, companions, and convert UnitOccupancy
  const reservation = await prisma.$transaction(async (tx) => {
    const res = await tx.reservation.create({
      data: {
        code: bookingCode,
        categoryId,
        unitId: lockInfo.unitId,
        guestId: dbGuest.id,
        checkIn: parseDateString(checkIn),
        checkOut: parseDateString(checkOut),
        adults,
        children,
        currency,
        subtotal: pricing.subtotal,
        discountAmount: pricing.discountAmount,
        totalPrice: pricing.totalPrice,
        status: 'PENDING',
        origin: 'WEB_DIRECT',
        notes,
        companions: {
          create: companions.map((c) => ({
            firstName: c.firstName.trim(),
            lastName: c.lastName.trim(),
            docType: c.docType,
            docNumber: c.docNumber ? c.docNumber.trim().toUpperCase() : null,
            birthDate: c.birthDate ? parseDateString(c.birthDate) : null,
          })),
        },
      },
    });

    // Convert soft lock to permanent active reservation occupancy
    await tx.unitOccupancy.update({
      where: { id: lockInfo.occupancyId },
      data: {
        type: 'RESERVATION',
        reservationId: res.id,
        lockToken: null,
        expiresAt: null,
        status: 'ACTIVE',
      },
    });

    return res;
  });

  return {
    bookingCode: reservation.code,
    status: 'PENDING',
    totalPrice: Number(reservation.totalPrice),
    currency,
    guest: {
      fullName: `${dbGuest.firstName} ${dbGuest.lastName}`,
      email: dbGuest.email,
    },
    dates: {
      checkIn: formatDateISO(reservation.checkIn),
      checkOut: formatDateISO(reservation.checkOut),
    },
    message: '¡Tu solicitud de reserva fue recibida! Un recepcionista te contactará a la brevedad por WhatsApp para coordinar el pago de la seña.',
  };
}
