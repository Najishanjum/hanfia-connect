import { m, type Multi } from "@/lib/i18n";
import campus from "@/assets/madrasa-campus.jpeg.asset.json";
import minarets from "@/assets/madrasa-minarets.jpg.asset.json";

export const IMAGES = {
  campus: campus.url,
  minarets: minarets.url,
};

export const SITE = {
  name: m(
    "Al-Jamiatul Hanfia Mazharul Uloom",
    "الجامعۃ الحنفیۃ مظہر العلوم",
    "الجامعة الحنفية مظهر العلوم",
    "अल-जामिअतुल हनफिया मज़हरुल उलूम",
  ),
  short: m("AHMU", "مظہر العلوم", "مظهر العلوم", "AHMU"),
  brandTop: m("AL-JAMIATUL HANFIA", "الجامعۃ الحنفیۃ", "الجامعة الحنفية", "अल-जामिअतुल हनफिया"),
  brandBottom: m("MAZHARUL ULOOM", "مظہر العلوم", "مظهر العلوم", "मज़हरुल उलूम"),
  location: m(
    "Gualb Pur, Siswa Kataya, Mahottari, Nepal",
    "گوالب پور، سسوا کٹیا، مہوتری، نیپال",
    "غوالب بور، سيسوا كاتايا، ماهوتاري، نيبال",
    "गुआल्ब पुर, सिस्वा कटैया, महोत्तरी, नेपाल",
  ),
  tagline: m(
    "The light of knowledge, the training of character",
    "علم کی روشنی، اخلاق کی تربیت",
    "نور العلم وتربية الأخلاق",
    "ज्ञानको प्रकाश, चरित्रको तालिम",
  ),
  motto: m(
    "Knowledge • Character • Training • Service",
    "علم • اخلاق • تربیت • خدمت",
    "علم • أخلاق • تربية • خدمة",
    "ज्ञान • चरित्र • तालिम • सेवा",
  ),
  phone: "+977 98-0000-0000",
  email: "info@aljamiatulhanfia.edu.np",
};

export const NAV: { to: string; label: Multi }[] = [
  { to: "/", label: m("Home", "ہوم", "الرئيسية", "गृहपृष्ठ") },
  { to: "/about", label: m("About & History", "تعارف و تاریخ", "عن الجامعة", "परिचय") },
  { to: "/programs", label: m("Programs", "شعبہ جات", "البرامج", "कार्यक्रम") },
  { to: "/administration", label: m("Administration", "انتظامیہ", "الإدارة", "प्रशासन") },
  { to: "/gallery", label: m("Gallery", "گیلری", "المعرض", "ग्यालरी") },
  { to: "/events", label: m("Events & Notices", "اعلانات و پروگرام", "الأخبار والفعاليات", "सूचना तथा कार्यक्रम") },
  { to: "/admission", label: m("Admission", "داخلہ", "القبول", "भर्ना") },
  { to: "/contact", label: m("Contact", "رابطہ", "اتصل بنا", "सम्पर्क") },
];

export const UI = {
  explore: m("Explore Madrasa", "مدرسہ دیکھیں", "استكشف الجامعة", "मदरसा हेर्नुहोस्"),
  studentPortal: m("Student Portal", "طلبہ پورٹل", "بوابة الطلاب", "विद्यार्थी पोर्टल"),
  teacherPortal: m("Teacher Portal", "اساتذہ پورٹل", "بوابة المعلمين", "शिक्षक पोर्टल"),
  contact: m("Contact Us", "رابطہ کریں", "اتصل بنا", "सम्पर्क गर्नुहोस्"),
  admission: m("Admission", "داخلہ", "القبول", "भर्ना"),
  readMore: m("Read more", "مزید پڑھیں", "اقرأ المزيد", "थप पढ्नुहोस्"),
  viewAll: m("View all", "سب دیکھیں", "عرض الكل", "सबै हेर्नुहोस्"),
  submit: m("Submit", "جمع کریں", "إرسال", "पेश गर्नुहोस्"),
  comingSoon: m(
    "This portal is coming soon, inshaAllah.",
    "یہ پورٹل جلد دستیاب ہوگا، ان شاء اللہ۔",
    "هذه البوابة ستتوفر قريباً إن شاء الله.",
    "यो पोर्टल छिट्टै उपलब्ध हुनेछ, इन्शाअल्लाह।",
  ),
  formNotice: m(
    "This form is a preview. Online submission will be enabled with the portal system.",
    "یہ فارم نمونہ ہے۔ آن لائن جمع کرانے کی سہولت پورٹل سسٹم کے ساتھ فعال ہوگی۔",
    "هذا النموذج للعرض فقط. سيتم تفعيل الإرسال مع نظام البوابة.",
    "यो फारम पूर्वावलोकन हो। अनलाइन पेश गर्ने सुविधा पोर्टल प्रणालीसँगै सुरु हुनेछ।",
  ),
};

