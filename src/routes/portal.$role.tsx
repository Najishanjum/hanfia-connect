import { createFileRoute, Link } from "@tanstack/react-router";
import { LockKeyhole } from "lucide-react";
import { UI } from "@/content/site";
import { m, useLang } from "@/lib/i18n";
import { PageHero, Section } from "@/components/site/Section";

export const Route = createFileRoute("/portal/$role")({
  head: () => ({
    meta: [
      { title: "Portal — Al-Jamiatul Hanfia Mazharul Uloom" },
      {
        name: "description",
        content:
          "Student, teacher and guardian portals for attendance, results, Qur'an progress and fees — coming soon.",
      },
      { property: "og:title", content: "Madrasa Portal" },
      {
        property: "og:description",
        content: "Login area for students, teachers and guardians of the madrasa.",
      },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: Portal,
});

const FEATURES = {
  student: [
    m("Attendance record", "حاضری", "سجل الحضور", "उपस्थिति"),
    m("Examination results", "امتحانی نتائج", "نتائج الامتحانات", "परीक्षा नतिजा"),
    m("Qur'an / Hifz progress", "قرآن و حفظ کی پیش رفت", "تقدم الحفظ", "कुरआन प्रगति"),
    m("Fees and receipts", "فیس و رسیدیں", "الرسوم والإيصالات", "शुल्क तथा रसिद"),
  ],
  teacher: [
    m("My classes and students", "میری جماعتیں و طلبہ", "صفوفي وطلابي", "मेरा कक्षा र विद्यार्थी"),
    m("Mark attendance", "حاضری لگائیں", "تسجيل الحضور", "उपस्थिति दर्ता"),
    m("Enter marks", "نمبرات درج کریں", "إدخال الدرجات", "अंक प्रविष्टि"),
    m("Qur'an progress entry", "قرآن کی پیش رفت", "إدخال تقدم الحفظ", "कुरआन प्रगति"),
  ],
};

function Portal() {
  const { role } = Route.useParams();
  const { t } = useLang();
  const list = role === "teacher" ? FEATURES.teacher : FEATURES.student;
  const title = role === "teacher" ? UI.teacherPortal : UI.studentPortal;

  return (
    <>
      <PageHero title={title} subtitle={UI.comingSoon} />
      <Section>
        <div className="mx-auto max-w-xl rounded-lg border border-gold/50 bg-card p-8 text-center">
          <span className="mx-auto flex size-14 items-center justify-center rounded-full bg-secondary text-primary">
            <LockKeyhole className="size-6" aria-hidden />
          </span>
          <h2 className="mt-5 font-display text-2xl text-primary">
            {t(m("What you will find here", "یہاں کیا ملے گا", "ماذا ستجد هنا", "यहाँ के पाइनेछ"))}
          </h2>
          <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
            {list.map((f) => (
              <li key={f.en}>{t(f)}</li>
            ))}
          </ul>
          <Link
            to="/contact"
            className="mt-8 inline-flex rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground"
          >
            {t(UI.contact)}
          </Link>
        </div>
      </Section>
    </>
  );
}
