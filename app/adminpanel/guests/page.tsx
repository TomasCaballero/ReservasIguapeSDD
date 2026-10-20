'use client';

import React, { useState, useEffect } from 'react';

interface ReservationSummary {
  id: string;
  checkIn: string;
  checkOut: string;
  status: string;
  totalPrice: number | string;
  currency: string;
  category: { name: string };
}

interface GuestItem {
  id: string;
  docType: string;
  docNumber: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  birthDate: string | null;
  reservations: ReservationSummary[];
}

export default function GuestsCRMPage() {
  const [guests, setGuests] = useState<GuestItem[]>([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [selectedGuest, setSelectedGuest] = useState<GuestItem | null>(null);
  const [anonymizingId, setAnonymizingId] = useState<string | null>(null);
  const [actionMessage, setActionMessage] = useState<string | null>(null);

  const loadGuests = async (query = '') => {
    setLoading(true);
    try {
      const url = query ? `/api/admin/guests?search=${encodeURIComponent(query)}` : '/api/admin/guests';
      const res = await fetch(url);
      const data = await res.json();
      if (Array.isArray(data)) {
        setGuests(data);
      }
    } catch {
      // Ignore
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadGuests();
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    loadGuests(search);
  };

  const handleAnonymize = async (guest: GuestItem) => {
    if (
      !confirm(
        `¿Confirmás la anonimización irreversible de ${guest.firstName} ${guest.lastName}? Conforme a la Ley 25.326, sus datos personales serán eliminados permanentemente, manteniendo el registro numérico contable de sus reservas.`
      )
    ) {
      return;
    }

    setAnonymizingId(guest.id);
    setActionMessage(null);
    try {
      const res = await fetch(`/api/admin/guests/${guest.id}/anonymize`, {
        method: 'POST',
      });
      const data = await res.json();
      if (res.ok) {
        setActionMessage('Huésped anonimizado exitosamente');
        await loadGuests(search);
        if (selectedGuest?.id === guest.id) {
          setSelectedGuest(null);
        }
      } else {
        setActionMessage(`Error: ${data.error || 'No se pudo anonimizar'}`);
      }
    } catch (err: any) {
      setActionMessage(`Error: ${err.message}`);
    } finally {
      setAnonymizingId(null);
    }
  };

  const formatDate = (dateStr: string | null) => {
    if (!dateStr) return '-';
    try {
      const d = new Date(dateStr);
      return `${String(d.getUTCDate()).padStart(2, '0')}/${String(d.getUTCMonth() + 1).padStart(2, '0')}/${d.getUTCFullYear()}`;
    } catch {
      return dateStr;
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="border-b border-[#AD9C78]/30 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-display text-3xl text-[#E6EF73]">CRM de Huéspedes</h1>
          <p className="text-sm text-[#E4E2C5]/70">
            Ficha unificada de clientes por Tipo + Documento y gestión de privacidad (Ley 25.326).
          </p>
        </div>
      </div>

      {actionMessage && (
        <div className="bg-[#3F5934] border border-[#AD9C78] p-3 text-sm text-[#E6EF73]">
          {actionMessage}
        </div>
      )}

      {/* Search Bar */}
      <form onSubmit={handleSearchSubmit} className="flex gap-2 max-w-lg">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Buscar por apellido, nombre, documento o email..."
          className="w-full bg-[#2B3D24] border border-[#AD9C78]/50 px-3 py-2 text-sm text-[#E4E2C5] focus:outline-none focus:border-[#E6EF73]"
        />
        <button
          type="submit"
          className="bg-[#E6EF73] hover:bg-[#D4DD68] text-[#1E2B18] font-bold text-xs uppercase px-4 py-2 tracking-wider transition cursor-pointer"
        >
          Buscar
        </button>
        {search && (
          <button
            type="button"
            onClick={() => {
              setSearch('');
              loadGuests('');
            }}
            className="border border-[#AD9C78]/40 hover:bg-[#3F5934] text-xs px-3 py-2 transition cursor-pointer"
          >
            Limpiar
          </button>
        )}
      </form>

      {/* Guests Table */}
      <div className="bg-[#2B3D24] border border-[#AD9C78]/30 overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="bg-[#3F5934] text-xs uppercase tracking-wider text-[#AD9C78] border-b border-[#AD9C78]/30">
            <tr>
              <th className="p-3">Documento</th>
              <th className="p-3">Huésped</th>
              <th className="p-3">Contacto</th>
              <th className="p-3">Cumpleaños</th>
              <th className="p-3">Estadías</th>
              <th className="p-3 text-right">Acciones</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#AD9C78]/20 text-[#E4E2C5]/90">
            {loading ? (
              <tr>
                <td colSpan={6} className="p-6 text-center text-xs text-[#E4E2C5]/60 italic">
                  Cargando directorio de huéspedes...
                </td>
              </tr>
            ) : guests.length === 0 ? (
              <tr>
                <td colSpan={6} className="p-6 text-center text-xs text-[#E4E2C5]/60 italic">
                  No se encontraron huéspedes registrados.
                </td>
              </tr>
            ) : (
              guests.map((guest) => {
                const isAnon = guest.firstName === 'ANONIMIZADO';
                return (
                  <tr key={guest.id} className="hover:bg-[#3F5934]/40">
                    <td className="p-3 font-mono text-xs text-[#AD9C78]">
                      {guest.docType} {guest.docNumber}
                    </td>
                    <td className="p-3 font-bold text-[#E6EF73]">
                      {guest.lastName}, {guest.firstName}
                    </td>
                    <td className="p-3 text-xs">
                      <div>{guest.email}</div>
                      <div className="text-[11px] text-[#AD9C78]">{guest.phone}</div>
                    </td>
                    <td className="p-3 text-xs font-mono">
                      {formatDate(guest.birthDate)}
                    </td>
                    <td className="p-3 font-mono text-xs">
                      <span className="bg-[#1E2B18] px-2 py-0.5 border border-[#AD9C78]/30">
                        {guest.reservations?.length || 0} reserva(s)
                      </span>
                    </td>
                    <td className="p-3 text-right space-x-2">
                      <button
                        type="button"
                        onClick={() => setSelectedGuest(guest)}
                        className="px-2.5 py-1 text-xs bg-[#3F5934] text-[#E6EF73] border border-[#AD9C78]/50 hover:bg-[#3F5934]/80 transition cursor-pointer"
                      >
                        Historial
                      </button>
                      {!isAnon && (
                        <button
                          type="button"
                          onClick={() => handleAnonymize(guest)}
                          disabled={anonymizingId === guest.id}
                          className="px-2.5 py-1 text-xs bg-red-950 text-red-300 border border-red-700 hover:bg-red-900 disabled:opacity-50 transition cursor-pointer"
                        >
                          {anonymizingId === guest.id ? 'Anonimizando...' : 'Anonimizar'}
                        </button>
                      )}
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      {/* Stay History Modal / Drawer */}
      {selectedGuest && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
          <div className="bg-[#2B3D24] border border-[#AD9C78] max-w-2xl w-full p-6 space-y-5 shadow-2xl">
            <div className="flex justify-between items-center border-b border-[#AD9C78]/30 pb-3">
              <div>
                <h3 className="font-display text-xl text-[#E6EF73]">
                  Historial de Estadías — {selectedGuest.firstName} {selectedGuest.lastName}
                </h3>
                <p className="text-xs text-[#AD9C78] font-mono">
                  {selectedGuest.docType}: {selectedGuest.docNumber} • {selectedGuest.email}
                </p>
              </div>
              <button
                onClick={() => setSelectedGuest(null)}
                className="text-[#E4E2C5]/70 hover:text-[#E4E2C5] font-bold text-lg"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3">
              {(!selectedGuest.reservations || selectedGuest.reservations.length === 0) ? (
                <p className="text-xs text-[#E4E2C5]/60 italic">No registra reservas previas.</p>
              ) : (
                <div className="space-y-2 max-h-80 overflow-y-auto">
                  {selectedGuest.reservations.map((res) => (
                    <div
                      key={res.id}
                      className="bg-[#1E2B18] border border-[#AD9C78]/30 p-3 text-xs flex justify-between items-center"
                    >
                      <div>
                        <p className="font-bold text-[#E4E2C5]">{res.category?.name}</p>
                        <p className="text-[#AD9C78] text-[11px] font-mono">
                          {formatDate(res.checkIn)} al {formatDate(res.checkOut)}
                        </p>
                      </div>
                      <div className="text-right">
                        <span className="font-bold font-mono text-[#E6EF73]">
                          {res.currency} ${Number(res.totalPrice).toLocaleString()}
                        </span>
                        <div className="text-[10px] uppercase tracking-wider text-[#AD9C78]">
                          Estado: {res.status}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="flex justify-end pt-2">
              <button
                type="button"
                onClick={() => setSelectedGuest(null)}
                className="px-4 py-1.5 text-xs text-[#E4E2C5]/80 hover:text-[#E4E2C5] border border-[#AD9C78]/40"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
