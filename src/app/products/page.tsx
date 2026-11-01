import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: {
    absolute: "Equipment Rental & Products | Expert Power",
  },
  description:
    "Rent or buy calibrated test and measurement equipment: electrical, pressure, temperature and dimensional instruments for industry in Saudi Arabia.",
  alternates: {
    canonical: "https://expertpower.com.sa/products/",
  },
  openGraph: {
    images: [{ url: "/og-default.jpg", width: 1200, height: 630 }],
    title: "Equipment Rental & Products | Expert Power",
    description:
      "Explore calibration equipment rental and sales from Expert Power. Electrical, pressure, temperature, and dimensional instruments available in Saudi Arabia.",
    url: "https://expertpower.com.sa/products/",
    type: "website",
    locale: "en_SA",
    siteName: "Expert Power",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const categories = [
  {
    id: "electrical",
    title: "Electrical Test Equipment",
    description:
      "High-accuracy digital multimeters, power analyzers, oscilloscopes, insulation testers, and clamp meters available for rent or purchase.",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80",
    items: ["Digital Multimeters", "Power Quality Analyzers", "Oscilloscopes", "Insulation Testers", "Clamp Meters", "Leakage Current Meters"],
  },
  {
    id: "pressure",
    title: "Pressure Calibration Equipment",
    description:
      "Dead weight testers, pressure comparators, digital pressure standards, and pressure calibrators for field and laboratory use.",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&q=80",
    items: ["Dead Weight Testers", "Digital Pressure Calibrators", "Pressure Comparators", "Hand Pumps", "Pressure Gauges", "Vacuum Standards"],
  },
  {
    id: "temperature",
    title: "Temperature Calibration Equipment",
    description:
      "Dry block calibrators, liquid baths, reference thermometers, and thermocouple calibration equipment.",
    image: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?w=800&q=80",
    items: ["Dry Block Calibrators", "Liquid Bath Calibrators", "Reference Thermometers (PRTs)", "Thermocouple Calibrators", "Blackbody Calibrators", "Temperature Loggers"],
  },
  {
    id: "dimensional",
    title: "Dimensional Measurement",
    description:
      "Precision gauges, calipers, micrometers, height gauges, and surface plate sets for dimensional metrology.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    items: ["Vernier Calipers", "Digital Micrometers", "Height Gauges", "Dial Test Indicators", "Gauge Block Sets", "Surface Roughness Testers"],
  },
];

export default function ProductsPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://expertpower.com.sa/products/",
        url: "https://expertpower.com.sa/products/",
        name: "Equipment Rental & Products | Expert Power",
        description:
          "Rent or buy calibrated test and measurement equipment from Expert Power in Saudi Arabia.",
        isPartOf: {
          "@id": "https://expertpower.com.sa/",
        },
        breadcrumb: {
          "@id": "https://expertpower.com.sa/products/#breadcrumb",
        },
        inLanguage: "en",
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://expertpower.com.sa/products/#breadcrumb",
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
            name: "Products & Rental",
            item: "https://expertpower.com.sa/products/",
          },
        ],
      },
      {
        "@type": "ItemList",
        itemListElement: categories.map((category, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: category.title,
          description: category.description,
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
            Equipment
          </span>
          <h1 className="text-5xl md:text-7xl font-black uppercase mt-4 text-white">
            Products & Rental
          </h1>
          <p className="mt-4 text-white/60 max-w-xl">
            High-quality calibration and test equipment available for rental or purchase. All equipment is calibrated and certified before delivery.
          </p>
        </div>
      </div>

      {/* Categories */}
      <div className="container-custom py-20">
        <div className="space-y-16">
          {categories.map((cat, i) => (
            <div
              key={cat.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                i % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <img
                  src={cat.image}
                  alt={cat.title}
                  loading="lazy"
                  className="rounded-xl w-full aspect-[4/3] object-cover shadow-lg"
                />
              </div>
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <h2 className="text-3xl font-black uppercase text-[#0F172A] dark:text-white mb-4">
                  {cat.title}
                </h2>
                <p className="text-[#64748B] dark:text-[#94A3B8] mb-6 leading-relaxed">{cat.description}</p>
                <ul className="grid grid-cols-2 gap-2 mb-8">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-[#64748B] dark:text-[#94A3B8]">
                      <span className="w-1.5 h-1.5 bg-[#DC2626] rounded-full flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  prefetch={false}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#DC2626] text-white rounded-lg font-semibold hover:bg-[#B91C1C] transition-colors"
                >
                  Request Availability
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-[#0F172A] py-20">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-black uppercase text-white mb-4">
            Looking for a Specific Item?
          </h2>
          <p className="text-white/60 mb-8 max-w-lg mx-auto">
            Contact our team — we can source and calibrate specialized equipment not listed here.
          </p>
          <Link
            href="/contact"
            prefetch={false}
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#DC2626] text-white rounded-lg font-bold hover:bg-[#B91C1C] transition-colors"
          >
            Contact Us
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
