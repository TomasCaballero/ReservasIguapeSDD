import { NextRequest, NextResponse } from 'next/server';
import { getAllSeasons, createSeason } from '@/lib/pricing/seasons';

export async function GET() {
  const seasons = await getAllSeasons();
  return NextResponse.json(seasons);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const season = await createSeason(body);
    return NextResponse.json(season, { status: 201 });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 400 });
  }
}
