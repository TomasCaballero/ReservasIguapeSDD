import prisma from '@/lib/db/client';
import { deleteReceiptFile } from '@/lib/storage/receipts';

const FIVE_DAYS_MS = 5 * 24 * 60 * 60 * 1000;
const THREE_MONTHS_MS = 90 * 24 * 60 * 60 * 1000;

export function isReservationExpired(
  status: string,
  paymentMethodSentAt?: Date | null,
): boolean {
  if (status !== 'PENDING' || !paymentMethodSentAt) return false;
  return Date.now() - new Date(paymentMethodSentAt).getTime() > FIVE_DAYS_MS;
}

export async function expirePendingReservations(): Promise<number> {
  const cutoff = new Date(Date.now() - FIVE_DAYS_MS);

  const expiredList = await prisma.reservation.findMany({
    where: {
      status: 'PENDING',
      paymentMethodSentAt: { lt: cutoff },
    },
    select: { id: true },
  });

  if (expiredList.length === 0) return 0;

  const expiredIds = expiredList.map((r) => r.id);

  await prisma.$transaction(async (tx) => {
    await tx.reservation.updateMany({
      where: { id: { in: expiredIds } },
      data: {
        status: 'CANCELLED',
        cancellationReason: 'Vencimiento automático de plazo de pago (5 días)',
      },
    });

    await tx.unitOccupancy.updateMany({
      where: { reservationId: { in: expiredIds }, status: 'ACTIVE' },
      data: { status: 'RELEASED' },
    });
  });

  return expiredIds.length;
}

export async function purgeOldReceipts(): Promise<number> {
  const cutoff = new Date(Date.now() - THREE_MONTHS_MS);

  const oldPayments = await prisma.payment.findMany({
    where: {
      createdAt: { lt: cutoff },
      receiptPath: { not: null },
    },
  });

  let purgedCount = 0;
  for (const payment of oldPayments) {
    if (payment.receiptPath) {
      await deleteReceiptFile(payment.receiptPath);
      await prisma.payment.update({
        where: { id: payment.id },
        data: { receiptPath: null },
      });
      purgedCount++;
    }
  }

  return purgedCount;
}
