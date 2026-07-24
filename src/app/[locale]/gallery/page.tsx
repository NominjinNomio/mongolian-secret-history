import type { Metadata } from "next";
import { getCmsMetadata } from "@/lib/cms/seo";
import GalleryClient from "./client";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  return getCmsMetadata({
    slug: "gallery",
    locale,
    fallbackTitle: "Gallery",
    fallbackDescription: "Moments from Mongolia — landscapes, culture, and life on the steppe.",
  });
}

export default function GalleryPage() {
  return <GalleryClient />;
}
