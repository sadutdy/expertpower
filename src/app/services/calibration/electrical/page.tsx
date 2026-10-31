"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

import { motion } from "framer-motion";
import {
  Zap,
  CheckCircle2,
  ArrowRight,
  Gauge,
  Activity,
  Waves,
  Battery,
  Shield,
} from "lucide-react";
import Link from "next/link";



const equipmentCards = [
  {
    name: "Digital Multimeters",
    description: "High-accuracy calibration for handheld and benchtop multimeters across all ranges.",
    image: "/images/services/electrical/multimeter.png",
  },
  {
    name: "Clamp Meters",
    description: "AC/DC clamp meter calibration up to 2000A with traceable current standards.",
    image: "/images/services/electrical/clamp_meter.png",
  },
  {
    name: "Oscilloscopes",
    description: "Bandwidth verification and timebase calibration for analog and digital scopes.",
    image: "/images/services/electrical/oscilloscope.png",
  },
  {
    name: "Power Quality Analyzers",
    description: "Comprehensive calibration of 3-phase power analyzers and harmonic analyzers.",
    image: "/images/services/electrical/power_analyzer.png",
  },
  {
    name: "Insulation Testers",
    description: "High-voltage insulation resistance tester calibration up to 10 kV.",
    image: "/images/services/electrical/insulation_tester.png",
  },
  {
    name: "Earth/Ground Testers",
    description: "Ground resistance and soil resistivity tester calibration and verification.",
    image: "/images/services/electrical/earth_tester.jpg",
  },
  {
    name: "CMC Test Systems",
    description: "Protection relay test set calibration for CMC series instruments.",
    image: "/images/services/electrical/cmc_relay_tester.png",
  },
  {
    name: "CPC Current Injection",
    description: "Primary and secondary current injection test set calibration and verification.",
    image: "/images/services/electrical/cpc_injection.png",
  },
  {
    name: "Freja Relay Testers",
    description: "Calibration of Freja series relay and substation test systems.",
    image: "/images/services/electrical/freja_tester.png",
  },
  {
    name: "Phase Rotation Meters",
    description: "Phase sequence and rotation indicator calibration for motor installation safety.",
    image: "/images/services/electrical/phase_rotation.jpg",
  },
  {
    name: "Earth Resistance Testers",
    description: "Precision calibration of 2-point, 3-point, and 4-point earth resistance testers.",
    image: "/images/services/electrical/earth_resistance.jpg",
  },
  {
    name: "VLF Testing",
    description: "Very Low Frequency testing equipment calibration for cable insulation testing and diagnostics.",
    image: "/images/services/electrical/VLF.jpeg",
  },
  {
    name: "PD - Partial Discharge",
    description: "Partial discharge detection and measurement equipment calibration for high-voltage asset monitoring.",
    image: "/images/services/electrical/Potential_Discharge.jpeg",
  },
  {
    name: "Tan Delta",
    description: "Tan delta / dissipation factor test set calibration for insulation condition assessment.",
    image: "/images/services/electrical/Tan_Delta.jpeg",
  },
];

const capabilities = [
  { icon: Gauge, title: "Voltage", range: "Up to 200 kV" },
  { icon: Activity, title: "Current", range: "Up to 10000 Amp" },
  { icon: Zap, title: "Resistance", range: "Up to 20 Tohm" },
  { icon: Shield, title: "Frequency", range: "Up to 40 GHz" },
  { icon: Battery, title: "Capacitance", range: "1 pF to 120 mF" },
  { icon: Waves, title: "Others", range: "Turns Ratio, Tan Delta, Power, Energy, and many more" },
];

export default function ElectricalCalibrationPage() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".hero-bg", {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.fromTo(
        ".reveal-item",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".content-section",
            start: "top 80%",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="hero-bg absolute inset-0">
          <img
            src="/images/services/electrical/hero.png"
            alt="Electrical Calibration"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A] via-[#0F172A]/80 to-transparent" />
        </div>
        
        <div className="container-custom relative z-10 pt-32 pb-20">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 text-white/60 text-sm mb-4">
                <Link href="/services/calibration" prefetch={false} className="hover:text-white transition-colors">
                  Calibration
                </Link>
                <span>/</span>
                <span className="text-white">Electrical</span>
              </div>
              <span className="inline-block px-4 py-2 bg-[#DC2626]/20 text-[#DC2626] rounded-full text-sm font-medium mb-6">
                Calibration Services
              </span>
              <h1 className="text-5xl md:text-6xl font-black text-white uppercase leading-[0.95] mb-6">
                Electrical Calibration
              </h1>
              <p className="text-xl text-white/80 leading-relaxed">
                Precision calibration for all electrical and electronic test equipment. 
                Traceable to international standards with industry-leading accuracy.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="content-section section-padding bg-[#FAFAFA] dark:bg-[#0F172A]">
        <div className="container-custom">
          <div className="text-center mb-16 reveal-item">
            <span className="text-[#DC2626] font-mono text-sm uppercase tracking-widest">
              Our Capabilities
            </span>
            <h2 className="text-4xl md:text-5xl font-black uppercase mt-4 text-[#0F172A] dark:text-white">
              Electrical Parameters
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {capabilities.map((cap) => {
              const Icon = cap.icon;
              return (
                <div
                  key={cap.title}
                  className="reveal-item bg-white dark:bg-[#1E293B] rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 text-center group"
                >
                  <div className="w-14 h-14 mx-auto rounded-xl bg-[#DC2626]/10 flex items-center justify-center mb-4 group-hover:bg-[#DC2626] transition-colors">
                    <Icon className="w-7 h-7 text-[#DC2626] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0F172A] dark:text-white mb-1">{cap.title}</h3>
                  <p className="text-[#64748B] dark:text-[#94A3B8] text-sm">{cap.range}</p>
                </div>
              );
            })}
          </div>

          {/* Equipment Cards */}
          <div className="reveal-item">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black uppercase text-[#0F172A] dark:text-white">
                Equipment Calibrated
              </h2>
              <p className="text-[#64748B] dark:text-[#94A3B8] mt-4 max-w-2xl mx-auto">
                We calibrate a comprehensive range of electrical test equipment with ISO 17025 accreditation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {equipmentCards.map((item) => (
                <div
                  key={item.name}
                  className="bg-white dark:bg-[#1E293B] rounded-xl shadow-sm overflow-hidden group hover:shadow-lg transition-all duration-300 flex flex-col"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-lg font-bold text-[#0F172A] dark:text-white mb-2">
                      {item.name}
                    </h3>
                    <p className="text-[#64748B] dark:text-[#94A3B8] text-sm mb-4 flex-grow">
                      {item.description}
                    </p>
                    <Link
                      href="/contact?service=electrical-calibration"
                      prefetch={false}
                      className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#DC2626] text-white rounded-lg font-semibold text-sm hover:bg-[#B91C1C] transition-colors"
                    >
                      Request Calibration
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0F172A]">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-5xl font-black uppercase text-white mb-6">
            Calibrate Your Electrical Equipment
          </h2>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto">
            Contact us to schedule calibration for your electrical test equipment. 
            Fast turnaround with ISO 17025 accredited certificates.
          </p>
          <Link
            href="/contact?service=electrical-calibration"
            prefetch={false}
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#DC2626] text-white rounded-lg font-bold text-lg hover:bg-[#B91C1C] transition-colors"
          >
            Contact Us
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
