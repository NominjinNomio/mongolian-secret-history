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
    <section className="px-6 pb-12">
      <div className="mx-auto max-w-[1400px]">
        {accommodations.map((item, i) => {
          const isEven = i % 2 === 0;
          return (
            <motion.article
              key={item.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="grid gap-10 border-t border-border py-16 lg:grid-cols-2 lg:gap-20 lg:py-24"
            >
              <div className={isEven ? "" : "lg:order-2"}>
                <div className="group relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-muted border border-border">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>

              <div className={`flex flex-col justify-center ${isEven ? "lg:pl-8" : "lg:order-1 lg:pr-8"}`}>
                <span className="text-sm tracking-[3px] text-muted-foreground/60 uppercase"
                >
                  {item.index} · {item.province}
                </span>
                <h2 className="font-display mt-5 text-4xl leading-[1.1] text-foreground md:text-5xl lg:text-6xl"
                >
                  {item.name}
                </h2>
                <p className="mt-6 max-w-[480px] text-[17px] leading-[1.8] text-muted-foreground"
                >
                  {item.description}
                </p>
                <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center"
                >
                  <div className="text-foreground">
                    <span className="font-display text-3xl md:text-4xl">{item.price}</span>
                    {item.unit && (
                      <span className="ml-2 text-muted-foreground">/ {item.unit}</span>
                    )}
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Link
                    href={item.slug ? `/${locale}/accommodation/${item.slug}` : `/${locale}/book-online`}
                    className="group inline-flex items-center gap-2 text-base font-semibold text-foreground underline decoration-foreground/30 underline-offset-8 transition-colors hover:decoration-foreground"
                  >
                    View Stay
                    <svg
                      className="h-4 w-4 transition-transform group-hover:translate-x-1"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3 8H13M13 8L9 4M13 8L9 12"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                  <Link
                    href={`/${locale}/book-online`}
                    className="inline-flex items-center justify-center rounded-full border border-border px-7 py-3.5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
