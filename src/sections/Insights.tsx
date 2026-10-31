"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useLang } from "@/contexts/LanguageContext";

const ARTICLE_IDS = ["1", "2", "3"] as const;
const ARTICLE_IMAGES: Record<string, string> = {
  "1": "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80",
  "2": "/images/industries/oil_gas.jpg",
  "3": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
};
const ARTICLE_SLUGS: Record<string, string> = {
  "1": "/insights/iso-17025-guide",
  "2": "/insights/oil-gas-calibration",
  "3": "/insights/digital-calibration",
};

export function Insights() {
  const { t } = useLang();
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardsRef.current) return;
    const cards = cardsRef.current.querySelectorAll(".insight-card");
    const anim = gsap.fromTo(
      cards,
      { y: 30, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power3.out",
        scrollTrigger: { trigger: cardsRef.current, start: "top 80%" },
      }
    );
    return () => {
      (anim as unknown as { scrollTrigger?: ScrollTrigger }).scrollTrigger?.kill();
    };
  }, []);

  return (
    <section className="section-padding bg-[#FAFAFA] dark:bg-[#0F172A]">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <span className="text-[#DC2626] font-mono text-sm uppercase tracking-widest">
              {t.insights.eyebrow}
            </span>
            <h2 className="text-4xl md:text-5xl font-black uppercase mt-4 text-[#0F172A] dark:text-white">
              {t.insights.title}
            </h2>
          </div>
          <Link
            href="/insights"
            prefetch={false}
            className="mt-4 md:mt-0 inline-flex items-center gap-2 text-[#DC2626] font-medium hover:gap-3 transition-all"
          >
            {t.insights.viewAll}
            <ArrowUpRight className="w-5 h-5" />
          </Link>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ARTICLE_IDS.map((id) => {
            const article = t.insights.articles[id];
            return (
              <Link key={id} href={ARTICLE_SLUGS[id]} prefetch={false} className="insight-card group block">
                <div className="relative h-[240px] rounded-lg overflow-hidden mb-4">
                  <img
                    src={ARTICLE_IMAGES[id]}
                    alt={article.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div>
                  <span className="inline-block px-3 py-1 bg-[#DC2626]/10 text-[#DC2626] text-xs font-semibold uppercase tracking-wider rounded-full mb-3">
                    {article.category}
                  </span>
                  <h3 className="text-xl font-bold text-[#0F172A] dark:text-white group-hover:text-[#DC2626] transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="mt-2 text-[#64748B] dark:text-[#94A3B8] text-sm line-clamp-2">{article.excerpt}</p>
                  <div className="mt-4 flex items-center gap-2 text-[#DC2626] font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    {t.insights.readArticle}
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
