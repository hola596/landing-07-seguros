export interface FAQItem {
  question: string;
  answer: string;
}

export const faqs: FAQItem[] = [
  {
    question: '¿Por qué una correduría debe separar sus seguros en landings individuales?',
    answer:
      'Cuando un usuario busca "seguro de salud para autónomos" en Google, no quiere aterrizar en una página corporativa con menús de seguros de coche, vida y hogar. Una landing monoproducto mantiene el 100% de coherencia con el anuncio, multiplicando la tasa de conversión y abaratando el coste por lead.',
  },
  {
    question: '¿Se puede integrar con nuestros tarificadores o CRM de correduría?',
    answer:
      'Sí. Los leads captados se filtran de forma interactiva y pueden enviarse directamente a WhatsApp, a tu software de gestión de correduría (e-broker, MPM, Visual Segur) o a tu CRM mediante Webhook o API.',
  },
  {
    question: '¿Cómo reduce el coste de adquisición en Google Ads y Meta Ads?',
    answer:
      'Al contar con una velocidad de carga inferior a 1 segundo y una arquitectura con 100/100 en Core Web Vitals, el Quality Score asignado por Google sube a niveles máximos (9-10/10), logrando descuentos en subasta de hasta un 35% por clic.',
  },
  {
    question: '¿Podemos paquetizar ofertas estacionales o seguros nicho (D&O, ciberriesgos)?',
    answer:
      'Totalmente. La estructura modular permite desplegar embudos dedicados para cualquier producto específico tanto en el ramo de particulares (vida, decesos, salud) como en empresas (responsabilidad civil, transporte, colectivos).',
  },
  {
    question: '¿Cuál es el tiempo de entrega y puesta en producción?',
    answer:
      'Entregamos la landing page monoproducto totalmente operativa en 48 a 72 horas, con validación de inputs, cumplimiento estricto del RGPD y conexión comercial inmediata.',
  },
];
