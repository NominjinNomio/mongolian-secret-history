"use client";

import { motion } from "framer-motion";
import Image from "@/components/common/Image";

const team = [
  {
    name: "Boldbaatar",
    role: "Founder & Lead Guide",
    bio: "20+ years leading tours across Mongolia",
  },
  {
    name: "Oyungerel",
    role: "Cultural Guide",
    bio: "Specialist in Mongolian history and traditions",
  },
  {
    name: "Ganbold",
    role: "Adventure Guide",
    bio: "Expert in trekking, horses, and desert travel",
  },
  {
    name: "Enkhtuya",
    role: "Operations Manager",
    bio: "Ensures every journey runs smoothly",
  },
];

const rows = [
  team.slice(0, 2),
  team.slice(2, 4),
];

export default function TeamMarquee() {
  return (
    <div className="flex flex-col gap-6 overflow-hidden">
      {rows.map((row, rowIndex) => {
        const items = [...row, ...row, ...row, ...row];
        const moveLeft = rowIndex % 2 !== 0;

        return (
          <motion.div
            key={rowIndex}
            className="flex w-max gap-6"
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
            {items.map((member, i) => (
              <div
                key={`${rowIndex}-${i}`}
                className="flex w-[280px] shrink-0 flex-col items-center rounded-2xl border border-border bg-white p-8 text-center"
              >
                <div className="relative h-[120px] w-[120px] shrink-0 overflow-hidden rounded-full">
                  <Image
                    src="team-placeholder.jpg"
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-display text-[22px] text-foreground mt-5">
                  {member.name}
                </h3>
                <span className="text-sm text-primary-dark">{member.role}</span>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </motion.div>
        );
      })}
    </div>
  );
}
