import type { Metadata } from "next";
import { getCmsMetadata } from "@/lib/cms/seo";
import TestimonialsClient from "./client";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  return getCmsMetadata({
    slug: "testimonials",
    locale,
    fallbackTitle: "Testimonials",
    fallbackDescription: "What our guests say about traveling with us.",
  });
}

export default function TestimonialsPage() {
  return <TestimonialsClient />;
}
