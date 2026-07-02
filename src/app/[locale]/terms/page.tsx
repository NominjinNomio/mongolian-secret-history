"use client";

import { motion } from "framer-motion";
import InnerPageLayout from "@/components/layout/InnerPageLayout";
import PageHero from "@/components/sections/PageHero";

const sections = [
  {
    title: "1. Booking & Payment",
    content: "A deposit is required to confirm your booking. The remaining balance is due 30 days before departure. We accept bank transfer and major credit cards. All prices are quoted in US dollars unless otherwise stated.",
  },
  {
    title: "2. Cancellation Policy",
    content: "Cancellations made more than 60 days before departure receive a full refund minus the deposit. Cancellations 30–60 days before departure receive a 50% refund. Cancellations less than 30 days before departure are non-refundable.",
  },
  {
    title: "3. Travel Insurance",
    content: "We strongly recommend that all travelers purchase comprehensive travel insurance covering trip cancellation, medical expenses, and emergency evacuation. Proof of insurance may be requested before departure.",
  },
  {
    title: "4. Itinerary Changes",
    content: "While we make every effort to operate tours as planned, Mongolia's remote conditions may require itinerary adjustments due to weather, road conditions, or other factors beyond our control. Your safety is our priority.",
  },
  {
    title: "5. Health & Fitness",
    content: "Travelers should be in reasonable health and inform us of any medical conditions before booking. Some tours involve long drives on unpaved roads and outdoor activities in variable weather conditions.",
  },
  {
    title: "6. Liability",
    content: "Mongolian Secret History acts as an agent for local suppliers and is not liable for acts, errors, omissions, or negligence of any such suppliers. Participation in all activities is at the traveler's own risk.",
  },
];

export default function TermsPage() {
  return (
    <InnerPageLayout>
      <PageHero
        label="Legal"
        title="Terms & Conditions"
        subtitle="Please read these terms carefully before booking your Mongolia adventure"
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
    </InnerPageLayout>
  );
}
