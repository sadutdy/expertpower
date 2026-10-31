import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute:
      "Maintenance & Support Services | Preventive & Corrective Maintenance | Expert Power",
  },
  description:
    "Comprehensive maintenance programs, emergency repairs, spare parts supply, equipment refurbishment, and annual maintenance contracts to keep your equipment running.",
  alternates: {
    canonical: "https://expertpower.com.sa/services/maintenance/",
  },
  openGraph: {
    title:
      "Maintenance & Support Services | Preventive & Corrective Maintenance | Expert Power",
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
