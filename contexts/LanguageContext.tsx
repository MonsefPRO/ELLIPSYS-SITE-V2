"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Lang = 'fr' | 'en';

interface LanguageContextType {
  language: Lang;
  setLanguage: (lang: Lang) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

function getCookieLang(): Lang {
  if (typeof document === 'undefined') return 'fr';
  const match = document.cookie.match(/(?:^|;\s*)lang=([^;]*)/);
  return match?.[1] === 'en' ? 'en' : 'fr';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLangState] = useState<Lang>('fr');

  useEffect(() => {
    setLangState(getCookieLang());
  }, []);

  const setLanguage = (lang: Lang) => {
    document.cookie = `lang=${lang}; path=/; max-age=31536000; SameSite=Lax`;
    window.location.reload();
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
}
