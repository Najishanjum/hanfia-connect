import { createFileRoute } from "@tanstack/react-router";
import { STAFF } from "@/content/site";
import { m, useLang } from "@/lib/i18n";
import { PageHero, Section } from "@/components/site/Section";

export const Route = createFileRoute("/administration")({
  head: () => ({
    meta: [
      { title: "Administration & Teachers — Al-Jamiatul Hanfia Mazharul Uloom" },
      {
        name: "description",
        content:
          "Meet the Muhtamim, Principal, Qaris and teachers who lead Al-Jamiatul Hanfia Mazharul Uloom.",
      },
      { property: "og:title", content: "Administration & Teachers" },
      {
        property: "og:description",
        content: "The scholars and staff serving the madrasa in Mahottari, Nepal.",
      },
    ],
  }),
  component: Administration,
});

function initials(name: string) {
  return name
    .split(" ")
    .slice(-2)
    .map((w) => w[0])
    .join("");
}

function Administration() {
  const { t } = useLang();

  return (
    <>
      <PageHero
        title={m("Administration", "انتظامیہ", "الإدارة", "प्रशासन")}
        subtitle={m(
          "The scholars and staff who guide the madrasa.",
          "مدرسہ کی رہنمائی کرنے والے علماء و عملہ۔",
          "العلماء والموظفون الذين يقودون الجامعة.",
          "मदरसाको नेतृत्व गर्ने विद्वान तथा कर्मचारीहरू।",
        )}
      />

      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {STAFF.map((person) => (
            <article
              key={person.name.en}
              className="soft-card p-6 text-center"
            >
              <span className="mx-auto flex size-20 items-center justify-center rounded-full border-2 border-gold/60 bg-secondary font-display text-2xl text-primary">
                {initials(person.name.en)}
              </span>
              <h2 className="mt-4 font-display text-base tracking-tight text-charcoal uppercase">{t(person.name)}</h2>
              <p className="mt-1 text-xs uppercase tracking-wide text-gold">{t(person.role)}</p>
              <p className="mt-3 text-sm text-muted-foreground">{t(person.bio)}</p>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
