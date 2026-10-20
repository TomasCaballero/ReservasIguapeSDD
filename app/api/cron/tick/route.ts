import { NextRequest, NextResponse } from 'next/server';
import { expirePendingReservations, purgeOldReceipts } from '@/lib/cron/maintenance';
import { syncAllUnitsIcal } from '@/lib/ical/sync';

export async function POST(request: NextRequest) {
  const authHeader = request.headers.get('authorization');
  const expectedSecret = process.env.CRON_SECRET;

  if (!authHeader || !authHeader.startsWith('Bearer ') || authHeader.split(' ')[1] !== expectedSecret) {
    return NextResponse.json({ error: 'Unauthorized cron trigger' }, { status: 401 });
  }

  try {
    const expiredCount = await expirePendingReservations();
    const purgedCount = await purgeOldReceipts();

    // Sincronización iCal periódica (US5)
    let icalCount = 0;
    try {
      icalCount = await syncAllUnitsIcal();
    } catch {
      // Non-blocking if iCal sync not yet fully configured
    }

    return NextResponse.json({
      expiredReservationsCount: expiredCount,
      purgedReceiptsCount: purgedCount,
      syncedIcalUnits: icalCount,
    });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
