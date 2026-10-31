"use client";

import { ArrowRight, Wrench, CheckCircle2 } from "lucide-react";
import { MagneticButton } from "@/components/MagneticButton";

export default function MaintenanceServicePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-[#0F172A] relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img
            src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1200&q=80"
            alt="Technician repairing industrial equipment"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A] via-[#0F172A]/90 to-[#0F172A]/70" />
        </div>
        <div className="container-custom relative z-10">
          <div className="flex items-center gap-2 text-white/60 mb-4">
            <span>Services</span>
            <span>/</span>
            <span className="text-[#059669]">Maintenance</span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase text-white leading-[0.9]">
            Maintenance
            <br />& Support
          </h1>
          <p className="text-xl text-white/70 mt-6 max-w-2xl leading-relaxed">
            Comprehensive maintenance programs to keep your equipment operating at 
            peak performance and minimize downtime.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-white dark:bg-[#0F172A]">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <Wrench className="w-16 h-16 text-[#059669] mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-black uppercase mb-6 text-[#0F172A] dark:text-white">
              Keep Your Equipment Running
            </h2>
            <p className="text-[#64748B] dark:text-[#94A3B8] leading-relaxed mb-8">
              Our maintenance services ensure your critical equipment remains operational 
              and accurate. We offer preventive maintenance programs, emergency repairs, 
              and comprehensive support contracts.
            </p>
            <ul className="text-left space-y-4 max-w-xl mx-auto">
              {[
                "Preventive Maintenance Programs",
                "Corrective Maintenance Services",
                "Equipment Repair & Refurbishment",
                "Support",
                "Annual Maintenance Contracts",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-[#0F172A] dark:text-white">
                  <CheckCircle2 className="w-5 h-5 text-[#059669] flex-shrink-0" />
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
          <MagneticButton href="/contact?service=maintenance" className="inline-flex items-center gap-2 px-8 py-4 bg-[#059669] text-white rounded font-bold text-lg hover:bg-[#047857] transition-colors">
            Schedule Maintenance
            <ArrowRight className="w-5 h-5" />
          </MagneticButton>
        </div>
      </section>
    </>
  );
}
