"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import InnerPageLayout from "@/components/layout/InnerPageLayout";
import PageHero from "@/components/sections/PageHero";
import Button from "@/components/ui/Button";
import Image from "@/components/common/Image";
import { useTranslations } from "next-intl";

interface TourData {
  title: string;
  subtitle: string;
  image: string;
  overviewTitle: string;
  overview: string[];
  duration: string;
  groupSize: string;
  price: string;
  season: string;
  included: string[];
  excluded: string[];
  itinerary: { day: number; title: string; desc: string }[];
  gallery: string[];
}

const tours: Record<string, TourData> = {
  "gobi-desert-adventure": {
    title: "Gobi Desert Adventure",
    subtitle: "Explore the dramatic dunes, canyons, and ancient sites of the Gobi",
    image: "tour-placeholder.jpg",
    overviewTitle: "A Desert Like No Other",
    overview: [
      "The Gobi Desert is one of the world's great wilderness areas, covering much of southern Mongolia. Despite its name, the Gobi is not just sand: it is a vast region of rocky plains, towering dunes, hidden canyons, and prehistoric sites.",
      "This eight-day adventure takes you deep into the desert to experience camel treks, dinosaur fossils, flaming cliffs, and the famous Khongoryn Els singing dunes. You will stay in ger camps beneath some of the clearest night skies on Earth.",
    ],
    duration: "8 Days / 7 Nights",
    groupSize: "2–10 Travelers",
    price: "From $1,100",
    season: "May–September",
    included: [
      "All accommodation (hotels & ger camps)",
      "All meals during the tour",
      "English-speaking guide",
      "4x4 vehicle with driver",
      "Camel riding activities",
      "All entrance fees",
      "Airport transfers",
    ],
    excluded: [
      "International flights",
      "Travel insurance",
      "Visa fees",
      "Personal expenses",
      "Alcoholic beverages",
      "Optional tips",
    ],
    itinerary: [
      { day: 1, title: "Arrival in Ulaanbaatar", desc: "Meet your guide, rest at the hotel, and enjoy a welcome dinner with a brief trip overview." },
      { day: 2, title: "Flight to Dalanzadgad", desc: "Fly south to the Gobi and visit the local museum before heading to your ger camp." },
      { day: 3, title: "Yolyn Am Canyon", desc: "Hike through the narrow ice canyon and spot wildlife in the surrounding mountains." },
      { day: 4, title: "Khongoryn Els Dunes", desc: "Reach the towering singing sand dunes and ride camels at sunset." },
      { day: 5, title: "Desert Exploration", desc: "Climb the dunes, visit a nomadic family, and experience traditional Gobi hospitality." },
      { day: 6, title: "Bayanzag Flaming Cliffs", desc: "Explore the red sandstone formations famous for dinosaur fossil discoveries." },
      { day: 7, title: "Return to Ulaanbaatar", desc: "Fly back to the capital with time for shopping or a cultural performance." },
      { day: 8, title: "Departure", desc: "Transfer to the airport after breakfast." },
    ],
    gallery: ["gallery-1.jpg", "gallery-2.jpg", "gallery-3.jpg", "gallery-4.jpg", "gallery-5.jpg"],
  },
  "central-mongolia-heritage": {
    title: "Central Mongolia Heritage Tour",
    subtitle: "Ancient monasteries, imperial capitals, and the Orkhon Valley",
    image: "about-nomads.jpg",
    overviewTitle: "Walk Through Mongolian History",
    overview: [
      "Central Mongolia is the historical and spiritual heart of the country. This six-day tour visits Erdene Zuu Monastery, the ancient capital of Kharkhorin, the stunning Orkhon Waterfall, and Tsenkher Hot Springs.",
      "Along the way you will meet nomadic families, learn about Mongolian Buddhism, and ride horses through valleys that have been inhabited for thousands of years.",
    ],
    duration: "6 Days / 5 Nights",
    groupSize: "2–10 Travelers",
    price: "From $950",
    season: "May–September",
    included: [
      "All accommodation (hotels & ger camps)",
      "All meals during the tour",
      "English-speaking guide",
      "4x4 vehicle with driver",
      "Horse riding activities",
      "All entrance fees",
    ],
    excluded: [
      "International flights",
      "Travel insurance",
      "Visa fees",
      "Personal expenses",
      "Alcoholic beverages",
      "Optional tips",
    ],
    itinerary: [
      { day: 1, title: "Ulaanbaatar to Kharkhorin", desc: "Drive to the ancient capital and explore Erdene Zuu Monastery." },
      { day: 2, title: "Orkhon Valley", desc: "Visit the Ulaan Tsutgalan waterfall and enjoy a scenic hike." },
      { day: 3, title: "Tsenkher Hot Springs", desc: "Relax in natural hot springs and visit a local herder family." },
      { day: 4, title: "Nomadic Experience", desc: "Spend the day with a nomadic family, helping with daily tasks and learning traditions." },
      { day: 5, title: "Khustai National Park", desc: "Search for wild Takhi horses and enjoy your final ger camp evening." },
      { day: 6, title: "Return to Ulaanbaatar", desc: "Drive back to the capital with stops for photos along the way." },
    ],
    gallery: ["gallery-2.jpg", "gallery-3.jpg", "gallery-4.jpg", "gallery-5.jpg", "gallery-1.jpg"],
  },
  "khustai-terelj": {
    title: "Khustai & Terelj National Parks",
    subtitle: "Wild horses, granite mountains, and quick escape from the city",
    image: "culture-nomads.jpg",
    overviewTitle: "Nature at Ulaanbaatar's Doorstep",
    overview: [
      "This short four-day tour is perfect for travelers with limited time. Visit Khustai National Park to see the world's last wild horses, then explore Gorkhi-Terelj National Park with its dramatic rock formations and traditional ger camps.",
      "The parks offer easy hiking, horseback riding, and cultural encounters without long driving days.",
    ],
    duration: "4 Days / 3 Nights",
    groupSize: "2–8 Travelers",
    price: "From $700",
    season: "May–September",
    included: [
      "All accommodation (hotels & ger camps)",
      "All meals during the tour",
      "English-speaking guide",
      "Private vehicle",
      "Park entrance fees",
      "Horse riding",
    ],
    excluded: [
      "International flights",
      "Travel insurance",
      "Visa fees",
      "Personal expenses",
      "Alcoholic beverages",
      "Optional tips",
    ],
    itinerary: [
      { day: 1, title: "Ulaanbaatar to Khustai", desc: "Drive to Khustai National Park and search for wild Takhi horses." },
      { day: 2, title: "Terelj National Park", desc: "Travel to Terelj, visit Turtle Rock, and enjoy a guided hike." },
      { day: 3, title: "Nomadic Family & Horse Riding", desc: "Ride horses through the park and visit a herder family for lunch." },
      { day: 4, title: "Return to Ulaanbaatar", desc: "Return to the capital with a stop at the giant Genghis Khan statue." },
    ],
    gallery: ["gallery-3.jpg", "gallery-4.jpg", "gallery-5.jpg", "gallery-1.jpg", "gallery-2.jpg"],
  },
  "nomadic-lifestyle": {
    title: "Nomadic Lifestyle Experience",
    subtitle: "Live with herder families and discover authentic Mongolia",
    image: "about-nomads.jpg",
    overviewTitle: "Step Into a Living Tradition",
    overview: [
      "This five-day immersive tour offers a rare chance to live alongside Mongolian herder families. Help with daily chores, learn to make dairy products, sleep in gers, and experience hospitality that has defined the steppe for centuries.",
      "There are no hotels on this trip: each night is spent with a different nomadic family, giving you a deep and personal connection to Mongolian culture.",
    ],
    duration: "5 Days / 4 Nights",
    groupSize: "2–6 Travelers",
    price: "From $850",
    season: "May–September",
    included: [
      "All accommodation in family gers",
      "All meals with host families",
      "English-speaking guide",
      "Private vehicle",
      "Horse riding",
      "Cultural activities",
    ],
    excluded: [
      "International flights",
      "Travel insurance",
      "Visa fees",
      "Personal expenses",
      "Alcoholic beverages",
      "Optional tips",
    ],
    itinerary: [
      { day: 1, title: "Arrival and First Family", desc: "Drive to the steppe and meet your first host family. Help set up camp and share dinner." },
      { day: 2, title: "Daily Herder Life", desc: "Milk animals, make yogurt and cheese, and learn about seasonal migration." },
      { day: 3, title: "Horse Trek to Next Family", desc: "Ride horses across the grassland to a second host family." },
      { day: 4, title: "Traditions and Crafts", desc: "Learn traditional games, try Mongolian archery, and listen to folk stories." },
      { day: 5, title: "Return to Ulaanbaatar", desc: "Say goodbye to your hosts and drive back to the capital." },
    ],
    gallery: ["gallery-4.jpg", "gallery-5.jpg", "gallery-1.jpg", "gallery-2.jpg", "gallery-3.jpg"],
  },
  "highlights-of-mongolia": {
    title: "10-Day Highlights of Mongolia",
    subtitle: "An unforgettable journey through Mongolia's most iconic landscapes and nomadic traditions",
    image: "tour-placeholder.jpg",
    overviewTitle: "Experience the Best of Mongolia",
    overview: [
      "This carefully crafted 10-day tour takes you from the rolling steppes of central Mongolia to the dramatic dunes of the Gobi Desert. You will stay in traditional ger camps, visit ancient monasteries, meet nomadic families, and witness some of the most spectacular landscapes on Earth.",
      "Perfect for first-time visitors and returning travelers alike, this journey balances adventure, culture, and comfort.",
    ],
    duration: "10 Days / 9 Nights",
    groupSize: "2–12 Travelers",
    price: "From $1,500",
    season: "May–September",
    included: [
      "All accommodation (hotels & ger camps)",
      "All meals during the tour",
      "English-speaking guide",
      "4x4 vehicle with driver",
      "Domestic flight (Gobi–Ulaanbaatar)",
      "All entrance fees",
      "Camel and horse riding activities",
    ],
    excluded: [
      "International flights",
      "Travel insurance",
      "Visa fees",
      "Personal expenses",
      "Alcoholic beverages",
      "Optional tips",
    ],
    itinerary: [
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
    ],
    gallery: ["gallery-1.jpg", "gallery-2.jpg", "gallery-3.jpg", "gallery-4.jpg", "gallery-5.jpg"],
  },
};

