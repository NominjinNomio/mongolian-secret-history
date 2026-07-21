"use client";

import { motion } from "framer-motion";
import { Utensils } from "lucide-react";

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
      className="bg-white rounded-2xl border border-border p-8 transition-all hover:shadow-[0_10px_15px_-3px_rgba(18,63,174,0.08)]"
    >
      <div className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center text-primary"
      >
        <Utensils size={22} strokeWidth={1.5} />
      </div>
      <h3 className="font-display text-[22px] text-foreground mt-4">{title}</h3>
      <p className="text-sm text-primary mt-1">{subtitle}</p>
      <p className="text-[15px] text-muted-foreground mt-3 leading-relaxed">{desc}</p>
    </motion.div>
  );
}
