"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

import { motion } from "framer-motion";
import {
  Thermometer,
  CheckCircle2,
  ArrowRight,
  Flame,
  Snowflake,
  Droplets,
  Gauge,
} from "lucide-react";
import Link from "next/link";



const equipmentCards = [
  {
    name: "RTD (Pt100) Sensors",
    description: "High-accuracy calibration of platinum resistance thermometers from -200°C to +850°C.",
    image: "/images/services/temperature/rtd_sensor.png",
  },
  {
    name: "Thermocouples (All Types)",
    description: "Full-range thermocouple calibration for Types K, J, T, E, N, S, R, and B.",
    image: "/images/services/temperature/thermocouple.png",
  },
  {
    name: "Digital Thermometers",
    description: "Precision calibration of handheld and benchtop digital thermometers.",
    image: "/images/services/temperature/digital_thermometer.png",
  },
  {
    name: "Infrared Thermometers",
    description: "Non-contact IR thermometer and thermal imager calibration with blackbody sources.",
    image: "/images/services/temperature/thermal_camera.png",
  },
  {
    name: "Temperature Transmitters",
    description: "4-20mA and smart temperature transmitter calibration with HART communication.",
    image: "/images/services/temperature/temperature_transmitter.png",
  },
  {
    name: "Temperature Controllers",
    description: "PID controller and PLC temperature input module calibration and tuning verification.",
    image: "/images/services/temperature/temperature_controller.png",
  },
  {
    name: "Dry Block Calibrators",
    description: "Portable dry-block temperature calibrator verification for field and on-site calibration.",
    image: "/images/services/temperature/Dry_block.jpeg",
  },
  {
    name: "Temperature Calibration Baths",
    description: "Precision liquid calibration bath verification for laboratory temperature sensor calibration.",
    image: "/images/services/temperature/Temperature_bath.jpeg",
  },
  {
    name: "Black Body Sources",
    description: "Infrared blackbody source calibration for non-contact thermometer and thermal imager verification.",
    image: "/images/services/temperature/black%20body%20source.jpg",
  },
];

const capabilities = [
  { icon: Thermometer, title: "Normal Temp", range: "-200 to 1600 °C" },
  { icon: Droplets, title: "Non-Contact Temp", range: "-30 to 1000 °C" },
  { icon: Gauge, title: "Humidity", range: "5-95 RH" },
];

export default function TemperatureCalibrationPage() {
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
            src="/images/services/temperature/hero.png"
            alt="Temperature Calibration"
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
                <span className="text-white">Temperature</span>
              </div>
              <span className="inline-block px-4 py-2 bg-[#DC2626]/20 text-[#DC2626] rounded-full text-sm font-medium mb-6">
                Calibration Services
              </span>
              <h1 className="text-5xl md:text-6xl font-black text-white uppercase leading-[0.95] mb-6">
                Temperature Calibration
              </h1>
              <p className="text-xl text-white/80 leading-relaxed">
                Accurate temperature calibration from cryogenic to ultra-high temperatures. 
                Full coverage for RTDs, thermocouples, transmitters, and thermal imaging devices.
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
              Temperature Ranges
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
                We calibrate a comprehensive range of temperature instruments with ISO 17025 accreditation.
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
                      href="/contact?service=temperature-calibration"
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
            Calibrate Your Temperature Equipment
          </h2>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto">
            Ensure accurate temperature measurements with our ISO 17025 accredited 
            calibration services. Fast turnaround with comprehensive certificates.
          </p>
          <Link
            href="/contact?service=temperature-calibration"
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
