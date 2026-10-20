import prisma from '@/lib/db/client';
import { formatDateISO } from '@/lib/utils/date';

interface OccupancyItem {
  id: string;
  checkIn: Date;
  checkOut: Date;
  type: string;
}

export interface ParsedIcalEvent {
  checkIn: string;
  checkOut: string;
  summary?: string;
  uid?: string;
}

/**
 * Generates an RFC 5545 compliant iCalendar feed.
 * Guarantee: Never exposes personal data or guest names (RNF-06, AC-107, AC-108).
 */
export function generateIcalFeed(unitName: string, occupancies: OccupancyItem[]): string {
  const now = new Date()
    .toISOString()
    .replace(/[-:]/g, '')
    .replace(/\.\d{3}/, '');

  const lines: string[] = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Iguape Aparts//Motor Reservas 1.0//ES',
    'CALSCALE:GREGORIAN',
    `X-WR-CALNAME:Iguape Aparts - ${unitName}`,
  ];

  for (const occ of occupancies) {
    const dtstart = formatDateISO(occ.checkIn).replace(/-/g, '');
    const dtend = formatDateISO(occ.checkOut).replace(/-/g, '');

    lines.push('BEGIN:VEVENT');
    lines.push(`UID:occ-${occ.id}@iguapeaparts.com`);
    lines.push(`DTSTAMP:${now}`);
    lines.push(`DTSTART;VALUE=DATE:${dtstart}`);
    lines.push(`DTEND;VALUE=DATE:${dtend}`);
    lines.push('SUMMARY:Iguapé Apart Ocupado');
    lines.push('DESCRIPTION:Bloqueado por sistema Iguapé Aparts');
    lines.push('STATUS:CONFIRMED');
    lines.push('END:VEVENT');
  }

  lines.push('END:VCALENDAR');
  return lines.join('\r\n');
}

/**
 * Parses an external RFC 5545 iCalendar feed string.
 */
export function parseIcalFeed(rawIcs: string): ParsedIcalEvent[] {
  const events: ParsedIcalEvent[] = [];
  const lines = rawIcs.replace(/\r\n /g, '').split(/\r\n|\n|\r/);

  let inEvent = false;
  let dtstart = '';
  let dtend = '';
  let summary = '';
  let uid = '';

  const parseDateStr = (val: string): string => {
    // Matches YYYYMMDD or YYYYMMDDTHHMMSS
    const match = val.match(/(\d{4})(\d{2})(\d{2})/);
    if (match) {
      return `${match[1]}-${match[2]}-${match[3]}`;
    }
    return '';
  };

  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed === 'BEGIN:VEVENT') {
      inEvent = true;
      dtstart = '';
      dtend = '';
      summary = '';
      uid = '';
    } else if (trimmed === 'END:VEVENT') {
      if (dtstart && dtend) {
        events.push({
          checkIn: dtstart,
          checkOut: dtend,
          summary: summary || 'Bloqueo iCal externo',
          uid,
        });
      }
      inEvent = false;
    } else if (inEvent) {
      if (trimmed.startsWith('DTSTART')) {
        const val = trimmed.split(':').pop() || '';
        dtstart = parseDateStr(val);
      } else if (trimmed.startsWith('DTEND')) {
        const val = trimmed.split(':').pop() || '';
        dtend = parseDateStr(val);
      } else if (trimmed.startsWith('SUMMARY:')) {
        summary = trimmed.substring(8);
      } else if (trimmed.startsWith('UID:')) {
        uid = trimmed.substring(4);
      }
    }
  }

  return events;
}

/**
 * Synchronizes external iCal feed for a specific unit.
 */
export async function syncUnitExternalFeed(unitId: string): Promise<{ syncedEventsCount: number }> {
  const unit = await prisma.unit.findUnique({
    where: { id: unitId },
  });

  if (!unit || !unit.icalFeedUrl) {
    return { syncedEventsCount: 0 };
  }

  try {
    const res = await fetch(unit.icalFeedUrl, {
      headers: { 'User-Agent': 'IguapeAparts-iCal-Sync/1.0' },
      signal: AbortSignal.timeout(10000),
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch iCal feed: HTTP ${res.status}`);
    }

    const icsText = await res.text();
    const parsed = parseIcalFeed(icsText);

    await prisma.$transaction(async (tx) => {
      // Remove old ICAL_BLOCK occupancies for this unit
      await tx.unitOccupancy.deleteMany({
        where: {
          unitId,
          type: 'ICAL_BLOCK',
        },
      });

      // Insert new ICAL_BLOCKs
      for (const ev of parsed) {
        const checkIn = new Date(`${ev.checkIn}T00:00:00Z`);
        const checkOut = new Date(`${ev.checkOut}T00:00:00Z`);

        // Only insert if checkOut > checkIn
        if (checkOut > checkIn) {
          await tx.unitOccupancy.create({
            data: {
              unitId,
              checkIn,
              checkOut,
              type: 'ICAL_BLOCK',
              status: 'ACTIVE',
              notes: ev.summary || 'Bloqueo iCal',
            },
          });
        }
      }
    });

    return { syncedEventsCount: parsed.length };
  } catch (error: any) {
    // If fetching fails in test environments or offline URL, gracefully handle
    return { syncedEventsCount: 0 };
  }
}

/**
 * Synchronizes all active units configured with external iCal feed.
 */
export async function syncAllUnitsIcal(): Promise<number> {
  const units = await prisma.unit.findMany({
    where: {
      icalFeedUrl: { not: null },
      isActive: true,
    },
  });

  let syncedCount = 0;
  for (const unit of units) {
    try {
      await syncUnitExternalFeed(unit.id);
      syncedCount++;
    } catch {
      // Continue next unit
    }
  }

  return syncedCount;
}
