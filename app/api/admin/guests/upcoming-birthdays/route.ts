import { NextResponse } from 'next/server';
import { calculateUpcomingBirthdays } from '@/lib/guests/crm';

export async function GET() {
  try {
    const upcoming = await calculateUpcomingBirthdays();
    return NextResponse.json(upcoming);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
