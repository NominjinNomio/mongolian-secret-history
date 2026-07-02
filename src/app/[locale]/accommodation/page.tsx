"use client";

import { motion } from "framer-motion";
import InnerPageLayout from "@/components/layout/InnerPageLayout";
import PageHero from "@/components/sections/PageHero";
import Button from "@/components/ui/Button";
import Image from "@/components/common/Image";

const rooms = [
  {
    title: "Hotel Rooms",
    desc: "Luxury and standard rooms with 16 beds total, modern amenities, and mountain views.",
    image: "tour-placeholder.jpg",
  },
  {
    title: "Traditional Gers",
    desc: "13th-century style pointed-top gers with 53 beds, offering an authentic Mongolian experience.",
    image: "tour-placeholder.jpg",
  },
];

const facilities = [
  { title: "Michid Restaurant", desc: "Mongolian and international dishes in a traditional dining hall." },
  { title: "Yellow Ger Library", desc: "A cozy space to relax, read, and learn about Mongolian history." },
  { title: "Conference Hall", desc: "Equipped venue for meetings, events, and workshops." },
  { title: "Horse & Camel Riding", desc: "Guided rides through the surrounding steppe and hills." },
  { title: "Archery & Activities", desc: "Traditional Mongolian archery and outdoor games." },
  { title: "Sauna & Showers", desc: "Modern facilities to refresh after a day of adventure." },
  { title: "Karaoke Bar", desc: "Evening entertainment and drinks with fellow travelers." },
  { title: "Sports Ground", desc: "Outdoor area for volleyball, basketball, and other activities." },
];

const capacity = [
  { value: "16", label: "Hotel Beds" },
  { value: "53", label: "Ger Beds" },
  { value: "69", label: "Total Capacity" },
];

export default function AccommodationPage() {
  return (
    <InnerPageLayout>
      <PageHero
        label="Stay With Us"
        title="Accommodation"
        subtitle="Comfortable lodging inspired by Mongolian heritage and tradition"
      />

      <section className="bg-[#F8F5F0] py-20 lg:pt-[80px] lg:pb-[40px]">
        <div className="mx-auto max-w-[900px] px-6 lg:px-0 text-center">
          <p className="text-lg leading-[1.7] text-muted-foreground">
            The Mongolian Secret History tourist complex has been operating since November 2005. Open year-round, the complex welcomes travelers in a comfortable natural environment with high-quality services inspired by Mongolian heritage.
          </p>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-[120px]">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-0">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col gap-5 max-w-[520px]"
            >
              <span className="text-sm tracking-[3px] text-primary-dark uppercase">Location</span>
              <h2 className="font-display text-3xl md:text-[40px] leading-[1.15]">Noyon Mountain, Tuv Province</h2>
              <p className="text-base leading-[1.7] text-muted-foreground">
                Located in Jargalant soum, approximately 114 km from Ulaanbaatar on the road to Darkhan. The area sits at about 1500 meters above sea level and is home to abundant wildlife, wildflowers, and medicinal plants.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative w-full max-w-[560px] aspect-[4/3] rounded-3xl overflow-hidden"
            >
              <Image src="about-nomads.jpg" alt="Noyon Mountain location" fill className="object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-[#F8F5F0] py-20 lg:py-[120px]">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-0">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-[44px]">Room Types</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {rooms.map((room) => (
              <motion.div
                key={room.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="rounded-[20px] bg-white p-8 text-center"
              >
                <div className="relative aspect-[3/2] rounded-2xl overflow-hidden mb-6">
                  <Image src={room.image} alt={room.title} fill className="object-cover" />
                </div>
                <h3 className="font-display text-[28px] text-foreground">{room.title}</h3>
                <p className="text-[15px] text-muted-foreground mt-3 leading-relaxed max-w-[500px] mx-auto">{room.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-[120px]">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-0">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-[44px]">Services & Facilities</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilities.map((facility) => (
              <motion.div
                key={facility.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="rounded-2xl bg-[#F8F6F1] p-7"
              >
                <span className="text-2xl text-accent">◆</span>
                <h3 className="font-display text-[20px] text-foreground mt-3">{facility.title}</h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{facility.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary-dark py-16 lg:py-20">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-0">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
            {capacity.map((item) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="flex flex-col gap-2"
              >
                <span className="font-display text-[56px] text-accent">{item.value}</span>
                <span className="text-white/80">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F8F5F0] py-12 lg:py-14">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-0">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-[700px] text-center md:text-left">
              <h2 className="font-display text-[28px] text-foreground">Book Your Stay</h2>
              <p className="text-muted-foreground mt-2">Contact us to check availability and reserve your room or ger at our camp.</p>
            </div>
            <Button href="/book-online" variant="primary">
              Check Availability
            </Button>
          </div>
        </div>
      </section>
    </InnerPageLayout>
  );
}
