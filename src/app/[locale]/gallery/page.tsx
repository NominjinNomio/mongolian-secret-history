"use client";

import { motion } from "framer-motion";
import InnerPageLayout from "@/components/layout/InnerPageLayout";
import PageHero from "@/components/sections/PageHero";
import Image from "@/components/common/Image";

const images = [
  "gallery-1.jpg", "gallery-2.jpg", "gallery-3.jpg", "gallery-4.jpg",
  "gallery-5.jpg", "gallery-1.jpg", "gallery-2.jpg", "gallery-3.jpg",
];

export default function GalleryPage() {
  return (
    <InnerPageLayout>
      <PageHero
        label="Gallery"
        title="Moments from Mongolia"
        subtitle="A visual journey through Mongolia's landscapes and culture"
      />

      <section className="bg-[#F8F5F0] py-20 lg:py-[120px]">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {images.map((src, index) => (
              <motion.div
                key={`${src}-${index}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`relative rounded-xl overflow-hidden ${index % 5 === 0 || index % 5 === 4 ? "h-[320px] lg:col-span-2" : "h-[260px]"}`}
              >
                <Image src={src} alt="Mongolia gallery" fill className="object-cover" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </InnerPageLayout>
  );
}
