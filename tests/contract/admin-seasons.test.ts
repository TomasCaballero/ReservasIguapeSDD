import { describe, it, expect, beforeEach, afterAll } from 'vitest';
import prisma from '@/lib/db/client';
import { cleanDb, endPool } from '@/tests/e2e/db';
import { GET as getSeasons, POST as createSeason } from '@/app/api/admin/seasons/route';
import { GET as getDiscounts, POST as createDiscount } from '@/app/api/admin/discounts/route';
import { NextRequest } from 'next/server';

describe('Admin Seasons & Discounts Contracts (US3)', () => {
  beforeEach(async () => {
    await cleanDb();
  });

  afterAll(async () => {
    await prisma.$disconnect();
    await endPool();
  });

  it('GET /api/admin/seasons and POST /api/admin/seasons manages seasons with category prices', async () => {
    const category = await prisma.category.findFirst();
    expect(category).not.toBeNull();

    const postReq = new NextRequest('http://localhost:7777/api/admin/seasons', {
      method: 'POST',
      body: JSON.stringify({
        name: 'Temporada Invierno 2027',
        startDate: '2027-07-01',
        endDate: '2027-07-31',
        minStayNights: 3,
        seasonPrices: [
          {
            categoryId: category!.id,
            priceArs: 140000,
            priceUsd: 140,
          },
        ],
      }),
    });

    const postRes = await createSeason(postReq);
    expect(postRes.status).toBe(201);

    const getRes = await getSeasons();
    expect(getRes.status).toBe(200);
    const seasons = await getRes.json();
    expect(seasons.length).toBeGreaterThan(0);
    expect(seasons.some((s: any) => s.name === 'Temporada Invierno 2027')).toBe(true);
  });

  it('GET /api/admin/discounts and POST /api/admin/discounts manages discount rules', async () => {
    const postReq = new NextRequest('http://localhost:7777/api/admin/discounts', {
      method: 'POST',
      body: JSON.stringify({
        minNights: 10,
        discountPercent: 25,
      }),
    });

    const postRes = await createDiscount(postReq);
    expect(postRes.status).toBe(201);

    const getRes = await getDiscounts();
    expect(getRes.status).toBe(200);
    const rules = await getRes.json();
    expect(rules.some((r: any) => r.minNights === 10 && r.discountPercent === 25)).toBe(true);
  });
});
