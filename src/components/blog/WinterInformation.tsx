import Image from "@/components/common/Image";
import {
  Thermometer,
  CloudSnow,
  Dog,
  Mountain,
  Flame,
  Tent,
  PartyPopper,
  Check,
  Mail,
} from "lucide-react";

const activities = [
  {
    icon: Dog,
    title: "Dog Sledding",
    desc: "Race across the icy landscape on the back of a dog sled. We offer a dog sledding experience in Terelj National Park, complete with a nomadic stay in a traditional ger.",
  },
  {
    icon: Mountain,
    title: "Winter Horse Trekking",
    desc: "Our company works closely with a family of traditional horse trainers to the north of Ulaanbaatar to provide a beautiful horse trekking experience year round.",
  },
  {
    icon: Flame,
    title: "Shamanic Experience & Fire Rituals on Frozen Lake Khuvsgul",
    desc: "Lake Khuvsgul, the second largest freshwater lake in Asia, freezes over completely from mid November. A local shaman has hosted our guests for over 10 years, teaching the principles of Shamanism during a week-long stay that concludes with a personal fire ritual at the lake.",
  },
  {
    icon: Tent,
    title: "Nomadic Stay",
    desc: "During winter, nomadic people are delighted to welcome guests. We would love to introduce you to a family that will host you during your winter trip in Mongolia.",
  },
  {
    icon: PartyPopper,
    title: "Mongolian New Year Festival — Tsaagan Sar",
    desc: "Tsaagan Sar, the festival of the white moon, is when Mongolia celebrates the Lunar New Year. The festival takes place mid to late February and lasts 5 days. We run speciality trips during which you will visit a nomadic family, eat traditional foods, and play traditional games as you usher in the new year.",
  },
];

const packingList = [
  {
    item: "A warm, collared coat",
    detail: "An absolute essential — at least 3/4 length to cover you to the knees, lined with efficient insulating material (fake fur is extremely good). If you arrive without a jacket, we can take you to the local markets to pick one up at a relatively low price.",
  },
  {
    item: "Layered clothing",
    detail: "Beneath your coat you will need several layers — at minimum leggings beneath your normal trousers and a thermal vest under a long sleeved shirt or jumper.",
  },
  {
    item: "Hat",
    detail: "A good quality hat is essential — you risk frostbite in your ears from just short periods uncovered.",
  },
  {
    item: "Warm boots and socks",
    detail: "Thin shoes will not cut it in the Mongolian winter (including wellington boots). Fur-lined knee-length boots you don't mind getting dirty are best; old Uggs or similar work well.",
  },
  {
    item: "Sunglasses",
    detail: "The snowy landscape can be dazzling, so sunglasses are a sensible idea.",
  },
];

export default function WinterInformation() {
  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-[900px] px-6">
        {/* Intro */}
        <div className="flex flex-col gap-5 mb-12">
          <p className="text-base leading-[1.9] text-muted-foreground">
            Winter in Mongolia can be very tough even for locals, but with the correct
            preparation and the right clothing you can still enjoy a fantastic snowy
            break. Below is a breakdown of the weather, temperature, culture, and a
            checklist for preparing your winter journey.
          </p>
          <p className="text-base leading-[1.9] text-muted-foreground">
            Officially winter lasts from early October to early March, with a range of
            conditions depending on when you visit. The weather is colder in midwinter
            but much more settled — think freezing sunny days and long clear nights.
            Things are warmer in October and March but much more unpredictable, with
            high winds and lots of snowfall.
          </p>
        </div>

        {/* Weather summary */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-14">
          <div className="rounded-2xl bg-primary p-7 text-white">
            <div className="flex items-center gap-3 mb-3">
              <Thermometer size={24} className="text-gold" />
              <h4 className="font-display text-lg">Temperature</h4>
            </div>
            <p className="text-2xl font-display">-50°C to -20°C</p>
            <p className="text-sm text-white/75 mt-1">(-58°F to -4°F)</p>
          </div>
          <div className="rounded-2xl bg-white border border-border p-7">
            <div className="flex items-center gap-3 mb-3">
              <CloudSnow size={24} className="text-primary" />
              <h4 className="font-display text-lg text-foreground">Weather</h4>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Heavy snowfall at the beginning and end of the season, with clear days
              during the coldest months.
            </p>
          </div>
        </div>

        {/* Weather detail */}
        <div className="mb-14">
          <h3 className="font-display text-2xl text-foreground mb-5">Weather and temperature</h3>
          <p className="text-base leading-[1.9] text-muted-foreground">
            Beginning in October, the weather becomes more unsettled with occasional
            snowfall and nights dropping below freezing. Snowfall increases into
            November as temperatures fall to -20°C (-4°F) and below. December to
            February is the coldest time of year, with the warmest temperatures not
            going much above -30°C (-22°F) anywhere, and much colder in the northern
            provinces. During these coldest 3 months there is relatively little
            snowfall, although plenty of frozen snow stays on the ground from October
            and November. In March the temperature rises rapidly, the ice melts, and
            the weather becomes difficult with snow, sleet, hail, rain, and windy
            conditions with little sunshine.
          </p>
        </div>

        {/* Activities */}
        <div className="mb-14">
          <h3 className="font-display text-2xl text-foreground mb-3">Activities and Culture</h3>
          <p className="text-base text-muted-foreground mb-8">
            Mongolian winter offers a variety of unique activities for all travellers.
            The following is just a short list of suggestions.
          </p>
          <div className="flex flex-col gap-5">
            {activities.map((activity) => (
              <div
                key={activity.title}
                className="flex items-start gap-5 rounded-2xl bg-white border border-border p-6"
              >
                <div className="w-12 h-12 rounded-full bg-primary-light flex items-center justify-center shrink-0">
                  <activity.icon size={22} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-display text-base text-foreground mb-1.5">
                    {activity.title}
                  </h4>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {activity.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Packing list */}
        <div className="mb-14">
          <h3 className="font-display text-2xl text-foreground mb-3">What to bring</h3>
          <p className="text-base text-muted-foreground mb-8">
            You will need some basic essentials when travelling in Mongolia during the
            winter:
          </p>
          <div className="flex flex-col gap-4">
            {packingList.map((entry) => (
              <div
                key={entry.item}
                className="flex items-start gap-4 rounded-2xl bg-white border border-border p-5"
              >
                <span className="w-7 h-7 rounded-full bg-primary flex items-center justify-center shrink-0 mt-0.5">
                  <Check size={14} className="text-white" />
                </span>
                <div>
                  <h4 className="font-display text-[15px] text-foreground">{entry.item}</h4>
                  <p className="text-sm leading-relaxed text-muted-foreground mt-1">
                    {entry.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Shipping note */}
        <div className="flex items-start gap-4 rounded-2xl bg-primary-light border border-primary/20 p-6 mb-12">
          <Mail size={22} className="text-primary shrink-0 mt-0.5" />
          <p className="text-sm leading-relaxed text-primary-dark">
            If the idea of bringing this amount of warm clothing seems daunting, a
            simple solution is to have all of your winter gear shipped out by courier
            when you leave. If you prefer to have it shipped here in advance of your
            trip, please feel free to email us at{" "}
            <a href="mailto:info@mongoliansecrethistory.mn" className="font-semibold underline">
              info@mongoliansecrethistory.mn
            </a>{" "}
            — we are happy to receive and store all your luggage in advance of your
            trip.
          </p>
        </div>

        {/* Winter image */}
        <div className="relative w-full aspect-[16/9] rounded-[20px] overflow-hidden border border-border">
          <Image
            src="/images/season-winter.jpg"
            alt="Mongolian winter"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
