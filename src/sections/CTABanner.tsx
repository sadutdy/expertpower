"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { MagneticButton } from "@/components/MagneticButton";
import { useLang } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";

export function CTABanner() {
  const { t, isRTL } = useLang();
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !contentRef.current) return;
    const anim = gsap.fromTo(
      contentRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 70%" },
      }
    );
    return () => {
      (anim as unknown as { scrollTrigger?: ScrollTrigger }).scrollTrigger?.kill();
    };
  }, []);

  const trustItems = [
    t.cta.trust.iso,
    t.cta.trust.sameDay,
    t.cta.trust.nationwide,
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-[#0F172A] overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#DC2626]/20 rounded-full blur-[128px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#1E40AF]/20 rounded-full blur-[128px]" />

      <div ref={contentRef} className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase text-white mb-6">
            {t.cta.title}
          </h2>
          <p className="text-lg md:text-xl text-white/70 mb-10 max-w-xl mx-auto">
            {t.cta.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <MagneticButton href="/services" className="group px-8 py-4 bg-[#DC2626] text-white rounded font-bold text-lg flex items-center gap-2 hover:bg-[#B91C1C] transition-colors">
              {t.cta.primary}
              <ArrowRight className={cn("w-5 h-5 transition-transform", isRTL ? "rotate-180 group-hover:-translate-x-1" : "group-hover:translate-x-1")} />
            </MagneticButton>
            <MagneticButton href="/contact" className="px-8 py-4 bg-transparent text-white border-2 border-white/30 rounded font-bold text-lg hover:bg-white/10 hover:border-white transition-all">
              {t.cta.secondary}
            </MagneticButton>
          </div>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-white/50 text-sm">
            {trustItems.map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#059669]" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
