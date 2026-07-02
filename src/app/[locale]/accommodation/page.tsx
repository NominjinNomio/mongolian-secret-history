"use client";

import { motion } from "framer-motion";
import InnerPageLayout from "@/components/layout/InnerPageLayout";
import PageHero from "@/components/sections/PageHero";
import Button from "@/components/ui/Button";
import Image from "@/components/common/Image";
import { useTranslations } from "next-intl";

const roomKeys = [
  { title: "hotelRooms", desc: "hotelRoomsDesc", image: "tour-placeholder.jpg" },
  { title: "traditionalGers", desc: "traditionalGersDesc", image: "tour-placeholder.jpg" },
];

const facilityKeys = [
  "restaurant",
  "library",
  "conference",
  "riding",
  "archery",
  "sauna",
  "karaoke",
  "sports",
];

const capacityKeys = [
  { value: "16", label: "hotelBeds" },
  { value: "53", label: "gerBeds" },
  { value: "69", label: "totalCapacity" },
];

export default function AccommodationPage() {
  const t = useTranslations("accommodation");

  return (
    <InnerPageLayout>
      <PageHero
        label={t("heroLabel")}
        title={t("heroTitle")}
        subtitle={t("heroSubtitle")}
      />

      <section className="bg-[#F8F5F0] py-20 lg:pt-[80px] lg:pb-[40px]">
        <div className="mx-auto max-w-[900px] px-6 lg:px-0 text-center">
          <p className="text-lg leading-[1.7] text-muted-foreground">{t("intro")}</p>
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
              <span className="text-sm tracking-[3px] text-primary-dark uppercase">{t("locationLabel")}</span>
              <h2 className="font-display text-3xl md:text-[40px] leading-[1.15]">{t("locationTitle")}</h2>
              <p className="text-base leading-[1.7] text-muted-foreground">{t("locationDesc")}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative w-full max-w-[560px] aspect-[4/3] rounded-3xl overflow-hidden"
            >
              <Image src="about-nomads.jpg" alt={t("locationTitle")} fill className="object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-[#F8F5F0] py-20 lg:py-[120px]">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-0">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-[44px]">{t("roomsTitle")}</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {roomKeys.map((room) => (
              <motion.div
                key={room.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="rounded-[20px] bg-white p-8 text-center"
              >
                <div className="relative aspect-[3/2] rounded-2xl overflow-hidden mb-6">
                  <Image src={room.image} alt={t(room.title)} fill className="object-cover" />
                </div>
                <h3 className="font-display text-[28px] text-foreground">{t(room.title)}</h3>
                <p className="text-[15px] text-muted-foreground mt-3 leading-relaxed max-w-[500px] mx-auto">{t(room.desc)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-[120px]">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-0">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-[44px]">{t("facilitiesTitle")}</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilityKeys.map((facility) => (
              <motion.div
                key={facility}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="rounded-2xl bg-[#F8F6F1] p-7"
              >
                <span className="text-2xl text-accent">◆</span>
                <h3 className="font-display text-[20px] text-foreground mt-3">{t(facility)}</h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{t(`${facility}Desc`)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary-dark py-16 lg:py-20">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-0">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
            {capacityKeys.map((item) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="flex flex-col gap-2"
              >
                <span className="font-display text-[56px] text-accent">{item.value}</span>
                <span className="text-white/80">{t(item.label)}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F8F5F0] py-12 lg:py-14">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-0">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-[700px] text-center md:text-left">
              <h2 className="font-display text-[28px] text-foreground">{t("bookStay")}</h2>
              <p className="text-muted-foreground mt-2">{t("bookStayDesc")}</p>
            </div>
            <Button href="/book-online" variant="primary">
              {t("checkAvailability")}
            </Button>
          </div>
        </div>
      </section>
    </InnerPageLayout>
  );
}
