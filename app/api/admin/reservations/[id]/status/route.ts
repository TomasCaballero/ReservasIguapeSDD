import { NextRequest, NextResponse } from 'next/server';
import { updateReservationStatus, ReservationStatusType } from '@/lib/reservations/lifecycle';

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;

  try {
    const { status, reason } = await request.json();

    if (!status) {
      return NextResponse.json({ error: 'Falta campo obligatorio status' }, { status: 400 });
    }

    const updated = await updateReservationStatus(id, status as ReservationStatusType, reason);
    return NextResponse.json(updated);
  } catch (err: any) {
    if (err.statusCode === 409 || err.message.includes('No hay cupo disponible')) {
      return NextResponse.json({ error: err.message }, { status: 409 });
    }
    return NextResponse.json({ error: err.message }, { status: 400 });
  }
}
