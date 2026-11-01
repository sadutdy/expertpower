import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, ArrowRight } from "lucide-react";
import { notFound } from "next/navigation";

const industries: Record<string, { name: string; icon: string; image: string; description: string; longDescription: string; services: string[] }> = {
  "oil-gas": { name: "Oil & Gas", icon: "⛽", image: "/images/industries/oil_gas.jpg", description: "Precision instrumentation for upstream and downstream operations.", longDescription: "Calibration and testing services for upstream, midstream and downstream oil and gas operators across Saudi Arabia, to international standards.", services: ["Pressure transmitter calibration","Flow meter calibration","Temperature sensor calibration","Analytical instrument calibration","Safety valve testing","Onsite mobile calibration"] },
  "manufacturing": { name: "Manufacturing", icon: "🏭", image: "/images/industries/manufacturing.jpg", description: "Quality control and process optimization solutions.", longDescription: "Calibration, testing and inspection for Saudi manufacturers, aligned with ISO 9001 quality management requirements.", services: ["Dimensional measurement calibration","Torque and force calibration","Electrical instrument calibration","CMM verification","Preventive maintenance programs"] },
  "energy": { name: "Energy & Power", icon: "⚡", image: "/images/industries/education.jpg", description: "Electrical testing and power system calibration.", longDescription: "Electrical calibration, high-voltage testing and energy meter verification for power generation, transmission and distribution in Saudi Arabia.", services: ["Energy meter calibration","Power quality analysis","High-voltage testing","Protection relay testing","Electrical safety testing"] },
  "education": { name: "Education & Labs", icon: "🔬", image: "/images/industries/energy.jpg", description: "Laboratory equipment calibration for research institutions.", longDescription: "ISO 17025 traceable calibration for universities, research institutes and educational laboratories in Saudi Arabia.", services: ["Analytical balance calibration","Temperature calibration","Pressure calibration","Electrical measurement calibration","Dimensional calibration"] },
  "construction": { name: "Construction", icon: "🏗️", image: "/images/industries/construction.jpg", description: "Testing and calibration for construction equipment.", longDescription: "Calibration and testing for construction and civil engineering equipment: accurate measurement for safety, compliance and quality control.", services: ["Torque wrench calibration","Load cell calibration","Survey equipment calibration","Environmental monitoring calibration","Inspection services"] },
  "logistics": { name: "Logistics & Transportation", icon: "🚛", image: "/images/industries/logistics.png", description: "Fleet maintenance and logistics equipment services.", longDescription: "Calibration of weighing systems, fuel meters and vehicle diagnostic equipment for logistics and transportation companies in Saudi Arabia.", services: ["Weighbridge calibration","Temperature monitoring calibration"] },
};

export async function generateStaticParams() {
  return Object.keys(industries).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const industry = industries[slug];
  if (!industry) return { title: "Industry Not Found" };
  const title = `${industry.name} Calibration & Testing | Expert Power`;
  return {
    title,
    description: industry.longDescription,
    alternates: {
      canonical: `https://expertpower.com.sa/industries/${slug}/`,
    },
    openGraph: {
      images: [{ url: "/og-default.jpg", width: 1200, height: 630 }],
      title,
      description: industry.longDescription,
      url: `https://expertpower.com.sa/industries/${slug}/`,
      type: "website",
      locale: "en_SA",
      siteName: "Expert Power",
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function IndustryDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const industry = industries[slug];
  if (!industry) notFound();

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `https://expertpower.com.sa/industries/${slug}/`,
        url: `https://expertpower.com.sa/industries/${slug}/`,
        name: `${industry.name} Calibration & Testing | Expert Power`,
        description: industry.longDescription,
        isPartOf: {
          "@id": "https://expertpower.com.sa/",
        },
        breadcrumb: {
          "@id": `https://expertpower.com.sa/industries/${slug}/#breadcrumb`,
        },
        inLanguage: "en",
      },
      {
        "@type": "BreadcrumbList",
        "@id": `https://expertpower.com.sa/industries/${slug}/#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://expertpower.com.sa/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Industries",
            item: "https://expertpower.com.sa/industries/",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: industry.name,
            item: `https://expertpower.com.sa/industries/${slug}/`,
          },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] dark:bg-[#0F172A]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="relative h-[60vh] overflow-hidden">
        <img src={industry.image} alt={industry.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 container-custom pb-16 pt-32">
          <div className="text-5xl mb-4">{industry.icon}</div>
          <h1 className="text-4xl md:text-6xl font-black uppercase text-white mb-4">{industry.name}</h1>
          <p className="text-white/70 text-xl max-w-xl">{industry.description}</p>
        </div>
      </div>
      <div className="container-custom py-16">
        <Link href="/industries" prefetch={false} className="inline-flex items-center gap-2 text-[#DC2626] font-medium mb-10 hover:gap-3 transition-all">
          <ArrowLeft className="w-4 h-4" /> All Industries
        </Link>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-black uppercase text-[#0F172A] dark:text-white mb-6">Our Approach</h2>
            <p className="text-[#64748B] dark:text-[#94A3B8] leading-relaxed text-lg mb-12">{industry.longDescription}</p>
            <h2 className="text-2xl font-black uppercase text-[#0F172A] dark:text-white mb-6">Services We Provide</h2>
            <ul className="space-y-3">
              {industry.services.map((s) => (<li key={s} className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-[#059669] flex-shrink-0" /><span className="text-[#64748B] dark:text-[#94A3B8]">{s}</span></li>))}
            </ul>
          </div>
          <div className="space-y-6">
            <div className="bg-[#0F172A] rounded-xl p-6">
              <h3 className="font-black text-white uppercase mb-3">Contact Us</h3>
              <p className="text-white/60 text-sm mb-4">Contact us for a customized calibration plan.</p>
              <Link href="/contact" prefetch={false} className="flex items-center justify-center gap-2 w-full py-3 bg-[#DC2626] text-white rounded-lg font-semibold hover:bg-[#B91C1C] transition-colors">
                Get in Touch <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
