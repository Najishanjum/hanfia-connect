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
      <h2 className="display-xl text-3xl text-charcoal sm:text-[2.6rem]">{t(title)}</h2>
      <div
        className={`mt-4 h-1.5 w-16 rounded-full bg-gold ${align === "center" ? "mx-auto" : ""}`}
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
    <section id={id} className={`mx-auto max-w-7xl px-4 py-16 sm:py-24 ${className}`}>
      {children}
    </section>
  );
}

export function PageHero({ title, subtitle }: { title: Multi; subtitle?: Multi }) {
  const { t } = useLang();
  return (
    <div className="relative overflow-hidden bg-background">
      <div
        className="animate-glow pointer-events-none absolute -top-40 left-1/2 size-[36rem] -translate-x-1/2 rounded-full bg-gold/25 blur-3xl"
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl px-4 py-16 text-center sm:py-24">
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-[11px] font-semibold tracking-[0.2em] text-muted-foreground uppercase">
          Mazharul Uloom
        </span>
        <h1 className="display-xl mt-6 text-4xl text-charcoal sm:text-6xl">{t(title)}</h1>
        {subtitle && (
          <p className="mx-auto mt-5 max-w-2xl text-sm text-muted-foreground sm:text-base">
            {t(subtitle)}
          </p>
        )}
      </div>
    </div>
  );
}
