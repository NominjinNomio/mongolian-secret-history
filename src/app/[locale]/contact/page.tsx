import { getCmsPage } from "@/lib/cms/page";
import CmsPageShell from "@/components/cms/CmsPageShell";

interface PageProps {
  params: Promise<{ locale: string } >;
}

export default async function ContactPage({ params }: PageProps) {
  const { locale } = await params;
  const page = await getCmsPage(locale, "contact");
  return <CmsPageShell page={page} namespace="contact" />;
}
