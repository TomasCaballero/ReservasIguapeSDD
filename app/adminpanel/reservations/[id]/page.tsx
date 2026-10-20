'use client';

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { formatDateDisplay } from '@/lib/utils/date';
import PaymentModal from './payment-modal';

export default function ReservationDetailPage() {
  const { id } = useParams() as { id: string };
  const router = useRouter();

  const [reservation, setReservation] = useState<any>(null);
  const [availableUnits, setAvailableUnits] = useState<any[]>([]);
  const [selectedUnitId, setSelectedUnitId] = useState<string>('');
  const [showPaymentModal, setShowPaymentModal] = useState<boolean>(false);
  const [loading, setLoading] = useState(true);
  const [actionError, setActionError] = useState<string | null>(null);
  const [actionSuccess, setActionSuccess] = useState<string | null>(null);

  const loadData = async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/admin/reservations/${id}`);
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Reserva no encontrada');
      setReservation(data);
      setSelectedUnitId(data.unitId || '');

      // Load units for reassign
      const unitsRes = await fetch('/api/admin/units');
      const unitsData = await unitsRes.json();
      setAvailableUnits(unitsData.filter((u: any) => u.categoryId === data.categoryId));
    } catch (err: any) {
      setActionError(err.message || 'Error cargando reserva');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, [id]);

  const handleStatusTransition = async (newStatus: string) => {
    setActionError(null);
    setActionSuccess(null);
    try {
      const res = await fetch(`/api/admin/reservations/${id}/status`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus }),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Error cambiando el estado');
      }
      setActionSuccess(`Estado cambiado a ${newStatus} con éxito`);
      loadData();
    } catch (err: any) {
      setActionError(err.message);
    }
  };

  const handleAssignUnit = async (e: React.FormEvent) => {
    e.preventDefault();
    setActionError(null);
    setActionSuccess(null);
    try {
      const res = await fetch(`/api/admin/reservations/${id}/assign-unit`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ unitId: selectedUnitId }),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Error asignando la unidad');
      }
      setActionSuccess('Unidad física asignada correctamente');
      loadData();
    } catch (err: any) {
      setActionError(err.message);
    }
  };

  const handleMarkContacted = async () => {
    setActionError(null);
    try {
      const res = await fetch(`/api/admin/reservations/${id}/mark-contacted`, {
        method: 'POST',
      });
      if (res.ok) {
        setActionSuccess('Marca de contacto registrada exitosamente.');
        loadData();
      }
    } catch (err: any) {
      setActionError('Error registrando contacto');
    }
  };

  if (loading) {
    return <div className="p-8 text-center text-[#E4E2C5]/70">Cargando reserva...</div>;
  }

  if (!reservation) {
    return <div className="p-8 text-center text-red-300">Reserva no encontrada.</div>;
  }

  const totalPaid = (reservation.payments || []).reduce(
    (acc: number, p: any) => acc + Number(p.amount),
    0,
  );

  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      {/* Header */}
      <div className="border-b border-[#AD9C78]/30 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-3">
            <span className="font-mono text-2xl font-extrabold text-[#E6EF73]">
              {reservation.code}
            </span>
            <span
              className={`px-2.5 py-0.5 text-xs font-bold border uppercase ${
                reservation.status === 'CONFIRMED'
                  ? 'bg-emerald-950 text-emerald-300 border-emerald-600'
                  : reservation.status === 'PENDING'
                  ? 'bg-amber-950 text-amber-300 border-amber-600'
                  : reservation.status === 'CANCELLED'
                  ? 'bg-red-950 text-red-300 border-red-600'
                  : 'bg-zinc-800 text-zinc-300 border-zinc-600'
              }`}
            >
              {reservation.status}
            </span>
          </div>
          <p className="text-xs text-[#E4E2C5]/70 mt-1">
            Registrada el {new Date(reservation.createdAt).toLocaleString()} • Origen:{' '}
            {reservation.origin}
          </p>
        </div>

        <Link
          href="/adminpanel/reservations"
          className="text-xs text-[#E4E2C5]/80 hover:text-[#E4E2C5] border border-[#AD9C78]/50 px-3 py-1.5"
        >
          ← Volver al Listado
        </Link>
      </div>

      {actionError && (
        <div className="p-3 bg-red-950/80 border border-red-500 text-red-200 text-sm">
          {actionError}
        </div>
      )}
      {actionSuccess && (
        <div className="p-3 bg-emerald-950/80 border border-emerald-500 text-emerald-200 text-sm">
          {actionSuccess}
        </div>
      )}

      {/* State Transitions and Unit Assignment Actions */}
      <div className="bg-[#2B3D24] p-5 border border-[#AD9C78]/40 flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#AD9C78] mr-2">
            Acciones de Estado:
          </span>

          {reservation.status === 'PENDING' && (
            <>
              <button
                onClick={() => handleStatusTransition('CONFIRMED')}
                className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase px-3 py-1.5"
              >
                Confirmar Reserva
              </button>
              <button
                onClick={() => handleStatusTransition('CANCELLED')}
                className="bg-red-700 hover:bg-red-600 text-white font-bold text-xs uppercase px-3 py-1.5"
              >
                Cancelar
              </button>
            </>
          )}

          {reservation.status === 'CONFIRMED' && (
            <>
              <button
                onClick={() => handleStatusTransition('FINISHED')}
                className="bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase px-3 py-1.5"
              >
                Finalizar Estadía
              </button>
              <button
                onClick={() => handleStatusTransition('CANCELLED')}
                className="bg-red-700 hover:bg-red-600 text-white font-bold text-xs uppercase px-3 py-1.5"
              >
                Cancelar
              </button>
            </>
          )}

          {reservation.status === 'CANCELLED' && (
            <button
              onClick={() => handleStatusTransition('CONFIRMED')}
              className="bg-[#E6EF73] hover:bg-[#D4DD68] text-[#1E2B18] font-bold text-xs uppercase px-3 py-1.5"
            >
              Reactivar Reserva
            </button>
          )}

          {!reservation.paymentMethodSentAt && reservation.status === 'PENDING' && (
            <button
              onClick={handleMarkContacted}
              className="border border-[#AD9C78] hover:bg-[#3F5934] text-[#E6EF73] font-bold text-xs uppercase px-3 py-1.5"
            >
              Marcar Contactado (Datos Enviados)
            </button>
          )}
        </div>

        {/* Reassign unit */}
        <form onSubmit={handleAssignUnit} className="flex items-center gap-2">
          <label className="text-xs text-[#AD9C78] font-bold uppercase">Asignar Dpto:</label>
          <select
            value={selectedUnitId}
            onChange={(e) => setSelectedUnitId(e.target.value)}
            className="bg-[#1E2B18] text-[#E4E2C5] border border-[#AD9C78] text-xs p-1.5"
          >
            {availableUnits.map((u) => (
              <option key={u.id} value={u.id}>
                {u.name}
              </option>
            ))}
          </select>
          <button
            type="submit"
            className="bg-[#3F5934] border border-[#AD9C78] hover:bg-[#3F5934]/80 text-[#E6EF73] font-bold text-xs px-2.5 py-1.5"
          >
            Guardar
          </button>
        </form>
      </div>

      {/* Grid: Guest info + Dates and Pricing */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Guest and Companions */}
        <div className="bg-[#2B3D24] p-6 border border-[#AD9C78]/30 space-y-4">
          <h2 className="font-display text-xl text-[#E6EF73] border-b border-[#AD9C78]/20 pb-2">
            Huésped Titular
          </h2>
          <div className="text-xs space-y-1.5">
            <div>
              <span className="text-[#AD9C78] font-bold">Nombre Completo:</span>{' '}
              {reservation.guest.firstName} {reservation.guest.lastName}
            </div>
            <div>
              <span className="text-[#AD9C78] font-bold">Documento:</span>{' '}
              {reservation.guest.docType} {reservation.guest.docNumber}
            </div>
            <div>
              <span className="text-[#AD9C78] font-bold">Email:</span> {reservation.guest.email}
            </div>
            <div>
              <span className="text-[#AD9C78] font-bold">Teléfono:</span>{' '}
              <a
                href={`https://wa.me/${reservation.guest.phone.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noreferrer"
                className="text-[#E6EF73] underline"
              >
                {reservation.guest.phone}
              </a>
            </div>
            {reservation.guest.birthDate && (
              <div>
                <span className="text-[#AD9C78] font-bold">Fecha de Nacimiento:</span>{' '}
                {formatDateDisplay(reservation.guest.birthDate)}
              </div>
            )}
          </div>

          {/* Companions */}
          <div className="pt-4 border-t border-[#AD9C78]/20">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#AD9C78] mb-2">
              Acompañantes ({reservation.companions?.length || 0})
            </h3>
            {(!reservation.companions || reservation.companions.length === 0) ? (
              <p className="text-xs text-[#E4E2C5]/50">No se registraron acompañantes.</p>
            ) : (
              <ul className="text-xs space-y-1 divide-y divide-[#AD9C78]/10">
                {reservation.companions.map((c: any, i: number) => (
                  <li key={i} className="pt-1">
                    {c.firstName} {c.lastName}{' '}
                    {c.docNumber && (
                      <span className="text-[#AD9C78]">({c.docType} {c.docNumber})</span>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {reservation.notes && (
            <div className="pt-2 text-xs bg-[#1E2B18] p-3 border border-[#AD9C78]/20">
              <span className="text-[#AD9C78] font-bold block mb-1">Observaciones del Huésped:</span>
              <p>{reservation.notes}</p>
            </div>
          )}
        </div>

        {/* Stay & Pricing Details */}
        <div className="bg-[#2B3D24] p-6 border border-[#AD9C78]/30 space-y-4">
          <h2 className="font-display text-xl text-[#E6EF73] border-b border-[#AD9C78]/20 pb-2">
            Detalles de la Estadía
          </h2>
          <div className="text-xs space-y-1.5">
            <div>
              <span className="text-[#AD9C78] font-bold">Categoría:</span>{' '}
              {reservation.category.name}
            </div>
            <div>
              <span className="text-[#AD9C78] font-bold">Unidad Asignada:</span>{' '}
              {reservation.unit ? reservation.unit.name : 'Sin asignar'}
            </div>
            <div>
              <span className="text-[#AD9C78] font-bold">Fechas:</span>{' '}
              {formatDateDisplay(reservation.checkIn)} hasta {formatDateDisplay(reservation.checkOut)}
            </div>
            <div>
              <span className="text-[#AD9C78] font-bold">Pasajeros:</span> {reservation.adults}{' '}
              adultos, {reservation.children} niños
            </div>
          </div>

          <div className="pt-4 border-t border-[#AD9C78]/20 space-y-2 text-xs font-mono">
            <div className="flex justify-between">
              <span>Subtotal:</span>
              <span>
                {reservation.currency === 'ARS' ? '$' : 'U$S'}{' '}
                {Number(reservation.subtotal).toLocaleString()}
              </span>
            </div>
            {Number(reservation.discountAmount) > 0 && (
              <div className="flex justify-between text-emerald-400">
                <span>Descuento aplicado:</span>
                <span>
                  - {reservation.currency === 'ARS' ? '$' : 'U$S'}{' '}
                  {Number(reservation.discountAmount).toLocaleString()}
                </span>
              </div>
            )}
            <div className="flex justify-between text-sm font-bold text-[#E6EF73] pt-2 border-t border-[#AD9C78]/30">
              <span>Total Estadía:</span>
              <span>
                {reservation.currency === 'ARS' ? '$' : 'U$S'}{' '}
                {Number(reservation.totalPrice).toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between text-xs text-white pt-1">
              <span>Total Cobrado:</span>
              <span>
                {reservation.currency === 'ARS' ? '$' : 'U$S'} {totalPaid.toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between text-xs text-amber-300 font-bold">
              <span>Saldo Pendiente:</span>
              <span>
                {reservation.currency === 'ARS' ? '$' : 'U$S'}{' '}
                {Math.max(0, Number(reservation.totalPrice) - totalPaid).toLocaleString()}
              </span>
            </div>
          </div>

          {/* Payment list and Register button */}
          <div className="pt-4 border-t border-[#AD9C78]/20 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-[#AD9C78]">
                Cobros Registrados ({reservation.payments?.length || 0})
              </span>
              <button
                type="button"
                onClick={() => setShowPaymentModal(true)}
                className="bg-[#E6EF73] hover:bg-[#D4DD68] text-[#1E2B18] font-bold text-xs uppercase px-3 py-1"
              >
                + Registrar Cobro
              </button>
            </div>

            {(!reservation.payments || reservation.payments.length === 0) ? (
              <p className="text-xs text-[#E4E2C5]/50">No hay cobros registrados aún.</p>
            ) : (
              <div className="space-y-2">
                {reservation.payments.map((p: any) => (
                  <div key={p.id} className="bg-[#1E2B18] p-2.5 border border-[#AD9C78]/20 text-xs flex justify-between items-center">
                    <div>
                      <div className="font-bold text-[#E6EF73]">
                        {p.currency === 'ARS' ? '$' : 'U$S'} {Number(p.amount).toLocaleString()}{' '}
                        <span className="text-[10px] text-[#AD9C78]">({p.paymentMethod})</span>
                      </div>
                      <div className="text-[10px] text-[#E4E2C5]/60">
                        {new Date(p.createdAt).toLocaleDateString()} {p.notes && `• ${p.notes}`}
                      </div>
                    </div>
                    {p.receiptPath && (
                      <a
                        href={`/api/admin/payments/${p.id}/receipt`}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[10px] bg-[#3F5934] border border-[#AD9C78] text-[#E6EF73] px-2 py-1 hover:bg-[#3F5934]/80"
                      >
                        Descargar Comprobante
                      </a>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <PaymentModal
        reservationId={reservation.id}
        defaultCurrency={reservation.currency}
        isOpen={showPaymentModal}
        onClose={() => setShowPaymentModal(false)}
        onPaymentSuccess={loadData}
      />
    </div>
  );
}
