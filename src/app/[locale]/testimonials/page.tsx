import { getCmsPage } from "@/lib/cms/page";
import CmsPageShell from "@/components/cms/CmsPageShell";

interface PageProps {
  params: Promise<{ locale: string } >;
}

export default async function TestimonialsPage({ params }: PageProps) {
  const { locale } = await params;
  const page = await getCmsPage(locale, "testimonials");
  return <CmsPageShell page={page} namespace="testimonials" />;
}
