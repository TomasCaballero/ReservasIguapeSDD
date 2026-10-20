'use client';

import React, { useState } from 'react';

export default function DiscountsTab({
  initialDiscounts,
  onRefresh,
}: {
  initialDiscounts: any[];
  onRefresh: () => void;
}) {
  const [minNights, setMinNights] = useState('');
  const [discountPercent, setDiscountPercent] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    setSubmitting(true);
    try {
      const res = await fetch('/api/admin/discounts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          minNights: Number(minNights),
          discountPercent: Number(discountPercent),
        }),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Error al guardar regla');
      }
      setMinNights('');
      setDiscountPercent('');
      onRefresh();
    } catch (err: any) {
      setErrorMsg(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Create form */}
      <div className="bg-[#2B3D24] p-5 border border-[#AD9C78]/30">
        <h3 className="font-display text-lg text-[#E6EF73] mb-3">
          Nueva Regla de Descuento por Noches
        </h3>
        {errorMsg && (
          <div className="p-2 mb-3 bg-red-950 border border-red-500 text-xs text-red-200">
            {errorMsg}
          </div>
        )}
        <form onSubmit={handleCreate} className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-end">
          <div>
            <label className="block text-xs uppercase text-[#AD9C78] font-bold mb-1">
              Mínimo de Noches
            </label>
            <input
              type="number"
              min="2"
              value={minNights}
              onChange={(e) => setMinNights(e.target.value)}
              placeholder="Ej: 3"
              className="w-full bg-[#1E2B18] text-[#E4E2C5] border border-[#AD9C78] p-2 text-xs"
              required
            />
          </div>
          <div>
            <label className="block text-xs uppercase text-[#AD9C78] font-bold mb-1">
              Porcentaje de Descuento (%)
            </label>
            <input
              type="number"
              min="1"
              max="99"
              value={discountPercent}
              onChange={(e) => setDiscountPercent(e.target.value)}
              placeholder="Ej: 15"
              className="w-full bg-[#1E2B18] text-[#E4E2C5] border border-[#AD9C78] p-2 text-xs"
              required
            />
          </div>
          <div>
            <button
              type="submit"
              disabled={submitting}
              className="w-full bg-[#E6EF73] hover:bg-[#D4DD68] text-[#1E2B18] font-bold py-2 text-xs uppercase tracking-wider"
            >
              {submitting ? 'Guardando...' : '+ Agregar Regla'}
            </button>
          </div>
        </form>
      </div>

      {/* List */}
      <div className="bg-[#2B3D24] border border-[#AD9C78]/30 overflow-x-auto">
        <table className="w-full text-left text-xs">
          <thead className="bg-[#3F5934] uppercase text-[#AD9C78] border-b border-[#AD9C78]/30">
            <tr>
              <th className="p-3">Mínimo de Noches</th>
              <th className="p-3">Descuento (%)</th>
              <th className="p-3">Regla de Aplicación</th>
              <th className="p-3">Estado</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#AD9C78]/20">
            {initialDiscounts.map((rule) => (
              <tr key={rule.id} className="hover:bg-[#3F5934]/30">
                <td className="p-3 font-mono font-bold text-[#E6EF73]">
                  A partir de {rule.minNights} noches
                </td>
                <td className="p-3 font-bold text-emerald-400">{rule.discountPercent}% OFF</td>
                <td className="p-3 text-[#E4E2C5]/70">
                  Aplica el mayor porcentaje sobre el total (no acumulativo)
                </td>
                <td className="p-3">
                  <span className="text-[10px] bg-emerald-950 text-emerald-300 border border-emerald-600 px-2 py-0.5">
                    Activa
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
