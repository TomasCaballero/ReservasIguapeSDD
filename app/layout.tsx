import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Iguapé Aparts — Motor de Reservas',
  description: 'Reservas directas en Iguapé Aparts. Complejo de departamentos y spa en la naturaleza.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Source+Sans+3:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-[#2B3D24] text-[#E4E2C5] font-sans antialiased selection:bg-[#E6EF73] selection:text-[#1E2B18]">
        {children}
      </body>
    </html>
  );
}
