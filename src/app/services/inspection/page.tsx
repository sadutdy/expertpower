"use client";

import { ArrowRight, ClipboardCheck, CheckCircle2 } from "lucide-react";
import { MagneticButton } from "@/components/MagneticButton";

export default function InspectionServicePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-[#0F172A] relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img
            src="/images/services/overview/inspection.png"
            alt="Inspection"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A] via-[#0F172A]/90 to-[#0F172A]/70" />
        </div>
        <div className="container-custom relative z-10">
          <div className="flex items-center gap-2 text-white/60 mb-4">
            <span>Services</span>
            <span>/</span>
            <span className="text-[#EA580C]">Inspection</span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase text-white leading-[0.9]">
            Inspection
            <br />& Verification
          </h1>
          <p className="text-xl text-white/70 mt-6 max-w-2xl leading-relaxed">
            Thorough inspection and verification services to ensure your equipment 
            meets regulatory and industry standards.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-white dark:bg-[#0F172A]">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <ClipboardCheck className="w-16 h-16 text-[#EA580C] mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-black uppercase mb-6 text-[#0F172A] dark:text-white">
              Independent Inspection Services
            </h2>
            <p className="text-[#64748B] dark:text-[#94A3B8] leading-relaxed mb-8">
              Our inspection services provide independent verification of equipment 
              compliance, quality, and safety. We help you maintain regulatory compliance 
              and operational integrity.
            </p>
            <ul className="text-left space-y-4 max-w-xl mx-auto">
              {[
                "Incoming Goods Inspection",
                "In-Process Quality Checks",
                "Final Inspection Services",
                "Third-Party Verification",
                "Supplier Quality Audits",
                "Compliance Inspections",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-[#0F172A] dark:text-white">
                  <CheckCircle2 className="w-5 h-5 text-[#EA580C] flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#FAFAFA] dark:bg-[#0F172A]">
        <div className="container-custom text-center">
          <MagneticButton href="/contact?service=inspection" className="inline-flex items-center gap-2 px-8 py-4 bg-[#EA580C] text-white rounded font-bold text-lg hover:bg-[#C2410C] transition-colors">
            Book Inspection
            <ArrowRight className="w-5 h-5" />
          </MagneticButton>
        </div>
      </section>
    </>
  );
}
