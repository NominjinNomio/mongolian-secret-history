"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";

const services = [
  {
    title: "Group Tours",
    subtitle: "Pre-designed itineraries covering top destinations",
    desc: "Join a small group of like-minded travelers and explore Mongolia's highlights with an expert guide.",
  },
  {
    title: "Private \u0026 Custom Tours",
    subtitle: "Tailor-made travel experiences based on your schedule",
    desc: "Design your own adventure — choose your dates, destinations, activities, and pace.",
  },
  {
    title: "Cultural Experiences",
    subtitle: "Nomadic homestays, traditional meals, and local immersion",
    desc: "Stay with herder families, learn traditional crafts, and experience authentic Mongolian hospitality.",
  },
  {
    title: "Adventure Activities",
    subtitle: "Horse riding, camel trekking, hiking, and park exploration",
    desc: "From horseback rides across the steppe to camel treks in the Gobi, adventure awaits.",
  },
  {
    title: "Transportation \u0026 Guides",
    subtitle: "Professional English-speaking guides and drivers",
    desc: "Travel safely and comfortably in well-maintained 4x4 vehicles with knowledgeable local guides.",
  },
  {
    title: "Accommodation Arrangement",
    subtitle: "From hotels in Ulaanbaatar to ger camps in remote regions",
    desc: "We handle all lodging, mixing city comfort with traditional ger camp experiences.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ServicesSection() {
  return (
    <section className="bg-white py-20 lg:py-[140px]">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-0">
        <SectionHeader
          label="Our Services"
          title="Everything for Your Mongolia Journey"
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={item}
              whileHover={{ y: -4, boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1)" }}
              className="rounded-2xl bg-[#F8F6F1] p-8 transition-shadow"
            >
              <span className="text-2xl text-accent">◆</span>
              <h3 className="font-display text-[22px] text-foreground mt-3">{service.title}</h3>
              <p className="text-sm text-primary-dark mt-1">{service.subtitle}</p>
              <p className="text-[15px] text-muted-foreground mt-3 leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
