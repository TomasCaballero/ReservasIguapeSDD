import { describe, it, expect, beforeEach, afterAll } from 'vitest';
import prisma from '@/lib/db/client';
import { cleanDb, endPool } from '@/tests/e2e/db';
import { GET as getAvailability } from '@/app/api/public/availability/route';
import { POST as postSoftLock } from '@/app/api/public/soft-lock/route';
import { POST as postBookings } from '@/app/api/public/bookings/route';
import { NextRequest } from 'next/server';

describe('Public API Contracts (US1)', () => {
  beforeEach(async () => {
    await cleanDb();
  });

  afterAll(async () => {
    await prisma.$disconnect();
    await endPool();
  });

  it('GET /api/public/availability returns 200 with categories and pricing', async () => {
    const req = new NextRequest(
      'http://localhost:7777/api/public/availability?checkIn=2027-04-10&checkOut=2027-04-14&adults=2&children=0&currency=ARS',
    );
    const res = await getAvailability(req);
    expect(res.status).toBe(200);

    const data = await res.json();
    expect(data.search).toBeDefined();
    expect(data.search.nights).toBe(4);
    expect(Array.isArray(data.categories)).toBe(true);
    expect(data.categories.length).toBeGreaterThan(0);
    expect(data.categories[0].pricing.totalPrice).toBeGreaterThan(0);
  });

  it('POST /api/public/soft-lock returns 201 with lockToken', async () => {
    const category = await prisma.category.findUnique({ where: { slug: 'classic' } });
    expect(category).not.toBeNull();

    const body = {
      categoryId: category!.id,
      checkIn: '2027-05-01',
      checkOut: '2027-05-05',
    };

    const req = new NextRequest('http://localhost:7777/api/public/soft-lock', {
      method: 'POST',
      body: JSON.stringify(body),
    });

    const res = await postSoftLock(req);
    expect(res.status).toBe(201);
    const data = await res.json();
    expect(data.lockToken).toBeDefined();
    expect(data.expiresInSeconds).toBe(900);
  });

  it('POST /api/public/bookings converts soft lock to confirmed PENDING reservation', async () => {
    const category = await prisma.category.findUnique({ where: { slug: 'classic' } });

    // 1. Get soft lock
    const lockReq = new NextRequest('http://localhost:7777/api/public/soft-lock', {
      method: 'POST',
      body: JSON.stringify({
        categoryId: category!.id,
        checkIn: '2027-06-10',
        checkOut: '2027-06-14',
      }),
    });
    const lockRes = await postSoftLock(lockReq);
    const { lockToken } = await lockRes.json();

    // 2. Submit booking
    const bookingBody = {
      categoryId: category!.id,
      checkIn: '2027-06-10',
      checkOut: '2027-06-14',
      adults: 2,
      children: 1,
      currency: 'ARS',
      guest: {
        docType: 'DNI',
        docNumber: '35892104',
        firstName: 'Juan',
        lastName: 'Pérez',
        email: 'juan.perez@example.com',
        phone: '+5491145678901',
        birthDate: '1988-06-20',
      },
      companions: [
        {
          firstName: 'María',
          lastName: 'Gómez',
          docType: 'DNI',
          docNumber: '37123456',
          birthDate: '1990-11-14',
        },
      ],
      notes: 'Llegada aproximada a las 15 hs',
    };

    const bookingReq = new NextRequest('http://localhost:7777/api/public/bookings', {
      method: 'POST',
      headers: {
        'x-soft-lock-token': lockToken,
      },
      body: JSON.stringify(bookingBody),
    });

    const bookingRes = await postBookings(bookingReq);
    expect(bookingRes.status).toBe(201);

    const bookingData = await bookingRes.json();
    expect(bookingData.bookingCode).toMatch(/^IG-[A-Z0-9]{6}$/);
    expect(bookingData.status).toBe('PENDING');
  });
});
