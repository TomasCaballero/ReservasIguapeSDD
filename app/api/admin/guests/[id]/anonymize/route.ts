import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/db/client';
import { anonymizeGuestData } from '@/lib/guests/anonymization';

export async function POST(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;

    const guest = await prisma.guest.findUnique({
      where: { id },
    });

    if (!guest) {
      return NextResponse.json({ error: 'Huésped no encontrado' }, { status: 404 });
    }

    await anonymizeGuestData(id);

    return NextResponse.json({
      success: true,
      message: 'Huésped anonimizado de manera irreversible conforme a la Ley 25.326',
    });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
