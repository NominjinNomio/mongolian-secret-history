"use client";

import { motion } from "framer-motion";
import Image from "@/components/common/Image";
import Button from "@/components/ui/Button";

interface DoubleImageSectionProps {
  eyebrow: string;
  title: string;
  description: string;
  images: { src: string; alt: string }[];
  href: string;
  cta: string;
  reversed?: boolean;
}

export default function DoubleImageSection({
  eyebrow,
  title,
  description,
  images,
  href,
  cta,
  reversed = false,
}: DoubleImageSectionProps) {
  return (
    <section className="bg-[#F7F5F0] py-6 md:py-10">
      <div className="container-custom">
        <div
          className={`grid items-stretch gap-6 ${
            reversed ? "lg:grid-cols-[1fr_45%]" : "lg:grid-cols-[45%_1fr]"
          }`}
        >
          {/* Content card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`flex flex-col justify-center bg-white p-8 md:p-12 lg:p-16 ${
              reversed ? "lg:order-2" : "lg:order-1"
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

          {/* Images */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className={`grid grid-cols-2 gap-4 ${
              reversed ? "lg:order-1" : "lg:order-2"
            }`}
          >
            <div className="relative col-span-2 aspect-[16/10] overflow-hidden"
            >
              <Image
                src={images[0]?.src}
                alt={images[0]?.alt}
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden"
            >
              <Image
                src={images[1]?.src}
                alt={images[1]?.alt}
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden"
            >
              <Image
                src={images[2]?.src}
                alt={images[2]?.alt}
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
