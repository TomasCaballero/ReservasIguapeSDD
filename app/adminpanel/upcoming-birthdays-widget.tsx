'use client';

import React, { useEffect, useState } from 'react';

interface BirthdayGuest {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  birthDate: string;
  daysRemaining: number;
}

export function UpcomingBirthdaysWidget() {
  const [birthdays, setBirthdays] = useState<BirthdayGuest[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/admin/guests/upcoming-birthdays')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setBirthdays(data);
        }
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const formatBirthday = (dateStr: string) => {
    try {
      const d = new Date(dateStr);
      const day = String(d.getUTCDate()).padStart(2, '0');
      const month = String(d.getUTCMonth() + 1).padStart(2, '0');
      return `${day}/${month}`;
    } catch {
      return '';
    }
  };

  const getDaysLabel = (days: number) => {
    if (days === 0) return '🎉 ¡Hoy!';
    if (days === 1) return 'Mañana';
    return `En ${days} días`;
  };

  return (
    <div className="bg-[#2B3D24] border border-[#AD9C78]/40 p-5 space-y-4">
      <div className="flex items-center justify-between border-b border-[#AD9C78]/20 pb-3">
        <h3 className="font-display text-xl text-[#E6EF73] flex items-center gap-2">
          🎂 Próximos Cumpleañeros (30 días)
        </h3>
        <span className="text-xs bg-[#3F5934] text-[#E4E2C5] px-2.5 py-0.5 border border-[#AD9C78]/30 font-semibold">
          {birthdays.length} {birthdays.length === 1 ? 'huésped' : 'huéspedes'}
        </span>
      </div>

      {loading ? (
        <p className="text-xs text-[#E4E2C5]/60 italic">Cargando cumpleañeros...</p>
      ) : birthdays.length === 0 ? (
        <p className="text-xs text-[#E4E2C5]/70 italic">
          No hay huéspedes registrados con cumpleaños en los próximos 30 días.
        </p>
      ) : (
        <ul className="divide-y divide-[#AD9C78]/20 text-xs">
          {birthdays.map((guest) => (
            <li key={guest.id} className="py-2.5 flex items-center justify-between">
              <div>
                <p className="font-bold text-[#E4E2C5]">
                  {guest.lastName}, {guest.firstName}
                </p>
                <p className="text-[#AD9C78] text-[11px]">
                  Fecha: {formatBirthday(guest.birthDate)}
                </p>
              </div>
              <div className="text-right">
                <span className={`px-2 py-0.5 text-[11px] font-bold ${
                  guest.daysRemaining === 0
                    ? 'bg-[#E6EF73] text-[#1E2B18]'
                    : 'bg-[#3F5934] text-[#E6EF73] border border-[#AD9C78]/30'
                }`}>
                  {getDaysLabel(guest.daysRemaining)}
                </span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
