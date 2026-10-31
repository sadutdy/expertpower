"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { ChevronDown, ArrowRight, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { MagneticButton } from "@/components/MagneticButton";
import { useLang } from "@/contexts/LanguageContext";

import { cn } from "@/lib/utils";

export function Hero() {
  const { t, isRTL } = useLang();

  const heroRef = useRef<HTMLDivElement>(null);
  const line1Ref = useRef<HTMLDivElement>(null);
  const line2Ref = useRef<HTMLDivElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set([line1Ref.current, line2Ref.current], { y: "100%", opacity: 0 });
      gsap.set(subtextRef.current, { opacity: 0, y: 20 });
      gsap.set(ctaRef.current, { opacity: 0, y: 20 });
      gsap.set(scrollIndicatorRef.current, { opacity: 0, y: 20 });

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.to(line1Ref.current, { y: "0%", opacity: 1, duration: 1, delay: 0.2 })
        .to(line2Ref.current, { y: "0%", opacity: 1, duration: 1 }, "-=0.75")
        .to(subtextRef.current, { opacity: 1, y: 0, duration: 0.8 }, "-=0.6")
        .to(ctaRef.current, { opacity: 1, y: 0, duration: 0.6 }, "-=0.4")
        .to(scrollIndicatorRef.current, { opacity: 1, y: 0, duration: 0.6 }, "-=0.3");
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToSection = () => {
    const el = document.getElementById("statistics");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Video */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover scale-110"
          poster="/assets/hero-bg.jpg"
          aria-hidden="true"
        >
          <source src="/assets/hero-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A]/70 via-[#0F172A]/50 to-[#0F172A]/90" />
      </div>

      {/* Interactive Watermark Cover — Magnetic ISO Badge */}
      <div className="absolute bottom-6 right-6 z-20 hidden md:block">
        <MagneticButton
          href="/accreditation"
          strength={0.4}
          className="group flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white/90 text-sm font-medium shadow-lg hover:bg-white/20 hover:border-white/40 transition-colors"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
          </span>
          <ShieldCheck className="w-4 h-4 text-emerald-400 group-hover:text-emerald-300 transition-colors" />
          <span className="group-hover:text-white transition-colors">ISO 17025 Live</span>
        </MagneticButton>
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center pt-20">
        {/* ISO Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm">
            <span className="w-2 h-2 bg-[#DC2626] rounded-full animate-pulse" />
            {t.hero.badge}
          </span>
        </motion.div>

        {/* Headlines */}
        <div className="mb-8">
          <div className="overflow-hidden">
            <div ref={line1Ref}>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[100px] font-black uppercase leading-[0.95] tracking-tight text-white">
                {t.hero.line1}
              </h1>
            </div>
          </div>
          <div className="overflow-hidden mt-2">
            <div ref={line2Ref}>
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px] font-black uppercase leading-[0.95] tracking-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DC2626] to-[#EF4444]">
                  {t.hero.line2part1}
                </span>
                <span className="text-white"> {t.hero.line2and} </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DC2626] to-[#EF4444]">
                  {t.hero.line2part2}
                </span>
                <span className="text-white"> {t.hero.line2end}</span>
              </h2>
            </div>
          </div>
        </div>

        {/* Subtitle */}
        <p
          ref={subtextRef}
          className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-8 font-light"
        >
          {t.hero.subtitle}
        </p>

        {/* CTA Buttons */}
        <div ref={ctaRef} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <MagneticButton href="/services" className="group px-8 py-4 bg-[#DC2626] text-white rounded-lg font-semibold text-lg flex items-center gap-2 hover:bg-[#B91C1C] transition-all duration-300 shadow-lg shadow-[#DC2626]/20">
            {t.hero.ctaPrimary}
            <ArrowRight className={cn("w-5 h-5 transition-transform duration-300", isRTL ? "rotate-180 group-hover:-translate-x-1" : "group-hover:translate-x-1")} />
          </MagneticButton>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        ref={scrollIndicatorRef}
        onClick={scrollToSection}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 cursor-pointer"
      >
        <div className="flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors duration-300">
          <span className="text-xs uppercase tracking-widest font-mono">{t.hero.scroll}</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
