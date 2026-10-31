"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

import { motion } from "framer-motion";
import {
  Briefcase,
  MapPin,
  Clock,
  DollarSign,
  Users,
  Award,
  BookOpen,
  Heart,
  ArrowRight,
  Search,
} from "lucide-react";
import { MagneticButton } from "@/components/MagneticButton";


const benefits = [
  {
    icon: DollarSign,
    title: "Competitive Salary",
    description: "Attractive compensation packages based on experience and qualifications",
  },
  {
    icon: Award,
    title: "Professional Growth",
    description: "Continuous training and career advancement opportunities",
  },
  {
    icon: BookOpen,
    title: "Learning & Development",
    description: "Access to technical courses, certifications, and workshops",
  },
  {
    icon: Heart,
    title: "Health & Wellness",
    description: "Comprehensive medical insurance for you and your family",
  },
  {
    icon: Users,
    title: "Collaborative Culture",
    description: "Work with a team of skilled professionals in a supportive environment",
  },
  {
    icon: Clock,
    title: "Work-Life Balance",
    description: "Flexible working hours and generous annual leave",
  },
];

const openings = [
  {
    title: "Senior Calibration Technician",
    department: "Technical Operations",
    location: "Riyadh",
    type: "Full-time",
    experience: "5+ years",
  },
  {
    title: "Calibration Engineer - Electrical",
    department: "Engineering",
    location: "Jeddah",
    type: "Full-time",
    experience: "3+ years",
  },
  {
    title: "Quality Assurance Specialist",
    department: "Quality",
    location: "Riyadh",
    type: "Full-time",
    experience: "4+ years",
  },
  {
    title: "Repair Service Technician",
    department: "Repair Services",
    location: "Riyadh",
    type: "Full-time",
    experience: "2+ years",
  },
  {
    title: "Laboratory Manager",
    department: "Operations",
    location: "Riyadh",
    type: "Full-time",
    experience: "8+ years",
  },
  {
    title: "Sales Engineer",
    department: "Sales",
    location: "Dammam",
    type: "Full-time",
    experience: "3+ years",
  },
];

export default function CareersPage() {
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
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1600&q=80"
            alt="Careers"
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
                Join Our Team
              </span>
              <h1 className="text-5xl md:text-6xl font-black text-white uppercase leading-[0.95] mb-6">
                Careers at Expert Power
              </h1>
              <p className="text-xl text-white/80 leading-relaxed mb-8">
                Be part of Saudi Arabia&apos;s leading calibration and engineering company. 
                We&apos;re always looking for talented professionals to join our growing team.
              </p>
              <MagneticButton href="#open-positions" className="inline-flex items-center gap-2 px-6 py-3 bg-[#DC2626] text-white rounded-lg font-bold hover:bg-[#B91C1C] transition-colors">
                View Openings
                <ArrowRight className="w-5 h-5" />
              </MagneticButton>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="content-section section-padding bg-[#FAFAFA] dark:bg-[#0F172A]">
        <div className="container-custom">
          <div className="text-center mb-16 reveal-item">
            <span className="text-[#DC2626] font-mono text-sm uppercase tracking-widest">
              Why Join Us
            </span>
            <h2 className="text-4xl md:text-5xl font-black uppercase mt-4 text-[#0F172A] dark:text-white">
              Employee Benefits
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={benefit.title}
                  className="reveal-item bg-white dark:bg-[#1E293B] rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#DC2626]/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-[#DC2626]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0F172A] dark:text-white mb-2">{benefit.title}</h3>
                  <p className="text-[#64748B] dark:text-[#94A3B8] text-sm">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="open-positions" className="section-padding bg-white dark:bg-[#0F172A]">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="text-[#DC2626] font-mono text-sm uppercase tracking-widest">
                Current Opportunities
              </span>
              <h2 className="text-4xl md:text-5xl font-black uppercase mt-4 text-[#0F172A] dark:text-white">
                Open Positions
              </h2>
            </div>
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#64748B] dark:text-[#94A3B8]" />
              <input
                type="text"
                placeholder="Search positions..."
                className="pl-12 pr-4 py-3 rounded-lg border border-gray-200 dark:border-[#475569] focus:border-[#DC2626] focus:ring-2 focus:ring-[#DC2626]/20 outline-none transition-all w-full md:w-64"
              />
            </div>
          </div>

          <div className="space-y-4">
            {openings.map((job, index) => (
              <div
                key={job.title}
                className="bg-[#FAFAFA] dark:bg-[#1E293B] rounded-xl p-6 hover:bg-[#f0f0f0] dark:hover:bg-[#334155] transition-colors group"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-[#0F172A] dark:text-white mb-2 group-hover:text-[#DC2626] transition-colors">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm text-[#64748B] dark:text-[#94A3B8]">
                      <span className="flex items-center gap-1">
                        <Briefcase className="w-4 h-4" />
                        {job.department}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {job.type}
                      </span>
                      <span className="flex items-center gap-1">
                        <Award className="w-4 h-4" />
                        {job.experience}
                      </span>
                    </div>
                  </div>
                  <MagneticButton
                    onClick={() => window.open(`mailto:careers@expertpower.com.sa?subject=${encodeURIComponent(`Job Application: ${job.title}`)}&body=${encodeURIComponent(`Hello HR Team,\n\nI am interested in applying for the position of ${job.title}.\n\nPlease find my attached resume.\n\nBest regards`)}`, "_blank")}
                    className="px-6 py-3 bg-[#DC2626] text-white rounded-lg font-bold text-sm hover:bg-[#B91C1C] transition-colors whitespace-nowrap"
                  >
                    Apply Now
                  </MagneticButton>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0F172A]">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-black uppercase text-white mb-6">
              Don&apos;t See a Fit?
            </h2>
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
              We&apos;re always interested in meeting talented professionals. Send us your resume 
              and we&apos;ll keep you in mind for future opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <MagneticButton
                href="mailto:careers@expertpower.com.sa?subject=General%20Job%20Application&body=Hello%20HR%20Team%2C%0A%0AI%20would%20like%20to%20submit%20my%20resume%20for%20future%20opportunities.%0A%0APlease%20find%20my%20attached%20resume.%0A%0ABest%20regards"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#DC2626] text-white rounded-lg font-bold text-lg hover:bg-[#B91C1C] transition-colors"
              >
                Submit Resume
                <ArrowRight className="w-5 h-5" />
              </MagneticButton>
              <MagneticButton href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white border border-white/20 rounded-lg font-bold text-lg hover:bg-white/20 transition-colors">
                Contact HR
              </MagneticButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
