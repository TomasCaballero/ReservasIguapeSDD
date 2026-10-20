import { NextRequest, NextResponse } from 'next/server';
import { createWebBooking } from '@/lib/bookings/create-booking';

export async function POST(request: NextRequest) {
  const softLockToken = request.headers.get('x-soft-lock-token');

  if (!softLockToken) {
    return NextResponse.json(
      { error: 'Falta cabecera obligatoria X-Soft-Lock-Token' },
      { status: 422 },
    );
  }

  try {
    const body = await request.json();
    const { categoryId, checkIn, checkOut, adults, children = 0, currency = 'ARS', guest, companions = [], notes } = body;

    if (!categoryId || !checkIn || !checkOut || !adults || !guest) {
      return NextResponse.json(
        { error: 'Faltan campos obligatorios en la solicitud de reserva' },
        { status: 422 },
      );
    }

    // Validate guest fields
    if (!guest.docType || !guest.docNumber || !guest.firstName || !guest.lastName || !guest.email || !guest.phone || !guest.birthDate) {
      return NextResponse.json(
        { error: 'Faltan datos obligatorios del huésped titular (tipo y número de doc, nombre, apellido, email, teléfono, fecha de nacimiento)' },
        { status: 422 },
      );
    }

    const result = await createWebBooking({
      softLockToken,
      categoryId,
      checkIn,
      checkOut,
      adults: Number(adults),
      children: Number(children),
      currency: currency as 'ARS' | 'USD',
      guest,
      companions,
      notes,
    });

    return NextResponse.json(result, {
      status: 201,
      headers: {
        'Cache-Control': 'no-store, no-cache, must-revalidate',
      },
    });
  } catch (err: any) {
    console.error('Bookings route error:', err);
    if (err.message.includes('expirado') || err.message.includes('No units available')) {
      return NextResponse.json({ error: err.message }, { status: 409 });
    }
    if (err.message.includes('titular') || err.message.includes('obligatorio')) {
      return NextResponse.json({ error: err.message }, { status: 422 });
    }
    return NextResponse.json({ error: err.message || 'Error procesando la reserva' }, { status: 500 });
  }
}
