import { generatedPages } from "@/lib/data/page-specs";

export const SITE_URL = "https://expertpower.com.sa";

export interface SeoFaq {
  q: string;
  a: string;
}

export interface SeoSection {
  heading: string;
  body: string[];
  bullets?: string[];
}

export interface SeoPage {
  slug: string;
  /** Primary target keyword (exact match) */
  keyword: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  keywords: string[];
  arabic?: { heading: string; body: string };
  /** Process steps shown as a Remotion motion graphic */
  steps?: string[];
  motionTitle?: string;
  /** Google Maps search query for branch pages */
  mapQuery?: string;
  sections: SeoSection[];
  faqs: SeoFaq[];
  serviceType: string;
  related: { label: string; href: string }[];
  heroImage: string;
}

const livePages: SeoPage[] = [
  {
    slug: "saac-accredited-calibration-lab-saudi-arabia",
    keyword: "SAAC Accredited Calibration Lab in Saudi",
    title: "SAAC Accredited Calibration Lab in Saudi Arabia | ISO 17025",
    description:
      "SAAC accredited calibration lab in Saudi Arabia. ISO/IEC 17025:2017 calibration services in Riyadh & Dammam. Request a quote.",
    h1: "SAAC Accredited Calibration Lab in Saudi Arabia",
    intro:
      "Expert Power operates a SAAC accredited calibration laboratory in Saudi Arabia, working to ISO/IEC 17025:2017 and recognised under QAI / ILAC MRA. We provide calibration services with traceable results that auditors and regulators accept. Contact our team to discuss your instrument.",
    keywords: [
      "SAAC accredited calibration lab in Saudi Arabia",
      "SAAC accredited calibration lab Riyadh",
      "ISO 17025 calibration lab Saudi Arabia",
      "accredited calibration laboratory Dammam",
      "traceable calibration certificate Saudi Arabia",
      "معمل معايرة معتمد من المركز السعودي للاعتماد",
    ],
    arabic: {
      heading: "معمل معايرة معتمد من المركز السعودي للاعتماد (SAAC) في السعودية",
      body: "إكسبرت باور معمل معايرة معتمد وفق المواصفة ISO/IEC 17025:2017 ومن المركز السعودي للاعتماد (SAAC)، ونقدم خدمات المعايرة في الرياض والدمام وجميع مناطق المملكة العربية السعودية. تواصل معنا لمناقشة جهازك ومتطلباتك.",
    },
    sections: [
      {
        heading: "Why choose a SAAC accredited calibration lab?",
        body: [
          "Accreditation from the Saudi Accreditation Center (SAAC) proves that a laboratory is technically competent and that its measurement results are traceable to national and international standards. A calibration certificate from an accredited lab is accepted by regulators, customers and quality auditors without further justification.",
          "Expert Power combines SAAC accreditation, ISO/IEC 17025:2017 competence, QAI / ILAC MRA recognition and a SASO private laboratory license (PLL 0073) in one calibration provider.",
        ],
        bullets: [
          "Traceable calibration certificates with stated measurement uncertainty",
          "ISO/IEC 17025:2017 quality system and technical competence",
          "ILAC MRA recognition for international acceptance of certificates",
          "Laboratory in Riyadh with a branch in Dammam",
        ],
      },
      {
        heading: "Calibration services",
        body: [
          "Our laboratory and on-site teams calibrate instruments used across oil & gas, power, manufacturing, construction and logistics. Contact us to discuss your specific instrument and requirements.",
        ],
        bullets: [
          "Electrical calibration: multimeters, clamp meters, calibrators, insulation and earth testers",
          "Pressure calibration: gauges, transmitters, pressure switches, deadweight testers",
          "Temperature calibration: thermometers, RTDs, thermocouples, furnaces and baths",
          "Mechanical calibration: torque tools, force gauges, mass and balances",
          "Dimensional calibration: micrometers, calipers, gauges, height and optical measuring tools",
        ],
      },
      {
        heading: "Laboratory and on-site calibration across Saudi Arabia",
        body: [
          "Send instruments to our laboratory in Riyadh or the Dammam branch, or book on-site calibration so your plant keeps running. Our mobile van laboratories carry reference standards to your site in the Eastern, Central and Western regions.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is Expert Power a SAAC accredited calibration lab in Saudi Arabia?",
        a: "Yes. Expert Power holds Saudi Accreditation Center (SAAC) accreditation and works to ISO/IEC 17025:2017. Certificates are available on our accreditation page.",
      },
      {
        q: "Are your calibration certificates accepted internationally?",
        a: "Our laboratory is recognised under QAI / ILAC MRA, which supports international acceptance of calibration results.",
      },
      {
        q: "Which instruments can you calibrate?",
        a: "We offer electrical, pressure, temperature, mechanical and dimensional calibration services, in our laboratory or on your site. Contact us with your instrument details.",
      },
      {
        q: "Do you offer on-site calibration in Riyadh, Dammam and Jubail?",
        a: "Yes. Our on-site teams and mobile van laboratories serve industrial sites across Saudi Arabia.",
      },
    ],
    serviceType: "Calibration service",
    related: [
      { label: "Calibration services", href: "/services/calibration/" },
      { label: "On-site calibration", href: "/services/onsite-calibration/" },
      { label: "Accreditation & certificates", href: "/accreditation/" },
      { label: "SASO accredited lab", href: "/saso-accredited-lab-saudi-arabia/" },
    ],
    heroImage: "/assets/lab.jpg",
  },
  {
    slug: "saso-accredited-lab-saudi-arabia",
    keyword: "SASO Accredited Lab in Saudi",
    title: "SASO Accredited Lab in Saudi Arabia | Testing & Calibration",
    description:
      "SASO licensed lab in Saudi Arabia (PLL 0073). ISO 17025 calibration, testing and inspection for compliance in Riyadh & Dammam.",
    h1: "SASO Accredited Lab in Saudi Arabia",
    intro:
      "Expert Power is a SASO licensed private laboratory in Saudi Arabia (PLL 0073), backed by ISO/IEC 17025:2017 and SAAC accreditation. We provide calibration, testing and inspection services that support product conformity, regulatory compliance and quality audits.",
    keywords: [
      "SASO accredited lab in Saudi Arabia",
      "SASO approved laboratory Riyadh",
      "SASO private laboratory license",
      "SASO testing lab Saudi Arabia",
      "ISO 17025 testing laboratory Saudi Arabia",
      "معمل معتمد من الهيئة السعودية للمواصفات والمقاييس",
    ],
    arabic: {
      heading: "معمل معتمد من الهيئة السعودية للمواصفات والمقاييس (SASO) في السعودية",
      body: "إكسبرت باور معمل خاص مرخص من الهيئة السعودية للمواصفات والمقاييس (ساسو) برقم PLL 0073، ومعتمد وفق ISO/IEC 17025:2017، ونقدم خدمات المعايرة والفحص والاختبار للمصانع والمشاريع والشركات في الرياض والدمام.",
    },
    sections: [
      {
        heading: "SASO licensed laboratory services",
        body: [
          "SASO sets the technical regulations and conformity requirements for products and measuring equipment in the Kingdom. Working with a SASO licensed, SAAC accredited laboratory means your test and calibration records stand up to inspection.",
        ],
        bullets: [
          "SASO Private Laboratory License PLL 0073",
          "ISO/IEC 17025:2017 laboratory accreditation",
          "SAAC accreditation and QAI / ILAC MRA recognition",
          "Calibration, testing and inspection under one provider",
        ],
      },
      {
        heading: "Testing, inspection and calibration",
        body: [
          "We support manufacturers, contractors and operators who need verified measurements and documented conformity.",
        ],
        bullets: [
          "Calibration of measuring instruments with traceable certificates",
          "Electrical safety testing and equipment verification",
          "Inspection and verification services for industrial assets",
          "Documentation for audits, tenders and customer approvals",
        ],
      },
      {
        heading: "Who needs a SASO accredited lab?",
        body: [
          "Oil & gas operators, power utilities, manufacturers, construction contractors, logistics companies and educational institutions use our laboratory to meet customer, tender and regulatory requirements in Saudi Arabia.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is Expert Power a SASO accredited lab in Saudi Arabia?",
        a: "Expert Power holds a SASO Private Laboratory License (PLL 0073) and is accredited to ISO/IEC 17025:2017 through the Saudi Accreditation Center. Certificate copies are on our accreditation page.",
      },
      {
        q: "What is the difference between SASO and SAAC?",
        a: "SASO is the Saudi Standards, Metrology and Quality Organization that issues standards and laboratory licenses. SAAC is the Saudi Accreditation Center that accredits laboratories against ISO/IEC 17025.",
      },
      {
        q: "Can you provide testing and calibration certificates for tenders?",
        a: "Yes. We issue traceable calibration and test reports suitable for audits, tenders and customer approvals.",
      },
    ],
    serviceType: "Laboratory testing and calibration service",
    related: [
      { label: "Accreditation & certificates", href: "/accreditation/" },
      { label: "Testing & analysis", href: "/services/testing/" },
      { label: "Inspection & verification", href: "/services/inspection/" },
      {
        label: "SAAC accredited calibration lab",
        href: "/saac-accredited-calibration-lab-saudi-arabia/",
      },
    ],
    heroImage: "/assets/testing.jpg",
  },
  {
    slug: "electrical-instrument-repair-service-saudi-arabia",
    keyword: "Electrical Instrument Repair and Service in Saudi",
    title: "Electrical Instrument Repair & Service in Saudi Arabia",
    description:
      "Electrical instrument repair and service in Saudi Arabia. Multimeters, calibrators and relay test sets repaired, calibrated and certified.",
    h1: "Electrical Instrument Repair and Service in Saudi Arabia",
    intro:
      "Expert Power repairs, services and recalibrates electrical test and measuring instruments in Saudi Arabia. Every repaired instrument returns to you checked against traceable standards and with a calibration certificate, so it is ready to use.",
    keywords: [
      "electrical instrument repair and service in Saudi Arabia",
      "electrical test equipment repair Riyadh",
      "multimeter repair Saudi Arabia",
      "calibrator repair Saudi Arabia",
      "insulation tester repair Dammam",
      "إصلاح وصيانة الأجهزة الكهربائية في السعودية",
    ],
    arabic: {
      heading: "إصلاح وصيانة أجهزة القياس الكهربائية في السعودية",
      body: "نقدم في إكسبرت باور خدمات إصلاح وصيانة ومعايرة أجهزة القياس والاختبار الكهربائية في الرياض والدمام وجميع مناطق المملكة، مع شهادة معايرة بعد الإصلاح وقطع غيار وعقود صيانة سنوية.",
    },
    sections: [
      {
        heading: "Instruments we repair and service",
        body: [
          "Our engineers repair and service the instruments used by electrical contractors, utilities, maintenance teams and laboratories.",
        ],
        bullets: [
          "Digital multimeters, clamp meters and power analysers",
          "Process and electrical calibrators",
          "Insulation resistance testers and earth testers",
          "Protection relay test sets and primary/secondary injection kits",
          "Oscilloscopes, signal sources and power supplies",
          "Loop testers, RCD testers and installation testers",
        ],
      },
      {
        heading: "Repair, calibration and certification in one visit",
        body: [
          "Repair alone does not prove an instrument is accurate. We test the fault, repair or replace parts, then calibrate against traceable references and issue a certificate before the instrument is released.",
        ],
        bullets: [
          "Fault diagnosis and written quotation",
          "Component-level repair and spare parts supply",
          "Post-repair calibration with certificate",
          "Annual maintenance contracts and preventive service",
          "Emergency repair and replacement rental instruments",
        ],
      },
      {
        heading: "Service across Saudi Arabia",
        body: [
          "Drop off or ship instruments to our Riyadh workshop or Dammam branch, or request an engineer visit. Rental equipment can cover your project while your instruments are being repaired.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do you repair electrical test instruments in Saudi Arabia?",
        a: "Yes. We repair, service and recalibrate electrical test and measuring instruments at our Riyadh and Dammam facilities.",
      },
      {
        q: "Will I get a calibration certificate after repair?",
        a: "Yes. Repaired instruments are calibrated against traceable standards and returned with a certificate.",
      },
      {
        q: "Can you supply a replacement while my instrument is in the workshop?",
        a: "Yes. Our rental service supplies test and calibration equipment for the repair period.",
      },
      {
        q: "Do you offer annual maintenance contracts?",
        a: "Yes. We offer preventive maintenance programs and annual maintenance contracts for electrical instruments and test equipment.",
      },
    ],
    serviceType: "Electrical instrument repair and maintenance service",
    related: [
      { label: "Repair & maintenance", href: "/services/maintenance/" },
      { label: "Electrical calibration", href: "/services/calibration/electrical/" },
      { label: "Equipment rental", href: "/services/rental/" },
      { label: "Contact us", href: "/contact/" },
    ],
    heroImage: "/assets/maintenance.jpg",
  },
  {
    slug: "cable-fault-detection-van-service-saudi-arabia",
    keyword: "Cable Fault Detect in Van Service in Saudi",
    title: "Cable Fault Detection Van Service in Saudi Arabia",
    description:
      "Cable fault detection van service in Saudi Arabia. Mobile test vans locate underground and HV/LV cable faults on site. Request service.",
    h1: "Cable Fault Detection Van Service in Saudi Arabia",
    intro:
      "Expert Power supplies and equips cable fault detection vans in Saudi Arabia. Our mobile test vehicles carry integrated power, HV/LV testing systems and locating equipment so faults on underground and overhead cables are found on site and repaired faster.",
    keywords: [
      "cable fault detection van service in Saudi Arabia",
      "cable fault locator van Saudi Arabia",
      "underground cable fault detection Riyadh",
      "HV cable testing van Saudi Arabia",
      "mobile cable testing vehicle Saudi Arabia",
      "خدمة كشف أعطال الكابلات بالسيارة المجهزة في السعودية",
    ],
    arabic: {
      heading: "خدمة كشف أعطال الكابلات بسيارة مجهزة في السعودية",
      body: "نوفر في إكسبرت باور سيارات كشف أعطال الكابلات المجهزة بأنظمة اختبار الجهد العالي والمنخفض ومولدات وأجهزة تحديد موقع العطل، لخدمة شركات الكهرباء والمصانع والمشاريع في الرياض والدمام والجبيل وجميع مناطق المملكة.",
    },
    sections: [
      {
        heading: "What a cable fault detection van includes",
        body: [
          "Each vehicle is designed around your testing needs, with the equipment installed, wired and commissioned in a climate-controlled, anti-vibration cabin.",
        ],
        bullets: [
          "HV/LV cable testing and fault location equipment",
          "Pre-location and pin-pointing of cable faults",
          "Onboard generator and power system integration",
          "Test lead reels, terminal panels and grounding system",
          "Safety systems, emergency shutdown and fire suppression",
          "Lighting, distribution and climate control",
        ],
      },
      {
        heading: "Faults we help locate",
        body: [
          "Mobile cable testing reduces outage time because the fault is located at the site instead of excavating along the whole route.",
        ],
        bullets: [
          "Underground power cable faults (HV, MV and LV)",
          "Cable insulation breakdown and open or short circuits",
          "Sheath faults and cable route tracing",
          "Post-repair acceptance and diagnostic testing",
        ],
      },
      {
        heading: "Turnkey van design, equipment and commissioning",
        body: [
          "We handle project consultation, vehicle selection and layout, equipment sourcing from leading manufacturers, installation and commissioning. Your team receives a van that is ready for field work.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do you offer cable fault detection van service in Saudi Arabia?",
        a: "Yes. Expert Power designs, equips and commissions mobile cable testing and fault detection vans for field operations in Saudi Arabia.",
      },
      {
        q: "Can the van be customised to our equipment?",
        a: "Yes. Every van is tailored to your technical needs, including power, racks, test leads, safety systems and climate control.",
      },
      {
        q: "Which cities do you serve?",
        a: "We serve Riyadh, Dammam, Jubail, Jeddah and other regions across the Kingdom.",
      },
    ],
    serviceType: "Cable fault detection mobile van service",
    related: [
      { label: "Mobile van services", href: "/services/van-services/" },
      { label: "On-site calibration", href: "/services/onsite-calibration/" },
      { label: "Testing & analysis", href: "/services/testing/" },
      { label: "Contact us", href: "/contact/" },
    ],
    heroImage: "/assets/van-hero.jpg",
  },
];

export const seoPages: SeoPage[] = [...livePages, ...generatedPages];

export function getSeoPage(slug: string): SeoPage {
  const page = seoPages.find((p) => p.slug === slug);
  if (!page) throw new Error(`Unknown SEO page: ${slug}`);
  return page;
}
