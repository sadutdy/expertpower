import { IMG, R, type PageSpec, type Rel } from "@/lib/data/page-builder";
import type { SeoSection } from "@/lib/data/seo-pages";

interface InstrumentInput {
  slug: string;
  keyword: string;
  more?: string[];
  img?: string;
  related: Rel[];
  en: { name: string; lower: string; offer: string[]; steps: string[] };
  ar: { name: string; offer: string[]; steps: string[] };
  extraEn?: SeoSection[];
  extraAr?: SeoSection[];
}

function instrument(i: InstrumentInput): PageSpec {
  const onsiteFaqEn: [string, string] = [
    `Can you calibrate ${i.en.lower} on site?`,
    "Yes, an on-site option is available. Contact us with the number and type of instruments.",
  ];
  const onsiteFaqAr: [string, string] = [
    `هل يمكن معايرة ${i.ar.name} في الموقع؟`,
    "نعم، يتوفر خيار الخدمة في الموقع. تواصل معنا مع عدد الأجهزة وأنواعها.",
  ];
  return {
    slug: i.slug,
    kind: "service",
    keyword: i.keyword,
    moreKeywords: i.more,
    img: i.img ?? IMG.cal,
    serviceType: `${i.en.name} calibration`,
    related: i.related,
    en: {
      title: `${i.en.name} Calibration in Saudi Arabia | Expert Power`,
      description: `${i.en.name} calibration in Saudi Arabia, in our laboratory or on your site. Contact Expert Power in Riyadh or Dammam for a quote.`,
      h1: `${i.en.name} Calibration in Saudi Arabia`,
      intro: `Expert Power calibrates ${i.en.lower} in Saudi Arabia, in our laboratory or on your site. Contact us with your instrument details and we will advise the best option.`,
      offerHeading: `${i.en.name} we calibrate`,
      offer: i.en.offer,
      extra: i.extraEn,
      stepsHeading: "How the calibration works",
      steps: i.en.steps,
      motionTitle: `${i.en.name} calibration`,
      faqs: [onsiteFaqEn],
    },
    ar: {
      title: `معايرة ${i.ar.name} في السعودية | إكسبرت باور`,
      description: `معايرة ${i.ar.name} في السعودية، في معملنا أو في موقعك. تواصل مع إكسبرت باور في الرياض أو الدمام للحصول على عرض سعر.`,
      h1: `معايرة ${i.ar.name} في المملكة العربية السعودية`,
      intro: `تعاير إكسبرت باور ${i.ar.name} في السعودية، في معملنا أو في موقعك. تواصل معنا مع تفاصيل جهازك وسنقترح الخيار الأنسب.`,
      offerHeading: `${i.ar.name} التي نعايرها`,
      offer: i.ar.offer,
      extra: i.extraAr,
      stepsHeading: "كيف تتم المعايرة",
      steps: i.ar.steps,
      motionTitle: `معايرة ${i.ar.name}`,
      faqs: [onsiteFaqAr],
    },
  };
}

