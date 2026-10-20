'use client';

import React, { useState } from 'react';

interface UnitIcalModalProps {
  unit: {
    id: string;
    name: string;
    icalExportToken: string;
    icalFeedUrl: string | null;
  };
}

export function UnitIcalModal({ unit }: UnitIcalModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isSyncing, setIsSyncing] = useState(false);
  const [syncMessage, setSyncMessage] = useState<string | null>(null);

  const exportUrl = typeof window !== 'undefined'
    ? `${window.location.origin}/api/ical/${unit.id}/feed.ics?token=${unit.icalExportToken}`
    : `/api/ical/${unit.id}/feed.ics?token=${unit.icalExportToken}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(exportUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSync = async () => {
    setIsSyncing(true);
    setSyncMessage(null);
    try {
      const res = await fetch(`/api/admin/units/${unit.id}/sync-ical`, {
        method: 'POST',
      });
      const data = await res.json();
      if (res.ok) {
        setSyncMessage(data.message || 'Sincronización exitosa');
      } else {
        setSyncMessage(`Error: ${data.error || 'No se pudo sincronizar'}`);
      }
    } catch (err: any) {
      setSyncMessage(`Error: ${err.message}`);
    } finally {
      setIsSyncing(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="px-2.5 py-1 text-xs font-semibold bg-[#3F5934] text-[#E6EF73] border border-[#AD9C78]/50 hover:bg-[#3F5934]/80 transition cursor-pointer"
      >
        iCal
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
          <div className="bg-[#2B3D24] border border-[#AD9C78] max-w-lg w-full p-6 space-y-5 shadow-2xl">
            <div className="flex justify-between items-center border-b border-[#AD9C78]/30 pb-3">
              <h3 className="font-display text-xl text-[#E6EF73]">
                Sincronización iCal — {unit.name}
              </h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-[#E4E2C5]/70 hover:text-[#E4E2C5] font-bold text-lg"
              >
                ✕
              </button>
            </div>

            {/* Export Feed */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-[#AD9C78] block">
                URL de Exportación (hacia Airbnb, Booking, etc.)
              </label>
              <p className="text-xs text-[#E4E2C5]/70">
                Copiá esta URL en las plataformas externas para exportar la ocupación de esta unidad sin revelar datos personales de huéspedes.
              </p>
              <div className="flex gap-2">
                <input
                  type="text"
                  readOnly
                  value={exportUrl}
                  className="w-full bg-[#1E2B18] border border-[#AD9C78]/40 px-3 py-1.5 text-xs font-mono text-[#E4E2C5] select-all"
                />
                <button
                  type="button"
                  onClick={handleCopy}
                  className="px-3 py-1.5 text-xs font-bold uppercase tracking-wider bg-[#E6EF73] text-[#1E2B18] hover:bg-[#D4DD68] whitespace-nowrap transition cursor-pointer"
                >
                  {copied ? '¡Copiado!' : 'Copiar'}
                </button>
              </div>
            </div>

            {/* Import Feed / Manual Sync */}
            <div className="space-y-2 border-t border-[#AD9C78]/20 pt-4">
              <label className="text-xs font-bold uppercase tracking-wider text-[#AD9C78] block">
                Feed Externo (Importación)
              </label>
              <p className="text-xs text-[#E4E2C5]/70 font-mono">
                {unit.icalFeedUrl || 'No configurado (se configura al editar la unidad)'}
              </p>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleSync}
                  disabled={isSyncing}
                  className="px-4 py-2 text-xs font-bold uppercase tracking-wider bg-[#3F5934] text-[#E6EF73] border border-[#AD9C78] hover:bg-[#3F5934]/70 disabled:opacity-50 transition cursor-pointer"
                >
                  {isSyncing ? 'Sincronizando...' : 'Sincronizar ahora'}
                </button>
              </div>

              {syncMessage && (
                <p className="text-xs text-[#E6EF73] bg-[#3F5934]/60 p-2 border border-[#AD9C78]/40">
                  {syncMessage}
                </p>
              )}
            </div>

            <div className="flex justify-end pt-2">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="px-4 py-1.5 text-xs text-[#E4E2C5]/80 hover:text-[#E4E2C5] border border-[#AD9C78]/40"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
