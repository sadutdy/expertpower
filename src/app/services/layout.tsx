import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Calibration, Testing & Inspection Services | Expert Power",
  },
  description:
    "ISO 17025 calibration, testing, inspection, equipment rental, maintenance, van services and BMS solutions across Saudi Arabia.",
  alternates: {
    canonical: "https://expertpower.com.sa/services/",
  },
  openGraph: {
    images: [{ url: "/og-default.jpg", width: 1200, height: 630 }],
    title: "Calibration, Testing & Inspection Services | Expert Power",
    description:
      "Comprehensive calibration, testing, inspection, rental, maintenance, repair, van, and BMS services for industrial sectors in Saudi Arabia.",
    url: "https://expertpower.com.sa/services/",
    type: "website",
    locale: "en_SA",
    siteName: "Expert Power",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://expertpower.com.sa/services/",
      url: "https://expertpower.com.sa/services/",
      name: "Calibration, Testing & Inspection Services | Expert Power",
      description:
        "Explore Expert Power's ISO 17025 calibration, testing & analysis, inspection & verification, equipment rental, maintenance, van services, BMS solutions, and onsite services.",
      isPartOf: {
        "@id": "https://expertpower.com.sa/",
      },
      breadcrumb: {
        "@id": "https://expertpower.com.sa/services/#breadcrumb",
      },
      inLanguage: "en",
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://expertpower.com.sa/services/#breadcrumb",
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
          name: "Services",
          item: "https://expertpower.com.sa/services/",
        },
      ],
    },
    {
      "@type": "Organization",
      "@id": "https://expertpower.com.sa/#organization",
      name: "Expert Power",
      url: "https://expertpower.com.sa",
      logo: "https://expertpower.com.sa/assets/Logo.png",
      email: "info@expertpower.com.sa",
      telephone: "+966114210481",
      sameAs: [
        "https://www.linkedin.com/company/expert-power-measurement-and-calibration/",
        "https://twitter.com/expertpowersa",
      ],
    },
  ],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {children}
    </>
  );
}
