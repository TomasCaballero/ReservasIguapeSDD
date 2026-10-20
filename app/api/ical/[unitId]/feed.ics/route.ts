import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/db/client';
import { generateIcalFeed } from '@/lib/ical/sync';

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ unitId: string }> }
) {
  const { unitId } = await context.params;
  const token = request.nextUrl.searchParams.get('token');

  if (!token) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }

  const unit = await prisma.unit.findUnique({
    where: { id: unitId },
  });

  if (!unit || unit.icalExportToken !== token) {
    // Invariant RNF-06, AC-108: Invalid token returns 404
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }

  const occupancies = await prisma.unitOccupancy.findMany({
    where: {
      unitId,
      status: 'ACTIVE',
    },
    orderBy: { checkIn: 'asc' },
  });

  const icsBody = generateIcalFeed(unit.name, occupancies);

  return new NextResponse(icsBody, {
    status: 200,
    headers: {
      'Content-Type': 'text/calendar; charset=utf-8',
      'Cache-Control': 'no-cache, no-store, must-revalidate',
    },
  });
}
