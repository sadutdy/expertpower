import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute:
      "Temperature Calibration Services | Expert Power",
  },
  description:
    "Precision temperature calibration for RTDs, thermocouples, thermometers, dry blocks and calibration baths in Saudi Arabia.",
  alternates: {
    canonical: "https://expertpower.com.sa/services/calibration/temperature/",
  },
  openGraph: {
    images: [{ url: "/og-default.jpg", width: 1200, height: 630 }],
    title:
      "Temperature Calibration Services | Expert Power",
    description:
      "Precision temperature calibration for RTDs, thermocouples, IR thermometers, thermal imagers, transmitters, controllers, dry blocks, and calibration baths in Saudi Arabia.",
    url: "https://expertpower.com.sa/services/calibration/temperature/",
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
