import { NextRequest, NextResponse } from 'next/server';
import { getGuestsDirectory } from '@/lib/guests/crm';

export async function GET(request?: NextRequest) {
  try {
    const search = request?.nextUrl?.searchParams?.get('search') || undefined;
    const guests = await getGuestsDirectory(search);
    return NextResponse.json(guests);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
