import type { Metadata, Viewport } from 'next';
import './globals.css';
import SEOHead from '../components/SEOHead';

export const metadata: Metadata = {
  title: 'Landing Pages para Corredurías de Seguros | Servicio de Marketing Digital',
  description: 'Multiplica los leads de tu correduría de seguros con landing pages de un solo producto. Embudos ultra-rápidos para salud, coche y vida.',
  keywords: [
    'landing page correduria de seguros',
    'marketing mediadores de seguros',
    'captacion polizas salud coche vida',
    'Google Ads corredurias seguros',
    'embudos monoproducto seguros',
    'CRO aseguradoras y mediadores',
  ],
  authors: [{ name: 'Servicio de Marketing Digital', url: 'https://serviciodemarketingdigital.com' }],
  metadataBase: new URL('https://landing-07-seguros.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Multiplica los Leads de tu Correduría de Seguros con Landing Pages Monoproducto',
    description: 'Deja de perder dinero enviando tráfico a webs genéricas. Embudos ultra-rápidos enfocados en tu seguro estrella.',
    url: 'https://landing-07-seguros.vercel.app',
    siteName: 'Servicio de Marketing Digital',
    locale: 'es_ES',
    type: 'website',
    images: [
      {
        url: '/LOGO.png',
        width: 1200,
        height: 630,
        alt: 'Servicio de Marketing Digital - Corredurías de Seguros',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Landing Pages para Corredurías de Seguros',
    description: 'Multiplica la captación de pólizas y mejora el ROI de tus campañas de anuncios.',
    images: ['/LOGO.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: '#080e1e',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="dark scroll-smooth">
      <head>
        <SEOHead />
      </head>
      <body className="bg-slate-950 text-slate-100 min-h-screen selection:bg-emerald-500 selection:text-slate-950 font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
