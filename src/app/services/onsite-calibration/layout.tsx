import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute:
      "Onsite Calibration Services | Field Calibration Across Saudi Arabia | Expert Power",
  },
  description:
    "Onsite calibration services for industrial plants, commercial buildings, power & energy facilities, and transportation & logistics centers across Saudi Arabia.",
  alternates: {
    canonical: "https://expertpower.com.sa/services/onsite-calibration/",
  },
  openGraph: {
    title:
      "Onsite Calibration Services | Field Calibration Across Saudi Arabia | Expert Power",
    description:
      "Onsite calibration services for industrial plants, commercial buildings, power & energy, and transportation & logistics centers across Saudi Arabia.",
    url: "https://expertpower.com.sa/services/onsite-calibration/",
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
