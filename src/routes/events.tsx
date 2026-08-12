import { createFileRoute } from "@tanstack/react-router";
import { CalendarDays } from "lucide-react";
import { EVENTS, NOTICES } from "@/content/site";
import { m, useLang } from "@/lib/i18n";
import { PageHero, Section, SectionHeading } from "@/components/site/Section";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events & Notices — Al-Jamiatul Hanfia Mazharul Uloom" },
      {
        name: "description",
        content:
          "Admission notices, examination schedules, Seerat programs and Qur'an competitions at the madrasa.",
      },
      { property: "og:title", content: "Events & Notices" },
      {
        property: "og:description",
        content: "Announcements and the upcoming programme calendar of the madrasa.",
      },
    ],
  }),
  component: Events,
});

const ISLAMIC_DATES = [
  { name: m("Ramadan", "رمضان", "رمضان", "रमजान"), note: m("Month of fasting", "ماہِ صیام", "شهر الصيام", "उपवासको महिना") },
  { name: m("Eid-ul-Fitr", "عید الفطر", "عيد الفطر", "ईद-उल-फित्र"), note: m("1 Shawwal", "یکم شوال", "١ شوال", "१ शव्वाल") },
  { name: m("Eid-ul-Adha", "عید الاضحیٰ", "عيد الأضحى", "ईद-उल-अज़हा"), note: m("10 Dhul Hijjah", "۱۰ ذی الحجہ", "١٠ ذو الحجة", "१० जुल हिज्जा") },
  { name: m("Muharram & Ashura", "محرم و عاشورا", "محرم وعاشوراء", "मुहर्रम र आशूरा"), note: m("New Islamic year", "نیا اسلامی سال", "رأس السنة الهجرية", "नयाँ इस्लामिक वर्ष") },
  { name: m("Rabi-ul-Awwal", "ربیع الاول", "ربيع الأول", "रबी-उल-अव्वल"), note: m("Seerat programs", "سیرت پروگرام", "برامج السيرة", "सीरत कार्यक्रम") },
  { name: m("Shab-e-Barat", "شبِ برات", "ليلة البراءة", "शब-ए-बरात"), note: m("15 Sha'ban", "۱۵ شعبان", "١٥ شعبان", "१५ शाबान") },
];

function Events() {
  const { t } = useLang();

  return (
    <>
      <PageHero
        title={m("Events & Notices", "اعلانات و پروگرام", "الأخبار والفعاليات", "सूचना तथा कार्यक्रम")}
      />

      <Section>
        <SectionHeading
          title={m("Notices", "اعلانات", "الإعلانات", "सूचनाहरू")}
          align="start"
        />
        <ul className="mt-6 space-y-4">
          {NOTICES.map((n) => (
            <li key={n.title.en} className="soft-card p-6">
              <p className="text-xs text-muted-foreground">{n.date}</p>
              <h3 className="mt-1 font-display text-lg tracking-tight text-charcoal uppercase">{t(n.title)}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t(n.text)}</p>
            </li>
          ))}
        </ul>
      </Section>

      <div className="bg-secondary/60">
        <Section>
          <SectionHeading
            title={m("Upcoming Events", "آنے والے پروگرام", "الفعاليات القادمة", "आगामी कार्यक्रम")}
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {EVENTS.map((e) => (
              <div
                key={e.title.en}
                className="flex items-center gap-4 soft-card p-5"
              >
                <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
                  <CalendarDays className="size-5" aria-hidden />
                </span>
                <span>
                  <span className="block font-display text-base tracking-tight text-charcoal uppercase">{t(e.title)}</span>
                  <span className="block text-xs text-muted-foreground">{e.date}</span>
                </span>
              </div>
            ))}
          </div>
        </Section>
      </div>

      <Section>
        <SectionHeading
          title={m("Islamic Calendar", "اسلامی کیلنڈر", "التقويم الإسلامي", "इस्लामिक पात्रो")}
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ISLAMIC_DATES.map((d) => (
            <div key={d.name.en} className="rounded-lg border border-gold/40 bg-card p-5">
              <h3 className="font-display text-base tracking-tight text-charcoal uppercase">{t(d.name)}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{t(d.note)}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
