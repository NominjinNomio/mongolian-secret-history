import { getCmsPage } from "@/lib/cms/page";
import CmsPageShell from "@/components/cms/CmsPageShell";

interface PageProps {
  params: Promise<{ locale: string } >;
}

export default async function ServicesPage({ params }: PageProps) {
  const { locale } = await params;
  const page = await getCmsPage(locale, "services");
  return <CmsPageShell page={page} namespace="services" />;
}
