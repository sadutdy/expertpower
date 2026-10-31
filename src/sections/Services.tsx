"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { ArrowUpRight, ArrowLeft, ArrowRight, Gauge, Wrench, FlaskConical, ClipboardCheck } from "lucide-react";
import Link from "next/link";
import { useLang } from "@/contexts/LanguageContext";

const SERVICE_ICONS = {
  calibration: Gauge,
  maintenance: Wrench,
  testing: FlaskConical,
  inspection: ClipboardCheck,
} as const;

const SERVICE_IMAGES: Record<string, string> = {
  calibration: "/assets/calibration.jpg",
  maintenance: "/assets/maintenance.jpg",
  testing: "/assets/testing.jpg",
  inspection: "/assets/inspection.jpg",
};

const SERVICE_SLUGS: Record<string, string> = {
  calibration: "/services/calibration",
  maintenance: "/services/maintenance",
  testing: "/services/testing",
  inspection: "/services/inspection",
};

const SERVICE_IDS = ["calibration", "maintenance", "testing", "inspection"] as const;
type ServiceId = typeof SERVICE_IDS[number];

export function Services() {
  const { t, isRTL } = useLang();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const services = SERVICE_IDS.map((id) => ({
    id,
    title: t.services.items[id].title,
    description: t.services.items[id].description,
    image: SERVICE_IMAGES[id],
    slug: SERVICE_SLUGS[id],
  }));

  const updateScrollButtons = useCallback(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const tolerance = 4;
    setCanScrollLeft(el.scrollLeft > tolerance);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - tolerance);

    // Determine active index from scroll position
    const cardWidth = el.scrollWidth / services.length;
    const idx = Math.round(el.scrollLeft / cardWidth);
    setActiveIndex(Math.min(idx, services.length - 1));
  }, [services.length]);

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    updateScrollButtons();
    el.addEventListener("scroll", updateScrollButtons, { passive: true });
    window.addEventListener("resize", updateScrollButtons);
    return () => {
      el.removeEventListener("scroll", updateScrollButtons);
      window.removeEventListener("resize", updateScrollButtons);
    };
  }, [updateScrollButtons]);

  const scroll = (direction: "left" | "right") => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const cardWidth = el.querySelector(".service-card")?.clientWidth ?? 400;
    const gap = 24;
    const scrollAmount = direction === "left" ? -(cardWidth + gap) : (cardWidth + gap);
    el.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <section className="py-20 md:py-28 bg-[#FAFAFA] dark:bg-[#0F172A] overflow-hidden">
      <div className="container-custom">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <span className="text-[#DC2626] font-mono text-sm uppercase tracking-widest">
              {t.services.eyebrow}
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase mt-4 text-[#0F172A] dark:text-white">
              {t.services.title}
            </h2>
            <p className="mt-4 text-[#64748B] max-w-lg">{t.services.subtitle}</p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scroll(isRTL ? "right" : "left")}
              disabled={!canScrollLeft}
              aria-label="Previous service"
              className="w-12 h-12 rounded-full border-2 border-gray-200 dark:border-white/20 flex items-center justify-center text-[#0F172A] dark:text-white hover:bg-[#DC2626] hover:border-[#DC2626] hover:text-white transition-all duration-300 disabled:opacity-30 disabled:pointer-events-none"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll(isRTL ? "left" : "right")}
              disabled={!canScrollRight}
              aria-label="Next service"
              className="w-12 h-12 rounded-full border-2 border-gray-200 dark:border-white/20 flex items-center justify-center text-[#0F172A] dark:text-white hover:bg-[#DC2626] hover:border-[#DC2626] hover:text-white transition-all duration-300 disabled:opacity-30 disabled:pointer-events-none"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Scrollable Cards */}
      <div
        ref={scrollContainerRef}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth px-[max(1.5rem,calc((100vw-1280px)/2+1.5rem))] pb-4"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {services.map((service, index) => (
          <div
            key={service.id}
            className="service-card snap-start flex-shrink-0 w-[85vw] sm:w-[60vw] md:w-[40vw] lg:w-[30vw] xl:w-[24vw]"
          >
            <ServiceCard
              service={service}
              learnMore={t.services.learnMore}
              index={index}
            />
          </div>
        ))}
      </div>

      {/* Dot Indicators */}
      <div className="flex justify-center gap-2 mt-8">
        {services.map((_, idx) => (
          <button
            key={idx}
            aria-label={`Go to service ${idx + 1}`}
            onClick={() => {
              const el = scrollContainerRef.current;
              if (!el) return;
              const card = el.querySelectorAll(".service-card")[idx] as HTMLElement;
              if (card) card.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
            }}
            className={`h-2 rounded-full transition-all duration-300 ${
              idx === activeIndex
                ? "w-8 bg-[#DC2626]"
                : "w-2 bg-gray-300 dark:bg-white/20 hover:bg-[#DC2626]/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  learnMore,
  index,
}: {
  service: { id: string; title: string; description: string; image: string; slug: string };
  learnMore: string;
  index: number;
}) {
  const Icon = SERVICE_ICONS[service.id as ServiceId] ?? Gauge;

  return (
    <Link
      href={service.slug}
      prefetch={false}
      className="group block bg-white dark:bg-[#1E293B] rounded-2xl overflow-hidden border border-gray-100 dark:border-white/10 transition-all duration-500 hover:shadow-2xl hover:shadow-[#DC2626]/5 hover:-translate-y-2 h-[480px]"
    >
      {/* Image */}
      <div className="relative h-[55%] overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        {/* Index badge */}
        <div className="absolute top-4 right-4 w-10 h-10 bg-[#DC2626] rounded-lg flex items-center justify-center font-bold text-white text-sm shadow-lg">
          {String(index + 1).padStart(2, "0")}
        </div>
        {/* Icon */}
        <div className="absolute top-4 left-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg group-hover:bg-[#DC2626] transition-colors duration-300">
          <Icon className="w-6 h-6 text-[#DC2626] group-hover:text-white transition-colors duration-300" />
        </div>
      </div>

      {/* Content */}
      <div className="p-6 h-[45%] flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold text-[#0F172A] dark:text-white group-hover:text-[#DC2626] transition-colors duration-300">
            {service.title}
          </h3>
          <p className="mt-3 text-[#64748B] text-sm leading-relaxed line-clamp-3">
            {service.description}
          </p>
        </div>
        <div className="flex items-center gap-2 text-[#DC2626] font-semibold text-sm mt-4 group-hover:gap-3 transition-all duration-300">
          {learnMore}
          <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </Link>
  );
}
