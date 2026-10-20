import { format, parse, differenceInCalendarDays, addDays, startOfDay } from 'date-fns';
import { toZonedTime, format as formatTz } from 'date-fns-tz';

export const TIMEZONE = 'America/Argentina/Buenos_Aires';
export const DISPLAY_DATE_FORMAT = 'dd/MM/yyyy';
export const ISO_DATE_FORMAT = 'yyyy-MM-dd';

/**
 * Returns today's date in America/Argentina/Buenos_Aires timezone as a Date object at 00:00:00 UTC
 */
export function getTodayInArgentina(): Date {
  const now = new Date();
  const zonedNow = toZonedTime(now, TIMEZONE);
  const dateStr = format(zonedNow, ISO_DATE_FORMAT);
  return parse(dateStr, ISO_DATE_FORMAT, new Date());
}

/**
 * Formats a Date or ISO string into canonical display format: dd/MM/yyyy
 */
export function formatDateDisplay(date: Date | string): string {
  const d = typeof date === 'string' ? parseDateString(date) : date;
  return format(d, DISPLAY_DATE_FORMAT);
}

/**
 * Formats a Date into standard ISO string: yyyy-MM-dd
 * Uses UTC date components so DB date fields remain untouched by local timezone offsets
 */
export function formatDateISO(date: Date): string {
  if (isNaN(date.getTime())) return '';
  return date.toISOString().split('T')[0];
}

/**
 * Parses either 'dd/MM/yyyy' or 'yyyy-MM-dd' into a clean UTC Date object at start of day
 */
export function parseDateString(str: string): Date {
  if (str.includes('/')) {
    const [dd, mm, yyyy] = str.split('/');
    return new Date(`${yyyy}-${mm.padStart(2, '0')}-${dd.padStart(2, '0')}T00:00:00.000Z`);
  }
  return new Date(`${str}T00:00:00.000Z`);
}

/**
 * Calculates number of nights between checkIn and checkOut
 * Must be >= 1 for valid booking
 */
export function calculateNights(checkIn: Date | string, checkOut: Date | string): number {
  const dIn = typeof checkIn === 'string' ? parseDateString(checkIn) : startOfDay(checkIn);
  const dOut = typeof checkOut === 'string' ? parseDateString(checkOut) : startOfDay(checkOut);
  return differenceInCalendarDays(dOut, dIn);
}

/**
 * Generates an array of Date objects for each night occupied.
 * Invariant: Check-out date is free (a stay from 10 to 14 occupies nights 10, 11, 12, 13).
 */
export function getNightDates(checkIn: Date | string, checkOut: Date | string): Date[] {
  const dIn = typeof checkIn === 'string' ? parseDateString(checkIn) : startOfDay(checkIn);
  const nights = calculateNights(checkIn, checkOut);
  if (nights <= 0) return [];

  const result: Date[] = [];
  for (let i = 0; i < nights; i++) {
    result.push(addDays(dIn, i));
  }
  return result;
}
