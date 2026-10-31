import type { SeoPage, SeoSection } from "@/lib/data/seo-pages";
import type { SeoArContent } from "@/lib/data/seo-pages-ar";

/** [English label, href, Arabic label] */
export type Rel = [string, string, string];

export interface LangSpec {
  title: string;
  description: string;
  h1: string;
  intro: string;
  offerHeading?: string;
  offer?: string[];
  /** Extra sections placed after the offer list */
  extra?: SeoSection[];
  stepsHeading?: string;
  steps?: string[];
  /** Replaces offer/extra/steps sections (article pages) */
  sections?: SeoSection[];
  faqs?: [string, string][];
  motionTitle?: string;
}

export interface PageSpec {
  slug: string;
  /** "service" adds the contact section and the generic FAQ; "insight" does not */
  kind: "service" | "insight";
  keyword: string;
  moreKeywords?: string[];
  img: string;
  serviceType: string;
  related: Rel[];
  mapQuery?: string;
  genericFaq?: boolean;
  en: LangSpec;
  ar: LangSpec;
}

const TEXT = {
  en: {
    offer: "What we offer",
    steps: "How the service works",
    contactHeading: "Talk to our team",
    contactBody:
      "Price, turnaround time and the recommended interval are decided after we discuss your requirements with you. Contact our team with your details and we will advise the best option, in our laboratory or on your site.",
    faq: [
      "How much does it cost, how long does it take and how often is it needed?",
      "Price, turnaround time and the recommended interval are decided after we discuss your requirements with you. Contact us with your details to get started.",
    ] as [string, string],
  },
  ar: {
    offer: "ما نقدمه",
    steps: "كيف تعمل الخدمة",
    contactHeading: "تواصل مع فريقنا",
    contactBody:
      "يتم تحديد السعر ومدة التنفيذ والفترة الموصى بها بعد مناقشة متطلباتك معك. تواصل مع فريقنا مع تفاصيلك وسنقترح الخيار الأنسب، في معملنا أو في موقعك.",
    faq: [
      "كم تكلفة الخدمة، وكم تستغرق، وكم مرة نحتاج إليها؟",
      "يتم تحديد السعر ومدة التنفيذ والفترة الموصى بها بعد مناقشة متطلباتك معك. تواصل معنا مع تفاصيلك للبدء.",
    ] as [string, string],
  },
};

function sectionsOf(spec: PageSpec, l: LangSpec, lang: "en" | "ar"): SeoSection[] {
  if (l.sections) return l.sections;
  const t = TEXT[lang];
  const out: SeoSection[] = [];
  if (l.offer?.length) out.push({ heading: l.offerHeading ?? t.offer, body: [], bullets: l.offer });
  if (l.extra) out.push(...l.extra);
  if (l.steps?.length) out.push({ heading: l.stepsHeading ?? t.steps, body: [], bullets: l.steps });
  if (spec.kind === "service") out.push({ heading: t.contactHeading, body: [t.contactBody] });
  return out;
}

function faqsOf(spec: PageSpec, l: LangSpec, lang: "en" | "ar") {
  const list = (l.faqs ?? []).map(([q, a]) => ({ q, a }));
  if (spec.kind === "service" && spec.genericFaq !== false) {
    const [q, a] = TEXT[lang].faq;
    list.push({ q, a });
  }
  return list;
}

export function buildPage(spec: PageSpec): SeoPage {
  return {
    slug: spec.slug,
    keyword: spec.keyword,
    title: spec.en.title,
    description: spec.en.description,
    h1: spec.en.h1,
    intro: spec.en.intro,
    keywords: [spec.keyword, ...(spec.moreKeywords ?? [])],
    steps: spec.en.steps,
    motionTitle: spec.en.motionTitle,
    mapQuery: spec.mapQuery,
    sections: sectionsOf(spec, spec.en, "en"),
    faqs: faqsOf(spec, spec.en, "en"),
    serviceType: spec.serviceType,
    related: spec.related.map(([label, href]) => ({ label, href })),
    heroImage: spec.img,
  };
}

export function buildAr(spec: PageSpec): SeoArContent {
  return {
    title: spec.ar.title,
    description: spec.ar.description,
    h1: spec.ar.h1,
    intro: spec.ar.intro,
    sections: sectionsOf(spec, spec.ar, "ar"),
    faqs: faqsOf(spec, spec.ar, "ar"),
    relatedLabels: spec.related.map((r) => r[2]),
    steps: spec.ar.steps,
    motionTitle: spec.ar.motionTitle,
  };
}

export const R = {
  cal: ["Calibration services", "/services/calibration/", "خدمات المعايرة"] as Rel,
  onsite: ["On-site calibration", "/services/onsite-calibration/", "المعايرة في الموقع"] as Rel,
  rental: ["Equipment rental", "/services/rental/", "إيجار المعدات"] as Rel,
  contact: ["Contact us", "/contact/", "تواصل معنا"] as Rel,
  maint: ["Repair & maintenance", "/services/maintenance/", "الإصلاح والصيانة"] as Rel,
  insp: ["Inspection & verification", "/services/inspection/", "الفحص والتحقق"] as Rel,
  test: ["Testing & analysis", "/services/testing/", "الاختبار والتحليل"] as Rel,
  acc: ["Accreditation", "/accreditation/", "الاعتمادات"] as Rel,
  elec: ["Electrical calibration", "/services/calibration/electrical/", "المعايرة الكهربائية"] as Rel,
  press: ["Pressure calibration", "/services/calibration/pressure/", "معايرة الضغط"] as Rel,
  temp: ["Temperature calibration", "/services/calibration/temperature/", "معايرة الحرارة"] as Rel,
  dim: ["Dimensional calibration", "/services/calibration/dimensional/", "معايرة الأبعاد"] as Rel,
  mech: ["Mechanical calibration", "/services/calibration/mechanical/", "المعايرة الميكانيكية"] as Rel,
  van: ["Mobile van services", "/services/van-services/", "خدمات السيارات المتنقلة"] as Rel,
  repairLive: [
    "Electrical instrument repair",
    "/electrical-instrument-repair-service-saudi-arabia/",
    "إصلاح الأجهزة الكهربائية",
  ] as Rel,
  saac: [
    "SAAC accredited calibration lab",
    "/saac-accredited-calibration-lab-saudi-arabia/",
    "معمل معايرة معتمد من SAAC",
  ] as Rel,
};

export const IMG = {
  cal: "/assets/calibration.jpg",
  lab: "/assets/lab.jpg",
  insp: "/assets/inspection.jpg",
  test: "/assets/testing.jpg",
  maint: "/assets/maintenance.jpg",
  van: "/assets/van-hero.jpg",
};
