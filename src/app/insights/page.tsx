import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: {
    absolute: "Insights & News | Calibration Articles | Expert Power",
  },
  description:
    "Calibration insights, ISO 17025 guides and technical articles from Expert Power, Saudi Arabia's ISO 17025 accredited laboratory.",
  alternates: {
    canonical: "https://expertpower.com.sa/insights/",
  },
  openGraph: {
    images: [{ url: "/og-default.jpg", width: 1200, height: 630 }],
    title: "Insights & News | Calibration Articles | Expert Power",
    description:
      "Explore calibration guides, ISO 17025 articles, and industry insights from Expert Power.",
    url: "https://expertpower.com.sa/insights/",
    type: "website",
    locale: "en_SA",
    siteName: "Expert Power",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const articles = [
  {
    id: "iso-17025-guide",
    title: "Understanding ISO 17025: The Gold Standard for Calibration",
    titleAr: "فهم ISO 17025: المعيار الذهبي للمعايرة",
    excerpt:
      "Learn about the importance of ISO 17025 accreditation and how it ensures measurement accuracy and reliability across industries.",
    date: "Jan 15, 2026",
    category: "Standards",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80",
    readTime: "5 min read",
  },
  {
    id: "oil-gas-calibration",
    title: "Calibration Best Practices for Oil & Gas Industry",
    titleAr: "أفضل ممارسات المعايرة في قطاع النفط والغاز",
    excerpt:
      "Essential calibration procedures and maintenance tips for instrumentation in upstream and downstream operations.",
    date: "Jan 10, 2026",
    category: "Industry",
    image: "/images/industries/oil_gas.jpg",
    readTime: "7 min read",
  },
  {
    id: "digital-calibration",
    title: "The Future of Calibration: Digital Transformation",
    titleAr: "مستقبل المعايرة: التحول الرقمي",
    excerpt:
      "How digital technologies and Industry 4.0 are revolutionizing calibration processes and quality assurance.",
    date: "Jan 5, 2026",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
    readTime: "6 min read",
  },
  {
    id: "pressure-calibration-guide",
    title: "Pressure Calibration: Techniques and Traceability",
    titleAr: "معايرة الضغط: التقنيات والتتبع",
    excerpt:
      "A deep-dive into pressure calibration methodologies, uncertainty analysis, and traceability requirements under ISO 17025.",
    date: "Dec 20, 2025",
    category: "Technical",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&q=80",
    readTime: "8 min read",
  },
  {
    id: "electrical-safety-testing",
    title: "Electrical Safety Testing: What You Need to Know",
    titleAr: "اختبار السلامة الكهربائية: ما تحتاج إلى معرفته",
    excerpt:
      "Comprehensive overview of electrical safety testing standards, procedures, and compliance requirements for industrial facilities.",
    date: "Nov 28, 2025",
    category: "Safety",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80",
    readTime: "7 min read",
  },
];

export default function InsightsPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://expertpower.com.sa/insights/",
        url: "https://expertpower.com.sa/insights/",
        name: "Insights & News | Calibration Articles | Expert Power",
        description:
          "Read the latest calibration insights, ISO 17025 guides, industry news, and technical articles from Expert Power.",
        isPartOf: {
          "@id": "https://expertpower.com.sa/",
        },
        breadcrumb: {
          "@id": "https://expertpower.com.sa/insights/#breadcrumb",
        },
        inLanguage: "en",
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://expertpower.com.sa/insights/#breadcrumb",
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
        ],
      },
      {
        "@type": "ItemList",
        itemListElement: articles.map((article, index) => ({
          "@type": "ListItem",
          position: index + 1,
          url: `https://expertpower.com.sa/insights/${article.id}/`,
          name: article.title,
        })),
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] dark:bg-[#0F172A]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {/* Hero */}
      <div className="bg-[#0F172A] pt-32 pb-16">
        <div className="container-custom">
          <span className="text-[#DC2626] font-mono text-sm uppercase tracking-widest">
            Latest News
          </span>
          <h1 className="text-5xl md:text-7xl font-black uppercase mt-4 text-white">
            Insights
          </h1>
          <p className="mt-4 text-white/60 max-w-xl">
            Technical articles, industry guides, and calibration knowledge from our expert team.
          </p>
        </div>
      </div>

      {/* Articles Grid */}
      <div className="container-custom py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Link
              key={article.id}
              href={`/insights/${article.id}`}
              prefetch={false}
              className="group block bg-white dark:bg-[#1E293B] rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-[220px] overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-[#DC2626]/10 text-[#DC2626] text-xs font-semibold uppercase tracking-wider rounded-full">
                    {article.category}
                  </span>
                  <span className="text-xs text-[#64748B] dark:text-[#94A3B8]">{article.readTime}</span>
                </div>
                <h2 className="text-lg font-bold text-[#0F172A] dark:text-white group-hover:text-[#DC2626] transition-colors line-clamp-2">
                  {article.title}
                </h2>
                <p className="mt-2 text-[#64748B] dark:text-[#94A3B8] text-sm line-clamp-3">{article.excerpt}</p>
                <div className="mt-4 flex items-center gap-2 text-[#DC2626] font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  Read Article
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
