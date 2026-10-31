import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Industries We Serve | Calibration Services by Sector | Expert Power",
  },
  description:
    "Expert Power provides ISO 17025 calibration and engineering services to oil & gas, manufacturing, energy, education, construction, and logistics industries in Saudi Arabia.",
  alternates: {
    canonical: "https://expertpower.com.sa/industries/",
  },
  openGraph: {
    title: "Industries We Serve | Calibration Services by Sector | Expert Power",
    description:
      "Discover calibration solutions tailored for oil & gas, manufacturing, energy, education, construction, and logistics sectors in Saudi Arabia.",
    url: "https://expertpower.com.sa/industries/",
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
      "@id": "https://expertpower.com.sa/industries/",
      url: "https://expertpower.com.sa/industries/",
      name: "Industries We Serve | Calibration Services by Sector | Expert Power",
      description:
        "Expert Power provides ISO 17025 calibration and engineering services to oil & gas, manufacturing, energy, education, construction, and logistics industries.",
      isPartOf: {
        "@id": "https://expertpower.com.sa/",
      },
      breadcrumb: {
        "@id": "https://expertpower.com.sa/industries/#breadcrumb",
      },
      inLanguage: "en",
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://expertpower.com.sa/industries/#breadcrumb",
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
          name: "Industries",
          item: "https://expertpower.com.sa/industries/",
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
