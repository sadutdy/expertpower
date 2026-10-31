import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute:
      "Mobile Van Services | On-Site Calibration & Testing Vehicles | Expert Power",
  },
  description:
    "Custom mobile calibration and testing vehicles with integrated power, climate control, anti-vibration racks, and premium test equipment for field operations in Saudi Arabia.",
  alternates: {
    canonical: "https://expertpower.com.sa/services/van-services/",
  },
  openGraph: {
    title:
      "Mobile Van Services | On-Site Calibration & Testing Vehicles | Expert Power",
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
