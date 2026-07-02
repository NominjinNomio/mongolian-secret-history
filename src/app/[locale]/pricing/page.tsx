"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import InnerPageLayout from "@/components/layout/InnerPageLayout";
import PageHero from "@/components/sections/PageHero";
import Button from "@/components/ui/Button";

const plans = [
  {
    duration: "2–5 days",
    price: "$700–$900",
    title: "Short Tours",
    desc: "Perfect for a quick escape into Mongolia's nature and culture",
    features: ["Airport transfers", "English-speaking guide", "Ger camp stays"],
  },
  {
    duration: "6–9 days",
    price: "$900–$1,300",
    title: "Mid-Length Tours",
    desc: "A deeper journey across multiple regions and landscapes",
    features: ["All transport", "Most meals", "National park fees"],
  },
  {
    duration: "10+ days",
    price: "$1,500+",
    title: "Extended Tours",
    desc: "The complete Mongolia experience, fully customized",
    features: ["Full board option", "Remote destinations", "Private vehicle"],
  },
];

export default function PricingPage() {
  return (
    <InnerPageLayout>
      <PageHero
        label="Transparent Pricing"
        title="Tour Pricing"
        subtitle="Flexible pricing for every kind of Mongolia adventure"
      />

      <section className="bg-[#F8F5F0] py-20 lg:py-[120px]">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-0">
          <div className="text-center max-w-[800px] mx-auto mb-12">
            <p className="text-lg leading-[1.7] text-muted-foreground">
              Our tour prices vary based on duration, group size, accommodation level, and activities. Below are starting prices for our most common tour categories.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <motion.div
                key={plan.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -4, boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1)" }}
                className="rounded-[20px] bg-white border border-border p-10 flex flex-col gap-4 transition-shadow"
              >
                <span className="text-sm text-muted-foreground">{plan.duration}</span>
                <span className="font-display text-[44px] text-primary-dark">{plan.price}</span>
                <h3 className="font-display text-2xl text-foreground">{plan.title}</h3>
                <p className="text-[15px] text-muted-foreground leading-relaxed">{plan.desc}</p>
                <ul className="flex flex-col gap-3 mt-2">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check size={16} className="text-primary-dark" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-4">
                  <Button href="/contact" variant="dark" className="w-full">
                    Request Quote
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-12 rounded-[20px] bg-primary-dark p-10 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-8"
          >
            <div className="max-w-[700px]">
              <h3 className="font-display text-2xl lg:text-[28px] text-white">Need a Custom Itinerary?</h3>
              <p className="text-white/85 mt-2 leading-relaxed">
                Tell us your travel dates, interests, and budget. We&apos;ll design a tailor-made Mongolia journey just for you.
              </p>
            </div>
            <Button href="/contact" variant="primary">
              Request Custom Quote
            </Button>
          </motion.div>
        </div>
      </section>
    </InnerPageLayout>
  );
}
