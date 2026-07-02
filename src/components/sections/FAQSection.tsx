"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const faqs = [
  {
    question: "What is the best time to visit Mongolia?",
    answer: "The best time to visit Mongolia is from June to September when the weather is mild and most festivals take place. Summer offers green landscapes and the famous Naadam Festival.",
  },
  {
    question: "Do I need a visa to travel to Mongolia?",
    answer: "Many nationalities can visit visa-free for up to 30–90 days. Check with your local Mongolian embassy for current requirements based on your passport.",
  },
  {
    question: "What should I pack for a tour?",
    answer: "Pack layers, comfortable walking shoes, sunscreen, a hat, and a reusable water bottle. We provide a detailed packing list after booking.",
  },
  {
    question: "Are the tours suitable for families?",
    answer: "Yes, we offer family-friendly itineraries with flexible pacing and activities suitable for children of all ages.",
  },
  {
    question: "Can I customize my itinerary?",
    answer: "Absolutely. We specialize in tailor-made tours designed around your interests, dates, and budget.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-white py-20 lg:py-[140px]">
      <div className="mx-auto max-w-[900px] px-6 lg:px-0">
        <SectionHeader
          label="FAQ"
          title="Common Questions"
        />

        <div className="mt-14 flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="rounded-xl bg-[#F8F6F1] border border-border overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-display text-lg text-foreground pr-4">{faq.question}</span>
                  {isOpen ? (
                    <Minus size={22} className="text-primary-dark shrink-0" />
                  ) : (
                    <Plus size={22} className="text-primary-dark shrink-0" />
                  )}
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <p className="px-6 pb-6 text-[15px] text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
