import { NextRequest, NextResponse } from 'next/server';
import { createManualBlock } from '@/lib/occupancy/calendar';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { unitId, checkIn, checkOut, notes } = body;

    if (!unitId || !checkIn || !checkOut) {
      return NextResponse.json(
        { error: 'Faltan campos obligatorios: unitId, checkIn, checkOut' },
        { status: 400 },
      );
    }

    const block = await createManualBlock({ unitId, checkIn, checkOut, notes });
    return NextResponse.json(block, { status: 201 });
  } catch (err: any) {
    if (err.statusCode === 409 || err.message.includes('ya está ocupada')) {
      return NextResponse.json({ error: err.message }, { status: 409 });
    }
    return NextResponse.json({ error: err.message }, { status: 400 });
  }
}
