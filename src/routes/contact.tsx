import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { SITE, UI } from "@/content/site";
import { m, useLang } from "@/lib/i18n";
import { PageHero, Section } from "@/components/site/Section";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Al-Jamiatul Hanfia Mazharul Uloom, Mahottari" },
      {
        name: "description",
        content:
          "Visit or contact the madrasa at Gualb Pur, Siswa Kataya, Mahottari, Nepal — phone, email and office hours.",
      },
      { property: "og:title", content: "Contact the Madrasa" },
      {
        property: "og:description",
        content: "Address, phone, email and enquiry form for Al-Jamiatul Hanfia Mazharul Uloom.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  const { t } = useLang();

  return (
    <>
      <PageHero title={m("Contact Us", "رابطہ کریں", "اتصل بنا", "सम्पर्क गर्नुहोस्")} />

      <Section>
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-5">
            <div className="flex gap-3 soft-card p-5">
              <MapPin className="mt-0.5 size-5 shrink-0 text-gold" aria-hidden />
              <div>
                <h2 className="font-display text-base tracking-tight text-charcoal uppercase">
                  {t(m("Address", "پتہ", "العنوان", "ठेगाना"))}
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">{t(SITE.location)}</p>
              </div>
            </div>
            <div className="flex gap-3 soft-card p-5">
              <Phone className="mt-0.5 size-5 shrink-0 text-gold" aria-hidden />
              <div>
                <h2 className="font-display text-base tracking-tight text-charcoal uppercase">
                  {t(m("Phone", "فون", "الهاتف", "फोन"))}
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">{SITE.phone}</p>
              </div>
            </div>
            <div className="flex gap-3 soft-card p-5">
              <Mail className="mt-0.5 size-5 shrink-0 text-gold" aria-hidden />
              <div>
                <h2 className="font-display text-base tracking-tight text-charcoal uppercase">
                  {t(m("Email", "ای میل", "البريد الإلكتروني", "इमेल"))}
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">{SITE.email}</p>
              </div>
            </div>
            <div className="flex gap-3 soft-card p-5">
              <Clock className="mt-0.5 size-5 shrink-0 text-gold" aria-hidden />
              <div>
                <h2 className="font-display text-base tracking-tight text-charcoal uppercase">
                  {t(m("Office hours", "دفتری اوقات", "ساعات العمل", "कार्यालय समय"))}
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  {t(
                    m(
                      "Sunday – Thursday, 8:00 AM – 4:00 PM",
                      "اتوار تا جمعرات، صبح ۸ تا شام ۴",
                      "الأحد – الخميس، ٨ صباحاً – ٤ مساءً",
                      "आइतबार – बिहीबार, बिहान ८ – दिउँसो ४",
                    ),
                  )}
                </p>
              </div>
            </div>
          </div>

          <form
            className="soft-card p-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <h2 className="font-display text-2xl text-primary">
              {t(m("Send a message", "پیغام بھیجیں", "أرسل رسالة", "सन्देश पठाउनुहोस्"))}
            </h2>
            <div className="mt-5 grid gap-4">
              <label className="block">
                <span className="mb-1.5 block text-sm text-foreground/80">
                  {t(m("Your name", "آپ کا نام", "اسمك", "तपाईंको नाम"))}
                </span>
                <input className="w-full rounded-md border border-input bg-card px-3 py-2 text-sm" />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-sm text-foreground/80">
                  {t(m("Phone or email", "فون یا ای میل", "الهاتف أو البريد", "फोन वा इमेल"))}
                </span>
                <input className="w-full rounded-md border border-input bg-card px-3 py-2 text-sm" />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-sm text-foreground/80">
                  {t(m("Message", "پیغام", "الرسالة", "सन्देश"))}
                </span>
                <textarea
                  rows={5}
                  className="w-full rounded-md border border-input bg-card px-3 py-2 text-sm"
                />
              </label>
            </div>
            <button
              type="submit"
              className="mt-6 w-full rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground"
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
