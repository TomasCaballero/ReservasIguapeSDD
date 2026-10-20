import { calculateNights, getNightDates, formatDateISO } from '@/lib/utils/date';

export interface DiscountRuleInput {
  minNights: number;
  discountPercent: number;
}

export interface SeasonPriceInput {
  seasonName: string;
  startDate: Date;
  endDate: Date;
  minStayNights?: number;
  priceArs: number;
  priceUsd: number;
}

export interface PricingCalculationInput {
  checkIn: Date | string;
  checkOut: Date | string;
  basePriceArs: number;
  basePriceUsd: number;
  currency: 'ARS' | 'USD';
  discountRules?: DiscountRuleInput[];
  seasonPrices?: SeasonPriceInput[];
}

export interface NightlyRate {
  date: string;
  rate: number;
  season?: string;
}

export interface PricingResult {
  currency: 'ARS' | 'USD';
  baseNightlyPrice: number;
  subtotal: number;
  appliedDiscountPercent: number;
  discountAmount: number;
  totalPrice: number;
  nightlyBreakdown: NightlyRate[];
}

export function calculateStayPrice(input: PricingCalculationInput): PricingResult {
  const { checkIn, checkOut, basePriceArs, basePriceUsd, currency, discountRules = [], seasonPrices = [] } = input;

  const nights = calculateNights(checkIn, checkOut);
  if (nights <= 0) {
    throw new Error('Check-out must be after check-in');
  }

  const nightDates = getNightDates(checkIn, checkOut);
  const baseRate = currency === 'ARS' ? Number(basePriceArs) : Number(basePriceUsd);

  const nightlyBreakdown: NightlyRate[] = [];
  let subtotal = 0;

  // Enforce season minimum stay when any night touches a season (RF-14, AC-23)
  for (const nightDate of nightDates) {
    const isoDate = formatDateISO(nightDate);
    const touchingSeason = seasonPrices.find((sp) => {
      const sStartIso = formatDateISO(new Date(sp.startDate));
      const sEndIso = formatDateISO(new Date(sp.endDate));
      return isoDate >= sStartIso && isoDate <= sEndIso;
    });

    if (touchingSeason && touchingSeason.minStayNights && nights < touchingSeason.minStayNights) {
      throw new Error(
        `La temporada "${touchingSeason.seasonName}" requiere una estadía mínima de ${touchingSeason.minStayNights} noches.`,
      );
    }
  }

  for (const nightDate of nightDates) {
    const isoDate = formatDateISO(nightDate);

    // Check if this specific night falls within an active season
    const matchingSeason = seasonPrices.find((sp) => {
      const sStartIso = formatDateISO(new Date(sp.startDate));
      const sEndIso = formatDateISO(new Date(sp.endDate));
      return isoDate >= sStartIso && isoDate <= sEndIso;
    });

    let nightRate = baseRate;
    let seasonName: string | undefined;

    if (matchingSeason) {
      nightRate = currency === 'ARS' ? Number(matchingSeason.priceArs) : Number(matchingSeason.priceUsd);
      seasonName = matchingSeason.seasonName;
    }

    subtotal += nightRate;
    nightlyBreakdown.push({
      date: isoDate,
      rate: nightRate,
      season: seasonName,
    });
  }

  // Discount resolution: highest percentage wins, strictly non-cumulative (RF-16, AC-24)
  let appliedDiscountPercent = 0;
  for (const rule of discountRules) {
    if (nights >= rule.minNights && rule.discountPercent > appliedDiscountPercent) {
      appliedDiscountPercent = rule.discountPercent;
    }
  }

  const discountAmount = Math.round(((subtotal * appliedDiscountPercent) / 100) * 100) / 100;
  const totalPrice = Math.round((subtotal - discountAmount) * 100) / 100;

  return {
    currency,
    baseNightlyPrice: baseRate,
    subtotal: Math.round(subtotal * 100) / 100,
    appliedDiscountPercent,
    discountAmount,
    totalPrice,
    nightlyBreakdown,
  };
}
