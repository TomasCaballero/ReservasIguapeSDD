import { NextRequest, NextResponse } from 'next/server';
import { registerManualPayment } from '@/lib/payments/payment-service';

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;

  try {
    const formData = await request.formData();
    const amountStr = formData.get('amount') as string;
    const currency = formData.get('currency') as 'ARS' | 'USD';
    const paymentMethod = formData.get('paymentMethod') as any;
    const notes = (formData.get('notes') as string) || undefined;
    const receipt = formData.get('receipt') as File | null;

    if (!amountStr || !currency || !paymentMethod) {
      return NextResponse.json(
        { error: 'Faltan campos obligatorios: amount, currency, paymentMethod' },
        { status: 400 },
      );
    }

    let receiptFile = undefined;
    if (receipt && receipt.size > 0) {
      const buffer = Buffer.from(await receipt.arrayBuffer());
      receiptFile = {
        buffer,
        filename: receipt.name,
        mimeType: receipt.type,
      };
    }

    const payment = await registerManualPayment({
      reservationId: id,
      amount: Number(amountStr),
      currency,
      paymentMethod,
      notes,
      receiptFile,
    });

    return NextResponse.json(payment, { status: 201 });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 400 });
  }
}
