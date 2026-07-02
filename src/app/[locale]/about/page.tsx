"use client";

import InnerPageLayout from "@/components/layout/InnerPageLayout";
import PageHero from "@/components/sections/PageHero";
import { motion } from "framer-motion";
import Image from "@/components/common/Image";

const regions = [
  { name: "Ulaanbaatar", provinces: "Ulaanbaatar city" },
  { name: "Central Mongolia", provinces: "Arkhangai, Bayankhongor, Uvurkhangai, Dundgovi, Tuv, Govisumber" },
  { name: "Eastern Mongolia", provinces: "Dornod, Khentii, Sukhbaatar" },
  { name: "Northern Mongolia", provinces: "Khuvsgul, Bulgan, Selenge, Orkhon, Darkhan-Uul" },
  { name: "Southern Mongolia", provinces: "Umnugovi, Dornogovi" },
  { name: "Western Mongolia", provinces: "Bayan-Ulgii, Khovd, Uvs, Zavkhan, Govi-Altai" },
];

const mapLabels = [
  { name: "Ulaanbaatar", top: "38.9%", left: "54.3%" },
  { name: "Central Mongolia", top: "48.1%", left: "51.4%" },
  { name: "Eastern Mongolia", top: "44.4%", left: "74.3%" },
  { name: "Northern Mongolia", top: "27.8%", left: "57.1%" },
  { name: "Southern Mongolia", top: "68.5%", left: "48.6%" },
  { name: "Western Mongolia", top: "38.9%", left: "25.7%" },
];

const climate = [
  { season: "Spring", months: "Mar–May", desc: "Mild but windy. Landscapes begin to green. Good for photography and fewer crowds." },
  { season: "Summer", months: "Jun–Aug", desc: "Warm days, cool nights. Peak travel season with Naadam festivals and green pastures." },
  { season: "Autumn", months: "Sep–Nov", desc: "Clear skies, golden landscapes. Ideal for trekking and wildlife watching." },
  { season: "Winter", months: "Dec–Feb", desc: "Bitterly cold with temperatures below -30°C. Experience ice festivals and winter nomadic life." },
];

export default function AboutPage() {
  return (
    <InnerPageLayout>
      <PageHero
        label="Discover"
        title="About Mongolia"
        subtitle="A land of endless horizons, ancient traditions, and breathtaking natural wonders"
      />

      <section className="bg-[#F8F5F0] py-20 lg:py-[120px]">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-0">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative w-full max-w-[560px] aspect-[4/3] rounded-3xl overflow-hidden"
            >
              <Image src="about-nomads.jpg" alt="Mongolian nomads" fill className="object-cover" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col gap-5 max-w-[520px]"
            >
              <span className="text-sm tracking-[3px] text-primary-dark uppercase">The Country</span>
              <h2 className="font-display text-3xl md:text-[40px] leading-[1.15]">A Land Like No Other</h2>
              <p className="text-base leading-[1.7] text-muted-foreground">
                Mongolia is a vast country in East Asia, bordered by Russia to the north and China to the south. Despite being the 18th largest country in the world, it has one of the lowest population densities, making it a paradise for travelers seeking solitude, wilderness, and authentic cultural encounters.
              </p>
              <p className="text-base leading-[1.7] text-muted-foreground">
                From the endless steppe to the dramatic Gobi Desert, Mongolia offers landscapes that have remained largely unchanged for centuries. It is one of the last places on Earth where nomadic traditions are still a living, breathing way of life.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-[120px]">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-0">
          <div className="text-center mb-12">
            <span className="text-sm tracking-[3px] text-primary-dark uppercase">Travel Destinations</span>
            <h2 className="font-display text-3xl md:text-[44px] mt-4">Regions & Provinces</h2>
          </div>

          <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative w-full lg:w-[700px] aspect-[700/540] rounded-[20px] overflow-hidden shrink-0"
            >
              <Image src="mongolia-map-bg.jpg" alt="Mongolia destinations map" fill className="object-cover" />
              <div className="absolute inset-0 bg-[#0f1e32]/55" />
              {mapLabels.map((label) => (
                <div
                  key={label.name}
                  className="absolute flex items-center gap-2"
                  style={{ top: label.top, left: label.left }}
                >
                  <span className="text-white text-xs">★</span>
                  <span className="text-white text-sm font-medium whitespace-nowrap">{label.name}</span>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col gap-5 w-full lg:w-[400px]"
            >
              {regions.map((region) => (
                <div key={region.name} className="rounded-xl bg-[#F8F6F1] p-4">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-primary-dark text-sm">★</span>
                    <h3 className="font-display text-lg text-foreground">{region.name}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{region.provinces}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-[#F8F5F0] py-20 lg:py-[120px]">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-0">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative w-full max-w-[560px] aspect-[4/3] rounded-3xl overflow-hidden"
            >
              <Image src="culture-nomads.jpg" alt="Mongolian culture" fill className="object-cover" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col gap-5 max-w-[520px]"
            >
              <span className="text-sm tracking-[3px] text-primary-dark uppercase">Culture</span>
              <h2 className="font-display text-3xl md:text-[40px] leading-[1.15]">Nomadic Traditions \u0026 Hospitality</h2>
              <p className="text-base leading-[1.7] text-muted-foreground">
                Mongolian culture is deeply rooted in nomadic pastoralism. Families live in traditional gers (yurts), move seasonally with their herds, and maintain customs passed down through generations. Hospitality is sacred — visitors are traditionally offered tea, dairy products, and sometimes airag (fermented mare&apos;s milk).
              </p>
              <p className="text-base leading-[1.7] text-muted-foreground">
                Key cultural highlights include the Naadam Festival (wrestling, horse racing, archery), throat singing, eagle hunting in the west, and the enduring legacy of Chinggis Khaan.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-[120px]">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-0">
          <div className="text-center mb-12">
            <span className="text-sm tracking-[3px] text-primary-dark uppercase">Climate</span>
            <h2 className="font-display text-3xl md:text-[44px] mt-4">Extreme Seasons \u0026 Best Time to Visit</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {climate.map((c) => (
              <motion.div
                key={c.season}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="rounded-2xl bg-[#F8F6F1] p-7"
              >
                <h3 className="font-display text-2xl text-primary-dark">{c.season}</h3>
                <span className="text-sm text-accent">{c.months}</span>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </InnerPageLayout>
  );
}
