import Image from "@/components/common/Image";
import { CalendarDays } from "lucide-react";

const festivals = [
  {
    name: "Tsagaan Sar",
    when: "Mid to late February",
    image: "/images/culture-tsagaan-sar.jpg",
    desc: "The festival of the white moon, held at the beginning of the new lunar year. The traditional celebration involves 3–5 days of eating and drinking with family, rituals to greet the sunrise on the first day of the new year, and the zolgokh greeting ceremony. It is an intense family celebration full of religious ritual and practice.",
  },
  {
    name: "Ice Festival",
    when: "Early March, Khuvsgul Lake",
    image: "/images/season-winter.jpg",
    desc: "To take advantage of the immense cold in the north, the people of Khuvsgul organize an ice festival held on the frozen lake surface for 3 days during March. Events include ice sculpting competitions, archery, horse racing, and sled racing, as well as many others across the 3 days.",
  },
  {
    name: "1000 Camel Festival",
    when: "Mid March, Gobi Desert",
    image: "/images/season-autumn.jpg",
    desc: "The description is in the name! This is a festival of up to and including 1,000 camels held in the Gobi desert in mid March each year. There is camel racing, camel polo, and a camel beauty contest in the small desert town of Bulgan in Umnugovi.",
  },
  {
    name: "Golden Eagle Festival",
    when: "1st weekend of October, Bayan-Ulgii",
    image: "/images/culture-eagle.jpg",
    desc: "The traditional Golden Eagle Festival is held in the first weekend of October each year, with another held just outside Ulaanbaatar. Kazakh hunters compete with their golden eagles against a supremely beautiful snowy backdrop — a spectacular celebration of an ancient partnership.",
  },
];

export default function WinterFestivals() {
  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-[900px] px-6">
        {/* Intro */}
        <p className="text-base leading-[1.9] text-muted-foreground mb-14 max-w-[680px]">
          Mongolian winters are long and difficult, so to fill the short days people
          enjoy a number of big festivals. Each one brings color, competition, and
          warmth to the frozen steppe.
        </p>

        {/* Festivals */}
        <div className="flex flex-col gap-12">
          {festivals.map((festival, i) => (
            <div
              key={festival.name}
              className={`flex flex-col ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 items-center rounded-[20px] bg-white border border-border p-6 lg:p-8`}
            >
              <div className="relative w-full md:w-[45%] aspect-[4/3] overflow-hidden rounded-xl shrink-0">
                <Image src={festival.image} alt={festival.name} fill className="object-cover" />
              </div>
              <div>
                <h3 className="font-display text-2xl text-foreground">{festival.name}</h3>
                <span className="inline-flex items-center gap-1.5 mt-2 mb-4 rounded-full bg-gold/15 px-3 py-1 text-xs font-medium text-gold-dark">
                  <CalendarDays size={12} />
                  {festival.when}
                </span>
                <p className="text-sm leading-[1.8] text-muted-foreground">{festival.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
