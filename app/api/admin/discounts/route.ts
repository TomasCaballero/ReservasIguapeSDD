import { NextRequest, NextResponse } from 'next/server';
import { getAllDiscounts, createDiscount } from '@/lib/pricing/seasons';

export async function GET() {
  const discounts = await getAllDiscounts();
  return NextResponse.json(discounts);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const discount = await createDiscount(body);
    return NextResponse.json(discount, { status: 201 });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 400 });
  }
}
