import { Star } from "lucide-react";

export function Marquee({ items }: { items: string[] }) {
  const row = [...items, ...items];
  return (
    <div className="group relative overflow-hidden border-y border-border bg-charcoal py-3.5">
      <div className="animate-marquee flex w-max items-center gap-8 group-hover:[animation-play-state:paused]">
        {row.map((it, i) => (
          <span key={`${it}-${i}`} className="flex items-center gap-8">
            <span className="font-display text-[12px] tracking-[0.18em] whitespace-nowrap text-cream uppercase sm:text-sm">
              {it}
            </span>
            <Star className="size-3 shrink-0 text-gold" aria-hidden />
          </span>
        ))}
      </div>
      <div
        className="pointer-events-none absolute inset-y-0 start-0 w-16 bg-gradient-to-r from-charcoal to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-y-0 end-0 w-16 bg-gradient-to-l from-charcoal to-transparent"
        aria-hidden
      />
    </div>
  );
}
