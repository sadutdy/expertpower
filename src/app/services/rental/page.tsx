"use client";

import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Filter,
  X,
  Phone,
  ArrowRight,
  CheckCircle2,
  Clock,
  Shield,
  Truck,
  MessageCircle,
  ChevronRight,
  Zap,
  Eye,
  ShoppingCart,
  ChevronLeft,
  Package,
  Minus,
  Plus,
  Send,
  ImageIcon,
  Mail,
} from "lucide-react";
import Link from "next/link";
import { MagneticButton } from "@/components/MagneticButton";
import {
  rentalEquipment,
  categories,
  type RentalEquipment,
} from "@/lib/data/rental-equipment";
import { submitContactForm } from "@/lib/api-client";

gsap.registerPlugin(ScrollTrigger);

// ─────────────────────────────────────────────────────────────
// Helper: category color mapping
// ─────────────────────────────────────────────────────────────
const categoryStyles: Record<string, { bg: string; text: string; border: string; dot: string }> = {
  "Circuit Breaker Testing": { bg: "bg-blue-50", text: "text-blue-700", border: "border-blue-200", dot: "bg-blue-500" },
  "Insulation Testing": { bg: "bg-emerald-50", text: "text-emerald-700", border: "border-emerald-200", dot: "bg-emerald-500" },
  "Relay & Protection": { bg: "bg-violet-50", text: "text-violet-700", border: "border-violet-200", dot: "bg-violet-500" },
  "Primary Injection": { bg: "bg-amber-50", text: "text-amber-700", border: "border-amber-200", dot: "bg-amber-500" },
  "Transformer Testing": { bg: "bg-indigo-50", text: "text-indigo-700", border: "border-indigo-200", dot: "bg-indigo-500" },
  "High Voltage": { bg: "bg-red-50", text: "text-red-700", border: "border-red-200", dot: "bg-red-500" },
  "Power Quality": { bg: "bg-cyan-50", text: "text-cyan-700", border: "border-cyan-200", dot: "bg-cyan-500" },
  "Resistance & Ohm": { bg: "bg-orange-50", text: "text-orange-700", border: "border-orange-200", dot: "bg-orange-500" },
  "Temperature & Thermal": { bg: "bg-rose-50", text: "text-rose-700", border: "border-rose-200", dot: "bg-rose-500" },
  "SF6 & Environmental": { bg: "bg-teal-50", text: "text-teal-700", border: "border-teal-200", dot: "bg-teal-500" },
  "Cable Fault Location": { bg: "bg-fuchsia-50", text: "text-fuchsia-700", border: "border-fuchsia-200", dot: "bg-fuchsia-500" },
  "Electrical Testing": { bg: "bg-sky-50", text: "text-sky-700", border: "border-sky-200", dot: "bg-sky-500" },
  "Battery Testing": { bg: "bg-lime-50", text: "text-lime-700", border: "border-lime-200", dot: "bg-lime-500" },
  "Power Supply": { bg: "bg-slate-50", text: "text-slate-700", border: "border-slate-200", dot: "bg-slate-500" },
  "Tan Delta": { bg: "bg-pink-50", text: "text-pink-700", border: "border-pink-200", dot: "bg-pink-500" },
};

function getCategoryStyle(category: string) {
  return categoryStyles[category] || { bg: "bg-gray-50", text: "text-gray-700", border: "border-gray-200", dot: "bg-gray-500" };
}