export const instrumentSpecs: PageSpec[] = [
  instrument({
    slug: "services/calibration/electrical/multimeter-calibration",
    keyword: "multimeter calibration Saudi Arabia",
    more: ["digital multimeter calibration Riyadh"],
    related: [R.elec, R.cal, R.onsite, R.repairLive],
    en: {
      name: "Multimeter",
      lower: "multimeters",
      offer: ["Digital multimeters", "Handheld multimeters", "Bench multimeters", "Analog multimeters"],
      steps: [
        "Receive and identify the multimeter",
        "Check its readings against reference equipment",
        "Adjust where needed",
        "Issue the calibration certificate",
      ],
    },
    ar: {
      name: "أجهزة الملتيميتر",
      offer: ["الملتيميتر الرقمي", "الملتيميتر المحمول", "الملتيميتر المكتبي", "الملتيميتر التناظري"],
      steps: [
        "استلام الجهاز وتحديد هويته",
        "فحص قراءاته مقابل معدات مرجعية",
        "الضبط عند الحاجة",
        "إصدار شهادة المعايرة",
      ],
    },
    extraEn: [
      {
        heading: "Recommended interval",
        body: ["The recommended calibration interval depends on how the multimeter is used. We advise after discussing your use."],
      },
    ],
    extraAr: [
      {
        heading: "الفترة الموصى بها",
        body: ["تعتمد فترة المعايرة الموصى بها على طريقة استخدام الملتيميتر. نقدم النصيحة بعد مناقشة استخدامك."],
      },
    ],
  }),
  instrument({
    slug: "services/calibration/electrical/megger-insulation-tester-calibration",
    keyword: "megger insulation tester calibration",
    more: ["insulation resistance tester calibration Saudi Arabia"],
    related: [R.elec, R.cal, R.onsite, R.repairLive],
    en: {
      name: "Insulation Tester",
      lower: "Megger and other insulation resistance testers",
      offer: ["Megger insulation testers", "Digital insulation resistance testers", "Analog insulation testers"],
      steps: [
        "Receive and identify the tester",
        "Check its readings against reference resistors",
        "Adjust where needed",
        "Issue the calibration certificate",
      ],
    },
    ar: {
      name: "أجهزة اختبار العزل (الميجر)",
      offer: ["أجهزة الميجر لاختبار العزل", "أجهزة قياس مقاومة العزل الرقمية", "أجهزة اختبار العزل التناظرية"],
      steps: [
        "استلام الجهاز وتحديد هويته",
        "فحص قراءاته مقابل مقاومات مرجعية",
        "الضبط عند الحاجة",
        "إصدار شهادة المعايرة",
      ],
    },
  }),
  instrument({
    slug: "services/calibration/electrical/clamp-meter-calibration",
    keyword: "clamp meter calibration Saudi Arabia",
    related: [R.elec, R.cal, R.onsite, R.repairLive],
    en: {
      name: "Clamp Meter",
      lower: "clamp meters",
      offer: ["AC clamp meters", "AC/DC clamp meters", "True RMS clamp meters"],
      steps: [
        "Receive and identify the clamp meter",
        "Check its current and voltage readings",
        "Adjust where needed",
        "Issue the calibration certificate",
      ],
    },
    ar: {
      name: "أجهزة قياس التيار (كلامب ميتر)",
      offer: ["كلامب ميتر للتيار المتردد", "كلامب ميتر للتيار المتردد والمستمر", "كلامب ميتر True RMS"],
      steps: [
        "استلام الجهاز وتحديد هويته",
        "فحص قراءات التيار والجهد",
        "الضبط عند الحاجة",
        "إصدار شهادة المعايرة",
      ],
    },
  }),
  instrument({
    slug: "services/calibration/pressure/pressure-gauge-calibration",
    keyword: "pressure gauge calibration Riyadh",
    more: ["pressure gauge calibration Saudi Arabia", "pressure gauge calibration services KSA"],
    related: [R.press, R.cal, R.onsite, R.contact],
    en: {
      name: "Pressure Gauge",
      lower: "pressure gauges",
      offer: ["Analog pressure gauges", "Digital pressure gauges", "Test gauges"],
      steps: [
        "Receive and identify the gauge",
        "Compare its readings with a reference pressure",
        "Adjust where possible",
        "Issue the calibration certificate",
      ],
    },
    ar: {
      name: "مقاييس الضغط",
      offer: ["مقاييس الضغط التناظرية", "مقاييس الضغط الرقمية", "مقاييس الاختبار"],
      steps: [
        "استلام المقياس وتحديد هويته",
        "مقارنة قراءاته بضغط مرجعي",
        "الضبط حيثما أمكن",
        "إصدار شهادة المعايرة",
      ],
    },
  }),
  instrument({
    slug: "services/calibration/pressure/pressure-transmitter-calibration",
    keyword: "pressure transmitter calibration Saudi Arabia",
    related: [R.press, R.cal, R.onsite, R.contact],
    en: {
      name: "Pressure Transmitter",
      lower: "pressure transmitters",
      offer: ["Pressure transmitters", "Differential pressure transmitters", "Pressure transducers"],
      steps: [
        "Identify the transmitter and its range",
        "Apply reference pressures",
        "Check the output signal and adjust where needed",
        "Issue the calibration certificate",
      ],
    },
    ar: {
      name: "مرسلات الضغط",
      offer: ["مرسلات الضغط", "مرسلات الضغط التفاضلي", "محولات الضغط"],
      steps: [
        "تحديد المرسل ومداه",
        "تطبيق ضغوط مرجعية",
        "فحص إشارة الخرج والضبط عند الحاجة",
        "إصدار شهادة المعايرة",
      ],
    },
  }),
  instrument({
    slug: "services/calibration/temperature/thermocouple-rtd-calibration",
    keyword: "thermocouple and RTD calibration",
    more: ["PT100 calibration Saudi Arabia"],
    related: [R.temp, R.cal, R.onsite, R.contact],
    en: {
      name: "Thermocouple and RTD",
      lower: "thermocouples and RTD sensors",
      offer: ["Thermocouples", "RTD and PT100 sensors", "Temperature transmitters"],
      steps: [
        "Identify the sensor",
        "Compare it with a reference thermometer at set temperatures",
        "Record the readings",
        "Issue the calibration certificate",
      ],
    },
    ar: {
      name: "المزدوجات الحرارية وحساسات RTD",
      offer: ["المزدوجات الحرارية", "حساسات RTD وPT100", "مرسلات الحرارة"],
      steps: [
        "تحديد الحساس",
        "مقارنته بمقياس حرارة مرجعي عند درجات محددة",
        "تسجيل القراءات",
        "إصدار شهادة المعايرة",
      ],
    },
  }),
  instrument({
    slug: "services/calibration/temperature/thermal-imager-calibration",
    keyword: "thermal imager calibration",
    more: ["thermal camera calibration Saudi Arabia"],
    related: [R.temp, R.cal, R.contact],
    en: {
      name: "Thermal Imager",
      lower: "thermal imagers",
      offer: ["Thermal imaging cameras", "Infrared thermometers"],
      steps: [
        "Receive and identify the imager",
        "Check its readings against a reference source",
        "Record the readings",
        "Issue the calibration certificate",
      ],
    },
    ar: {
      name: "الكاميرات الحرارية",
      offer: ["كاميرات التصوير الحراري", "موازين الحرارة بالأشعة تحت الحمراء"],
      steps: [
        "استلام الجهاز وتحديد هويته",
        "فحص قراءاته مقابل مصدر مرجعي",
        "تسجيل القراءات",
        "إصدار شهادة المعايرة",
      ],
    },
  }),
  instrument({
    slug: "services/calibration/dimensional/vernier-caliper-calibration",
    keyword: "vernier caliper calibration Saudi Arabia",
    more: ["digital caliper calibration"],
    img: IMG.lab,
    related: [R.dim, R.cal, R.onsite, R.contact],
    en: {
      name: "Vernier Caliper",
      lower: "vernier calipers",
      offer: ["Vernier calipers", "Dial calipers", "Digital calipers"],
      steps: [
        "Receive and inspect the caliper",
        "Measure reference standards",
        "Record the readings",
        "Issue the calibration certificate",
      ],
    },
    ar: {
      name: "الأقدام ذات الورنية (الكاليبر)",
      offer: ["الأقدام ذات الورنية", "الأقدام ذات المؤشر", "الأقدام الرقمية"],
      steps: [
        "استلام الكاليبر وفحصه",
        "قياس معايير مرجعية",
        "تسجيل القراءات",
        "إصدار شهادة المعايرة",
      ],
    },
  }),
  instrument({
    slug: "services/calibration/dimensional/micrometer-calibration",
    keyword: "micrometer calibration",
    more: ["micrometer calibration Saudi Arabia"],
    img: IMG.lab,
    related: [R.dim, R.cal, R.onsite, R.contact],
    en: {
      name: "Micrometer",
      lower: "micrometers",
      offer: ["Outside micrometers", "Inside micrometers", "Depth micrometers"],
      steps: [
        "Receive and inspect the micrometer",
        "Measure reference standards",
        "Record the readings",
        "Issue the calibration certificate",
      ],
    },
    ar: {
      name: "الميكرومترات",
      offer: ["الميكرومترات الخارجية", "الميكرومترات الداخلية", "ميكرومترات العمق"],
      steps: [
        "استلام الميكرومتر وفحصه",
        "قياس معايير مرجعية",
        "تسجيل القراءات",
        "إصدار شهادة المعايرة",
      ],
    },
  }),
  instrument({
    slug: "services/calibration/mechanical/gas-detector-calibration",
    keyword: "gas detector calibration Saudi Arabia",
    more: ["portable gas detector calibration", "multi-gas detector calibration"],
    related: [
      R.mech,
      R.cal,
      ["Gas detector and flow meter calibration", "/services/calibration/flow-gas-vibration/", "معايرة كشف الغاز وقياس التدفق"],
      R.onsite,
    ],
    en: {
      name: "Gas Detector",
      lower: "gas detectors",
      offer: ["Portable gas detectors", "Multi-gas detectors"],
      steps: [
        "Receive and identify the detector",
        "Check the response with test gas",
        "Adjust where needed",
        "Issue the calibration certificate",
      ],
    },
    ar: {
      name: "أجهزة كشف الغاز",
      offer: ["أجهزة كشف الغاز المحمولة", "أجهزة كشف الغازات المتعددة"],
      steps: [
        "استلام الجهاز وتحديد هويته",
        "فحص الاستجابة بغاز الاختبار",
        "الضبط عند الحاجة",
        "إصدار شهادة المعايرة",
      ],
    },
  }),
];

