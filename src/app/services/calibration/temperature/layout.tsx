import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute:
      "Temperature Calibration Services | RTDs, Thermocouples, IR & Thermal Imagers | Expert Power",
  },
  description:
    "Precision temperature calibration for RTDs, thermocouples, digital thermometers, infrared thermometers, transmitters, controllers, dry blocks, and calibration baths in Saudi Arabia.",
  alternates: {
    canonical: "https://expertpower.com.sa/services/calibration/temperature/",
  },
  openGraph: {
    title:
      "Temperature Calibration Services | RTDs, Thermocouples, IR & Thermal Imagers | Expert Power",
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
