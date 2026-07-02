"use client";

import { motion } from "framer-motion";
import InnerPageLayout from "@/components/layout/InnerPageLayout";
import PageHero from "@/components/sections/PageHero";
import Image from "@/components/common/Image";

const team = [
  { name: "Boldbaatar", role: "Founder \u0026 Lead Guide", bio: "20+ years leading tours across Mongolia", detail: "Former nomadic herder with deep knowledge of every region." },
  { name: "Oyungerel", role: "Cultural Guide", bio: "Specialist in Mongolian history and traditions", detail: "Historian and storyteller who brings ancient Mongolia to life." },
  { name: "Ganbold", role: "Adventure Guide", bio: "Expert in trekking, horses, and desert travel", detail: "Certified wilderness guide with a passion for outdoor adventure." },
  { name: "Enkhtuya", role: "Operations Manager", bio: "Ensures every journey runs smoothly", detail: "Handles logistics, accommodation, and guest communications." },
];

export default function TeamPage() {
  return (
    <InnerPageLayout>
      <PageHero
        label="Our People"
        title="Meet Your Guides"
        subtitle="Experienced locals passionate about sharing Mongolia with you"
      />

      <section className="bg-[#F8F5F0] py-20 lg:py-[120px]">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-0">
          <div className="text-center max-w-[800px] mx-auto mb-12">
            <p className="text-lg leading-[1.7] text-muted-foreground">
              Our team of professional guides, drivers, and travel experts are dedicated to making your Mongolia journey safe, comfortable, and unforgettable.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -4, boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1)" }}
                className="rounded-2xl bg-white border border-border p-6 flex flex-col items-center text-center transition-shadow"
              >
                <div className="relative h-[140px] w-[140px] rounded-full overflow-hidden">
                  <Image src="team-placeholder.jpg" alt={member.name} fill className="object-cover" />
                </div>
                <h3 className="font-display text-2xl text-foreground mt-4">{member.name}</h3>
                <span className="text-sm text-primary-dark">{member.role}</span>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{member.bio}</p>
                <p className="text-xs text-muted-foreground mt-1">{member.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </InnerPageLayout>
  );
}
