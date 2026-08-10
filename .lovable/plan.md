# AL-JAMIATUL HANFIA MAZHARUL ULOOM — Phase 1: Public Website

The full concept (student/teacher/fees/hostel/Quran modules, portals, AI) is a multi-phase system. This plan builds Phase 1 — the public website — as a solid, beautiful foundation. Later phases add the backend, logins and management modules.

## What gets built now

**Home page**
- Hero using your two uploaded mosque photos, with a gentle animated background: slow parallax/Ken Burns drift on the madrasa image, softly moving Islamic geometric pattern overlay, subtle floating light particles, and arch-shaped framing. Respectful and slow, not flashy.
- Institution name in English + Arabic (الجامعۃ الحنفیۃ مظہر العلوم), location line (Gualb Pur, Siswa Kataya, Mahottari, Nepal), tagline "علم کی روشنی، اخلاق کی تربیت".
- Buttons: Explore Madrasa, Student Portal, Teacher Portal, Contact Us, Admission (portal buttons link to placeholder "coming soon" pages in Phase 1).
- Sections: About, Our Mission, Programs (Hifz, Nazra, Dars-e-Nizami, Islamic Studies, Urdu, Arabic, Tajweed, Fiqh, Hadith, General Education), Latest Announcements, Upcoming Events, Statistics counters (500+ students, 30+ teachers, 10+ programs, 25+ years) animating on scroll.

**Other public pages**
- About / History (vertical timeline: 1998 → 2005 → 2012 → 2020 → 2026)
- Programs (detail cards per program)
- Administration & Teachers (photo + designation + bio cards)
- Gallery (photo categories, lightbox; video section ready for YouTube links)
- Events & Notices (list + detail)
- Admission (online application form UI)
- Donation (donation type selection + form UI)
- Contact (address, phone, map, message form)

**Multilingual + typography**
- Language switcher: English | اردو | العربية | नेपाली, with full RTL layout for Urdu/Arabic.
- Fonts: Noto Nastaliq Urdu (Urdu), Amiri / Noto Naskh Arabic (Arabic), Noto Sans Devanagari (Nepali), a clean serif/sans pair for English.
- All static site text translated in all four languages.

**Design system**
- Deep Islamic green, gold, cream, charcoal tokens; arch motifs, geometric pattern borders, elegant cards, soft motion. Mobile-first, responsive nav drawer.

## Not in this phase

Admin dashboard, student/teacher/parent portals, attendance, exams, fees/Galla, hostel, library, Quran progress tracking, certificates, ID cards, AI assistant, payment processing, notifications. Forms in Phase 1 are UI-only until the backend is enabled in Phase 2.

## Technical notes

- Stack stays on the project's TanStack Start + React + Tailwind v4 + shadcn/ui setup (Next.js is not available here; capabilities are equivalent).
- Uploaded photos are published as CDN assets and used in the hero and gallery.
- Colors/fonts added as semantic tokens in `src/styles.css`; no hardcoded colors.
- Translations kept in a typed dictionary with a language context, `dir` switching on `<html>`, so Phase 2's CMS can replace it with database-backed content.
- Phase 2 will enable Lovable Cloud (Postgres, auth, storage, role-based access) for all management modules.
