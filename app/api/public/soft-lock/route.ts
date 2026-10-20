import { NextRequest, NextResponse } from 'next/server';
import { acquireSoftLock } from '@/lib/occupancy/soft-lock';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { categoryId, checkIn, checkOut } = body;

    if (!categoryId || !checkIn || !checkOut) {
      return NextResponse.json(
        { error: 'Faltan campos obligatorios: categoryId, checkIn, checkOut' },
        { status: 400 },
      );
    }

    const result = await acquireSoftLock({
      categoryId,
      checkIn,
      checkOut,
    });

    return NextResponse.json(result, {
      status: 201,
      headers: {
        'Cache-Control': 'no-store, no-cache, must-revalidate',
      },
    });
  } catch (err: any) {
    if (err.message.includes('No units available')) {
      return NextResponse.json(
        { error: 'No hay departamentos disponibles en esta categoría para las fechas seleccionadas.' },
        { status: 409 },
      );
    }
    return NextResponse.json({ error: err.message || 'Error interno' }, { status: 500 });
  }
}
