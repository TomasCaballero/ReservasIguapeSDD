import prisma from '@/lib/db/client';

export async function getAllSeasons() {
  return await prisma.season.findMany({
    include: {
      seasonPrices: {
        include: { category: true },
      },
    },
    orderBy: { startDate: 'asc' },
  });
}

export async function createSeason(data: {
  name: string;
  startDate: string;
  endDate: string;
  minStayNights?: number;
  seasonPrices?: Array<{
    categoryId: string;
    priceArs: number;
    priceUsd: number;
  }>;
}) {
  const { name, startDate, endDate, minStayNights = 1, seasonPrices = [] } = data;

  return await prisma.season.create({
    data: {
      name,
      startDate: new Date(startDate),
      endDate: new Date(endDate),
      minStayNights: Number(minStayNights),
      isActive: true,
      seasonPrices: {
        create: seasonPrices.map((sp) => ({
          categoryId: sp.categoryId,
          priceArs: Number(sp.priceArs),
          priceUsd: Number(sp.priceUsd),
        })),
      },
    },
    include: { seasonPrices: true },
  });
}

export async function getAllDiscounts() {
  return await prisma.discountRule.findMany({
    orderBy: { minNights: 'asc' },
  });
}

export async function createDiscount(data: { minNights: number; discountPercent: number }) {
  return await prisma.discountRule.create({
    data: {
      minNights: Number(data.minNights),
      discountPercent: Number(data.discountPercent),
      isActive: true,
    },
  });
}
