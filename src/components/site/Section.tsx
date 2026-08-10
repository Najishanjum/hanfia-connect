import type { ReactNode } from "react";
import { useLang, type Multi } from "@/lib/i18n";

export function SectionHeading({
  title,
  subtitle,
  align = "center",
}: {
  title: Multi;
  subtitle?: Multi;
  align?: "center" | "start";
}) {
  const { t } = useLang();
  return (
    <div className={align === "center" ? "text-center" : ""}>
      <h2 className="font-display text-3xl text-primary sm:text-4xl">{t(title)}</h2>
      <div
        className={`gold-rule mt-4 w-40 ${align === "center" ? "mx-auto" : ""}`}
        aria-hidden
      />
      {subtitle && (
        <p
          className={`mt-4 text-base leading-relaxed text-muted-foreground ${
            align === "center" ? "mx-auto max-w-3xl" : "max-w-3xl"
          }`}
        >
          {t(subtitle)}
        </p>
      )}
    </div>
  );
}

export function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`mx-auto max-w-7xl px-4 py-16 sm:py-20 ${className}`}>
      {children}
    </section>
  );
}

export function PageHero({ title, subtitle }: { title: Multi; subtitle?: Multi }) {
  const { t } = useLang();
  return (
    <div className="relative overflow-hidden bg-sidebar text-sidebar-foreground">
      <div className="pattern-geo absolute inset-0 opacity-30" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-4 py-16 text-center sm:py-20">
        <h1 className="font-display text-4xl text-sidebar-primary sm:text-5xl">{t(title)}</h1>
        <div className="gold-rule mx-auto mt-5 w-48" aria-hidden />
        {subtitle && <p className="mx-auto mt-4 max-w-2xl text-sm opacity-85">{t(subtitle)}</p>}
      </div>
    </div>
  );
}
