"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ChevronRight, Sun, Moon, Search } from "lucide-react";
import { MagneticButton } from "./MagneticButton";
import { cn } from "@/lib/utils";
import { useLang } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";

export function Navbar() {
  const { t, lang, isRTL, toggleLang } = useLang();
  const { isDark, toggleTheme } = useTheme();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [expandedMobileSubmenu, setExpandedMobileSubmenu] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearchResults, setShowSearchResults] = useState(false);

  const searchItems = [
    { label: "Calibration Services", href: "/services/calibration" },
    { label: "Electrical Calibration", href: "/services/calibration/electrical" },
    { label: "Mechanical Calibration", href: "/services/calibration/mechanical" },
    { label: "Temperature Calibration", href: "/services/calibration/temperature" },
    { label: "Dimensional Calibration", href: "/services/calibration/dimensional" },
    { label: "Pressure Calibration", href: "/services/calibration/pressure" },
    { label: "Onsite Calibration", href: "/services/onsite-calibration" },
    { label: "Rental Equipment", href: "/services/rental" },
    { label: "Van Setup", href: "/services/van-services" },
    { label: "Repair & Maintenance", href: "/services/maintenance" },
    { label: "Inspection & Verification", href: "/services/inspection" },
    { label: "Testing & Analysis", href: "/services/testing" },
    { label: "BMS Solution", href: "/services/bms" },
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Careers", href: "/careers" },
    { label: "Accreditation", href: "/accreditation" },
  ];

  const filteredResults = searchQuery.trim()
    ? searchItems.filter((item) =>
        item.label.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  const navLinks = [
    { name: t.nav.home, href: "/" },
    { name: t.nav.about, href: "/about" },
    {
      name: t.nav.services,
      href: "/services",
      dropdown: [
        {
          name: t.nav.dropdown.calibration,
          href: "/services/calibration",
          children: [
            { name: t.nav.dropdown.electrical, href: "/services/calibration/electrical" },
            { name: t.nav.dropdown.mechanical, href: "/services/calibration/mechanical" },
            { name: t.nav.dropdown.temperature, href: "/services/calibration/temperature" },
            { name: t.nav.dropdown.dimensional, href: "/services/calibration/dimensional" },
            { name: t.nav.dropdown.pressure, href: "/services/calibration/pressure" },
          ],
        },
        { name: t.nav.dropdown.rental, href: "/services/rental" },
        { name: t.nav.dropdown.maintenance, href: "/services/maintenance" },
        { name: t.nav.dropdown.van, href: "/services/van-services" },
        { name: t.nav.dropdown.inspection, href: "/services/inspection" },
        { name: t.nav.dropdown.testing, href: "/services/testing" },
        { name: t.nav.dropdown.bms, href: "/services/bms" },
      ],
    },
    { name: t.nav.industries, href: "/industries" },
    { name: t.nav.accreditation, href: "/accreditation" },
    { name: t.nav.careers, href: "/careers" },
    { name: t.nav.contact, href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled
            ? "bg-white/95 dark:bg-[#0F172A]/95 backdrop-blur-md shadow-lg py-3"
            : "bg-transparent py-5"
        )}
      >
        <div className="container-custom flex items-center justify-between">
          {/* Logo */}
          <Link href="/" prefetch={false} className="relative z-10 flex-shrink-0">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="flex items-center gap-2"
            >
              <img
                src="/assets/Logo.png"
                alt="Expert Power"
                className={cn(
                  "h-10 w-auto transition-all duration-300",
                  isScrolled ? "brightness-100" : "brightness-0 invert"
                )}
              />

            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center gap-5">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={link.href}
                  prefetch={false}
                  className={cn(
                    "text-sm font-medium link-underline py-2 flex items-center gap-1 transition-colors duration-300",
                    isScrolled
                      ? "text-[#0F172A] dark:text-white"
                      : "text-white"
                  )}
                >
                  {link.name}
                  {link.dropdown && (
                    <ChevronDown
                      className={cn(
                        "w-4 h-4 transition-transform duration-300",
                        activeDropdown === link.name && "rotate-180"
                      )}
                    />
                  )}
                </Link>

                <AnimatePresence>
                  {link.dropdown && activeDropdown === link.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                      className={cn(
                        "absolute top-full pt-2",
                        lang === "ar" ? "right-0" : "left-0"
                      )}
                    >
                      <div className="bg-white dark:bg-[#1E293B] rounded-xl shadow-2xl border border-gray-100 dark:border-white/10 py-2 min-w-[260px]">
                        {link.dropdown.map((item, idx) => (
                          <motion.div
                            key={item.name}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.03 }}
                          >
                            {"children" in item && item.children ? (
                              <div className="group/sub relative">
                                <Link
                                  href={item.href}
                                  prefetch={false}
                                  className="flex items-center justify-between px-4 py-2.5 text-sm text-[#0F172A] dark:text-gray-200 hover:bg-[#DC2626]/5 hover:text-[#DC2626] transition-all duration-200"
                                >
                                  <span>{item.name}</span>
                                  <ChevronRight className="w-4 h-4" />
                                </Link>
                                <div
                                  className={cn(
                                    "hidden group-hover/sub:block absolute top-0 min-w-[220px] bg-white dark:bg-[#1E293B] rounded-xl shadow-2xl border border-gray-100 dark:border-white/10 py-2 z-50",
                                    lang === "ar" ? "right-full mr-1" : "left-full ml-1"
                                  )}
                                >
                                  {item.children.map((child) => (
                                    <Link
                                      key={child.name}
                                      href={child.href}
                                      prefetch={false}
                                      className="block px-4 py-2 text-sm text-[#0F172A] dark:text-gray-200 hover:bg-[#DC2626]/5 hover:text-[#DC2626] transition-all duration-200"
                                    >
                                      {child.name}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ) : (
                              <Link
                                href={item.href}
                                prefetch={false}
                                className="block px-4 py-2.5 text-sm text-[#0F172A] dark:text-gray-200 hover:bg-[#DC2626]/5 hover:text-[#DC2626] transition-all duration-200"
                              >
                                {item.name}
                              </Link>
                            )}
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Right Controls */}
          <div className="flex items-center gap-2">
            {/* Search */}
            <div className="hidden xl:block relative">
              <div className="relative">
                <Search className={cn("absolute top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 z-10", isRTL ? "right-3" : "left-3")} />
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setShowSearchResults(e.target.value.trim().length > 0);
                  }}
                  onFocus={() => setShowSearchResults(searchQuery.trim().length > 0)}
                  onBlur={() => setTimeout(() => setShowSearchResults(false), 200)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && filteredResults.length > 0) {
                      window.location.href = filteredResults[0].href;
                    }
                  }}
                  dir={isRTL ? "rtl" : "ltr"}
                  className={cn(
                    "w-48 lg:w-56 py-2 rounded-lg bg-white/95 dark:bg-[#1E293B]/95 backdrop-blur-sm border-0 shadow-md text-[#0F172A] dark:text-white placeholder:text-gray-400 dark:placeholder:text-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#DC2626] text-sm transition-all",
                    isRTL ? "pr-9 pl-3" : "pl-9 pr-3"
                  )}
                />
              </div>
              <AnimatePresence>
                {showSearchResults && filteredResults.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className={cn("absolute top-full mt-2 bg-white dark:bg-[#1E293B] rounded-xl shadow-2xl overflow-hidden z-50 text-left min-w-[260px]", lang === "ar" ? "right-0" : "left-0")}
                  >
                    {filteredResults.map((result) => (
                      <Link
                        key={result.href}
                        href={result.href}
                        prefetch={false}
                        className="block px-4 py-2.5 text-sm text-[#0F172A] dark:text-white hover:bg-[#DC2626]/5 hover:text-[#DC2626] transition-colors border-b border-gray-50 dark:border-[#334155] last:border-0"
                        onMouseDown={(e) => e.preventDefault()}
                      >
                        {result.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Language Toggle */}
            <button
              onClick={toggleLang}
              title={lang === "en" ? "عربي" : "English"}
              className={cn(
                "hidden xl:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-semibold border transition-all duration-300",
                isScrolled
                  ? "border-gray-200 dark:border-white/20 text-[#0F172A] dark:text-white hover:bg-gray-100 dark:hover:bg-white/10"
                  : "border-white/30 text-white hover:bg-white/10"
              )}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
              </svg>
              {lang === "en" ? "عربي" : "EN"}
            </button>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleTheme}
              title={isDark ? "Light mode" : "Dark mode"}
              className={cn(
                "hidden xl:flex items-center justify-center w-9 h-9 rounded-lg border transition-all duration-300",
                isScrolled
                  ? "border-gray-200 dark:border-white/20 text-[#0F172A] dark:text-white hover:bg-gray-100 dark:hover:bg-white/10"
                  : "border-white/30 text-white hover:bg-white/10"
              )}
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Contact Us CTA */}
            <div className="hidden xl:block">
              <MagneticButton
                href="/contact"
                className={cn(
                  "px-5 py-2.5 rounded-lg font-medium text-sm transition-all duration-300",
                  isScrolled
                    ? "bg-[#DC2626] text-white hover:bg-[#B91C1C]"
                    : "bg-white text-[#0F172A] hover:bg-[#DC2626] hover:text-white"
                )}
              >
                {t.nav.getQuote}
              </MagneticButton>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn(
                "xl:hidden relative z-10 p-2 transition-colors duration-300",
                isScrolled || isMobileMenuOpen
                  ? "text-[#0F172A] dark:text-white"
                  : "text-white"
              )}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 xl:hidden"
          >
            <div
              className="absolute inset-0 bg-[#0F172A]/95 backdrop-blur-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: lang === "ar" ? "-100%" : "100%" }}
              animate={{ x: 0 }}
              exit={{ x: lang === "ar" ? "-100%" : "100%" }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className={cn(
                "absolute top-0 bottom-0 w-full max-w-sm bg-[#0F172A] overflow-y-auto",
                lang === "ar" ? "left-0" : "right-0"
              )}
            >
              <div className="p-6 pt-20">
                {/* Mobile lang + theme toggles */}
                <div className="flex items-center gap-3 mb-6">
                  <button
                    onClick={toggleLang}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/20 text-white text-sm font-semibold hover:bg-white/10 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                    </svg>
                    {lang === "en" ? "عربي" : "EN"}
                  </button>
                  <button
                    onClick={toggleTheme}
                    className="flex items-center justify-center w-10 h-10 rounded-lg border border-white/20 text-white hover:bg-white/10 transition-colors"
                  >
                    {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                  </button>
                </div>

                <nav className="flex flex-col gap-2">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: lang === "ar" ? -20 : 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        prefetch={false}
                        onClick={() => !link.dropdown && setIsMobileMenuOpen(false)}
                        className="block py-3 text-lg font-semibold text-white hover:text-[#DC2626] transition-colors border-b border-white/10"
                      >
                        {link.name}
                      </Link>
                      {link.dropdown && (
                        <div className="pl-4 mt-2 space-y-2">
                          {link.dropdown.map((item) => (
                            "children" in item && item.children ? (
                              <div key={item.name}>
                                <div className="flex items-center justify-between py-2">
                                  <Link
                                    href={item.href}
                                    prefetch={false}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-sm text-gray-400 hover:text-white transition-colors"
                                  >
                                    {item.name}
                                  </Link>
                                  <button
                                    onClick={() =>
                                      setExpandedMobileSubmenu(
                                        expandedMobileSubmenu === item.name ? null : item.name
                                      )
                                    }
                                    className="p-1 text-gray-400 hover:text-white transition-colors"
                                    aria-label="Toggle submenu"
                                  >
                                    <ChevronDown
                                      className={cn(
                                        "w-4 h-4 transition-transform",
                                        expandedMobileSubmenu === item.name && "rotate-180"
                                      )}
                                    />
                                  </button>
                                </div>
                                {expandedMobileSubmenu === item.name && (
                                  <div className="pl-4 mt-1 space-y-1">
                                    {item.children.map((child) => (
                                      <Link
                                        key={child.name}
                                        href={child.href}
                                        prefetch={false}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="block py-2 text-sm text-gray-500 hover:text-white transition-colors"
                                      >
                                        {child.name}
                                      </Link>
                                    ))}
                                  </div>
                                )}
                              </div>
                            ) : (
                              <Link
                                key={item.name}
                                href={item.href}
                                prefetch={false}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block py-2 text-sm text-gray-400 hover:text-white transition-colors"
                              >
                                {item.name}
                              </Link>
                            )
                          ))}
                        </div>
                      )}
                    </motion.div>
                  ))}
                </nav>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mt-8"
                >
                  <Link
                    href="/contact"
                    prefetch={false}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block w-full text-center px-8 py-4 bg-[#DC2626] text-white rounded-lg font-bold text-lg hover:bg-[#B91C1C] transition-colors"
                  >
                    {t.nav.getQuote}
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
