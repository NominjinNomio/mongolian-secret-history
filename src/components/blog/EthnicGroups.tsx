import Image from "@/components/common/Image";
import { Users } from "lucide-react";

const groups = [
  {
    name: "Khalkh Mongols",
    share: "~86% of population",
    image: "/images/culture-deel.jpg",
    desc: "The largest ethnic group and the heart of the Mongolian nation. The classic deel — a long robe with a high collar and wide sash — is the foundation of Mongolian dress, worn with leather boots and a sash that supports the back during long rides.",
  },
  {
    name: "Kazakhs",
    share: "Bayan-Ulgii province",
    image: "/images/culture-eagle.jpg",
    desc: "In the far west, Kazakh communities wear richly embroidered coats and fox-fur hats. They are world-famous for their ancient golden eagle hunting tradition, celebrated each year at the Golden Eagle Festival.",
  },
  {
    name: "Buryats",
    share: "Northern provinces",
    image: "/images/culture-deel.jpg",
    desc: "Buryat clothing features bright silk trims, distinctive pointed hats, and silver jewelry. Their costume shows the close cultural ties between northern Mongolia and the Buryat regions of Siberia.",
  },
  {
    name: "Tsaatan (Dukha)",
    share: "Northern taiga",
    image: "/images/season-winter.jpg",
    desc: "The Tsaatan reindeer herders live in the taiga forests near Khuvsgul. Their durable hide clothing is suited to forest life, and their culture revolves entirely around their reindeer herds.",
  },
];

export default function EthnicGroups() {
  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-[900px] px-6">
        {/* Intro */}
        <div className="flex flex-col gap-5 mb-14">
          <p className="text-base leading-[1.9] text-muted-foreground">
            Considering Mongolia&apos;s size, it is home to a surprising diversity of peoples.
            More than 20 different ethnic groups live across the country, each with its
            own dialect, customs, and distinctive traditional clothing shaped by
            centuries of nomadic life.
          </p>
          <p className="text-base leading-[1.9] text-muted-foreground">
            From the eagle hunters of the Altai to the reindeer herders of the taiga,
            Mongolia&apos;s ethnic groups keep ancient traditions alive — and nowhere is this
            more visible than in their costumes.
          </p>
        </div>

        {/* Groups */}
        <div className="flex flex-col gap-8 mb-16">
          {groups.map((group) => (
            <div
              key={group.name}
              className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-6 rounded-[20px] bg-white border border-border p-6 items-center"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
                <Image src={group.image} alt={group.name} fill className="object-cover" />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="font-display text-xl text-foreground">{group.name}</h3>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-light px-3 py-1 text-xs font-medium text-primary">
                    <Users size={12} />
                    {group.share}
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">{group.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Festival costumes */}
        <div className="rounded-[20px] bg-primary p-8 lg:p-10 text-white">
          <h3 className="font-display text-2xl mb-4">Festival costumes</h3>
          <p className="text-white/85 leading-[1.9] text-sm md:text-base">
            During Naadam and Tsagaan Sar, families wear their finest deels decorated
            with silver jewelry, coral, and intricate embroidery passed down through
            generations. Men&apos;s deels are paired with a wide sash and leather boots,
            while women&apos;s festival deels feature elaborate vests and headdresses that
            can weigh several kilograms — a breathtaking display of living heritage.
          </p>
        </div>
      </div>
    </section>
  );
}
