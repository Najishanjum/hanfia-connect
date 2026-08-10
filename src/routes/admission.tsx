import { createFileRoute } from "@tanstack/react-router";
import { PROGRAMS, UI } from "@/content/site";
import { m, useLang, type Multi } from "@/lib/i18n";
import { PageHero, Section } from "@/components/site/Section";

export const Route = createFileRoute("/admission")({
  head: () => ({
    meta: [
      { title: "Admission — Apply to Al-Jamiatul Hanfia Mazharul Uloom" },
      {
        name: "description",
        content:
          "Admission information and application form for Hifz, Nazra, Dars-e-Nizami and general education programs.",
      },
      { property: "og:title", content: "Admission — Al-Jamiatul Hanfia Mazharul Uloom" },
      {
        property: "og:description",
        content: "How to apply, required documents and the online application form.",
      },
    ],
  }),
  component: Admission,
});

const STEPS: Multi[] = [
  m("Student information", "طالب علم کی معلومات", "معلومات الطالب", "विद्यार्थी विवरण"),
  m("Guardian information", "سرپرست کی معلومات", "معلومات ولي الأمر", "अभिभावक विवरण"),
  m("Academic information", "تعلیمی معلومات", "المعلومات الدراسية", "शैक्षिक विवरण"),
  m("Program selection", "شعبے کا انتخاب", "اختيار البرنامج", "कार्यक्रम छनोट"),
  m("Documents", "دستاویزات", "المستندات", "कागजातहरू"),
  m("Submit application", "درخواست جمع کریں", "إرسال الطلب", "निवेदन पेश"),
];

const DOCS: Multi[] = [
  m("Birth certificate copy", "پیدائشی سرٹیفکیٹ کی نقل", "نسخة شهادة الميلاد", "जन्मदर्ता प्रतिलिपि"),
  m("Guardian citizenship copy", "سرپرست کی شہریت کی نقل", "نسخة هوية ولي الأمر", "अभिभावकको नागरिकता"),
  m("Two passport photos", "دو پاسپورٹ سائز تصاویر", "صورتان شخصيتان", "दुई पासपोर्ट फोटो"),
  m("Previous school record (if any)", "سابقہ تعلیمی ریکارڈ (اگر ہو)", "السجل الدراسي السابق إن وجد", "पूर्व शैक्षिक अभिलेख"),
];

function Field({ label, type = "text" }: { label: Multi; type?: string }) {
  const { t } = useLang();
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm text-foreground/80">{t(label)}</span>
      <input
        type={type}
        className="w-full rounded-md border border-input bg-card px-3 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/40"
      />
    </label>
  );
}

function Admission() {
  const { t } = useLang();

  return (
    <>
      <PageHero
        title={m("Admission", "داخلہ", "القبول", "भर्ना")}
        subtitle={m(
          "Admissions are open for the 2026 session.",
          "سیشن ۲۰۲۶ کے داخلے جاری ہیں۔",
          "القبول مفتوح لدورة ٢٠٢٦.",
          "सत्र २०२६ को भर्ना खुला छ।",
        )}
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="font-display text-2xl text-primary">
              {t(m("Admission process", "داخلہ کا طریقہ", "خطوات القبول", "भर्ना प्रक्रिया"))}
            </h2>
            <ol className="mt-5 space-y-3">
              {STEPS.map((s, i) => (
                <li key={s.en} className="flex items-center gap-3 text-sm text-foreground/85">
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
                    {i + 1}
                  </span>
                  {t(s)}
                </li>
              ))}
            </ol>

            <h2 className="mt-10 font-display text-2xl text-primary">
              {t(m("Required documents", "ضروری دستاویزات", "المستندات المطلوبة", "आवश्यक कागजात"))}
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {DOCS.map((d) => (
                <li key={d.en} className="flex gap-2">
                  <span className="text-gold">◆</span>
                  {t(d)}
                </li>
              ))}
            </ul>
          </div>

          <form
            className="rounded-lg border border-border bg-card p-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <h2 className="font-display text-2xl text-primary">
              {t(m("Application form", "درخواست فارم", "استمارة الطلب", "निवेदन फारम"))}
            </h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <Field label={m("Student full name", "طالب علم کا نام", "اسم الطالب", "विद्यार्थीको नाम")} />
              <Field label={m("Father's name", "والد کا نام", "اسم الأب", "बुबाको नाम")} />
              <Field label={m("Date of birth", "تاریخ پیدائش", "تاريخ الميلاد", "जन्म मिति")} type="date" />
              <Field label={m("District", "ضلع", "المنطقة", "जिल्ला")} />
              <Field label={m("Guardian phone", "سرپرست کا فون", "هاتف ولي الأمر", "अभिभावक फोन")} type="tel" />
              <label className="block">
                <span className="mb-1.5 block text-sm text-foreground/80">
                  {t(m("Program", "شعبہ", "البرنامج", "कार्यक्रम"))}
                </span>
                <select className="w-full rounded-md border border-input bg-card px-3 py-2 text-sm">
                  {PROGRAMS.map((p) => (
                    <option key={p.title.en}>{t(p.title)}</option>
                  ))}
                </select>
              </label>
            </div>
            <label className="mt-4 block">
              <span className="mb-1.5 block text-sm text-foreground/80">
                {t(m("Previous education", "سابقہ تعلیم", "التعليم السابق", "पूर्व शिक्षा"))}
              </span>
              <textarea
                rows={3}
                className="w-full rounded-md border border-input bg-card px-3 py-2 text-sm"
              />
            </label>
            <button
              type="submit"
              className="mt-6 w-full rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              {t(UI.submit)}
            </button>
            <p className="mt-3 text-center text-xs text-muted-foreground">{t(UI.formNotice)}</p>
          </form>
        </div>
      </Section>
    </>
  );
}
