"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

import { motion } from "framer-motion";
import {
  Truck,
  Zap,
  Bolt,
  Shield,
  CheckCircle2,
  MapPin,
  ArrowRight,
  Phone,
  Star,
} from "lucide-react";
import { MagneticButton } from "@/components/MagneticButton";

const vanCapabilities = [
  {
    icon: Zap,
    title: "Design & Equipment Selection",
    items: [
      "Project Consultation & Planning",
      "Vehicle Selection & Space Planning",
      "HV/LV Testing Systems Procurement",
      "Protection Relay Test Equipment Selection",
      "Primary & Secondary Injection Kits Selection",
      "Test Lead & Cable Assembly Design",
      "Custom Test Lead Reel & Terminal Panels Setup",
    ],
  },
  {
    icon: Bolt,
    title: "Integration & Commissioning",
    items: [
      "Onboard Generator & Power System Integration",
      "Electrical Installation & Distribution Support",
      "Safety Systems & Emergency Shutdown Integration",
      "Fire Suppression System Installation",
      "Lighting & Electrical Distribution Setup",
      "Grounding & Earthing System Installation",
    ],
  },
];

const benefits = [
  {
    title: "Tailored Solutions",
    description: "We design every mobile laboratory to meet your specific operational and technical field-testing needs.",
  },
  {
    title: "Premium Equipment",
    description: "We source and install high-quality testing instruments from leading global calibration and HV manufacturers.",
  },
  {
    title: "Turnkey Execution",
    description: "From vehicle layout and power system integration to equipment commissioning, we handle the entire setup.",
  },
  {
    title: "Compliance Focused",
    description: "Solutions designed to meet applicable safety, electrical, and operational standards for field testing.",
  },
];

const features = [
  "Project consultation and planning",
  "Equipment selection and supply",
  "Power system integration",
  "Electrical installation support",
  "System integration and commissioning",
  "Testing and verification support",
];

