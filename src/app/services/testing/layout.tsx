import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute:
      "Testing & Analysis Services | Electrical Safety & Performance Testing | Expert Power",
  },
  description:
    "Advanced testing and analysis services including electrical safety testing, performance testing, quality assurance testing, and compliance verification in Saudi Arabia.",
  alternates: {
    canonical: "https://expertpower.com.sa/services/testing/",
  },
  openGraph: {
    title:
      "Testing & Analysis Services | Electrical Safety & Performance Testing | Expert Power",
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
