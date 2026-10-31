import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute:
      "Rental Instruments in Saudi Arabia | Test Equipment Rental | Expert Power",
  },
  description:
    "Rental instruments in Saudi Arabia: rent electrical, high-voltage, relay, transformer, cable fault, battery, and temperature testing equipment from Expert Power.",
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
    title:
      "Rental Instruments in Saudi Arabia | Test Equipment Rental | Expert Power",
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