export const ABOUT = {
  heading: m("About the Madrasa", "مدرسہ کا تعارف", "عن الجامعة", "मदरसाको परिचय"),
  body: m(
    "Al-Jamiatul Hanfia Mazharul Uloom is a religious and educational institution serving the Muslim community of Mahottari, Nepal. For more than two decades it has taught the Noble Qur'an, Hadith, Fiqh and the Arabic and Urdu sciences alongside general education, raising students of sound belief and upright character.",
    "الجامعۃ الحنفیۃ مظہر العلوم مہوتری، نیپال کی مسلم آبادی کی خدمت کرنے والا ایک دینی و تعلیمی ادارہ ہے۔ دو دہائیوں سے زائد عرصے سے یہاں قرآن کریم، حدیث، فقہ، عربی و اردو علوم کے ساتھ عصری تعلیم بھی دی جا رہی ہے۔",
    "الجامعة الحنفية مظهر العلوم مؤسسة دينية وتعليمية تخدم المجتمع المسلم في ماهوتاري بنيبال، تُدرِّس القرآن الكريم والحديث والفقه وعلوم العربية والأردية مع التعليم العام.",
    "अल-जामिअतुल हनफिया मज़हरुल उलूम महोत्तरी, नेपालको मुस्लिम समुदायको सेवा गर्ने धार्मिक तथा शैक्षिक संस्था हो। दुई दशकभन्दा बढी समयदेखि यहाँ कुरआन, हदीस, फिक्ह, अरबी र उर्दूसँगै सामान्य शिक्षा पनि दिइन्छ।",
  ),
  missionHeading: m("Our Mission", "ہمارا مشن", "رسالتنا", "हाम्रो लक्ष्य"),
  mission: [
    {
      title: m("Islamic Education", "دینی تعلیم", "التعليم الإسلامي", "इस्लामिक शिक्षा"),
      text: m(
        "Authentic teaching of Qur'an, Hadith and Fiqh under qualified scholars.",
        "مستند اساتذہ کی نگرانی میں قرآن، حدیث اور فقہ کی تعلیم۔",
        "تعليم أصيل للقرآن والحديث والفقه على أيدي علماء مؤهلين.",
        "योग्य विद्वानहरूबाट कुरआन, हदीस र फिक्हको प्रामाणिक शिक्षा।",
      ),
    },
    {
      title: m("Modern Education", "عصری تعلیم", "التعليم العصري", "आधुनिक शिक्षा"),
      text: m(
        "Language, mathematics, science and computer skills for a capable generation.",
        "زبان، ریاضی، سائنس اور کمپیوٹر کی تعلیم تاکہ نسل باصلاحیت بنے۔",
        "اللغات والرياضيات والعلوم والحاسوب لجيل قادر.",
        "भाषा, गणित, विज्ञान र कम्प्युटर सीप।",
      ),
    },
    {
      title: m("Character Building", "تربیت و اخلاق", "بناء الأخلاق", "चरित्र निर्माण"),
      text: m(
        "Adab, discipline and service so that knowledge becomes action.",
        "ادب، نظم اور خدمتِ خلق تاکہ علم عمل بنے۔",
        "الأدب والانضباط والخدمة ليصير العلم عملاً.",
        "अनुशासन र सेवाभाव ताकि ज्ञान व्यवहारमा उत्रियोस्।",
      ),
    },
  ],
};

