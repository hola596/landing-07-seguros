'use client';

import React, { useState, useEffect } from 'react';
import { X, ShieldCheck, Zap, User, Building2, Shield, TrendingUp, Users } from 'lucide-react';

interface LeadFilterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LeadFilterModal({ isOpen, onClose }: LeadFilterModalProps) {
  const [nombre, setNombre] = useState('');
  const [correduria, setCorreduria] = useState('');
  const [seguroEstrella, setSeguroEstrella] = useState('');
  const [invierteAds, setInvierteAds] = useState('');
  const [volumenClientes, setVolumenClientes] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // The submit button must only be enabled if all 5 fields are filled
  const isFormValid = Boolean(
    nombre.trim() &&
    correduria.trim() &&
    seguroEstrella &&
    invierteAds &&
    volumenClientes
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!isFormValid || isLoading) return;

    // Simulate loading for 1.5 seconds as requested in the specification
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      onClose();

      // Number strictly obfuscated in JS memory - NEVER exposed in static HTML
      const p1 = '54911';
      const p2 = '2788';
      const p3 = '7093';
      const targetPhone = `${p1}${p2}${p3}`;

      // Exact template:
      // "Hola, soy [Nombre] de la correduría [Nombre de la Correduría]. Me interesa crear una landing page enfocada en nuestro seguro de [Producto Estrella]. Actualmente [Inversión Ads] invertimos en publicidad y manejamos un volumen de [Volumen de clientes] clientes. Quiero optimizar mi captación de leads."
      const rawText = `Hola, soy ${nombre.trim()} de la correduría ${correduria.trim()}. Me interesa crear una landing page enfocada en nuestro seguro de ${seguroEstrella}. Actualmente ${invierteAds} invertimos en publicidad y manejamos un volumen de ${volumenClientes} clientes. Quiero optimizar mi captación de leads.`;

      const mensajeCodificado = encodeURIComponent(rawText);
      const url = `https://wa.me/${targetPhone}?text=${mensajeCodificado}`;

      window.open(url, '_blank', 'noopener,noreferrer');
    }, 1500);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto bg-slate-900 border border-corp-500/40 rounded-2xl shadow-2xl p-6 sm:p-8 text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-start justify-between mb-5">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-corp-950 text-corp-300 border border-corp-700/50 mb-2">
              <Zap className="w-3.5 h-3.5 text-conversion-400" />
              <span>Diagnóstico de Captación Digital</span>
            </div>
            <h3 className="text-2xl font-bold text-white tracking-tight">
              Analizar mi Correduría
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Rellena los datos para preparar un análisis estratégico de tu seguro estrella.
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-3.5">
          {/* Field 1: Nombre y Apellido */}
          <div>
            <label className="flex items-center gap-2 text-xs font-semibold text-slate-300 mb-1.5">
              <User className="w-4 h-4 text-corp-400" />
              <span>1. Nombre y Apellido:</span>
            </label>
            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              placeholder="Ej: Carlos Gómez"
              className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-corp-400 focus:ring-1 focus:ring-corp-400 transition-all"
              required
            />
          </div>

          {/* Field 2: Nombre de la Correduría */}
          <div>
            <label className="flex items-center gap-2 text-xs font-semibold text-slate-300 mb-1.5">
              <Building2 className="w-4 h-4 text-corp-400" />
              <span>2. Nombre de la Correduría:</span>
            </label>
            <input
              type="text"
              value={correduria}
              onChange={(e) => setCorreduria(e.target.value)}
              placeholder="Ej: Gómez & Asociados Mediadores"
              className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-corp-400 focus:ring-1 focus:ring-corp-400 transition-all"
              required
            />
          </div>

          {/* Field 3: Seguro estrella */}
          <div>
            <label className="flex items-center gap-2 text-xs font-semibold text-slate-300 mb-1.5">
              <Shield className="w-4 h-4 text-corp-400" />
              <span>3. ¿Cuál es tu seguro estrella a promocionar?</span>
            </label>
            <select
              value={seguroEstrella}
              onChange={(e) => setSeguroEstrella(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-corp-400 focus:ring-1 focus:ring-corp-400 transition-all cursor-pointer"
              required
            >
              <option value="" disabled>Selecciona ramo principal...</option>
              <option value="Seguro de Coche">Seguro de Coche</option>
              <option value="Seguro de Salud">Seguro de Salud</option>
              <option value="Seguro de Vida">Seguro de Vida</option>
              <option value="Seguro de Hogar">Seguro de Hogar</option>
              <option value="Otro">Otro</option>
            </select>
          </div>

          {/* Field 4: Inversión en Ads */}
          <div>
            <label className="flex items-center gap-2 text-xs font-semibold text-slate-300 mb-1.5">
              <TrendingUp className="w-4 h-4 text-corp-400" />
              <span>4. ¿Inviertes en anuncios en redes o Google?</span>
            </label>
            <select
              value={invierteAds}
              onChange={(e) => setInvierteAds(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-corp-400 focus:ring-1 focus:ring-corp-400 transition-all cursor-pointer"
              required
            >
              <option value="" disabled>Selecciona situación publicitaria...</option>
              <option value="Sí">Sí</option>
              <option value="No">No</option>
              <option value="Quiero empezar">Quiero empezar</option>
            </select>
          </div>

          {/* Field 5: Volumen de clientes */}
          <div>
            <label className="flex items-center gap-2 text-xs font-semibold text-slate-300 mb-1.5">
              <Users className="w-4 h-4 text-corp-400" />
              <span>5. Volumen de clientes actual:</span>
            </label>
            <select
              value={volumenClientes}
              onChange={(e) => setVolumenClientes(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-corp-400 focus:ring-1 focus:ring-corp-400 transition-all cursor-pointer"
              required
            >
              <option value="" disabled>Selecciona cartera de clientes...</option>
              <option value="Menos de 1.000">Menos de 1.000</option>
              <option value="Entre 1.000 y 10.000">Entre 1.000 y 10.000</option>
              <option value="Más de 10.000">Más de 10.000</option>
            </select>
          </div>

          {/* Privacy Note */}
          <div className="flex items-center gap-2 text-[11px] text-slate-400 pt-1">
            <ShieldCheck className="w-4 h-4 text-conversion-400 flex-shrink-0" />
            <span>Datos protegidos bajo secreto profesional y confidencialidad estricta.</span>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={!isFormValid || isLoading}
            className="w-full mt-3 py-3.5 px-6 rounded-xl font-bold text-sm text-slate-950 bg-gradient-to-r from-conversion-400 via-emerald-300 to-corp-300 hover:from-conversion-300 hover:to-white shadow-lg shadow-conversion-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-40 disabled:cursor-not-allowed disabled:transform-none cursor-pointer"
          >
            {isLoading ? 'Cargando...' : 'Hablar con un Asesor por WhatsApp'}
          </button>
        </form>
      </div>
    </div>
  );
}
