import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SeoLandingPage, buildSeoMetadata } from "@/components/SeoLandingPage";
import { seoPages } from "@/lib/data/seo-pages";

export const dynamicParams = false;

function find(parts: string[]) {
  return seoPages.find((p) => p.slug === parts.join("/"));
}

export function generateStaticParams() {
  return seoPages.map((p) => ({ slug: p.slug.split("/") }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = find(slug);
  return page ? buildSeoMetadata(page, "ar") : {};
}

export default async function ArabicSeoPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const page = find(slug);
  if (!page) notFound();
  return <SeoLandingPage page={page} locale="ar" />;
}
