"use client";

import { UserPlus, CalendarClock, Compass, Map, Plane } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    icon: UserPlus,
    title: "Sign up/\nRegistration",
  },
  {
    icon: CalendarClock,
    title: "Schedule your\nTime",
  },
  {
    icon: Compass,
    title: "Discover your\nDestinations",
  },
  {
    icon: Map,
    title: "Plan your\nRoute",
  },
  {
    icon: Plane,
    title: "Enjoy your\nTravel",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function BuildYourTourSection() {
  return (
    <section className="bg-[#F8F5F0] py-20 lg:py-[120px]">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-0">
        <div className="text-center max-w-[800px] mx-auto mb-16">
          <span className="text-sm tracking-[3px] text-[#2D5A4A] uppercase">Plan Your Trip</span>
          <h2 className="font-display text-3xl md:text-[44px] leading-tight text-foreground mt-4 mb-5">
            Build your own tour
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Planning your own trip is all part of the fun. Follow these simple steps to help you plan your Mongolian vacation of a lifetime.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-6"
        >
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div key={index} variants={itemVariants} className="flex items-center gap-4 md:gap-2">
                <div className="flex flex-col items-center gap-4 w-[150px]">
                  <motion.div
                    className="w-20 h-20 rounded-full border-2 border-[#2D5A4A] flex items-center justify-center text-[#2D5A4A]"
                    whileHover={{
                      scale: 1.15,
                      rotate: 5,
                      backgroundColor: "#2D5A4A",
                      color: "#ffffff",
                      borderColor: "#2D5A4A",
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  >
                    <motion.div
                      animate={{ y: [0, -4, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
                    >
                      <Icon size={34} strokeWidth={1.4} />
                    </motion.div>
                  </motion.div>
                  <p className="text-sm font-medium text-center whitespace-pre-line leading-tight text-foreground">
                    {step.title}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <span className="hidden md:block text-[#C9A227] text-xl">→</span>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
