"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import Image from "@/components/common/Image";

const row1 = ["gallery-1.jpg", "gallery-2.jpg", "gallery-3.jpg"];
const row2 = ["gallery-4.jpg", "gallery-5.jpg"];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function GallerySection() {
  return (
    <section className="bg-white py-20 lg:py-[140px]">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-0">
        <SectionHeader
          label="Gallery"
          title="Moments from Mongolia"
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-14 flex flex-col gap-4"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {row1.map((src) => (
              <motion.div
                key={src}
                variants={item}
                className="relative h-[260px] rounded-xl overflow-hidden"
              >
                <Image src={src} alt="Mongolia gallery" fill className="object-cover" />
              </motion.div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {row2.map((src) => (
              <motion.div
                key={src}
                variants={item}
                className="relative h-[320px] rounded-xl overflow-hidden"
              >
                <Image src={src} alt="Mongolia gallery" fill className="object-cover" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