export const PROGRAMS: { title: Multi; text: Multi }[] = [
  {
    title: m("Hifz-ul-Qur'an", "حفظ القرآن", "حفظ القرآن", "हिफ्ज़ुल कुरआन"),
    text: m(
      "Complete memorisation of the Noble Qur'an with daily sabaq, sabaqi and manzil.",
      "روزانہ سبق، سبقی اور منزل کے ساتھ مکمل حفظِ قرآن۔",
      "حفظ القرآن الكريم كاملاً مع السبق والسبقي والمنزل يومياً.",
      "दैनिक सबक, सबकी र मन्ज़िलसहित पूर्ण कुरआन कण्ठस्थ।",
    ),
  },
  {
    title: m("Nazra & Tajweed", "ناظرہ و تجوید", "الناظرة والتجويد", "नाज़रा र तजवीद"),
    text: m(
      "Correct recitation with the rules of tajweed and makharij.",
      "مخارج و تجوید کے قواعد کے ساتھ صحیح تلاوت۔",
      "التلاوة الصحيحة بقواعد التجويد والمخارج.",
      "तजवीदका नियमसहित शुद्ध पाठ।",
    ),
  },
  {
    title: m("Dars-e-Nizami", "درسِ نظامی", "درس نظامي", "दर्स-ए-निज़ामी"),
    text: m(
      "The classical eight-year curriculum of the Islamic sciences.",
      "علومِ اسلامیہ کا کلاسیکی آٹھ سالہ نصاب۔",
      "المنهج الكلاسيكي للعلوم الإسلامية.",
      "इस्लामिक विज्ञानको परम्परागत पाठ्यक्रम।",
    ),
  },
  {
    title: m("Hadith", "حدیث", "الحديث", "हदीस"),
    text: m(
      "Study of the Sihah Sittah with sanad and commentary.",
      "صحاح ستہ کا مطالعہ سند و شرح کے ساتھ۔",
      "دراسة الصحاح الستة بالسند والشرح.",
      "सिहाह सित्ताको अध्ययन।",
    ),
  },
  {
    title: m("Fiqh", "فقہ", "الفقه", "फिक्ह"),
    text: m(
      "Hanafi jurisprudence for worship, transactions and daily life.",
      "عبادات، معاملات اور روزمرہ زندگی کے لیے فقہ حنفی۔",
      "الفقه الحنفي في العبادات والمعاملات.",
      "इबादत र दैनिक जीवनका लागि हनफी फिक्ह।",
    ),
  },
  {
    title: m("Arabic", "عربی", "اللغة العربية", "अरबी"),
    text: m(
      "Nahw, sarf and conversation to read the sources directly.",
      "نحو، صرف اور محاورہ تاکہ اصل مآخذ پڑھے جا سکیں۔",
      "النحو والصرف والمحادثة لقراءة المصادر مباشرة.",
      "नह्व, सर्फ र संवाद।",
    ),
  },
  {
    title: m("Urdu", "اردو", "الأردية", "उर्दू"),
    text: m(
      "Reading, writing and literature in Urdu with Nastaliq script.",
      "نستعلیق خط کے ساتھ اردو پڑھنا، لکھنا اور ادب۔",
      "القراءة والكتابة والأدب في اللغة الأردية.",
      "उर्दू पढाइ, लेखाइ र साहित्य।",
    ),
  },
  {
    title: m("Islamic Studies", "اسلامیات", "الدراسات الإسلامية", "इस्लामिक अध्ययन"),
    text: m(
      "Aqeedah, seerah and Islamic history for every jammat.",
      "ہر جماعت کے لیے عقیدہ، سیرت اور اسلامی تاریخ۔",
      "العقيدة والسيرة والتاريخ الإسلامي لكل جماعة.",
      "अकीदा, सीरत र इस्लामिक इतिहास।",
    ),
  },
  {
    title: m("General Education", "عصری تعلیم", "التعليم العام", "सामान्य शिक्षा"),
    text: m(
      "Nepali, English, mathematics, science and computer literacy.",
      "نیپالی، انگریزی، ریاضی، سائنس اور کمپیوٹر۔",
      "النيبالية والإنجليزية والرياضيات والعلوم والحاسوب.",
      "नेपाली, अंग्रेजी, गणित, विज्ञान र कम्प्युटर।",
    ),
  },
];

export const STATS: { value: string; label: Multi }[] = [
  { value: "500+", label: m("Students", "طلبہ", "طالب", "विद्यार्थी") },
  { value: "30+", label: m("Teachers", "اساتذہ", "معلم", "शिक्षक") },
  { value: "10+", label: m("Programs", "شعبے", "برنامج", "कार्यक्रम") },
  { value: "25+", label: m("Years of Service", "سالہ خدمت", "سنة من الخدمة", "वर्षको सेवा") },
];

