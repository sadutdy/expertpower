"use client";

import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";

export function Footer() {
  const { t } = useLang();

  const year = new Date().getFullYear();

  const serviceLinks = [
    { label: t.footer.links.services.calibration, href: "/services/calibration" },
    { label: t.footer.links.services.maintenance, href: "/services/maintenance" },
    { label: t.footer.links.services.testing, href: "/services/testing" },
    { label: t.footer.links.services.inspection, href: "/services/inspection" },
  ];
  const companyLinks = [
    { label: t.footer.links.company.about, href: "/about" },
    { label: t.footer.links.company.team, href: "/about#team" },
    { label: t.footer.links.company.accreditations, href: "/accreditation" },
    { label: t.footer.links.company.careers, href: "/careers" },
  ];
  const industryLinks = [
    { label: t.footer.links.industries.oilGas, href: "/industries/oil-gas" },
    { label: t.footer.links.industries.manufacturing, href: "/industries/manufacturing" },
    { label: t.footer.links.industries.energy, href: "/industries/energy" },
  ];

  const contactItems: {
    Icon: typeof Phone;
    label: string;
    entries: { value: string; href?: string }[];
  }[] = [
    {
      Icon: Phone,
      label: t.footer.contact.phone,
      entries: [{ value: "+966114210481", href: "tel:+966114210481" }],
    },
    {
      Icon: Mail,
      label: t.footer.contact.email,
      entries: [
        { value: "info@expertpower.com.sa", href: "mailto:info@expertpower.com.sa" },
        { value: "customerservice@expertpower.com.sa", href: "mailto:customerservice@expertpower.com.sa" },
      ],
    },
    {
      Icon: Clock,
      label: t.footer.contact.hours,
      entries: [{ value: t.footer.contact.hoursValue }],
    },
  ];

  return (
    <footer className="bg-[#0F172A] text-white">
      <div className="container-custom pt-10 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" prefetch={false} className="inline-block mb-4">
              <img
                src="/assets/Logo.png"
                alt="Expert Power"
                className="h-12 w-auto brightness-0 invert"
                loading="lazy"
              />
            </Link>
            <p className="text-gray-400 mb-4 max-w-sm leading-relaxed text-sm">
              {t.footer.tagline}
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/company/expert-power-measurement-and-calibration/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#DC2626] transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://twitter.com/expertpowersa"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#DC2626] transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-4">{t.footer.columns.services}</h4>
            <ul className="space-y-2">
              {serviceLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} prefetch={false} className="text-gray-400 hover:text-white transition-colors link-underline">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-lg mb-4">{t.footer.columns.company}</h4>
            <ul className="space-y-2">
              {companyLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} prefetch={false} className="text-gray-400 hover:text-white transition-colors link-underline">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="font-bold text-lg mb-4">{t.footer.columns.industries}</h4>
            <ul className="space-y-2">
              {industryLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} prefetch={false} className="text-gray-400 hover:text-white transition-colors link-underline">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Bar */}
        <div className="mt-10 pt-8 border-t border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Addresses */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#DC2626]/20 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-[#DC2626]" />
              </div>
              <div>
                <h5 className="font-semibold mb-1">{t.footer.contact.addresses}</h5>
                <div className="space-y-2">
                  <div>
                    <p className="text-sm font-medium text-gray-300">{t.footer.contact.riyadhLabel}</p>
                    <p className="text-sm text-gray-400 whitespace-pre-line leading-relaxed">
                      {t.footer.contact.riyadhAddress}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-300">{t.footer.contact.dammamLabel}</p>
                    <p className="text-sm text-gray-400 whitespace-pre-line leading-relaxed">
                      {t.footer.contact.dammamAddress}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Phone, Email, Hours */}
            {contactItems.map(({ Icon, label, entries }) => (
              <div key={label} className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-full bg-[#DC2626]/20 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-4 h-4 text-[#DC2626]" />
                </div>
                <div>
                  <h5 className="font-semibold mb-1 text-sm">{label}</h5>
                  <div className="space-y-0.5">
                    {entries.map((entry) =>
                      entry.href ? (
                        <a
                          key={entry.href}
                          href={entry.href}
                          className="block text-sm text-gray-400 hover:text-white transition-colors"
                        >
                          {entry.value}
                        </a>
                      ) : (
                        <p key={entry.value} className="text-sm text-gray-400 whitespace-pre-line">
                          {entry.value}
                        </p>
                      )
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-4 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-sm text-gray-500">
            © {year} {t.footer.bottom.copyright}
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" prefetch={false} className="text-sm text-gray-500 hover:text-white transition-colors">
              {t.footer.bottom.privacy}
            </Link>
            <Link href="/terms" prefetch={false} className="text-sm text-gray-500 hover:text-white transition-colors">
              {t.footer.bottom.terms}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
