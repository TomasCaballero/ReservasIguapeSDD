import { NextRequest, NextResponse } from 'next/server';
import { getCalendarMatrix } from '@/lib/occupancy/calendar';

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const startDate = searchParams.get('startDate') || '2026-01-01';
  const endDate = searchParams.get('endDate') || '2027-12-31';

  try {
    const data = await getCalendarMatrix(startDate, endDate);
    return NextResponse.json(data);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 400 });
  }
}
