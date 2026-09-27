'use client';

import React from 'react';
import { ShieldCheck, Award, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  onOpenModal: () => void;
}

export default function Header({ onOpenModal }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 w-full bg-slate-950/85 backdrop-blur-md border-b border-corp-800/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo strictly pointing to /LOGO.png */}
        <div className="flex items-center gap-3">
          <a href="#" className="flex items-center gap-2 group">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/LOGO.png"
              alt="Logo de la Agencia"
              className="h-10 md:h-12 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </a>
          <span className="hidden lg:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-corp-950/80 text-corp-300 border border-corp-700/50">
            <Award className="w-3.5 h-3.5 text-corp-400" /> Especialistas en Corredurías y Mediadores
          </span>
        </div>

        {/* Contact info and CTA */}
        <div className="flex items-center gap-4 sm:gap-6">
          <div className="hidden md:flex flex-col text-right">
            <span className="text-xs text-slate-400">Atención a mediadores y corredores</span>
            <span className="text-xs font-mono font-medium text-corp-300 hover:text-corp-200">
              hola@serviciodemarketingdigital.com
            </span>
          </div>

          <button
            onClick={onOpenModal}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm text-slate-950 bg-gradient-to-r from-conversion-400 via-emerald-300 to-corp-300 hover:from-conversion-300 hover:to-white shadow-lg shadow-conversion-500/20 hover:shadow-conversion-400/40 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <span>Analizar mi Correduría</span>
            <ArrowUpRight className="w-4 h-4 text-slate-950" />
          </button>
        </div>
      </div>
    </header>
  );
}
