import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute:
      "About Expert Power | ISO 17025 Calibration Laboratory in Saudi Arabia",
  },
  description:
    "Learn about Expert Power, Saudi Arabia's ISO 17025 accredited calibration laboratory since 2014. Discover our mission, vision, commitment to impartiality, QAI/ILAC accreditation, and journey to becoming a trusted calibration partner.",
  alternates: {
    canonical: "https://expertpower.com.sa/about/",
  },
  openGraph: {
    title: "About Expert Power | ISO 17025 Calibration Laboratory in Saudi Arabia",
    description:
      "Discover Expert Power's mission, vision, values, QAI/ILAC accreditation, and commitment to impartiality. Saudi Arabia's trusted calibration laboratory since 2014.",
    url: "https://expertpower.com.sa/about/",
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
      "@type": "AboutPage",
      "@id": "https://expertpower.com.sa/about/",
      url: "https://expertpower.com.sa/about/",
      name: "About Expert Power | ISO 17025 Calibration Laboratory in Saudi Arabia",
      description:
        "Learn about Expert Power, Saudi Arabia's ISO 17025 accredited calibration laboratory since 2014. Discover our mission, vision, QAI/ILAC accreditation, and commitment to impartiality.",
      isPartOf: {
        "@id": "https://expertpower.com.sa/",
      },
      breadcrumb: {
        "@id": "https://expertpower.com.sa/about/#breadcrumb",
      },
      inLanguage: "en",
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://expertpower.com.sa/about/#breadcrumb",
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
          name: "About Us",
          item: "https://expertpower.com.sa/about/",
        },
      ],
    },
    {
      "@type": "Organization",
      "@id": "https://expertpower.com.sa/#organization",
      name: "Expert Power",
      alternateName: "Expert Power Trading Est.",
      url: "https://expertpower.com.sa",
      logo: "https://expertpower.com.sa/assets/logo.png",
      description:
        "Expert Power is Saudi Arabia's ISO 17025 accredited calibration laboratory, providing precision calibration, testing, inspection, rental, maintenance, and repair services.",
      foundingDate: "2014",
      email: "info@expertpower.com.sa",
      telephone: "+966114210481",
      address: [
        {
          "@type": "PostalAddress",
          name: "Riyadh HQ",
          streetAddress: "Sitteen Street, Al Malaz, P.O.Box 32933",
          addressLocality: "Riyadh",
          postalCode: "11438",
          addressCountry: "SA",
        },
        {
          "@type": "PostalAddress",
          name: "Dammam Branch",
          streetAddress: "Daharan - Jubail Expressway, Al Badia District, Al-Qatif",
          addressLocality: "Dammam",
          postalCode: "32656",
          addressCountry: "SA",
        },
      ],
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
