import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Careers at Expert Power | Calibration Jobs in Saudi Arabia",
  },
  description:
    "Join Expert Power, Saudi Arabia's ISO 17025 accredited calibration laboratory. Explore calibration technician, engineer, and quality jobs in Riyadh and Dammam.",
  alternates: {
    canonical: "https://expertpower.com.sa/careers/",
  },
  openGraph: {
    title: "Careers at Expert Power | Calibration Jobs in Saudi Arabia",
    description:
      "Explore career opportunities at Expert Power. Join our team of calibration professionals and engineers in Riyadh and Dammam.",
    url: "https://expertpower.com.sa/careers/",
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
      "@id": "https://expertpower.com.sa/careers/",
      url: "https://expertpower.com.sa/careers/",
      name: "Careers at Expert Power | Calibration Jobs in Saudi Arabia",
      description:
        "Join Expert Power, Saudi Arabia's ISO 17025 accredited calibration laboratory.",
      isPartOf: {
        "@id": "https://expertpower.com.sa/",
      },
      breadcrumb: {
        "@id": "https://expertpower.com.sa/careers/#breadcrumb",
      },
      inLanguage: "en",
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://expertpower.com.sa/careers/#breadcrumb",
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
          name: "Careers",
          item: "https://expertpower.com.sa/careers/",
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
