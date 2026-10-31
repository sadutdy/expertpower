"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

import { Award, Users, Building2, Globe, Scale, ShieldCheck } from "lucide-react";
import { TextReveal } from "@/components/TextReveal";


const milestones = [
  { year: "2014", title: "Establishment", description: "Expert Power established in Riyadh" },
  { year: "2017", title: "ISO Certification", description: "Achieved ISO 17025 accreditation" },
  { year: "2018", title: "Dammam Branch", description: "Opened Dammam laboratory" },
  { year: "2022", title: "SAAC Recognition", description: "Recognized by the Saudi Accreditation Center" },
  { year: "2026", title: "QAI Accreditation", description: "Accredited by QAI and recognized under ILAC MRA" },
  { year: "2026", title: "SASO Laboratory License", description: "Licensed as a private laboratory by the Saudi Standards, Metrology and Quality Organization (SASO)" },
  { year: "2026", title: "Continuing Our Journey", description: "Bringing our expertise to new areas and industries across the region" },
];

const values = [
  {
    icon: Award,
    title: "Excellence",
    description: "Committed to delivering the highest quality calibration services exceeding industry standards.",
  },
  {
    icon: Users,
    title: "Integrity",
    description: "Operating with transparency and honesty in every client interaction and measurement.",
  },
  {
    icon: Building2,
    title: "Innovation",
    description: "Continuously adopting new technologies to improve accuracy and efficiency.",
  },
  {
    icon: Globe,
    title: "Reliability",
    description: "Dependable service delivery with consistent results you can trust.",
  },
];

