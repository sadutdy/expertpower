import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute:
      "Building Management System (BMS) Solutions | Expert Power",
  },
  description:
    "Building Management System (BMS) solutions with Wizard Engineering for commercial, industrial and healthcare projects across Saudi Arabia.",
  alternates: {
    canonical: "https://expertpower.com.sa/services/bms/",
  },
  openGraph: {
    images: [{ url: "/og-default.jpg", width: 1200, height: 630 }],
    title:
      "Building Management System (BMS) Solutions | Expert Power",
    description:
      "BMS solutions in partnership with Wizard Engineering for commercial, industrial, healthcare, and infrastructure projects across Saudi Arabia.",
    url: "https://expertpower.com.sa/services/bms/",
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
