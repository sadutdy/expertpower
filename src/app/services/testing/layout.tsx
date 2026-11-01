import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute:
      "Testing & Analysis Services | Expert Power",
  },
  description:
    "Testing and analysis services: electrical safety, performance and quality assurance testing, and compliance verification in Saudi Arabia.",
  alternates: {
    canonical: "https://expertpower.com.sa/services/testing/",
  },
  openGraph: {
    images: [{ url: "/og-default.jpg", width: 1200, height: 630 }],
    title:
      "Testing & Analysis Services | Expert Power",
    description:
      "Advanced testing and analysis services including electrical safety testing, performance testing, quality assurance, and compliance verification in Saudi Arabia.",
    url: "https://expertpower.com.sa/services/testing/",
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
