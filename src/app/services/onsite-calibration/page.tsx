"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

import { motion } from "framer-motion";
import {
  Truck,
  Clock,
  MapPin,
  Shield,
  CheckCircle2,
  Wrench,
  Factory,
  Building2,
  Zap,
  Thermometer,
  Activity,
  ArrowRight,
  Phone,
} from "lucide-react";
import Link from "next/link";
import { MagneticButton } from "@/components/MagneticButton";


const onsiteServices = [
  {
    icon: Factory,
    title: "Industrial Plants",
    description: "Comprehensive calibration services for manufacturing facilities, refineries, and processing plants",
  },
  {
    icon: Building2,
    title: "Commercial Buildings",
    description: "HVAC, electrical, and building management system calibration for commercial properties",
  },
  {
    icon: Zap,
    title: "Power & Energy",
    description: "Specialized calibration for power generation, transmission, and distribution equipment",
  },
  {
    icon: Truck,
    title: "Transportation & Logistics",
    description: "On-site calibration for transportation fleets, warehouses, and logistics centers",
  },
];

const calibrationTypes = [
  {
    category: "Electrical Calibration",
    icon: Zap,
    items: [
      "Multimeters & Clamp Meters",
      "Power Quality Analyzers",
      "Insulation Testers",
      "Earth/Ground Testers",
      "Relay Test Equipment",
    ],
  },
  {
    category: "Temperature Calibration",
    icon: Thermometer,
    items: [
      "Temperature Transmitters",
      "Thermocouples & RTDs",
      "Infrared Thermometers",
      "Temperature Controllers",
      "Thermal Cameras",
    ],
  },
  {
    category: "Pressure Calibration",
    icon: Activity,
    items: [
      "Pressure Transmitters",
      "Pressure Gauges",
      "Pressure Switches",
      "Differential Pressure",
      "Vacuum Gauges",
    ],
  },
  {
    category: "Mechanical Calibration",
    icon: Wrench,
    items: [
      "Torque Wrenches",
      "Force Gauges",
      "Hardness Testers",
      "Tachometers",
      "Vibration Meters",
    ],
  },
];

const benefits = [
  {
    title: "Minimize Downtime",
    description: "Calibrate equipment without removing it from your facility",
  },
  {
    title: "Cost Effective",
    description: "Eliminate transportation costs and logistics headaches",
  },
  {
    title: "Fast Response",
    description: "Same-day or next-day service available for urgent needs",
  },
  {
    title: "Certified Technicians",
    description: "Experienced engineers with industry-specific expertise",
  },
];

