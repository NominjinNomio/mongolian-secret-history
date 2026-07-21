"use client";

import { motion } from "framer-motion";
import Image from "@/components/common/Image";
import Button from "@/components/ui/Button";

interface ThreeImageFeatureProps {
  eyebrow: string;
  title: string;
  description: string;
  images: { src: string; alt: string }[];
  href: string;
  cta: string;
}

export default function ThreeImageFeature({
  eyebrow,
  title,
  description,
  images,
  href,
  cta,
}: ThreeImageFeatureProps) {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-start gap-6 lg:pr-8"
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

          {/* Images grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="grid grid-cols-2 gap-4"
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
