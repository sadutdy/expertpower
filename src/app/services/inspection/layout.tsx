import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute:
      "Inspection & Verification Services | Expert Power",
  },
  description:
    "Independent inspection and verification services for general equipment, lifting equipment, lifting gear, accessories, and electrical systems in Saudi Arabia.",
  alternates: {
    canonical: "https://expertpower.com.sa/services/inspection/",
  },
  openGraph: {
    images: [{ url: "/og-default.jpg", width: 1200, height: 630 }],
    title:
      "Inspection & Verification Services | Expert Power",
    description:
      "Independent inspection and verification services for general equipment, lifting equipment, lifting gear, and electrical systems in Saudi Arabia.",
    url: "https://expertpower.com.sa/services/inspection/",
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
