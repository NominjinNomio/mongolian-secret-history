import Image from "@/components/common/Image";
import { Check, MapPin, Navigation, Compass } from "lucide-react";

interface GerType {
  name: string;
  image: string;
  amenities: string[];
}

const gerTypes: GerType[] = [
  {
    name: "Deluxe ger",
    image: "/images/hero-steppe.jpg",
    amenities: [
      "Breakfast", "Closet", "Luggage rack", "Restroom", "Table & chairs", "King size bed",
      "Bathrobe", "Slippers", "Bathroom amenities", "Water boiler", "Room service", "Electric fan",
    ],
  },
  {
    name: "Standard ger (double)",
    image: "/images/about-nomads.jpg",
    amenities: [
      "Breakfast", "Closet", "Luggage rack", "Table & chairs", "Double bed",
      "Bathrobe", "Slippers", "Bathroom amenities", "Room service", "Electric fan",
    ],
  },
];

const locationFacts = [
  {
    icon: MapPin,
    text: "Saikhan Ovoo sum, Dundgobi province",
  },
  {
    icon: Navigation,
    text: "Longitude 104°02'55\" and latitude 45°19'57\" — a 217 mile drive on paved road followed by a 105.4 mile drive by improved country road from Ulaanbaatar",
  },
  {
    icon: Compass,
    text: "Located next to the famous Ongi temple ruins, where the Gobi meets the steppe",
  },
];

export default function OngiInfo() {
  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-[1100px] px-6">
        {/* Intro */}
        <div className="text-center max-w-[680px] mx-auto mb-14">
          <p className="font-elegant text-lg md:text-xl italic text-[#B08D57] leading-relaxed">
            The &quot;Secret of Ongi&quot; tourist camp is located next to the famous Ongi
            temple in Saikhan Ovoo sum, Dundgobi province.
          </p>
        </div>

        {/* Location facts */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {locationFacts.map((fact, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-4 rounded-2xl bg-white border border-border p-7 text-center"
            >
              <span className="w-12 h-12 rounded-full bg-[#E8912D]/15 flex items-center justify-center">
                <fact.icon size={22} className="text-[#E8912D]" />
              </span>
              <p className="text-sm leading-relaxed text-muted-foreground">{fact.text}</p>
            </div>
          ))}
        </div>

        {/* Ger types */}
        <div className="flex flex-col gap-14">
          {gerTypes.map((ger) => (
            <div
              key={ger.name}
              className="grid grid-cols-1 lg:grid-cols-[45%_1fr] gap-8 items-start rounded-[24px] bg-white border border-border p-6 lg:p-8"
            >
              <div>
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
                  <Image
                    src={ger.image}
                    alt={ger.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-display text-xl text-foreground mt-4 text-center">
                  {ger.name}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {ger.amenities.map((amenity) => (
                  <span
                    key={amenity}
                    className="inline-flex items-center gap-1.5 rounded-full bg-[#E8912D] px-3.5 py-1.5 text-xs font-medium text-white"
                  >
                    <Check size={12} />
                    {amenity}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
