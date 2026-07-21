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
  "naadam-festival-tour": {
    title: "Naadam Festival Tour",
    subtitle: "Witness Mongolia's biggest traditional sports festival",
    image: "culture-nomads.jpg",
    overviewTitle: "The Three Games of Men",
    overview: [
      "Naadam is Mongolia's most famous festival, celebrating the traditional sports of wrestling, horse racing, and archery. This seven-day tour combines the excitement of the Ulaanbaatar opening ceremony with excursions to the open steppe.",
      "You will also explore nearby national parks, meet nomadic families, and experience the festive atmosphere that defines Mongolian summer.",
    ],
    duration: "7 Days / 6 Nights",
    groupSize: "2–12 Travelers",
    price: "From $1,250",
    season: "July",
    included: [
      "All accommodation (hotels & ger camps)",
      "All meals during the tour",
      "English-speaking guide",
      "4x4 vehicle with driver",
      "Naadam event tickets",
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
      { day: 1, title: "Arrival in Ulaanbaatar", desc: "Meet your guide and prepare for Naadam festivities." },
      { day: 2, title: "Naadam Opening Ceremony", desc: "Attend the spectacular opening ceremony and first rounds of wrestling." },
      { day: 3, title: "Archery & Horse Racing", desc: "Watch traditional archery and long-distance horse racing outside the city." },
      { day: 4, title: "Terelj National Park", desc: "Visit Turtle Rock and Aryabal Temple in Gorkhi-Terelj." },
      { day: 5, title: "Khustai National Park", desc: "Search for wild Takhi horses and enjoy a ger camp evening." },
      { day: 6, title: "City Highlights", desc: "Explore Gandantegchinlen Monastery and the National Museum." },
      { day: 7, title: "Departure", desc: "Transfer to the airport after breakfast." },
    ],
    gallery: ["gallery-2.jpg", "gallery-3.jpg", "gallery-4.jpg", "gallery-5.jpg", "gallery-1.jpg"],
  },
  "winter-mongolia-expedition": {
    title: "Winter Mongolia Expedition",
    subtitle: "Experience Mongolia's frozen landscapes and winter culture",
    image: "tour-placeholder.jpg",
    overviewTitle: "The Magic of a Mongolian Winter",
    overview: [
      "This nine-day winter expedition takes you across frozen rivers, snow-covered steppe, and glittering lakes. Experience ice festivals, visit nomadic families in their winter camps, and discover a side of Mongolia few travelers see.",
      "Warm ger camps, hearty food, and hot bowls of suutei tsai keep you comfortable as temperatures drop far below zero.",
    ],
    duration: "9 Days / 8 Nights",
    groupSize: "2–8 Travelers",
    price: "From $1,350",
    season: "December–February",
    included: [
      "All accommodation (hotels & heated ger camps)",
      "All meals during the tour",
      "English-speaking guide",
      "4x4 vehicle with driver",
      "Ice festival activities",
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
      { day: 1, title: "Arrival in Ulaanbaatar", desc: "Meet your guide and acclimatize to the cold capital." },
      { day: 2, title: "Elsen Tasarkhai", desc: "Drive to the sand dunes and ride Bactrian camels in the snow." },
      { day: 3, title: "Kharkhorin & Erdene Zuu", desc: "Visit the ancient capital and its historic monastery." },
      { day: 4, title: "Tsetserleg Town", desc: "Stop in the provincial town and continue toward the White Lake." },
      { day: 5, title: "Ice Festival on Khuvsgul", desc: "Join winter games and ice sculptures on the frozen lake." },
      { day: 6, title: "Reindeer Herders Visit", desc: "Meet Dukha reindeer herders near the taiga forest." },
      { day: 7, title: "Lake Khuvsgul", desc: "Walk on the frozen lake and enjoy a traditional meal." },
      { day: 8, title: "Return to Ulaanbaatar", desc: "Fly back to the capital and enjoy a farewell dinner." },
      { day: 9, title: "Departure", desc: "Transfer to the airport." },
    ],
    gallery: ["gallery-3.jpg", "gallery-4.jpg", "gallery-5.jpg", "gallery-1.jpg", "gallery-2.jpg"],
  },
  "altai-horse-trek": {
    title: "Horse Trekking in the Altai",
    subtitle: "Ride through the wild Altai Mountains of western Mongolia",
    image: "gallery-1.jpg",
    overviewTitle: "Mountains, Eagles, and Open Valleys",
    overview: [
      "This twelve-day horse trek explores the remote Altai Mountains, home to Kazakh eagle hunters and snow-capped peaks. Travel by horseback between nomadic camps, cross high mountain passes, and camp beneath stars untouched by light pollution.",
      "Ideal for experienced riders and adventurers seeking one of Mongolia's most rugged and rewarding journeys.",
    ],
    duration: "12 Days / 11 Nights",
    groupSize: "2–6 Travelers",
    price: "From $1,800",
    season: "June–September",
    included: [
      "All accommodation (ger camps & tents)",
      "All meals during the tour",
      "English-speaking guide",
      "Local horse guides",
      "Horse rental",
      "Camping equipment",
      "All entrance fees",
    ],
    excluded: [
      "International flights",
      "Domestic flights",
      "Travel insurance",
      "Visa fees",
      "Personal expenses",
      "Alcoholic beverages",
      "Optional tips",
    ],
    itinerary: [
      { day: 1, title: "Arrival in Ulgii", desc: "Fly to western Mongolia and meet your local team." },
      { day: 2, title: "Eagle Hunter Family", desc: "Visit a Kazakh eagle hunter and learn about the tradition." },
      { day: 3, title: "Start the Horse Trek", desc: "Begin riding into the Altai foothills with pack horses." },
      { day: 4, title: "High Mountain Pass", desc: "Cross a dramatic pass with panoramic mountain views." },
      { day: 5, title: "Remote Valley Camp", desc: "Set up camp in a wild valley far from any settlement." },
      { day: 6, title: "Glacial Lake", desc: "Ride to a turquoise glacial lake and rest by the shore." },
      { day: 7, title: "Rest Day", desc: "Relax at camp, fish, and explore the surrounding peaks." },
      { day: 8, title: "Return Trek", desc: "Begin the return journey through different terrain." },
      { day: 9, title: "Nomadic Family Camp", desc: "Stay with a herder family and share stories." },
      { day: 10, title: "Final Riding Day", desc: "Ride back toward Ulgii with stunning sunset views." },
      { day: 11, title: "Ulgii Town", desc: "Rest, visit the local market, and enjoy a hot shower." },
      { day: 12, title: "Departure", desc: "Fly back to Ulaanbaatar." },
    ],
    gallery: ["gallery-1.jpg", "gallery-2.jpg", "gallery-3.jpg", "gallery-4.jpg", "gallery-5.jpg"],
  },
  "golden-eagle-festival": {
    title: "Golden Eagle Festival Journey",
    subtitle: "Join Mongolia's most iconic eagle hunting celebration",
    image: "gallery-2.jpg",
    overviewTitle: "Eagles, Culture, and Kazakh Tradition",
    overview: [
      "The Golden Eagle Festival brings together Kazakh eagle hunters from across western Mongolia to compete in speed, accuracy, and tradition. This ten-day journey includes festival access, visits to hunter families, and rides through the Altai foothills.",
      "It is one of the most photogenic and culturally rich experiences Mongolia has to offer.",
    ],
    duration: "10 Days / 9 Nights",
    groupSize: "2–10 Travelers",
    price: "From $1,650",
    season: "October",
    included: [
      "All accommodation (hotels & ger camps)",
      "All meals during the tour",
      "English-speaking guide",
      "Local guides and interpreters",
      "Festival entrance fees",
      "Domestic flights",
      "All ground transport",
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
      { day: 1, title: "Arrival in Ulaanbaatar", desc: "Meet your guide and prepare for the journey west." },
      { day: 2, title: "Fly to Ulgii", desc: "Take a domestic flight to Bayan-Ulgii province." },
      { day: 3, title: "Eagle Hunter Camp", desc: "Ride to a hunter's camp and learn about golden eagles." },
      { day: 4, title: "Festival Day 1", desc: "Attend the opening ceremony and eagle calling competition." },
      { day: 5, title: "Festival Day 2", desc: "Watch fox skin dragging and eagle landing competitions." },
      { day: 6, title: "Countryside Ride", desc: "Ride through the mountains surrounding the festival grounds." },
      { day: 7, title: "Second Hunter Family", desc: "Visit another eagle hunter family for dinner." },
      { day: 8, title: "Ulgii Market", desc: "Explore the town, buy handicrafts, and rest." },
      { day: 9, title: "Return to Ulaanbaatar", desc: "Fly back to the capital and enjoy a farewell dinner." },
      { day: 10, title: "Departure", desc: "Transfer to the airport." },
    ],
    gallery: ["gallery-2.jpg", "gallery-3.jpg", "gallery-4.jpg", "gallery-5.jpg", "gallery-1.jpg"],
  },
  "khuvsgul-winter": {
    title: "Khuvsgul Lake Winter Adventure",
    subtitle: "Frozen lake landscapes and northern Mongolian culture",
    image: "gallery-3.jpg",
    overviewTitle: "The Blue Pearl in Winter",
    overview: [
      "Lake Khuvsgul is called the Blue Pearl of Mongolia, and in winter it becomes a vast frozen plain surrounded by snow-covered mountains. This six-day tour combines ice activities with visits to reindeer herders and warm ger hospitality.",
      "Perfect for travelers who want a shorter winter escape with maximum scenery and culture.",
    ],
    duration: "6 Days / 5 Nights",
    groupSize: "2–8 Travelers",
    price: "From $980",
    season: "December–February",
    included: [
      "All accommodation (hotels & heated ger camps)",
      "All meals during the tour",
      "English-speaking guide",
      "4x4 vehicle with driver",
      "Ice activities",
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
      { day: 1, title: "Arrival in Ulaanbaatar", desc: "Meet your guide and prepare for the flight north." },
      { day: 2, title: "Fly to Murun", desc: "Fly to Khuvsgul province and drive to the lake." },
      { day: 3, title: "Lake Khuvsgul Ice", desc: "Walk, slide, and photograph the frozen lake." },
      { day: 4, title: "Reindeer Herders", desc: "Visit Dukha reindeer herders in the northern taiga." },
      { day: 5, title: "Return to Murun", desc: "Drive back to Murun and fly to Ulaanbaatar." },
      { day: 6, title: "Departure", desc: "Transfer to the airport." },
    ],
    gallery: ["gallery-3.jpg", "gallery-4.jpg", "gallery-5.jpg", "gallery-1.jpg", "gallery-2.jpg"],
  },
  "custom-private-tour": {
    title: "Custom Private Mongolia Tour",
    subtitle: "Design your own Mongolia journey with our team",
    image: "gallery-4.jpg",
    overviewTitle: "Your Adventure, Your Way",
    overview: [
      "Tell us your travel dates, interests, and pace, and we will build a private tour just for you. Choose any region of Mongolia, add special activities, and travel with your own guide and vehicle.",
      "Flexible duration and pricing make this the best option for families, photographers, and private groups.",
    ],
    duration: "Flexible",
    groupSize: "Private Group",
    price: "On request",
    season: "Year-round",
    included: [
      "Custom itinerary planning",
      "Private guide and driver",
      "All accommodation as requested",
      "All meals during the tour",
      "All entrance fees",
      "24/7 support",
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
      { day: 1, title: "Consultation", desc: "Share your interests and dates with our travel designers." },
      { day: 2, title: "Itinerary Draft", desc: "Receive a detailed day-by-day plan and quote." },
      { day: 3, title: "Booking Confirmation", desc: "Confirm your tour and make arrangements." },
      { day: 4, title: "Your Journey Begins", desc: "Arrive in Mongolia and start your custom adventure." },
    ],
    gallery: ["gallery-4.jpg", "gallery-5.jpg", "gallery-1.jpg", "gallery-2.jpg", "gallery-3.jpg"],
  },
  "classic-mongolia-discovery": {
    title: "Classic Mongolia Discovery",
    subtitle: "A well-rounded introduction to Mongolia's highlights",
    image: "gallery-5.jpg",
    overviewTitle: "The Essential Mongolia Experience",
    overview: [
      "This eight-day classic tour covers the must-see destinations of central and northern Mongolia. Visit ancient monasteries, sleep in ger camps, meet nomadic families, and enjoy the vast open steppe.",
      "It is the perfect itinerary for first-time visitors who want a balanced mix of culture, nature, and adventure.",
    ],
    duration: "8 Days / 7 Nights",
    groupSize: "2–12 Travelers",
    price: "From $1,150",
    season: "May–September",
    included: [
      "All accommodation (hotels & ger camps)",
      "All meals during the tour",
      "English-speaking guide",
      "4x4 vehicle with driver",
      "Horse riding activities",
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
      { day: 1, title: "Arrival in Ulaanbaatar", desc: "Meet your guide and enjoy a welcome dinner." },
      { day: 2, title: "Khustai National Park", desc: "See wild Takhi horses and stay in a ger camp." },
      { day: 3, title: "Kharkhorin & Erdene Zuu", desc: "Visit the ancient capital and its monastery." },
      { day: 4, title: "Orkhon Waterfall", desc: "Hike to Ulaan Tsutgalan waterfall in the Orkhon Valley." },
      { day: 5, title: "Tsenkher Hot Springs", desc: "Relax in natural hot springs and meet herders." },
      { day: 6, title: "Nomadic Family Day", desc: "Experience daily life with a Mongolian herder family." },
      { day: 7, title: "Return to Ulaanbaatar", desc: "Drive back to the capital with scenic stops." },
      { day: 8, title: "Departure", desc: "Transfer to the airport after breakfast." },
    ],
    gallery: ["gallery-5.jpg", "gallery-1.jpg", "gallery-2.jpg", "gallery-3.jpg", "gallery-4.jpg"],
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

      <section className="bg-background py-20 lg:py-[120px]">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-0">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative w-full max-w-[560px] aspect-[4/3] rounded-3xl overflow-hidden border border-border shadow-lg"
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
              <span className="section-label text-gold">{t("overviewLabel")}</span>
              <span className="gold-line" />
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
            <span className="section-label">{t("atAGlance")}</span>
            <span className="gold-line mx-auto mt-3" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickInfo.map((info) => (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="rounded-2xl bg-white border border-border p-7 text-center transition-shadow hover:shadow-[0_10px_15px_-3px_rgba(18,63,174,0.08)]"
              >
                <p className="text-sm text-muted-foreground">{info.label}</p>
                <p className="font-display text-[22px] text-primary mt-2">{info.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-20 lg:py-[120px]">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="rounded-[20px] bg-white border border-border p-10"
            >
              <h3 className="font-display text-[28px] text-foreground mb-6">{tc("whatIsIncluded")}</h3>
              <ul className="flex flex-col gap-4">
                {included.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[15px] text-muted-foreground">
                    <span className="text-primary mt-0.5">✓</span>
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
              className="rounded-[20px] bg-white border border-border p-10"
            >
              <h3 className="font-display text-[28px] text-foreground mb-6">{tc("notIncluded")}</h3>
              <ul className="flex flex-col gap-4">
                {excluded.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[15px] text-muted-foreground">
                    <span className="text-red-600 mt-0.5">×</span>
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
            <span className="section-label">{tc("itinerary")}</span>
            <span className="gold-line mx-auto mt-3" />
          </div>

          <div className="flex flex-col gap-4">
            {tour.itinerary.map((day, index) => (
              <motion.div
                key={day.day}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="rounded-xl bg-white border border-border p-6 flex flex-col sm:flex-row gap-6"
              >
                <span className="font-display text-2xl text-gold shrink-0">{tc("day", { day: day.day })}</span>
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
            <Button href={`/${locale}/book-online`} variant="gold">
              {t("bookThisTour")}
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-background py-20 lg:py-[120px]">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-0">
          <div className="text-center mb-12">
            <span className="section-label">{tc("gallery")}</span>
            <span className="gold-line mx-auto mt-3" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {tour.gallery.slice(0, 3).map((src) => (
              <motion.div
                key={src}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="relative aspect-[3/2] rounded-xl overflow-hidden border border-border"
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
                className="relative aspect-[16/9] rounded-xl overflow-hidden border border-border"
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
