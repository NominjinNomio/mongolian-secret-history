"use client";

import { motion } from "framer-motion";
import Image from "@/components/common/Image";
import Button from "@/components/ui/Button";

interface SplitCardSectionProps {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  href: string;
  cta: string;
  reversed?: boolean;
}

export default function SplitCardSection({
  title,
  description,
  image,
  imageAlt,
  href,
  cta,
  reversed = false,
}: SplitCardSectionProps) {
  return (
    <section className="bg-[#FAFAF8] py-6 md:py-10">
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
            className={`relative min-h-[320px] md:min-h-[420px] overflow-hidden ${
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
