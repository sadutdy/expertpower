"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageCircle,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";
import { MagneticButton } from "@/components/MagneticButton";
import { submitContactForm, ApiError } from "@/lib/api-client";

const locations = [
  {
    city: "Riyadh",
    type: "Headquarters",
    address:
      "Expert Power Trading Est.\nSitteen Street, Al Malaz\nP.O.Box. 32933, Riyadh – 11438\nKingdom of Saudi Arabia",
    phone: "+966114210481",
    email: "info@expertpower.com.sa",
    hours: "Sun – Thu: 8AM – 6PM\nSat - 8Am - 2Pm",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Expert+Power+Trading+Est+Sitteen+Street+Al+Malaz+Riyadh+11438+Saudi+Arabia",
  },
  {
    city: "Dammam",
    type: "Branch Office",
    address:
      "Daharan – Jubail Expressway\nAl Badia District, Al-Qatif – 32656\nDammam\nKingdom of Saudi Arabia",
    phone: "+966114210481",
    email: "info@expertpower.com.sa",
    hours: "Sun – Thu: 8AM – 6PM\nSat - 8Am - 2Pm",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Daharan+Jubail+Expressway+Al+Badia+District+Al+Qatif+32656+Dammam+Saudi+Arabia",
  },
];

const serviceOptions = [
  "Calibration Service",
  "Rental Service",
  "Engineering Solutions",
  "Maintenance & Support",
  "Testing & Analysis",
  "Inspection & Verification",
  "Others",
];

