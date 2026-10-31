"use client";

import { useRef, useEffect } from "react";
import { gsap } from "@/lib/gsap";
import { useLang } from "@/contexts/LanguageContext";

const clients = [
  { name: "Saudi Aramco", logo: "/assets/clients/aramco.jpg" },
  { name: "Siemens", logo: "/assets/clients/siemens.jpg" },
  { name: "Schneider Electric", logo: "/assets/clients/schneider.jpg" },
  { name: "ABB", logo: "/assets/clients/abb.png" },
  { name: "Samsung", logo: "/assets/clients/samsung.jpg" },
  { name: "Alfanar", logo: "/assets/clients/alfanar.jpg" },
  { name: "Saudi Electricity Company", logo: "/assets/clients/saudi_electricity.jpg" },
  { name: "General Electric", logo: "/assets/clients/ge.png" },
  { name: "Hyundai", logo: "/assets/clients/hyundai.png" },
  { name: "Alstom", logo: "/assets/clients/alstom.jpg" },
  { name: "Al Ojaimi Group", logo: "/assets/clients/al-ojaimi.png" },
  { name: "Al Gihaz Holdings", logo: "/assets/clients/al_gihaz_holdings.jpg" },
  { name: "Al Babtain", logo: "/assets/clients/babtain.jpg" },
  { name: "Enova", logo: "/assets/clients/enova.jpg" },
  { name: "Etihad", logo: "/assets/clients/etihad.png" },
  { name: "Riyadh Cables", logo: "/assets/clients/riyad_cables.jpg" },
  { name: "Saudi Electricity Projects", logo: "/assets/clients/sep.jpg" },
  { name: "Shapoorji Pallonji", logo: "/assets/clients/shapoorji.jpg" },
  { name: "Yusuf Bin Ahmed Kanoo", logo: "/assets/clients/kanoo.jpg" },
  { name: "Lucy Electric", logo: "/assets/clients/lucy.jpg" },
];

export function ClientsMarquee() {
  const { t } = useLang();
  const marqueeRef = useRef<HTMLDivElement>(null);
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!row1Ref.current || !row2Ref.current) return;

    const w1 = row1Ref.current.scrollWidth / 2;
    const w2 = row2Ref.current.scrollWidth / 2;

    const t1 = gsap.to(row1Ref.current, {
      x: -w1, duration: 40, ease: "none", repeat: -1,
    });
    const t2 = gsap.fromTo(
      row2Ref.current,
      { x: -w2 },
      { x: 0, duration: 50, ease: "none", repeat: -1 }
    );

    const pause = () => { t1.pause(); t2.pause(); };
    const play = () => { t1.play(); t2.play(); };
    marqueeRef.current?.addEventListener("mouseenter", pause);
    marqueeRef.current?.addEventListener("mouseleave", play);

    return () => {
      t1.kill(); t2.kill();
      marqueeRef.current?.removeEventListener("mouseenter", pause);
      marqueeRef.current?.removeEventListener("mouseleave", play);
    };
  }, []);

  return (
    <section className="py-20 bg-[#0F172A] overflow-hidden">
      <div className="container-custom mb-12 text-center">
        <span className="text-[#DC2626] font-mono text-sm uppercase tracking-widest">
          {t.clients.eyebrow}
        </span>
        <h2 className="text-3xl md:text-4xl font-black uppercase mt-4 text-white">
          {t.clients.title}
        </h2>
      </div>

      <div ref={marqueeRef} className="relative">
        {/* Row 1 */}
        <div className="relative mb-8">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0F172A] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0F172A] to-transparent z-10 pointer-events-none" />
          <div ref={row1Ref} className="flex items-center gap-12 whitespace-nowrap">
            {[...clients, ...clients].map((client, i) => (
              <div key={`r1-${i}`} className="flex-shrink-0 group">
                <div className="w-32 md:w-44 h-16 md:h-20 grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                  <img
                    src={client.logo}
                    alt={client.name}
                    loading="lazy"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0F172A] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0F172A] to-transparent z-10 pointer-events-none" />
          <div ref={row2Ref} className="flex items-center gap-12 whitespace-nowrap">
            {[...clients.slice().reverse(), ...clients.slice().reverse()].map((client, i) => (
              <div key={`r2-${i}`} className="flex-shrink-0 group">
                <div className="w-28 md:w-40 h-14 md:h-16 grayscale opacity-20 group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-500 flex items-center justify-center">
                  <img
                    src={client.logo}
                    alt={client.name}
                    loading="lazy"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
