"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "The ger camp was beyond expectations. Waking up to the sound of horses and an endless sky is something we will never forget.",
    author: "Sarah & Tom, USA",
  },
  {
    quote: "The team made us feel at home in the middle of the steppe. The food, the beds, the hospitality — all top class.",
    author: "Marie, France",
  },
  {
    quote: "A perfect balance between authentic Mongolian tradition and modern comfort. Highly recommended.",
    author: "David, UK",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function AccommodationTestimonials() {
  return (
    <section className="bg-[#0f0f0f] py-20 lg:py-[140px]">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="mb-14 max-w-[720px]">
          <span className="text-sm tracking-[4px] text-white/50 uppercase">
            Guest Stories
          </span>
          <h2 className="font-display mt-4 text-4xl text-white md:text-5xl lg:text-6xl">
            What Our Guests Say
          </h2>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.author}
              variants={item}
              className="flex flex-col gap-8 rounded-[20px] border border-white/10 bg-white/[0.03] p-9"
            >
              <blockquote className="font-display text-lg leading-relaxed text-white/90 lg:text-xl">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <span className="text-sm text-white/50">{testimonial.author}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
