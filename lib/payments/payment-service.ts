import prisma from '@/lib/db/client';
import { saveReceiptFile, isReceiptAllowed } from '@/lib/storage/receipts';

export interface CreatePaymentInput {
  reservationId: string;
  amount: number;
  currency: 'ARS' | 'USD';
  paymentMethod: 'TRANSFER_ARS' | 'TRANSFER_USD' | 'CASH_ARS' | 'CASH_USD' | 'MERCADO_PAGO' | 'OTHER';
  notes?: string;
  receiptFile?: {
    buffer: Buffer;
    filename: string;
    mimeType: string;
  };
}

export async function registerManualPayment(input: CreatePaymentInput) {
  const { reservationId, amount, currency, paymentMethod, notes, receiptFile } = input;

  const reservation = await prisma.reservation.findUnique({
    where: { id: reservationId },
  });

  if (!reservation) {
    throw new Error('Reserva no encontrada');
  }

  let receiptPath: string | null = null;
  let receiptFilename: string | null = null;
  let receiptMime: string | null = null;
  let receiptSize: number | null = null;

  if (receiptFile) {
    if (!isReceiptAllowed(receiptFile.mimeType, receiptFile.buffer.length)) {
      throw new Error(
        'Archivo de comprobante no válido. Debe ser PDF, JPG o PNG menor o igual a 10 MB.',
      );
    }

    const saved = await saveReceiptFile(receiptFile.buffer, receiptFile.filename);
    receiptPath = saved.relativePath;
    receiptFilename = saved.filename;
    receiptMime = receiptFile.mimeType;
    receiptSize = receiptFile.buffer.length;
  }

  return await prisma.payment.create({
    data: {
      reservationId,
      amount,
      currency,
      paymentMethod,
      notes,
      receiptPath,
      receiptFilename,
      receiptMime,
      receiptSize,
    },
  });
}
