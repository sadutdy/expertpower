"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

import { motion } from "framer-motion";
import {
  Ruler,
  Move,
  Maximize,
  ArrowLeftRight,
  Compass,
  DraftingCompass,
  MoveVertical,
  Wrench,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const equipmentCards = [
  {
    name: "Vernier Caliper",
    description: "Precision measurement of internal, external, and depth dimensions across a wide range.",
    parameters: ["Length", "Outside Diameter (OD)", "Inside Diameter (ID)", "Depth"],
    image: "/images/services/dimensional/WhatsApp%20Image%202026-08-17%20at%2011.01.21%20AM%20(3).jpeg",
  },
  {
    name: "Outside Micrometer",
    description: "High-accuracy measurement of external dimensions and thickness of components.",
    parameters: ["External Dimension", "Thickness", "Outside Diameter (OD)"],
    image: "/images/services/dimensional/WhatsApp%20Image%202026-08-17%20at%2011.01.22%20AM.jpeg",
  },
  {
    name: "Crimping Tool",
    description: "Calibration of crimp height and width to ensure reliable electrical and mechanical connections.",
    parameters: ["Crimp Height", "Crimp Width", "Pull-Out Force"],
    image: "/images/services/dimensional/WhatsApp%20Image%202026-08-17%20at%2011.01.21%20AM%20(2).jpeg",
  },
  {
    name: "Measuring Tape",
    description: "Traceable calibration of steel and fiberglass measuring tapes for field and lab use.",
    parameters: ["Length", "Linear Measurement"],
    image: "/images/services/dimensional/measuring%20tape.jpg",
  },
  {
    name: "Scales",
    description: "Calibration of digital and mechanical scales for accurate mass and weight measurement.",
    parameters: ["Mass", "Weight", "Readability"],
    image: "/images/services/dimensional/scale.jpeg",
  },
  {
    name: "Coating Thickness Gauge",
    description: "Verification of dry film thickness on ferrous and non-ferrous substrates.",
    parameters: ["Coating Thickness", "Dry Film Thickness (DFT)"],
    image: "/images/services/dimensional/WhatsApp%20Image%202026-08-17%20at%2011.01.21%20AM%20(1).jpeg",
  },
  {
    name: "Physical Protractor",
    description: "Calibration of angular measuring tools for accurate angle and bevel verification.",
    parameters: ["Angle", "Bevel Angle"],
    image: "/images/services/dimensional/WhatsApp%20Image%202026-08-17%20at%2011.01.22%20AM%20(1).jpeg",
  },
  {
    name: "Spirit Level",
    description: "Calibration of bubble levels to ensure surface levelness and alignment.",
    parameters: ["Levelness", "Inclination Angle"],
    image: "/images/services/dimensional/WhatsApp%20Image%202026-08-17%20at%2011.01.22%20AM%20(4).jpeg",
  },
  {
    name: "Right Angle",
    description: "Verification of 90° squares and right-angle gauges for squareness checks.",
    parameters: ["Squareness", "90° Angle"],
    image: "/images/services/dimensional/WhatsApp%20Image%202026-08-17%20at%2011.01.22%20AM%20(2).jpeg",
  },
  {
    name: "Auto Level",
    description: "Calibration of automatic levels for precise height and elevation measurements.",
    parameters: ["Height", "Elevation", "Level Line"],
    image: "/images/services/dimensional/WhatsApp%20Image%202026-08-17%20at%2011.01.21%20AM.jpeg",
  },
];

const capabilities = [
  { icon: Ruler, title: "Length" },
  { icon: ArrowLeftRight, title: "Diameter" },
  { icon: Move, title: "Depth" },
  { icon: Maximize, title: "Thickness" },
  { icon: Compass, title: "Angle" },
  { icon: DraftingCompass, title: "Thread & Surface Profile" },
  { icon: MoveVertical, title: "Height & Elevation" },
  { icon: Wrench, title: "Crimping Die" },
];

export default function DimensionalCalibrationPage() {
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
            src="/images/services/dimensional/hero.png"
            alt="Dimensional Calibration"
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
                <span className="text-white">Dimensional</span>
              </div>
              <span className="inline-block px-4 py-2 bg-[#DC2626]/20 text-[#DC2626] rounded-full text-sm font-medium mb-6">
                Calibration Services
              </span>
              <h1 className="text-5xl md:text-6xl font-black text-white uppercase leading-[0.95] mb-6">
                Dimensional Calibration
              </h1>
              <p className="text-xl text-white/80 leading-relaxed">
                Accurate dimensional calibration for measuring instruments, gauges, and tools used
                in manufacturing, construction, and quality control.
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
              Dimensional Parameters
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-20">
            {capabilities.map((cap) => {
              const Icon = cap.icon;
              return (
                <div
                  key={cap.title}
                  className="reveal-item bg-white dark:bg-[#1E293B] rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-all"
                >
                  <div className="w-14 h-14 mx-auto rounded-xl bg-[#DC2626]/10 flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-[#DC2626]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0F172A] dark:text-white">{cap.title}</h3>
                </div>
              );
            })}
          </div>

          {/* Equipment Cards */}
          <div className="text-center mb-16 reveal-item">
            <span className="text-[#DC2626] font-mono text-sm uppercase tracking-widest">
              Instruments We Calibrate
            </span>
            <h2 className="text-4xl md:text-5xl font-black uppercase mt-4 text-[#0F172A] dark:text-white">
              Dimensional Instruments
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {equipmentCards.map((item) => (
              <div
                key={item.name}
                className="reveal-item bg-white dark:bg-[#1E293B] rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group"
              >
                <div className="aspect-[4/3] overflow-hidden bg-white flex items-center justify-center p-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#0F172A] dark:text-white mb-2">{item.name}</h3>
                  <p className="text-[#64748B] dark:text-[#94A3B8] text-sm mb-4">{item.description}</p>
                  <div className="space-y-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#DC2626]">
                      Calibrated Parameters
                    </span>
                    <ul className="flex flex-wrap gap-2">
                      {item.parameters.map((param) => (
                        <li
                          key={param}
                          className="text-xs px-2 py-1 bg-[#DC2626]/10 text-[#DC2626] rounded-full"
                        >
                          {param}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="reveal-item bg-[#0F172A] rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-black uppercase text-white mb-4">
              Need Dimensional Calibration?
            </h2>
            <p className="text-white/70 mb-8 max-w-2xl mx-auto">
              Contact our team for a quote or schedule on-site calibration services for your dimensional instruments.
            </p>
            <Link
              href="/contact?service=calibration"
              prefetch={false}
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#DC2626] text-white rounded-lg font-bold hover:bg-[#B91C1C] transition-colors"
            >
              Request a Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
