import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import { notFound } from "next/navigation";
import { SeoLandingPage, buildSeoMetadata } from "@/components/SeoLandingPage";
import { generatedPages } from "@/lib/data/page-specs";

const infoPages = generatedPages.filter((p) => p.slug.startsWith("insights/"));
const findInfo = (slug: string) => infoPages.find((p) => p.slug === `insights/${slug}`);

const articles: Record<string, {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  readTime: string;
  body: string;
}> = {
  "iso-17025-guide": {
    title: "Understanding ISO 17025: The Gold Standard for Calibration",
    excerpt: "Learn about the importance of ISO 17025 accreditation and how it ensures measurement accuracy and reliability.",
    date: "January 15, 2026",
    category: "Standards",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200&q=80",
    readTime: "5 min read",
    body: `ISO/IEC 17025:2017 is the international standard for testing and calibration laboratories. It specifies the general requirements for the competence, impartiality, and consistent operation of laboratories.

## Why ISO 17025 Matters

Accreditation to ISO 17025 demonstrates that a laboratory is technically competent and able to produce precise and accurate test and/or calibration data. For customers, it means confidence in the results — the measurements are reliable, repeatable, and traceable to national or international standards.

## Key Requirements

The standard covers two main areas: management requirements (how a laboratory manages its operations) and technical requirements (factors that affect the accuracy and reliability of tests and calibrations).

Technical requirements include the competence of staff, validity of test and calibration methods, equipment calibration and maintenance, and measurement traceability.

## Expert Power's Accreditation

Expert Power holds ISO/IEC 17025:2017 accreditation through the Saudi Accreditation Center (SAC). Contact us to discuss your instruments and requirements.

## Benefits for Your Business

Working with an ISO 17025 accredited laboratory like Expert Power means your calibration certificates are internationally recognized, regulatory audits are smoother, and your products meet global quality standards.`,
  },
  "oil-gas-calibration": {
    title: "Calibration Best Practices for Oil & Gas Industry",
    excerpt: "Essential calibration procedures and maintenance tips for instrumentation in upstream and downstream operations.",
    date: "January 10, 2026",
    category: "Industry",
    image: "/images/industries/oil_gas.jpg",
    readTime: "7 min read",
    body: `The oil and gas industry relies on precision instrumentation to ensure safe and efficient operations. Inaccurate measurements can lead to process inefficiencies, safety incidents, and regulatory non-compliance.

## Critical Instruments in Oil & Gas

Key instruments requiring regular calibration in the oil and gas sector include pressure transmitters, temperature sensors, flow meters, level gauges, analytical instruments, and safety relief valves.

## Calibration Intervals

Calibration intervals should be determined based on manufacturer recommendations, historical drift data, the criticality of the measurement, and the operating environment. In harsh environments — high temperatures, corrosive atmospheres, vibration — more frequent calibration is typically required.

## Onsite vs Laboratory Calibration

For the oil and gas industry, Expert Power offers both onsite calibration (performed at your facility to minimize downtime) and laboratory calibration (for instruments requiring higher accuracy or specialized equipment). Our Mobile Testing & Commissioning Van Setup Solutions help you design, supply, integrate, and commission custom testing vehicles for remote field locations.

## Regulatory Compliance

Major operators in the Kingdom require calibration certificates from accredited laboratories. Expert Power's ISO 17025 certification ensures full compliance with these requirements.`,
  },
  "digital-calibration": {
    title: "The Future of Calibration: Digital Transformation",
    excerpt: "How digital technologies and Industry 4.0 are revolutionizing calibration processes and quality assurance.",
    date: "January 5, 2026",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=80",
    readTime: "6 min read",
    body: `Industry 4.0 is transforming every aspect of manufacturing and quality assurance — calibration included. Digital calibration management systems, IoT-enabled instruments, and AI-driven predictive maintenance are changing how organizations manage their measurement equipment.

## Digital Calibration Management

Modern calibration management software (CMMS/LIMS) allows organizations to track all instruments, calibration due dates, certificates, and history in a single digital platform. This eliminates paper-based systems and reduces the risk of using out-of-calibration equipment.

## IoT and Connected Instruments

Smart instruments with built-in connectivity can report their calibration status in real-time, alert maintenance teams when drift is detected, and even trigger automatic recalibration workflows.

## Predictive Calibration

By analyzing historical drift data from thousands of instruments, AI systems can predict when a specific instrument is likely to go out of tolerance — allowing proactive calibration before a process excursion occurs.

## Expert Power's Digital Services

We offer calibration management integration support, digital certificate delivery, and API-based access to calibration records — enabling our clients to integrate calibration data directly into their ERP and quality management systems.`,
  },
  "pressure-calibration-guide": {
    title: "Pressure Calibration: Techniques and Traceability",
    excerpt: "A deep-dive into pressure calibration methodologies, uncertainty analysis, and traceability requirements.",
    date: "December 20, 2025",
    category: "Technical",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=1200&q=80",
    readTime: "8 min read",
    body: `Pressure measurement is fundamental across virtually every industrial process. Accurate pressure calibration is critical for safety, product quality, and regulatory compliance.

## Pressure Calibration Methods

Pressure calibration involves comparing an instrument under test against a reference standard of known accuracy. Common reference standards include dead weight testers (primary standards), pressure comparators, and digital pressure standards.

## Measurement Uncertainty

Every calibration result carries measurement uncertainty — the range within which the true value is expected to lie. Proper uncertainty analysis, following the GUM (Guide to the Expression of Uncertainty in Measurement), is a requirement of ISO 17025 and is included on all Expert Power calibration certificates.

## Traceability Chain

For a pressure calibration to be traceable, there must be an unbroken chain of comparisons linking the measurement result to national or international standards (SI units). Expert Power's pressure standards are calibrated by SASO's National Metrology Institute, ensuring full traceability.

## Common Pressure Instruments We Calibrate

Our pressure calibration service covers gauges, transmitters, transducers, manometers, pressure switches, relief valves, and vacuum gauges across ranges from vacuum to 1000 bar.`,
  },
  "electrical-safety-testing": {
    title: "Electrical Safety Testing: What You Need to Know",
    excerpt: "Comprehensive overview of electrical safety testing standards and compliance requirements.",
    date: "November 28, 2025",
    category: "Safety",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200&q=80",
    readTime: "7 min read",
    body: `Electrical safety testing is a mandatory requirement for industrial facilities and commercial buildings in Saudi Arabia. Proper testing protects personnel, equipment, and facilities from electrical hazards.

## Key Electrical Safety Tests

Common electrical safety tests include insulation resistance testing, earth continuity testing, leakage current measurement, dielectric strength (hipot) testing, and portable appliance testing (PAT).

## Standards and Compliance

Saudi Arabia adopts international electrical safety standards including IEC 60364, IEC 62353, and SASO standards. Compliance with these standards is required for facility licensing and insurance purposes.

## Testing Intervals

Electrical safety testing intervals depend on equipment type, usage, and environment. Industrial equipment in harsh environments typically requires annual testing, while office equipment may only need testing every three to five years.

## Expert Power Electrical Testing

Our electrical testing services cover both laboratory and onsite testing. Our engineers are trained in the latest IEC standards and use calibrated, SASO-approved test equipment. All test results are documented with full traceability to national standards.`,
  },
};

