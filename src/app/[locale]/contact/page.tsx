import { getTranslations } from "next-intl/server";
import InnerPageLayout from "@/components/layout/InnerPageLayout";
import PageHero from "@/components/sections/PageHero";

interface PageProps {
  params: Promise<{ locale: string }>;
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

      <section className="bg-[#F5F1EC] py-16 lg:py-20">
        <div className="mx-auto max-w-[1000px] px-6 lg:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="bg-white rounded-[20px] p-8 lg:p-10 shadow-sm">
              <h2 className="font-display text-xl text-[#1A2B4A] mb-6">Send Us a Message</h2>
              <form className="flex flex-col gap-4">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-sm text-[#5A5A5A]">Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="w-full rounded-[10px] border border-[#E8E4DE] bg-[#F5F3EF] px-4 py-3 text-sm text-[#1A2B4A] focus:outline-none focus:border-[#1A2B4A]"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-sm text-[#5A5A5A]">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="w-full rounded-[10px] border border-[#E8E4DE] bg-[#F5F3EF] px-4 py-3 text-sm text-[#1A2B4A] focus:outline-none focus:border-[#1A2B4A]"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-sm text-[#5A5A5A]">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full rounded-[10px] border border-[#E8E4DE] bg-[#F5F3EF] px-4 py-3 text-sm text-[#1A2B4A] focus:outline-none focus:border-[#1A2B4A] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="self-start bg-[#1A2B4A] hover:bg-[#132038] text-white rounded-full px-7 py-2.5 text-sm font-medium transition-colors mt-1"
                >
                  Send Inquiry
                </button>
              </form>
            </div>

            <div className="pt-2">
              <h2 className="font-display text-xl text-[#1A2B4A] mb-6">Get in Touch</h2>
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-0.5">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#999999]">Address</span>
                  <p className="text-sm text-[#1A2B4A] leading-relaxed">Akuma center and Workers street, Ulaanbaatar</p>
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#999999]">Phone</span>
                  <p className="text-sm text-[#1A2B4A]">+976 70000450</p>
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#999999]">Email</span>
                  <p className="text-sm text-[#1A2B4A]">info@mongoliansecrethistory.mn</p>
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#999999]">Working Hours</span>
                  <p className="text-sm text-[#1A2B4A]">Mon–Fri, 9:00 AM – 6:00 PM (GMT+8)</p>
                </div>

                <div className="pt-4">
                  <p className="text-base font-medium text-[#1A2B4A] mb-1">Prefer to call?</p>
                  <p className="text-sm text-[#5A5A5A] mb-4">Our team is available to answer your questions and help start your trip.</p>
                  <a
                    href="tel:+97670000450"
                    className="inline-block bg-[#C9A227] hover:bg-[#b08f22] text-white rounded-full px-6 py-2.5 text-sm font-medium transition-colors"
                  >
                    Call Us Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </InnerPageLayout>
  );
}
