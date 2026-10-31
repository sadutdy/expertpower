"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useLang } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";

const INDUSTRY_IMAGES: Record<string, string> = {
  "oil-gas": "/images/industries/oil_gas.jpg",
  manufacturing: "/images/industries/manufacturing.jpg",
  energy: "/images/industries/education.jpg",
  education: "/images/industries/energy.jpg",
  construction: "/images/industries/construction.jpg",
  logistics: "/images/industries/logistics.png",
};

const INDUSTRY_ICONS: Record<string, string> = {
  "oil-gas": "⛽",
  manufacturing: "🏭",
  energy: "⚡",
  education: "🔬",
  construction: "🏗️",
  logistics: "🚛",
};

const INDUSTRY_IDS = [
  "oil-gas",
  "manufacturing",
  "energy",
  "education",
  "construction",
  "logistics",
] as const;

export function Industries() {
  const { t, isRTL } = useLang();
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!gridRef.current) return;
    const cards = gridRef.current.querySelectorAll(".industry-card");
    const st = gsap.fromTo(
      cards,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: gridRef.current, start: "top 80%" },
      }
    );
    return () => {
      (st as unknown as { scrollTrigger?: ScrollTrigger }).scrollTrigger?.kill();
    };
  }, []);

  const industries = INDUSTRY_IDS.map((id) => ({
    id,
    name: t.industries.items[id].name,
    description: t.industries.items[id].description,
    image: INDUSTRY_IMAGES[id],
    icon: INDUSTRY_ICONS[id],
  }));

  return (
    <section className="section-padding bg-[#FAFAFA] dark:bg-[#0F172A]">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="text-[#DC2626] font-mono text-sm uppercase tracking-widest">
            {t.industries.eyebrow}
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase mt-4 text-[#0F172A] dark:text-white">
            {t.industries.title}
          </h2>
          <p className="mt-4 text-[#64748B] dark:text-[#94A3B8] max-w-2xl mx-auto">{t.industries.subtitle}</p>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind) => (
            <IndustryCard key={ind.id} industry={ind} exploreLabel={t.industries.explore} isRTL={isRTL} />
          ))}
        </div>
      </div>
    </section>
  );
}

function IndustryCard({
  industry,
  exploreLabel,
  isRTL = false,
}: {
  industry: { id: string; name: string; description: string; image: string; icon: string };
  exploreLabel: string;
  isRTL?: boolean;
}) {
  return (
    <Link
      href={`/industries/${industry.id}`}
      prefetch={false}
      className="industry-card group relative h-[300px] rounded-lg overflow-hidden block"
    >
      <img
        src={industry.image}
        alt={industry.name}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/90 via-[#0F172A]/50 to-[#0F172A]/30 transition-opacity duration-300 group-hover:from-[#0F172A]/80" />
      <div className="absolute inset-0 p-6 flex flex-col justify-between">
        <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-2xl transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#DC2626]">
          {industry.icon}
        </div>
        <div>
          <h3 className="text-xl font-bold text-white mb-2">{industry.name}</h3>
          <p className="text-white/70 text-sm line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
            {industry.description}
          </p>
          <div className="mt-3 flex items-center gap-2 text-[#DC2626] font-medium text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
            {exploreLabel}
            <ArrowRight className={cn("w-4 h-4", isRTL && "rotate-180")} />
          </div>
        </div>
      </div>
    </Link>
  );
}
