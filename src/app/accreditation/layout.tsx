import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute:
      "Accreditation & Certifications | Expert Power Saudi Arabia",
  },
  description:
    "Expert Power holds ISO/IEC 17025:2017, ISO 9001:2015, ISO 45001, and ISO 14001 certifications, plus QAI/ILAC MRA and SASO recognition. View our calibration certificates and accreditations.",
  alternates: {
    canonical: "https://expertpower.com.sa/accreditation/",
  },
  openGraph: {
    title: "Accreditation & Certifications | Expert Power Saudi Arabia",
    description:
      "View Expert Power's ISO/IEC 17025:2017, ISO 9001, ISO 45001, ISO 14001, QAI/ILAC MRA recognition, and SASO recognition for calibration services in Saudi Arabia.",
    url: "https://expertpower.com.sa/accreditation/",
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
      "@id": "https://expertpower.com.sa/accreditation/",
      url: "https://expertpower.com.sa/accreditation/",
      name: "Accreditation & Certifications | Expert Power Saudi Arabia",
      description:
        "Expert Power holds ISO/IEC 17025:2017, ISO 9001:2015, ISO 45001, and ISO 14001 certifications, plus QAI/ILAC MRA and SASO recognition.",
      isPartOf: {
        "@id": "https://expertpower.com.sa/",
      },
      breadcrumb: {
        "@id": "https://expertpower.com.sa/accreditation/#breadcrumb",
      },
      inLanguage: "en",
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://expertpower.com.sa/accreditation/#breadcrumb",
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
          name: "Accreditation",
          item: "https://expertpower.com.sa/accreditation/",
        },
      ],
    },
    {
      "@type": "Organization",
      "@id": "https://expertpower.com.sa/#organization",
      name: "Expert Power",
      url: "https://expertpower.com.sa",
      logo: "https://expertpower.com.sa/assets/logo.png",
      email: "info@expertpower.com.sa",
      telephone: "+966114210481",
      hasCredential: [
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "Certification",
          name: "ISO/IEC 17025:2017",
          recognizedBy: {
            "@type": "Organization",
            name: "Saudi Accreditation Center",
          },
        },
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "Certification",
          name: "ISO 9001:2015",
        },
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "Certification",
          name: "ISO 45001",
        },
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "Certification",
          name: "ISO 14001",
        },
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "Certification",
          name: "QAI / ILAC MRA",
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
