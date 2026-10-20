import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/db/client';
import { syncUnitExternalFeed } from '@/lib/ical/sync';

export async function POST(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;

    const unit = await prisma.unit.findUnique({
      where: { id },
    });

    if (!unit) {
      return NextResponse.json({ error: 'Unidad no encontrada' }, { status: 404 });
    }

    const result = await syncUnitExternalFeed(id);

    return NextResponse.json({
      success: true,
      syncedEventsCount: result.syncedEventsCount,
      message: `Sincronización completada (${result.syncedEventsCount} eventos importados)`,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
