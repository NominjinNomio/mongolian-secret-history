"use client";

import { motion } from "framer-motion";
import Image from "@/components/common/Image";
import Button from "@/components/ui/Button";

interface SpaSectionProps {
  title: string;
  description: string;
  images: { src: string; alt: string }[];
  href: string;
  cta: string;
}

export default function SpaSection({
  title,
  description,
  images,
  href,
  cta,
}: SpaSectionProps) {
  return (
    <section className="bg-[#FAFAF8] py-6 md:py-10">
      <div className="container-custom">
        <div className="grid items-stretch gap-6 lg:grid-cols-2">
          {/* Stacked images */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="grid grid-rows-2 gap-4"
          >
            <div className="relative min-h-[220px] overflow-hidden"
            >
              <Image
                src={images[0]?.src}
                alt={images[0]?.alt}
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="relative min-h-[220px] overflow-hidden"
            >
              <Image
                src={images[1]?.src}
                alt={images[1]?.alt}
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </motion.div>

          {/* Content card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="flex flex-col justify-center bg-white p-8 md:p-12 lg:p-16"
          >
            <h3 className="font-elegant text-3xl md:text-4xl font-medium text-[#0A2C7A]">
              {title}
            </h3>
            <p className="text-[#5A5A5A] leading-[1.8] text-sm md:text-base mt-5">
              {description}
            </p>
            <div className="mt-8">
              <Button href={href} variant="outline" className="uppercase text-[11px] tracking-[0.15em] px-6 py-3">
                {cta}
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
