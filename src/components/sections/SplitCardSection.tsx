"use client";

import { motion } from "framer-motion";
import Image from "@/components/common/Image";
import Button from "@/components/ui/Button";

interface SplitCardSectionProps {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  href: string;
  cta: string;
  reversed?: boolean;
}

export default function SplitCardSection({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  href,
  cta,
  reversed = false,
}: SplitCardSectionProps) {
  return (
    <section className="bg-[#F7F5F0] py-6 md:py-10">
      <div className="container-custom">
        <div
          className={`grid items-stretch gap-6 ${
            reversed ? "lg:grid-cols-[45%_1fr]" : "lg:grid-cols-[1fr_45%]"
          }`}
        >
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`relative min-h-[300px] md:min-h-[400px] overflow-hidden ${
              reversed ? "lg:order-2" : "lg:order-1"
            }`}
          >
            <Image
              src={image}
              alt={imageAlt}
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </motion.div>

          {/* Content card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className={`flex flex-col justify-center bg-white p-8 md:p-12 lg:p-16 ${
              reversed ? "lg:order-1" : "lg:order-2"
            }`}
          >
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C8A24A]">
              {eyebrow}
            </span>
            <h3 className="font-display text-2xl md:text-3xl text-[#0A2C7A] mt-3">
              {title}
            </h3>
            <div className="gold-line mt-4" />
            <p className="text-[#4B4B4B] leading-relaxed mt-5">
              {description}
            </p>
            <div className="mt-8">
              <Button href={href} variant="primary">
                {cta}
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
