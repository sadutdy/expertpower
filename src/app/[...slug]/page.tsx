import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SeoLandingPage, buildSeoMetadata } from "@/components/SeoLandingPage";
import { generatedPages } from "@/lib/data/page-specs";

export const dynamicParams = false;

/** Insight articles are served by app/insights/[slug]; the rest come through here. */
const pages = generatedPages.filter((p) => !p.slug.startsWith("insights/"));

function find(parts: string[]) {
  return pages.find((p) => p.slug === parts.join("/"));
}

export function generateStaticParams() {
  return pages.map((p) => ({ slug: p.slug.split("/") }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = find(slug);
  return page ? buildSeoMetadata(page) : {};
}

export default async function SeoPageRoute({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const page = find(slug);
  if (!page) notFound();
  return <SeoLandingPage page={page} />;
}
