import Image from "@/components/common/Image";
import { Check, MapPin, Phone, Mail, Globe, Tent, TreePine, Target, Music, Volleyball, Wine, Baby, Mountain } from "lucide-react";

interface RoomType {
  name: string;
  size: string;
  image: string;
  amenities: string[];
}

const rooms: RoomType[] = [
  {
    name: "Lux room (2nd floor)",
    size: "35 m²",
    image: "/images/tour-1.jpg",
    amenities: [
      "Bathroom", "Breakfast", "Central heat", "Closet", "Dinner", "Drinking water",
      "Easy access", "English speaker", "Free Wi-Fi", "Guide", "Hot & Cold water", "Internet",
      "Lunch", "Meals", "Open-air", "Parking lot", "Queen size bed", "Restaurant service",
      "Shower", "Sink", "TV Cable", "Toilet", "Toiletries", "Towels",
    ],
  },
  {
    name: "Deluxe room (2nd floor)",
    size: "30 m²",
    image: "/images/tour-2.jpg",
    amenities: [
      "Bathroom", "Breakfast", "Central heat", "Closet", "Dinner", "Drinking water",
      "Easy access", "English speaker", "Free Wi-Fi", "Guide", "Hot & Cold water", "Internet",
      "Lunch", "Meals", "Open-air", "Parking lot", "Queen size bed", "Restaurant service",
      "Shower", "Sink", "TV Cable", "Toilet", "Toiletries", "Towels",
    ],
  },
  {
    name: "Standard room, twin (2nd floor)",
    size: "25 m²",
    image: "/images/tour-3.jpg",
    amenities: [
      "Bathroom", "Breakfast", "Central heat", "Closet", "Dinner", "Free Wi-Fi",
      "Guide", "Hot & Cold water", "Internet", "Lunch", "Meals", "Open-air",
      "Parking lot", "Restaurant service", "Shower", "Sink", "TV Cable", "Toilet",
      "Toiletries", "Towels", "Twin beds",
    ],
  },
  {
    name: "Quad room (2nd floor)",
    size: "40 m²",
    image: "/images/tour-4.jpg",
    amenities: [
      "Bathroom", "Breakfast", "Central heat", "Closet", "Dinner", "Drinking water",
      "Easy access", "English speaker", "Free Wi-Fi", "Guide", "Hot & Cold water", "Internet",
      "Lunch", "Meals", "Open-air", "Parking lot", "Queen size bed", "Restaurant service",
      "Shower", "Sink", "TV Cable", "Toilet", "Toiletries", "Towels",
    ],
  },
  {
    name: "Wooden ger",
    size: "28 m²",
    image: "/images/hero-steppe.jpg",
    amenities: [
      "Bathroom", "Breakfast", "Closet", "Dinner", "Drinking water", "Easy access",
      "English speaker", "Free Wi-Fi", "Guide", "Hot & Cold water", "Internet", "Lunch",
      "Meals", "Open-air", "Parking lot", "Restaurant service", "Shower", "Sink",
      "TV Cable", "Toilet", "Toiletries", "Towels",
    ],
  },
  {
    name: "En-suite Deluxe ger",
    size: "32 m²",
    image: "/images/about-nomads.jpg",
    amenities: [
      "Bathroom", "Breakfast", "Central heat", "Closet", "Dinner", "Drinking water",
      "Easy access", "English speaker", "Free Wi-Fi", "Guide", "Hot & Cold water", "Internet",
      "Lunch", "Meals", "Mini bar", "Open-air", "Parking lot", "Queen size bed",
      "Restaurant service", "Shower", "Sink", "Sofa", "TV Cable", "Toilet", "Toiletries", "Towels",
    ],
  },
];

const activities = [
  { label: "Nearby lake and forest", icon: TreePine },
  { label: "Pasture", icon: Mountain },
  { label: "Archery", icon: Target },
  { label: "Kids horse & Hiking", icon: Baby },
  { label: "Billiard & Tennis", icon: Volleyball },
  { label: "Karaoke", icon: Music },
  { label: "Bar & Open terrace", icon: Wine },
  { label: "Ger experience", icon: Tent },
];

export default function CampInfo() {
  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-[1100px] px-6">
        {/* Intro */}
        <div className="text-center max-w-[760px] mx-auto mb-16">
          <p className="text-base leading-[1.9] text-muted-foreground">
            Our camp is located in Jargalant soum, Tuv Province — the historic homeland
            of Chinggis Khaan. Surrounded by forest, open steppe, and ancient sites, the
            Mongolian Secret History camp offers comfortable rooms and traditional gers,
            warm hospitality, and authentic nomadic experiences just a short drive from
            Ulaanbaatar.
          </p>
        </div>

        {/* Room types */}
        <div className="flex flex-col gap-14 mb-20">
          {rooms.map((room) => (
            <div
              key={room.name}
              className="grid grid-cols-1 lg:grid-cols-[45%_1fr] gap-8 items-start rounded-[24px] bg-white border border-border p-6 lg:p-8"
            >
              <div>
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
                  <Image
                    src={room.image}
                    alt={room.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex items-center justify-between mt-4">
                  <h3 className="font-display text-xl text-foreground">{room.name}</h3>
                  <span className="text-sm text-muted-foreground">{room.size}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {room.amenities.map((amenity) => (
                  <span
                    key={amenity}
                    className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3.5 py-1.5 text-xs font-medium text-white"
                  >
                    <Check size={12} />
                    {amenity}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Activities */}
        <div className="mb-20">
          <h3 className="font-display text-2xl text-foreground text-center mb-10">
            Camp Activities
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {activities.map((activity) => (
              <div
                key={activity.label}
                className="flex flex-col items-center gap-3 rounded-2xl bg-white border border-border p-6 text-center"
              >
                <activity.icon size={28} className="text-primary" />
                <span className="text-sm text-foreground">{activity.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Contact & location */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl bg-white border border-border p-8">
            <h4 className="font-display text-lg text-foreground mb-5">Contact</h4>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <span className="flex items-center gap-3">
                <Globe size={16} className="text-primary" />
                www.facebook.com/mongoliansecrethistory
              </span>
              <span className="flex items-center gap-3">
                <Globe size={16} className="text-primary" />
                www.instagram.com/msh
              </span>
              <span className="flex items-center gap-3">
                <Phone size={16} className="text-primary" />
                70000450 · 99098841 · 94046841
              </span>
              <span className="flex items-center gap-3">
                <Mail size={16} className="text-primary" />
                info@mongoliansecrethistory.mn
              </span>
            </div>
          </div>

          <div className="rounded-2xl bg-white border border-border p-8">
            <h4 className="font-display text-lg text-foreground mb-5">Location</h4>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <span className="flex items-start gap-3">
                <MapPin size={16} className="text-primary mt-0.5" />
                Jargalant soum, Tuv Province, Mongolia
              </span>
              <span className="flex items-start gap-3">
                <MapPin size={16} className="text-primary mt-0.5" />
                64.5 km drive from Ulaanbaatar — 95% paved road
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
