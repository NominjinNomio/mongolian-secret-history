"use client";

import { motion } from "framer-motion";
import InnerPageLayout from "@/components/layout/InnerPageLayout";
import PageHero from "@/components/sections/PageHero";

const services = [
  {
    title: "Group Tours",
    subtitle: "Pre-designed itineraries covering top destinations in Mongolia",
    desc: "Join a small group of like-minded travelers and explore Mongolia's highlights with an expert guide.",
  },
  {
    title: "Private \u0026 Custom Tours",
    subtitle: "Tailor-made travel experiences based on your interests and schedule",
    desc: "Design your own adventure — choose your dates, destinations, activities, and pace.",
  },
  {
    title: "Cultural Experiences",
    subtitle: "Nomadic homestays, traditional meals, and local lifestyle immersion",
    desc: "Stay with herder families, learn traditional crafts, and experience authentic Mongolian hospitality.",
  },
  {
    title: "Adventure Activities",
    subtitle: "Horse riding, camel trekking, hiking, and national park exploration",
    desc: "From horseback rides across the steppe to camel treks in the Gobi, adventure awaits.",
  },
  {
    title: "Transportation \u0026 Guides",
    subtitle: "Professional English-speaking guides and experienced drivers",
    desc: "Travel safely and comfortably in well-maintained 4x4 vehicles with knowledgeable local guides.",
  },
  {
    title: "Accommodation Arrangement",
    subtitle: "From hotels in Ulaanbaatar to ger camps in remote regions",
    desc: "We handle all lodging, mixing city comfort with traditional ger camp experiences.",
  },
];

export default function ServicesPage() {
  return (
    <InnerPageLayout>
      <PageHero
        label="What We Offer"
        title="Our Services"
        subtitle="Everything you need for an unforgettable Mongolia journey"
      />

      <section className="bg-[#F8F5F0] py-20 lg:py-[120px]">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-0">
          <div className="text-center max-w-[800px] mx-auto mb-12">
            <p className="text-lg leading-[1.7] text-muted-foreground">
              From guided group tours to fully customized private itineraries, we provide end-to-end travel services that let you experience Mongolia your way.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -4, boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1)" }}
                className="rounded-2xl bg-white border border-border p-8 transition-shadow"
              >
                <span className="text-2xl text-accent">◆</span>
                <h3 className="font-display text-[22px] text-foreground mt-3">{service.title}</h3>
                <p className="text-sm text-primary-dark mt-1">{service.subtitle}</p>
                <p className="text-[15px] text-muted-foreground mt-3 leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </InnerPageLayout>
  );
}
