"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

import {
  Gauge,
  Wrench,
  FlaskConical,
  ClipboardCheck,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";
import { MagneticButton } from "@/components/MagneticButton";


const services = [
  {
    id: "calibration",
    title: "Calibration Services",
    description:
      "Comprehensive calibration services for electrical, mechanical, dimensional, temperature, and pressure instruments with full ISO 17025 traceability.",
    icon: Gauge,
    image: "/images/services/overview/calibration.png",
    features: [
      "Electrical Calibration (Multimeters, Oscilloscopes)",
      "Mechanical Calibration (Torque, Force, Hardness)",
      "Dimensional Calibration (Micrometers, Calipers)",
      "Temperature & Humidity Calibration",
      "Pressure & Vacuum Calibration",
      "On-site and In-lab Services",
    ],
    color: "#DC2626",
    slug: "/services/calibration",
  },
  {
    id: "maintenance",
    title: "Maintenance & Support",
    description:
      "Comprehensive maintenance programs to keep your equipment operating at peak performance and minimize downtime.",
    icon: Wrench,
    image: "/images/services/overview/maintenance.png",
    features: [
      "Preventive Maintenance Programs",
      "Corrective Maintenance Services",
      "Equipment Repair",
      "Spare Parts Supply",
      "Emergency Support",
      "Annual Maintenance Contracts",
    ],
    color: "#059669",
    slug: "/services/maintenance",
  },
  {
    id: "testing",
    title: "Testing & Analysis",
    description:
      "Advanced testing and analytical services for quality assurance, compliance verification, and product validation.",
    icon: FlaskConical,
    image: "/images/services/overview/testing.png",
    features: [
      "Electrical Safety Testing",
      "Performance Testing",
      "Quality Assurance Testing",
      "Compliance Verification",
    ],
    color: "#7C3AED",
    slug: "/services/testing",
  },
  {
    id: "inspection",
    title: "Inspection & Verification",
    description:
      "Thorough inspection and verification services to ensure your equipment meets regulatory and industry standards.",
    icon: ClipboardCheck,
    image: "/images/services/overview/inspection.png",
    features: [
      "General Equipment Inspection",
      "Lifting Equipment Inspection",
      "Third-Party Verification",
      "Lifting Gear & Accessories",
      "Electrical Inspection",
    ],
    color: "#EA580C",
    slug: "/services/inspection",
  },
];

export default function ServicesPage() {
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardsRef.current) return;

    const cards = cardsRef.current.querySelectorAll(".service-card");
    
    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: index * 0.15,
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
              What We Offer
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase mt-4 text-white leading-[0.9]">
              Our Services
            </h1>
            <p className="text-xl text-white/70 mt-6 leading-relaxed">
              Comprehensive calibration and engineering solutions designed to meet 
              the diverse needs of industries across Saudi Arabia.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding bg-[#FAFAFA] dark:bg-[#0F172A]">
        <div className="container-custom">
          <div ref={cardsRef} className="space-y-12">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  className="service-card bg-white dark:bg-[#1E293B] rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    {/* Image */}
                    <div className="relative h-64 lg:h-auto overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                      <div
                        className="absolute inset-0 opacity-60"
                        style={{
                          background: `linear-gradient(135deg, ${service.color}40 0%, transparent 100%)`,
                        }}
                      />
                      {/* Icon Badge */}
                      <div
                        className="absolute top-6 left-6 w-16 h-16 rounded-xl flex items-center justify-center"
                        style={{ backgroundColor: service.color }}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                      <h2 className="text-3xl font-black text-[#0F172A] dark:text-white mb-4">
                        {service.title}
                      </h2>
                      <p className="text-[#64748B] dark:text-[#94A3B8] mb-6 leading-relaxed">
                        {service.description}
                      </p>

                      {/* Features */}
                      <ul className="space-y-3 mb-8">
                        {service.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-start gap-3 text-sm text-[#0F172A] dark:text-white"
                          >
                            <CheckCircle2
                              className="w-5 h-5 flex-shrink-0 mt-0.5"
                              style={{ color: service.color }}
                            />
                            {feature}
                          </li>
                        ))}
                      </ul>

                      {/* CTA */}
                      <div>
                        <MagneticButton
                          href={service.slug}
                          className="group inline-flex items-center gap-2 px-6 py-3 rounded font-semibold text-white transition-colors"
                          style={{ backgroundColor: service.color }}
                        >
                          Learn More
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </MagneticButton>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-white dark:bg-[#0F172A]">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-[#DC2626] font-mono text-sm uppercase tracking-widest">
              How We Work
            </span>
            <h2 className="text-4xl md:text-5xl font-black uppercase mt-4 text-[#0F172A] dark:text-white">
              Our Process
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Request",
                description: "Submit your calibration request with equipment details",
              },
              {
                step: "02",
                title: "Consultation",
                description: "Receive a detailed quotation within 24 hours",
              },
              {
                step: "03",
                title: "Service",
                description: "Equipment calibrated by certified technicians",
              },
              {
                step: "04",
                title: "Delivery",
                description: "Receive calibrated equipment with certificates",
              },
            ].map((item) => (
              <div key={item.step} className="relative text-center">
                <div className="w-20 h-20 mx-auto rounded-full bg-[#DC2626]/10 dark:bg-[#DC2626]/20 flex items-center justify-center mb-6">
                  <span className="text-2xl font-black text-[#DC2626]">
                    {item.step}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#0F172A] dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-[#64748B] dark:text-[#94A3B8] text-sm">{item.description}</p>
                
                {/* Connector Line */}
                <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-[#DC2626]/20 dark:bg-[#DC2626]/30" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0F172A]">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-black uppercase text-white mb-6">
            Need a Custom Solution?
          </h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto">
            Contact our team to discuss your specific calibration and engineering requirements.
          </p>
          <MagneticButton href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-[#DC2626] text-white rounded font-bold text-lg hover:bg-[#B91C1C] transition-colors">
            Get in Touch
            <ArrowRight className="w-5 h-5" />
          </MagneticButton>
        </div>
      </section>
    </>
  );
}
