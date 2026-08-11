import { createFileRoute, Link } from "@tanstack/react-router";
import {
  BookOpen,
  GraduationCap,
  Users,
  Phone,
  FileText,
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
  const actions = [
    { to: "/programs", params: undefined, label: UI.explore, Icon: BookOpen },
    { to: "/portal/$role", params: { role: "student" }, label: UI.studentPortal, Icon: GraduationCap },
    { to: "/portal/$role", params: { role: "teacher" }, label: UI.teacherPortal, Icon: Users },
    { to: "/contact", params: undefined, label: UI.contact, Icon: Phone },
    { to: "/admission", params: undefined, label: UI.admission, Icon: FileText },
  ];

  return (
    <div className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-20">
        <img
          src={IMAGES.campus}
          alt="Al-Jamiatul Hanfia Mazharul Uloom campus with its green dome and minarets"
          className="animate-kenburns size-full object-cover"
        />
      </div>
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-b from-charcoal/85 via-deep/80 to-deep/95"
        aria-hidden
      />
      <div className="pattern-geo animate-pattern-drift absolute inset-0 -z-10 opacity-40" aria-hidden />
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden>
        {[8, 22, 38, 54, 70, 86].map((left, i) => (
          <span
            key={left}
            className="animate-float-up absolute bottom-0 size-1.5 rounded-full bg-gold/70"
            style={{ left: `${left}%`, animationDelay: `${i * 2.1}s` }}
          />
        ))}
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 pt-20 pb-28 sm:pt-28 sm:pb-36 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="animate-rise text-center text-cream lg:text-start">
          <p className="font-arabic text-lg tracking-wide text-gold">{t(SITE.motto)}</p>
          <h1 className="mt-4 font-display text-4xl leading-tight text-cream sm:text-5xl lg:text-6xl">
            {t(SITE.name)}
          </h1>
          <p className="mt-4 text-sm text-cream/80 sm:text-base">{t(SITE.location)}</p>
          <p className="mt-6 font-urdu text-xl leading-loose text-gold-soft sm:text-2xl">
            علم کی روشنی، اخلاق کی تربیت
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-3 lg:justify-start">
            {actions.map(({ to, params, label, Icon }, i) => (
              <Link
                key={to + (params?.role ?? "")}
                to={to}
                params={params as never}
                className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-transform hover:-translate-y-0.5 ${
                  i === 0
                    ? "bg-gold text-charcoal"
                    : "border border-gold/50 bg-cream/10 text-cream backdrop-blur hover:bg-cream/20"
                }`}
              >
                <Icon className="size-4" aria-hidden />
                {t(label)}
              </Link>
            ))}
          </div>
        </div>

        <div className="animate-rise mx-auto w-full max-w-sm [animation-delay:200ms]">
          <div className="arch overflow-hidden border-4 border-gold/60 shadow-2xl">
            <img
              src={IMAGES.minarets}
              alt="Green dome and decorated minarets of the madrasa masjid"
              className="h-[26rem] w-full object-cover"
            />
          </div>
        </div>
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
    <div className="relative z-10 mx-auto -mt-12 max-w-7xl px-4">
      <div className="grid gap-px overflow-hidden rounded-xl bg-sidebar-border/60 shadow-xl sm:grid-cols-2 lg:grid-cols-4">
        {items.map(({ Icon, title, text }) => (
          <div key={title.en} className="group bg-sidebar p-6 text-sidebar-foreground">
            <span className="flex size-11 items-center justify-center rounded-full border border-gold/50 text-gold transition-colors group-hover:bg-gold group-hover:text-charcoal">
              <Icon className="size-5" aria-hidden />
            </span>
            <h3 className="mt-4 font-display text-base text-sidebar-primary">{t(title)}</h3>
            <p className="mt-1.5 text-xs leading-relaxed opacity-80">{t(text)}</p>
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
      <FeatureStrip />

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
          <div className="arch overflow-hidden border-2 border-gold/50">
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
                className="rounded-lg border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <h3 className="font-display text-xl text-primary">{t(item.title)}</h3>
                <div className="gold-rule mt-3 w-16" aria-hidden />
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
            <article key={p.title.en} className="rounded-lg border border-border bg-card p-5">
              <h3 className="font-display text-lg text-primary">{t(p.title)}</h3>
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
                <li key={n.title.en} className="rounded-lg border border-border bg-card p-5">
                  <p className="text-xs text-muted-foreground">{n.date}</p>
                  <h3 className="mt-1 font-display text-lg text-primary">{t(n.title)}</h3>
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
                  className="flex items-center gap-4 rounded-lg border border-border bg-card p-4"
                >
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
                    <CalendarDays className="size-5" aria-hidden />
                  </span>
                  <span>
                    <span className="block font-display text-base text-primary">{t(e.title)}</span>
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
