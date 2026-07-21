"use client";

import { motion } from "framer-motion";
import Image from "@/components/common/Image";
import Button from "@/components/ui/Button";

interface SplitFeatureSectionProps {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  href: string;
  cta: string;
  reversed?: boolean;
}

export default function SplitFeatureSection({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  href,
  cta,
  reversed = false,
}: SplitFeatureSectionProps) {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div
          className={`grid items-center gap-10 lg:gap-16 ${
            reversed ? "lg:grid-cols-[1fr_55%]" : "lg:grid-cols-[55%_1fr]"
          }`}
        >
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`relative aspect-[4/3] w-full overflow-hidden ${
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

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className={`flex flex-col items-start gap-6 ${
              reversed ? "lg:order-1 lg:pr-8" : "lg:order-2 lg:pl-8"
            }`}
          >
            <span className="section-label text-primary">{eyebrow}</span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground">
              {title}
            </h2>
            <div className="gold-line" />
            <p className="text-muted-foreground leading-relaxed max-w-lg">
              {description}
            </p>
            <Button href={href} variant="primary">
              {cta}
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
