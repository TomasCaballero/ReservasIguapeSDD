import { randomUUID } from 'crypto';
import prisma from '@/lib/db/client';

/**
 * Irreversibly anonymizes guest and companions personal data per Ley 25.326 (RF-63, RF-64, AC-97).
 * Preserves financial, occupancy, and accounting records intact.
 */
export async function anonymizeGuestData(guestId: string): Promise<void> {
  const anonSuffix = randomUUID().substring(0, 8);

  await prisma.$transaction(async (tx) => {
    // 1. Mask guest personal details
    await tx.guest.update({
      where: { id: guestId },
      data: {
        firstName: 'ANONIMIZADO',
        lastName: 'ANONIMIZADO',
        email: `anonimo-${anonSuffix}@anonymized.local`,
        phone: '0000000000',
        docNumber: `ANON-${anonSuffix}`,
        birthDate: null,
      },
    });

    // 2. Mask companions for any reservations associated with this guest
    const reservations = await tx.reservation.findMany({
      where: { guestId },
      select: { id: true },
    });

    const resIds = reservations.map((r) => r.id);
    if (resIds.length > 0) {
      await tx.companion.updateMany({
        where: {
          reservationId: { in: resIds },
        },
        data: {
          firstName: 'ANONIMIZADO',
          lastName: 'ANONIMIZADO',
          docNumber: null,
          birthDate: null,
        },
      });
    }

    // 3. Update or mark AnonymizationRequest
    const existingReq = await tx.anonymizationRequest.findFirst({
      where: { guestId, status: 'PENDING' },
    });

    if (existingReq) {
      await tx.anonymizationRequest.update({
        where: { id: existingReq.id },
        data: {
          status: 'COMPLETED',
          completedAt: new Date(),
        },
      });
    } else {
      await tx.anonymizationRequest.create({
        data: {
          guestId,
          deadlineAt: new Date(),
          completedAt: new Date(),
          status: 'COMPLETED',
        },
      });
    }
  });
}
