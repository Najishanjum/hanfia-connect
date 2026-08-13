import { createFileRoute, Link } from "@tanstack/react-router";
import {
  BookOpen,
  GraduationCap,
  Users,
  CalendarDays,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import {
  ABOUT,
  EVENTS,
  IMAGES,
  NOTICES,
  PROGRAMS,
  SITE,
  STATS,
  UI,
} from "@/content/site";
import { m, useLang } from "@/lib/i18n";
import { Section, SectionHeading } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { CountUp } from "@/components/site/CountUp";
import { Marquee } from "@/components/site/Marquee";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Al-Jamiatul Hanfia Mazharul Uloom — Madrasa in Mahottari, Nepal" },
      {
        name: "description",
        content:
          "Hifz-ul-Qur'an, Dars-e-Nizami, Hadith, Fiqh, Arabic, Urdu and general education at Gualb Pur, Siswa Kataya, Mahottari, Nepal.",
      },
      { property: "og:title", content: "Al-Jamiatul Hanfia Mazharul Uloom" },
      {
        property: "og:description",
        content:
          "Islamic and modern education with character building — serving Mahottari, Nepal for over 25 years.",
      },
    ],
  }),
  component: Home,
});

function Hero() {
  const { t } = useLang();
  const cards = [
    { img: IMAGES.campus, label: m("Campus", "کیمپس", "الحرم", "क्याम्पस"), rot: "-rotate-6" },
    { img: IMAGES.minarets, label: m("Masjid", "مسجد", "المسجد", "मस्जिद"), rot: "rotate-3" },
    { img: IMAGES.campus, label: m("Hifz", "حفظ", "الحفظ", "हिफ्ज़"), rot: "-rotate-2" },
    { img: IMAGES.minarets, label: m("Tarbiyah", "تربیت", "التربية", "तालिम"), rot: "rotate-6" },
  ];

  return (
    <div className="relative isolate overflow-hidden bg-background pt-10 pb-24 sm:pt-16">
      <div
        className="animate-glow pointer-events-none absolute -top-52 left-1/2 -z-10 size-[46rem] -translate-x-1/2 rounded-full bg-gold/25 blur-3xl"
        aria-hidden
      />
      <div
        className="pattern-geo animate-pattern-drift pointer-events-none absolute inset-0 -z-10 opacity-[0.12]"
        aria-hidden
      />

      <div className="mx-auto max-w-5xl px-4 text-center">
        <span className="animate-rise inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-[11px] font-semibold tracking-[0.2em] text-muted-foreground uppercase shadow-sm">
          <span className="size-1.5 rounded-full bg-gold" aria-hidden />
          {t(SITE.motto)}
        </span>

        <h1 className="animate-rise display-xl mt-7 text-[2.6rem] text-charcoal sm:text-6xl lg:text-[4.6rem] [animation-delay:80ms]">
          {t(m("Al-Jamiatul Hanfia", "الجامعۃ الحنفیۃ", "الجامعة الحنفية", "अल-जामिअतुल हनफिया"))}{" "}
          <span className="text-gold">
            {t(m("Mazharul Uloom", "مظہر العلوم", "مظهر العلوم", "मज़हरुल उलूम"))}
          </span>
        </h1>

        <p className="animate-rise mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base [animation-delay:160ms]">
          {t(SITE.tagline)} — {t(SITE.location)}
        </p>

        <div className="animate-rise mt-9 flex flex-wrap justify-center gap-3 [animation-delay:240ms]">
          <Link
            to="/admission"
            className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-bold tracking-wide text-charcoal uppercase shadow-[0_18px_40px_-18px_oklch(0.75_0.19_148/0.9)] transition-transform hover:-translate-y-1"
          >
            {t(UI.admission)} <ArrowRight className="size-4 rtl:rotate-180" aria-hidden />
          </Link>
          <Link
            to="/programs"
            className="inline-flex items-center gap-2 rounded-full border border-charcoal/20 bg-card px-7 py-3.5 text-sm font-semibold text-charcoal transition-transform hover:-translate-y-1"
          >
            <BookOpen className="size-4" aria-hidden /> {t(UI.explore)}
          </Link>
        </div>
      </div>

      <div className="mt-16 flex flex-wrap items-start justify-center gap-4 px-4 sm:gap-6">
        {cards.map((c, i) => (
          <figure
            key={c.label.en + i}
            className={`tilt-card animate-rise w-40 rounded-[1.75rem] border border-border bg-card p-2.5 shadow-[0_24px_50px_-30px_oklch(0.2_0.04_158/0.6)] sm:w-52 ${c.rot}`}
            style={{ animationDelay: `${300 + i * 90}ms` }}
          >
            <span
              className="mx-auto -mt-6 mb-2 block size-4 rounded-full border-2 border-card bg-gold shadow"
              aria-hidden
            />
            <img
              src={c.img}
              alt={c.label.en}
              className="h-32 w-full rounded-[1.25rem] object-cover sm:h-44"
              loading="lazy"
            />
            <figcaption className="px-1.5 py-2.5">
              <span className="block font-display text-[11px] tracking-tight text-charcoal uppercase sm:text-xs">
                {t(c.label)}
              </span>
              <span className="mt-0.5 block text-[10px] text-muted-foreground">
                {t(SITE.brandBottom)}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}

function FeatureStrip() {
  const { t } = useLang();
  const items = [
    {
      Icon: GraduationCap,
      title: m("Holistic Education", "ہمہ جہت تعلیم", "تعليم شامل", "समग्र शिक्षा"),
      text: m(
        "Religious and modern learning together.",
        "دینی اور عصری تعلیم ایک ساتھ۔",
        "التعليم الديني والعصري معاً.",
        "धार्मिक र आधुनिक शिक्षा सँगै।",
      ),
    },
    {
      Icon: Users,
      title: m("Expert Scholars", "ماہر اساتذہ", "علماء أكفاء", "अनुभवी शिक्षक"),
      text: m(
        "Qualified ulama guiding every jammat.",
        "ہر جماعت کی رہنمائی مستند علماء سے۔",
        "علماء مؤهلون لكل جماعة.",
        "हरेक जमातका लागि योग्य उलमा।",
      ),
    },
    {
      Icon: BookOpen,
      title: m("Qur'an & Hifz", "قرآن و حفظ", "القرآن والحفظ", "कुरआन र हिफ्ज़"),
      text: m(
        "Tajweed, nazra and complete memorisation.",
        "تجوید، ناظرہ اور مکمل حفظ۔",
        "تجويد وناظرة وحفظ كامل.",
        "तजवीद, नाज़रा र पूर्ण हिफ्ज़।",
      ),
    },
    {
      Icon: ShieldCheck,
      title: m("Safe Campus", "محفوظ کیمپس", "حرم آمن", "सुरक्षित क्याम्पस"),
      text: m(
        "Hostel, meals and caring supervision.",
        "ہاسٹل، کھانا اور شفقت بھری نگرانی۔",
        "سكن وطعام وإشراف رحيم.",
        "छात्रावास, खाना र स्नेही निगरानी।",
      ),
    },
  ];

  return (
    <div className="relative z-10 mx-auto max-w-7xl px-4">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map(({ Icon, title, text }) => (
          <div key={title.en} className="soft-card tilt-card group p-6">
            <span className="flex size-11 items-center justify-center rounded-full bg-secondary text-primary transition-colors group-hover:bg-gold group-hover:text-charcoal">
              <Icon className="size-5" aria-hidden />
            </span>
            <h3 className="mt-4 font-display text-[13px] tracking-tight text-charcoal uppercase">{t(title)}</h3>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{t(text)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Home() {
  const { t } = useLang();

  return (
    <>
      <Hero />
      <div className="-mt-10">
        <FeatureStrip />
      </div>

      <Section>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">

          <div>
            <SectionHeading title={ABOUT.heading} align="start" />
            <p className="mt-6 leading-relaxed text-foreground/85">{t(ABOUT.body)}</p>
            <Link
              to="/about"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
            >
              {t(UI.readMore)} <ArrowRight className="size-4 rtl:rotate-180" aria-hidden />
            </Link>
          </div>
          <div className="overflow-hidden rounded-[2rem] border border-border shadow-[0_30px_60px_-35px_oklch(0.2_0.04_158/0.7)]">
            <img
              src={IMAGES.campus}
              alt="Madrasa building and courtyard"
              className="h-80 w-full object-cover"
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
              <article
                key={item.title.en}
                className="soft-card tilt-card p-7"
              >
                <h3 className="font-display text-lg tracking-tight text-charcoal uppercase">{t(item.title)}</h3>
                <div className="mt-3 h-1 w-10 rounded-full bg-gold" aria-hidden />
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t(item.text)}</p>
              </article>
            ))}
          </div>
        </Section>
      </div>

      <Section>
        <SectionHeading
          title={m("Programs", "شعبہ جات", "البرامج", "कार्यक्रमहरू")}
          subtitle={m(
            "Religious and modern education taught side by side.",
            "دینی اور عصری تعلیم ساتھ ساتھ۔",
            "التعليم الديني والعصري جنباً إلى جنب.",
            "धार्मिक र आधुनिक शिक्षा सँगसँगै।",
          )}
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PROGRAMS.map((p) => (
            <article key={p.title.en} className="soft-card tilt-card p-6">
              <h3 className="font-display text-base tracking-tight text-charcoal uppercase">{t(p.title)}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{t(p.text)}</p>
            </article>
          ))}
        </div>
      </Section>

      <div className="relative overflow-hidden bg-sidebar text-sidebar-foreground">
        <div className="pattern-geo animate-pattern-drift absolute inset-0 opacity-25" aria-hidden />
        <Section className="relative">
          <div className="grid gap-8 text-center sm:grid-cols-2 lg:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label.en}>
                <p className="font-display text-4xl text-sidebar-primary sm:text-5xl">{s.value}</p>
                <p className="mt-2 text-sm opacity-85">{t(s.label)}</p>
              </div>
            ))}
          </div>
        </Section>
      </div>

      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              title={m("Latest Announcements", "تازہ اعلانات", "أحدث الإعلانات", "पछिल्ला सूचनाहरू")}
              align="start"
            />
            <ul className="mt-6 space-y-4">
              {NOTICES.map((n) => (
                <li key={n.title.en} className="soft-card tilt-card p-6">
                  <p className="text-xs text-muted-foreground">{n.date}</p>
                  <h3 className="mt-1 font-display text-base tracking-tight text-charcoal uppercase">{t(n.title)}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{t(n.text)}</p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading
              title={m("Upcoming Events", "آنے والے پروگرام", "الفعاليات القادمة", "आगामी कार्यक्रम")}
              align="start"
            />
            <ul className="mt-6 space-y-3">
              {EVENTS.map((e) => (
                <li
                  key={e.title.en}
                  className="soft-card flex items-center gap-4 p-4"
                >
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
                    <CalendarDays className="size-5" aria-hidden />
                  </span>
                  <span>
                    <span className="block font-display text-sm tracking-tight text-charcoal uppercase">{t(e.title)}</span>
                    <span className="block text-xs text-muted-foreground">{e.date}</span>
                  </span>
                </li>
              ))}
            </ul>
            <Link
              to="/events"
              className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
            >
              {t(UI.viewAll)} <ArrowRight className="size-4 rtl:rotate-180" aria-hidden />
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
