'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { formatDateDisplay, formatDateISO, parseDateString } from '@/lib/utils/date';
import { addDays, format } from 'date-fns';

interface CategoryItem {
  id: string;
  slug: string;
  name: string;
  description: string | null;
  maxOccupancy: number;
  capacityAdults: number;
  capacityChildren: number;
  availableUnitsCount: number;
  pricing: {
    currency: 'ARS' | 'USD';
    baseNightlyPrice: number;
    subtotal: number;
    appliedDiscountPercent: number;
    discountAmount: number;
    totalPrice: number;
    nightlyBreakdown: Array<{ date: string; rate: number; season?: string }>;
  };
  images: string[];
}

export default function PublicBookingPage() {
  const router = useRouter();

  // Search parameters
  const [checkIn, setCheckIn] = useState<string>('');
  const [checkOut, setCheckOut] = useState<string>('');
  const [adults, setAdults] = useState<number>(2);
  const [children, setChildren] = useState<number>(0);
  const [currency, setCurrency] = useState<'ARS' | 'USD'>('ARS');

  const [categories, setCategories] = useState<CategoryItem[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [hasSearched, setHasSearched] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Initialize with tomorrow and +4 nights
  useEffect(() => {
    const today = new Date();
    const defaultIn = addDays(today, 1);
    const defaultOut = addDays(today, 5);
    setCheckIn(format(defaultIn, 'yyyy-MM-dd'));
    setCheckOut(format(defaultOut, 'yyyy-MM-dd'));
  }, []);

  const handleSearch = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!checkIn || !checkOut) {
      setErrorMsg('Por favor seleccione las fechas de check-in y check-out.');
      return;
    }

    if (new Date(checkOut) <= new Date(checkIn)) {
      setErrorMsg('La fecha de salida debe ser posterior a la fecha de entrada.');
      return;
    }

    setLoading(true);
    setErrorMsg(null);
    setHasSearched(true);

    try {
      const query = new URLSearchParams({
        checkIn,
        checkOut,
        adults: adults.toString(),
        children: children.toString(),
        currency,
      });

      const res = await fetch(`/api/public/availability?${query.toString()}`);
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Error al consultar disponibilidad');
      }

      setCategories(data.categories || []);
    } catch (err: any) {
      setErrorMsg(err.message || 'Error de conexión');
    } finally {
      setLoading(false);
    }
  };

  const handleSelectCategory = (categoryId: string) => {
    const params = new URLSearchParams({
      categoryId,
      checkIn,
      checkOut,
      adults: adults.toString(),
      children: children.toString(),
      currency,
    });
    router.push(`/reservar?${params.toString()}`);
  };

  return (
    <div className="space-y-10">
      {/* Hero Title */}
      <section className="text-center py-6 sm:py-10 border-b border-[#AD9C78]/20">
        <h1 className="font-display text-4xl sm:text-5xl text-[#E6EF73] mb-4">
          Viví la Experiencia Iguapé
        </h1>
        <p className="text-lg text-[#E4E2C5]/90 max-w-2xl mx-auto font-sans">
          Cotizá tu estadía directamente con nosotros. Mejor tarifa garantizada, sin costos ocultos
          ni pagos online obligatorios.
        </p>
      </section>

      {/* Search Bar Widget */}
      <section className="bg-[#3F5934] p-6 sm:p-8 border border-[#AD9C78]/40 shadow-xl">
        <form onSubmit={handleSearch} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 items-end">
          {/* Check-In */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#E4E2C5]/80 mb-2">
              Fecha de Entrada
            </label>
            <input
              type="date"
              value={checkIn}
              min={format(new Date(), 'yyyy-MM-dd')}
              onChange={(e) => setCheckIn(e.target.value)}
              className="w-full bg-[#2B3D24] text-[#E4E2C5] border border-[#AD9C78] px-3 py-2 text-sm focus:outline-none focus:border-[#E6EF73] rounded-none"
              required
            />
          </div>

          {/* Check-Out */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#E4E2C5]/80 mb-2">
              Fecha de Salida
            </label>
            <input
              type="date"
              value={checkOut}
              min={checkIn || format(new Date(), 'yyyy-MM-dd')}
              onChange={(e) => setCheckOut(e.target.value)}
              className="w-full bg-[#2B3D24] text-[#E4E2C5] border border-[#AD9C78] px-3 py-2 text-sm focus:outline-none focus:border-[#E6EF73] rounded-none"
              required
            />
          </div>

          {/* Guests */}
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#E4E2C5]/80 mb-2">
                Adultos
              </label>
              <select
                value={adults}
                onChange={(e) => setAdults(Number(e.target.value))}
                className="w-full bg-[#2B3D24] text-[#E4E2C5] border border-[#AD9C78] px-3 py-2 text-sm focus:outline-none focus:border-[#E6EF73] rounded-none"
              >
                {[1, 2, 3, 4, 5, 6].map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#E4E2C5]/80 mb-2">
                Niños
              </label>
              <select
                value={children}
                onChange={(e) => setChildren(Number(e.target.value))}
                className="w-full bg-[#2B3D24] text-[#E4E2C5] border border-[#AD9C78] px-3 py-2 text-sm focus:outline-none focus:border-[#E6EF73] rounded-none"
              >
                {[0, 1, 2, 3, 4].map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Currency Toggle */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#E4E2C5]/80 mb-2">
              Moneda
            </label>
            <div className="grid grid-cols-2 border border-[#AD9C78]">
              <button
                type="button"
                onClick={() => setCurrency('ARS')}
                className={`py-2 text-xs font-bold transition-colors ${
                  currency === 'ARS'
                    ? 'bg-[#E6EF73] text-[#1E2B18]'
                    : 'bg-[#2B3D24] text-[#E4E2C5] hover:bg-[#2B3D24]/80'
                }`}
              >
                ARS ($)
              </button>
              <button
                type="button"
                onClick={() => setCurrency('USD')}
                className={`py-2 text-xs font-bold transition-colors ${
                  currency === 'USD'
                    ? 'bg-[#E6EF73] text-[#1E2B18]'
                    : 'bg-[#2B3D24] text-[#E4E2C5] hover:bg-[#2B3D24]/80'
                }`}
              >
                USD (U$S)
              </button>
            </div>
          </div>

          {/* Submit Search */}
          <div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#E6EF73] hover:bg-[#D4DD68] active:bg-[#C2CB5D] text-[#1E2B18] font-bold py-2.5 px-4 text-sm uppercase tracking-wider transition-colors disabled:opacity-50 rounded-none cursor-pointer"
            >
              {loading ? 'Buscando...' : 'Buscar Aparts'}
            </button>
          </div>
        </form>

        {errorMsg && (
          <div className="mt-4 p-3 bg-red-900/60 border border-red-500 text-red-100 text-sm">
            {errorMsg}
          </div>
        )}
      </section>

      {/* Available Categories Catalog */}
      <section className="space-y-6">
        <div className="flex items-center justify-between border-b border-[#AD9C78]/30 pb-3">
          <h2 className="font-display text-2xl text-[#E6EF73]">
            {hasSearched ? 'Opciones Disponibles' : 'Nuestros Departamentos'}
          </h2>
          {hasSearched && (
            <span className="text-sm text-[#E4E2C5]/80">
              {categories.length}{' '}
              {categories.length === 1 ? 'categoría con cupo' : 'categorías con cupo'}
            </span>
          )}
        </div>

        {loading ? (
          <div className="py-20 text-center text-[#E4E2C5]/70">
            <p className="text-lg">Consultando disponibilidad en tiempo real...</p>
          </div>
        ) : hasSearched && categories.length === 0 ? (
          <div className="py-16 text-center bg-[#3F5934]/40 border border-[#AD9C78]/30 p-8">
            <p className="font-display text-2xl text-[#E6EF73] mb-2">
              No encontramos disponibilidad para esas fechas
            </p>
            <p className="text-sm text-[#E4E2C5]/80 max-w-md mx-auto">
              Probá modificando las fechas de tu viaje o consultanos directamente por WhatsApp para
              ofrecerte alternativas de fechas.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8">
            {categories.map((cat) => {
              const mainImage =
                cat.images && cat.images.length > 0 ? cat.images[0] : '/assets/images/rec/logo_redondo.webp';

              return (
                <div
                  key={cat.id}
                  className="bg-[#3F5934] border border-[#AD9C78]/40 flex flex-col md:flex-row overflow-hidden shadow-lg"
                >
                  {/* Category Image */}
                  <div className="md:w-5/12 h-64 md:h-auto relative bg-[#2B3D24]">
                    <Image
                      src={mainImage}
                      alt={cat.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 40vw"
                    />
                    <div className="absolute top-3 left-3 bg-[#1E2B18]/90 text-[#E6EF73] text-xs font-semibold px-3 py-1 border border-[#AD9C78]/50">
                      {cat.availableUnitsCount}{' '}
                      {cat.availableUnitsCount === 1 ? 'unidad libre' : 'unidades libres'}
                    </div>
                  </div>

                  {/* Info and Pricing */}
                  <div className="md:w-7/12 p-6 sm:p-8 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="font-display text-2xl sm:text-3xl text-[#E6EF73]">
                          {cat.name}
                        </h3>
                      </div>
                      <p className="text-sm text-[#E4E2C5]/80 mt-2 font-sans line-clamp-2">
                        {cat.description}
                      </p>

                      <div className="flex flex-wrap gap-4 mt-4 text-xs text-[#E4E2C5]/90 border-y border-[#AD9C78]/20 py-2.5">
                        <div>
                          <span className="text-[#AD9C78] font-bold">Capacidad máx:</span>{' '}
                          {cat.maxOccupancy} huéspedes
                        </div>
                        <div>
                          <span className="text-[#AD9C78] font-bold">Adultos:</span> hasta{' '}
                          {cat.capacityAdults}
                        </div>
                        <div>
                          <span className="text-[#AD9C78] font-bold">Niños:</span> hasta{' '}
                          {cat.capacityChildren}
                        </div>
                      </div>
                    </div>

                    {/* Pricing Footer */}
                    <div className="mt-6 pt-4 border-t border-[#AD9C78]/30 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                      <div>
                        {cat.pricing.appliedDiscountPercent > 0 && (
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-xs line-through text-[#E4E2C5]/60">
                              {currency === 'ARS' ? '$' : 'U$S'}{' '}
                              {cat.pricing.subtotal.toLocaleString()}
                            </span>
                            <span className="bg-[#E6EF73] text-[#1E2B18] text-xs font-extrabold px-1.5 py-0.5">
                              {cat.pricing.appliedDiscountPercent}% OFF
                            </span>
                          </div>
                        )}
                        <div className="flex items-baseline gap-1.5">
                          <span className="text-xs uppercase text-[#AD9C78] font-bold">Total:</span>
                          <span className="font-display text-3xl text-[#E6EF73]">
                            {currency === 'ARS' ? '$' : 'U$S'}{' '}
                            {cat.pricing.totalPrice.toLocaleString()}
                          </span>
                          <span className="text-xs text-[#E4E2C5]/70">
                            / {cat.pricing.nightlyBreakdown.length} noches
                          </span>
                        </div>
                        <p className="text-[11px] text-[#E4E2C5]/60 mt-0.5">
                          Tarifa promedio por noche: {currency === 'ARS' ? '$' : 'U$S'}{' '}
                          {Math.round(
                            cat.pricing.totalPrice / cat.pricing.nightlyBreakdown.length,
                          ).toLocaleString()}
                        </p>
                      </div>

                      <button
                        onClick={() => handleSelectCategory(cat.id)}
                        className="bg-[#E6EF73] hover:bg-[#D4DD68] active:bg-[#C2CB5D] text-[#1E2B18] font-bold text-sm px-6 py-3 tracking-wider uppercase transition-colors rounded-none cursor-pointer text-center"
                      >
                        Reservar Ahora
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
}
