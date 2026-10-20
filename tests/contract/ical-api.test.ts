import { describe, it, expect, beforeEach, afterAll } from 'vitest';
import prisma from '@/lib/db/client';
import { cleanDb, endPool } from '@/tests/e2e/db';
import { GET as getIcalFeed } from '@/app/api/ical/[unitId]/feed.ics/route';
import { POST as syncUnitIcal } from '@/app/api/admin/units/[id]/sync-ical/route';
import { NextRequest } from 'next/server';

describe('iCal Feed API Contracts (US5)', () => {
  let unitId: string;
  let validToken: string;

  beforeEach(async () => {
    await cleanDb();
    const unit = await prisma.unit.findFirst();
    expect(unit).not.toBeNull();
    unitId = unit!.id;
    validToken = unit!.icalExportToken;
  });

  afterAll(async () => {
    await prisma.$disconnect();
    await endPool();
  });

  it('GET /api/ical/[unitId]/feed.ics returns 404 on invalid or missing token', async () => {
    // Missing token
    const req1 = new NextRequest(`http://localhost:7777/api/ical/${unitId}/feed.ics`);
    const res1 = await getIcalFeed(req1, { params: Promise.resolve({ unitId }) });
    expect(res1.status).toBe(404);

    // Invalid token
    const req2 = new NextRequest(`http://localhost:7777/api/ical/${unitId}/feed.ics?token=INVALID_TOKEN_XYZ`);
    const res2 = await getIcalFeed(req2, { params: Promise.resolve({ unitId }) });
    expect(res2.status).toBe(404);
  });

  it('GET /api/ical/[unitId]/feed.ics returns 200 text/calendar with valid token', async () => {
    const req = new NextRequest(
      `http://localhost:7777/api/ical/${unitId}/feed.ics?token=${validToken}`,
    );
    const res = await getIcalFeed(req, { params: Promise.resolve({ unitId }) });
    expect(res.status).toBe(200);
    expect(res.headers.get('content-type')).toContain('text/calendar');

    const content = await res.text();
    expect(content).toContain('BEGIN:VCALENDAR');
    expect(content).toContain('END:VCALENDAR');
  });

  it('POST /api/admin/units/[id]/sync-ical triggers unit sync', async () => {
    const req = new NextRequest(`http://localhost:7777/api/admin/units/${unitId}/sync-ical`, {
      method: 'POST',
    });
    const res = await syncUnitIcal(req, { params: Promise.resolve({ id: unitId }) });
    expect(res.status).toBe(200);
    const data = await res.json();
    expect(data.success).toBe(true);
  });
});