// ─────────────────────────────────────────────────────────────
// Placeholder component for products without images
// ─────────────────────────────────────────────────────────────
function ImagePlaceholder({ name, className = "" }: { name: string; className?: string }) {
  const initials = name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
  return (
    <div className={`flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 ${className}`}>
      <div className="text-center">
        <div className="w-16 h-16 mx-auto rounded-2xl bg-gray-300/50 dark:bg-[#334155]/50 flex items-center justify-center mb-2">
          <ImageIcon className="w-8 h-8 text-gray-400" />
        </div>
        <span className="text-2xl font-black text-gray-400 dark:text-[#64748B] tracking-wider">{initials}</span>
        <p className="text-[10px] text-gray-400 dark:text-[#64748B] mt-1 uppercase tracking-wider">Reference Image</p>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Image Gallery (for modal)
// ─────────────────────────────────────────────────────────────
function ImageGallery({ images, name }: { images: string[]; name: string }) {
  const [current, setCurrent] = useState(0);
  const hasImages = images.length > 0;

  if (!hasImages) {
    return <ImagePlaceholder name={name} className="h-80 w-full rounded-t-2xl" />;
  }

  return (
    <div className="relative">
      <div className="h-80 w-full bg-gradient-to-br from-gray-50 to-gray-100 rounded-t-2xl overflow-hidden flex items-center justify-center">
        <img
          src={images[current]}
          alt={`${name} - ${current + 1}`}
          className="max-h-full max-w-full object-contain p-6"
        />
      </div>
      {images.length > 1 && (
        <>
          <button
            onClick={(e) => { e.stopPropagation(); setCurrent((c) => (c - 1 + images.length) % images.length); }}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 backdrop-blur shadow-lg flex items-center justify-center hover:bg-white transition-colors"
          >
            <ChevronLeft className="w-5 h-5 text-gray-700" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); setCurrent((c) => (c + 1) % images.length); }}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 backdrop-blur shadow-lg flex items-center justify-center hover:bg-white transition-colors"
          >
            <ChevronRight className="w-5 h-5 text-gray-700" />
          </button>
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={(e) => { e.stopPropagation(); setCurrent(i); }}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === current ? "bg-[#DC2626] w-5" : "bg-gray-400/60"
                }`}
              />
            ))}
          </div>
        </>
      )}
      {images.length > 1 && (
        <div className="absolute top-3 right-3 px-2.5 py-1 bg-black/60 backdrop-blur text-white text-[10px] font-bold rounded-full">
          {current + 1} / {images.length}
        </div>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Equipment Detail Modal
// ─────────────────────────────────────────────────────────────
function EquipmentModal({
  equipment,
  onClose,
  onAddToInquiry,
  inInquiry,
}: {
  equipment: RentalEquipment;
  onClose: () => void;
  onAddToInquiry: (eq: RentalEquipment) => void;
  inInquiry: boolean;
}) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  const whatsappMsg = encodeURIComponent(
    `Hi, I'm interested in renting the ${equipment.name} (${equipment.model}). Please share availability and pricing.`
  );
  const catStyle = getCategoryStyle(equipment.category);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-start justify-center p-4 pt-10 md:pt-20"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-[#0F172A]/80 backdrop-blur-sm" />
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 30 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        onClick={(e) => e.stopPropagation()}
        className="relative bg-white dark:bg-[#1E293B] rounded-2xl shadow-2xl max-w-3xl w-full max-h-[85vh] overflow-y-auto"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/10 hover:bg-black/20 flex items-center justify-center transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <ImageGallery images={equipment.images} name={equipment.name} />

        <div className="p-6 md:p-8">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${catStyle.bg} ${catStyle.text} border ${catStyle.border}`}>
              {equipment.category}
            </span>
            <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#059669]/10 text-[#059669] border border-[#059669]/20">
              Available for Rent
            </span>
          </div>

          <h2 className="text-2xl md:text-3xl font-black text-[#0F172A] dark:text-white">{equipment.name}</h2>
          <p className="text-[#64748B] dark:text-[#94A3B8] font-semibold mt-1 text-lg">Model: {equipment.model}</p>

          <p className="text-[#475569] dark:text-[#94A3B8] mt-4 leading-relaxed">{equipment.description}</p>

          {equipment.highlights && equipment.highlights.length > 0 && (
            <div className="mt-6">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#0F172A] dark:text-white mb-3">Key Highlights</h3>
              <div className="flex flex-wrap gap-2">
                {equipment.highlights.map((h) => (
                  <span key={h} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#DC2626]/5 text-[#DC2626] text-xs font-semibold rounded-lg border border-[#DC2626]/10">
                    <Zap className="w-3 h-3" />
                    {h}
                  </span>
                ))}
              </div>
            </div>
          )}

          {equipment.applications && equipment.applications.length > 0 && (
            <div className="mt-6">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#0F172A] dark:text-white mb-3">Applications</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {equipment.applications.map((a) => (
                  <div key={a} className="flex items-center gap-2 text-sm text-[#64748B]">
                    <CheckCircle2 className="w-4 h-4 text-[#059669] flex-shrink-0" />
                    {a}
                  </div>
                ))}
              </div>
            </div>
          )}

          {equipment.specs.length > 0 && (
            <div className="mt-6">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#0F172A] dark:text-white mb-3">Technical Specifications</h3>
              <div className="bg-gray-50 dark:bg-[#0F172A] rounded-xl border border-gray-100 dark:border-[#334155] overflow-hidden">
                {equipment.specs.map((spec, i) => (
                  <div
                    key={i}
                    className={`flex items-start gap-3 px-4 py-3 text-sm text-[#475569] ${
                      i !== equipment.specs.length - 1 ? "border-b border-gray-100" : ""
                    }`}
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#059669] flex-shrink-0 mt-0.5" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => onAddToInquiry(equipment)}
              className={`flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold transition-all ${
                inInquiry
                  ? "bg-[#059669] text-white hover:bg-[#047857]"
                  : "bg-[#0F172A] text-white hover:bg-[#1E293B]"
              }`}
            >
              {inInquiry ? (
                <>
                  <CheckCircle2 className="w-5 h-5" />
                  Added to Inquiry
                </>
              ) : (
                <>
                  <Plus className="w-5 h-5" />
                  Add to Inquiry
                </>
              )}
            </button>
            <a
              href={`https://wa.me/966534290985?text=${whatsappMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#25D366] text-white rounded-xl font-bold hover:bg-[#128C7E] transition-colors shadow-lg shadow-[#25D366]/20"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Inquiry
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ─────────────────────────────────────────────────────────────
// Equipment Card
// ─────────────────────────────────────────────────────────────
function EquipmentCard({
  equipment,
  onViewMore,
  onAddToInquiry,
  inInquiry,
}: {
  equipment: RentalEquipment;
  onViewMore: (eq: RentalEquipment) => void;
  onAddToInquiry: (eq: RentalEquipment) => void;
  inInquiry: boolean;
}) {
  const [imgIndex, setImgIndex] = useState(0);
  const hasImages = equipment.images.length > 0;
  const catStyle = getCategoryStyle(equipment.category);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="group bg-white dark:bg-[#1E293B] rounded-2xl border border-gray-100 dark:border-[#334155] overflow-hidden hover:shadow-xl hover:shadow-black/5 transition-all duration-500 hover:-translate-y-1 flex flex-col"
    >
      {/* Image Area */}
      <div className="relative h-56 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
        {hasImages ? (
          <>
            <img
              src={equipment.images[imgIndex]}
              alt={equipment.name}
              className="w-full h-full object-contain p-5 group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            {equipment.images.length > 1 && (
              <>
                <button
                  onClick={(e) => { e.stopPropagation(); setImgIndex((i) => (i - 1 + equipment.images.length) % equipment.images.length); }}
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-white/80 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white"
                >
                  <ChevronLeft className="w-4 h-4 text-gray-700" />
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); setImgIndex((i) => (i + 1) % equipment.images.length); }}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-white/80 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white"
                >
                  <ChevronRight className="w-4 h-4 text-gray-700" />
                </button>
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                  {equipment.images.map((_, i) => (
                    <div key={i} className={`w-1.5 h-1.5 rounded-full transition-all ${i === imgIndex ? "bg-[#DC2626] w-3" : "bg-gray-400/60"}`} />
                  ))}
                </div>
              </>
            )}
          </>
        ) : (
          <ImagePlaceholder name={equipment.name} className="h-full w-full" />
        )}

        {/* Category Tag */}
        <div className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${catStyle.bg} ${catStyle.text} border ${catStyle.border} backdrop-blur-sm`}>
          {equipment.category}
        </div>

        {/* Availability */}
        <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2 py-1 bg-white/90 backdrop-blur rounded-full">
          <span className="w-2 h-2 bg-[#059669] rounded-full animate-pulse" />
          <span className="text-[10px] font-bold text-[#059669] uppercase tracking-wider">In Stock</span>
        </div>

        {/* Image count badge */}
        {equipment.images.length > 1 && (
          <div className="absolute bottom-2 right-2 px-1.5 py-0.5 bg-black/50 backdrop-blur text-white text-[9px] font-bold rounded">
            {equipment.images.length} imgs
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="font-bold text-[#0F172A] dark:text-white text-base leading-tight group-hover:text-[#DC2626] transition-colors">
          {equipment.name}
        </h3>
        <p className="text-[#64748B] dark:text-[#94A3B8] text-sm mt-0.5 font-medium">{equipment.model}</p>

        <p className="text-[#64748B] dark:text-[#94A3B8] text-xs mt-2 line-clamp-2 leading-relaxed">
          {equipment.description}
        </p>

        {equipment.highlights && equipment.highlights.length > 0 && (
          <div className="mt-3 flex-1">
            <div className="flex flex-wrap gap-1">
              {equipment.highlights.slice(0, 2).map((h) => (
                <span key={h} className="inline-block px-2 py-0.5 bg-gray-100 dark:bg-[#334155] text-[#64748B] dark:text-[#94A3B8] text-[10px] rounded-md font-medium">
                  {h}
                </span>
              ))}
              {equipment.highlights.length > 2 && (
                <span className="inline-block px-2 py-0.5 bg-[#DC2626]/10 text-[#DC2626] text-[10px] rounded-md font-medium">
                  +{equipment.highlights.length - 2}
                </span>
              )}
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="mt-4 pt-4 border-t border-gray-100 dark:border-[#334155] flex gap-2">
          <button
            onClick={() => onViewMore(equipment)}
            className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 bg-[#0F172A] dark:bg-white dark:text-[#0F172A] text-white rounded-xl text-sm font-semibold hover:bg-[#1E293B] dark:hover:bg-gray-200 transition-colors"
          >
            <Eye className="w-4 h-4" />
            View Details
          </button>
          <button
            onClick={() => onAddToInquiry(equipment)}
            className={`inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-sm font-semibold transition-colors ${
              inInquiry
                ? "bg-[#059669] text-white hover:bg-[#047857]"
                : "bg-gray-100 text-[#0F172A] hover:bg-gray-200"
            }`}
            title={inInquiry ? "Remove from inquiry" : "Add to inquiry"}
          >
            {inInquiry ? <CheckCircle2 className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </motion.div>
  );
}

// ─────────────────────────────────────────────────────────────
// Inquiry Sidebar
// ─────────────────────────────────────────────────────────────
function InquirySidebar({
  items,
  onRemove,
  onClear,
  onClose,
}: {
  items: RentalEquipment[];
  onRemove: (id: string) => void;
  onClear: () => void;
  onClose: () => void;
}) {
  const [contactData, setContactData] = useState({ name: "", email: "", phone: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const whatsappMsg = encodeURIComponent(
    `Hi, I'm interested in renting the following equipment:\n\n${items.map((i) => `- ${i.name} (${i.model})`).join("\n")}\n\nPlease share availability and pricing.`
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const message =
      `Rental Inquiry via Website\n\n` +
      `Interested Equipment:\n${items.map((i) => `- ${i.name} (${i.model}) [${i.category}]`).join("\n")}\n\n` +
      `Contact Details:\n` +
      `Name: ${contactData.name}\n` +
      `Email: ${contactData.email}\n` +
      `Phone: ${contactData.phone}`;

    await submitContactForm({
      name: contactData.name,
      email: contactData.email,
      phone: contactData.phone,
      service: "Rental Service",
      message,
    });

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ type: "spring", damping: 25, stiffness: 300 }}
      className="fixed inset-y-0 right-0 z-[90] w-full max-w-md bg-white dark:bg-[#1E293B] shadow-2xl flex flex-col"
    >
      <div className="flex items-center justify-between p-5 border-b border-gray-100 dark:border-[#334155]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#DC2626]/10 flex items-center justify-center">
            <ShoppingCart className="w-5 h-5 text-[#DC2626]" />
          </div>
          <div>
            <h3 className="font-bold text-[#0F172A] dark:text-white">Rental Inquiry</h3>
            <p className="text-xs text-[#64748B] dark:text-[#94A3B8]">{items.length} item{items.length !== 1 ? "s" : ""} selected</p>
          </div>
        </div>
        <button onClick={onClose} className="w-9 h-9 rounded-full bg-gray-100 dark:bg-[#334155] hover:bg-gray-200 dark:hover:bg-[#475569] flex items-center justify-center transition-colors">
          <X className="w-5 h-5 text-gray-600" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-5 space-y-3">
        {items.length === 0 ? (
          <div className="text-center py-12">
            <div className="w-16 h-16 mx-auto rounded-full bg-gray-100 dark:bg-[#334155] flex items-center justify-center mb-4">
              <ShoppingCart className="w-8 h-8 text-gray-400" />
            </div>
            <p className="text-[#64748B] dark:text-[#94A3B8] font-medium">No items selected yet</p>
            <p className="text-sm text-[#94A3B8] mt-1">Click "+" on any product to add it</p>
          </div>
        ) : (
          items.map((item) => (
            <div key={item.id} className="flex gap-3 p-3 bg-gray-50 dark:bg-[#0F172A] rounded-xl border border-gray-100 dark:border-[#334155]">
              {item.images.length > 0 ? (
                <img src={item.images[0]} alt={item.name} className="w-16 h-16 rounded-lg object-contain bg-white dark:bg-[#1E293B]" />
              ) : (
                <ImagePlaceholder name={item.name} className="w-16 h-16 rounded-lg flex-shrink-0" />
              )}
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-[#0F172A] dark:text-white text-sm truncate">{item.name}</h4>
                <p className="text-xs text-[#64748B] dark:text-[#94A3B8]">{item.model}</p>
                <span className={`inline-block mt-1 px-1.5 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider ${getCategoryStyle(item.category).bg} ${getCategoryStyle(item.category).text}`}>
                  {item.category}
                </span>
              </div>
              <button
                onClick={() => onRemove(item.id)}
                className="w-7 h-7 rounded-lg bg-white dark:bg-[#1E293B] border border-gray-200 dark:border-[#334155] flex items-center justify-center hover:bg-red-50 hover:border-red-200 transition-colors flex-shrink-0 self-center"
              >
                <Minus className="w-3.5 h-3.5 text-gray-400 hover:text-red-500" />
              </button>
            </div>
          ))
        )}
      </div>

      {items.length > 0 && (
        <div className="p-5 border-t border-gray-100 dark:border-[#334155] bg-gray-50/50 dark:bg-[#0F172A]/50 space-y-3">
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-4"
            >
              <CheckCircle2 className="w-10 h-10 text-green-500 mx-auto mb-2" />
              <p className="text-sm font-bold text-[#0F172A] dark:text-white">Inquiry Sent!</p>
              <p className="text-xs text-[#64748B] dark:text-[#94A3B8] mt-1">We will contact you shortly.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="text"
                placeholder="Full Name"
                required
                value={contactData.name}
                onChange={(e) => setContactData((p) => ({ ...p, name: e.target.value }))}
                className="w-full px-3 py-2.5 text-sm border border-gray-200 dark:border-[#475569] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#DC2626] bg-white dark:bg-[#1E293B] text-[#0F172A] dark:text-white"
              />
              <input
                type="email"
                placeholder="Email Address"
                required
                value={contactData.email}
                onChange={(e) => setContactData((p) => ({ ...p, email: e.target.value }))}
                className="w-full px-3 py-2.5 text-sm border border-gray-200 dark:border-[#475569] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#DC2626] bg-white dark:bg-[#1E293B] text-[#0F172A] dark:text-white"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                required
                value={contactData.phone}
                onChange={(e) => setContactData((p) => ({ ...p, phone: e.target.value }))}
                className="w-full px-3 py-2.5 text-sm border border-gray-200 dark:border-[#475569] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#DC2626] bg-white dark:bg-[#1E293B] text-[#0F172A] dark:text-white"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#0F172A] text-white rounded-xl font-semibold hover:bg-[#1E293B] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Mail className="w-5 h-5" />
                    Submit Rental Inquiry
                  </>
                )}
              </button>
            </form>
          )}
          <a
            href={`https://wa.me/966534290985?text=${whatsappMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#25D366] text-white rounded-xl font-bold hover:bg-[#128C7E] transition-colors shadow-lg shadow-[#25D366]/20"
          >
            <Send className="w-5 h-5" />
            Send Inquiry via WhatsApp
          </a>
          <button
            onClick={onClear}
            className="w-full py-2.5 text-sm text-[#64748B] dark:text-[#94A3B8] hover:text-[#DC2626] font-medium transition-colors"
          >
            Clear all items
          </button>
        </div>
      )}
    </motion.div>
  );
}

// ─────────────────────────────────────────────────────────────
// Benefits
// ─────────────────────────────────────────────────────────────
const rentalBenefits = [
  { icon: Clock, title: "Flexible Rental Periods", description: "Daily, weekly, or monthly rental options to suit your project timeline" },
  { icon: Shield, title: "Calibrated & Certified", description: "All equipment comes with valid calibration certificates traceable to NIST/SI" },
  { icon: Package, title: "Wide Equipment Range", description: "Electrical, high-voltage, relay, transformer, cable fault, battery, and temperature testing instruments" },
  { icon: Zap, title: "Fast Processing", description: "Quick quotation and fast collection of instruments from the branch office" },
];

const rentalSteps = [
  { step: "01", title: "Inquiry", desc: "Contact us with your equipment requirements and project timeline" },
  { step: "02", title: "Quotation", desc: "Receive detailed pricing, availability, and rental terms" },
  { step: "03", title: "Agreement", desc: "Sign rental agreement and confirm payment details" },
  { step: "04", title: "Collect", desc: "Collect your calibrated equipment from the branch office" },
];

// ─────────────────────────────────────────────────────────────
// Main Page
// ─────────────────────────────────────────────────────────────
export default function RentalServicesPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedEquipment, setSelectedEquipment] = useState<RentalEquipment | null>(null);
  const [inquiryItems, setInquiryItems] = useState<RentalEquipment[]>([]);
  const [showInquiry, setShowInquiry] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  // ── Filtering ──
  const filteredEquipment = useMemo(() => {
    return rentalEquipment.filter((eq) => {
      const matchesCategory = activeCategory === "All" || eq.category === activeCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        q === "" ||
        eq.name.toLowerCase().includes(q) ||
        eq.model.toLowerCase().includes(q) ||
        eq.category.toLowerCase().includes(q) ||
        eq.description.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  // ── Category counts ──
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: rentalEquipment.length };
    for (const eq of rentalEquipment) {
      counts[eq.category] = (counts[eq.category] || 0) + 1;
    }
    return counts;
  }, []);

  // ── Inquiry helpers ──
  const addToInquiry = useCallback((eq: RentalEquipment) => {
    setInquiryItems((prev) => {
      const exists = prev.find((i) => i.id === eq.id);
      if (exists) return prev.filter((i) => i.id !== eq.id);
      return [...prev, eq];
    });
    setShowInquiry(true);
  }, []);

  const removeFromInquiry = useCallback((id: string) => {
    setInquiryItems((prev) => prev.filter((i) => i.id !== id));
  }, []);

  const clearInquiry = useCallback(() => setInquiryItems([]), []);

  const isInInquiry = useCallback((id: string) => inquiryItems.some((i) => i.id === id), [inquiryItems]);

  // ── GSAP ──
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".hero-bg-rental", {
        yPercent: 25,
        ease: "none",
        scrollTrigger: { trigger: heroRef.current, start: "top top", end: "bottom top", scrub: true },
      });
    });
    return () => ctx.revert();
  }, []);

  // ── Scroll to grid on category change ──
  useEffect(() => {
    if (activeCategory !== "All" || searchQuery) {
      const el = document.getElementById("equipment-grid");
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [activeCategory]);

  return (
    <>
      {/* ========== HERO ========== */}
      <section ref={heroRef} className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="hero-bg-rental absolute inset-0">
          <img
            src="/images/services/special/rental.png"
            alt="Equipment Rental"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A] via-[#0F172A]/85 to-[#0F172A]/40" />
        </div>

        <div className="container-custom relative z-10 pt-32 pb-20">
          <div className="max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm mb-6">
                <span className="w-2 h-2 bg-[#059669] rounded-full animate-pulse" />
                {rentalEquipment.length}+ Equipment Available
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white uppercase leading-[0.95] mb-6">
                Rent Certified
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DC2626] to-[#EF4444]">
                  Test Equipment
                </span>
              </h1>
              <p className="text-xl text-white/80 leading-relaxed max-w-xl">
                Rental instruments in Saudi Arabia: access premium calibration and testing equipment without capital investment. All instruments come with valid ISO 17025 calibration certificates.
              </p>

              <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-lg">
                {[
                  { value: `${rentalEquipment.length}+`, label: "Instruments" },
                  { value: `${categories.length - 1}`, label: "Categories" },
                  { value: "24/7", label: "Support" },
                  { value: "Same Day", label: "Delivery" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="text-3xl font-black text-white">{stat.value}</div>
                    <div className="text-sm text-white/60">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }} className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-1.5">
            <div className="w-1.5 h-3 bg-white/60 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* ========== BENEFITS ========== */}
      <section className="py-16 bg-white dark:bg-[#0F172A] border-b border-gray-100 dark:border-[#334155]">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {rentalBenefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4 items-start p-5 rounded-2xl hover:bg-[#FAFAFA] dark:hover:bg-[#1E293B] transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#DC2626]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#DC2626] transition-colors">
                    <Icon className="w-6 h-6 text-[#DC2626] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0F172A] dark:text-white">{benefit.title}</h3>
                    <p className="text-[#64748B] dark:text-[#94A3B8] text-sm mt-1">{benefit.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========== STICKY FILTER BAR ========== */}
      <section className="sticky top-0 z-40 bg-white/95 dark:bg-[#0F172A]/95 backdrop-blur-lg border-b border-gray-100 dark:border-[#334155] shadow-sm">
        <div className="container-custom py-4">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            {/* Search */}
            <div className="relative flex-1 w-full md:max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-gray-400" />
              <input
                type="text"
                placeholder="Search by name, model, category..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-xl bg-gray-100 dark:bg-[#334155] border-0 text-sm text-[#0F172A] dark:text-white placeholder:text-gray-400 dark:placeholder:text-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#DC2626]/30 focus:bg-white dark:focus:bg-[#1E293B] transition-all"
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Category Filters */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 w-full md:w-auto scrollbar-hide">
              <Filter className="w-4 h-4 text-[#64748B] flex-shrink-0" />
              {categories.map((category) => {
                const count = categoryCounts[category] || 0;
                const isActive = activeCategory === category;
                return (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-3.5 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                      isActive
                        ? "bg-[#DC2626] text-white shadow-md shadow-[#DC2626]/20"
                        : "bg-gray-100 text-[#64748B] hover:bg-gray-200"
                    }`}
                  >
                    {category}
                    <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${isActive ? "bg-white/20" : "bg-gray-200 text-gray-500"}`}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Results count */}
          <div className="mt-3 flex items-center justify-between">
            <p className="text-sm text-[#64748B] dark:text-[#94A3B8]">
              Showing <span className="font-bold text-[#0F172A] dark:text-white">{filteredEquipment.length}</span> of {rentalEquipment.length} instruments
              {activeCategory !== "All" && (
                <span> in <span className="text-[#DC2626] font-medium">{activeCategory}</span></span>
              )}
            </p>
            {(activeCategory !== "All" || searchQuery) && (
              <button
                onClick={() => { setActiveCategory("All"); setSearchQuery(""); }}
                className="text-sm text-[#DC2626] font-medium hover:underline"
              >
                Clear Filters
              </button>
            )}
          </div>
        </div>
      </section>

      {/* ========== EQUIPMENT GRID ========== */}
      <section id="equipment-grid" className="section-padding bg-[#FAFAFA] dark:bg-[#0F172A]">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-[#DC2626] font-mono text-sm uppercase tracking-widest">Available Equipment</span>
            <h2 className="text-4xl md:text-5xl font-black uppercase mt-4 text-[#0F172A] dark:text-white">Browse Our Inventory</h2>
          </div>
          <AnimatePresence mode="popLayout">
            {filteredEquipment.length > 0 ? (
              <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredEquipment.map((eq) => (
                  <EquipmentCard
                    key={eq.id}
                    equipment={eq}
                    onViewMore={setSelectedEquipment}
                    onAddToInquiry={addToInquiry}
                    inInquiry={isInInquiry(eq.id)}
                  />
                ))}
              </motion.div>
            ) : (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20">
                <div className="w-20 h-20 mx-auto rounded-full bg-gray-200 dark:bg-[#334155] flex items-center justify-center mb-6">
                  <Search className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-xl font-bold text-[#0F172A] dark:text-white mb-2">No equipment found</h3>
                <p className="text-[#64748B] mb-6">Try adjusting your search or filters</p>
                <button
                  onClick={() => { setActiveCategory("All"); setSearchQuery(""); }}
                  className="px-6 py-3 bg-[#DC2626] text-white rounded-xl font-semibold text-sm hover:bg-[#B91C1C] transition-colors"
                >
                  Show all equipment
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* ========== RENTAL PROCESS ========== */}
      <section className="section-padding bg-white dark:bg-[#0F172A]">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-[#DC2626] font-mono text-sm uppercase tracking-widest">How It Works</span>
            <h2 className="text-4xl md:text-5xl font-black uppercase mt-4 text-[#0F172A] dark:text-white">Rental Process</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {rentalSteps.map((item, index) => (
              <div key={item.step} className="relative text-center group">
                <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-[#DC2626] to-[#B91C1C] flex items-center justify-center mb-6 shadow-xl shadow-[#DC2626]/20 group-hover:scale-110 transition-transform">
                  <span className="text-2xl font-black text-white">{item.step}</span>
                </div>
                <h3 className="text-xl font-bold text-[#0F172A] dark:text-white mb-2">{item.title}</h3>
                <p className="text-[#64748B] dark:text-[#94A3B8] text-sm">{item.desc}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-full">
                    <ChevronRight className="w-6 h-6 text-[#DC2626]/30" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CTA ========== */}
      <section className="py-20 bg-[#0F172A] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`, backgroundSize: "32px 32px" }} />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl md:text-5xl font-black uppercase text-white mb-6">
                Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DC2626] to-[#EF4444]">Rent</span>?
              </h2>
              <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">
                We supply all kinds of electrical test instruments on daily/weekly/monthly rental basis. All instruments come with valid ISO 17025 calibration certificates.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <MagneticButton
                  href="https://wa.me/966534290985?text=Hi%2C%20I%27m%20interested%20in%20renting%20equipment.%20Please%20share%20details."
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366] text-white rounded-xl font-bold text-lg hover:bg-[#128C7E] transition-colors shadow-lg shadow-[#25D366]/20"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Us
                </MagneticButton>
                <MagneticButton href="/contact?service=rental" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#0F172A] rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors">
                  Contact Us
                  <ArrowRight className="w-5 h-5" />
                </MagneticButton>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========== FLOATING INQUIRY BUTTON ========== */}
      <AnimatePresence>
        {inquiryItems.length > 0 && !showInquiry && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={() => setShowInquiry(true)}
            className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-5 py-3.5 bg-[#DC2626] text-white rounded-full shadow-2xl shadow-[#DC2626]/30 hover:bg-[#B91C1C] transition-colors font-bold"
          >
            <ShoppingCart className="w-5 h-5" />
            <span>Inquiry ({inquiryItems.length})</span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* ========== INQUIRY SIDEBAR ========== */}
      <AnimatePresence>
        {showInquiry && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowInquiry(false)}
              className="fixed inset-0 z-[80] bg-black/40 backdrop-blur-sm"
            />
            <InquirySidebar
              items={inquiryItems}
              onRemove={removeFromInquiry}
              onClear={clearInquiry}
              onClose={() => setShowInquiry(false)}
            />
          </>
        )}
      </AnimatePresence>

      {/* ========== EQUIPMENT MODAL ========== */}
      <AnimatePresence>
        {selectedEquipment && (
          <EquipmentModal
            equipment={selectedEquipment}
            onClose={() => setSelectedEquipment(null)}
            onAddToInquiry={addToInquiry}
            inInquiry={isInInquiry(selectedEquipment.id)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
