import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Privacy Policy | Expert Power",
  },
  description:
    "Expert Power's Privacy Policy explains how we collect, use, store, and protect your personal information when you use our website or services.",
  alternates: {
    canonical: "https://expertpower.com.sa/privacy/",
  },
  openGraph: {
    images: [{ url: "/og-default.jpg", width: 1200, height: 630 }],
    title: "Privacy Policy | Expert Power",
    description:
      "Read Expert Power's Privacy Policy to understand how we handle your personal data.",
    url: "https://expertpower.com.sa/privacy/",
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
      "@id": "https://expertpower.com.sa/privacy/",
      url: "https://expertpower.com.sa/privacy/",
      name: "Privacy Policy | Expert Power",
      description:
        "Expert Power's Privacy Policy explains how we collect, use, store, and protect your personal information.",
      isPartOf: {
        "@id": "https://expertpower.com.sa/",
      },
      breadcrumb: {
        "@id": "https://expertpower.com.sa/privacy/#breadcrumb",
      },
      inLanguage: "en",
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://expertpower.com.sa/privacy/#breadcrumb",
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
          name: "Privacy Policy",
          item: "https://expertpower.com.sa/privacy/",
        },
      ],
    },
  ],
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] dark:bg-[#0F172A]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="bg-[#0F172A] pt-32 pb-16">
        <div className="container-custom">
          <h1 className="text-5xl md:text-6xl font-black uppercase text-white">
            Privacy Policy
          </h1>
          <p className="mt-4 text-white/60">Last updated: January 2026</p>
        </div>
      </div>
      <div className="container-custom py-16 max-w-4xl">
        <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
          {[
            {
              title: "1. Information We Collect",
              content:
                "We collect information you provide directly, such as when you fill out a contact or quote request form. This includes your name, company name, email address, phone number, and details about the services you are requesting. We may also collect basic usage data through analytics tools to improve our website.",
            },
            {
              title: "2. How We Use Your Information",
              content:
                "We use the information collected to respond to your inquiries, provide calibration and engineering services, send service quotes and certificates, notify you of relevant updates, and improve our website and services. We do not sell or rent your personal information to third parties.",
            },
            {
              title: "3. Information Sharing",
              content:
                "We may share your information with trusted service providers who assist us in operating our website or providing services to you, provided they agree to keep this information confidential. We may also disclose information if required by law or to protect our legal rights.",
            },
            {
              title: "4. Data Security",
              content:
                "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, loss, or misuse. Calibration certificates and technical data are transmitted securely.",
            },
            {
              title: "5. Data Retention",
              content:
                "We retain your personal information for as long as necessary to fulfil the purposes for which it was collected, including satisfying legal, accounting, or reporting requirements. Calibration records are retained in accordance with ISO 17025 requirements (minimum 5 years).",
            },
            {
              title: "6. Your Rights",
              content:
                "You have the right to access, correct, or request deletion of your personal information. To exercise these rights, please contact us at info@expertpower.com.sa.",
            },
            {
              title: "7. Cookies",
              content:
                "Our website may use cookies to enhance your browsing experience. You can control cookie settings through your browser preferences.",
            },
            {
              title: "8. Contact Us",
              content:
                "If you have questions about this Privacy Policy, please contact us at: Expert Power, Al Malaz District, Riyadh, Saudi Arabia | info@expertpower.com.sa | +966114210481",
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
