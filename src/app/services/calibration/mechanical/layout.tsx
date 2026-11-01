import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute:
      "Mechanical Calibration Services | Expert Power",
  },
  description:
    "ISO 17025 mechanical calibration for torque wrenches, force gauges, flow meters, vibration meters and tachometers in Saudi Arabia.",
  alternates: {
    canonical: "https://expertpower.com.sa/services/calibration/mechanical/",
  },
  openGraph: {
    images: [{ url: "/og-default.jpg", width: 1200, height: 630 }],
    title:
      "Mechanical Calibration Services | Expert Power",
    description:
      "ISO 17025 mechanical calibration for torque, force, pressure, flow, sound, vibration, speed, and analytical instruments in Saudi Arabia.",
    url: "https://expertpower.com.sa/services/calibration/mechanical/",
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
