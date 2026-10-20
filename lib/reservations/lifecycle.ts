import prisma from '@/lib/db/client';
import { pgPool } from '@/lib/db/client';
import { formatDateISO } from '@/lib/utils/date';

export type ReservationStatusType = 'PENDING' | 'CONFIRMED' | 'CANCELLED' | 'FINISHED';

const VALID_TRANSITIONS: Record<ReservationStatusType, ReservationStatusType[]> = {
  PENDING: ['CONFIRMED', 'CANCELLED'],
  CONFIRMED: ['CANCELLED', 'FINISHED'],
  CANCELLED: ['PENDING', 'CONFIRMED'],
  FINISHED: [],
};

export function canTransitionReservationStatus(
  current: string,
  next: string,
): boolean {
  if (current === next) return false;
  const allowed = VALID_TRANSITIONS[current as ReservationStatusType];
  return allowed ? allowed.includes(next as ReservationStatusType) : false;
}

/**
 * Checks if a specific unit is free in the given date range, optionally ignoring a given reservation's occupancy
 */
export async function isUnitAvailableForStay(
  unitId: string,
  checkIn: Date | string,
  checkOut: Date | string,
  ignoreReservationId?: string,
): Promise<boolean> {
  const checkInStr = typeof checkIn === 'string' ? checkIn : formatDateISO(checkIn);
  const checkOutStr = typeof checkOut === 'string' ? checkOut : formatDateISO(checkOut);

  const query = `
    SELECT 1 FROM "UnitOccupancy"
    WHERE unit_id = $1
      AND status = 'ACTIVE'
      AND (expires_at IS NULL OR expires_at > CURRENT_TIMESTAMP)
      AND daterange(check_in, check_out, '[)') && daterange($2::date, $3::date, '[)')
      ${ignoreReservationId ? 'AND (reservation_id IS NULL OR reservation_id != $4)' : ''}
    LIMIT 1
  `;

  const params = ignoreReservationId
    ? [unitId, checkInStr, checkOutStr, ignoreReservationId]
    : [unitId, checkInStr, checkOutStr];

  const res = await pgPool.query(query, params);
  return res.rows.length === 0;
}

export async function updateReservationStatus(
  reservationId: string,
  nextStatus: ReservationStatusType,
  cancellationReason?: string,
) {
  const reservation = await prisma.reservation.findUnique({
    where: { id: reservationId },
    include: { occupancies: true },
  });

  if (!reservation) {
    throw new Error('Reserva no encontrada');
  }

  if (!canTransitionReservationStatus(reservation.status, nextStatus)) {
    throw new Error(`Transición no permitida de ${reservation.status} a ${nextStatus}`);
  }

  // Handle cancellation or finishing: release occupancy
  if (nextStatus === 'CANCELLED' || nextStatus === 'FINISHED') {
    return await prisma.$transaction(async (tx) => {
      const updated = await tx.reservation.update({
        where: { id: reservationId },
        data: {
          status: nextStatus,
          cancellationReason: nextStatus === 'CANCELLED' ? cancellationReason : null,
        },
      });

      await tx.unitOccupancy.updateMany({
        where: { reservationId, status: 'ACTIVE' },
        data: { status: 'RELEASED' },
      });

      return updated;
    });
  }

  // Handle reactivation (from CANCELLED to PENDING or CONFIRMED)
  if (reservation.status === 'CANCELLED') {
    let targetUnitId = reservation.unitId;

    // Check if target unit is free
    const isFree = targetUnitId
      ? await isUnitAvailableForStay(targetUnitId, reservation.checkIn, reservation.checkOut)
      : false;

    if (!isFree) {
      // Find any other available unit in the same category
      const unitsInCat = await prisma.unit.findMany({
        where: { categoryId: reservation.categoryId, isActive: true },
      });

      let foundUnit: string | null = null;
      for (const u of unitsInCat) {
        if (await isUnitAvailableForStay(u.id, reservation.checkIn, reservation.checkOut)) {
          foundUnit = u.id;
          break;
        }
      }

      if (!foundUnit) {
        // 409 Conflict: No room available for reactivation
        const err: any = new Error('No hay cupo disponible en las fechas para reactivar esta reserva.');
        err.statusCode = 409;
        throw err;
      }

      targetUnitId = foundUnit;
    }

    return await prisma.$transaction(async (tx) => {
      const updated = await tx.reservation.update({
        where: { id: reservationId },
        data: {
          status: nextStatus,
          unitId: targetUnitId,
          cancellationReason: null,
        },
      });

      // Re-create or reactivate UnitOccupancy
      await tx.unitOccupancy.create({
        data: {
          unitId: targetUnitId!,
          reservationId,
          type: 'RESERVATION',
          checkIn: reservation.checkIn,
          checkOut: reservation.checkOut,
          status: 'ACTIVE',
        },
      });

      return updated;
    });
  }

  // Standard update (e.g. PENDING -> CONFIRMED)
  return await prisma.reservation.update({
    where: { id: reservationId },
    data: { status: nextStatus },
  });
}

export async function assignUnitToReservation(reservationId: string, unitId: string) {
  const reservation = await prisma.reservation.findUnique({
    where: { id: reservationId },
  });

  if (!reservation) {
    throw new Error('Reserva no encontrada');
  }

  const isFree = await isUnitAvailableForStay(
    unitId,
    reservation.checkIn,
    reservation.checkOut,
    reservationId,
  );

  if (!isFree) {
    const err: any = new Error('La unidad seleccionada ya está ocupada en ese rango de fechas.');
    err.statusCode = 409;
    throw err;
  }

  return await prisma.$transaction(async (tx) => {
    const updated = await tx.reservation.update({
      where: { id: reservationId },
      data: { unitId },
    });

    // Update UnitOccupancy to point to the new unit
    await tx.unitOccupancy.updateMany({
      where: { reservationId, status: 'ACTIVE' },
      data: { unitId },
    });

    return updated;
  });
}
