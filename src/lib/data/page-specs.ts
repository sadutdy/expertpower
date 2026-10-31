import { buildAr, buildPage } from "@/lib/data/page-builder";
import { serviceSpecs } from "@/lib/data/specs-services";
import { instrumentSpecs, citySpecs } from "@/lib/data/specs-instruments";
import { infoSpecs } from "@/lib/data/specs-info";
import type { SeoArContent } from "@/lib/data/seo-pages-ar";

const specs = [...serviceSpecs, ...instrumentSpecs, ...citySpecs, ...infoSpecs];

export const generatedPages = specs.map(buildPage);

export const generatedAr: Record<string, SeoArContent> = Object.fromEntries(
  specs.map((s) => [s.slug, buildAr(s)])
);
