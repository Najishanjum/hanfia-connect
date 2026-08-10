import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export const LANGS = ["en", "ur", "ar", "ne"] as const;
export type Lang = (typeof LANGS)[number];

export const LANG_META: Record<Lang, { label: string; dir: "ltr" | "rtl"; font: string }> = {
  en: { label: "English", dir: "ltr", font: "font-body" },
  ur: { label: "اردو", dir: "rtl", font: "font-urdu" },
  ar: { label: "العربية", dir: "rtl", font: "font-arabic" },
  ne: { label: "नेपाली", dir: "ltr", font: "font-nepali" },
};

export type Multi = Record<Lang, string>;

const STORAGE_KEY = "ahmu-lang";

type Ctx = {
  lang: Lang;
  dir: "ltr" | "rtl";
  setLang: (l: Lang) => void;
  t: (m: Multi) => string;
};

const LanguageContext = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const stored = typeof window !== "undefined" ? window.localStorage.getItem(STORAGE_KEY) : null;
    if (stored && (LANGS as readonly string[]).includes(stored)) {
      setLangState(stored as Lang);
    }
  }, []);

  const dir = LANG_META[lang].dir;

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
    document.documentElement.dataset["lang"] = lang;
  }, [lang, dir]);

  const value = useMemo<Ctx>(
    () => ({
      lang,
      dir,
      setLang: (l: Lang) => {
        setLangState(l);
        try {
          window.localStorage.setItem(STORAGE_KEY, l);
        } catch {
          /* ignore */
        }
      },
      t: (m: Multi) => m[lang] ?? m.en,
    }),
    [lang, dir],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}

export const m = (en: string, ur: string, ar: string, ne: string): Multi => ({ en, ur, ar, ne });