export default function AboutPage() {
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!timelineRef.current) return;

    const items = timelineRef.current.querySelectorAll(".timeline-item");
    
    items.forEach((item, index) => {
      gsap.fromTo(
        item,
        { x: index % 2 === 0 ? -50 : 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#DC2626] font-mono text-sm uppercase tracking-widest">
                About Us
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase mt-4 text-white leading-[0.9]">
                About
              </h1>
            </div>
            <div>
              <p className="text-xl text-white/80 leading-relaxed">
                Expert Power is Saudi Arabia&apos;s trusted calibration partner since 2014. 
                With ISO 17025 accreditation and recognition from QAI/ILAC, SAAC, ISO 9001, ISO 14001, 
                and ISO 45001, we deliver precision calibration, testing, inspection, 
                rental, and repair services across the Kingdom.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-[#FAFAFA] dark:bg-[#0F172A]">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white dark:bg-[#1E293B] p-8 md:p-12 rounded-lg shadow-sm">
              <span className="text-[#DC2626] font-mono text-sm uppercase tracking-widest">
                Our Purpose
              </span>
              <h2 className="text-3xl font-black uppercase mt-4 mb-6 text-[#0F172A] dark:text-white">
                Mission
              </h2>
              <p className="text-[#64748B] dark:text-[#94A3B8] leading-relaxed">
                To provide accurate, reliable, and traceable calibration services that ensure 
                the integrity of measurement processes across industries in Saudi Arabia. We 
                are committed to supporting our clients&apos; quality objectives through technical 
                excellence and superior customer service.
              </p>
            </div>
            <div className="bg-[#0F172A] p-8 md:p-12 rounded-lg">
              <span className="text-[#DC2626] font-mono text-sm uppercase tracking-widest">
                Our Aspiration
              </span>
              <h2 className="text-3xl font-black uppercase mt-4 mb-6 text-white">
                Vision
              </h2>
              <p className="text-white/70 leading-relaxed">
                To be the premier calibration and engineering solutions provider in the 
                Middle East, recognized for technical excellence, innovation, and unwavering 
                commitment to quality. We aim to set the benchmark for calibration services 
                in the region.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-white dark:bg-[#0F172A]">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-[#DC2626] font-mono text-sm uppercase tracking-widest">
              What Drives Us
            </span>
            <h2 className="text-4xl md:text-5xl font-black uppercase mt-4 text-[#0F172A] dark:text-white">
              Core Values
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="text-center p-6 rounded-lg hover:bg-[#FAFAFA] dark:hover:bg-[#1E293B]/50 transition-colors group"
                >
                  <div className="w-16 h-16 mx-auto rounded-full bg-[#DC2626]/10 flex items-center justify-center mb-4 group-hover:bg-[#DC2626] transition-colors">
                    <Icon className="w-8 h-8 text-[#DC2626] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0F172A] dark:text-white mb-2">
                    {value.title}
                  </h3>
                  <p className="text-[#64748B] dark:text-[#94A3B8] text-sm">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section ref={timelineRef} className="section-padding bg-[#FAFAFA] dark:bg-[#0F172A]">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-[#DC2626] font-mono text-sm uppercase tracking-widest">
              Our Journey
            </span>
            <h2 className="text-4xl md:text-5xl font-black uppercase mt-4 text-[#0F172A] dark:text-white">
              Our Story
            </h2>
          </div>
          <div className="max-w-4xl mx-auto relative">
            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-[#DC2626]/20" />
            
            {milestones.map((milestone, index) => (
              <div
                key={`${milestone.year}-${milestone.title}`}
                className={`timeline-item relative flex items-center gap-8 mb-12 ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? "text-right" : "text-left"}`}>
                  <div className="bg-white dark:bg-[#1E293B] p-6 rounded-lg shadow-sm inline-block">
                    <span className="text-[#DC2626] font-bold text-xl">{milestone.year}</span>
                    <h3 className="text-lg font-bold text-[#0F172A] dark:text-white mt-1">{milestone.title}</h3>
                    <p className="text-[#64748B] dark:text-[#94A3B8] text-sm mt-1">{milestone.description}</p>
                  </div>
                </div>
                <div className="w-4 h-4 rounded-full bg-[#DC2626] border-4 border-white dark:border-[#1E293B] shadow-md z-10 flex-shrink-0" />
                <div className="w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment to Impartiality */}
      <section className="section-padding bg-white dark:bg-[#0F172A]">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#DC2626] font-mono text-sm uppercase tracking-widest">
                Our Promise
              </span>
              <h2 className="text-3xl md:text-4xl font-black uppercase mt-4 mb-6 text-[#0F172A] dark:text-white">
                Commitment to Impartiality
              </h2>
              <p className="text-[#64748B] dark:text-[#94A3B8] leading-relaxed mb-6">
                Expert Power is fully committed to safeguarding impartiality in every aspect of our work. 
                Our management system, policies, and procedures are specifically developed to ensure that 
                all calibration, testing, and inspection activities are conducted impartially, without 
                influence from any external or internal factors.
              </p>
              <ul className="space-y-3">
                {[
                  "Independent and unbiased calibration results",
                  "Transparent processes and documentation",
                  "Conflict-of-interest management",
                  "Ethical conduct across all operations",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-[#0F172A] dark:text-white">
                    <ShieldCheck className="w-5 h-5 text-[#DC2626] flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#DC2626]/5 dark:bg-[#DC2626]/10 rounded-2xl p-8 md:p-12">
              <Scale className="w-16 h-16 text-[#DC2626] mb-6" />
              <blockquote className="text-xl md:text-2xl font-bold text-[#0F172A] dark:text-white leading-relaxed">
                &ldquo;Integrity and impartiality are the foundation of every measurement we deliver.&rdquo;
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Support */}
      <section className="section-padding bg-[#FAFAFA] dark:bg-[#0F172A]">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-[#DC2626] font-mono text-sm uppercase tracking-widest">
              Total Service Solutions
            </span>
            <h2 className="text-4xl md:text-5xl font-black uppercase mt-4 text-[#0F172A] dark:text-white">
              Corporate Support
            </h2>
            <p className="mt-4 text-[#64748B] dark:text-[#94A3B8] max-w-3xl mx-auto">
              Our service offerings are supported by world-class sales and technical teams, enabling us 
              to understand evolving industrial needs and address calibration and instrumentation challenges 
              across sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Technical Support",
                description: "Responsive assistance from experienced engineers for all your calibration and instrumentation needs.",
              },
              {
                title: "Qualified Team",
                description: "Highly trained professionals with deep expertise across electrical, mechanical, pressure, and dimensional disciplines.",
              },
              {
                title: "Modern Facilities",
                description: "Well-equipped laboratories in Riyadh and Dammam with dedicated calibration environments.",
              },
              {
                title: "Regional Reach",
                description: "Serving clients across Saudi Arabia and the Middle East with onsite and in-lab services.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white dark:bg-[#1E293B] rounded-xl p-8 shadow-sm hover:shadow-lg transition-all"
              >
                <div className="w-16 h-16 rounded-xl bg-[#DC2626]/10 flex items-center justify-center mb-6">
                  <img
                    src="/assets/Logo.png"
                    alt="Expert Power"
                    className="h-10 w-auto object-contain"
                  />
                </div>
                <h3 className="text-lg font-bold text-[#0F172A] dark:text-white mb-2">{item.title}</h3>
                <p className="text-[#64748B] dark:text-[#94A3B8] text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


    </>
  );
}
