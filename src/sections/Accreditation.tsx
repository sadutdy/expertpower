"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { Shield, CheckCircle2, Heart, Leaf, Landmark, Award, FileCheck } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";

const ACCREDITATION_ICONS = {
  iso17025: Shield,
  iso9001: CheckCircle2,
  iso45001: Heart,
  iso14001: Leaf,
  saac: Landmark,
  qai: Award,
  saso: FileCheck,
} as const;

type AccrKey = keyof typeof ACCREDITATION_ICONS;
const ACCR_KEYS: AccrKey[] = ["iso17025", "iso9001", "iso45001", "iso14001", "saac", "qai", "saso"];

export function Accreditation() {
  const { t } = useLang();
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardsRef.current) return;
    const cards = cardsRef.current.querySelectorAll(".accr-card");
    const anim = gsap.fromTo(
      cards,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: { trigger: cardsRef.current, start: "top 80%" },
      }
    );
    return () => {
      (anim as unknown as { scrollTrigger?: ScrollTrigger }).scrollTrigger?.kill();
    };
  }, []);

  return (
    <section className="py-20 bg-[#0F172A]">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="text-[#DC2626] font-mono text-sm uppercase tracking-widest">
            {t.accreditation.eyebrow}
          </span>
          <h2 className="text-3xl md:text-4xl font-black uppercase mt-4 text-white">
            {t.accreditation.title}
          </h2>
          <p className="mt-3 text-white/60 max-w-xl mx-auto">
            {t.accreditation.subtitle}
          </p>
        </div>

        <div ref={cardsRef} className="flex flex-wrap justify-center gap-4">
          {ACCR_KEYS.map((key) => {
            const Icon = ACCREDITATION_ICONS[key];
            const item = t.accreditation.items[key];
            return (
              <div
                key={key}
                className="accr-card w-[calc(50%-0.5rem)] sm:w-[calc(33.333%-0.667rem)] lg:w-[calc(25%-0.75rem)] group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#DC2626]/50 rounded-xl p-4 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-[#DC2626]/10 group-hover:bg-[#DC2626] flex items-center justify-center mb-4 transition-colors duration-300">
                  <Icon className="w-5 h-5 text-[#DC2626] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-sm font-black text-white mb-1.5 leading-tight">{item.title}</h3>
                <p className="text-white/60 text-xs leading-relaxed">{item.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
