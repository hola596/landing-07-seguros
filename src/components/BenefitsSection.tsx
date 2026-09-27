'use client';

import React from 'react';
import { Target, Zap, TrendingUp, Calculator, ShieldCheck, Users, ArrowRight } from 'lucide-react';

interface BenefitsProps {
  onOpenModal: () => void;
}

export default function BenefitsSection({ onOpenModal }: BenefitsProps) {
  const benefits = [
    {
      icon: Target,
      title: 'Foco Absoluto en un Solo Producto',
      desc: 'Si el cliente busca seguro de salud, ve exclusivamente coberturas médicas, cuadro clínico y botón de cotización directa. Cero distracciones con seguros de auto o decesos.',
    },
    {
      icon: Zap,
      title: 'Carga Ultra-Rápida (< 1 Segundo)',
      desc: 'El 53% de los usuarios de móvil abandonan una página que tarda más de 3 segundos. Nuestras landings cargan al instante con Core Web Vitals 100/100.',
    },
    {
      icon: TrendingUp,
      title: 'Optimización Ideal para Google y Meta Ads',
      desc: 'Alinear el anuncio con una landing hiper-específica aumenta el Quality Score a 9-10/10, abaratando el coste por clic (CPC) hasta un 35% en tus campañas de pago.',
    },
    {
      icon: Calculator,
      title: 'Integrable con Calculadoras y Tarificadores',
      desc: 'Fácil conexión con los tarificadores de las aseguradoras, tarificadores multirriesgo o un filtro de captación previo que remite el lead cualificado a tus comerciales.',
    },
    {
      icon: Users,
      title: 'Filtro Previo para tus Mediadores',
      desc: 'Tu equipo comercial no pierde el tiempo con curiosos: recibe información precisa sobre capital a asegurar, póliza actual y predisposición de contratación.',
    },
    {
      icon: ShieldCheck,
      title: 'Cumplimiento Legal RGPD y DGSFP',
      desc: 'Formularios protegidos, consentimiento informado para tratamiento de datos y módulos legales adaptados a la normativa de mediación de seguros en España.',
    },
  ];

  return (
    <section className="py-20 bg-slate-900/60 border-y border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-conversion-400 uppercase">
            Metodología Comprobada en el Sector Asegurador
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2 tracking-tight">
            ¿Por qué las Landings Monoproducto Triunfan en Seguros?
          </h2>
          <p className="text-slate-400 mt-3 text-base sm:text-lg">
            Convierte a tu correduría en una máquina de captación rentable canalizando la demanda exactamente hacia tus ramos más lucrativos.
          </p>
        </div>

        {/* Benefits Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-7 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-corp-500/50 hover:shadow-xl hover:shadow-corp-500/10 transition-all group"
              >
                <div className="p-3 w-fit rounded-xl bg-corp-500/10 text-corp-400 group-hover:bg-corp-500/20 group-hover:scale-110 transition-all mb-5">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-corp-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <button
            onClick={onOpenModal}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-sm text-slate-950 bg-gradient-to-r from-conversion-400 via-emerald-300 to-corp-300 hover:from-conversion-300 hover:to-white shadow-xl shadow-conversion-500/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <span>Solicitar Asesoría para mi Correduría</span>
            <ArrowRight className="w-4 h-4 text-slate-950" />
          </button>
        </div>
      </div>
    </section>
  );
}