export async function generateStaticParams() {
  return [
    ...Object.keys(articles),
    ...infoPages.map((p) => p.slug.replace("insights/", "")),
  ].map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const info = findInfo(slug);
  if (info) return buildSeoMetadata(info);
  const article = articles[slug];
  if (!article) return { title: "Article Not Found" };
  return {
    title: article.title,
    description: article.excerpt,
    alternates: {
      canonical: `https://expertpower.com.sa/insights/${slug}/`,
    },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      url: `https://expertpower.com.sa/insights/${slug}/`,
      type: "article",
      locale: "en_SA",
      siteName: "Expert Power",
      images: [article.image],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function InsightArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const info = findInfo(slug);
  if (info) return <SeoLandingPage page={info} />;
  const article = articles[slug];
  if (!article) notFound();

  const paragraphs = article.body.split("\n\n");

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `https://expertpower.com.sa/insights/${slug}/`,
        headline: article.title,
        description: article.excerpt,
        url: `https://expertpower.com.sa/insights/${slug}/`,
        image: article.image,
        datePublished: article.date,
        author: {
          "@type": "Organization",
          name: "Expert Power",
          url: "https://expertpower.com.sa",
        },
        publisher: {
          "@type": "Organization",
          name: "Expert Power",
          logo: {
            "@type": "ImageObject",
            url: "https://expertpower.com.sa/assets/Logo.png",
          },
        },
        isPartOf: {
          "@type": "Blog",
          "@id": "https://expertpower.com.sa/insights/",
        },
        breadcrumb: {
          "@id": `https://expertpower.com.sa/insights/${slug}/#breadcrumb`,
        },
        inLanguage: "en",
      },
      {
        "@type": "BreadcrumbList",
        "@id": `https://expertpower.com.sa/insights/${slug}/#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://expertpower.com.sa/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Insights",
            item: "https://expertpower.com.sa/insights/",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: article.title,
            item: `https://expertpower.com.sa/insights/${slug}/`,
          },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] dark:bg-[#0F172A]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {/* Hero Image */}
      <div className="relative h-[60vh] overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 container-custom pb-12 pt-32">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-[#DC2626] text-white text-xs font-semibold uppercase tracking-wider rounded-full flex items-center gap-1">
              <Tag className="w-3 h-3" />
              {article.category}
            </span>
            <span className="flex items-center gap-1 text-white/60 text-sm">
              <Calendar className="w-4 h-4" />
              {article.date}
            </span>
            <span className="flex items-center gap-1 text-white/60 text-sm">
              <Clock className="w-4 h-4" />
              {article.readTime}
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-white max-w-3xl leading-tight">
            {article.title}
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="container-custom py-16">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/insights"
            prefetch={false}
            className="inline-flex items-center gap-2 text-[#DC2626] font-medium mb-10 hover:gap-3 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Insights
          </Link>

          <p className="text-xl text-[#64748B] dark:text-[#94A3B8] mb-10 leading-relaxed font-light">
            {article.excerpt}
          </p>

          <div className="prose prose-lg max-w-none dark:prose-invert">
            {paragraphs.map((para, i) => {
              if (para.startsWith("## ")) {
                return (
                  <h2
                    key={i}
                    className="text-2xl font-black uppercase mt-12 mb-4 text-[#0F172A] dark:text-white"
                  >
                    {para.replace("## ", "")}
                  </h2>
                );
              }
              return (
                <p key={i} className="text-[#64748B] dark:text-[#94A3B8] leading-relaxed mb-6">
                  {para}
                </p>
              );
            })}
          </div>

          {/* CTA */}
          <div className="mt-16 p-8 bg-[#0F172A] rounded-xl text-center">
            <h3 className="text-2xl font-black text-white mb-2">
              Need Expert Calibration?
            </h3>
            <p className="text-white/60 mb-6">
              Contact our team for a free consultation and quote.
            </p>
            <Link
              href="/contact"
              prefetch={false}
              className="inline-flex items-center gap-2 px-8 py-3 bg-[#DC2626] text-white rounded-lg font-semibold hover:bg-[#B91C1C] transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
