import { useEffect, useState } from "react";
import { useInView } from "./Reveal";

/** Animates the numeric part of a value like "25+", "1200", "100%". */
export function CountUp({ value, className = "" }: { value: string; className?: string }) {
  const { ref, inView } = useInView<HTMLParagraphElement>();
  const match = value.match(/[\d,.]+/);
  const target = match ? Number(match[0].replace(/,/g, "")) : 0;
  const prefix = match ? value.slice(0, match.index ?? 0) : "";
  const suffix = match ? value.slice((match.index ?? 0) + match[0].length) : value;
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView || !target) return;
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setN(target);
      return;
    }
    const duration = 1400;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, target]);

  return (
    <p ref={ref} className={className}>
      {target ? `${prefix}${n.toLocaleString()}${suffix}` : value}
    </p>
  );
}
