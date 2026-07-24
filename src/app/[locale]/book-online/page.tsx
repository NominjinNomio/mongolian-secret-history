import type { Metadata } from "next";
import { getCmsMetadata } from "@/lib/cms/seo";
import BookOnlineClient from "./client";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  return getCmsMetadata({
    slug: "book-online",
    locale,
    fallbackTitle: "Book Online",
    fallbackDescription: "Reserve your tour, accommodation, or travel services with our team.",
  });
}

export default function BookOnlinePage() {
  return <BookOnlineClient />;
}
