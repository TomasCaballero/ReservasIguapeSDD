import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-[#2B3D24] text-[#E4E2C5]">
      {/* Top Header */}
      <header className="border-b border-[#AD9C78]/30 bg-[#2B3D24]/95 backdrop-blur-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 relative flex-shrink-0">
              <Image
                src="/assets/images/rec/logo_redondo.webp"
                alt="Logo Iguapé Aparts"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div>
              <span className="font-display text-2xl tracking-wide text-[#E6EF73] block leading-none">
                IGUAPÉ
              </span>
              <span className="text-xs tracking-widest text-[#E4E2C5]/80 font-sans uppercase">
                Aparts & Spa
              </span>
            </div>
          </Link>

          <nav className="flex items-center gap-4">
            <a
              href="https://wa.me/5491123456789"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 text-sm text-[#E6EF73] hover:text-[#D4DD68] transition-colors"
            >
              <span>WhatsApp Recepción</span>
            </a>
            <Link
              href="/"
              className="bg-[#E6EF73] hover:bg-[#D4DD68] active:bg-[#C2CB5D] text-[#1E2B18] font-semibold text-sm px-4 py-2 transition-colors rounded-none"
            >
              Consultar Tarifas
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-[#AD9C78]/30 bg-[#1E2B18] text-[#E4E2C5]/80 py-10 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="font-display text-xl text-[#E6EF73]">Iguapé Aparts & Spa</p>
            <p className="text-sm text-[#E4E2C5]/70 mt-1">
              Naturaleza, confort y atención personalizada.
            </p>
          </div>
          <div className="text-xs text-[#E4E2C5]/60 text-center md:text-right">
            <p>© {new Date().getFullYear()} Iguapé Aparts. Todos los derechos reservados.</p>
            <p className="mt-1">Motor de reservas oficial sin intermediarios.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
