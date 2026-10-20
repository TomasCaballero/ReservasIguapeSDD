import { describe, it, expect, beforeEach, afterAll } from 'vitest';
import prisma from '@/lib/db/client';
import { cleanDb, endPool } from '@/tests/e2e/db';
import { acquireSoftLock, releaseSoftLock, getUnitAvailability } from '@/lib/occupancy/soft-lock';

describe('Soft Lock & Concurrency Integration (US1)', () => {
  beforeEach(async () => {
    await cleanDb();
  });

  afterAll(async () => {
    await prisma.$disconnect();
    await endPool();
  });

  it('acquires a 15-minute soft lock on an available physical unit', async () => {
    const category = await prisma.category.findUnique({ where: { slug: 'classic' } });
    expect(category).not.toBeNull();

    const checkIn = new Date('2027-02-10T00:00:00Z');
    const checkOut = new Date('2027-02-14T00:00:00Z');

    const lock = await acquireSoftLock({
      categoryId: category!.id,
      checkIn,
      checkOut,
    });

    expect(lock).not.toBeNull();
    expect(lock.lockToken).toHaveLength(64);
    expect(lock.expiresInSeconds).toBe(900); // 15 min = 900s

    // Check that occupancy was recorded in UnitOccupancy
    const record = await prisma.unitOccupancy.findFirst({
      where: { lockToken: lock.lockToken },
    });
    expect(record).not.toBeNull();
    expect(record?.type).toBe('SOFT_LOCK');
    expect(record?.status).toBe('ACTIVE');
  });

  it('prevents overbooking when units are fully locked', async () => {
    const category = await prisma.category.findUnique({
      where: { slug: 'de-luxe' },
      include: { units: true },
    });
    expect(category).not.toBeNull();
    // De Luxe has 1 unit
    expect(category!.units.length).toBe(1);

    const checkIn = new Date('2027-03-01T00:00:00Z');
    const checkOut = new Date('2027-03-05T00:00:00Z');

    // First user locks it
    const lock1 = await acquireSoftLock({
      categoryId: category!.id,
      checkIn,
      checkOut,
    });
    expect(lock1).not.toBeNull();

    // Second user attempts to lock the same dates for De Luxe
    await expect(
      acquireSoftLock({
        categoryId: category!.id,
        checkIn,
        checkOut,
      }),
    ).rejects.toThrow('No units available');
  });
});
