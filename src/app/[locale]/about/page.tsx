import { getCmsPage } from "@/lib/cms/page";
import CmsPageShell from "@/components/cms/CmsPageShell";

interface PageProps {
  params: Promise<{ locale: string } >;
}

export default async function AboutPage({ params }: PageProps) {
  const { locale } = await params;
  const page = await getCmsPage(locale, "about");
  return <CmsPageShell page={page} namespace="about" />;
}
