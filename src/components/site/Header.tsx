import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Globe } from "lucide-react";
import { NAV, SITE } from "@/content/site";
import { LANGS, LANG_META, useLang } from "@/lib/i18n";

export function Header() {
  const { t, lang, setLang } = useLang();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="flex size-11 shrink-0 items-center justify-center rounded-full border border-gold/60 bg-primary text-primary-foreground">
            <span className="font-arabic text-lg leading-none">م</span>
          </span>
          <span className="leading-tight">
            <span className="block font-display text-sm font-semibold tracking-wide text-primary sm:text-base">
              {t(SITE.name)}
            </span>
            <span className="block text-[11px] text-muted-foreground">{t(SITE.motto)}</span>
          </span>
        </Link>

        <nav className="ms-auto hidden items-center gap-1 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "text-primary bg-secondary" }}
              className="rounded-md px-3 py-2 text-sm text-foreground/80 transition-colors hover:bg-secondary hover:text-primary"
            >
              {t(item.label)}
            </Link>
          ))}
        </nav>

        <div className="ms-auto flex items-center gap-2 lg:ms-0">
          <div className="hidden items-center gap-1 rounded-full border border-border bg-card px-2 py-1 sm:flex">
            <Globe className="size-3.5 text-muted-foreground" aria-hidden />
            {LANGS.map((l) => (
              <button
                key={l}
                type="button"
                onClick={() => setLang(l)}
                aria-pressed={lang === l}
                className={`rounded-full px-2 py-0.5 text-xs transition-colors ${
                  lang === l
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                {LANG_META[l].label}
              </button>
            ))}
          </div>
          <button
            type="button"
            className="rounded-md border border-border p-2 lg:hidden"
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-card lg:hidden">
          <nav className="mx-auto grid max-w-7xl gap-1 px-4 py-3">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: item.to === "/" }}
                activeProps={{ className: "text-primary bg-secondary" }}
                className="rounded-md px-3 py-2 text-sm text-foreground/85"
              >
                {t(item.label)}
              </Link>
            ))}
            <div className="mt-2 flex flex-wrap gap-2 border-t border-border pt-3">
              {LANGS.map((l) => (
                <button
                  key={l}
                  type="button"
                  onClick={() => setLang(l)}
                  className={`rounded-full border px-3 py-1 text-xs ${
                    lang === l
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border text-muted-foreground"
                  }`}
                >
                  {LANG_META[l].label}
                </button>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
