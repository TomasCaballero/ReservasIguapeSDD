import React from 'react';
import Link from 'next/link';
import prisma from '@/lib/db/client';
import { formatDateDisplay } from '@/lib/utils/date';

export default async function ReservationsListPage({
  searchParams,
}: {
  searchParams: Promise<{ status?: string; search?: string }>;
}) {
  const { status, search } = await searchParams;

  const where: any = {};
  if (status) {
    where.status = status;
  }
  if (search) {
    where.OR = [
      { code: { contains: search, mode: 'insensitive' } },
      { guest: { firstName: { contains: search, mode: 'insensitive' } } },
      { guest: { lastName: { contains: search, mode: 'insensitive' } } },
      { guest: { docNumber: { contains: search, mode: 'insensitive' } } },
    ];
  }

  const reservations = await prisma.reservation.findMany({
    where,
    include: {
      guest: true,
      category: true,
      unit: true,
      payments: true,
    },
    orderBy: { createdAt: 'desc' },
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="border-b border-[#AD9C78]/30 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-display text-3xl text-[#E6EF73]">Gestión de Reservas</h1>
          <p className="text-sm text-[#E4E2C5]/70">
            Administrá el estado, asignación de unidades y registro de cobros.
          </p>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 text-xs">
        {[
          { label: 'Todas', value: '' },
          { label: 'Pendientes', value: 'PENDING' },
          { label: 'Confirmadas', value: 'CONFIRMED' },
          { label: 'Canceladas', value: 'CANCELLED' },
          { label: 'Finalizadas', value: 'FINISHED' },
        ].map((tab) => {
          const isActive = (status || '') === tab.value;
          return (
            <Link
              key={tab.value}
              href={tab.value ? `/adminpanel/reservations?status=${tab.value}` : '/adminpanel/reservations'}
              className={`px-3 py-1.5 font-bold uppercase tracking-wider transition-colors border ${
                isActive
                  ? 'bg-[#E6EF73] text-[#1E2B18] border-[#E6EF73]'
                  : 'bg-[#2B3D24] text-[#E4E2C5] border-[#AD9C78]/40 hover:bg-[#3F5934]'
              }`}
            >
              {tab.label}
            </Link>
          );
        })}
      </div>

      {/* Table */}
      <div className="bg-[#2B3D24] border border-[#AD9C78]/30 overflow-x-auto shadow-2xl">
        <table className="w-full text-left text-xs">
          <thead className="bg-[#3F5934] uppercase tracking-wider text-[#AD9C78] border-b border-[#AD9C78]/30">
            <tr>
              <th className="p-3">Código</th>
              <th className="p-3">Huésped Titular</th>
              <th className="p-3">Categoría / Unidad</th>
              <th className="p-3">Check-In / Out</th>
              <th className="p-3">Total</th>
              <th className="p-3">Estado</th>
              <th className="p-3 text-right">Acción</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#AD9C78]/20 text-[#E4E2C5]">
            {reservations.length === 0 ? (
              <tr>
                <td colSpan={7} className="p-8 text-center text-[#E4E2C5]/60">
                  No se encontraron reservas con los criterios seleccionados.
                </td>
              </tr>
            ) : (
              reservations.map((res) => {
                const totalPaid = res.payments.reduce((acc, p) => acc + Number(p.amount), 0);
                const isFullyPaid = totalPaid >= Number(res.totalPrice);

                return (
                  <tr key={res.id} className="hover:bg-[#3F5934]/40">
                    <td className="p-3 font-mono font-bold text-[#E6EF73]">
                      <Link href={`/adminpanel/reservations/${res.id}`} className="hover:underline">
                        {res.code}
                      </Link>
                    </td>
                    <td className="p-3">
                      <div className="font-semibold text-white">
                        {res.guest.firstName} {res.guest.lastName}
                      </div>
                      <div className="text-[11px] text-[#E4E2C5]/60">
                        {res.guest.docType} {res.guest.docNumber} • {res.guest.phone}
                      </div>
                    </td>
                    <td className="p-3">
                      <div>{res.category.name}</div>
                      <div className="text-[11px] text-[#AD9C78]">
                        {res.unit ? res.unit.name : 'Sin asignar'}
                      </div>
                    </td>
                    <td className="p-3 font-mono">
                      {formatDateDisplay(res.checkIn)} → {formatDateDisplay(res.checkOut)}
                    </td>
                    <td className="p-3 font-mono">
                      <div>
                        {res.currency === 'ARS' ? '$' : 'U$S'}{' '}
                        {Number(res.totalPrice).toLocaleString()}
                      </div>
                      <div className="text-[10px] text-[#AD9C78]">
                        Cobrado: {res.currency === 'ARS' ? '$' : 'U$S'} {totalPaid.toLocaleString()}
                      </div>
                    </td>
                    <td className="p-3">
                      <span
                        className={`px-2 py-0.5 text-[10px] font-bold border uppercase ${
                          res.status === 'CONFIRMED'
                            ? 'bg-emerald-950 text-emerald-300 border-emerald-600'
                            : res.status === 'PENDING'
                            ? 'bg-amber-950 text-amber-300 border-amber-600'
                            : res.status === 'CANCELLED'
                            ? 'bg-red-950 text-red-300 border-red-600'
                            : 'bg-zinc-800 text-zinc-300 border-zinc-600'
                        }`}
                      >
                        {res.status === 'PENDING'
                          ? 'Pendiente'
                          : res.status === 'CONFIRMED'
                          ? 'Confirmada'
                          : res.status === 'CANCELLED'
                          ? 'Cancelada'
                          : 'Finalizada'}
                      </span>
                    </td>
                    <td className="p-3 text-right">
                      <Link
                        href={`/adminpanel/reservations/${res.id}`}
                        className="bg-[#3F5934] hover:bg-[#3F5934]/80 border border-[#AD9C78] text-[#E6EF73] px-3 py-1 font-bold text-[11px] transition-colors"
                      >
                        Ver Detalle
                      </Link>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
