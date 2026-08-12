import { createFileRoute } from "@tanstack/react-router";
import { ABOUT, IMAGES, SITE, TIMELINE } from "@/content/site";
import { m, useLang } from "@/lib/i18n";
import { PageHero, Section, SectionHeading } from "@/components/site/Section";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About & History — Al-Jamiatul Hanfia Mazharul Uloom" },
      {
        name: "description",
        content:
          "History, mission and milestones of Al-Jamiatul Hanfia Mazharul Uloom in Mahottari, Nepal, from 1998 to today.",
      },
      { property: "og:title", content: "About & History — Al-Jamiatul Hanfia Mazharul Uloom" },
      {
        property: "og:description",
        content: "The story of the madrasa: founding, growth, and its mission of knowledge and character.",
      },
    ],
  }),
  component: About,
});

function About() {
  const { t } = useLang();

  return (
    <>
      <PageHero
        title={m("About & History", "تعارف و تاریخ", "عن الجامعة وتاريخها", "परिचय तथा इतिहास")}
        subtitle={SITE.tagline}
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading title={ABOUT.heading} align="start" />
            <p className="mt-6 leading-relaxed text-foreground/85">{t(ABOUT.body)}</p>
            <p className="mt-4 leading-relaxed text-foreground/85">{t(SITE.location)}</p>
          </div>
          <div className="overflow-hidden rounded-[2rem] border border-border">
            <img
              src={IMAGES.minarets}
              alt="Minarets and green dome of the madrasa masjid"
              className="h-96 w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </Section>

      <div className="bg-secondary/60">
        <Section>
          <SectionHeading title={ABOUT.missionHeading} />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {ABOUT.mission.map((item) => (
              <article key={item.title.en} className="soft-card p-6">
                <h3 className="font-display text-lg tracking-tight text-charcoal uppercase">{t(item.title)}</h3>
                <div className="gold-rule mt-3 w-16" aria-hidden />
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t(item.text)}</p>
              </article>
            ))}
          </div>
        </Section>
      </div>

      <Section>
        <SectionHeading title={m("Our Journey", "ہمارا سفر", "مسيرتنا", "हाम्रो यात्रा")} />
        <ol className="relative mx-auto mt-12 max-w-2xl border-s-2 border-gold/50 ps-8">
          {TIMELINE.map((item) => (
            <li key={item.year} className="relative pb-10 last:pb-0">
              <span
                className="absolute -start-[2.6rem] flex size-8 items-center justify-center rounded-full border-2 border-gold bg-card"
                aria-hidden
              >
                <span className="size-2.5 rounded-full bg-primary" />
              </span>
              <p className="font-display text-2xl text-gold">{item.year}</p>
              <p className="mt-1 text-base text-foreground/85">{t(item.title)}</p>
            </li>
          ))}
        </ol>
      </Section>
    </>
  );
}
