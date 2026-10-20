import { describe, it, expect } from 'vitest';
import { isBirthdayInNext30Days, calculateUpcomingBirthdays } from '@/lib/guests/crm';

describe('Guest CRM Unit Logic (US6)', () => {
  describe('Birthday window calculation', () => {
    it('detects a birthday occurring within the next 30 days', () => {
      // Reference date: 2026-10-20
      const refDate = new Date(2026, 9, 20); // October 20, 2026

      // Birthday on October 25 (5 days away)
      const bday1 = new Date(1990, 9, 25);
      expect(isBirthdayInNext30Days(bday1, refDate)).toBe(true);

      // Birthday on November 10 (21 days away)
      const bday2 = new Date(1985, 10, 10);
      expect(isBirthdayInNext30Days(bday2, refDate)).toBe(true);

      // Birthday on November 25 (36 days away - out of range)
      const bday3 = new Date(1988, 10, 25);
      expect(isBirthdayInNext30Days(bday3, refDate)).toBe(false);

      // Birthday in the past: October 10
      const bday4 = new Date(1992, 9, 10);
      expect(isBirthdayInNext30Days(bday4, refDate)).toBe(false);
    });

    it('handles February 29 on non-leap years as February 28', () => {
      // 2027 is a non-leap year
      const refDate = new Date(2027, 1, 15); // February 15, 2027

      // Born on leap year Feb 29, 2000
      const leapBorn = new Date(2000, 1, 29);

      // In 2027, birthday is treated as Feb 28 (13 days away -> within 30 days)
      expect(isBirthdayInNext30Days(leapBorn, refDate)).toBe(true);

      // If reference date is March 1, 2027, Feb 28 has already passed
      const refAfter = new Date(2027, 2, 1);
      expect(isBirthdayInNext30Days(leapBorn, refAfter)).toBe(false);
    });
  });
});
