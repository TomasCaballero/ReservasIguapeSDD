import { describe, it, expect } from 'vitest';
import { generateIcalFeed, parseIcalFeed } from '@/lib/ical/sync';

describe('iCalendar RFC 5545 (US5)', () => {
  it('generates anonymous RFC 5545 feed without exposing guest data', () => {
    const occupancies = [
      {
        id: 'occ-1',
        checkIn: new Date('2027-09-10T00:00:00Z'),
        checkOut: new Date('2027-09-15T00:00:00Z'),
        type: 'RESERVATION',
      },
      {
        id: 'occ-2',
        checkIn: new Date('2027-09-20T00:00:00Z'),
        checkOut: new Date('2027-09-25T00:00:00Z'),
        type: 'MANUAL_BLOCK',
      },
    ];

    const icsContent = generateIcalFeed('Dpto 1 - PB', occupancies);

    expect(icsContent).toContain('BEGIN:VCALENDAR');
    expect(icsContent).toContain('VERSION:2.0');
    expect(icsContent).toContain('BEGIN:VEVENT');
    expect(icsContent).toContain('DTSTART;VALUE=DATE:20270910');
    expect(icsContent).toContain('DTEND;VALUE=DATE:20270915');
    expect(icsContent).toContain('SUMMARY:Iguapé Apart Ocupado');
    expect(icsContent).toContain('END:VCALENDAR');

    // Invariant: Never contains personal names or sensitive terms
    expect(icsContent).not.toContain('Juan');
    expect(icsContent).not.toContain('Pérez');
    expect(icsContent).not.toContain('email');
    expect(icsContent).not.toContain('dni');
  });

  it('parses external iCal VEVENTs correctly', () => {
    const rawIcs = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Airbnb Inc//Hosting Calendar 0.8.8//EN
BEGIN:VEVENT
DTSTART;VALUE=DATE:20271005
DTEND;VALUE=DATE:20271010
UID:airbnb-reservation-12345
SUMMARY:Airbnb (Not available)
END:VEVENT
END:VCALENDAR`;

    const events = parseIcalFeed(rawIcs);
    expect(events).toHaveLength(1);
    expect(events[0].checkIn).toBe('2027-10-05');
    expect(events[0].checkOut).toBe('2027-10-10');
  });
});
