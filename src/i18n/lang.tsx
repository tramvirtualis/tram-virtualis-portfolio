import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type Lang = "en" | "vi";
/** A piece of copy: either language-neutral (tech names, numbers) or written in both languages. */
export type Text = string | { en: string; vi: string };

const STORAGE_KEY = "portfolio-lang";

function initialLang(): Lang {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "en" || saved === "vi") return saved;
  } catch {
    /* storage blocked — fall through */
  }
  return navigator.language?.toLowerCase().startsWith("vi") ? "vi" : "en";
}

type LangContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggle: () => void;
  t: (text: Text) => string;
};

const LangContext = createContext<LangContextValue | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(initialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* ignore */
    }
  }, [lang]);

  const toggle = useCallback(() => setLang((l) => (l === "en" ? "vi" : "en")), []);
  const t = useCallback((text: Text) => (typeof text === "string" ? text : text[lang]), [lang]);
  const value = useMemo(() => ({ lang, setLang, toggle, t }), [lang, toggle, t]);

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used inside <LangProvider>");
  return ctx;
}
