import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Globe, Phone, Mail, GraduationCap, Users, ArrowRight } from "lucide-react";
import { NAV, SITE } from "@/content/site";
import { LANGS, LANG_META, m, useLang } from "@/lib/i18n";

export function Header() {
  const { t, lang, setLang } = useLang();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      {/* Top utility bar */}
      <div className="hidden bg-sidebar text-sidebar-foreground md:block">
        <div className="mx-auto flex max-w-7xl items-center gap-6 px-4 py-2 text-xs">
          <span className="flex items-center gap-2 opacity-85">
            <Phone className="size-3.5 text-sidebar-primary" aria-hidden /> {SITE.phone}
          </span>
          <span className="flex items-center gap-2 opacity-85">
            <Mail className="size-3.5 text-sidebar-primary" aria-hidden /> {SITE.email}
          </span>
          <span className="ms-auto flex items-center gap-4">
            <Link
              to="/portal/$role"
              params={{ role: "student" }}
              className="flex items-center gap-1.5 opacity-85 transition-opacity hover:opacity-100"
            >
              <GraduationCap className="size-3.5" aria-hidden />
              {t(m("Student Login", "طلبہ لاگ ان", "دخول الطلاب", "विद्यार्थी लगइन"))}
            </Link>
            <Link
              to="/portal/$role"
              params={{ role: "teacher" }}
              className="flex items-center gap-1.5 opacity-85 transition-opacity hover:opacity-100"
            >
              <Users className="size-3.5" aria-hidden />
              {t(m("Teacher Portal", "اساتذہ پورٹل", "بوابة المعلمين", "शिक्षक पोर्टल"))}
            </Link>
          </span>
        </div>
      </div>

      {/* Main bar */}
      <div className="border-b border-border bg-background/95 shadow-sm backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3">
          <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
            <span className="flex size-11 shrink-0 items-center justify-center rounded-full border-2 border-gold bg-primary text-primary-foreground shadow-sm">
              <span className="font-arabic text-lg leading-none">م</span>
            </span>
            <span className="leading-tight whitespace-nowrap">
              <span className="block font-display text-[15px] font-semibold tracking-[0.06em] text-primary sm:text-[17px]">
                {t(SITE.brandTop)}
              </span>
              <span className="block text-[10px] tracking-[0.2em] text-muted-foreground">
                {t(SITE.brandBottom)}
              </span>
            </span>

          </Link>

          <nav className="ms-auto hidden items-center gap-0.5 xl:flex">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                activeProps={{ className: "text-primary after:scale-x-100" }}
                className="relative whitespace-nowrap rounded-md px-3 py-2 text-[13px] font-medium uppercase tracking-wide text-foreground/75 transition-colors after:absolute after:inset-x-3 after:bottom-1 after:h-0.5 after:origin-left after:scale-x-0 after:bg-gold after:transition-transform hover:text-primary hover:after:scale-x-100"
              >
                {t(item.label)}
              </Link>
            ))}
          </nav>

          <div className="ms-auto flex items-center gap-2 xl:ms-4">
            <div className="hidden items-center gap-1 rounded-full border border-border bg-secondary px-2 py-1 sm:flex">
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
            <Link
              to="/admission"
              className="hidden items-center gap-2 rounded-md bg-gold px-4 py-2 text-xs font-semibold uppercase tracking-wide text-charcoal shadow-sm transition-transform hover:-translate-y-0.5 sm:inline-flex"
            >
              {t(m("Apply Now", "داخلہ لیں", "قدّم الآن", "आवेदन गर्नुहोस्"))}
              <ArrowRight className="size-3.5 rtl:rotate-180" aria-hidden />
            </Link>
            <button
              type="button"
              className="rounded-md border border-border p-2 xl:hidden"
              aria-label="Menu"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="border-t border-border bg-card xl:hidden">
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
      </div>
    </header>
  );
}
