import { SeoLandingPage, buildSeoMetadata } from "@/components/SeoLandingPage";
import { getSeoPage } from "@/lib/data/seo-pages";

const page = getSeoPage("cable-fault-detection-van-service-saudi-arabia");

export const metadata = buildSeoMetadata(page);

export default function Page() {
  return <SeoLandingPage page={page} />;
}
