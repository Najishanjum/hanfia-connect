import { createFileRoute, Link } from "@tanstack/react-router";
import {
  BookOpen,
  GraduationCap,
  Users,
  CalendarDays,
  ArrowRight,
  ShieldCheck,
  Quote,
  Plus,
  HeartHandshake,
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
        {items.map(({ Icon, title, text }, i) => (
          <Reveal key={title.en} delay={i * 90}>
            <div className="soft-card tilt-card group h-full p-6">
              <span className="flex size-11 items-center justify-center rounded-full bg-secondary text-primary transition-all duration-500 group-hover:scale-110 group-hover:bg-gold group-hover:text-charcoal">
                <Icon className="size-5" aria-hidden />
              </span>
              <h3 className="mt-4 font-display text-[13px] tracking-tight text-charcoal uppercase">{t(title)}</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{t(text)}</p>
            </div>
          </Reveal>
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

      <div className="mt-16">
        <Marquee
          items={[
            t(SITE.motto),
            t(m("Hifz-ul-Qur'an", "حفظ القرآن", "حفظ القرآن", "हिफ्ज़-उल-कुरआन")),
            t(m("Dars-e-Nizami", "درس نظامی", "درس نظامي", "दर्स-ए-निज़ामी")),
            t(m("Arabic • Urdu • English • Nepali", "عربی • اردو • انگریزی • نیپالی", "عربي • أردو • إنجليزي • نيبالي", "अरबी • उर्दू • अंग्रेजी • नेपाली")),
            t(m("Boarding & Hostel", "بورڈنگ و ہاسٹل", "السكن الداخلي", "बोर्डिङ र छात्रावास")),
          ]}
        />
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
            {STATS.map((s, i) => (
              <Reveal key={s.label.en} delay={i * 110}>
                <CountUp
                  value={s.value}
                  className="font-display text-4xl text-sidebar-primary sm:text-5xl"
                />
                <p className="mt-2 text-sm opacity-85">{t(s.label)}</p>
              </Reveal>
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

      <Testimonials />
      <Faq />
      <CtaBanner />
    </>
  );
}

function Testimonials() {
  const { t } = useLang();
  const quotes = [
    {
      text: m(
        "My son memorised the Qur'an here with tajweed and adab. The teachers treat every child like their own.",
        "میرے بیٹے نے یہاں تجوید و ادب کے ساتھ قرآن حفظ کیا۔ اساتذہ ہر بچے کو اپنا سمجھتے ہیں۔",
        "حفظ ابني القرآن هنا بالتجويد والأدب. المعلمون يعاملون كل طفل كأنه ابنهم.",
        "मेरो छोराले यहाँ तजवीदसहित कुरआन हिफ्ज़ गर्‍यो। शिक्षकहरूले हरेक बच्चालाई आफ्नै जस्तै हेर्छन्।",
      ),
      name: m("Md. Ansari", "محمد انصاری", "محمد الأنصاري", "मो. अन्सारी"),
      role: m("Parent", "سرپرست", "ولي أمر", "अभिभावक"),
    },
    {
      text: m(
        "Religious and modern subjects together gave me confidence for both deen and duniya.",
        "دینی و عصری تعلیم نے مجھے دین و دنیا دونوں کے لیے حوصلہ دیا۔",
        "الجمع بين العلوم الشرعية والعصرية منحني ثقة في الدين والدنيا.",
        "धार्मिक र आधुनिक विषय सँगै पढ्दा दुवैमा आत्मविश्वास मिल्यो।",
      ),
      name: m("Abdullah", "عبداللہ", "عبد الله", "अब्दुल्लाह"),
      role: m("Alumnus", "فارغ التحصیل", "خريج", "पूर्व विद्यार्थी"),
    },
    {
      text: m(
        "Clean hostel, timely meals and daily tarbiyah sessions — parents can rest easy.",
        "صاف ہاسٹل، وقت پر کھانا اور روزانہ تربیتی نشستیں — والدین مطمئن رہتے ہیں۔",
        "سكن نظيف ووجبات منتظمة وجلسات تربية يومية — يطمئن الأولياء.",
        "सफा छात्रावास, समयमै खाना र दैनिक तालिम — अभिभावक ढुक्क हुन्छन्।",
      ),
      name: m("Rukhsana Khatun", "رخسانہ خاتون", "رخسانة خاتون", "रुख्साना खातुन"),
      role: m("Guardian", "سرپرست", "ولية أمر", "संरक्षक"),
    },
  ];

  return (
    <div className="bg-secondary/60">
      <Section>
        <SectionHeading
          title={m("Voices of Our Community", "ہماری برادری کی آوازیں", "أصوات مجتمعنا", "हाम्रो समुदायका आवाज")}
          subtitle={m(
            "What parents, students and alumni say about Mazharul Uloom.",
            "والدین، طلبہ اور فارغین کیا کہتے ہیں۔",
            "ماذا يقول الأولياء والطلاب والخريجون.",
            "अभिभावक, विद्यार्थी र पूर्व विद्यार्थी के भन्छन्।",
          )}
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {quotes.map((q, i) => (
            <Reveal key={q.name.en} delay={i * 110}>
              <figure className="soft-card tilt-card relative h-full p-7">
                <Quote className="size-7 text-gold" aria-hidden />
                <blockquote className="mt-4 text-sm leading-relaxed text-foreground/85">
                  {t(q.text)}
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3 border-t border-border pt-4">
                  <span className="grid size-9 place-items-center rounded-full bg-charcoal font-display text-xs text-cream">
                    {q.name.en.charAt(0)}
                  </span>
                  <span>
                    <span className="block font-display text-[12px] tracking-tight text-charcoal uppercase">
                      {t(q.name)}
                    </span>
                    <span className="block text-[11px] text-muted-foreground">{t(q.role)}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Section>
    </div>
  );
}

function Faq() {
  const { t } = useLang();
  const faqs = [
    {
      q: m("Who can apply for admission?", "داخلہ کون لے سکتا ہے؟", "من يمكنه التقديم؟", "भर्नाका लागि को आवेदन दिन सक्छ?"),
      a: m(
        "Boys from age 6 and above may apply for Nazra, Hifz and Dars-e-Nizami courses throughout the admission season.",
        "چھ سال سے زائد عمر کے طلبہ ناظرہ، حفظ اور درس نظامی میں داخلہ لے سکتے ہیں۔",
        "يمكن للطلاب من سن السادسة فما فوق التقديم لبرامج الناظرة والحفظ ودرس النظامي.",
        "६ वर्षभन्दा माथिका विद्यार्थीले नाज़रा, हिफ्ज़ र दर्स-ए-निज़ामीमा आवेदन दिन सक्छन्।",
      ),
    },
    {
      q: m("Is hostel accommodation available?", "کیا ہاسٹل کی سہولت ہے؟", "هل يتوفر سكن داخلي؟", "छात्रावास सुविधा छ?"),
      a: m(
        "Yes. Residential students receive lodging, three meals a day and supervised study hours.",
        "جی ہاں۔ مقیم طلبہ کو رہائش، تین وقت کا کھانا اور نگرانی میں مطالعہ فراہم کیا جاتا ہے۔",
        "نعم، يحصل الطلاب المقيمون على السكن وثلاث وجبات وساعات مذاكرة تحت الإشراف.",
        "छ। आवासीय विद्यार्थीले बास, दिनको तीन छाक खाना र निगरानीमा अध्ययन पाउँछन्।",
      ),
    },
    {
      q: m("Which languages are taught?", "کون سی زبانیں پڑھائی جاتی ہیں؟", "ما اللغات التي تُدرّس؟", "कुन भाषाहरू पढाइन्छ?"),
      a: m(
        "Arabic, Urdu, English and Nepali are taught alongside religious sciences.",
        "عربی، اردو، انگریزی اور نیپالی دینی علوم کے ساتھ پڑھائی جاتی ہیں۔",
        "تُدرّس العربية والأردية والإنجليزية والنيبالية إلى جانب العلوم الشرعية.",
        "अरबी, उर्दू, अंग्रेजी र नेपाली धार्मिक विषयसँगै पढाइन्छ।",
      ),
    },
    {
      q: m("How can I support the madrasa?", "میں مدرسہ کی مدد کیسے کروں؟", "كيف أدعم المدرسة؟", "मदरसालाई कसरी सहयोग गर्ने?"),
      a: m(
        "Zakat, sadaqah and sponsorship of a student are all welcome — see the Donate page for details.",
        "زکوٰۃ، صدقہ اور کفالتِ طالب علم کا خیرمقدم ہے — تفصیل ڈونیٹ صفحہ پر۔",
        "نرحب بالزكاة والصدقة وكفالة طالب — التفاصيل في صفحة التبرع.",
        "जकात, सदका र विद्यार्थी प्रायोजन स्वागतयोग्य छ — विवरण दान पृष्ठमा।",
      ),
    },
  ];

  return (
    <Section>
      <SectionHeading
        title={m("Frequently Asked", "اکثر پوچھے گئے سوالات", "الأسئلة الشائعة", "बारम्बार सोधिने प्रश्न")}
      />
      <div className="mx-auto mt-10 max-w-3xl space-y-3">
        {faqs.map((f, i) => (
          <Reveal key={f.q.en} delay={i * 80}>
            <details className="faq soft-card px-6 py-5">
              <summary className="flex items-center justify-between gap-4">
                <span className="font-display text-[13px] tracking-tight text-charcoal uppercase">
                  {t(f.q)}
                </span>
                <span className="faq-icon grid size-8 shrink-0 place-items-center rounded-full bg-secondary text-primary transition-transform duration-300">
                  <Plus className="size-4" aria-hidden />
                </span>
              </summary>
              <p className="faq-body mt-3 text-sm leading-relaxed text-muted-foreground">{t(f.a)}</p>
            </details>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function CtaBanner() {
  const { t } = useLang();
  return (
    <Section>
      <Reveal>
        <div className="relative isolate overflow-hidden rounded-[2.5rem] bg-charcoal px-6 py-14 text-center sm:px-12">
          <div className="pattern-geo animate-pattern-drift absolute inset-0 -z-10 opacity-20" aria-hidden />
          <div
            className="animate-glow pointer-events-none absolute -bottom-40 left-1/2 -z-10 size-[30rem] -translate-x-1/2 rounded-full bg-gold/30 blur-3xl"
            aria-hidden
          />
          <span className="inline-flex items-center gap-2 rounded-full border border-cream/20 px-4 py-1.5 text-[11px] font-semibold tracking-[0.2em] text-cream/80 uppercase">
            <HeartHandshake className="size-3.5 text-gold" aria-hidden />
            {t(m("Support & Enrol", "تعاون و داخلہ", "الدعم والالتحاق", "सहयोग र भर्ना"))}
          </span>
          <h2 className="display-xl mt-6 text-3xl text-cream sm:text-5xl">
            {t(m("Build a generation of", "ایک نسل تیار کریں", "ابنِ جيلاً من", "एउटा पुस्ता निर्माण गरौं"))}{" "}
            <span className="gold-text">
              {t(m("knowledge & character", "علم و اخلاق کی", "العلم والأخلاق", "ज्ञान र चरित्रको"))}
            </span>
          </h2>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Link
              to="/admission"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-bold tracking-wide text-charcoal uppercase transition-transform hover:-translate-y-1"
            >
              {t(UI.admission)} <ArrowRight className="size-4 rtl:rotate-180" aria-hidden />
            </Link>
            <Link
              to="/donate"
              className="inline-flex items-center gap-2 rounded-full border border-cream/30 px-7 py-3.5 text-sm font-semibold text-cream transition-colors hover:bg-cream/10"
            >
              {t(m("Donate", "عطیہ", "تبرع", "दान"))}
            </Link>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
