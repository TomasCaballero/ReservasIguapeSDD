import React from 'react';
import Link from 'next/link';
import prisma from '@/lib/db/client';
import { formatDateISO } from '@/lib/utils/date';
import { UpcomingBirthdaysWidget } from './upcoming-birthdays-widget';

export default async function AdminDashboardPage() {
  const [totalReservations, pendingReservations, unitsCount, categoriesCount] = await Promise.all([
    prisma.reservation.count({ where: { status: { in: ['PENDING', 'CONFIRMED'] } } }),
    prisma.reservation.count({ where: { status: 'PENDING' } }),
    prisma.unit.count({ where: { isActive: true } }),
    prisma.category.count({ where: { isActive: true } }),
  ]);

  // Check reservations needing contact (> 24 hours without paymentMethodSentAt)
  const twentyFourHoursAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);
  const uncontactedAlerts = await prisma.reservation.findMany({
    where: {
      status: 'PENDING',
      paymentMethodSentAt: null,
      createdAt: { lt: twentyFourHoursAgo },
    },
    include: { guest: true },
  });

  return (
    <div className="space-y-8">
      {/* Top Banner */}
      <div className="border-b border-[#AD9C78]/30 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-display text-3xl text-[#E6EF73]">Panel de Control PMS</h1>
          <p className="text-sm text-[#E4E2C5]/70">
            Resumen operativo y estado del inventario de Iguapé Aparts.
          </p>
        </div>
        <div className="flex gap-3">
          <Link
            href="/adminpanel/calendar"
            className="bg-[#E6EF73] hover:bg-[#D4DD68] text-[#1E2B18] font-bold text-xs uppercase px-4 py-2.5 tracking-wider transition-colors"
          >
            Ver Calendario
          </Link>
          <Link
            href="/adminpanel/reservations"
            className="border border-[#AD9C78] hover:bg-[#2B3D24] text-[#E4E2C5] text-xs uppercase px-4 py-2.5 tracking-wider transition-colors"
          >
            Gestionar Reservas
          </Link>
        </div>
      </div>

      {/* Alert Banner for pending contact > 24 hours (US4) */}
      {uncontactedAlerts.length > 0 && (
        <div className="bg-amber-950/80 border border-amber-500 p-4 text-amber-200">
          <div className="flex items-center gap-2 font-bold mb-1">
            <span>⚠️ Alerta de Contacto Pendiente ({uncontactedAlerts.length})</span>
          </div>
          <p className="text-xs">
            Hay reservas en estado Pendiente que superaron las 24 horas sin registrar envío de datos
            de pago:
          </p>
          <ul className="mt-2 space-y-1 text-xs">
            {uncontactedAlerts.map((res) => (
              <li key={res.id}>
                <Link
                  href={`/adminpanel/reservations/${res.id}`}
                  className="underline hover:text-white font-mono"
                >
                  {res.code}
                </Link>{' '}
                — {res.guest.firstName} {res.guest.lastName} ({res.guest.phone})
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-[#2B3D24] border border-[#AD9C78]/30 p-5">
          <span className="text-xs font-bold uppercase tracking-wider text-[#AD9C78]">
            Reservas Activas
          </span>
          <p className="font-display text-4xl text-[#E6EF73] mt-2">{totalReservations}</p>
          <p className="text-[11px] text-[#E4E2C5]/60 mt-1">Pendientes y Confirmadas</p>
        </div>

        <div className="bg-[#2B3D24] border border-[#AD9C78]/30 p-5">
          <span className="text-xs font-bold uppercase tracking-wider text-[#AD9C78]">
            Pendientes de Confirmar
          </span>
          <p className="font-display text-4xl text-amber-300 mt-2">{pendingReservations}</p>
          <p className="text-[11px] text-[#E4E2C5]/60 mt-1">Aguardando seña o contacto</p>
        </div>

        <div className="bg-[#2B3D24] border border-[#AD9C78]/30 p-5">
          <span className="text-xs font-bold uppercase tracking-wider text-[#AD9C78]">
            Unidades Físicas
          </span>
          <p className="font-display text-4xl text-[#E4E2C5] mt-2">{unitsCount}</p>
          <p className="text-[11px] text-[#E4E2C5]/60 mt-1">En el complejo</p>
        </div>

        <div className="bg-[#2B3D24] border border-[#AD9C78]/30 p-5">
          <span className="text-xs font-bold uppercase tracking-wider text-[#AD9C78]">
            Categorías
          </span>
          <p className="font-display text-4xl text-[#E4E2C5] mt-2">{categoriesCount}</p>
          <p className="text-[11px] text-[#E4E2C5]/60 mt-1">Tipologías activas</p>
        </div>
      </div>

      {/* CRM Upcoming Birthdays Widget (US6) */}
      <div className="max-w-2xl">
        <UpcomingBirthdaysWidget />
      </div>
    </div>
  );
}
