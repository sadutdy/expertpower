"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { Cpu, Users, Clock, CheckCircle2, Zap, Wrench, FileCheck, Lock } from "lucide-react";
import Link from "next/link";
import { useLang } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";

const FEATURE_ICONS = { equipment: Cpu, engineers: Users, accreditations: Zap, rental: Wrench, certificate: FileCheck, digitalVault: Lock, turnaround: Clock } as const;
type FeatureKey = keyof typeof FEATURE_ICONS;
const FEATURE_KEYS: FeatureKey[] = ["equipment", "engineers", "accreditations", "rental", "certificate", "digitalVault", "turnaround"];

export function WhyChooseUs() {
  const { t, isRTL } = useLang();
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !imageRef.current || !featuresRef.current) return;

    const img = imageRef.current.querySelector("img");
    const parallax = gsap.to(img, {
      yPercent: 20,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    const featureItems = featuresRef.current.querySelectorAll(".feature-item");
    const animations = Array.from(featureItems).map((item, index) =>
      gsap.fromTo(
        item,
        { x: isRTL ? -50 : 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          delay: index * 0.15,
          ease: "power3.out",
          scrollTrigger: { trigger: item, start: "top 85%" },
        }
      )
    );

    return () => {
      (parallax as unknown as { scrollTrigger?: ScrollTrigger }).scrollTrigger?.kill();
      animations.forEach((a) => {
        (a as unknown as { scrollTrigger?: ScrollTrigger }).scrollTrigger?.kill();
      });
    };
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-[#FAFAFA] dark:bg-[#0F172A] overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div ref={imageRef} className="relative">
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
              <img
                src="/assets/lab.jpg"
                alt="Expert Power ISO 17025 accredited calibration laboratory in Riyadh, Saudi Arabia"
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className={cn("absolute w-48 h-48 bg-[#DC2626] rounded-lg -z-10", isRTL ? "-bottom-6 -left-6" : "-bottom-6 -right-6")} />
            </div>
            <Link
              href="/accreditation"
              prefetch={false}
              className={cn("absolute bg-white dark:bg-[#1E293B] rounded-lg shadow-xl p-6 max-w-[200px] hover:shadow-2xl hover:scale-105 transition-all duration-300", isRTL ? "-bottom-4 -right-4 lg:bottom-8 lg:-right-8" : "-bottom-4 -left-4 lg:bottom-8 lg:-left-8")}
            >
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle2 className="w-5 h-5 text-[#059669]" />
                <span className="font-bold text-[#0F172A] dark:text-white">{t.whyChooseUs.certified}</span>
              </div>
              <p className="text-sm text-[#64748B] dark:text-[#94A3B8]">{t.whyChooseUs.certifiedLabel}</p>
            </Link>
          </div>

          {/* Features */}
          <div ref={featuresRef}>
            <span className="text-[#DC2626] font-mono text-sm uppercase tracking-widest">
              {t.whyChooseUs.eyebrow}
            </span>
            <h2 className="text-4xl md:text-5xl font-black uppercase mt-4 mb-8 text-[#0F172A] dark:text-white">
              {t.whyChooseUs.title}
            </h2>
            <p className="text-[#64748B] dark:text-[#94A3B8] mb-12 max-w-lg">{t.whyChooseUs.subtitle}</p>

            <div className="space-y-6">
              {FEATURE_KEYS.map((key) => {
                const Icon = FEATURE_ICONS[key];
                return (
                  <div
                    key={key}
                    className="feature-item flex gap-4 p-4 rounded-lg hover:bg-white dark:hover:bg-[#1E293B] hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-[#DC2626]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#DC2626] transition-colors">
                      <Icon className="w-6 h-6 text-[#DC2626] group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#0F172A] dark:text-white text-lg">
                        {t.whyChooseUs.features[key].title}
                      </h3>
                      <p className="text-[#64748B] dark:text-[#94A3B8] text-sm mt-1">
                        {t.whyChooseUs.features[key].description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
