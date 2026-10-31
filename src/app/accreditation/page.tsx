"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "@/lib/gsap";

import { motion } from "framer-motion";
import {
  Award,
  FileCheck,
  Globe,
  Heart,
  Leaf,
  Landmark,
  CheckCircle2,
  Download,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { MagneticButton } from "@/components/MagneticButton";

const accreditations = [
  {
    title: "ISO/IEC 17025:2017",
    description: "General requirements for the competence of testing and calibration laboratories",
    scope: "Calibration Laboratory",
    icon: Award,
  },
  {
    title: "ISO 9001:2015",
    description: "Quality Management Systems certification for consistent service delivery",
    scope: "Quality Management",
    icon: FileCheck,
  },
  {
    title: "QAI / ILAC",
    description: "Recognized by Quality and Accreditation Institute (QAI) and ILAC MRA",
    scope: "International Recognition",
    icon: Globe,
  },
  {
    title: "SAAC Accreditation",
    description: "Accredited by the Saudi Accreditation Center",
    scope: "National Accreditation",
    icon: Landmark,
  },
  {
    title: "ISO 45001",
    description: "Occupational Health & Safety Management System certification",
    scope: "Health & Safety",
    icon: Heart,
  },
  {
    title: "ISO 14001:2015",
    description: "Environmental Management System certification",
    scope: "Environmental Management",
    icon: Leaf,
  },
];

const certificateImages = [
  { title: "SASO Private Laboratory License", src: "/images/certs/SASO%20Private%20Laboratory%20License.jpeg" },
  { title: "SAAC Certificate", src: "/images/certs/SAAC%20certificate.jpeg" },
  { title: "QAI Certificate", src: "/images/certs/QAI.png" },
  { title: "ISO/IEC 17025:2017", src: "/images/certs/iso%2017025.jpeg" },
  { title: "ISO 9001:2015", src: "/images/certs/iso%2090012015.jpeg" },
  { title: "Quality Management", src: "/images/certs/Quality%20Management.jpeg" },
  { title: "Occupational Health", src: "/images/certs/Occupational%20Health.jpeg" },
  { title: "Environmental Management", src: "/images/certs/Environmental%20management.jpeg" },
];

const capabilities = [
  "Electrical & Electronic Calibration",
  "Temperature & Humidity Calibration",
  "Pressure & Vacuum Calibration",
  "Dimensional Calibration",
  "Mass & Force Calibration",
  "Torque Calibration",
  "Vibration & Speed Calibration",
  "Optical & Radiation Calibration",
];

const documents = [
  { name: "SASO Private Laboratory License (PLL 0073)", size: "384 KB", type: "PDF" },
  { name: "ISO 17025:2017 Certificate", size: "2.4 MB", type: "PDF" },
  { name: "Scope of Accreditation", size: "1.8 MB", type: "PDF" },
  { name: "Quality Policy", size: "856 KB", type: "PDF" },
];

function CertificateSlider({ images }: { images: typeof certificateImages }) {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const total = images.length;

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 3000);
    return () => clearInterval(interval);
  }, [isPaused, total]);

  const goPrev = () => setCurrent((prev) => (prev - 1 + total) % total);
  const goNext = () => setCurrent((prev) => (prev + 1) % total);

  return (
    <div
      className="relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Progress dots */}
      <div className="flex justify-center gap-2 mb-4">
        {images.map((cert, index) => (
          <button
            key={cert.title}
            onClick={() => setCurrent(index)}
            className={`h-2 rounded-full transition-all ${
              index === current ? "w-6 bg-[#DC2626]" : "w-2 bg-gray-300 dark:bg-gray-600"
            }`}
            aria-label={`Go to ${cert.title}`}
            aria-current={index === current}
          />
        ))}
      </div>

      <div className="relative">
      <motion.div
        className="flex"
        animate={{ x: `-${current * 100}%` }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        {images.map((cert) => (
          <div
            key={cert.title}
            className="w-full flex-shrink-0 px-2 md:px-4 flex"
          >
            <div className="w-full max-w-5xl mx-auto flex flex-col rounded-xl overflow-hidden shadow-lg bg-white dark:bg-[#1E293B]">
              <div className="p-4 text-center border-b border-gray-100 dark:border-[#334155]">
                <span className="font-bold text-sm text-[#0F172A] dark:text-white">{cert.title}</span>
              </div>
              <div className="flex-1 flex items-center justify-center p-4 md:p-8 bg-gray-50 dark:bg-[#0F172A]/50">
                <img
                  src={cert.src}
                  alt={cert.title}
                  className="max-h-[70vh] w-auto max-w-full object-contain rounded-lg"
                />
              </div>
            </div>
          </div>
        ))}
      </motion.div>

      {/* Arrows */}
      <button
        onClick={goPrev}
        className="absolute top-1/2 -translate-y-1/2 left-6 z-10 w-10 h-10 rounded-full bg-white/90 dark:bg-[#1E293B]/90 text-[#0F172A] dark:text-white shadow-lg hidden md:flex items-center justify-center hover:bg-[#DC2626] hover:text-white transition-colors"
        aria-label="Previous certificate"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={goNext}
        className="absolute top-1/2 -translate-y-1/2 right-6 z-10 w-10 h-10 rounded-full bg-white/90 dark:bg-[#1E293B]/90 text-[#0F172A] dark:text-white shadow-lg hidden md:flex items-center justify-center hover:bg-[#DC2626] hover:text-white transition-colors"
        aria-label="Next certificate"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
      </div>

      {/* Arrows below the slide on phones */}
      <div className="flex md:hidden justify-center gap-4 mt-4">
        <button
          onClick={goPrev}
          className="w-12 h-12 rounded-full bg-white dark:bg-[#1E293B] text-[#0F172A] dark:text-white shadow-lg flex items-center justify-center active:bg-[#DC2626] active:text-white transition-colors"
          aria-label="Previous certificate"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={goNext}
          className="w-12 h-12 rounded-full bg-white dark:bg-[#1E293B] text-[#0F172A] dark:text-white shadow-lg flex items-center justify-center active:bg-[#DC2626] active:text-white transition-colors"
          aria-label="Next certificate"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}

export default function AccreditationPage() {
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
      <section ref={heroRef} className="relative min-h-[50vh] flex items-center overflow-hidden">
        <div className="hero-bg absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&q=80"
            alt="Accreditation"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A] via-[#0F172A]/80 to-transparent" />
        </div>

        <div className="container-custom relative z-10 pt-32 pb-16">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 bg-[#DC2626]/20 text-[#DC2626] rounded-full text-sm font-medium mb-6">
                Quality Assurance
              </span>
              <h1 className="text-5xl md:text-6xl font-black text-white uppercase leading-[0.95] mb-6">
                Accreditation
              </h1>
              <p className="text-xl text-white/80 leading-relaxed">
                Expert Power maintains the highest standards of quality and competence,
                backed by internationally recognized accreditations.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Accreditations Grid */}
      <section className="content-section section-padding bg-[#FAFAFA] dark:bg-[#0F172A]">
        <div className="container-custom">
          <div className="text-center mb-16 reveal-item">
            <span className="text-[#DC2626] font-mono text-sm uppercase tracking-widest">
              Our Certifications
            </span>
            <h2 className="text-4xl md:text-5xl font-black uppercase mt-4 text-[#0F172A] dark:text-white">
              Accreditations & Recognition
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {accreditations.map((acc) => {
              const Icon = acc.icon;
              return (
                <div
                  key={acc.title}
                  className="reveal-item bg-white dark:bg-[#1E293B] rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-[#DC2626]/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-7 h-7 text-[#DC2626]" />
                    </div>
                    <div>
                      <span className="text-sm text-[#DC2626] font-medium">{acc.scope}</span>
                      <h3 className="text-xl font-bold text-[#0F172A] dark:text-white mb-2">{acc.title}</h3>
                      <p className="text-[#64748B] dark:text-[#94A3B8]">{acc.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Certificate Marquee */}
          <div className="mb-20 reveal-item overflow-hidden">
            <div className="text-center mb-10">
              <h3 className="text-2xl md:text-3xl font-black uppercase text-[#0F172A] dark:text-white">
                Certificate Gallery
              </h3>
              <p className="text-[#64748B] dark:text-[#94A3B8] mt-2 text-sm">
                Sample previews of our accreditations and certifications
              </p>
            </div>
            <CertificateSlider images={certificateImages} />
          </div>

          {/* Capabilities */}
          <div className="bg-[#0F172A] rounded-2xl p-8 md:p-12 reveal-item">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-[#DC2626] font-mono text-sm uppercase tracking-widest">
                  Accredited Scope
                </span>
                <h2 className="text-3xl md:text-4xl font-black uppercase mt-4 mb-6 text-white">
                  Calibration Capabilities
                </h2>
                <p className="text-white/70 mb-8">
                  Our ISO 17025:2017 accreditation covers a comprehensive range of calibration
                  disciplines, ensuring we can meet your diverse measurement needs.
                </p>
                <MagneticButton
                  onClick={() => window.open("mailto:info@expertpower.com.sa?subject=Request:%20Scope%20of%20Accreditation&body=Hello,%0A%0AI%20would%20like%20to%20request%20the%20Scope%20of%20Accreditation%20document.%0A%0ABest%20regards", "_blank")}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#DC2626] text-white rounded-lg font-bold hover:bg-[#B91C1C] transition-colors"
                >
                  <Download className="w-5 h-5" />
                  View Full Scope
                </MagneticButton>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {capabilities.map((cap) => (
                  <div key={cap} className="flex items-center gap-3 text-white">
                    <CheckCircle2 className="w-5 h-5 text-[#DC2626]" />
                    <span className="text-sm">{cap}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Documents */}
      <section className="section-padding bg-white dark:bg-[#0F172A]">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-[#DC2626] font-mono text-sm uppercase tracking-widest">
              Downloads
            </span>
            <h2 className="text-4xl md:text-5xl font-black uppercase mt-4 text-[#0F172A] dark:text-white">
              Accreditation Documents
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            {documents.map((doc) => (
              <div
                key={doc.name}
                className="flex items-center justify-between p-4 bg-[#FAFAFA] dark:bg-[#1E293B] rounded-lg mb-4 hover:bg-[#f0f0f0] dark:hover:bg-[#334155] transition-colors group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#DC2626]/10 flex items-center justify-center">
                    <span className="text-xs font-bold text-[#DC2626]">{doc.type}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0F172A] dark:text-white">{doc.name}</h4>
                    <span className="text-sm text-[#64748B] dark:text-[#94A3B8]">{doc.size}</span>
                  </div>
                </div>
                <MagneticButton
                  onClick={() => window.open(`mailto:info@expertpower.com.sa?subject=${encodeURIComponent(`Document Request: ${doc.name}`)}&body=${encodeURIComponent(`Hello,\n\nI would like to request the following document:\n\nDocument: ${doc.name}\nType: ${doc.type}\n\nPlease share the download link or attach the file.\n\nBest regards`)}`, "_blank")}
                  className="p-2 text-[#DC2626] hover:bg-[#DC2626]/10 rounded-lg transition-colors"
                >
                  <Download className="w-5 h-5" />
                </MagneticButton>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
