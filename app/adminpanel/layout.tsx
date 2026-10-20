import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { getSession } from '@/lib/auth/session';

export const metadata: Metadata = {
  title: 'PMS Admin — Iguapé Aparts',
  robots: {
    index: false,
    follow: false,
  },
};

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const session = await getSession();

  return (
    <div className="min-h-screen bg-[#1E2B18] text-[#E4E2C5] flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-[#2B3D24] border-r border-[#AD9C78]/30 flex flex-col justify-between shrink-0">
        <div>
          {/* Logo Header */}
          <div className="p-6 border-b border-[#AD9C78]/20 flex items-center gap-3">
            <div className="w-10 h-10 relative flex-shrink-0">
              <Image
                src="/assets/images/rec/logo_redondo.webp"
                alt="Logo"
                fill
                className="object-contain"
              />
            </div>
            <div>
              <span className="font-display text-xl text-[#E6EF73] block leading-none">
                PMS IGUAPÉ
              </span>
              <span className="text-[10px] text-[#E4E2C5]/70 uppercase tracking-widest">
                Gestión Hotelera
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="p-4 space-y-1.5 text-sm font-sans">
            <Link
              href="/adminpanel"
              className="flex items-center gap-3 px-3 py-2.5 hover:bg-[#3F5934] text-[#E4E2C5] hover:text-[#E6EF73] transition-colors"
            >
              <span>📊 Dashboard</span>
            </Link>
            <Link
              href="/adminpanel/calendar"
              className="flex items-center gap-3 px-3 py-2.5 hover:bg-[#3F5934] text-[#E4E2C5] hover:text-[#E6EF73] transition-colors"
            >
              <span>📅 Mapa de Ocupación</span>
            </Link>
            <Link
              href="/adminpanel/reservations"
              className="flex items-center gap-3 px-3 py-2.5 hover:bg-[#3F5934] text-[#E4E2C5] hover:text-[#E6EF73] transition-colors"
            >
              <span>🛎️ Reservas</span>
            </Link>
            <Link
              href="/adminpanel/categories-units"
              className="flex items-center gap-3 px-3 py-2.5 hover:bg-[#3F5934] text-[#E4E2C5] hover:text-[#E6EF73] transition-colors"
            >
              <span>🏠 Inventario e iCal</span>
            </Link>
            <Link
              href="/adminpanel/seasons-rates"
              className="flex items-center gap-3 px-3 py-2.5 hover:bg-[#3F5934] text-[#E4E2C5] hover:text-[#E6EF73] transition-colors"
            >
              <span>💲 Temporadas y Tarifas</span>
            </Link>
            <Link
              href="/adminpanel/guests"
              className="flex items-center gap-3 px-3 py-2.5 hover:bg-[#3F5934] text-[#E4E2C5] hover:text-[#E6EF73] transition-colors"
            >
              <span>👥 CRM Huéspedes</span>
            </Link>
          </nav>
        </div>

        {/* User Session Footer */}
        <div className="p-4 border-t border-[#AD9C78]/20 bg-[#2B3D24]">
          <div className="text-xs text-[#E4E2C5]/80 mb-2 truncate">
            {session ? session.email : 'admin@iguapeaparts.com'}
          </div>
          <form action="/api/admin/auth/logout" method="POST">
            <button
              type="submit"
              className="w-full text-xs text-center border border-[#AD9C78]/50 hover:border-red-400 hover:text-red-300 py-1.5 transition-colors cursor-pointer rounded-none"
            >
              Cerrar Sesión
            </button>
          </form>
        </div>
      </aside>

      {/* Main Panel Content */}
      <main className="flex-1 overflow-y-auto p-4 sm:p-8 bg-[#1E2B18]">
        {children}
      </main>
    </div>
  );
}
