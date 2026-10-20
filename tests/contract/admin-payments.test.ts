import { describe, it, expect, beforeEach, afterAll } from 'vitest';
import prisma from '@/lib/db/client';
import { cleanDb, endPool } from '@/tests/e2e/db';
import { POST as registerPayment } from '@/app/api/admin/reservations/[id]/payments/route';
import { POST as cronTick } from '@/app/api/cron/tick/route';
import { NextRequest } from 'next/server';

describe('Admin Payments & Cron Contracts (US4)', () => {
  let reservationId: string;

  beforeEach(async () => {
    await cleanDb();

    // Create guest and reservation
    const cat = await prisma.category.findFirst();
    const guest = await prisma.guest.create({
      data: {
        docType: 'DNI',
        docNumber: '99887766',
        firstName: 'Carlos',
        lastName: 'Gómez',
        email: 'carlos@example.com',
        phone: '+5491100000000',
      },
    });

    const res = await prisma.reservation.create({
      data: {
        code: 'IG-TEST01',
        categoryId: cat!.id,
        guestId: guest.id,
        checkIn: new Date('2027-08-01'),
        checkOut: new Date('2027-08-05'),
        adults: 2,
        currency: 'ARS',
        subtotal: 300000,
        totalPrice: 300000,
        status: 'PENDING',
      },
    });
    reservationId = res.id;
  });

  afterAll(async () => {
    await prisma.$disconnect();
    await endPool();
  });

  it('POST /api/admin/reservations/[id]/payments records manual payment', async () => {
    const formData = new FormData();
    formData.append('amount', '150000');
    formData.append('currency', 'ARS');
    formData.append('paymentMethod', 'TRANSFER_ARS');
    formData.append('notes', 'Seña 50% por transferencia Santander');

    const req = new NextRequest(
      `http://localhost:7777/api/admin/reservations/${reservationId}/payments`,
      {
        method: 'POST',
        body: formData,
      },
    );

    const res = await registerPayment(req, { params: Promise.resolve({ id: reservationId }) });
    expect(res.status).toBe(201);
    const data = await res.json();
    expect(data.id).toBeDefined();
    expect(Number(data.amount)).toBe(150000);
  });

  it('POST /api/cron/tick runs maintenance with CRON_SECRET authorization', async () => {
    const req = new NextRequest('http://localhost:7777/api/cron/tick', {
      method: 'POST',
      headers: {
        authorization: `Bearer ${process.env.CRON_SECRET}`,
      },
    });

    const res = await cronTick(req);
    expect(res.status).toBe(200);
    const data = await res.json();
    expect(data.expiredReservationsCount).toBeDefined();
    expect(data.purgedReceiptsCount).toBeDefined();
  });
});
