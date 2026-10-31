import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute:
      "Pressure Calibration Services | Gauges, Transmitters, Switches & Vacuum | Expert Power",
  },
  description:
    "Accurate pressure calibration for digital gauges, transmitters, switches, differential pressure, vacuum gauges, barometers, PRVs, and pressure calibrators in Saudi Arabia.",
  alternates: {
    canonical: "https://expertpower.com.sa/services/calibration/pressure/",
  },
  openGraph: {
    title:
      "Pressure Calibration Services | Gauges, Transmitters, Switches & Vacuum | Expert Power",
    description:
      "Accurate pressure calibration for gauges, transmitters, switches, differential pressure, vacuum gauges, barometers, PRVs, and pressure calibrators in Saudi Arabia.",
    url: "https://expertpower.com.sa/services/calibration/pressure/",
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
