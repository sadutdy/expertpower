import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute:
      "Mobile Calibration & Testing Vans | Expert Power",
  },
  description:
    "Custom mobile calibration and testing vans with integrated power, climate control and anti-vibration racks for field work in Saudi Arabia.",
  alternates: {
    canonical: "https://expertpower.com.sa/services/van-services/",
  },
  openGraph: {
    images: [{ url: "/og-default.jpg", width: 1200, height: 630 }],
    title:
      "Mobile Calibration & Testing Vans | Expert Power",
    description:
      "Custom mobile calibration and testing vehicles with integrated power, climate control, and premium test equipment for field operations in Saudi Arabia.",
    url: "https://expertpower.com.sa/services/van-services/",
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
