"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

import { motion } from "framer-motion";
import {
  Activity,
  CheckCircle2,
  ArrowRight,
  Gauge,
  Wind,
  Droplets,
  Flame,
} from "lucide-react";
import Link from "next/link";



const equipmentCards = [
  {
    name: "Digital Pressure Gauges",
    description: "High-accuracy calibration for digital pressure gauges from vacuum to 1400 bar.",
    image: "/images/services/pressure/pressure_gauge.png",
  },
  {
    name: "Pressure Transmitters",
    description: "Full calibration of 4-20mA and digital pressure transmitters across all ranges.",
    image: "/images/services/pressure/pressure_transmitter.png",
  },
  {
    name: "Pressure Switches",
    description: "Set-point and dead-band verification for pneumatic and hydraulic pressure switches.",
    image: "/images/services/pressure/pressure_switch.png",
  },
  {
    name: "Differential Pressure",
    description: "Low- to high-range differential pressure transmitter and gauge calibration.",
    image: "/images/services/pressure/differential_pressure.png",
  },
  {
    name: "Vacuum Gauges",
    description: "Vacuum gauge calibration from atmospheric pressure down to -0.95 bar.",
    image: "/images/services/pressure/vacuum_gauge.png",
  },
  {
    name: "Barometers",
    description: "Precision barometer calibration for meteorological and laboratory applications.",
    image: "/images/services/pressure/barometer.png",
  },
  {
    name: "PRVs",
    description: "Pressure Relief Valve calibration and set-point verification for safety systems.",
    image: "/images/services/pressure/pressure_switch.png",
  },
  {
    name: "Pressure Calibrators",
    description: "Handheld and benchtop pressure calibrator calibration across pneumatic and hydraulic ranges.",
    image: "/images/services/pressure/pressure_gauge.png",
  },
];

const capabilities = [
  { icon: Wind, title: "Pneumatic", range: "Up to 75 bars" },
  { icon: Droplets, title: "Hydraulic", range: "Up to 1400 bars" },
  { icon: Activity, title: "Differential", range: "Up to 50 bars" },
  { icon: Gauge, title: "Barometric Pressure", range: "850 to 1100 mbar" },
  { icon: Gauge, title: "Low Pressure", range: "± 400 mbar" },
  { icon: Wind, title: "Vacuum Pressure", range: "-0.95 to 0" },
];

export default function PressureCalibrationPage() {
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
            src="/images/services/pressure/hero.png"
            alt="Pressure Calibration"
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
                <span className="text-white">Pressure</span>
              </div>
              <span className="inline-block px-4 py-2 bg-[#DC2626]/20 text-[#DC2626] rounded-full text-sm font-medium mb-6">
                Calibration Services
              </span>
              <h1 className="text-5xl md:text-6xl font-black text-white uppercase leading-[0.95] mb-6">
                Pressure Calibration
              </h1>
              <p className="text-xl text-white/80 leading-relaxed">
                Comprehensive pressure and vacuum calibration services. From low-pressure 
                differential to ultra-high pressure applications with superior accuracy.
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
              Pressure Ranges
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
                We calibrate a wide range of pressure and vacuum instruments with ISO 17025 accreditation.
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
                      href="/contact?service=pressure-calibration"
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
            Calibrate Your Pressure Equipment
          </h2>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto">
            Get accurate pressure calibration for all your gauges, transmitters, and sensors. 
            ISO 17025 accredited with industry-leading uncertainties.
          </p>
          <Link
            href="/contact?service=pressure-calibration"
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
