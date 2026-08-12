import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Globe, GraduationCap, ArrowUpRight } from "lucide-react";
import { NAV, SITE } from "@/content/site";
import { LANGS, LANG_META, m, useLang } from "@/lib/i18n";

export function Header() {
  const { t, lang, setLang } = useLang();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-5">
      <div
        className={`mx-auto flex max-w-7xl items-center gap-3 rounded-full border px-3 py-2 transition-all duration-500 sm:px-4 ${
          scrolled
            ? "border-border/80 bg-background/85 shadow-[0_18px_50px_-28px_oklch(0.2_0.04_158/0.6)] backdrop-blur-xl"
            : "border-transparent bg-background/50 backdrop-blur"
        }`}
      >
        <Link to="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-charcoal text-gold shadow-sm">
            <span className="font-arabic text-lg leading-none">م</span>
          </span>
          <span className="leading-none whitespace-nowrap">
            <span className="block font-display text-[13px] tracking-tight text-charcoal uppercase sm:text-[15px]">
              {t(SITE.brandTop)}
            </span>
            <span className="mt-1 block text-[9px] font-medium tracking-[0.28em] text-muted-foreground uppercase">
              {t(SITE.brandBottom)}
            </span>
          </span>
        </Link>

        <nav className="ms-auto hidden items-center gap-0.5 rounded-full bg-secondary/70 p-1 xl:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "bg-charcoal text-cream shadow-sm" }}
              className="rounded-full px-3.5 py-2 text-[12.5px] font-medium whitespace-nowrap text-foreground/70 transition-colors hover:text-charcoal"
            >
              {t(item.label)}
            </Link>
          ))}
        </nav>

        <div className="ms-auto flex items-center gap-2 xl:ms-0">
          <div className="hidden items-center gap-0.5 rounded-full border border-border bg-background px-2 py-1 sm:flex">
            <Globe className="size-3.5 text-muted-foreground" aria-hidden />
            {LANGS.map((l) => (
              <button
                key={l}
                type="button"
                onClick={() => setLang(l)}
                aria-pressed={lang === l}
                className={`rounded-full px-2 py-0.5 text-[11px] transition-colors ${
                  lang === l
                    ? "bg-gold text-charcoal font-semibold"
                    : "text-muted-foreground hover:text-charcoal"
                }`}
              >
                {LANG_META[l].label}
              </button>
            ))}
          </div>

          <Link
            to="/portal/$role"
            params={{ role: "student" }}
            className="hidden items-center gap-1.5 rounded-full border border-border px-3.5 py-2 text-xs font-medium text-foreground/80 transition-colors hover:border-charcoal hover:text-charcoal lg:inline-flex"
          >
            <GraduationCap className="size-3.5" aria-hidden />
            {t(m("Portal", "پورٹل", "البوابة", "पोर्टल"))}
          </Link>

          <Link
            to="/admission"
            className="hidden items-center gap-1.5 rounded-full bg-gold px-4 py-2 text-xs font-bold tracking-wide text-charcoal uppercase transition-transform hover:-translate-y-0.5 sm:inline-flex"
          >
            {t(m("Apply Now", "داخلہ لیں", "قدّم الآن", "आवेदन"))}
            <ArrowUpRight className="size-3.5" aria-hidden />
          </Link>

          <button
            type="button"
            className="rounded-full border border-border p-2 xl:hidden"
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="animate-rise mx-auto mt-2 max-w-7xl rounded-3xl border border-border bg-card p-3 shadow-xl xl:hidden">
          <nav className="grid gap-1">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: item.to === "/" }}
                activeProps={{ className: "bg-charcoal text-cream" }}
                className="rounded-2xl px-4 py-2.5 text-sm font-medium text-foreground/85"
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
                      ? "border-gold bg-gold text-charcoal"
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
