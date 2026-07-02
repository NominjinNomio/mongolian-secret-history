"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import Image from "@/components/common/Image";

export default function AboutSection() {
  return (
    <section className="bg-[#F8F5F0] py-20 lg:py-[140px]">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-0">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-6 max-w-[520px]"
          >
            <span className="text-sm tracking-[3px] text-primary-dark uppercase">
              About Us
            </span>
            <h2 className="font-display text-3xl md:text-[44px] leading-[1.15]">
              Authentic, Immersive Journeys Across Mongolia
            </h2>
            <p className="text-[17px] leading-[1.7] text-muted-foreground">
              We are a Mongolia-based travel company specializing in authentic, immersive journeys across the country&apos;s most iconic and remote destinations. Our mission is to share the beauty of Mongolia&apos;s vast landscapes, nomadic culture, and rich history with travelers from around the world.
            </p>
            <p className="text-[17px] leading-[1.7] text-muted-foreground">
              Every journey is guided by local experts who ensure safety, comfort, and meaningful connections along the way.
            </p>
            <div className="pt-2">
              <Button href="/about" variant="primary">
                Learn More
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative w-full max-w-[600px] aspect-[5/4] rounded-3xl overflow-hidden"
          >
            <Image
              src="about-nomads.jpg"
              alt="Mongolian nomads"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