function mapServiceParam(param: string): string {
  const p = param.toLowerCase();
  if (p.includes("calibration")) return "Calibration Service";
  if (p.includes("rental")) return "Rental Service";
  if (p.includes("engineering")) return "Engineering Solutions";
  if (p.includes("maintenance")) return "Maintenance & Support";
  if (p.includes("testing")) return "Testing & Analysis";
  if (p.includes("inspection")) return "Inspection & Verification";
  return "";
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    website: "", // honeypot — must stay empty
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Parse ?service=xxx from URL on mount
  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    const serviceParam = params.get("service");
    if (serviceParam) {
      const mapped = mapServiceParam(serviceParam);
      if (mapped) {
        setFormData((prev) => ({ ...prev, service: mapped }));
      }
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      await submitContactForm({
        name: formData.name,
        email: formData.email,
        company: formData.company || undefined,
        phone: formData.phone || undefined,
        service: formData.service || undefined,
        message: formData.message,
        website: formData.website || undefined,
      });

      setIsSubmitted(true);
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        service: "",
        message: "",
        website: "",
      });
    } catch (err) {
      if (err instanceof ApiError && err.details) {
        // Validation errors — show first one
        setSubmitError(err.details[0]?.message || err.message);
      } else if (err instanceof Error) {
        setSubmitError(err.message);
      } else {
        setSubmitError("Something went wrong. Please try again later.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

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
              Get in Touch
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase mt-4 text-white leading-[0.9]">
              Contact Us
            </h1>
            <p className="text-xl text-white/70 mt-6 leading-relaxed">
              Ready to ensure precision? Reach out to our team for{" "}
              <Link
                href="/services/"
                prefetch={false}
                className="text-white underline underline-offset-4 hover:text-[#DC2626] transition-colors"
              >
                calibration services
              </Link>
              , quotes, or any inquiries.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-[#FAFAFA] dark:bg-[#0F172A]">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Left - Form */}
            <div className="lg:col-span-3">
              <div className="bg-white dark:bg-[#1E293B] rounded-xl p-8 md:p-12 shadow-sm">
                <h2 className="text-2xl font-bold text-[#0F172A] dark:text-white mb-2">
                  Send Us a Message
                </h2>
                <p className="text-[#64748B] dark:text-[#94A3B8] mb-8">
                  Fill out the form below and we&apos;ll get back to you within 24 hours.
                </p>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-green-50 border border-green-200 rounded-lg p-8 text-center"
                  >
                    <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-green-800 mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-green-600">
                      Thank you for contacting us. We&apos;ll respond shortly.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="mt-6 text-green-700 font-medium hover:underline"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Honeypot field — hidden from real users, catches bots */}
                    <div className="absolute -left-[9999px]" aria-hidden="true">
                      <label htmlFor="website">Website</label>
                      <input
                        type="text"
                        id="website"
                        name="website"
                        value={formData.website}
                        onChange={handleChange}
                        tabIndex={-1}
                        autoComplete="off"
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-[#0F172A] dark:text-white mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          maxLength={100}
                          className="w-full px-4 py-3 border border-gray-200 dark:border-[#475569] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#DC2626] focus:border-transparent transition-all"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#0F172A] dark:text-white mb-2">
                          Company
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-200 dark:border-[#475569] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#DC2626] focus:border-transparent transition-all"
                          placeholder="Company Name"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-[#0F172A] dark:text-white mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-200 dark:border-[#475569] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#DC2626] focus:border-transparent transition-all"
                          placeholder="john@company.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#0F172A] dark:text-white mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-200 dark:border-[#475569] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#DC2626] focus:border-transparent transition-all"
                          placeholder="+966 XX XXX XXXX"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#0F172A] dark:text-white mb-2">
                        Service Interest
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 dark:border-[#475569] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#DC2626] focus:border-transparent transition-all bg-white dark:bg-[#0F172A]"
                      >
                        <option value="">Select a service</option>
                        {serviceOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#0F172A] dark:text-white mb-2">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        maxLength={5000}
                        rows={5}
                        className="w-full px-4 py-3 border border-gray-200 dark:border-[#475569] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#DC2626] focus:border-transparent transition-all resize-none"
                        placeholder="Tell us about your requirements..."
                      />
                    </div>

                    {submitError && (
                      <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
                        <p className="text-red-700 dark:text-red-400 text-sm font-medium">
                          {submitError}
                        </p>
                      </div>
                    )}

                    <MagneticButton
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-[#DC2626] text-white rounded-lg font-bold text-lg hover:bg-[#B91C1C] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="w-5 h-5" />
                        </>
                      )}
                    </MagneticButton>
                  </form>
                )}
              </div>
            </div>

            {/* Right - Locations */}
            <div className="lg:col-span-2 space-y-8">
              {/* Quick Contact Cards */}
              <div className="bg-[#DC2626] rounded-xl p-6 text-white">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <MessageCircle className="w-6 h-6" />
                  Quick Contact
                </h3>
                <div className="space-y-4">
                  <a
                    href="https://wa.me/966534290985"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                  >
                    <div className="w-10 h-10 bg-[#25D366] rounded-full flex items-center justify-center">
                      <MessageCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-medium">WhatsApp</div>
                      <div className="text-sm text-white/70">+966534290985</div>
                    </div>
                  </a>
                  <a
                    href="tel:+966114210481"
                    className="flex items-center gap-3 p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                  >
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-medium">Call Us</div>
                      <div className="text-sm text-white/70">+966114210481</div>
                    </div>
                  </a>
                  <a
                    href="mailto:info@expertpower.com.sa"
                    className="flex items-center gap-3 p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                  >
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-medium">Email</div>
                      <div className="text-sm text-white/70">info@expertpower.com.sa</div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Locations */}
              {locations.map((location) => (
                <div
                  key={location.city}
                  className="bg-white dark:bg-[#1E293B] rounded-xl p-6 shadow-sm"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <MapPin className="w-5 h-5 text-[#DC2626]" />
                    <h3 className="text-lg font-bold text-[#0F172A] dark:text-white">
                      {location.city}
                    </h3>
                    <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-[#334155] rounded text-[#64748B] dark:text-[#94A3B8]">
                      {location.type}
                    </span>
                  </div>
                  <div className="space-y-3 text-sm">
                    <p className="text-[#64748B] dark:text-[#94A3B8] whitespace-pre-line">
                      {location.address}
                    </p>
                    <a
                      href={location.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-[#DC2626] hover:text-[#B91C1C] font-medium transition-colors"
                    >
                      <MapPin className="w-4 h-4" />
                      View on Map
                    </a>
                    <a
                      href={`tel:${location.phone.replace(/\s/g, "")}`}
                      className="flex items-center gap-2 text-[#0F172A] dark:text-white hover:text-[#DC2626] transition-colors"
                    >
                      <Phone className="w-4 h-4 text-[#DC2626]" />
                      {location.phone}
                    </a>
                    <a
                      href={`mailto:${location.email}`}
                      className="flex items-center gap-2 text-[#0F172A] dark:text-white hover:text-[#DC2626] transition-colors"
                    >
                      <Mail className="w-4 h-4 text-[#DC2626]" />
                      {location.email}
                    </a>
                    <div className="flex items-start gap-2 text-[#64748B] dark:text-[#94A3B8]">
                      <Clock className="w-4 h-4 mt-0.5" />
                      <span className="whitespace-pre-line">{location.hours}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
