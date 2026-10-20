import prisma from '@/lib/db/client';
import { calculateStayPrice, PricingResult } from '@/lib/pricing/calculator';
import { getCategoryAvailableUnitsCount } from '@/lib/occupancy/soft-lock';
import { calculateNights } from '@/lib/utils/date';

export interface AvailabilitySearchQuery {
  checkIn: string; // YYYY-MM-DD
  checkOut: string; // YYYY-MM-DD
  adults: number;
  children?: number;
  currency?: 'ARS' | 'USD';
}

export interface CategoryAvailabilityResult {
  id: string;
  slug: string;
  name: string;
  description: string | null;
  maxOccupancy: number;
  capacityAdults: number;
  capacityChildren: number;
  availableUnitsCount: number;
  pricing: PricingResult;
  images: string[];
}

export interface AvailabilitySearchResponse {
  search: {
    checkIn: string;
    checkOut: string;
    nights: number;
    adults: number;
    children: number;
    currency: 'ARS' | 'USD';
  };
  categories: CategoryAvailabilityResult[];
}

export async function searchAvailability(
  query: AvailabilitySearchQuery,
): Promise<AvailabilitySearchResponse> {
  const { checkIn, checkOut, adults, children = 0, currency = 'ARS' } = query;
  const nights = calculateNights(checkIn, checkOut);

  if (nights <= 0) {
    throw new Error('Check-out date must be after check-in date');
  }

  const totalGuests = adults + children;

  // 1. Fetch active categories that satisfy guests count
  const allCategories = await prisma.category.findMany({
    where: {
      isActive: true,
      maxOccupancy: { gte: totalGuests },
      capacityAdults: { gte: adults },
    },
    orderBy: { displayOrder: 'asc' },
    include: {
      seasonPrices: {
        include: { season: true },
        where: {
          season: { isActive: true },
        },
      },
    },
  });

  // 2. Fetch active discount rules
  const discountRules = await prisma.discountRule.findMany({
    where: { isActive: true },
    orderBy: { minNights: 'asc' },
  });

  const availableCategories: CategoryAvailabilityResult[] = [];

  for (const cat of allCategories) {
    // Check available units count
    const { availableUnits } = await getCategoryAvailableUnitsCount(cat.id, checkIn, checkOut);

    if (availableUnits > 0) {
      // Map season prices
      const formattedSeasonPrices = cat.seasonPrices.map((sp) => ({
        seasonName: sp.season.name,
        startDate: sp.season.startDate,
        endDate: sp.season.endDate,
        minStayNights: sp.season.minStayNights,
        priceArs: Number(sp.priceArs),
        priceUsd: Number(sp.priceUsd),
      }));

      // Check season minimum stay if requested stay overlaps with any season having minStayNights > nights
      // We will compute pricing
      const pricing = calculateStayPrice({
        checkIn,
        checkOut,
        basePriceArs: Number(cat.basePriceArs),
        basePriceUsd: Number(cat.basePriceUsd),
        currency,
        discountRules: discountRules.map((r) => ({
          minNights: r.minNights,
          discountPercent: r.discountPercent,
        })),
        seasonPrices: formattedSeasonPrices,
      });

      let images: string[] = [];
      if (Array.isArray(cat.images)) {
        images = cat.images as string[];
      } else if (typeof cat.images === 'string') {
        try {
          images = JSON.parse(cat.images);
        } catch {
          images = [];
        }
      }

      availableCategories.push({
        id: cat.id,
        slug: cat.slug,
        name: cat.name,
        description: cat.description,
        maxOccupancy: cat.maxOccupancy,
        capacityAdults: cat.capacityAdults,
        capacityChildren: cat.capacityChildren,
        availableUnitsCount: availableUnits,
        pricing,
        images,
      });
    }
  }

  return {
    search: {
      checkIn,
      checkOut,
      nights,
      adults,
      children,
      currency,
    },
    categories: availableCategories,
  };
}
