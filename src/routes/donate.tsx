import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { HandHeart } from "lucide-react";
import { DONATION_TYPES, UI } from "@/content/site";
import { m, useLang } from "@/lib/i18n";
import { PageHero, Section } from "@/components/site/Section";

export const Route = createFileRoute("/donate")({
  head: () => ({
    meta: [
      { title: "Donate — Zakat, Sadaqah & Madrasa Fund" },
      {
        name: "description",
        content:
          "Support Al-Jamiatul Hanfia Mazharul Uloom with Zakat, Sadaqah, scholarship, food or construction contributions.",
      },
      { property: "og:title", content: "Donate to Al-Jamiatul Hanfia Mazharul Uloom" },
      {
        property: "og:description",
        content: "Your Zakat and Sadaqah support students, teachers and the madrasa's daily needs.",
      },
    ],
  }),
  component: Donate,
});

const AMOUNTS = [500, 1000, 2500, 5000, 10000];

function Donate() {
  const { t } = useLang();
  const [type, setType] = useState(0);
  const [amount, setAmount] = useState<number | null>(1000);

  return (
    <>
      <PageHero
        title={m("Donate", "عطیات", "التبرعات", "दान")}
        subtitle={m(
          "Every contribution supports a student's education and meals.",
          "ہر تعاون ایک طالب علم کی تعلیم اور کھانے میں مدد کرتا ہے۔",
          "كل تبرع يدعم تعليم الطلاب وطعامهم.",
          "प्रत्येक सहयोगले विद्यार्थीको शिक्षा र खानामा मद्दत गर्छ।",
        )}
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <form
            className="soft-card p-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <h2 className="font-display text-2xl text-primary">
              {t(m("Donation type", "عطیہ کی قسم", "نوع التبرع", "दानको प्रकार"))}
            </h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {DONATION_TYPES.map((d, i) => (
                <button
                  key={d.en}
                  type="button"
                  onClick={() => setType(i)}
                  className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                    type === i
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border hover:border-gold"
                  }`}
                >
                  {t(d)}
                </button>
              ))}
            </div>

            <h2 className="mt-8 font-display text-2xl text-primary">
              {t(m("Amount (NPR)", "رقم (نیپالی روپیہ)", "المبلغ (روبية)", "रकम (रु.)"))}
            </h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {AMOUNTS.map((a) => (
                <button
                  key={a}
                  type="button"
                  onClick={() => setAmount(a)}
                  className={`rounded-md border px-4 py-2 text-sm ${
                    amount === a ? "border-gold bg-secondary text-primary" : "border-border"
                  }`}
                >
                  {a.toLocaleString()}
                </button>
              ))}
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="mb-1.5 block text-sm text-foreground/80">
                  {t(m("Donor name", "عطیہ دہندہ کا نام", "اسم المتبرع", "दाताको नाम"))}
                </span>
                <input className="w-full rounded-md border border-input bg-card px-3 py-2 text-sm" />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-sm text-foreground/80">
                  {t(m("Phone", "فون", "الهاتف", "फोन"))}
                </span>
                <input
                  type="tel"
                  className="w-full rounded-md border border-input bg-card px-3 py-2 text-sm"
                />
              </label>
            </div>

            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-charcoal"
            >
              <HandHeart className="size-4" aria-hidden />
              {t(m("Donate now", "ابھی عطیہ دیں", "تبرع الآن", "अहिले दान गर्नुहोस्"))}
            </button>
            <p className="mt-3 text-center text-xs text-muted-foreground">{t(UI.formNotice)}</p>
          </form>

          <aside className="rounded-lg border border-gold/50 bg-secondary/60 p-6">
            <p className="font-arabic text-xl leading-loose text-primary">
              مَّثَلُ ٱلَّذِينَ يُنفِقُونَ أَمْوَٰلَهُمْ فِى سَبِيلِ ٱللَّهِ
            </p>
            <p className="mt-3 text-sm text-muted-foreground">
              {t(
                m(
                  "The example of those who spend their wealth in the way of Allah. (Al-Baqarah 2:261)",
                  "ان لوگوں کی مثال جو اپنا مال اللہ کی راہ میں خرچ کرتے ہیں۔ (البقرہ ۲:۲۶۱)",
                  "مثل الذين ينفقون أموالهم في سبيل الله. (البقرة ٢:٢٦١)",
                  "अल्लाहको बाटोमा खर्च गर्नेहरूको उदाहरण। (अल-बकरा २:२६१)",
                ),
              )}
            </p>
            <h3 className="mt-8 font-display text-base tracking-tight text-charcoal uppercase">
              {t(m("Where your donation goes", "آپ کا عطیہ کہاں خرچ ہوتا ہے", "أين يُصرف تبرعك", "तपाईंको दान कहाँ खर्च हुन्छ"))}
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              {[
                m("Student meals and hostel", "طلبہ کا کھانا اور ہاسٹل", "طعام الطلاب والسكن", "विद्यार्थी खाना र छात्रावास"),
                m("Teacher salaries", "اساتذہ کی تنخواہ", "رواتب المعلمين", "शिक्षक तलब"),
                m("Books and library", "کتب و لائبریری", "الكتب والمكتبة", "पुस्तक तथा पुस्तकालय"),
                m("Building and maintenance", "تعمیر و مرمت", "البناء والصيانة", "भवन तथा मर्मत"),
              ].map((item) => (
                <li key={item.en} className="flex gap-2">
                  <span className="text-gold">◆</span>
                  {t(item)}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </Section>
    </>
  );
}
