import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute:
      "Electrical Calibration Services | Expert Power",
  },
  description:
    "Accredited electrical calibration for multimeters, clamp meters, oscilloscopes, insulation testers and relay test sets in Saudi Arabia.",
  alternates: {
    canonical: "https://expertpower.com.sa/services/calibration/electrical/",
  },
  openGraph: {
    images: [{ url: "/og-default.jpg", width: 1200, height: 630 }],
    title:
      "Electrical Calibration Services | Expert Power",
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
