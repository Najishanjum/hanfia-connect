import { createFileRoute } from "@tanstack/react-router";
import { PROGRAMS } from "@/content/site";
import { m, useLang } from "@/lib/i18n";
import { PageHero, Section } from "@/components/site/Section";

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title: "Programs — Hifz, Dars-e-Nizami, Arabic & More" },
      {
        name: "description",
        content:
          "Hifz-ul-Qur'an, Nazra, Tajweed, Dars-e-Nizami, Hadith, Fiqh, Arabic, Urdu, Islamic Studies and general education.",
      },
      { property: "og:title", content: "Programs — Al-Jamiatul Hanfia Mazharul Uloom" },
      {
        property: "og:description",
        content: "Religious and modern courses offered at the madrasa, jammat by jammat.",
      },
    ],
  }),
  component: Programs,
});

const JAMMATS = [
  "Jammat 1",
  "Jammat 2",
  "Jammat 3",
  "Jammat 4",
  "Jammat 5",
  "Jammat 6",
  "Jammat 7",
  "Jammat 8",
  "Jammat 9",
  "Jammat 10",
  "Special Hifz Class",
  "Advanced Islamic Studies",
];

function Programs() {
  const { t } = useLang();

  return (
    <>
      <PageHero
        title={m("Programs", "شعبہ جات", "البرامج", "कार्यक्रमहरू")}
        subtitle={m(
          "Religious sciences and modern subjects taught side by side.",
          "دینی علوم اور عصری مضامین ساتھ ساتھ۔",
          "العلوم الشرعية والمواد العصرية جنباً إلى جنب.",
          "धार्मिक तथा आधुनिक विषय सँगसँगै।",
        )}
      />

      <Section>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PROGRAMS.map((p) => (
            <article
              key={p.title.en}
              className="rounded-lg border border-border bg-card p-6 transition-shadow hover:shadow-md"
            >
              <h2 className="font-display text-xl text-primary">{t(p.title)}</h2>
              <div className="gold-rule mt-3 w-14" aria-hidden />
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t(p.text)}</p>
            </article>
          ))}
        </div>
      </Section>

      <div className="bg-secondary/60">
        <Section>
          <h2 className="text-center font-display text-3xl text-primary">
            {t(m("Jammats", "جماعتیں", "الجماعات", "जमातहरू"))}
          </h2>
          <div className="gold-rule mx-auto mt-4 w-40" aria-hidden />
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {JAMMATS.map((j) => (
              <span
                key={j}
                className="rounded-full border border-gold/50 bg-card px-4 py-2 text-sm text-foreground/85"
              >
                {j}
              </span>
            ))}
          </div>
        </Section>
      </div>
    </>
  );
}