const cityLines = {
  riyadh: {
    en: "Expert Power Trading Est., Sitteen Street, Al Malaz, P.O. Box 32933, Riyadh 11438, Kingdom of Saudi Arabia",
    ar: "مؤسسة إكسبرت باور التجارية، شارع الستين، الملز، ص.ب 32933، الرياض 11438، المملكة العربية السعودية",
  },
  dammam: {
    en: "Daharan – Jubail Expressway, Al Badia District, Al-Qatif 32656, Dammam, Kingdom of Saudi Arabia",
    ar: "طريق الظهران – الجبيل السريع، حي البادية، القطيف 32656، الدمام، المملكة العربية السعودية",
  },
};

export const citySpecs: PageSpec[] = [
  {
    slug: "calibration-riyadh",
    kind: "service",
    keyword: "calibration lab Riyadh",
    moreKeywords: ["calibration services Riyadh", "calibration company Riyadh"],
    img: IMG.lab,
    serviceType: "Calibration services in Riyadh",
    mapQuery: "Expert Power Trading Est Sitteen Street Al Malaz Riyadh",
    related: [R.cal, R.onsite, R.rental, R.contact],
    en: {
      title: "Calibration Lab in Riyadh | Expert Power",
      description:
        "Calibration services in Riyadh from Expert Power: laboratory calibration, repair, rental and testing, with an on-site option. Visit our Al Malaz branch.",
      h1: "Calibration Services in Riyadh",
      intro:
        "Expert Power serves companies in Riyadh from our headquarters in Al Malaz. Bring your instruments to our laboratory, or ask about our on-site option.",
      offerHeading: "Services available in Riyadh",
      offer: [
        "Calibration of electrical, pressure, temperature, mechanical and dimensional instruments",
        "Instrument repair and maintenance",
        "Test equipment rental",
        "Testing and inspection",
        "On-site option available",
      ],
      extra: [{ heading: "Our Riyadh branch", body: [cityLines.riyadh.en, "Phone: +966 11 421 0481"] }],
    },
    ar: {
      title: "معمل معايرة في الرياض | إكسبرت باور",
      description:
        "خدمات المعايرة في الرياض من إكسبرت باور: معايرة في المعمل وإصلاح وتأجير واختبار، مع خيار الخدمة في الموقع. زر فرعنا في الملز.",
      h1: "خدمات المعايرة في الرياض",
      intro:
        "تخدم إكسبرت باور الشركات في الرياض من مقرنا الرئيسي في الملز. أحضر أجهزتك إلى معملنا، أو اسأل عن خيار الخدمة في الموقع.",
      offerHeading: "الخدمات المتوفرة في الرياض",
      offer: [
        "معايرة الأجهزة الكهربائية والضغط والحرارة والميكانيكية والأبعاد",
        "إصلاح الأجهزة وصيانتها",
        "تأجير معدات الاختبار",
        "الاختبار والفحص",
        "خيار الخدمة في الموقع متوفر",
      ],
      extra: [{ heading: "فرعنا في الرياض", body: [cityLines.riyadh.ar, "الهاتف: ‎+966 11 421 0481"] }],
    },
  },
  {
    slug: "calibration-dammam",
    kind: "service",
    keyword: "calibration services Dammam",
    moreKeywords: ["calibration lab Dammam", "calibration company Dammam"],
    img: IMG.lab,
    serviceType: "Calibration services in Dammam",
    mapQuery: "Expert Power Daharan Jubail Expressway Al Badia Dammam",
    related: [R.cal, R.onsite, R.rental, R.contact],
    en: {
      title: "Calibration Services in Dammam | Expert Power",
      description:
        "Calibration services in Dammam from Expert Power: calibration, repair, rental and testing, with an on-site option. Visit our Dammam branch.",
      h1: "Calibration Services in Dammam",
      intro:
        "Expert Power serves companies in Dammam and the Eastern Province from our Dammam branch. Bring your instruments to us, or ask about our on-site option.",
      offerHeading: "Services available in Dammam",
      offer: [
        "Calibration of electrical, pressure, temperature, mechanical and dimensional instruments",
        "Instrument repair and maintenance",
        "Test equipment rental",
        "Testing and inspection",
        "On-site option available",
      ],
      extra: [{ heading: "Our Dammam branch", body: [cityLines.dammam.en, "Phone: +966 11 421 0481"] }],
    },
    ar: {
      title: "خدمات المعايرة في الدمام | إكسبرت باور",
      description:
        "خدمات المعايرة في الدمام من إكسبرت باور: معايرة وإصلاح وتأجير واختبار، مع خيار الخدمة في الموقع. زر فرعنا في الدمام.",
      h1: "خدمات المعايرة في الدمام",
      intro:
        "تخدم إكسبرت باور الشركات في الدمام والمنطقة الشرقية من فرعنا في الدمام. أحضر أجهزتك إلينا، أو اسأل عن خيار الخدمة في الموقع.",
      offerHeading: "الخدمات المتوفرة في الدمام",
      offer: [
        "معايرة الأجهزة الكهربائية والضغط والحرارة والميكانيكية والأبعاد",
        "إصلاح الأجهزة وصيانتها",
        "تأجير معدات الاختبار",
        "الاختبار والفحص",
        "خيار الخدمة في الموقع متوفر",
      ],
      extra: [{ heading: "فرعنا في الدمام", body: [cityLines.dammam.ar, "الهاتف: ‎+966 11 421 0481"] }],
    },
  },
];
