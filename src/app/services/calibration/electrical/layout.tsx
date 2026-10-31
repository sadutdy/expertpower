import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute:
      "Electrical Calibration Services | Multimeters, Oscilloscopes, Relay Testers | Expert Power",
  },
  description:
    "Accredited electrical calibration for multimeters, clamp meters, oscilloscopes, power analyzers, insulation testers, relay test sets, and high-voltage equipment in Saudi Arabia.",
  alternates: {
    canonical: "https://expertpower.com.sa/services/calibration/electrical/",
  },
  openGraph: {
    title:
      "Electrical Calibration Services | Multimeters, Oscilloscopes, Relay Testers | Expert Power",
    description:
      "Accredited electrical calibration for multimeters, clamp meters, oscilloscopes, power analyzers, insulation testers, and relay test sets in Saudi Arabia.",
    url: "https://expertpower.com.sa/services/calibration/electrical/",
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
