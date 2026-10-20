import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/db/client';

export async function GET(request?: NextRequest) {
  const categories = await prisma.category.findMany({
    include: { units: true },
    orderBy: { displayOrder: 'asc' },
  });
  return NextResponse.json(categories);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { slug, name, description, capacityAdults, capacityChildren = 0, maxOccupancy, basePriceArs, basePriceUsd, images = [] } = body;

    const category = await prisma.category.create({
      data: {
        slug,
        name,
        description,
        capacityAdults: Number(capacityAdults),
        capacityChildren: Number(capacityChildren),
        maxOccupancy: Number(maxOccupancy),
        basePriceArs: Number(basePriceArs),
        basePriceUsd: Number(basePriceUsd),
        images,
      },
    });

    return NextResponse.json(category, { status: 201 });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 400 });
  }
}
