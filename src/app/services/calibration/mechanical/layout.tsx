import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute:
      "Mechanical Calibration Services | Torque, Force, Pressure, Flow & Vibration | Expert Power",
  },
  description:
    "ISO 17025 mechanical calibration for torque wrenches, force gauges, pressure gauges, flow meters, sound meters, vibration meters, tachometers, and hardness testers in Saudi Arabia.",
  alternates: {
    canonical: "https://expertpower.com.sa/services/calibration/mechanical/",
  },
  openGraph: {
    title:
      "Mechanical Calibration Services | Torque, Force, Pressure, Flow & Vibration | Expert Power",
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
