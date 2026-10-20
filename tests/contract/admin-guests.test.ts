import { describe, it, expect, beforeEach, afterAll } from 'vitest';
import prisma from '@/lib/db/client';
import { cleanDb, endPool } from '@/tests/e2e/db';
import { GET as getGuests } from '@/app/api/admin/guests/route';
import { GET as getUpcomingBirthdays } from '@/app/api/admin/guests/upcoming-birthdays/route';
import { POST as anonymizeGuest } from '@/app/api/admin/guests/[id]/anonymize/route';
import { NextRequest } from 'next/server';

describe('Admin Guest CRM API Contracts (US6)', () => {
  let guestId: string;

  beforeEach(async () => {
    await cleanDb();

    // Create a test guest
    const guest = await prisma.guest.create({
      data: {
        docType: 'DNI',
        docNumber: '99887766',
        firstName: 'Carlos',
        lastName: 'Gomez',
        email: 'carlos@example.com',
        phone: '+5491100001111',
        birthDate: new Date('1990-10-25T00:00:00Z'),
      },
    });
    guestId = guest.id;
  });

  afterAll(async () => {
    await prisma.$disconnect();
    await endPool();
  });

  it('GET /api/admin/guests returns list of guests', async () => {
    const res = await getGuests();
    expect(res.status).toBe(200);
    const data = await res.json();
    expect(Array.isArray(data)).toBe(true);
    expect(data.length).toBeGreaterThan(0);
    expect(data[0].docNumber).toBe('99887766');
  });

  it('GET /api/admin/guests/upcoming-birthdays returns guests with upcoming birthdays', async () => {
    const res = await getUpcomingBirthdays();
    expect(res.status).toBe(200);
    const data = await res.json();
    expect(Array.isArray(data)).toBe(true);
  });

  it('POST /api/admin/guests/[id]/anonymize masks personal data permanently', async () => {
    const req = new NextRequest(`http://localhost:7777/api/admin/guests/${guestId}/anonymize`, {
      method: 'POST',
    });
    const res = await anonymizeGuest(req, { params: Promise.resolve({ id: guestId }) });
    expect(res.status).toBe(200);

    const updated = await prisma.guest.findUnique({ where: { id: guestId } });
    expect(updated).not.toBeNull();
    expect(updated!.firstName).toBe('ANONIMIZADO');
    expect(updated!.lastName).toBe('ANONIMIZADO');
    expect(updated!.email).toContain('anonymized');
    expect(updated!.phone).toBe('0000000000');
    expect(updated!.docNumber).not.toBe('99887766');
  });
});
