import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Contact Expert Power | ISO 17025 Calibration Services in Saudi Arabia",
  },
  description:
    "Contact Expert Power for ISO 17025 accredited calibration, testing, inspection, and engineering services in Saudi Arabia. Request a quote or send an enquiry. Offices in Riyadh and Dammam.",
  alternates: {
    canonical: "https://expertpower.com.sa/contact/",
  },
  openGraph: {
    title: "Contact Expert Power | ISO 17025 Calibration Services in Saudi Arabia",
    description:
      "Get in touch with Expert Power for precision calibration, testing, and engineering services. Request a quote or visit our offices in Riyadh and Dammam.",
    url: "https://expertpower.com.sa/contact/",
    type: "website",
    locale: "en_SA",
    siteName: "Expert Power",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://expertpower.com.sa/contact/",
      url: "https://expertpower.com.sa/contact/",
      name: "Contact Expert Power | ISO 17025 Calibration Services in Saudi Arabia",
      description:
        "Contact Expert Power for ISO 17025 accredited calibration, testing, inspection, and engineering services in Saudi Arabia.",
      isPartOf: {
        "@id": "https://expertpower.com.sa/",
      },
      breadcrumb: {
        "@id": "https://expertpower.com.sa/contact/#breadcrumb",
      },
      inLanguage: "en",
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://expertpower.com.sa/contact/#breadcrumb",
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
          name: "Contact Us",
          item: "https://expertpower.com.sa/contact/",
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
      email: "info@expertpower.com.sa",
      telephone: "+966114210481",
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+966114210481",
          contactType: "customer service",
          email: "info@expertpower.com.sa",
          availableLanguage: ["English", "Arabic"],
          areaServed: "SA",
        },
      ],
      location: [
        {
          "@type": "Place",
          name: "Expert Power Riyadh Headquarters",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Sitteen Street, Al Malaz, P.O.Box 32933",
            addressLocality: "Riyadh",
            postalCode: "11438",
            addressCountry: "SA",
          },
          telephone: "+966114210481",
        },
        {
          "@type": "Place",
          name: "Expert Power Dammam Branch",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Daharan - Jubail Expressway, Al Badia District, Al-Qatif",
            addressLocality: "Dammam",
            postalCode: "32656",
            addressCountry: "SA",
          },
          telephone: "+966114210481",
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
