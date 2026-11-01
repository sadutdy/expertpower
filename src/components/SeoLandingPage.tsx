import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Phone, MapPin } from "lucide-react";
import { SITE_URL, seoPages, type SeoPage } from "@/lib/data/seo-pages";
import { seoPagesAr } from "@/lib/data/seo-pages-ar";
import { MotionPlayer } from "@/components/motion/MotionPlayer";

export type SeoLocale = "en" | "ar";

const labels = {
  en: {
    home: "Home",
    quote: "Request a quote",
    faq: "Frequently asked questions",
    related: "Related services",
    process: "See how it works",
    map: "View on Google Maps",
    switchLabel: "العربية",
  },
  ar: {
    home: "الرئيسية",
    quote: "اطلب عرض سعر",
    faq: "الأسئلة الشائعة",
    related: "خدمات ذات صلة",
    process: "شاهد كيف تعمل الخدمة",
    map: "عرض على خرائط جوجل",
    switchLabel: "English",
  },
} as const;

function urlFor(slug: string, locale: SeoLocale) {
  return locale === "ar" ? `${SITE_URL}/ar/${slug}/` : `${SITE_URL}/${slug}/`;
}

function content(page: SeoPage, locale: SeoLocale) {
  if (locale === "en") {
    return {
      title: page.title,
      description: page.description,
      h1: page.h1,
      intro: page.intro,
      sections: page.sections,
      faqs: page.faqs,
      relatedLabels: page.related.map((r) => r.label),
      steps: page.steps,
      motionTitle: page.motionTitle,
    };
  }
  return seoPagesAr[page.slug];
}

function localizeHref(href: string, locale: SeoLocale) {
  if (locale === "en") return href;
  const isKeywordPage = seoPages.some((p) => href === `/${p.slug}/`);
  return isKeywordPage ? `/ar${href}` : href;
}

export function buildSeoMetadata(page: SeoPage, locale: SeoLocale = "en"): Metadata {
  const c = content(page, locale);
  const url = urlFor(page.slug, locale);
  return {
    title: { absolute: c.title },
    description: c.description,
    keywords: locale === "ar" && page.arabic ? [page.arabic.heading, ...page.keywords] : page.keywords,
    alternates: {
      canonical: url,
      languages: {
        "en-SA": urlFor(page.slug, "en"),
        "ar-SA": urlFor(page.slug, "ar"),
        "x-default": urlFor(page.slug, "en"),
      },
    },
    openGraph: {
      images: [{ url: "/og-default.jpg", width: 1200, height: 630 }],
      title: c.title,
      description: c.description,
      url,
      type: "website",
      locale: locale === "ar" ? "ar_SA" : "en_SA",
      alternateLocale: locale === "ar" ? "en_SA" : "ar_SA",
      siteName: "Expert Power",
    },
    twitter: {
      card: "summary_large_image",
      title: c.title,
      description: c.description,
    },
    robots: { index: true, follow: true },
  };
}

function buildStructuredData(page: SeoPage, locale: SeoLocale) {
  const c = content(page, locale);
  const url = urlFor(page.slug, locale);
  const graph: Record<string, unknown>[] = [
    {
      "@type": "WebPage",
      "@id": url,
      url,
      name: c.title,
      description: c.description,
      isPartOf: { "@id": `${SITE_URL}/#website` },
      breadcrumb: { "@id": `${url}#breadcrumb` },
      inLanguage: locale,
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${url}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: labels[locale].home, item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: c.h1, item: url },
      ],
    },
    {
      "@type": "Service",
      "@id": `${url}#service`,
      name: c.h1,
      serviceType: page.serviceType,
      description: c.description,
      inLanguage: locale,
      provider: { "@id": `${SITE_URL}/#organization` },
      areaServed: [
        { "@type": "Country", name: "Saudi Arabia" },
        { "@type": "City", name: "Riyadh" },
        { "@type": "City", name: "Dammam" },
        { "@type": "City", name: "Jubail" },
        { "@type": "City", name: "Jeddah" },
      ],
    },
  ];
  if (c.faqs.length) {
    graph.push({
      "@type": "FAQPage",
      inLanguage: locale,
      mainEntity: c.faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    });
  }
  return { "@context": "https://schema.org", "@graph": graph };
}

