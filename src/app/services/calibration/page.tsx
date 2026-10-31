"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

import {
  Gauge,
  Zap,
  Ruler,
  Thermometer,
  GaugeIcon,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";


const calibrationTypes = [
  {
    icon: Zap,
    title: "Electrical Calibration",
    description: "Precision calibration for multimeters, oscilloscopes, power analyzers, and more.",
    equipment: ["Digital Multimeters", "Oscilloscopes", "Power Analyzers", "Insulation Testers", "Clamp Meters"],
    href: "/services/calibration/electrical",
  },
  {
    icon: GaugeIcon,
    title: "Mechanical Calibration",
    description: "Accurate calibration for torque, force, pressure, vibration, sound, and environmental instruments.",
    equipment: ["Torque Wrenches", "Force Gauges", "Sound Meters", "Flow Meters", "Vibration Meters", "Environmental Meters"],
    href: "/services/calibration/mechanical",
  },
  {
    icon: Thermometer,
    title: "Temperature Calibration",
    description: "Reliable temperature calibration for sensors, data loggers, and thermal equipment.",
    equipment: ["RTD Sensors", "Thermocouples", "IR Thermometers", "Data Loggers", "Thermal Cameras"],
    href: "/services/calibration/temperature",
  },
  {
    icon: Gauge,
    title: "Pressure Calibration",
    description: "High-accuracy calibration for pressure gauges, transmitters, switches, and vacuum instruments.",
    equipment: ["Pressure Gauges", "Pressure Transmitters", "Pressure Switches", "Vacuum Gauges", "Dead Weight Testers"],
    href: "/services/calibration/pressure",
  },
  {
    icon: Ruler,
    title: "Dimensional Calibration",
    description: "High-precision calibration for vernier calipers, micrometers, gauges, tapes, scales, and levels.",
    equipment: ["Vernier Calipers", "Micrometers", "Measuring Tapes", "Scales", "Coating Thickness Gauges", "Spirit Levels", "Auto Levels"],
    href: "/services/calibration/dimensional",
  },
];

export default function CalibrationServicePage() {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!contentRef.current) return;

    const cards = contentRef.current.querySelectorAll(".calibration-card");
    
    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          delay: index * 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
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
        <div className="absolute inset-0 opacity-30">
          <img
            src="/images/services/overview/calibration.png"
            alt="Calibration Lab"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A] via-[#0F172A]/90 to-[#0F172A]/70" />
        </div>
        <div className="container-custom relative z-10">
          <div className="flex items-center gap-2 text-white/60 mb-4">
            <span>Services</span>
            <span>/</span>
            <span className="text-[#DC2626]">Calibration</span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase text-white leading-[0.9]">
            Calibration
            <br />
            Services
          </h1>
          <p className="text-xl text-white/70 mt-6 max-w-2xl leading-relaxed">
            ISO 17025 accredited calibration services ensuring traceability and accuracy 
            for all your measurement instruments.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="section-padding bg-white dark:bg-[#1E293B]">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#DC2626] font-mono text-sm uppercase tracking-widest">
                Service Overview
              </span>
              <h2 className="text-4xl md:text-5xl font-black uppercase mt-4 mb-6 text-[#0F172A] dark:text-white">
                Precision You Can Trust
              </h2>
              <p className="text-[#64748B] dark:text-[#94A3B8] leading-relaxed mb-6">
                Our calibration laboratory is equipped with state-of-the-art reference standards 
                and operated by highly trained technicians. We provide comprehensive calibration 
                services with full traceability to national and international standards.
              </p>
              <ul className="space-y-3">
                {[
                  "ISO 17025:2017 Accredited",
                  "Traceable to SI Units",
                  "Fast Turnaround Times",
                  "On-Site Services Available",
                  "Digital Certificates",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-[#0F172A] dark:text-white">
                    <CheckCircle2 className="w-5 h-5 text-[#DC2626]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-xl overflow-hidden">
                <img
                  src="/images/services/electrical/hero.png"
                  alt="Calibration Equipment"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#DC2626] rounded-xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Calibration Types */}
      <section ref={contentRef} className="section-padding bg-[#FAFAFA] dark:bg-[#0F172A]">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-[#DC2626] font-mono text-sm uppercase tracking-widest">
              Our Capabilities
            </span>
            <h2 className="text-4xl md:text-5xl font-black uppercase mt-4 text-[#0F172A] dark:text-white">
              Calibration Types
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {calibrationTypes.map((type) => {
              const Icon = type.icon;
              const CardContent = (
                <>
                  <div className="w-14 h-14 rounded-xl bg-[#DC2626]/10 flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-[#DC2626]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0F172A] dark:text-white mb-3">
                    {type.title}
                  </h3>
                  <p className="text-[#64748B] dark:text-[#94A3B8] mb-4">{type.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {type.equipment.map((eq) => (
                      <span
                        key={eq}
                        className="px-3 py-1 bg-gray-100 dark:bg-[#334155] text-[#0F172A] dark:text-white text-xs font-medium rounded-full"
                      >
                        {eq}
                      </span>
                    ))}
                  </div>
                  {type.href && (
                    <span className="inline-flex items-center gap-1 text-[#DC2626] font-semibold text-sm group-hover:gap-2 transition-all">
                      Learn More <ArrowRight className="w-4 h-4" />
                    </span>
                  )}
                </>
              );
              return type.href ? (
                <Link
                  key={type.title}
                  href={type.href}
                  prefetch={false}
                  className="calibration-card bg-white dark:bg-[#1E293B] rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow group block"
                >
                  {CardContent}
                </Link>
              ) : (
                <div
                  key={type.title}
                  className="calibration-card bg-white dark:bg-[#1E293B] rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow"
                >
                  {CardContent}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0F172A]">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-black uppercase text-white mb-6">
            Ready to Calibrate?
          </h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto">
            Get your equipment calibrated by Saudi Arabia&apos;s leading ISO 17025 accredited laboratory.
          </p>
          <Link
            href="/contact?service=calibration"
            prefetch={false}
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#DC2626] text-white rounded font-bold text-lg hover:bg-[#B91C1C] transition-colors"
          >
            Request Calibration
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