export default function OnsiteCalibrationPage() {
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
            src="/images/services/special/onsite_brand.png"
            alt="Onsite Calibration - Field Power Infrastructure"
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
              <span className="inline-block px-4 py-2 bg-[#DC2626]/20 text-[#DC2626] rounded-full text-sm font-medium mb-6">
                Field Services
              </span>
              <h1 className="text-5xl md:text-6xl font-black text-white uppercase leading-[0.95] mb-6">
                Onsite Calibration
              </h1>
              <p className="text-xl text-white/80 leading-relaxed">
                Professional calibration services at your facility. Our expert technicians 
                bring the laboratory to you, minimizing downtime and ensuring compliance.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Bar */}
      <section className="py-12 bg-[#DC2626]">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="text-white">
                <h3 className="font-bold text-lg mb-1">{benefit.title}</h3>
                <p className="text-white/80 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="content-section section-padding bg-[#FAFAFA] dark:bg-[#0F172A]">
        <div className="container-custom">
          <div className="text-center mb-16 reveal-item">
            <span className="text-[#DC2626] font-mono text-sm uppercase tracking-widest">
              Industries We Serve
            </span>
            <h2 className="text-4xl md:text-5xl font-black uppercase mt-4 text-[#0F172A] dark:text-white">
              Onsite Services by Industry
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
            {onsiteServices.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="reveal-item bg-white dark:bg-[#1E293B] rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="w-14 h-14 rounded-xl bg-[#DC2626]/10 dark:bg-[#DC2626]/20 flex items-center justify-center mb-4 group-hover:bg-[#DC2626] transition-colors">
                    <Icon className="w-7 h-7 text-[#DC2626] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0F172A] dark:text-white mb-2">{service.title}</h3>
                  <p className="text-[#64748B] dark:text-[#94A3B8]">{service.description}</p>
                </div>
              );
            })}
          </div>

          {/* Calibration Types */}
          <div className="text-center mb-12 reveal-item">
            <span className="text-[#DC2626] font-mono text-sm uppercase tracking-widest">
              Our Capabilities
            </span>
            <h2 className="text-4xl md:text-5xl font-black uppercase mt-4 text-[#0F172A] dark:text-white">
              Field Calibration Services
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {calibrationTypes.map((type) => {
              const Icon = type.icon;
              return (
                <div
                  key={type.category}
                  className="reveal-item bg-white dark:bg-[#1E293B] rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-[#DC2626]/10 dark:bg-[#DC2626]/20 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-[#DC2626]" />
                    </div>
                    <h3 className="text-xl font-bold text-[#0F172A] dark:text-white">{type.category}</h3>
                  </div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {type.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-[#64748B] dark:text-[#94A3B8]">
                        <CheckCircle2 className="w-4 h-4 text-[#059669] flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-white dark:bg-[#1E293B]">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-[#DC2626] font-mono text-sm uppercase tracking-widest">
              How It Works
            </span>
            <h2 className="text-4xl md:text-5xl font-black uppercase mt-4 text-[#0F172A] dark:text-white">
              Our Onsite Process
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { 
                step: "01", 
                title: "Schedule", 
                desc: "Book your onsite calibration appointment",
                icon: Clock
              },
              { 
                step: "02", 
                title: "Prepare", 
                desc: "Our team arrives with mobile calibration lab",
                icon: Truck
              },
              { 
                step: "03", 
                title: "Calibrate", 
                desc: "Professional calibration at your facility",
                icon: Wrench
              },
              { 
                step: "04", 
                title: "Certify", 
                desc: "Receive digital certificates on the spot",
                icon: Shield
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={item.step} className="relative text-center">
                  <div className="w-20 h-20 mx-auto rounded-full bg-[#DC2626] flex items-center justify-center mb-6 shadow-lg shadow-[#DC2626]/20">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <span className="text-sm font-mono text-[#DC2626] mb-2 block">Step {item.step}</span>
                  <h3 className="text-xl font-bold text-[#0F172A] dark:text-white mb-2">{item.title}</h3>
                  <p className="text-[#64748B] dark:text-[#94A3B8]">{item.desc}</p>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-10 left-[60%] w-full h-0.5 bg-gradient-to-r from-[#DC2626]/30 to-transparent" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Coverage Area */}
      <section className="py-20 bg-[#0F172A] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
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
                Service Coverage
              </span>
              <h2 className="text-4xl md:text-5xl font-black uppercase mt-4 mb-6 text-white">
                Kingdom-Wide Coverage
              </h2>
              <p className="text-white/70 text-lg mb-8">
                Our mobile calibration units cover all major industrial cities across Saudi Arabia, 
                bringing ISO 17025 accredited services to your doorstep.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Riyadh",
                  "Jeddah",
                  "Dammam",
                  "Khobar",
                  "Jubail",
                  "Yanbu",
                  "Rabigh",
                  "Taif",
                ].map((city) => (
                  <div key={city} className="flex items-center gap-2 text-white/80">
                    <MapPin className="w-4 h-4 text-[#DC2626]" />
                    {city}
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/services/special/van_services_brand.png"
                alt="Expert technician performing on-site electrical testing"
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-[#DC2626] text-white p-6 rounded-xl shadow-xl">
                <div className="text-3xl font-black">24/7</div>
                <div className="text-sm">Emergency Service</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white dark:bg-[#1E293B]">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-black uppercase text-[#0F172A] dark:text-white mb-6">
              Book Onsite Calibration
            </h2>
            <p className="text-[#64748B] dark:text-[#94A3B8] text-lg mb-8 max-w-2xl mx-auto">
              Contact us to schedule your onsite calibration service. Our team will bring 
              the laboratory to your facility.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
              <MagneticButton href="/contact?service=onsite" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#DC2626] text-white rounded-lg font-bold text-lg hover:bg-[#B91C1C] transition-colors">
                <Phone className="w-5 h-5" />
                Schedule Service
              </MagneticButton>
              <MagneticButton href="/services/van-services" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0F172A] text-white rounded-lg font-bold text-lg hover:bg-[#1E293B] transition-colors">
                <Truck className="w-5 h-5" />
                Van Setup Solutions
              </MagneticButton>
              <MagneticButton href="tel:+966114210481" className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-[#0F172A] dark:border-white text-[#0F172A] dark:text-white rounded-lg font-bold text-lg hover:bg-[#0F172A] hover:text-white dark:hover:bg-white dark:hover:text-[#0F172A] transition-colors">
                <Phone className="w-5 h-5" />
                Call Now
              </MagneticButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
