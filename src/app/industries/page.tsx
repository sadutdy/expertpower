"use client";

import { useState, useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

import { ArrowRight, Filter } from "lucide-react";
import Link from "next/link";
import { MagneticButton } from "@/components/MagneticButton";
import { industries } from "@/lib/data/industries";

const categories = ["All", "Oil & Gas", "Manufacturing", "Energy", "Education", "Construction", "Logistics"];


export default function IndustriesPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const gridRef = useRef<HTMLDivElement>(null);

  const filteredIndustries = activeFilter === "All" 
    ? industries 
    : industries.filter(ind => ind.category === activeFilter);

  useEffect(() => {
    if (!gridRef.current) return;

    const cards = gridRef.current.querySelectorAll(".industry-card");
    
    gsap.fromTo(
      cards,
      { y: 40, opacity: 0, scale: 0.95 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.5,
        stagger: 0.08,
        ease: "power3.out",
      }
    );
  }, [activeFilter]);

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-[#0F172A] relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <span className="text-[#DC2626] font-mono text-sm uppercase tracking-widest">
              Sectors We Support
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase mt-4 text-white leading-[0.9]">
              Industries
            </h1>
            <p className="text-xl text-white/70 mt-6 leading-relaxed">
              Delivering precision calibration solutions across diverse industries 
              throughout Saudi Arabia and the Middle East.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="sticky top-20 z-30 bg-white dark:bg-[#0F172A] border-b border-gray-100 dark:border-[#334155] py-4">
        <div className="container-custom">
          <div className="flex items-center gap-4 overflow-x-auto pb-2 scrollbar-hide">
            <Filter className="w-5 h-5 text-[#64748B] flex-shrink-0" />
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  activeFilter === category
                    ? "bg-[#DC2626] text-white"
                    : "bg-gray-100 dark:bg-[#334155] text-[#64748B] dark:text-[#94A3B8] hover:bg-gray-200 dark:hover:bg-[#475569]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="section-padding bg-[#FAFAFA] dark:bg-[#0F172A]">
        <div className="container-custom">
          <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredIndustries.map((industry) => (
              <Link
                key={industry.id}
                href={industry.slug}
                prefetch={false}
                className="industry-card group bg-white dark:bg-[#1E293B] rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={industry.image}
                    alt={industry.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 via-[#0F172A]/20 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="text-xs font-mono uppercase tracking-wider text-white/70">
                      {industry.category}
                    </span>
                    <h3 className="text-xl font-bold text-white mt-1">
                      {industry.name}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-[#64748B] dark:text-[#94A3B8] text-sm mb-4 line-clamp-2">
                    {industry.description}
                  </p>

                  {/* Services Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {industry.services.map((service) => (
                      <span
                        key={service}
                        className="px-2 py-1 bg-[#DC2626]/10 text-[#DC2626] text-xs font-medium rounded"
                      >
                        {service}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="flex items-center gap-2 text-[#DC2626] font-medium text-sm group-hover:gap-3 transition-all">
                    View Solutions
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-[#0F172A]">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "15+", label: "Industries Served" },
              { value: "500+", label: "Corporate Clients" },
              { value: "98%", label: "Client Retention" },
              { value: "24/7", label: "Support Available" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl md:text-5xl font-black text-[#DC2626] mb-2">
                  {stat.value}
                </div>
                <div className="text-white/70 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white dark:bg-[#0F172A]">
        <div className="container-custom">
          <div className="bg-[#DC2626] rounded-2xl p-8 md:p-16 text-center relative overflow-hidden">
            {/* Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                  backgroundSize: "30px 30px",
                }}
              />
            </div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-black uppercase text-white mb-4">
                Your Industry Not Listed?
              </h2>
              <p className="text-white/80 mb-8 max-w-xl mx-auto">
                We provide customized calibration solutions for various industries. 
                Contact us to discuss your specific requirements.
              </p>
              <MagneticButton href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#DC2626] rounded font-bold text-lg hover:bg-gray-100 transition-colors">
                Contact Us
                <ArrowRight className="w-5 h-5" />
              </MagneticButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
