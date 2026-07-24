import { getCmsPage } from "@/lib/cms/page";
import CmsPageShell from "@/components/cms/CmsPageShell";
import type { Metadata } from "next";
import { getCmsMetadata } from "@/lib/cms/seo";

interface PageProps {
  params: Promise<{ locale: string } >;
}

export default async function TeamPage({ params }: PageProps) {
  const { locale } = await params;
  const page = await getCmsPage(locale, "team");
  return <CmsPageShell page={page} namespace="team" />;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  return getCmsMetadata({
    slug: "team",
    locale,
    fallbackTitle: "Our Team",
    fallbackDescription: "Meet the guides and travel designers behind Mongolian Secret History.",
  });
}
