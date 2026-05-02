import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'VidaOS | Panel de organización',
  description: 'App web para coordinar proyectos y organización diaria de un equipo cercano.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
