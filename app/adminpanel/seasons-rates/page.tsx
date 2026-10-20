'use client';

import React, { useState, useEffect } from 'react';
import DiscountsTab from './discounts-tab';

export default function SeasonsRatesPage() {
  const [activeTab, setActiveTab] = useState<'seasons' | 'discounts'>('seasons');
  const [seasons, setSeasons] = useState<any[]>([]);
  const [discounts, setDiscounts] = useState<any[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // New season form
  const [seasonName, setSeasonName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [minStayNights, setMinStayNights] = useState('1');
  const [prices, setPrices] = useState<Record<string, { ars: string; usd: string }>>({});
  const [submittingSeason, setSubmittingSeason] = useState(false);
  const [seasonError, setSeasonError] = useState<string | null>(null);

  const loadData = async () => {
    setLoading(true);
    try {
      const [sRes, dRes, cRes] = await Promise.all([
        fetch('/api/admin/seasons'),
        fetch('/api/admin/discounts'),
        fetch('/api/admin/categories'),
      ]);
      const [sData, dData, cData] = await Promise.all([sRes.json(), dRes.json(), cRes.json()]);
      setSeasons(sData || []);
      setDiscounts(dData || []);
      setCategories(cData || []);

      const initialPrices: Record<string, { ars: string; usd: string }> = {};
      (cData || []).forEach((c: any) => {
        initialPrices[c.id] = {
          ars: c.basePriceArs.toString(),
          usd: c.basePriceUsd.toString(),
        };
      });
      setPrices(initialPrices);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleCreateSeason = async (e: React.FormEvent) => {
    e.preventDefault();
    setSeasonError(null);
    setSubmittingSeason(true);

    try {
      const seasonPrices = Object.entries(prices).map(([catId, p]) => ({
        categoryId: catId,
        priceArs: Number(p.ars),
        priceUsd: Number(p.usd),
      }));

      const res = await fetch('/api/admin/seasons', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: seasonName,
          startDate,
          endDate,
          minStayNights: Number(minStayNights),
          seasonPrices,
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Error al guardar temporada');
      }

      setSeasonName('');
      setStartDate('');
      setEndDate('');
      setMinStayNights('1');
      loadData();
    } catch (err: any) {
      setSeasonError(err.message);
    } finally {
      setSubmittingSeason(false);
    }
  };

  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      <div className="border-b border-[#AD9C78]/30 pb-4">
        <h1 className="font-display text-3xl text-[#E6EF73]">Tarifas, Temporadas y Descuentos</h1>
        <p className="text-sm text-[#E4E2C5]/70">
          Configurá precios por temporada, estadías mínimas obligatorias y reglas de descuento.
        </p>
      </div>

      {/* Tabs Switcher */}
      <div className="flex gap-2 border-b border-[#AD9C78]/30 pb-2">
        <button
          onClick={() => setActiveTab('seasons')}
          className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors ${
            activeTab === 'seasons'
              ? 'bg-[#E6EF73] text-[#1E2B18]'
              : 'bg-[#2B3D24] text-[#E4E2C5] border border-[#AD9C78]/40 hover:bg-[#3F5934]'
          }`}
        >
          Temporadas Especiales
        </button>
        <button
          onClick={() => setActiveTab('discounts')}
          className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors ${
            activeTab === 'discounts'
              ? 'bg-[#E6EF73] text-[#1E2B18]'
              : 'bg-[#2B3D24] text-[#E4E2C5] border border-[#AD9C78]/40 hover:bg-[#3F5934]'
          }`}
        >
          Reglas de Descuento
        </button>
      </div>

      {loading ? (
        <div className="py-12 text-center text-[#E4E2C5]/70">Cargando tarifas y temporadas...</div>
      ) : activeTab === 'seasons' ? (
        <div className="space-y-8">
          {/* New Season Form */}
          <div className="bg-[#2B3D24] p-6 border border-[#AD9C78]/30 space-y-4">
            <h3 className="font-display text-xl text-[#E6EF73]">Crear Nueva Temporada Especial</h3>
            {seasonError && (
              <div className="p-2 bg-red-950 border border-red-500 text-xs text-red-200">
                {seasonError}
              </div>
            )}
            <form onSubmit={handleCreateSeason} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                <div className="sm:col-span-2">
                  <label className="block uppercase text-[#AD9C78] font-bold mb-1">
                    Nombre de la Temporada
                  </label>
                  <input
                    type="text"
                    value={seasonName}
                    onChange={(e) => setSeasonName(e.target.value)}
                    placeholder="Ej: Alta Verano 2027"
                    className="w-full bg-[#1E2B18] text-[#E4E2C5] border border-[#AD9C78] p-2"
                    required
                  />
                </div>
                <div>
                  <label className="block uppercase text-[#AD9C78] font-bold mb-1">
                    Fecha Desde
                  </label>
                  <input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="w-full bg-[#1E2B18] text-[#E4E2C5] border border-[#AD9C78] p-2"
                    required
                  />
                </div>
                <div>
                  <label className="block uppercase text-[#AD9C78] font-bold mb-1">
                    Fecha Hasta
                  </label>
                  <input
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="w-full bg-[#1E2B18] text-[#E4E2C5] border border-[#AD9C78] p-2"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block uppercase text-[#AD9C78] font-bold mb-1">
                  Estadía Mínima (Noches)
                </label>
                <input
                  type="number"
                  min="1"
                  value={minStayNights}
                  onChange={(e) => setMinStayNights(e.target.value)}
                  className="w-32 bg-[#1E2B18] text-[#E4E2C5] border border-[#AD9C78] p-2"
                  required
                />
              </div>

              {/* Category Prices override */}
              <div className="pt-2 border-t border-[#AD9C78]/20">
                <span className="block uppercase text-[#AD9C78] font-bold mb-3">
                  Tarifas por Categoría para esta Temporada:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {categories.map((cat) => (
                    <div key={cat.id} className="bg-[#1E2B18] p-3 border border-[#AD9C78]/30">
                      <span className="font-bold text-[#E6EF73] block mb-2">{cat.name}</span>
                      <div className="space-y-2">
                        <div>
                          <label className="block text-[10px] text-[#E4E2C5]/70">ARS / noche</label>
                          <input
                            type="number"
                            value={prices[cat.id]?.ars || ''}
                            onChange={(e) =>
                              setPrices({
                                ...prices,
                                [cat.id]: { ...prices[cat.id], ars: e.target.value },
                              })
                            }
                            className="w-full bg-[#2B3D24] text-[#E4E2C5] border border-[#AD9C78] p-1.5 text-xs font-mono"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] text-[#E4E2C5]/70">USD / noche</label>
                          <input
                            type="number"
                            value={prices[cat.id]?.usd || ''}
                            onChange={(e) =>
                              setPrices({
                                ...prices,
                                [cat.id]: { ...prices[cat.id], usd: e.target.value },
                              })
                            }
                            className="w-full bg-[#2B3D24] text-[#E4E2C5] border border-[#AD9C78] p-1.5 text-xs font-mono"
                            required
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-end pt-2">
                <button
                  type="submit"
                  disabled={submittingSeason}
                  className="bg-[#E6EF73] hover:bg-[#D4DD68] text-[#1E2B18] font-bold px-6 py-2.5 uppercase tracking-wider"
                >
                  {submittingSeason ? 'Guardando...' : 'Crear Temporada'}
                </button>
              </div>
            </form>
          </div>

          {/* Seasons List */}
          <div className="bg-[#2B3D24] border border-[#AD9C78]/30 overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#3F5934] uppercase text-[#AD9C78] border-b border-[#AD9C78]/30">
                <tr>
                  <th className="p-3">Nombre</th>
                  <th className="p-3">Rango de Fechas</th>
                  <th className="p-3">Estadía Mínima</th>
                  <th className="p-3">Tarifas por Categoría</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#AD9C78]/20">
                {seasons.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="p-6 text-center text-[#E4E2C5]/60">
                      No hay temporadas especiales cargadas. Se utilizan tarifas base.
                    </td>
                  </tr>
                ) : (
                  seasons.map((season) => (
                    <tr key={season.id} className="hover:bg-[#3F5934]/30">
                      <td className="p-3 font-bold text-[#E6EF73]">{season.name}</td>
                      <td className="p-3 font-mono">
                        {new Date(season.startDate).toLocaleDateString()} al{' '}
                        {new Date(season.endDate).toLocaleDateString()}
                      </td>
                      <td className="p-3 font-bold">{season.minStayNights} noches</td>
                      <td className="p-3">
                        <div className="space-y-1">
                          {season.seasonPrices.map((sp: any) => (
                            <div key={sp.id} className="text-[11px]">
                              <span className="text-[#AD9C78] font-bold">{sp.category.name}:</span>{' '}
                              ${Number(sp.priceArs).toLocaleString()} ARS / U$S{' '}
                              {Number(sp.priceUsd).toLocaleString()}
                            </div>
                          ))}
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <DiscountsTab initialDiscounts={discounts} onRefresh={loadData} />
      )}
    </div>
  );
}