export const TIMELINE: { year: string; title: Multi }[] = [
  { year: "1998", title: m("Madrasa established", "مدرسہ کا قیام", "تأسيس الجامعة", "मदरसाको स्थापना") },
  { year: "2005", title: m("First Hifz batch graduated", "پہلی حفظ کی جماعت فارغ", "تخرج أول دفعة حفظ", "पहिलो हिफ्ज़ ब्याच") },
  { year: "2012", title: m("New building and masjid", "نئی عمارت و مسجد", "مبنى ومسجد جديد", "नयाँ भवन र मस्जिद") },
  { year: "2020", title: m("Hostel and library expansion", "ہاسٹل و لائبریری کی توسیع", "توسعة السكن والمكتبة", "छात्रावास र पुस्तकालय विस्तार") },
  { year: "2026", title: m("Digital madrasa portal", "ڈیجیٹل مدرسہ پورٹل", "بوابة الجامعة الرقمية", "डिजिटल मदरसा पोर्टल") },
];

export const NOTICES: { date: string; title: Multi; text: Multi }[] = [
  {
    date: "2026-08-01",
    title: m("Admissions open for session 2026", "سیشن ۲۰۲۶ کے داخلے جاری", "القبول مفتوح لعام ٢٠٢٦", "सत्र २०२६ को भर्ना खुला"),
    text: m(
      "Applications for Hifz, Nazra and Dars-e-Nizami are now being accepted at the madrasa office.",
      "حفظ، ناظرہ اور درسِ نظامی کے داخلے دفتر میں لیے جا رہے ہیں۔",
      "تُقبل طلبات حفظ وناظرة ودرس نظامي في مكتب الجامعة.",
      "हिफ्ज़, नाज़रा र दर्स-ए-निज़ामीका लागि निवेदन खुला छ।",
    ),
  },
  {
    date: "2026-07-20",
    title: m("Annual examination schedule", "سالانہ امتحان کا شیڈول", "جدول الامتحان السنوي", "वार्षिक परीक्षा तालिका"),
    text: m(
      "Annual examinations for all jammats will begin from the first week of Shawwal.",
      "تمام جماعتوں کے سالانہ امتحانات شوال کے پہلے ہفتے سے شروع ہوں گے۔",
      "تبدأ الامتحانات السنوية لجميع الجماعات في الأسبوع الأول من شوال.",
      "सबै जमातको वार्षिक परीक्षा शव्वालको पहिलो हप्तादेखि।",
    ),
  },
  {
    date: "2026-07-05",
    title: m("Qur'an competition results", "مسابقۂ قرآن کے نتائج", "نتائج مسابقة القرآن", "कुरआन प्रतियोगिताको नतिजा"),
    text: m(
      "Congratulations to the winners of the inter-jammat Qur'an recitation competition.",
      "بین الجماعات مسابقۂ قرأت کے کامیاب طلبہ کو مبارکباد۔",
      "تهانينا للفائزين في مسابقة التلاوة بين الجماعات.",
      "अन्तर-जमात कुरआन प्रतियोगिताका विजेतालाई बधाई।",
    ),
  },
];

export const EVENTS: { date: string; title: Multi }[] = [
  { date: "2026-09-12", title: m("Seerat-un-Nabi ﷺ Program", "جلسۂ سیرت النبی ﷺ", "برنامج السيرة النبوية ﷺ", "सीरत-उन-नबी ﷺ कार्यक्रम") },
  { date: "2026-10-04", title: m("Inter-Jammat Qur'an Competition", "بین الجماعات مسابقۂ قرآن", "مسابقة القرآن بين الجماعات", "अन्तर-जमात कुरआन प्रतियोगिता") },
  { date: "2026-11-15", title: m("Annual Function & Graduation", "سالانہ جلسہ و دستار بندی", "الحفل السنوي والتخرج", "वार्षिकोत्सव तथा दीक्षान्त") },
  { date: "2026-12-06", title: m("Parents Meeting", "سرپرست میٹنگ", "لقاء أولياء الأمور", "अभिभावक भेला") },
];

