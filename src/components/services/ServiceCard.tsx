"use client";

import { motion } from "framer-motion";

interface ServiceCardProps {
  title: string;
  subtitle: string;
  desc: string;
}

export default function ServiceCard({ title, subtitle, desc }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-2xl p-8 transition-shadow hover:shadow-lg"
    >
      <span className="text-2xl text-[#C9A227]">◆</span>
      <h3 className="font-display text-[22px] text-foreground mt-4">{title}</h3>
      <p className="text-sm text-primary-dark mt-1">{subtitle}</p>
      <p className="text-[15px] text-muted-foreground mt-3 leading-relaxed">{desc}</p>
    </motion.div>
  );
}
