"use client";

import { motion } from "framer-motion";
import InnerPageLayout from "@/components/layout/InnerPageLayout";
import PageHero from "@/components/sections/PageHero";
import Button from "@/components/ui/Button";

const sections = [
  {
    title: "1. Information We Collect",
    content: "We collect personal information that you provide when booking tours, subscribing to newsletters, or contacting us. This may include your name, email address, phone number, travel dates, and payment information. We also collect non-personal information such as browser type and IP address for website analytics.",
  },
  {
    title: "2. How We Use Your Information",
    content: "Your information is used to process bookings, communicate with you about your trip, send newsletters you have subscribed to, and improve our website and services. We do not sell or rent your personal information to third parties.",
  },
  {
    title: "3. Information Sharing",
    content: "We may share your information with trusted service providers who assist in operating our business, such as payment processors, accommodation partners, and local guides. These parties are required to keep your information confidential and secure.",
  },
  {
    title: "4. Data Security",
    content: "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is completely secure.",
  },
  {
    title: "5. Cookies",
    content: "Our website uses cookies to enhance your browsing experience and analyze website traffic. You can choose to disable cookies through your browser settings, though this may affect some features of the site.",
  },
  {
    title: "6. Your Rights",
    content: "You have the right to access, update, or delete your personal information. You may also unsubscribe from marketing communications at any time. To exercise these rights, please contact us at info@mongoliansecrethistory.mn.",
  },
  {
    title: "7. Changes to This Policy",
    content: "We may update this privacy policy from time to time. Any changes will be posted on this page with an updated effective date. We encourage you to review this policy periodically.",
  },
];

export default function PrivacyPage() {
  return (
    <InnerPageLayout>
      <PageHero
        label="Legal"
        title="Privacy Policy"
        subtitle="How we collect, use, and protect your personal information"
      />

      <section className="bg-white py-20 lg:py-[120px]">
        <div className="mx-auto max-w-[900px] px-6 lg:px-0">
          <div className="flex flex-col gap-10">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <h2 className="font-display text-[28px] text-foreground mb-3">{section.title}</h2>
                <p className="text-base leading-[1.7] text-muted-foreground">{section.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary-dark py-12 lg:py-14">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-0">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-[700px] text-center md:text-left">
              <h2 className="font-display text-[28px] text-white">Questions About Your Privacy?</h2>
              <p className="text-white/80 mt-2">Contact us and we will be happy to address any concerns about your personal data.</p>
            </div>
            <Button href="/contact" variant="primary">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </InnerPageLayout>
  );
}
