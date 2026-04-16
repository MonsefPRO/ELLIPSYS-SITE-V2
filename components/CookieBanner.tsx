"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <div className="max-w-4xl mx-auto bg-[#0e2f52] text-white rounded-2xl shadow-2xl p-6 flex flex-col md:flex-row items-center gap-4">
        <div className="flex-1 text-sm leading-relaxed">
          <p className="font-bold mb-1">Nous utilisons des cookies</p>
          <p className="text-slate-300">
            Ce site utilise des cookies pour améliorer votre expérience et analyser le trafic (PostHog, GTM).{' '}
            <Link href="/politique-confidentialite" className="text-brand-orange-400 underline hover:text-brand-orange-300">
              En savoir plus
            </Link>
          </p>
        </div>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={decline}
            className="px-5 py-2.5 rounded-xl border border-white/30 text-sm font-bold hover:bg-white/10 transition-colors"
          >
            Refuser
          </button>
          <button
            onClick={accept}
            className="px-5 py-2.5 rounded-xl bg-brand-orange-500 text-white text-sm font-bold hover:bg-brand-orange-600 transition-colors"
          >
            Accepter
          </button>
        </div>
      </div>
    </div>
  );
}
