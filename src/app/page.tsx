import type { Metadata } from "next";
import { Hero } from "@/sections/Hero";
import { Statistics } from "@/sections/Statistics";
import { Services } from "@/sections/Services";
import { Industries } from "@/sections/Industries";
import { WhyChooseUs } from "@/sections/WhyChooseUs";
import { ClientsMarquee } from "@/sections/ClientsMarquee";
import { Insights } from "@/sections/Insights";
import { Accreditation } from "@/sections/Accreditation";

export const metadata: Metadata = {
  title: "ISO 17025 Calibration Laboratory in Saudi Arabia | Expert Power",
  description:
    "ISO 17025 accredited calibration lab in Saudi Arabia. Calibration, testing, inspection, rental and repair for oil & gas, energy and industry. Get a quote.",
  alternates: {
    canonical: "https://expertpower.com.sa/",
  },
  openGraph: {
    title: "ISO 17025 Calibration Laboratory in Saudi Arabia | Expert Power",
    description:
      "Expert Power is Saudi Arabia's leading ISO 17025 accredited calibration laboratory. Precision calibration, testing, inspection, rental, maintenance, and repair services.",
    url: "https://expertpower.com.sa/",
    type: "website",
    locale: "en_SA",
    siteName: "Expert Power",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Expert Power",
  alternateName: "Expert Power Trading Est.",
  url: "https://expertpower.com.sa",
  logo: "https://expertpower.com.sa/assets/Logo.png",
  description:
    "Expert Power is Saudi Arabia's leading ISO 17025 accredited calibration laboratory, providing precision calibration, testing, inspection, rental, maintenance, and repair services.",
  priceRange: "$$",
  areaServed: {
    "@type": "Country",
    name: "Saudi Arabia",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Calibration & Engineering Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Calibration Services",
          description: "ISO 17025 accredited calibration for electrical, mechanical, pressure, and temperature instruments.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Engineering Solutions",
          description: "Comprehensive engineering consultancy and technical solutions for industrial challenges.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Testing & Analysis",
          description: "Advanced testing and analytical services for quality assurance and compliance verification.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Inspection & Verification",
          description: "Thorough inspection and verification services to ensure regulatory compliance and safety.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Maintenance & Support",
          description: "Preventive and corrective maintenance services to ensure optimal equipment performance.",
        },
      },
    ],
  },
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
  telephone: "+966114210481",
  email: "info@expertpower.com.sa",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "08:00",
      closes: "14:00",
    },
  ],
  sameAs: [
    "https://expertpower.com.sa",
    "https://www.linkedin.com/company/expert-power-measurement-and-calibration/",
    "https://twitter.com/expertpowersa",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Hero />
      <Statistics />
      <Accreditation />
      <Services />
      <Industries />
      <WhyChooseUs />
      <ClientsMarquee />
      <Insights />
    </>
  );
}
