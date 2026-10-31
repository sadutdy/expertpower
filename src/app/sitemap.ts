import type { MetadataRoute } from "next";
import { industries } from "@/lib/data/industries";
import { seoPages } from "@/lib/data/seo-pages";

const BASE_URL = "https://expertpower.com.sa";

const staticRoutes = [
  "/",
  "/about/",
  "/accreditation/",
  "/careers/",
  "/contact/",
  "/industries/",
  "/insights/",
  "/privacy/",
  "/products/",
  "/services/",
  "/terms/",
];

const serviceRoutes = [
  "/services/bms/",
  "/services/calibration/",
  "/services/calibration/dimensional/",
  "/services/calibration/electrical/",
  "/services/calibration/mechanical/",
  "/services/calibration/pressure/",
  "/services/calibration/temperature/",
  "/services/inspection/",
  "/services/maintenance/",
  "/services/onsite-calibration/",
  "/services/rental/",
  "/services/testing/",
  "/services/van-services/",
];

const insightSlugs = [
  "iso-17025-guide",
  "oil-gas-calibration",
  "digital-calibration",
  "pressure-calibration-guide",
  "electrical-safety-testing",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified,
    changeFrequency: route === "/" ? "daily" : "weekly",
    priority: route === "/" ? 1.0 : 0.7,
  }));

  const serviceEntries: MetadataRoute.Sitemap = serviceRoutes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const industryEntries: MetadataRoute.Sitemap = industries.map((industry) => ({
    url: `${BASE_URL}/industries/${industry.id}/`,
    lastModified,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  const insightEntries: MetadataRoute.Sitemap = insightSlugs.map((slug) => ({
    url: `${BASE_URL}/insights/${slug}/`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const keywordEntries: MetadataRoute.Sitemap = seoPages.flatMap((p) => {
    const en = `${BASE_URL}/${p.slug}/`;
    const ar = `${BASE_URL}/ar/${p.slug}/`;
    const alternates = { languages: { "en-SA": en, "ar-SA": ar } };
    return [
      { url: en, lastModified, changeFrequency: "weekly" as const, priority: 0.9, alternates },
      { url: ar, lastModified, changeFrequency: "weekly" as const, priority: 0.9, alternates },
    ];
  });

  return [
    ...staticEntries,
    ...keywordEntries,
    ...serviceEntries,
    ...industryEntries,
    ...insightEntries,
  ];
}
