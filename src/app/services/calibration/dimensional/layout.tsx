import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute:
      "Dimensional Calibration Services | Calipers, Micrometers, Gauges & Tapes | Expert Power",
  },
  description:
    "High-precision dimensional calibration for vernier calipers, micrometers, measuring tapes, scales, coating thickness gauges, levels, and crimping tools in Saudi Arabia.",
  alternates: {
    canonical: "https://expertpower.com.sa/services/calibration/dimensional/",
  },
  openGraph: {
    title:
      "Dimensional Calibration Services | Calipers, Micrometers, Gauges & Tapes | Expert Power",
    description:
      "High-precision dimensional calibration for calipers, micrometers, measuring tapes, scales, coating thickness gauges, levels, and crimping tools in Saudi Arabia.",
    url: "https://expertpower.com.sa/services/calibration/dimensional/",
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
