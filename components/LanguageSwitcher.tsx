"use client";

import Image from "next/image";
import { useLanguage } from '../contexts/LanguageContext';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1">
      <button
        onClick={() => setLanguage('fr')}
        title="Français"
        aria-label="Français"
        className={`inline-flex items-center justify-center w-9 h-9 rounded-lg transition-all ${
          language === 'fr'
            ? 'bg-[#0e2f52] shadow-sm ring-2 ring-[#0e2f52]/30 scale-110'
            : 'hover:bg-slate-100 opacity-50 hover:opacity-100'
        }`}
      >
        <Image
          src="/images/france.png"
          alt="Français"
          width={24}
          height={17}
          className="rounded-sm"
        />
      </button>
      <button
        onClick={() => setLanguage('en')}
        title="English"
        aria-label="English"
        className={`inline-flex items-center justify-center w-9 h-9 rounded-lg transition-all ${
          language === 'en'
            ? 'bg-[#0e2f52] shadow-sm ring-2 ring-[#0e2f52]/30 scale-110'
            : 'hover:bg-slate-100 opacity-50 hover:opacity-100'
        }`}
      >
        <Image
          src="/images/royaumeuni.png"
          alt="English"
          width={24}
          height={17}
          className="rounded-sm"
        />
      </button>
    </div>
  );
}
