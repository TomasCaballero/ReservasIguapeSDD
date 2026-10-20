import { NextRequest, NextResponse } from 'next/server';
import { assignUnitToReservation } from '@/lib/reservations/lifecycle';

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;

  try {
    const { unitId } = await request.json();

    if (!unitId) {
      return NextResponse.json({ error: 'Falta campo obligatorio unitId' }, { status: 400 });
    }

    const updated = await assignUnitToReservation(id, unitId);
    return NextResponse.json(updated);
  } catch (err: any) {
    if (err.statusCode === 409 || err.message.includes('ya está ocupada')) {
      return NextResponse.json({ error: err.message }, { status: 409 });
    }
    return NextResponse.json({ error: err.message }, { status: 400 });
  }
}
