import type { Metadata } from "next";
import { Inter, Space_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { LiveChat } from "@/components/LiveChat";
import { ChunkErrorHandler } from "@/components/ChunkErrorHandler";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Expert Power | SAAC & SASO Accredited Calibration Lab in Saudi Arabia",
    template: "%s | Expert Power",
  },
  description:
    "SAAC accredited and SASO licensed ISO 17025 calibration lab in Saudi Arabia. Calibration, testing, electrical instrument repair and service, and cable fault detection van service for oil & gas, energy, manufacturing and construction.",
  keywords: [
    "calibration",
    "SAAC accredited calibration lab in Saudi Arabia",
    "SASO accredited lab in Saudi Arabia",
    "electrical instrument repair and service in Saudi Arabia",
    "cable fault detection van service in Saudi Arabia",
    "rental instruments in Saudi Arabia",
    "ISO 17025",
    "ISO 9001",
    "ISO 45001",
    "ISO 14001",
    "Saudi Arabia",
    "laboratory",
    "precision",
    "engineering",
    "testing",
    "inspection",
    "rental",
    "maintenance",
    "Riyadh",
    "Dammam",
    "QAI",
    "ILAC MRA",
    "SASO",
    "معايرة",
    "مختبر",
    "اختبار",
    "صيانة",
  ],
  authors: [{ name: "Expert Power" }],
  metadataBase: new URL("https://expertpower.com.sa"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Expert Power | Precision Calibration Excellence",
    description:
      "Saudi Arabia's leading ISO 17025 accredited calibration laboratory. Precision calibration, testing, inspection, rental, maintenance, and repair services.",
    type: "website",
    locale: "en_SA",
    siteName: "Expert Power",
  },
  twitter: {
    card: "summary_large_image",
    title: "Expert Power | ISO 17025 Calibration Laboratory Saudi Arabia",
    description:
      "Saudi Arabia's leading ISO 17025 accredited calibration laboratory. Precision calibration, testing, inspection, rental, maintenance, and repair services.",
  },
  robots: { index: true, follow: true },
};

const siteStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://expertpower.com.sa/#website",
      url: "https://expertpower.com.sa/",
      name: "Expert Power",
      inLanguage: ["en", "ar"],
      publisher: { "@id": "https://expertpower.com.sa/#organization" },
    },
    {
      "@type": ["Organization", "LocalBusiness"],
      "@id": "https://expertpower.com.sa/#organization",
      name: "Expert Power",
      url: "https://expertpower.com.sa/",
      logo: "https://expertpower.com.sa/assets/Logo.png",
      image: "https://expertpower.com.sa/assets/lab.jpg",
      description:
        "SAAC accredited and SASO licensed ISO 17025 calibration laboratory in Saudi Arabia. Calibration, testing, inspection, electrical instrument repair and service, and cable fault detection van services.",
      email: "info@expertpower.com.sa",
      telephone: "+966114210481",
      areaServed: { "@type": "Country", name: "Saudi Arabia" },
      address: {
        "@type": "PostalAddress",
        streetAddress: "Sitteen Street, Al Malaz",
        addressLocality: "Riyadh",
        postalCode: "11438",
        addressCountry: "SA",
      },
      location: [
        {
          "@type": "Place",
          name: "Expert Power Dammam Branch",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Daharan – Jubail Expressway, Al Badia District",
            addressLocality: "Dammam",
            postalCode: "32656",
            addressCountry: "SA",
          },
        },
      ],
      knowsAbout: [
        "SAAC accredited calibration",
        "SASO accredited laboratory",
        "Electrical instrument repair and service",
        "Cable fault detection van service",
      ],
      sameAs: [
        "https://www.linkedin.com/company/expert-power-measurement-and-calibration/",
        "https://twitter.com/expertpowersa",
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceMono.variable} antialiased`}>
      <body className="min-h-screen flex flex-col bg-[#FAFAFA] dark:bg-[#0F172A] text-[#0F172A] dark:text-white font-sans transition-colors duration-300">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteStructuredData) }}
        />
        <ThemeProvider>
          <LanguageProvider>
            <ChunkErrorHandler />
            <SmoothScroll>
              <Navbar />
              <main className="flex-1">{children}</main>
              <Footer />
              <WhatsAppButton />
              <LiveChat />
            </SmoothScroll>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
