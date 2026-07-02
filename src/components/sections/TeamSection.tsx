"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import Image from "@/components/common/Image";
import { useTranslations } from "next-intl";

const team = [
  {
    name: "Boldbaatar",
    role: "Founder & Lead Guide",
    bio: "20+ years leading tours across Mongolia",
  },
  {
    name: "Oyungerel",
    role: "Cultural Guide",
    bio: "Specialist in Mongolian history and traditions",
  },
  {
    name: "Ganbold",
    role: "Adventure Guide",
    bio: "Expert in trekking, horses, and desert travel",
  },
  {
    name: "Enkhtuya",
    role: "Operations Manager",
    bio: "Ensures every journey runs smoothly",
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

export default function TeamSection() {
  const t = useTranslations("home");

  return (
    <section className="bg-[#F8F5F0] py-20 lg:py-[140px]">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-0">
        <SectionHeader
          label={t("teamLabel")}
          title={t("teamTitle")}
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {team.map((member) => (
            <motion.div
              key={member.name}
              variants={item}
              whileHover={{ y: -4, boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1)" }}
              className="rounded-2xl bg-white border border-border p-6 flex flex-col items-center text-center transition-shadow"
            >
              <div className="relative h-[120px] w-[120px] rounded-full overflow-hidden">
                <Image
                  src="team-placeholder.jpg"
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-display text-[22px] text-foreground mt-4">{member.name}</h3>
              <span className="text-sm text-primary-dark">{member.role}</span>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{member.bio}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
