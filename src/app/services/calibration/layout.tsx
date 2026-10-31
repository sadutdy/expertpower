import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute:
      "Calibration Services | Electrical, Mechanical, Temperature, Pressure & Dimensional | Expert Power",
  },
  description:
    "ISO 17025 accredited calibration services for electrical, mechanical, temperature, pressure, and dimensional instruments across Saudi Arabia.",
  alternates: {
    canonical: "https://expertpower.com.sa/services/calibration/",
  },
  openGraph: {
    title:
      "Calibration Services | Electrical, Mechanical, Temperature, Pressure & Dimensional | Expert Power",
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