export function SeoLandingPage({
  page,
  locale = "en",
}: {
  page: SeoPage;
  locale?: SeoLocale;
}) {
  const c = content(page, locale);
  const l = labels[locale];
  const otherLocale: SeoLocale = locale === "en" ? "ar" : "en";
  const otherHref = otherLocale === "ar" ? `/ar/${page.slug}/` : `/${page.slug}/`;

  return (
    <div dir={locale === "ar" ? "rtl" : "ltr"} lang={locale}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildStructuredData(page, locale)) }}
      />

      <section
        className="relative pt-32 pb-20 bg-[#0F172A] text-white overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(15,23,42,0.88), rgba(15,23,42,0.92)), url(${page.heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-5xl mx-auto px-6">
          <nav aria-label="Breadcrumb" className="text-sm text-gray-300 mb-6 flex flex-wrap gap-x-2">
            <Link href="/" className="hover:text-white">
              {l.home}
            </Link>
            <span>/</span>
            <span>{c.h1}</span>
            <Link
              href={otherHref}
              hrefLang={otherLocale === "ar" ? "ar-SA" : "en-SA"}
              lang={otherLocale}
              className="ms-auto underline hover:text-white"
            >
              {l.switchLabel}
            </Link>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">{c.h1}</h1>
          <p className="text-lg text-gray-200 max-w-3xl mb-8">{c.intro}</p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact/"
              className="inline-flex items-center gap-2 bg-[#DC2626] hover:bg-[#B91C1C] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              {l.quote}{" "}
              <ArrowRight size={18} className={locale === "ar" ? "rotate-180" : undefined} />
            </Link>
            <a
              href="tel:+966114210481"
              dir="ltr"
              className="inline-flex items-center gap-2 border border-white/40 hover:bg-white/10 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              <Phone size={18} /> +966 11 421 0481
            </a>
            {page.mapQuery && (
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(page.mapQuery)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-white/40 hover:bg-white/10 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                <MapPin size={18} /> {l.map}
              </a>
            )}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#FAFAFA] dark:bg-[#0F172A]">
        <div className="max-w-5xl mx-auto px-6 space-y-14">
          {c.steps && c.steps.length > 0 && (
            <section aria-label={l.process}>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0F172A] dark:text-white mb-4">
                {l.process}
              </h2>
              <MotionPlayer
                title={c.motionTitle ?? c.h1}
                steps={c.steps}
                rtl={locale === "ar"}
              />
            </section>
          )}

          {c.sections.map((s) => (
            <article key={s.heading}>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0F172A] dark:text-white mb-4">
                {s.heading}
              </h2>
              {s.body.map((p) => (
                <p key={p} className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  {p}
                </p>
              ))}
              {s.bullets && (
                <ul className="grid sm:grid-cols-2 gap-3 mt-4">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-gray-800 dark:text-gray-200">
                      <CheckCircle2 size={20} className="text-[#DC2626] mt-0.5 shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}

          {locale === "en" && page.arabic && (
            <article
              dir="rtl"
              lang="ar"
              className="rounded-xl border border-gray-200 dark:border-white/10 p-6"
            >
              <h2 className="text-2xl font-bold text-[#0F172A] dark:text-white mb-3">
                {page.arabic.heading}
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-loose mb-3">
                {page.arabic.body}
              </p>
              <Link
                href={otherHref}
                hrefLang="ar-SA"
                className="text-[#DC2626] underline font-semibold"
              >
                {labels.en.switchLabel}
              </Link>
            </article>
          )}

          {c.faqs.length > 0 && (
            <section aria-labelledby="faq-heading">
              <h2
                id="faq-heading"
                className="text-2xl md:text-3xl font-bold text-[#0F172A] dark:text-white mb-6"
              >
                {l.faq}
              </h2>
              <div className="space-y-4">
                {c.faqs.map((f) => (
                  <details
                    key={f.q}
                    className="group rounded-xl border border-gray-200 dark:border-white/10 p-5"
                  >
                    <summary className="cursor-pointer font-semibold text-[#0F172A] dark:text-white">
                      {f.q}
                    </summary>
                    <p className="mt-3 text-gray-700 dark:text-gray-300 leading-relaxed">{f.a}</p>
                  </details>
                ))}
              </div>
            </section>
          )}

          <section aria-labelledby="related-heading">
            <h2
              id="related-heading"
              className="text-2xl font-bold text-[#0F172A] dark:text-white mb-4"
            >
              {l.related}
            </h2>
            <ul className="flex flex-wrap gap-3">
              {page.related.map((r, i) => (
                <li key={r.href}>
                  <Link
                    href={localizeHref(r.href, locale)}
                    className="inline-block rounded-full border border-[#DC2626]/40 px-4 py-2 text-[#DC2626] hover:bg-[#DC2626] hover:text-white transition-colors"
                  >
                    {c.relatedLabels[i]}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </section>
    </div>
  );
}
