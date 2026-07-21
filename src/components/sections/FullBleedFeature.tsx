"use client";

import { motion } from "framer-motion";
import Image from "@/components/common/Image";
import Button from "@/components/ui/Button";

interface FullBleedFeatureProps {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  href: string;
  cta: string;
}

export default function FullBleedFeature({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  href,
  cta,
}: FullBleedFeatureProps) {
  return (
    <section className="relative min-h-[70vh] flex items-center">
      <Image
        src={image}
        alt={imageAlt}
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/85 via-primary-dark/60 to-transparent" />

      <div className="relative z-10 container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-xl text-white"
        >
          <span className="section-label text-white/90">{eyebrow}</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mt-4">
            {title}
          </h2>
          <div className="gold-line" />
          <p className="text-white/90 leading-relaxed mt-6">
            {description}
          </p>
          <div className="mt-8">
            <Button href={href} variant="primary">
              {cta}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
