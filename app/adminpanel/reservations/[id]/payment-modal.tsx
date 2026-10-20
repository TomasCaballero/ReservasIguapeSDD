'use client';

import React, { useState } from 'react';

export default function PaymentModal({
  reservationId,
  defaultCurrency,
  isOpen,
  onClose,
  onPaymentSuccess,
}: {
  reservationId: string;
  defaultCurrency: 'ARS' | 'USD';
  isOpen: boolean;
  onClose: () => void;
  onPaymentSuccess: () => void;
}) {
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState<'ARS' | 'USD'>(defaultCurrency);
  const [paymentMethod, setPaymentMethod] = useState('TRANSFER_ARS');
  const [notes, setNotes] = useState('');
  const [receiptFile, setReceiptFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append('amount', amount);
      formData.append('currency', currency);
      formData.append('paymentMethod', paymentMethod);
      if (notes) formData.append('notes', notes);
      if (receiptFile) formData.append('receipt', receiptFile);

      const res = await fetch(`/api/admin/reservations/${reservationId}/payments`, {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Error registrando el pago');
      }

      onPaymentSuccess();
      onClose();
    } catch (err: any) {
      setErrorMsg(err.message || 'Error en el servidor');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/75 flex items-center justify-center p-4 z-50">
      <div className="bg-[#3F5934] p-6 max-w-lg w-full border border-[#AD9C78] space-y-4 shadow-2xl">
        <h3 className="font-display text-2xl text-[#E6EF73]">Registrar Cobro Manual</h3>

        {errorMsg && (
          <div className="p-2 bg-red-950 border border-red-500 text-xs text-red-200">
            {errorMsg}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-[#E4E2C5]/80 uppercase font-bold mb-1">Monto *</label>
              <input
                type="number"
                step="0.01"
                min="0.01"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="0.00"
                className="w-full bg-[#2B3D24] text-[#E4E2C5] border border-[#AD9C78] p-2 text-sm font-mono"
                required
              />
            </div>
            <div>
              <label className="block text-[#E4E2C5]/80 uppercase font-bold mb-1">Moneda</label>
              <select
                value={currency}
                onChange={(e) => {
                  const curr = e.target.value as 'ARS' | 'USD';
                  setCurrency(curr);
                  setPaymentMethod(curr === 'ARS' ? 'TRANSFER_ARS' : 'TRANSFER_USD');
                }}
                className="w-full bg-[#2B3D24] text-[#E4E2C5] border border-[#AD9C78] p-2 text-sm"
              >
                <option value="ARS">ARS ($)</option>
                <option value="USD">USD (U$S)</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-[#E4E2C5]/80 uppercase font-bold mb-1">
              Medio de Cobro *
            </label>
            <select
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="w-full bg-[#2B3D24] text-[#E4E2C5] border border-[#AD9C78] p-2 text-xs"
            >
              <option value="TRANSFER_ARS">Transferencia Bancaria (ARS)</option>
              <option value="TRANSFER_USD">Transferencia Bancaria (USD)</option>
              <option value="CASH_ARS">Efectivo en Mostrador (ARS)</option>
              <option value="CASH_USD">Efectivo en Mostrador (USD)</option>
              <option value="MERCADO_PAGO">Mercado Pago / Link de Pago</option>
              <option value="OTHER">Otro Medio</option>
            </select>
          </div>

          <div>
            <label className="block text-[#E4E2C5]/80 uppercase font-bold mb-1">
              Adjuntar Comprobante (Opcional - PDF / JPG / PNG ≤ 10 MB)
            </label>
            <input
              type="file"
              accept=".pdf,.jpg,.jpeg,.png,.webp"
              onChange={(e) => setReceiptFile(e.target.files?.[0] || null)}
              className="w-full bg-[#2B3D24] text-[#E4E2C5] border border-[#AD9C78] p-1.5 text-xs file:bg-[#3F5934] file:border file:border-[#AD9C78] file:text-[#E6EF73] file:px-2 file:py-1 file:mr-2"
            />
          </div>

          <div>
            <label className="block text-[#E4E2C5]/80 uppercase font-bold mb-1">
              Observaciones (Nro de operación, banco, etc.)
            </label>
            <textarea
              rows={2}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Ej: Transferencia Santander Río oper. #883921"
              className="w-full bg-[#2B3D24] text-[#E4E2C5] border border-[#AD9C78] p-2 text-xs"
            />
          </div>

          <div className="flex justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              disabled={loading}
              className="border border-[#AD9C78] px-4 py-2 text-[#E4E2C5]"
            >
              Cancelar
            </button>
            <button
              type="submit"
              disabled={loading}
              className="bg-[#E6EF73] hover:bg-[#D4DD68] text-[#1E2B18] font-bold px-5 py-2 uppercase tracking-wider"
            >
              {loading ? 'Guardando...' : 'Confirmar Cobro'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
