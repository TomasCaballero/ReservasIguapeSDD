import { describe, it, expect, beforeEach, afterAll } from 'vitest';
import prisma from '@/lib/db/client';
import { cleanDb, endPool } from '@/tests/e2e/db';
import { POST as authLogin } from '@/app/api/admin/auth/login/route';
import { GET as getCategories } from '@/app/api/admin/categories/route';
import { GET as getUnits } from '@/app/api/admin/units/route';
import { GET as getCalendar } from '@/app/api/admin/calendar/route';
import { POST as createBlock } from '@/app/api/admin/calendar/blocks/route';
import { NextRequest } from 'next/server';
import { createSessionToken, SESSION_COOKIE_NAME } from '@/lib/auth/session';

describe('Admin Inventory & Calendar Contracts (US2)', () => {
  let adminToken: string;
  let adminId: string;

  beforeEach(async () => {
    await cleanDb();
    const admin = await prisma.adminUser.findFirst();
    if (admin) {
      adminId = admin.id;
      adminToken = createSessionToken(admin.id, admin.email);
    }
  });

  afterAll(async () => {
    await prisma.$disconnect();
    await endPool();
  });

  it('POST /api/admin/auth/login authenticates with valid credentials', async () => {
    const req = new NextRequest('http://localhost:7777/api/admin/auth/login', {
      method: 'POST',
      body: JSON.stringify({
        email: 'admin@iguapeaparts.com',
        password: 'AdminPassword123!',
      }),
    });

    const res = await authLogin(req);
    expect(res.status).toBe(200);
    const data = await res.json();
    expect(data.user.email).toBe('admin@iguapeaparts.com');
  });

  it('POST /api/admin/auth/login rejects invalid credentials with 401', async () => {
    const req = new NextRequest('http://localhost:7777/api/admin/auth/login', {
      method: 'POST',
      body: JSON.stringify({
        email: 'admin@iguapeaparts.com',
        password: 'WrongPassword!',
      }),
    });

    const res = await authLogin(req);
    expect(res.status).toBe(401);
  });

  it('GET /api/admin/categories returns all categories', async () => {
    const req = new NextRequest('http://localhost:7777/api/admin/categories');
    const res = await getCategories(req);
    expect(res.status).toBe(200);
    const data = await res.json();
    expect(Array.isArray(data)).toBe(true);
    expect(data.length).toBeGreaterThanOrEqual(3);
  });

  it('GET /api/admin/calendar returns matrix of units with date occupancy', async () => {
    const req = new NextRequest(
      'http://localhost:7777/api/admin/calendar?startDate=2027-01-01&endDate=2027-01-15',
    );
    const res = await getCalendar(req);
    expect(res.status).toBe(200);
    const data = await res.json();
    expect(Array.isArray(data.units)).toBe(true);
    expect(Array.isArray(data.occupancies)).toBe(true);
  });

  it('POST /api/admin/calendar/blocks creates manual block', async () => {
    const unit = await prisma.unit.findFirst();
    expect(unit).not.toBeNull();

    const req = new NextRequest('http://localhost:7777/api/admin/calendar/blocks', {
      method: 'POST',
      body: JSON.stringify({
        unitId: unit!.id,
        checkIn: '2027-07-01',
        checkOut: '2027-07-05',
        notes: 'Mantenimiento preventivo',
      }),
    });

    const res = await createBlock(req);
    expect(res.status).toBe(201);
    const data = await res.json();
    expect(data.id).toBeDefined();
    expect(data.type).toBe('MANUAL_BLOCK');
  });
});
