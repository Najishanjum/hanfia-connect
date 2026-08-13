import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? window.scrollY / max : 0;
      setProgress(p);
      setVisible(window.scrollY > 500);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed end-4 bottom-5 z-50 grid size-12 place-items-center rounded-full bg-charcoal text-cream shadow-[0_18px_40px_-16px_oklch(0.2_0.04_158/0.8)] transition-all duration-500 ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
      style={{
        backgroundImage: `conic-gradient(var(--gold) ${progress * 360}deg, transparent 0deg)`,
      }}
    >
      <span className="grid size-9 place-items-center rounded-full bg-charcoal">
        <ArrowUp className="size-4" aria-hidden />
      </span>
    </button>
  );
}
