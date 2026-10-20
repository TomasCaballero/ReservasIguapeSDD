import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';
import prisma from '@/lib/db/client';

export async function GET(request?: NextRequest) {
  const units = await prisma.unit.findMany({
    include: { category: true },
    orderBy: { name: 'asc' },
  });
  return NextResponse.json(units);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { categoryId, name, icalFeedUrl, notes } = body;

    const unit = await prisma.unit.create({
      data: {
        categoryId,
        name,
        icalFeedUrl,
        notes,
        icalExportToken: crypto.randomBytes(32).toString('hex'),
        isActive: true,
      },
    });

    return NextResponse.json(unit, { status: 201 });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 400 });
  }
}
