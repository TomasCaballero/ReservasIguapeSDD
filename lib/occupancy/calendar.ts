import prisma from '@/lib/db/client';
import { isUnitAvailableForStay } from '@/lib/reservations/lifecycle';
import { formatDateISO } from '@/lib/utils/date';

export interface CalendarOccupancyEvent {
  id: string;
  unitId: string;
  unitName: string;
  categoryName: string;
  type: 'RESERVATION' | 'MANUAL_BLOCK' | 'ICAL_BLOCK' | 'SOFT_LOCK';
  checkIn: string;
  checkOut: string;
  guestName?: string;
  bookingCode?: string;
  notes?: string;
}

export async function getCalendarMatrix(startDate: string, endDate: string) {
  const units = await prisma.unit.findMany({
    where: { isActive: true },
    include: { category: true },
    orderBy: [{ category: { displayOrder: 'asc' } }, { name: 'asc' }],
  });

  const occupancies = await prisma.unitOccupancy.findMany({
    where: {
      status: 'ACTIVE',
      checkIn: { lte: new Date(endDate) },
      checkOut: { gte: new Date(startDate) },
    },
    include: {
      unit: { include: { category: true } },
      reservation: { include: { guest: true } },
    },
  });

  const events: CalendarOccupancyEvent[] = occupancies.map((occ) => ({
    id: occ.id,
    unitId: occ.unitId,
    unitName: occ.unit.name,
    categoryName: occ.unit.category.name,
    type: occ.type as any,
    checkIn: formatDateISO(occ.checkIn),
    checkOut: formatDateISO(occ.checkOut),
    guestName: occ.reservation?.guest
      ? `${occ.reservation.guest.firstName} ${occ.reservation.guest.lastName}`
      : undefined,
    bookingCode: occ.reservation?.code,
    notes: occ.notes || undefined,
  }));

  return {
    units: units.map((u) => ({
      id: u.id,
      name: u.name,
      categoryId: u.categoryId,
      categoryName: u.category.name,
    })),
    occupancies: events,
  };
}

export async function createManualBlock(input: {
  unitId: string;
  checkIn: string;
  checkOut: string;
  notes?: string;
}) {
  const { unitId, checkIn, checkOut, notes } = input;

  const isFree = await isUnitAvailableForStay(unitId, checkIn, checkOut);
  if (!isFree) {
    const err: any = new Error('La unidad física ya está ocupada o bloqueada en esas fechas.');
    err.statusCode = 409;
    throw err;
  }

  return await prisma.unitOccupancy.create({
    data: {
      unitId,
      type: 'MANUAL_BLOCK',
      checkIn: new Date(checkIn),
      checkOut: new Date(checkOut),
      notes,
      status: 'ACTIVE',
    },
  });
}

export async function releaseManualBlock(occupancyId: string) {
  return await prisma.unitOccupancy.update({
    where: { id: occupancyId },
    data: { status: 'RELEASED' },
  });
}
