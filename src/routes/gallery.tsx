import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useRef, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { GALLERY_CATEGORIES, IMAGES } from "@/content/site";
import { m, useLang } from "@/lib/i18n";
import { PageHero, Section } from "@/components/site/Section";


export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Al-Jamiatul Hanfia Mazharul Uloom" },
      {
        name: "description",
        content: "Photos of the madrasa campus, masjid, students and events in Mahottari, Nepal.",
      },
      { property: "og:title", content: "Gallery — Al-Jamiatul Hanfia Mazharul Uloom" },
      { property: "og:description", content: "Photographs of the madrasa, masjid and its programs." },
    ],
  }),
  component: Gallery,
});

const PHOTOS = [
  { src: IMAGES.campus, alt: "Madrasa building with green arches and the masjid dome", cat: 0 },
  { src: IMAGES.minarets, alt: "Green dome and decorated minarets against a blue sky", cat: 1 },
  { src: IMAGES.campus, alt: "Courtyard of the madrasa during class hours", cat: 2 },
  { src: IMAGES.minarets, alt: "Masjid minarets with flags during a program", cat: 3 },
];

function Gallery() {
  const { t } = useLang();
  const [active, setActive] = useState<number | null>(null);
  const [dir, setDir] = useState<1 | -1>(1);
  const [filter, setFilter] = useState<number | null>(null);
  const [loaded, setLoaded] = useState<Record<string, boolean>>({});
  const touchX = useRef<number | null>(null);
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const closeRef = useRef<HTMLButtonElement | null>(null);
  const lastFocused = useRef<HTMLElement | null>(null);

  const shown = PHOTOS.filter((p) => filter === null || p.cat === filter);

  const step = useCallback(
    (delta: 1 | -1) => {
      setDir(delta);
      setActive((a) => (a === null ? a : (a + delta + shown.length) % shown.length));
    },
    [shown.length],
  );

  useEffect(() => {
    if (active === null) return;
    lastFocused.current = (document.activeElement as HTMLElement) ?? null;
    closeRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
      if (e.key === "Tab") {
        const nodes = dialogRef.current?.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
        );
        if (!nodes || nodes.length === 0) return;
        const list = Array.from(nodes).filter((n) => !n.hasAttribute("disabled"));
        const first = list[0]!;
        const last = list[list.length - 1]!;
        const current = document.activeElement as HTMLElement | null;
        if (e.shiftKey && (current === first || !dialogRef.current?.contains(current))) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && current === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
      lastFocused.current?.focus?.();
    };
  }, [active, step]);



  return (
    <>
      <PageHero
        title={m("Gallery", "گیلری", "المعرض", "ग्यालरी")}
        subtitle={m(
          "Moments from the madrasa, masjid and our programs.",
          "مدرسہ، مسجد اور پروگراموں کی جھلکیاں۔",
          "لقطات من الجامعة والمسجد والبرامج.",
          "मदरसा, मस्जिद तथा कार्यक्रमका झलकहरू।",
        )}
      />

      <Section>
        <div className="flex flex-wrap justify-center gap-2">
          <button
            type="button"
            onClick={() => setFilter(null)}
            className={`rounded-full border px-4 py-1.5 text-sm ${
              filter === null ? "border-primary bg-primary text-primary-foreground" : "border-border"
            }`}
          >
            {t(m("All", "سب", "الكل", "सबै"))}
          </button>
          {GALLERY_CATEGORIES.map((c, i) => (
            <button
              key={c.en}
              type="button"
              onClick={() => setFilter(i)}
              className={`rounded-full border px-4 py-1.5 text-sm ${
                filter === i ? "border-primary bg-primary text-primary-foreground" : "border-border"
              }`}
            >
              {t(c)}
            </button>
          ))}
        </div>

        <ul className="mt-10 grid list-none gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((photo, i) => {
            const key = `${photo.alt}-${i}`;
            return (
              <li key={key}>
                <button
                  type="button"
                  onClick={() => {
                    setDir(1);
                    setActive(i);
                  }}
                  aria-haspopup="dialog"
                  aria-label={t(m("View image", "تصویر دیکھیں", "عرض الصورة", "तस्बिर हेर्नुहोस्")) + `: ${photo.alt}`}
                  className="group block w-full overflow-hidden rounded-lg border border-border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                >
                  <span
                    className={`block h-60 w-full overflow-hidden bg-muted ${
                      loaded[key] ? "" : "animate-pulse"
                    }`}
                  >
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      loading={i < 3 ? "eager" : "lazy"}
                      decoding="async"
                      fetchPriority={i < 3 ? "high" : "low"}
                      width={800}
                      height={600}
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      onLoad={() => setLoaded((s) => ({ ...s, [key]: true }))}
                      className={`h-60 w-full object-cover transition-all duration-500 group-hover:scale-105 ${
                        loaded[key] ? "opacity-100 blur-0" : "opacity-0 blur-md"
                      }`}
                    />
                  </span>
                </button>
              </li>
            );
          })}
        </ul>


        <div className="mt-16 rounded-lg border border-dashed border-gold/60 bg-secondary/50 p-8 text-center">
          <h2 className="font-display text-2xl text-primary">
            {t(m("Videos", "ویڈیوز", "الفيديوهات", "भिडियोहरू"))}
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            {t(
              m(
                "Video albums from annual functions and Qur'an competitions will be published here.",
                "سالانہ جلسوں اور مسابقۂ قرآن کی ویڈیوز یہاں شائع کی جائیں گی۔",
                "ستُنشر هنا مقاطع الحفل السنوي ومسابقات القرآن.",
                "वार्षिकोत्सव तथा कुरआन प्रतियोगिताका भिडियो यहाँ राखिनेछ।",
              ),
            )}
          </p>
        </div>
      </Section>

      {active !== null && shown[active] && (
        <div
          ref={dialogRef}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-charcoal/95 p-4 backdrop-blur-sm animate-in fade-in duration-300"
          onClick={() => setActive(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="lightbox-caption"
          aria-describedby="lightbox-help"
          onTouchStart={(e) => {
            touchX.current = e.touches[0]?.clientX ?? null;
          }}
          onTouchEnd={(e) => {
            const start = touchX.current;
            const end = e.changedTouches[0]?.clientX ?? null;
            touchX.current = null;
            if (start === null || end === null) return;
            const dx = end - start;
            if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1);
          }}
        >
          <p id="lightbox-help" className="sr-only">
            Image viewer. Use the left and right arrow keys to move between images, and press Escape to
            close.
          </p>
          <p aria-live="polite" aria-atomic="true" className="sr-only">
            {`Image ${active + 1} of ${shown.length}: ${shown[active]!.alt}`}
          </p>

          <button
            ref={closeRef}
            type="button"
            aria-label="Close image viewer"
            className="absolute end-5 top-5 rounded-full bg-cream/15 p-2 text-cream transition hover:bg-cream/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream"
            onClick={() => setActive(null)}
          >
            <X className="size-5" aria-hidden="true" />
          </button>

          {shown.length > 1 && (
            <>
              <button
                type="button"
                aria-label="Previous image"
                className="absolute start-2 sm:start-6 rounded-full bg-cream/15 p-2 text-cream transition hover:bg-cream/30 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream"
                onClick={(e) => {
                  e.stopPropagation();
                  step(-1);
                }}
              >
                <ChevronLeft className="size-6" aria-hidden="true" />
              </button>
              <button
                type="button"
                aria-label="Next image"
                className="absolute end-2 sm:end-6 rounded-full bg-cream/15 p-2 text-cream transition hover:bg-cream/30 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream"
                onClick={(e) => {
                  e.stopPropagation();
                  step(1);
                }}
              >
                <ChevronRight className="size-6" aria-hidden="true" />
              </button>
            </>
          )}

          <figure
            key={active}
            className={`max-w-5xl animate-in fade-in duration-500 ease-out ${
              dir === 1 ? "slide-in-from-right-8" : "slide-in-from-left-8"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={shown[active]!.src}
              alt={shown[active]!.alt}
              decoding="async"
              fetchPriority="high"
              sizes="100vw"
              className="max-h-[78vh] w-auto rounded-xl border-2 border-gold/60 shadow-2xl"
            />
            <figcaption id="lightbox-caption" className="mt-3 text-center text-sm text-cream/80">
              {shown[active]!.alt}
              <span className="ms-3 text-cream/50">
                {active + 1} / {shown.length}
              </span>
            </figcaption>
          </figure>
        </div>
      )}

    </>

  );
}
