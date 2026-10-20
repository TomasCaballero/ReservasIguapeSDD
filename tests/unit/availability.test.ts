import { describe, it, expect } from 'vitest';
import { calculateStayPrice } from '@/lib/pricing/calculator';
import { calculateNights, getNightDates } from '@/lib/utils/date';

describe('Availability & Pricing Logic (US1)', () => {
  it('calculates correct number of nights and night dates (check-out date is free)', () => {
    const checkIn = '2027-01-15';
    const checkOut = '2027-01-19';

    const nights = calculateNights(checkIn, checkOut);
    expect(nights).toBe(4);

    const nightDates = getNightDates(checkIn, checkOut);
    expect(nightDates).toHaveLength(4);
    expect(nightDates[0].toISOString().split('T')[0]).toBe('2027-01-15');
    expect(nightDates[3].toISOString().split('T')[0]).toBe('2027-01-18');
  });

  it('calculates total price with base rates and applies the highest non-cumulative discount', () => {
    // 4 nights at $85,000 ARS base rate = $340,000 ARS subtotal
    // Rules: 3 nights -> 10%, 5 nights -> 15%
    // Highest discount for 4 nights is 10%
    const pricing = calculateStayPrice({
      checkIn: new Date('2027-01-15T00:00:00Z'),
      checkOut: new Date('2027-01-19T00:00:00Z'),
      basePriceArs: 85000,
      basePriceUsd: 85,
      currency: 'ARS',
      discountRules: [
        { minNights: 3, discountPercent: 10 },
        { minNights: 5, discountPercent: 15 },
      ],
      seasonPrices: [],
    });

    expect(pricing.subtotal).toBe(340000);
    expect(pricing.appliedDiscountPercent).toBe(10);
    expect(pricing.discountAmount).toBe(34000);
    expect(pricing.totalPrice).toBe(306000);
    expect(pricing.nightlyBreakdown).toHaveLength(4);
  });

  it('calculates total price in USD correctly without currency conversion', () => {
    const pricing = calculateStayPrice({
      checkIn: new Date('2027-01-15T00:00:00Z'),
      checkOut: new Date('2027-01-17T00:00:00Z'), // 2 nights
      basePriceArs: 85000,
      basePriceUsd: 85,
      currency: 'USD',
      discountRules: [{ minNights: 3, discountPercent: 10 }],
      seasonPrices: [],
    });

    expect(pricing.currency).toBe('USD');
    expect(pricing.subtotal).toBe(170);
    expect(pricing.appliedDiscountPercent).toBe(0);
    expect(pricing.discountAmount).toBe(0);
    expect(pricing.totalPrice).toBe(170);
  });
});