export const STAFF: { name: Multi; role: Multi; bio: Multi }[] = [
  {
    name: m("Maulana Abdul Rahman", "مولانا عبد الرحمٰن", "مولانا عبد الرحمن", "मौलाना अब्दुल रहमान"),
    role: m("Muhtamim (President)", "مہتمم", "المهتمم", "मुहतमिम"),
    bio: m(
      "Founder and guide of the madrasa, serving the institution since its establishment.",
      "مدرسہ کے بانی و سرپرست، قیام کے بعد سے خدمت انجام دے رہے ہیں۔",
      "مؤسس الجامعة ومرشدها منذ تأسيسها.",
      "मदरसाका संस्थापक तथा मार्गदर्शक।",
    ),
  },
  {
    name: m("Mufti Muhammad Ilyas", "مفتی محمد الیاس", "المفتي محمد إلياس", "मुफ्ती मुहम्मद इल्यास"),
    role: m("Principal", "ناظم اعلیٰ", "المدير", "प्रधानाध्यापक"),
    bio: m(
      "Teaches Fiqh and Hadith and oversees the academic curriculum.",
      "فقہ و حدیث کے استاذ اور نصاب کے نگران۔",
      "يدرّس الفقه والحديث ويشرف على المنهج.",
      "फिक्ह र हदीस पढाउनुहुन्छ।",
    ),
  },
  {
    name: m("Qari Abdul Hafeez", "قاری عبد الحفیظ", "القارئ عبد الحفيظ", "कारी अब्दुल हफीज़"),
    role: m("Head of Hifz Department", "ناظم شعبۂ حفظ", "رئيس قسم الحفظ", "हिफ्ज़ विभाग प्रमुख"),
    bio: m(
      "Supervises daily sabaq, sabaqi and manzil for all Hifz students.",
      "تمام حفظ کے طلبہ کے سبق، سبقی اور منزل کے نگران۔",
      "يشرف على السبق والسبقي والمنزل لطلاب الحفظ.",
      "हिफ्ज़ विद्यार्थीहरूको दैनिक अभ्यास हेर्नुहुन्छ।",
    ),
  },
  {
    name: m("Maulana Shahid Anwar", "مولانا شاہد انور", "مولانا شاهد أنور", "मौलाना शाहिद अनवर"),
    role: m("Arabic & Urdu Teacher", "استاذ عربی و اردو", "معلم العربية والأردية", "अरबी र उर्दू शिक्षक"),
    bio: m(
      "Teaches nahw, sarf and Urdu literature to the senior jammats.",
      "اعلیٰ جماعتوں کو نحو، صرف اور اردو ادب پڑھاتے ہیں۔",
      "يدرّس النحو والصرف والأدب الأردي للصفوف العليا.",
      "माथिल्लो जमातलाई नह्व, सर्फ पढाउनुहुन्छ।",
    ),
  },
  {
    name: m("Master Rajesh Kumar", "ماسٹر راجیش کمار", "الأستاذ راجيش كومار", "मास्टर राजेश कुमार"),
    role: m("General Education Teacher", "استاذ عصری تعلیم", "معلم التعليم العام", "सामान्य शिक्षा शिक्षक"),
    bio: m(
      "Teaches Nepali, English and mathematics.",
      "نیپالی، انگریزی اور ریاضی پڑھاتے ہیں۔",
      "يدرّس النيبالية والإنجليزية والرياضيات.",
      "नेपाली, अंग्रेजी र गणित पढाउनुहुन्छ।",
    ),
  },
  {
    name: m("Hafiz Nurul Islam", "حافظ نور الاسلام", "الحافظ نور الإسلام", "हाफिज़ नूरुल इस्लाम"),
    role: m("Administrator & Warden", "ناظم و وارڈن", "الإداري والمشرف", "प्रशासक तथा वार्डेन"),
    bio: m(
      "Manages hostel affairs, records and daily discipline.",
      "ہاسٹل، ریکارڈ اور نظم و ضبط کے ذمہ دار۔",
      "يدير شؤون السكن والسجلات والانضباط.",
      "छात्रावास र अनुशासन व्यवस्थापन।",
    ),
  },
];

export const DONATION_TYPES: Multi[] = [
  m("General Donation", "عام عطیہ", "تبرع عام", "सामान्य दान"),
  m("Zakat", "زکوٰۃ", "الزكاة", "ज़कात"),
  m("Sadaqah", "صدقہ", "الصدقة", "सदका"),
  m("Madrasa Development", "تعمیر و ترقی", "تطوير الجامعة", "मदरसा विकास"),
  m("Student Scholarship", "طلبہ وظیفہ", "منح الطلاب", "विद्यार्थी छात्रवृत्ति"),
  m("Food Fund", "کھانے کا فنڈ", "صندوق الطعام", "खाना कोष"),
  m("Books", "کتب", "الكتب", "पुस्तक"),
  m("Construction Fund", "تعمیراتی فنڈ", "صندوق البناء", "निर्माण कोष"),
];

export const GALLERY_CATEGORIES: Multi[] = [
  m("Madrasa", "مدرسہ", "الجامعة", "मदरसा"),
  m("Masjid", "مسجد", "المسجد", "मस्जिद"),
  m("Events", "پروگرام", "الفعاليات", "कार्यक्रम"),
  m("Qur'an Competition", "مسابقۂ قرآن", "مسابقة القرآن", "कुरआन प्रतियोगिता"),
];