const baseIncluded = [
  "All accommodation (hotels & ger camps)",
  "All meals during the tour",
  "English-speaking guide",
  "4x4 vehicle with driver",
  "All entrance fees",
];

const baseExcluded = [
  "International flights",
  "Travel insurance",
  "Visa fees",
  "Personal expenses",
  "Alcoholic beverages",
  "Optional tips",
];

export default function TourDetailPage() {
  const params = useParams();
  const locale = (params.locale as string) || "en";
  const t = useTranslations("tourDetail");
  const tc = useTranslations("common");
  const slug = (params.slug as string) || "highlights-of-mongolia";
  const tour = tours[slug] || tours["highlights-of-mongolia"];

  const quickInfo = [
    { label: t("duration"), value: tour.duration },
    { label: t("groupSize"), value: tour.groupSize },
    { label: t("price"), value: tour.price },
    { label: t("bestSeason"), value: tour.season },
  ];

  const included = tour.included.length ? tour.included : baseIncluded;
  const excluded = tour.excluded.length ? tour.excluded : baseExcluded;

  return (
    <InnerPageLayout>
      <PageHero label="Tour Details" title={tour.title} subtitle={tour.subtitle} />

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
              <Image src={tour.image} alt={tour.title} fill className="object-cover" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col gap-5 max-w-[520px]"
            >
              <span className="text-sm tracking-[3px] text-primary-dark uppercase">{t("overviewLabel")}</span>
              <h2 className="font-display text-3xl md:text-[40px] leading-[1.15]">{tour.overviewTitle}</h2>
              {tour.overview.map((paragraph, idx) => (
                <p key={idx} className="text-base leading-[1.7] text-muted-foreground">
                  {paragraph}
                </p>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-[120px]">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-0">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-[44px]">{t("atAGlance")}</h2>
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
              <h3 className="font-display text-[28px] text-foreground mb-6">{tc("whatIsIncluded")}</h3>
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
              <h3 className="font-display text-[28px] text-foreground mb-6">{tc("notIncluded")}</h3>
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
            <h2 className="font-display text-3xl md:text-[44px]">{tc("itinerary")}</h2>
          </div>

          <div className="flex flex-col gap-4">
            {tour.itinerary.map((day, index) => (
              <motion.div
                key={day.day}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="rounded-xl bg-[#F8F6F1] p-6 flex flex-col sm:flex-row gap-6"
              >
                <span className="font-display text-2xl text-accent shrink-0">{tc("day", { day: day.day })}</span>
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
              <h2 className="font-display text-[28px] text-white">{tc("readyToBook")}</h2>
              <p className="text-white/80 mt-2">{tc("reserveSpot")}</p>
            </div>
            <Button href={`/${locale}/book-online`} variant="primary">
              {t("bookThisTour")}
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-[#F8F5F0] py-20 lg:py-[120px]">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-0">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-[44px]">{tc("gallery")}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {tour.gallery.slice(0, 3).map((src) => (
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
            {tour.gallery.slice(3).map((src) => (
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