export default function VanServicesPage() {
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
      <section ref={heroRef} className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="hero-bg absolute inset-0">
          <img
            src="/images/services/special/van_services_brand.png"
            alt="High voltage testing van setup"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A] via-[#0F172A]/85 to-transparent" />
        </div>
        
        <div className="container-custom relative z-10 pt-32 pb-20">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-6">
                <span className="inline-block px-4 py-2 bg-[#DC2626]/20 text-[#DC2626] rounded-full text-sm font-medium">
                  Van Setup Solutions
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-white/10 text-white rounded-full text-sm">
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  Premium Quality
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-black text-white uppercase leading-[0.95] mb-6">
                Mobile Testing & Commissioning Van Setup Solutions
              </h1>
              <p className="text-xl text-white/80 leading-relaxed mb-8">
                Expert Power provides end-to-end support for the design, supply, integration, and commissioning of specialized mobile testing and commissioning vans. We assist customers in selecting suitable equipment and implementing reliable solutions based on their operational requirements.
              </p>
              <div className="flex flex-wrap gap-4">
                <MagneticButton href="/contact?service=van" className="inline-flex items-center gap-2 px-6 py-3 bg-[#DC2626] text-white rounded-lg font-bold hover:bg-[#B91C1C] transition-colors">
                  <Phone className="w-5 h-5" />
                  Request Consultation
                </MagneticButton>
                <MagneticButton href="#capabilities" className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white border border-white/20 rounded-lg font-bold hover:bg-white/20 transition-colors">
                  View Capabilities
                </MagneticButton>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-10 bg-[#DC2626]">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
            <div>
              <div className="text-4xl font-black mb-1">100%</div>
              <div className="text-white/80 text-sm">Custom Engineered</div>
            </div>
            <div>
              <div className="text-4xl font-black mb-1">Turnkey</div>
              <div className="text-white/80 text-sm">Integration Service</div>
            </div>
            <div>
              <div className="text-4xl font-black mb-1">Premium</div>
              <div className="text-white/80 text-sm">Test Equipment Brands</div>
            </div>
            <div>
              <div className="text-4xl font-black mb-1">KSA</div>
              <div className="text-white/80 text-sm">Nationwide Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Van Setup Solutions */}
      <section className="content-section section-padding bg-white dark:bg-[#1E293B]">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="reveal-item">
              <span className="text-[#DC2626] font-mono text-sm uppercase tracking-widest">
                Tailored Mobile Labs
              </span>
              <h2 className="text-4xl md:text-5xl font-black uppercase mt-4 mb-6 text-[#0F172A] dark:text-white">
                Specialized Van Solutions
              </h2>
              <p className="text-[#64748B] dark:text-[#94A3B8] text-lg mb-6">
                We work closely with customers to develop customized mobile solutions that meet their specific testing and commissioning needs. From selecting suitable vehicles and high-precision equipment to integrating robust power and HVAC systems, we deliver fully commissioned mobile laboratories designed for reliable field operations.
              </p>
              <ul className="space-y-3">
                {features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#059669]" />
                    <span className="text-[#0F172A] dark:text-white font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="reveal-item relative">
              <img
                src="/images/services/special/van_services_brand.png"
                alt="Mobile testing van setup"
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-[#DC2626] text-white p-6 rounded-xl shadow-xl">
                <Truck className="w-8 h-8 mb-2" />
                <div className="text-sm font-medium">Van Setup Solutions</div>
                <div className="text-xs opacity-80">Design to Commissioning</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section id="capabilities" className="section-padding bg-[#FAFAFA] dark:bg-[#0F172A]">
        <div className="container-custom">
          <div className="text-center mb-16 reveal-item">
            <span className="text-[#DC2626] font-mono text-sm uppercase tracking-widest">
              Capabilities & Offerings
            </span>
            <h2 className="text-4xl md:text-5xl font-black uppercase mt-4 text-[#0F172A] dark:text-white">
              Integration & Design Expertise
            </h2>
            <p className="text-[#64748B] dark:text-[#94A3B8] mt-4 max-w-2xl mx-auto">
              We provide comprehensive engineering, power integration, and layout customization support, ensuring your mobile testing van matches the requirements of high-demand field tasks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {vanCapabilities.map((cap) => {
              const Icon = cap.icon;
              return (
                <div
                  key={cap.title}
                  className="reveal-item bg-white dark:bg-[#1E293B] rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-[#DC2626]/10 flex items-center justify-center group-hover:bg-[#DC2626] transition-colors">
                      <Icon className="w-6 h-6 text-[#DC2626] group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-xl font-bold text-[#0F172A] dark:text-white">{cap.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cap.items.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1 bg-[#FAFAFA] dark:bg-[#0F172A] rounded-full text-sm text-[#64748B] dark:text-[#94A3B8]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-[#0F172A]">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-[#DC2626] font-mono text-sm uppercase tracking-widest">
              Advantages
            </span>
            <h2 className="text-4xl md:text-5xl font-black uppercase mt-4 text-white">
              Why Partner with Expert Power?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="bg-white/5 backdrop-blur rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-[#DC2626]/20 flex items-center justify-center mb-4">
                  <span className="text-xl font-black text-[#DC2626]">0{index + 1}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-white/60 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section className="section-padding bg-white dark:bg-[#1E293B]">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <img
                  src="/images/services/special/van_services_brand.png"
                  alt="Saudi Arabia Regional Coverage"
                  className="rounded-xl shadow-xl"
                />
                <div className="absolute top-4 right-4 bg-white dark:bg-[#1E293B] rounded-lg shadow-lg p-4">
                  <div className="flex items-center gap-2 text-[#0F172A] dark:text-white font-bold">
                    <MapPin className="w-5 h-5 text-[#DC2626]" />
                    All Major Cities
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-[#DC2626] font-mono text-sm uppercase tracking-widest">
                Service Area
              </span>
              <h2 className="text-4xl md:text-5xl font-black uppercase mt-4 mb-6 text-[#0F172A] dark:text-white">
                Delivery Across Saudi Arabia
              </h2>
              <p className="text-[#64748B] dark:text-[#94A3B8] text-lg mb-8">
                Our specialized engineering and commissioning team serves clients throughout the Kingdom. We deliver, install, and commission customized mobile testing setups at industrial sites, utilities, and corporate facilities across KSA.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Riyadh & Central Region",
                  "Jeddah & Western Region", 
                  "Dammam & Eastern Region",
                  "All Industrial Cities (Jubail, Yanbu)",
                ].map((region) => (
                  <div key={region} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#DC2626]" />
                    <span className="text-[#0F172A] dark:text-white">{region}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-[#FAFAFA] dark:bg-[#0F172A]">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-[#DC2626] font-mono text-sm uppercase tracking-widest">
              Our Process
            </span>
            <h2 className="text-4xl md:text-5xl font-black uppercase mt-4 text-[#0F172A] dark:text-white">
              How We Deliver Custom Vans
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", desc: "Project planning, needs assessment, and vehicle selection" },
              { step: "02", title: "Design & Select", desc: "Equipment selection, physical layout, and power engineering" },
              { step: "03", title: "Integration", desc: "Onboard installation of power, cabling, and safety systems" },
              { step: "04", title: "Commissioning", desc: "Testing, verification, handover, and technical training" },
            ].map((item, index) => (
              <div key={item.step} className="relative text-center">
                <div className="w-20 h-20 mx-auto rounded-full bg-[#DC2626] flex items-center justify-center mb-6 shadow-lg shadow-[#DC2626]/20">
                  <span className="text-2xl font-black text-white">{item.step}</span>
                </div>
                <h3 className="text-xl font-bold text-[#0F172A] dark:text-white mb-2">{item.title}</h3>
                <p className="text-[#64748B] dark:text-[#94A3B8]">{item.desc}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-full h-0.5 bg-gradient-to-r from-[#DC2626]/30 to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#DC2626]">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-black uppercase text-white mb-6">
              Develop Your Customized Mobile Solution
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Get in touch with our specialists to design, select equipment, and integrate a robust mobile testing and commissioning setup tailored to your operational requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <MagneticButton href="tel:+966114210481" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#DC2626] rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors">
                <Phone className="w-5 h-5" />
                Call Engineering Team
              </MagneticButton>
              <MagneticButton href="/contact?service=van" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0F172A] text-white rounded-lg font-bold text-lg hover:bg-[#1e293b] transition-colors">
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
