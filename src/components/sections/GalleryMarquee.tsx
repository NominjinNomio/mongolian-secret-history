"use client";

import { motion } from "framer-motion";
import Image from "@/components/common/Image";

export interface GalleryRow {
  images: string[];
  cardWidth: string;
  cardHeight: string;
}

interface GalleryMarqueeProps {
  rows: GalleryRow[];
  linkWrapper?: (children: React.ReactNode) => React.ReactNode;
}

export default function GalleryMarquee({
  rows,
  linkWrapper,
}: GalleryMarqueeProps) {
  return (
    <div className="flex flex-col gap-4 overflow-hidden">
      {rows.map((row, rowIndex) => {
        const items = [
          ...row.images,
          ...row.images,
          ...row.images,
          ...row.images,
        ];
        const moveLeft = rowIndex % 2 !== 0;

        return (
          <motion.div
            key={rowIndex}
            className="flex w-max gap-4"
            animate={{ x: moveLeft ? ["0%", "-50%"] : ["-50%", "0%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              },
            }}
          >
            {items.map((src, i) => {
              const card = (
                <div
                  className={`relative ${row.cardWidth} ${row.cardHeight} shrink-0 overflow-hidden rounded-xl border border-border`}
                >
                  <Image src={src} alt="Gallery" fill className="object-cover transition-transform duration-700 hover:scale-105" />
                </div>
              );
              return (
                <div key={`${rowIndex}-${i}`} className="shrink-0">
                  {linkWrapper ? linkWrapper(card) : card}
                </div>
              );
            })}
          </motion.div>
        );
      })}
    </div>
  );
}
