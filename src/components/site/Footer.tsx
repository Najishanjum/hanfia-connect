import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail } from "lucide-react";
import { NAV, SITE } from "@/content/site";
import { m, useLang } from "@/lib/i18n";

export function Footer() {
  const { t } = useLang();

  return (
    <footer className="mt-24 bg-sidebar text-sidebar-foreground">
      <div className="pattern-geo h-2 w-full opacity-70" aria-hidden />
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-3">
        <div>
          <h3 className="display-xl text-2xl text-sidebar-primary">{t(SITE.name)}</h3>
          <p className="mt-2 text-sm opacity-80">{t(SITE.tagline)}</p>
          <p className="mt-4 flex items-start gap-2 text-sm opacity-80">
            <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden />
            {t(SITE.location)}
          </p>
        </div>

        <div>
          <h4 className="font-display text-xs tracking-[0.2em] text-sidebar-primary uppercase">
            {t(m("Quick links", "فوری روابط", "روابط سريعة", "द्रुत लिङ्क"))}
          </h4>
          <ul className="mt-3 grid grid-cols-2 gap-1 text-sm">
            {NAV.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="opacity-80 transition-opacity hover:opacity-100">
                  {t(item.label)}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/donate" className="opacity-80 transition-opacity hover:opacity-100">
                {t(m("Donate", "عطیات", "التبرعات", "दान"))}
              </Link>
            </li>
          </ul>

        </div>

        <div>
          <h4 className="font-display text-xs tracking-[0.2em] text-sidebar-primary uppercase">
            {t(m("Contact", "رابطہ", "اتصل بنا", "सम्पर्क"))}
          </h4>
          <p className="mt-3 flex items-center gap-2 text-sm opacity-80">
            <Phone className="size-4" aria-hidden /> {SITE.phone}
          </p>
          <p className="mt-2 flex items-center gap-2 text-sm opacity-80">
            <Mail className="size-4" aria-hidden /> {SITE.email}
          </p>
          <p className="mt-6 font-arabic text-lg text-sidebar-primary">
            رَبِّ زِدْنِي عِلْمًا
          </p>
        </div>
      </div>
      <div className="border-t border-sidebar-border">
        <p className="mx-auto max-w-7xl px-4 py-5 text-center text-xs opacity-70">
          © {new Date().getFullYear()} {t(SITE.name)}
        </p>
      </div>
    </footer>
  );
}
