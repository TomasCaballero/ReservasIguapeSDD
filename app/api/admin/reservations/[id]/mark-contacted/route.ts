import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/db/client';

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;

  try {
    const updated = await prisma.reservation.update({
      where: { id },
      data: {
        paymentMethodSentAt: new Date(),
      },
    });

    return NextResponse.json(updated);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 400 });
  }
}
