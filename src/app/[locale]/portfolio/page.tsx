import type { Metadata } from "next";
import { getCmsMetadata } from "@/lib/cms/seo";
import PortfolioClient from "./client";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  return getCmsMetadata({
    slug: "portfolio",
    locale,
    fallbackTitle: "Tours",
    fallbackDescription: "Signature tours across Mongolia — from the Gobi to Khuvsgul.",
  });
}

export default function PortfolioPage() {
  return <PortfolioClient />;
}
