import { useRouterState } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";

/** Thin gold progress bar shown while the router is loading a new route. */
function RouteProgress() {
  const isLoading = useRouterState({ select: (s) => s.status === "pending" });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isLoading) {
      setVisible(true);
      return;
    }
    const t = setTimeout(() => setVisible(false), 320);
    return () => clearTimeout(t);
  }, [isLoading]);

  if (!visible) return null;

  return (
    <div
      className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-0.5 overflow-hidden"
      aria-hidden
    >
      <div
        className={`h-full bg-gold shadow-[0_0_12px_2px_var(--gold)] transition-[width,opacity] duration-300 ease-out ${
          isLoading ? "w-2/3 opacity-100" : "w-full opacity-0"
        }`}
      />
    </div>
  );
}

/** Fades + lifts page content on every route change. */
export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <>
      <RouteProgress />
      <div key={pathname} className="page-transition">
        {children}
      </div>
    </>
  );
}
