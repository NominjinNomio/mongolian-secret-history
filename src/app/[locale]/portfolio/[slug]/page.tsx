"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import InnerPageLayout from "@/components/layout/InnerPageLayout";
import PageHero from "@/components/sections/PageHero";
import Button from "@/components/ui/Button";
import Image from "@/components/common/Image";

const quickInfo = [
  { label: "Duration", value: "10 Days / 9 Nights" },
  { label: "Group Size", value: "2–12 Travelers" },
  { label: "Price", value: "From $1,500" },
  { label: "Best Season", value: "May–September" },
];

const included = [
  "All accommodation (hotels & ger camps)",
  "All meals during the tour",
  "English-speaking guide",
  "4x4 vehicle with driver",
  "Domestic flight (Gobi–Ulaanbaatar)",
  "All entrance fees",
  "Camel and horse riding activities",
];

const excluded = [
  "International flights",
  "Travel insurance",
  "Visa fees",
  "Personal expenses",
  "Alcoholic beverages",
  "Optional tips",
];

const itinerary = [
  { day: 1, title: "Arrival in Ulaanbaatar", desc: "Meet your guide and explore Mongolia's capital, including Sukhbaatar Square and the National Museum." },
  { day: 2, title: "Khustai National Park", desc: "Drive to Khustai to see wild Takhi horses and enjoy your first ger camp experience." },
  { day: 3, title: "Erdene Zuu & Kharkhorin", desc: "Visit the ancient capital of the Mongol Empire and Erdene Zuu Monastery." },
  { day: 4, title: "Orkhon Valley Waterfall", desc: "Trek to the beautiful Ulaan Tsutgalan waterfall in the Orkhon Valley." },
  { day: 5, title: "Tsenkher Hot Springs", desc: "Relax in natural hot springs and visit a local nomadic family." },
  { day: 6, title: "Fly to the Gobi Desert", desc: "Take a domestic flight to the Gobi and explore the iconic Flaming Cliffs." },
  { day: 7, title: "Khongoryn Els Dunes", desc: "Ride camels at the towering singing sand dunes." },
  { day: 8, title: "Yolyn Am Canyon", desc: "Hike through the narrow ice canyon in Gobi Gurvan Saikhan National Park." },
  { day: 9, title: "Return to Ulaanbaatar", desc: "Fly back to the capital and enjoy a traditional folklore performance." },
  { day: 10, title: "Departure", desc: "Transfer to the airport with unforgettable memories of Mongolia." },
];

const gallery = [
  "gallery-1.jpg",
  "gallery-2.jpg",
  "gallery-3.jpg",
  "gallery-4.jpg",
  "gallery-5.jpg",
];

export default function TourDetailPage() {
  const params = useParams();
  const locale = (params.locale as string) || "mn";

  return (
    <InnerPageLayout>
      <PageHero
        label="Tour Details"
        title="10-Day Highlights of Mongolia"
        subtitle="An unforgettable journey through Mongolia's most iconic landscapes and nomadic traditions"
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
              <Image src="tour-placeholder.jpg" alt="10-Day Highlights of Mongolia" fill className="object-cover" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col gap-5 max-w-[520px]"
            >
              <span className="text-sm tracking-[3px] text-primary-dark uppercase">Overview</span>
              <h2 className="font-display text-3xl md:text-[40px] leading-[1.15]">Experience the Best of Mongolia</h2>
              <p className="text-base leading-[1.7] text-muted-foreground">
                This carefully crafted 10-day tour takes you from the rolling steppes of central Mongolia to the dramatic dunes of the Gobi Desert. You&apos;ll stay in traditional ger camps, visit ancient monasteries, meet nomadic families, and witness some of the most spectacular landscapes on Earth.
              </p>
              <p className="text-base leading-[1.7] text-muted-foreground">
                Perfect for first-time visitors and returning travelers alike, this journey balances adventure, culture, and comfort.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-[120px]">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-0">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-[44px]">At a Glance</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickInfo.map((info) => (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="rounded-2xl bg-[#F8F6F1] p-7 text-center"
              >
                <p className="text-sm text-muted-foreground">{info.label}</p>
                <p className="font-display text-[22px] text-primary-dark mt-2">{info.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F8F5F0] py-20 lg:py-[120px]">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="rounded-[20px] bg-white p-10"
            >
              <h3 className="font-display text-[28px] text-foreground mb-6">What&apos;s Included</h3>
              <ul className="flex flex-col gap-4">
                {included.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[15px] text-muted-foreground">
                    <span className="text-primary-dark mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="rounded-[20px] bg-white p-10"
            >
              <h3 className="font-display text-[28px] text-foreground mb-6">Not Included</h3>
              <ul className="flex flex-col gap-4">
                {excluded.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[15px] text-muted-foreground">
                    <span className="text-[#B42318] mt-0.5">×</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-[120px]">
        <div className="mx-auto max-w-[900px] px-6 lg:px-0">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-[44px]">Day-by-Day Itinerary</h2>
          </div>

          <div className="flex flex-col gap-4">
            {itinerary.map((day, index) => (
              <motion.div
                key={day.day}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="rounded-xl bg-[#F8F6F1] p-6 flex flex-col sm:flex-row gap-6"
              >
                <span className="font-display text-2xl text-accent shrink-0">Day {day.day}</span>
                <div>
                  <h3 className="font-display text-xl text-foreground">{day.title}</h3>
                  <p className="text-[15px] text-muted-foreground mt-1 leading-relaxed">{day.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary-dark py-12 lg:py-14">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-0">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-[700px] text-center md:text-left">
              <h2 className="font-display text-[28px] text-white">Ready to Book This Tour?</h2>
              <p className="text-white/80 mt-2">Reserve your spot today. Our team will confirm availability and send you a detailed itinerary.</p>
            </div>
            <Button href={`/${locale}/book-online`} variant="primary">
              Book This Tour
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-[#F8F5F0] py-20 lg:py-[120px]">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-0">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-[44px]">Tour Gallery</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {gallery.slice(0, 3).map((src) => (
              <motion.div
                key={src}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="relative aspect-[3/2] rounded-xl overflow-hidden"
              >
                <Image src={src} alt="Tour gallery" fill className="object-cover" />
              </motion.div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            {gallery.slice(3).map((src) => (
              <motion.div
                key={src}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="relative aspect-[16/9] rounded-xl overflow-hidden"
              >
                <Image src={src} alt="Tour gallery" fill className="object-cover" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </InnerPageLayout>
  );
}
