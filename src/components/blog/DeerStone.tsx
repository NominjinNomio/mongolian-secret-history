import Image from "@/components/common/Image";
import { Ruler, MapPin, Landmark } from "lucide-react";

const stats = [
  {
    icon: Landmark,
    value: "550+",
    label: "deer stones found in Mongolia (of ~700 worldwide)",
  },
  {
    icon: Ruler,
    value: "1–4 m",
    label: "in height, 20–60 cm thick, 60–80 cm wide",
  },
  {
    icon: MapPin,
    value: "Uushgiin Uvur",
    label: "finest examples, near Murun in Khuvsgul province",
  },
];

export default function DeerStone() {
  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-[900px] px-6">
        {/* Article */}
        <div className="flex flex-col gap-5 mb-12">
          <p className="text-base leading-[1.9] text-muted-foreground">
            A deer stone, found mostly in Mongolia and in some Central Asian countries,
            is a unique monument dating to the Bronze Age and the Early Iron Age. It is
            a fixed oblique stone which has pictures of the sun and moon at the top and
            is decorated with images of deer in the middle. The bottom of the deer
            stone usually has knives, weapons, shields, mirrors, and hammers engraved
            on it.
          </p>
          <p className="text-base leading-[1.9] text-muted-foreground">
            Deer stones are architecturally, historically, and culturally valuable
            monuments — silent witnesses of the ancient nomadic peoples who erected
            them across the steppe some 3,000 years ago.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-12">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-2xl bg-white border border-border p-6 text-center">
              <stat.icon size={24} className="text-primary mx-auto mb-3" />
              <p className="font-display text-xl text-foreground">{stat.value}</p>
              <p className="text-xs text-muted-foreground mt-2 leading-relaxed">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="relative aspect-[3/4] rounded-[20px] overflow-hidden border border-border">
            <Image
              src="/images/culture-deer-stone.jpg"
              alt="Deer stone with carved flying deer"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[3/4] rounded-[20px] overflow-hidden border border-border">
            <Image
              src="/images/culture-deer-stone2.jpg"
              alt="Deer stones standing on the steppe"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Carvings explanation */}
        <div className="rounded-[20px] bg-white border border-border p-8 mb-12">
          <h3 className="font-display text-xl text-foreground mb-4">Reading a deer stone</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm leading-relaxed text-muted-foreground">
            <div>
              <h4 className="font-semibold text-foreground mb-1.5">Top — Sun & Moon</h4>
              <p>
                The upper section carries celestial symbols representing the eternal
                sky worshipped by Bronze Age nomads.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-1.5">Middle — Flying deer</h4>
              <p>
                Stylized deer with elongated bodies and swept-back antlers appear to
                fly upward — possibly guiding spirits to the heavens.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-1.5">Bottom — Weapons & tools</h4>
              <p>
                Knives, shields, mirrors, bows, and hammers are engraved near the base,
                reflecting the warrior culture of their makers.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="rounded-[20px] bg-primary p-8 text-white text-center">
          <p className="leading-[1.9] text-white/90">
            If you wish to see the most famous deer stones in person, join our{" "}
            <span className="font-semibold text-gold">Essential Mongolia tour</span> —
            we will take you to the finest sites in Khuvsgul and Arkhangai.
          </p>
        </div>
      </div>
    </section>
  );
}
