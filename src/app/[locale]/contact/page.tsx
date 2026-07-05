import { getTranslations } from "next-intl/server";
import InnerPageLayout from "@/components/layout/InnerPageLayout";
import PageHero from "@/components/sections/PageHero";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";

interface PageProps {
  params: Promise<{ locale: string } >;
}

export default async function ContactPage({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations("contact");

  return (
    <InnerPageLayout>
      <PageHero
        label={t("heroLabel")}
        title={t("heroTitle")}
        subtitle={t("heroSubtitle")}
      />
      <section className="bg-[#F8F5F0] py-20 lg:py-[120px]">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </section>
    </InnerPageLayout>
  );
}
