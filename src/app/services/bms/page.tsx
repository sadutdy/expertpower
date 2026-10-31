"use client";

import { ArrowRight, Building2, CheckCircle2, ExternalLink } from "lucide-react";
import { MagneticButton } from "@/components/MagneticButton";

export default function BMSServicePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-[#0F172A] relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img
            src="/images/services/overview/bms.png"
            alt="Building Management System Control Room"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A] via-[#0F172A]/90 to-[#0F172A]/70" />
        </div>
        <div className="container-custom relative z-10">
          <div className="flex items-center gap-2 text-white/60 mb-4">
            <span>Services</span>
            <span>/</span>
            <span className="text-[#DC2626]">BMS Solutions</span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase text-white leading-[0.9]">
            Building Management
            <br />
            System (BMS) Solutions
          </h1>
          <p className="text-xl text-white/70 mt-6 max-w-2xl leading-relaxed">
            Delivering advanced building automation, energy monitoring, and facility management 
            solutions across Saudi Arabia in partnership with Wizard Engineering.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-padding bg-white dark:bg-[#0F172A]">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <Building2 className="w-16 h-16 text-[#DC2626] mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-black uppercase mb-6 text-[#0F172A] dark:text-white">
              Smart Building Automation & Management
            </h2>
            <p className="text-[#64748B] dark:text-[#94A3B8] leading-relaxed mb-8 text-lg">
              Expert Power delivers Building Management System (BMS) solutions in partnership with{" "}
              <strong className="text-[#0F172A] dark:text-white font-bold">Wizard Engineering</strong>{" "}
              for commercial, industrial, healthcare, and infrastructure projects across Saudi Arabia. 
              Through our partnership, we help customers improve operational efficiency, enhance 
              monitoring capabilities, and optimize energy performance.
            </p>

            <div className="bg-gray-50 dark:bg-[#1E293B] rounded-2xl p-6 md:p-8 border border-gray-100 dark:border-white/10 text-left mb-12">
              <h3 className="text-xl font-bold text-[#0F172A] dark:text-white mb-6 uppercase border-b border-gray-200 dark:border-white/10 pb-3">
                Our BMS Services Include:
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "BMS project consultation and engineering",
                  "System design and configuration",
                  "BMS panel supply and integration",
                  "Building automation solutions",
                  "Energy monitoring and management",
                  "Data acquisition and reporting solutions",
                  "Testing and commissioning",
                  "Technical support and maintenance",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[#475569] dark:text-gray-200">
                    <CheckCircle2 className="w-5 h-5 text-[#DC2626] flex-shrink-0 mt-0.5" />
                    <span className="font-medium text-sm md:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Partnership Block */}
            <div className="bg-[#DC2626]/5 rounded-2xl p-6 md:p-8 border border-[#DC2626]/20 text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#DC2626]/10 text-[#DC2626] rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                Strategic Alliance
              </div>
              <h3 className="text-xl md:text-2xl font-black text-[#0F172A] dark:text-white mb-4">
                In Partnership with Wizard Engineering
              </h3>
              <p className="text-[#64748B] dark:text-[#94A3B8] max-w-xl mx-auto mb-6 text-sm md:text-base leading-relaxed">
                By combining Expert Power&apos;s localized delivery capability and engineering standards 
                with Wizard Engineering&apos;s deep expertise in smart automation, we bring cutting-edge, 
                compliant building systems directly to your site.
              </p>
              <a
                href="https://www.wizardengineering.co"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#DC2626] hover:text-[#B91C1C] font-bold text-base transition-colors group"
              >
                Visit Wizard Engineering
                <ExternalLink className="w-4.5 h-4.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#FAFAFA] dark:bg-[#0F172A] border-t border-gray-100 dark:border-white/10">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-black uppercase text-[#0F172A] dark:text-white mb-6">
            Optimize Your Facility Today
          </h2>
          <p className="text-[#64748B] dark:text-[#94A3B8] max-w-xl mx-auto mb-8">
            Speak to our building automation specialists about implementing a custom BMS solution 
            tailored to your project’s requirements.
          </p>
          <MagneticButton
            href="/contact?service=bms"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#DC2626] text-white rounded font-bold text-lg hover:bg-[#B91C1C] transition-colors"
          >
            Get BMS Consultation
            <ArrowRight className="w-5 h-5" />
          </MagneticButton>
        </div>
      </section>
    </>
  );
}
