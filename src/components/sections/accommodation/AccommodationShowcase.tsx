"use client";

import { motion } from "framer-motion";
import Image from "@/components/common/Image";
import Link from "next/link";

const accommodations = [
  {
    index: "01",
    province: "Tuv Province",
    name: "Silk Road resort",
    slug: "secret-of-the-silk-road",
    description:
      "A luxurious resort of 45 gers that lets you feel the unique spirit of the Silk Road.",
    price: "₮250,000",
    unit: "night",
    image: "gallery-1.jpg",
  },
  {
    index: "02",
    province: "Khentii Province",
    name: "Mongolian secret history camp",
    slug: "mongolian-secret-history-camp",
    description:
      "A traditional ger camp located among the golden autumn forests, close to historic sites.",
    price: "₮180,000",
    unit: "night",
    image: "gallery-2.jpg",
  },
  {
    index: "03",
    province: "Ovorkhangai Province",
    name: "Secret of Ongi tourist camp",
    slug: "secret-of-ongi",
    description:
      "A peaceful ger camp where you can rest under a star-filled night sky.",
    price: "₮160,000",
    unit: "night",
    image: "gallery-3.jpg",
  },
  {
    index: "04",
    province: "Restaurant",
    name: "MSH restaurant",
    description:
      "Enjoy traditional and modern Mongolian cuisine in an elegant setting.",
    price: "By reservation",
    unit: "",
    image: "gallery-4.jpg",
  },
];

export default function AccommodationShowcase({ locale }: { locale: string }) {
  return (
    <section className="py-20 lg:py-[140px]">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="mb-16 flex flex-col gap-5 lg:mb-24 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="text-sm tracking-[4px] text-white/50 uppercase">
              Our Spaces
            </span>
            <h2 className="font-display mt-4 max-w-[720px] text-4xl text-white md:text-5xl lg:text-6xl">
              Where Comfort Meets the Steppe
            </h2>
          </div>
          <p className="max-w-[420px] text-base leading-relaxed text-white/60">
            From luxury Silk Road gers to quiet riverside camps, each stay is designed to bring you closer to Mongolia.
          </p>
        </div>

        <div className="flex flex-col gap-24 lg:gap-32">
          {accommodations.map((item, i) => {
            const isEven = i % 2 === 0;
            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-20 ${
                  isEven ? "" : "lg:grid-flow-dense"
                }`}
              >
                <div className={isEven ? "" : "lg:col-start-2"}>
                  <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-white/5">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </div>

                <div className={isEven ? "" : "lg:col-start-1 lg:row-start-1"}>
                  <div className="flex flex-col gap-5">
                    <span className="text-sm tracking-[3px] text-white/40 uppercase">
                      {item.index} · {item.province}
                    </span>
                    <h3 className="font-display text-3xl text-white md:text-4xl lg:text-5xl">
                      {item.name}
                    </h3>
                    <p className="max-w-[520px] text-[17px] leading-[1.8] text-white/60">
                      {item.description}
                    </p>
                    <div className="mt-2 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                      <div className="text-white">
                        <span className="font-display text-3xl md:text-4xl">{item.price}</span>
                        {item.unit && (
                        <span className="ml-2 text-white/50">/ {item.unit}</span>
                        )}
                      </div>
                      <div className="flex items-center gap-3">
                        <Link
                          href={`/${locale}/book-online`}
                          className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-[#0a0a0a] transition-transform hover:scale-105"
                        >
                          Book Now
                        </Link>
                        {item.slug && (
                          <Link
                            href={`/${locale}/accommodation/${item.slug}`}
                            className="inline-flex items-center justify-center rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                          >
                            More
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
