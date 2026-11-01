import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute:
      "Rental Instruments in Saudi Arabia | Expert Power",
  },
  description:
    "Rental instruments in Saudi Arabia: electrical, high-voltage, relay, transformer, cable fault and temperature test equipment.",
  keywords: [
    "rental instruments in Saudi Arabia",
    "test equipment rental Saudi Arabia",
    "instruments for hire Saudi Arabia",
    "تأجير أجهزة القياس في السعودية",
  ],
  alternates: {
    canonical: "https://expertpower.com.sa/services/rental/",
  },
  openGraph: {
    images: [{ url: "/og-default.jpg", width: 1200, height: 630 }],
    title:
      "Rental Instruments in Saudi Arabia | Expert Power",
    description:
      "Rent calibrated test and measurement equipment for electrical, high-voltage, relay, transformer, cable fault, and temperature applications in Saudi Arabia.",
    url: "https://expertpower.com.sa/services/rental/",
    type: "website",
    locale: "en_SA",
    siteName: "Expert Power",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
