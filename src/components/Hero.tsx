'use client';

import React from 'react';
import { ArrowRight, ShieldCheck, Zap, BarChart3, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onOpenModal: () => void;
}

export default function Hero({ onOpenModal }: HeroProps) {
  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[450px] bg-corp-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-20 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-corp-950/90 text-corp-300 border border-corp-800/80 mb-6 shadow-sm">
              <Zap className="w-3.5 h-3.5 text-conversion-400" />
              <span>Embudos de Alta Rentabilidad para Mediadores y Corredurías</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12] mb-6">
              Multiplica los Leads de tu{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-corp-300 via-corp-400 to-conversion-400">
                Correduría de Seguros
              </span>{' '}
              con Landing Pages de un Solo Producto.
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed">
              Deja de perder dinero enviando tráfico a webs genéricas. Creamos embudos ultra-rápidos enfocados en tu seguro estrella (Salud, Coche, Vida) para dominar tus campañas publicitarias y reducir la fricción de compra.
            </p>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
              <button
                onClick={onOpenModal}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-extrabold text-base text-slate-950 bg-gradient-to-r from-conversion-400 via-emerald-300 to-corp-300 hover:from-conversion-300 hover:to-white shadow-xl shadow-conversion-500/25 hover:shadow-conversion-400/40 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <span>Analizar mi Correduría</span>
                <ArrowRight className="w-5 h-5 text-slate-950" />
              </button>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-800/80">
              <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 text-left">
                <div className="text-xl font-extrabold text-conversion-400 font-mono">+240%</div>
                <div className="text-xs text-slate-400 font-medium">Incremento de conversión</div>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 text-left">
                <div className="text-xl font-extrabold text-corp-400 font-mono">&lt; 1.0s</div>
                <div className="text-xs text-slate-400 font-medium">Carga en móviles 5G/4G</div>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 text-left">
                <div className="text-xl font-extrabold text-white font-mono">10/10</div>
                <div className="text-xs text-slate-400 font-medium">Quality Score en Ads</div>
              </div>
            </div>
          </div>

          {/* Right Column: Responsive Video Embed */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              <div className="text-center lg:text-left mb-3">
                <h2 className="text-sm font-bold text-corp-300 uppercase tracking-wider flex items-center justify-center lg:justify-start gap-2">
                  <BarChart3 className="w-4 h-4 text-conversion-400" />
                  <span>Demostración de Conversión para Seguros</span>
                </h2>
              </div>

              {/* Decorative Frame */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-corp-500/40 via-conversion-400/30 to-blue-500/30 rounded-2xl blur-lg opacity-70"></div>

              <div className="relative rounded-2xl overflow-hidden bg-slate-900 border border-corp-500/40 shadow-2xl">
                <div className="bg-slate-950/90 px-4 py-2.5 border-b border-slate-800 flex items-center justify-between text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
                    <span className="ml-2 font-mono text-slate-300 font-medium">Estructura Monoproducto Seguros</span>
                  </div>
                  <span className="text-[11px] text-conversion-300 font-semibold">Video Explicativo</span>
                </div>

                <div className="relative w-full aspect-video">
                  <iframe
                    className="w-full h-full"
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/M5_QicGRh-s?si=_0gkgpp51W2mA-NQ"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
