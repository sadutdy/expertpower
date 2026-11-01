import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute:
      "Maintenance & Support Services | Expert Power",
  },
  description:
    "Maintenance programs, emergency repairs, spare parts, refurbishment and annual contracts to keep your equipment running.",
  alternates: {
    canonical: "https://expertpower.com.sa/services/maintenance/",
  },
  openGraph: {
    images: [{ url: "/og-default.jpg", width: 1200, height: 630 }],
    title:
      "Maintenance & Support Services | Expert Power",
    description:
      "Comprehensive maintenance programs, emergency repairs, spare parts supply, and annual maintenance contracts for industrial equipment in Saudi Arabia.",
    url: "https://expertpower.com.sa/services/maintenance/",
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
