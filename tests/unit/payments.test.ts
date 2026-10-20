import { describe, it, expect } from 'vitest';
import { isReceiptAllowed, sanitizeReceiptFilename } from '@/lib/storage/receipts';
import { isReservationExpired } from '@/lib/cron/maintenance';

describe('Payments & Storage Security Unit Tests (US4)', () => {
  it('validates allowed receipt mime types and sizes', () => {
    expect(isReceiptAllowed('application/pdf', 1024 * 1024)).toBe(true);
    expect(isReceiptAllowed('image/jpeg', 2 * 1024 * 1024)).toBe(true);
    expect(isReceiptAllowed('image/png', 5 * 1024 * 1024)).toBe(true);

    // Rejects files > 10MB
    expect(isReceiptAllowed('application/pdf', 11 * 1024 * 1024)).toBe(false);

    // Rejects unauthorized mime types
    expect(isReceiptAllowed('application/x-msdownload', 1024)).toBe(false);
    expect(isReceiptAllowed('text/javascript', 1024)).toBe(false);
  });

  it('sanitizes filename preventing path traversal', () => {
    const raw = '../../../etc/passwd.pdf';
    const sanitized = sanitizeReceiptFilename(raw);
    expect(sanitized).not.toContain('..');
    expect(sanitized).not.toContain('/');
    expect(sanitized).not.toContain('\\');
    expect(sanitized.endsWith('.pdf')).toBe(true);
  });

  it('calculates 5-day expiration after payment details sent', () => {
    const now = new Date();
    const fourDaysAgo = new Date(now.getTime() - 4 * 24 * 60 * 60 * 1000);
    const sixDaysAgo = new Date(now.getTime() - 6 * 24 * 60 * 60 * 1000);

    // 4 days ago -> not expired
    expect(isReservationExpired('PENDING', fourDaysAgo)).toBe(false);

    // 6 days ago -> expired!
    expect(isReservationExpired('PENDING', sixDaysAgo)).toBe(true);

    // If already CONFIRMED, cannot expire
    expect(isReservationExpired('CONFIRMED', sixDaysAgo)).toBe(false);
  });
});
