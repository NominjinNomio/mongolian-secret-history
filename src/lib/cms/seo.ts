import type { Metadata } from "next";
import { getCmsPage } from "@/lib/cms/page";
import { stripHtml } from "@/lib/cms/html";

const SITE_NAME = "Mongolian Secret History";
const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://mongolian-secret-history-nominjin-s-projects1.vercel.app";

interface CmsMetadataOptions {
  slug: string;
  locale: string;
  fallbackTitle: string;
  fallbackDescription: string;
  path?: string;
}

export async function getCmsMetadata({
  slug,
  locale,
  fallbackTitle,
  fallbackDescription,
  path,
}: CmsMetadataOptions): Promise<Metadata> {
  let title = fallbackTitle;
  let description = fallbackDescription;
  let ogImage: string | undefined;

  try {
    const page = await getCmsPage(locale, slug);
    if (page) {
      title = page.name || fallbackTitle;
      description = stripHtml(page.description || "") || fallbackDescription;
      const thumb = page.thumbnail?.url || page.pageImages?.[0]?.url;
      if (thumb) ogImage = thumb;
    }
  } catch {
    // fall back to static metadata
  }

  const canonical = `${BASE_URL}/${locale}${path ?? (slug === "home" ? "" : `/${slug}`)}`;

  return {
    title: slug === "home" ? `${title} | ${SITE_NAME}` : `${title} | ${SITE_NAME}`,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: SITE_NAME,
      locale: locale === "mn" ? "mn_MN" : "en_US",
      type: "website",
      ...(ogImage ? { images: [{ url: ogImage }] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(ogImage ? { images: [ogImage] } : {}),
    },
  };
}
