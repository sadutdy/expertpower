import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute:
      "Calibration Services in Saudi Arabia | Expert Power",
  },
  description:
    "ISO 17025 accredited calibration services for electrical, mechanical, temperature, pressure, and dimensional instruments across Saudi Arabia.",
  alternates: {
    canonical: "https://expertpower.com.sa/services/calibration/",
  },
  openGraph: {
    images: [{ url: "/og-default.jpg", width: 1200, height: 630 }],
    title:
      "Calibration Services in Saudi Arabia | Expert Power",
    description:
      "ISO 17025 accredited calibration services for electrical, mechanical, temperature, pressure, and dimensional instruments in Saudi Arabia.",
    url: "https://expertpower.com.sa/services/calibration/",
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
