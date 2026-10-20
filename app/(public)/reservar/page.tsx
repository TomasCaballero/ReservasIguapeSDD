'use client';

import React, { useState, useEffect, useTransition } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { differenceInYears, format } from 'date-fns';

interface CompanionItem {
  firstName: string;
  lastName: string;
  docType: 'DNI' | 'PASSPORT' | 'CI' | 'OTHER';
  docNumber: string;
  birthDate: string;
}

export default function ReservarStep2Page() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const categoryId = searchParams.get('categoryId') || '';
  const checkIn = searchParams.get('checkIn') || '';
  const checkOut = searchParams.get('checkOut') || '';
  const adults = Number(searchParams.get('adults') || 1);
  const children = Number(searchParams.get('children') || 0);
  const currency = (searchParams.get('currency') || 'ARS') as 'ARS' | 'USD';

  // Soft lock state
  const [lockToken, setLockToken] = useState<string | null>(null);
  const [secondsRemaining, setSecondsRemaining] = useState<number>(900); // 15 mins
  const [lockExpired, setLockExpired] = useState<boolean>(false);
  const [lockLoading, setLockLoading] = useState<boolean>(true);
  const [lockError, setLockError] = useState<string | null>(null);

  // Titular form
  const [docType, setDocType] = useState<'DNI' | 'PASSPORT' | 'CI' | 'OTHER'>('DNI');
  const [docNumber, setDocNumber] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [notes, setNotes] = useState('');

  // Companions
  const [companions, setCompanions] = useState<CompanionItem[]>([]);

  // Submission state
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [confirmationData, setConfirmationData] = useState<{
    bookingCode: string;
    totalPrice: number;
    currency: string;
    fullName: string;
  } | null>(null);

  // 1. Acquire soft lock on mount
  useEffect(() => {
    if (!categoryId || !checkIn || !checkOut) {
      router.push('/');
      return;
    }

    let isMounted = true;
    async function initLock() {
      try {
        setLockLoading(true);
        const res = await fetch('/api/public/soft-lock', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ categoryId, checkIn, checkOut }),
        });

        const data = await res.json();
        if (!res.ok) {
          throw new Error(data.error || 'No fue posible bloquear temporalmente la unidad.');
        }

        if (isMounted) {
          setLockToken(data.lockToken);
          setSecondsRemaining(data.expiresInSeconds || 900);
          setLockLoading(false);
        }
      } catch (err: any) {
        if (isMounted) {
          setLockError(err.message || 'Error bloqueando la unidad');
          setLockLoading(false);
        }
      }
    }

    initLock();

    return () => {
      isMounted = false;
    };
  }, [categoryId, checkIn, checkOut, router]);

  // 2. Countdown timer
  useEffect(() => {
    if (!lockToken || lockExpired) return;

    const interval = setInterval(() => {
      setSecondsRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setLockExpired(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [lockToken, lockExpired]);

  const formatTimer = (sec: number) => {
    const mins = Math.floor(sec / 60);
    const secs = sec % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleAddCompanion = () => {
    setCompanions([
      ...companions,
      { firstName: '', lastName: '', docType: 'DNI', docNumber: '', birthDate: '' },
    ]);
  };

  const handleRemoveCompanion = (index: number) => {
    setCompanions(companions.filter((_, i) => i !== index));
  };

  const handleCompanionChange = (index: number, field: keyof CompanionItem, value: string) => {
    const updated = [...companions];
    updated[index] = { ...updated[index], [field]: value };
    setCompanions(updated);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    if (!lockToken || lockExpired) {
      setSubmitError('El tiempo para completar la reserva expiró. Por favor selecciona nuevamente las fechas.');
      return;
    }

    // Validate titular age
    if (!birthDate) {
      setSubmitError('Por favor ingrese la fecha de nacimiento del titular.');
      return;
    }

    const birth = new Date(birthDate);
    const age = differenceInYears(new Date(), birth);
    if (age < 18) {
      setSubmitError('El titular de la reserva debe ser mayor de 18 años.');
      return;
    }

    setSubmitting(true);

    try {
      const payload = {
        categoryId,
        checkIn,
        checkOut,
        adults,
        children,
        currency,
        guest: {
          docType,
          docNumber,
          firstName,
          lastName,
          email,
          phone,
          birthDate,
        },
        companions,
        notes,
      };

      const res = await fetch('/api/public/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-soft-lock-token': lockToken,
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Error procesando la solicitud de reserva.');
      }

      setConfirmationData({
        bookingCode: data.bookingCode,
        totalPrice: data.totalPrice,
        currency: data.currency,
        fullName: data.guest.fullName,
      });
    } catch (err: any) {
      setSubmitError(err.message || 'Error en el servidor');
    } finally {
      setSubmitting(false);
    }
  };

  // Confirmation Success View
  if (confirmationData) {
    const waText = encodeURIComponent(
      `Hola Iguapé Aparts! Acabo de enviar mi solicitud de reserva ${confirmationData.bookingCode} a nombre de ${confirmationData.fullName}. Aguardo sus datos para coordinar el pago de la seña.`,
    );

    return (
      <div className="max-w-2xl mx-auto bg-[#3F5934] p-8 sm:p-12 border border-[#AD9C78] shadow-2xl text-center space-y-6">
        <div className="w-16 h-16 mx-auto bg-[#E6EF73] text-[#1E2B18] flex items-center justify-center font-bold text-2xl">
          ✓
        </div>
        <h1 className="font-display text-3xl sm:text-4xl text-[#E6EF73]">
          ¡Solicitud de Reserva Recibida!
        </h1>
        <p className="text-[#E4E2C5]/90 text-sm sm:text-base font-sans">
          Tu reserva está registrada en estado <span className="font-bold text-[#E6EF73]">Pendiente</span>.
          No realizás ningún pago online ahora: un recepcionista revisará tu pedido y te enviará los
          datos para abonar la seña bancaria.
        </p>

        <div className="bg-[#2B3D24] p-5 border border-[#AD9C78]/40 text-left space-y-2">
          <div className="flex justify-between border-b border-[#AD9C78]/20 pb-2">
            <span className="text-xs text-[#AD9C78] uppercase font-bold">Código de Reserva:</span>
            <span className="font-mono text-lg font-extrabold text-[#E6EF73]">
              {confirmationData.bookingCode}
            </span>
          </div>
          <div className="flex justify-between border-b border-[#AD9C78]/20 pb-2">
            <span className="text-xs text-[#AD9C78] uppercase font-bold">Titular:</span>
            <span className="text-sm text-[#E4E2C5]">{confirmationData.fullName}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-xs text-[#AD9C78] uppercase font-bold">Monto Total:</span>
            <span className="text-sm font-bold text-[#E6EF73]">
              {confirmationData.currency === 'ARS' ? '$' : 'U$S'}{' '}
              {confirmationData.totalPrice.toLocaleString()}
            </span>
          </div>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={`https://wa.me/5491123456789?text=${waText}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] hover:bg-[#20ba5a] text-black font-bold px-6 py-3.5 text-sm uppercase tracking-wider inline-flex items-center justify-center gap-2 transition-colors rounded-none"
          >
            <span>Continuar por WhatsApp</span>
          </a>
          <Link
            href="/"
            className="bg-[#2B3D24] hover:bg-[#2B3D24]/80 text-[#E4E2C5] border border-[#AD9C78] px-6 py-3.5 text-sm uppercase tracking-wider transition-colors inline-flex items-center justify-center rounded-none"
          >
            Volver al Inicio
          </Link>
        </div>
      </div>
    );
  }

  if (lockLoading) {
    return (
      <div className="max-w-xl mx-auto py-20 text-center space-y-4">
        <h2 className="font-display text-2xl text-[#E6EF73]">Bloqueando unidad física...</h2>
        <p className="text-sm text-[#E4E2C5]/70">
          Garantizando disponibilidad exclusiva por 15 minutos exactos para tu reserva.
        </p>
      </div>
    );
  }

  if (lockError) {
    return (
      <div className="max-w-xl mx-auto bg-[#3F5934] p-8 border border-red-500 text-center space-y-4">
        <h2 className="font-display text-2xl text-red-200">No se pudo retener la unidad</h2>
        <p className="text-sm text-[#E4E2C5]/90">{lockError}</p>
        <Link
          href="/"
          className="inline-block mt-4 bg-[#E6EF73] text-[#1E2B18] font-bold px-6 py-2.5 text-sm uppercase rounded-none"
        >
          Elegir Otras Fechas
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Soft Lock Timer Banner */}
      <div
        className={`p-4 border flex items-center justify-between ${
          lockExpired
            ? 'bg-red-950/80 border-red-500 text-red-200'
            : secondsRemaining < 180
            ? 'bg-amber-950/80 border-amber-500 text-amber-200'
            : 'bg-[#3F5934] border-[#AD9C78] text-[#E4E2C5]'
        }`}
      >
        <div className="text-sm font-sans">
          {lockExpired ? (
            <span className="font-bold">
              El tiempo para completar esta reserva venció. La unidad fue liberada.
            </span>
          ) : (
            <span>
              Unidad retenida temporalmente. Tenés{' '}
              <span className="font-mono font-bold text-[#E6EF73] text-base">
                {formatTimer(secondsRemaining)}
              </span>{' '}
              para confirmar tus datos.
            </span>
          )}
        </div>
        {lockExpired && (
          <Link
            href="/"
            className="bg-red-700 hover:bg-red-600 text-white text-xs uppercase font-bold px-4 py-2 rounded-none"
          >
            Reiniciar
          </Link>
        )}
      </div>

      {/* Main Form */}
      <div className="bg-[#3F5934] p-6 sm:p-10 border border-[#AD9C78]/40 shadow-xl">
        <h1 className="font-display text-3xl text-[#E6EF73] mb-2">Completá tus Datos</h1>
        <p className="text-sm text-[#E4E2C5]/80 mb-8 font-sans">
          Paso 2 de 2: Registrá los datos del titular para coordinar tu reserva directa.
        </p>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Titular Section */}
          <div className="space-y-4">
            <h2 className="text-sm font-bold uppercase tracking-wider text-[#AD9C78] border-b border-[#AD9C78]/20 pb-2">
              Datos del Titular (Mayor de 18 años)
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#E4E2C5]/80 uppercase mb-1">
                  Nombre *
                </label>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full bg-[#2B3D24] text-[#E4E2C5] border border-[#AD9C78] px-3 py-2 text-sm focus:outline-none focus:border-[#E6EF73] rounded-none"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#E4E2C5]/80 uppercase mb-1">
                  Apellido *
                </label>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full bg-[#2B3D24] text-[#E4E2C5] border border-[#AD9C78] px-3 py-2 text-sm focus:outline-none focus:border-[#E6EF73] rounded-none"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#E4E2C5]/80 uppercase mb-1">
                  Tipo de Documento *
                </label>
                <select
                  value={docType}
                  onChange={(e) => setDocType(e.target.value as any)}
                  className="w-full bg-[#2B3D24] text-[#E4E2C5] border border-[#AD9C78] px-3 py-2 text-sm focus:outline-none focus:border-[#E6EF73] rounded-none"
                >
                  <option value="DNI">DNI (Argentina)</option>
                  <option value="PASSPORT">Pasaporte</option>
                  <option value="CI">Cédula de Identidad</option>
                  <option value="OTHER">Otro</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#E4E2C5]/80 uppercase mb-1">
                  Número de Documento *
                </label>
                <input
                  type="text"
                  value={docNumber}
                  onChange={(e) => setDocNumber(e.target.value)}
                  placeholder="Sin puntos ni guiones"
                  className="w-full bg-[#2B3D24] text-[#E4E2C5] border border-[#AD9C78] px-3 py-2 text-sm focus:outline-none focus:border-[#E6EF73] rounded-none"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#E4E2C5]/80 uppercase mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="ejemplo@correo.com"
                  className="w-full bg-[#2B3D24] text-[#E4E2C5] border border-[#AD9C78] px-3 py-2 text-sm focus:outline-none focus:border-[#E6EF73] rounded-none"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#E4E2C5]/80 uppercase mb-1">
                  Teléfono / WhatsApp *
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+54 9 11 1234-5678"
                  className="w-full bg-[#2B3D24] text-[#E4E2C5] border border-[#AD9C78] px-3 py-2 text-sm focus:outline-none focus:border-[#E6EF73] rounded-none"
                  required
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-semibold text-[#E4E2C5]/80 uppercase mb-1">
                  Fecha de Nacimiento del Titular *
                </label>
                <input
                  type="date"
                  value={birthDate}
                  onChange={(e) => setBirthDate(e.target.value)}
                  className="w-full sm:w-1/2 bg-[#2B3D24] text-[#E4E2C5] border border-[#AD9C78] px-3 py-2 text-sm focus:outline-none focus:border-[#E6EF73] rounded-none"
                  required
                />
                <span className="text-[11px] text-[#E4E2C5]/60 mt-1 block">
                  Requerido para verificación legal de mayoría de edad (≥ 18 años).
                </span>
              </div>
            </div>
          </div>

          {/* Companions Section */}
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-[#AD9C78]/20 pb-2">
              <h2 className="text-sm font-bold uppercase tracking-wider text-[#AD9C78]">
                Acompañantes ({companions.length})
              </h2>
              <button
                type="button"
                onClick={handleAddCompanion}
                className="text-xs bg-[#2B3D24] hover:bg-[#2B3D24]/80 text-[#E6EF73] border border-[#AD9C78] px-3 py-1.5 transition-colors cursor-pointer rounded-none"
              >
                + Agregar Acompañante
              </button>
            </div>

            {companions.map((comp, idx) => (
              <div key={idx} className="bg-[#2B3D24] p-4 border border-[#AD9C78]/30 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold text-[#E6EF73]">
                    Acompañante #{idx + 1}
                  </span>
                  <button
                    type="button"
                    onClick={() => handleRemoveCompanion(idx)}
                    className="text-xs text-red-400 hover:text-red-300"
                  >
                    Eliminar
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <input
                      type="text"
                      placeholder="Nombre *"
                      value={comp.firstName}
                      onChange={(e) => handleCompanionChange(idx, 'firstName', e.target.value)}
                      className="w-full bg-[#1E2B18] text-[#E4E2C5] border border-[#AD9C78] px-2.5 py-1.5 text-xs focus:outline-none rounded-none"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Apellido *"
                      value={comp.lastName}
                      onChange={(e) => handleCompanionChange(idx, 'lastName', e.target.value)}
                      className="w-full bg-[#1E2B18] text-[#E4E2C5] border border-[#AD9C78] px-2.5 py-1.5 text-xs focus:outline-none rounded-none"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Nro Documento (opcional)"
                      value={comp.docNumber}
                      onChange={(e) => handleCompanionChange(idx, 'docNumber', e.target.value)}
                      className="w-full bg-[#1E2B18] text-[#E4E2C5] border border-[#AD9C78] px-2.5 py-1.5 text-xs focus:outline-none rounded-none"
                    />
                  </div>
                  <div>
                    <input
                      type="date"
                      value={comp.birthDate}
                      onChange={(e) => handleCompanionChange(idx, 'birthDate', e.target.value)}
                      className="w-full bg-[#1E2B18] text-[#E4E2C5] border border-[#AD9C78] px-2.5 py-1.5 text-xs focus:outline-none rounded-none"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Notes */}
          <div>
            <label className="block text-xs font-semibold text-[#E4E2C5]/80 uppercase mb-1">
              Observaciones / Horario estimado de llegada (Opcional)
            </label>
            <textarea
              rows={3}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Ej: Llegamos alrededor de las 14:00 hs. Solicitamos cuna para bebé."
              className="w-full bg-[#2B3D24] text-[#E4E2C5] border border-[#AD9C78] px-3 py-2 text-sm focus:outline-none focus:border-[#E6EF73] rounded-none"
            />
          </div>

          {submitError && (
            <div className="p-3 bg-red-950/80 border border-red-500 text-red-200 text-sm">
              {submitError}
            </div>
          )}

          {/* Submit Action */}
          <div className="pt-4 border-t border-[#AD9C78]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link
              href="/"
              className="text-xs text-[#E4E2C5]/70 hover:text-[#E4E2C5] uppercase tracking-wider"
            >
              ← Volver y cambiar fechas
            </Link>

            <button
              type="submit"
              disabled={submitting || lockExpired}
              className="w-full sm:w-auto bg-[#E6EF73] hover:bg-[#D4DD68] active:bg-[#C2CB5D] text-[#1E2B18] font-bold py-3.5 px-8 text-sm uppercase tracking-wider transition-colors disabled:opacity-50 rounded-none cursor-pointer"
            >
              {submitting ? 'Confirmando Reserva...' : 'Confirmar Solicitud de Reserva'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
