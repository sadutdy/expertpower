"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { useLang } from "@/contexts/LanguageContext";

const STATS = [
  { value: 12, suffix: "+", key: "years" as const },
  { value: 100000, suffix: "+", key: "calibrations" as const },
  { value: 2, suffix: "", key: "labs" as const },
  { value: 100, suffix: "%", key: "iso" as const },
];

function formatNum(n: number) {
  return n >= 1000 ? n.toLocaleString() : String(n);
}

export function Statistics() {
  const { t } = useLang();
  const sectionRef = useRef<HTMLDivElement>(null);
  // Keep DOM refs for each counter span — no React state needed
  const counterRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    const trigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top 80%",
      once: true,
      onEnter: () => {
        STATS.forEach((stat, i) => {
          const el = counterRefs.current[i];
          if (!el) return;
          const obj = { val: 0 };
          gsap.to(obj, {
            val: stat.value,
            duration: 2,
            ease: "power2.out",
            onUpdate() {
              el.textContent = formatNum(Math.round(obj.val)) + stat.suffix;
            },
          });
        });
      },
    });

    return () => trigger.kill();
  }, []);

  return (
    <section
      id="statistics"
      ref={sectionRef}
      className="bg-[#0F172A] py-16 md:py-20"
    >
      <div className="container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {STATS.map((stat, i) => (
            <div key={stat.key} className="text-center">
              <span
                ref={(el) => { counterRefs.current[i] = el; }}
                className="text-4xl md:text-5xl lg:text-6xl font-black text-[#DC2626]"
              >
                0{stat.suffix}
              </span>
              <p className="mt-2 text-sm md:text-base text-white/70 font-medium">
                {t.statistics[stat.key]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
