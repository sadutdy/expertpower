"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  ReactNode,
} from "react";
import { en, ar, type Translations } from "@/lib/translations";

type Lang = "en" | "ar";

interface LanguageContextValue {
  lang: Lang;
  t: Translations;
  toggleLang: () => void;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: "en",
  t: en,
  toggleLang: () => {},
  isRTL: false,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  // Persist language choice across page loads
  useEffect(() => {
    const stored = localStorage.getItem("ep-lang") as Lang | null;
    if (stored === "ar" || stored === "en") setLang(stored);
  }, []);

  const toggleLang = useCallback(() => {
    setLang((prev) => {
      const next: Lang = prev === "en" ? "ar" : "en";
      localStorage.setItem("ep-lang", next);
      return next;
    });
  }, []);

  const t = lang === "ar" ? ar : en;
  const isRTL = lang === "ar";

  // Apply dir + lang attributes to <html>
  useEffect(() => {
    document.documentElement.setAttribute("dir", isRTL ? "rtl" : "ltr");
    document.documentElement.setAttribute("lang", lang);
  }, [lang, isRTL]);

  return (
    <LanguageContext.Provider value={{ lang, t, toggleLang, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}
