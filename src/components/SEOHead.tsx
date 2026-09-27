import React from 'react';
import { faqs } from '../data/faqs';

export default function SEOHead() {
  const jsonLdAgency = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Servicio de Marketing Digital - Landing Pages para Corredurías de Seguros',
    description: 'Desarrollo de landing pages individuales monoproducto de alta conversión para corredurías de seguros, corredores y mediadores colegiados en España.',
    url: 'https://landing-07-seguros.vercel.app',
    email: 'hola@serviciodemarketingdigital.com',
    priceRange: '€€€',
    areaServed: 'ES',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Landing Pages para el Ramo Asegurador',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Landing Page Monoproducto para Seguros de Salud, Coche y Vida',
            description: 'Embudos de alta velocidad para maximizar el ROI de Google Ads y Meta Ads en corredurías de seguros.',
          },
        },
      ],
    },
  };

  const jsonLdFaq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer,
      },
    })),
  };

  const jsonLdVideo = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: 'Demostración de Landing Page Monoproducto para Corredurías de Seguros',
    description: 'Estructura de alta conversión para captación de pólizas de seguros en Google Ads sin fugas de tráfico.',
    thumbnailUrl: 'https://img.youtube.com/vi/M5_QicGRh-s/maxresdefault.jpg',
    uploadDate: '2026-09-01T08:00:00+02:00',
    embedUrl: 'https://www.youtube.com/embed/M5_QicGRh-s',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdAgency) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdVideo) }}
      />
    </>
  );
}
