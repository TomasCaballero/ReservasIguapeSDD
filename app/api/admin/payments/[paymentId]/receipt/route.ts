import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/db/client';
import { readReceiptFile } from '@/lib/storage/receipts';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ paymentId: string }> },
) {
  const { paymentId } = await params;

  const payment = await prisma.payment.findUnique({
    where: { id: paymentId },
  });

  if (!payment || !payment.receiptPath) {
    return NextResponse.json({ error: 'Comprobante no encontrado o purgado' }, { status: 404 });
  }

  const fileBuffer = await readReceiptFile(payment.receiptPath);
  if (!fileBuffer) {
    return NextResponse.json({ error: 'Archivo físico no encontrado' }, { status: 404 });
  }

  return new NextResponse(new Uint8Array(fileBuffer), {
    status: 200,
    headers: {
      'Content-Type': payment.receiptMime || 'application/octet-stream',
      'Content-Disposition': `inline; filename="${payment.receiptFilename || 'comprobante'}"`,
      'Cache-Control': 'private, no-cache, no-store',
    },
  });
}
