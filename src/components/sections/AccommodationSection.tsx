"use client";

import { motion } from "framer-motion";
import Image from "@/components/common/Image";
import Link from "next/link";
import AccommodationMarquee from "@/components/sections/accommodation/AccommodationMarquee";
import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";

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
];

export default function AccommodationSection() {
  const locale = useLocale();
  const t = useTranslations("home");

  return (
    <section className="overflow-hidden bg-white py-20 lg:py-[140px]">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-0">
        <div className="mb-14 flex flex-col items-start justify-between gap-6 lg:mb-20 lg:flex-row lg:items-end">
          <div>
            <span className="text-sm tracking-[4px] text-muted-foreground uppercase">
              Stay With Us
            </span>
            <h2 className="font-display mt-4 text-4xl text-foreground md:text-5xl lg:text-6xl">
              Accommodation
            </h2>
          </div>
          <p className="max-w-[520px] text-[17px] leading-[1.8] text-muted-foreground">
            Comfortable lodging inspired by Mongolian heritage and tradition, from Silk Road gers to riverside camps.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {accommodations.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group flex flex-col gap-5"
            >
              <Link href={`/${locale}/accommodation/${item.slug}`} className="block">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-[#E8E4DC]">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </Link>
              <div className="flex flex-col gap-2">
                <span className="text-sm tracking-[2px] text-muted-foreground uppercase">
                  {item.province}
                </span>
                <Link href={`/${locale}/accommodation/${item.slug}`}>
                  <h3 className="font-display text-2xl text-foreground transition-colors hover:text-[#1A2B4A]">
                    {item.name}
                  </h3>
                </Link>
                <p className="text-[15px] leading-[1.7] text-muted-foreground">
                  {item.description}
                </p>
                <div className="mt-2 flex items-center justify-between">
                  <div className="text-foreground">
                    <span className="font-display text-2xl">{item.price}</span>
                    <span className="ml-1 text-muted-foreground">/ {item.unit}</span>
                  </div>
                  <Link
                    href={`/${locale}/book-online`}
                    className="inline-flex items-center justify-center rounded-full bg-[#1A2B4A] px-5 py-2.5 text-sm font-medium text-white transition-transform hover:scale-105"
                  >
                    Book
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-20">
        <AccommodationMarquee />
      </div>
    </section>
  );
}
