'use client';

import React, { useState, useEffect } from 'react';
import { format, addDays, startOfToday, eachDayOfInterval } from 'date-fns';
import { formatDateDisplay } from '@/lib/utils/date';

interface CalendarUnit {
  id: string;
  name: string;
  categoryId: string;
  categoryName: string;
}

interface CalendarEvent {
  id: string;
  unitId: string;
  unitName: string;
  categoryName: string;
  type: 'RESERVATION' | 'MANUAL_BLOCK' | 'ICAL_BLOCK' | 'SOFT_LOCK';
  checkIn: string;
  checkOut: string;
  guestName?: string;
  bookingCode?: string;
  notes?: string;
}

export default function CalendarPage() {
  const [units, setUnits] = useState<CalendarUnit[]>([]);
  const [occupancies, setOccupancies] = useState<CalendarEvent[]>([]);
  const [loading, setLoading] = useState(true);

  // Default range: 14 days starting today
  const [startDate, setStartDate] = useState<Date>(startOfToday());
  const [daysCount, setDaysCount] = useState<number>(14);

  // Manual block modal
  const [showBlockModal, setShowBlockModal] = useState(false);
  const [blockUnitId, setBlockUnitId] = useState('');
  const [blockCheckIn, setBlockCheckIn] = useState('');
  const [blockCheckOut, setBlockCheckOut] = useState('');
  const [blockNotes, setBlockNotes] = useState('');
  const [blockError, setBlockError] = useState<string | null>(null);

  const days = eachDayOfInterval({
    start: startDate,
    end: addDays(startDate, daysCount - 1),
  });

  const fetchCalendar = async () => {
    setLoading(true);
    try {
      const startStr = format(startDate, 'yyyy-MM-dd');
      const endStr = format(addDays(startDate, daysCount + 5), 'yyyy-MM-dd');
      const res = await fetch(`/api/admin/calendar?startDate=${startStr}&endDate=${endStr}`);
      const data = await res.json();
      setUnits(data.units || []);
      setOccupancies(data.occupancies || []);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCalendar();
  }, [startDate, daysCount]);

  const handleCreateBlock = async (e: React.FormEvent) => {
    e.preventDefault();
    setBlockError(null);
    try {
      const res = await fetch('/api/admin/calendar/blocks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          unitId: blockUnitId,
          checkIn: blockCheckIn,
          checkOut: blockCheckOut,
          notes: blockNotes,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Error al bloquear unidad');
      }
      setShowBlockModal(false);
      setBlockNotes('');
      fetchCalendar();
    } catch (err: any) {
      setBlockError(err.message || 'Error bloqueando unidad');
    }
  };

  return (
    <div className="space-y-6">
      {/* Header and Controls */}
      <div className="border-b border-[#AD9C78]/30 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-display text-3xl text-[#E6EF73]">Mapa de Ocupación</h1>
          <p className="text-sm text-[#E4E2C5]/70">
            Visualización de estadías por unidad física. Regla inmutable: la fecha de check-out queda
            libre para nuevo check-in.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setStartDate(addDays(startDate, -7))}
            className="bg-[#2B3D24] border border-[#AD9C78] text-[#E4E2C5] px-3 py-1.5 text-xs font-bold hover:bg-[#3F5934]"
          >
            ← Anterior
          </button>
          <button
            onClick={() => setStartDate(startOfToday())}
            className="bg-[#2B3D24] border border-[#AD9C78] text-[#E6EF73] px-3 py-1.5 text-xs font-bold hover:bg-[#3F5934]"
          >
            Hoy
          </button>
          <button
            onClick={() => setStartDate(addDays(startDate, 7))}
            className="bg-[#2B3D24] border border-[#AD9C78] text-[#E4E2C5] px-3 py-1.5 text-xs font-bold hover:bg-[#3F5934]"
          >
            Siguiente →
          </button>
          <button
            onClick={() => {
              setBlockUnitId(units[0]?.id || '');
              setBlockCheckIn(format(startDate, 'yyyy-MM-dd'));
              setBlockCheckOut(format(addDays(startDate, 2), 'yyyy-MM-dd'));
              setShowBlockModal(true);
            }}
            className="bg-[#E6EF73] hover:bg-[#D4DD68] text-[#1E2B18] font-bold text-xs uppercase px-4 py-2 tracking-wider"
          >
            + Bloquear Unidad
          </button>
        </div>
      </div>

      {/* Matrix Grid */}
      <div className="bg-[#2B3D24] border border-[#AD9C78]/40 overflow-x-auto shadow-2xl">
        <table className="w-full border-collapse text-xs">
          <thead>
            <tr className="bg-[#3F5934] text-[#AD9C78] border-b border-[#AD9C78]/30">
              <th className="p-3 text-left w-48 sticky left-0 bg-[#3F5934] z-10 border-r border-[#AD9C78]/30">
                Unidad Física
              </th>
              {days.map((day) => {
                const isToday = format(day, 'yyyy-MM-dd') === format(startOfToday(), 'yyyy-MM-dd');
                return (
                  <th
                    key={day.toISOString()}
                    className={`p-2 text-center min-w-[70px] border-r border-[#AD9C78]/20 ${
                      isToday ? 'bg-[#E6EF73]/20 text-[#E6EF73] font-bold' : ''
                    }`}
                  >
                    <div>{format(day, 'EEE')}</div>
                    <div className="text-sm font-mono">{format(day, 'dd/MM')}</div>
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody className="divide-y divide-[#AD9C78]/20">
            {units.map((unit) => (
              <tr key={unit.id} className="hover:bg-[#3F5934]/30">
                <td className="p-3 font-semibold text-[#E4E2C5] sticky left-0 bg-[#2B3D24] z-10 border-r border-[#AD9C78]/30">
                  <div className="font-bold text-[#E6EF73]">{unit.name}</div>
                  <div className="text-[10px] text-[#E4E2C5]/60">{unit.categoryName}</div>
                </td>

                {days.map((day) => {
                  const dayStr = format(day, 'yyyy-MM-dd');

                  // Invariant check: is this day occupied for this unit?
                  // Check-in day is occupied.
                  // Check-out day is FREE (rango [checkIn, checkOut)).
                  const activeEvent = occupancies.find((occ) => {
                    return (
                      occ.unitId === unit.id &&
                      dayStr >= occ.checkIn &&
                      dayStr < occ.checkOut // checkOut day is free!
                    );
                  });

                  // Check if this day is a check-out day (meaning morning check-out, afternoon free)
                  const isCheckOutDay = occupancies.some(
                    (occ) => occ.unitId === unit.id && dayStr === occ.checkOut,
                  );

                  return (
                    <td
                      key={dayStr}
                      className={`p-1.5 text-center border-r border-[#AD9C78]/20 relative h-14 ${
                        activeEvent ? 'bg-[#3F5934]' : ''
                      }`}
                    >
                      {activeEvent ? (
                        <div
                          className={`w-full h-full p-1 flex flex-col justify-center text-[10px] leading-tight border ${
                            activeEvent.type === 'RESERVATION'
                              ? 'bg-emerald-950/90 border-emerald-600 text-emerald-200'
                              : activeEvent.type === 'MANUAL_BLOCK'
                              ? 'bg-amber-950/90 border-amber-600 text-amber-200'
                              : activeEvent.type === 'ICAL_BLOCK'
                              ? 'bg-blue-950/90 border-blue-600 text-blue-200'
                              : 'bg-purple-950/90 border-purple-600 text-purple-200'
                          }`}
                          title={`${activeEvent.type} - Entrada: ${activeEvent.checkIn} Salida: ${activeEvent.checkOut}`}
                        >
                          <span className="font-bold truncate">
                            {activeEvent.bookingCode || activeEvent.notes || activeEvent.type}
                          </span>
                          <span className="text-[9px] text-white/70 truncate">
                            {activeEvent.guestName}
                          </span>
                        </div>
                      ) : isCheckOutDay ? (
                        <div className="w-full h-full flex items-center justify-center text-[9px] text-[#AD9C78]">
                          Salida (Libre)
                        </div>
                      ) : (
                        <span className="text-emerald-500/40 font-mono text-[10px]">Libre</span>
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Manual Block Modal */}
      {showBlockModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50">
          <div className="bg-[#3F5934] p-6 max-w-md w-full border border-[#AD9C78] space-y-4">
            <h3 className="font-display text-2xl text-[#E6EF73]">Crear Bloqueo Manual</h3>
            {blockError && (
              <div className="p-2 bg-red-950 border border-red-500 text-xs text-red-200">
                {blockError}
              </div>
            )}
            <form onSubmit={handleCreateBlock} className="space-y-4 text-xs">
              <div>
                <label className="block text-[#E4E2C5]/80 uppercase font-bold mb-1">Unidad</label>
                <select
                  value={blockUnitId}
                  onChange={(e) => setBlockUnitId(e.target.value)}
                  className="w-full bg-[#2B3D24] text-[#E4E2C5] border border-[#AD9C78] p-2"
                >
                  {units.map((u) => (
                    <option key={u.id} value={u.id}>
                      {u.name} ({u.categoryName})
                    </option>
                  ))}
                </select>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-[#E4E2C5]/80 uppercase font-bold mb-1">
                    Check-In
                  </label>
                  <input
                    type="date"
                    value={blockCheckIn}
                    onChange={(e) => setBlockCheckIn(e.target.value)}
                    className="w-full bg-[#2B3D24] text-[#E4E2C5] border border-[#AD9C78] p-2"
                    required
                  />
                </div>
                <div>
                  <label className="block text-[#E4E2C5]/80 uppercase font-bold mb-1">
                    Check-Out
                  </label>
                  <input
                    type="date"
                    value={blockCheckOut}
                    onChange={(e) => setBlockCheckOut(e.target.value)}
                    className="w-full bg-[#2B3D24] text-[#E4E2C5] border border-[#AD9C78] p-2"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-[#E4E2C5]/80 uppercase font-bold mb-1">
                  Motivo / Observaciones
                </label>
                <input
                  type="text"
                  placeholder="Ej: Pintura y mantenimiento"
                  value={blockNotes}
                  onChange={(e) => setBlockNotes(e.target.value)}
                  className="w-full bg-[#2B3D24] text-[#E4E2C5] border border-[#AD9C78] p-2"
                />
              </div>
              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowBlockModal(false)}
                  className="border border-[#AD9C78] px-4 py-2 text-[#E4E2C5]"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="bg-[#E6EF73] text-[#1E2B18] font-bold px-4 py-2"
                >
                  Confirmar Bloqueo
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
