"use client";

import { motion } from "framer-motion";
import Image from "@/components/common/Image";

interface GalleryMarqueeProps {
  rows: string[][];
  imageHeight?: string;
  cardWidth?: string;
  linkWrapper?: (children: React.ReactNode) => React.ReactNode;
}

export default function GalleryMarquee({
  rows,
  imageHeight = "h-[240px] md:h-[300px]",
  cardWidth = "w-[320px] md:w-[420px]",
  linkWrapper,
}: GalleryMarqueeProps) {
  return (
    <div className="flex flex-col gap-4 overflow-hidden">
      {rows.map((row, rowIndex) => {
        const items = [...row, ...row, ...row, ...row];
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
                  className={`relative ${cardWidth} ${imageHeight} shrink-0 overflow-hidden rounded-xl`}
                >
                  <Image src={src} alt="Gallery" fill className="object-cover" />
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
