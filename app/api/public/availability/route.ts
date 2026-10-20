import { NextRequest, NextResponse } from 'next/server';
import { searchAvailability } from '@/lib/occupancy/availability';

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const checkIn = searchParams.get('checkIn');
  const checkOut = searchParams.get('checkOut');
  const adultsStr = searchParams.get('adults');
  const childrenStr = searchParams.get('children') || '0';
  const currencyStr = (searchParams.get('currency') || 'ARS').toUpperCase();

  if (!checkIn || !checkOut || !adultsStr) {
    return NextResponse.json(
      { error: 'Faltan parámetros obligatorios: checkIn, checkOut, adults' },
      { status: 400 },
    );
  }

  const adults = parseInt(adultsStr, 10);
  const children = parseInt(childrenStr, 10);

  if (isNaN(adults) || adults < 1) {
    return NextResponse.json({ error: 'El número de adultos debe ser al menos 1' }, { status: 400 });
  }

  if (isNaN(children) || children < 0) {
    return NextResponse.json({ error: 'El número de niños no puede ser negativo' }, { status: 400 });
  }

  if (currencyStr !== 'ARS' && currencyStr !== 'USD') {
    return NextResponse.json({ error: 'Moneda no soportada. Use ARS o USD' }, { status: 400 });
  }

  try {
    const result = await searchAvailability({
      checkIn,
      checkOut,
      adults,
      children,
      currency: currencyStr as 'ARS' | 'USD',
    });

    return NextResponse.json(result, {
      status: 200,
      headers: {
        'Cache-Control': 'no-store, no-cache, must-revalidate',
      },
    });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 400 });
  }
}
