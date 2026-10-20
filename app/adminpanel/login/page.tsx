'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [failedAttempts, setFailedAttempts] = useState(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (failedAttempts >= 3) {
      setErrorMsg('Demasiados intentos fallidos. Acceso bloqueado por 15 minutos por seguridad.');
      return;
    }

    setLoading(true);

    try {
      const res = await fetch('/api/admin/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        const nextAttempts = failedAttempts + 1;
        setFailedAttempts(nextAttempts);
        if (nextAttempts >= 3) {
          throw new Error('Demasiados intentos fallidos. Acceso bloqueado por 15 minutos por seguridad.');
        }
        throw new Error(data.error || 'Credenciales incorrectas');
      }

      router.push('/adminpanel');
      router.refresh();
    } catch (err: any) {
      setErrorMsg(err.message || 'Error de conexión');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#2B3D24] text-[#E4E2C5] flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-[#3F5934] p-8 sm:p-10 border border-[#AD9C78]/40 shadow-2xl space-y-6">
        <div className="text-center space-y-2">
          <div className="w-16 h-16 mx-auto relative mb-2">
            <Image
              src="/assets/images/rec/logo_redondo.webp"
              alt="Logo Iguapé"
              fill
              className="object-contain"
            />
          </div>
          <h1 className="font-display text-3xl text-[#E6EF73]">Panel de Administración</h1>
          <p className="text-xs text-[#E4E2C5]/70 uppercase tracking-widest font-sans">
            Iguapé Aparts PMS
          </p>
        </div>

        {errorMsg && (
          <div className="p-3 bg-red-950/80 border border-red-500 text-red-200 text-sm">
            {errorMsg}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#E4E2C5]/80 mb-1">
              Correo Electrónico
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@iguapeaparts.com"
              className="w-full bg-[#2B3D24] text-[#E4E2C5] border border-[#AD9C78] px-3 py-2 text-sm focus:outline-none focus:border-[#E6EF73] rounded-none"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#E4E2C5]/80 mb-1">
              Contraseña
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-[#2B3D24] text-[#E4E2C5] border border-[#AD9C78] px-3 py-2 text-sm focus:outline-none focus:border-[#E6EF73] rounded-none"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading || failedAttempts >= 3}
            className="w-full bg-[#E6EF73] hover:bg-[#D4DD68] active:bg-[#C2CB5D] text-[#1E2B18] font-bold py-3 text-sm uppercase tracking-wider transition-colors disabled:opacity-50 rounded-none cursor-pointer"
          >
            {loading ? 'Ingresando...' : 'Iniciar Sesión'}
          </button>
        </form>

        <div className="text-center pt-2 text-xs text-[#E4E2C5]/50">
          Acceso restringido exclusivamente a administradores del complejo.
        </div>
      </div>
    </div>
  );
}
