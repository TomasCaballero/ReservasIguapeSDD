'use client';

import React, { useState, useEffect } from 'react';

interface SettingItem {
  key: string;
  value: string;
  description: string | null;
}

export default function AdminSettingsPage() {
  const [settings, setSettings] = useState<SettingItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [savingKey, setSavingKey] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  const loadSettings = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/admin/settings');
      const data = await res.json();
      if (Array.isArray(data)) {
        setSettings(data);
      }
    } catch {
      // Ignore
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadSettings();
  }, []);

  const handleUpdate = async (key: string, value: string) => {
    setSavingKey(key);
    setMessage(null);
    try {
      const res = await fetch('/api/admin/settings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ key, value }),
      });
      if (res.ok) {
        setMessage(`Parámetro "${key}" actualizado correctamente.`);
        loadSettings();
      } else {
        setMessage(`Error al actualizar parámetro "${key}".`);
      }
    } catch (err: any) {
      setMessage(`Error: ${err.message}`);
    } finally {
      setSavingKey(null);
    }
  };

  return (
    <div className="space-y-8 max-w-4xl">
      <div className="border-b border-[#AD9C78]/30 pb-4">
        <h1 className="font-display text-3xl text-[#E6EF73]">Configuración del Sistema</h1>
        <p className="text-sm text-[#E4E2C5]/70">
          Ajustes de límites operativos, temporizadores y políticas de retención.
        </p>
      </div>

      {message && (
        <div className="bg-[#3F5934] border border-[#AD9C78] p-3 text-sm text-[#E6EF73]">
          {message}
        </div>
      )}

      <div className="bg-[#2B3D24] border border-[#AD9C78]/30 overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="bg-[#3F5934] text-xs uppercase tracking-wider text-[#AD9C78] border-b border-[#AD9C78]/30">
            <tr>
              <th className="p-3">Parámetro</th>
              <th className="p-3">Descripción</th>
              <th className="p-3">Valor Actual</th>
              <th className="p-3 text-right">Acción</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#AD9C78]/20 text-[#E4E2C5]/90">
            {loading ? (
              <tr>
                <td colSpan={4} className="p-6 text-center text-xs text-[#E4E2C5]/60 italic">
                  Cargando configuraciones...
                </td>
              </tr>
            ) : settings.length === 0 ? (
              <tr>
                <td colSpan={4} className="p-6 text-center text-xs text-[#E4E2C5]/60 italic">
                  No hay parámetros configurados.
                </td>
              </tr>
            ) : (
              settings.map((item) => (
                <tr key={item.key} className="hover:bg-[#3F5934]/40">
                  <td className="p-3 font-mono text-xs font-bold text-[#E6EF73]">{item.key}</td>
                  <td className="p-3 text-xs text-[#E4E2C5]/80">{item.description || '-'}</td>
                  <td className="p-3 font-mono text-xs">
                    <input
                      type="text"
                      defaultValue={item.value}
                      id={`input-${item.key}`}
                      className="bg-[#1E2B18] border border-[#AD9C78]/50 px-2 py-1 text-xs text-[#E4E2C5] w-28"
                    />
                  </td>
                  <td className="p-3 text-right">
                    <button
                      type="button"
                      disabled={savingKey === item.key}
                      onClick={() => {
                        const inputEl = document.getElementById(
                          `input-${item.key}`
                        ) as HTMLInputElement;
                        if (inputEl) {
                          handleUpdate(item.key, inputEl.value);
                        }
                      }}
                      className="px-3 py-1 text-xs bg-[#E6EF73] text-[#1E2B18] font-bold hover:bg-[#D4DD68] disabled:opacity-50 transition cursor-pointer"
                    >
                      {savingKey === item.key ? 'Guardando...' : 'Guardar'}
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
