import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Terms of Service | Expert Power",
  },
  description:
    "Expert Power's Terms of Service outline the terms and conditions for using our website and calibration services in Saudi Arabia.",
  alternates: {
    canonical: "https://expertpower.com.sa/terms/",
  },
  openGraph: {
    title: "Terms of Service | Expert Power",
    description:
      "Read Expert Power's Terms of Service for using our website and calibration services.",
    url: "https://expertpower.com.sa/terms/",
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
      "@id": "https://expertpower.com.sa/terms/",
      url: "https://expertpower.com.sa/terms/",
      name: "Terms of Service | Expert Power",
      description:
        "Expert Power's Terms of Service outline the terms and conditions for using our website and calibration services.",
      isPartOf: {
        "@id": "https://expertpower.com.sa/",
      },
      breadcrumb: {
        "@id": "https://expertpower.com.sa/terms/#breadcrumb",
      },
      inLanguage: "en",
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://expertpower.com.sa/terms/#breadcrumb",
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
          name: "Terms of Service",
          item: "https://expertpower.com.sa/terms/",
        },
      ],
    },
  ],
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] dark:bg-[#0F172A]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="bg-[#0F172A] pt-32 pb-16">
        <div className="container-custom">
          <h1 className="text-5xl md:text-6xl font-black uppercase text-white">
            Terms of Service
          </h1>
          <p className="mt-4 text-white/60">Last updated: January 2026</p>
        </div>
      </div>
      <div className="container-custom py-16 max-w-4xl">
        <div className="space-y-8">
          {[
            {
              title: "1. Acceptance of Terms",
              content:
                "By using Expert Power's website or services, you agree to be bound by these Terms of Service. If you do not agree, please do not use our services.",
            },
            {
              title: "2. Services",
              content:
                "Expert Power provides calibration, testing, inspection, maintenance, and engineering services as described on our website. All services are subject to the terms of the specific service agreement entered into between Expert Power and the client.",
            },
            {
              title: "3. Calibration Certificates",
              content:
                "Calibration certificates issued by Expert Power are valid only for the instruments, conditions, and measurement points specified. The validity period is determined by the client's quality system and the instrument's stability characteristics. Expert Power is not liable for instrument drift or performance after the calibration date.",
            },
            {
              title: "4. Limitation of Liability",
              content:
                "Expert Power's liability for any claim arising from the provision of services shall not exceed the fees paid for the specific service. Expert Power is not liable for indirect, consequential, or incidental damages.",
            },
            {
              title: "5. Intellectual Property",
              content:
                "All content on this website, including text, graphics, and logos, is the property of Expert Power and is protected by applicable intellectual property laws. Calibration procedures and methods are proprietary to Expert Power.",
            },
            {
              title: "6. Payment Terms",
              content:
                "Payment terms are specified in individual service agreements. Standard terms are net 30 days from invoice date. Late payments may be subject to applicable interest charges.",
            },
            {
              title: "7. Governing Law",
              content:
                "These Terms are governed by the laws of the Kingdom of Saudi Arabia. Any disputes shall be subject to the jurisdiction of the courts of Riyadh.",
            },
            {
              title: "8. Changes to Terms",
              content:
                "Expert Power reserves the right to modify these Terms at any time. Changes will be effective upon posting to the website. Continued use of our services constitutes acceptance of the modified Terms.",
            },
            {
              title: "9. Contact",
              content:
                "For questions about these Terms, contact: info@expertpower.com.sa | +966114210481",
            },
          ].map(({ title, content }) => (
            <div key={title}>
              <h2 className="text-xl font-black uppercase text-[#0F172A] dark:text-white mb-3">
                {title}
              </h2>
              <p className="text-[#64748B] dark:text-[#94A3B8] leading-relaxed">{content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
