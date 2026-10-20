import { describe, it, expect } from 'vitest';
import { calculateStayPrice } from '@/lib/pricing/calculator';

describe('Seasonal Pricing & Minimum Stay Rules (US3)', () => {
  it('prorates nightly rates across season and out-of-season nights', () => {
    // Base rate: $80,000 ARS
    // Season "Alta Verano": Jan 10 to Jan 12 at $100,000 ARS
    // Stay: Jan 10 to Jan 14 (4 nights):
    // - Jan 10: $100,000 (Season)
    // - Jan 11: $100,000 (Season)
    // - Jan 12: $100,000 (Season)
    // - Jan 13: $80,000 (Base)
    // Subtotal: 380,000
    const result = calculateStayPrice({
      checkIn: '2027-01-10',
      checkOut: '2027-01-14',
      basePriceArs: 80000,
      basePriceUsd: 80,
      currency: 'ARS',
      seasonPrices: [
        {
          seasonName: 'Alta Verano',
          startDate: new Date('2027-01-10T00:00:00Z'),
          endDate: new Date('2027-01-12T00:00:00Z'),
          minStayNights: 2,
          priceArs: 100000,
          priceUsd: 100,
        },
      ],
      discountRules: [],
    });

    expect(result.subtotal).toBe(380000);
    expect(result.nightlyBreakdown[0].rate).toBe(100000);
    expect(result.nightlyBreakdown[1].rate).toBe(100000);
    expect(result.nightlyBreakdown[2].rate).toBe(100000);
    expect(result.nightlyBreakdown[3].rate).toBe(80000);
  });

  it('enforces season minimum stay requirement when stay touches a season', () => {
    // Season requires minimum 4 nights
    expect(() =>
      calculateStayPrice({
        checkIn: '2027-01-10',
        checkOut: '2027-01-12', // 2 nights
        basePriceArs: 80000,
        basePriceUsd: 80,
        currency: 'ARS',
        seasonPrices: [
          {
            seasonName: 'Temporada Especial',
            startDate: new Date('2027-01-08T00:00:00Z'),
            endDate: new Date('2027-01-15T00:00:00Z'),
            minStayNights: 4,
            priceArs: 110000,
            priceUsd: 110,
          },
        ],
      }),
    ).toThrow(/mínima/i);
  });
});
