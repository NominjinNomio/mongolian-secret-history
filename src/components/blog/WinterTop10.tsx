import Image from "@/components/common/Image";

const activities = [
  {
    title: "Dog Sledding",
    image: "/images/season-winter.jpg",
    desc: "A relatively new activity in Mongolia but one that is becoming ever more popular. Racing across the icy landscape behind a team of eager sled dogs in Terelj National Park is an exhilarating way to spend a day or two.",
  },
  {
    title: "Ice Festival",
    image: "/images/season-winter.jpg",
    desc: "Held on the frozen surface of Lake Khuvsgul each March, the Ice Festival fills three days with ice sculpting, archery, horse racing, sled racing, and traditional games — one of Mongolia's most magical winter events.",
  },
  {
    title: "Nomadic Herder Visit",
    image: "/images/season-winter.jpg",
    desc: "Winter is when nomadic families gather their herds close to the ger. Visit a herder family, help feed the livestock, and share hot milk tea by the stove for an authentic glimpse of winter life on the steppe.",
  },
  {
    title: "Ice Golf",
    image: "/images/season-winter.jpg",
    desc: "Yes, ice golf! Mongolia's frozen rivers and lakes make surreal fairways. A truly unique way to enjoy the crisp winter air — no green fees, just endless white.",
  },
  {
    title: "Skiing",
    image: "/images/season-winter.jpg",
    desc: "When you visit one of the coldest countries on earth you should absolutely take advantage! Sky Resort near Ulaanbaatar offers groomed slopes with stunning views of the Bogd Khan mountains.",
  },
  {
    title: "Whole Roast Sheep (Khorkhog)",
    image: "/images/food-khorkhog.jpg",
    desc: "The ultimate winter feast. Meat slow-cooked with hot stones inside a sealed container, shared with a nomadic family — a warming, unforgettable culinary experience.",
  },
  {
    title: "Winter Hiking",
    image: "/images/season-winter.jpg",
    desc: "Frozen rivers, silent forests, and crystal-clear air. Winter hiking in the Bogd Khan mountains or around Terelj reveals a peaceful side of Mongolia few travelers ever see.",
  },
  {
    title: "Camel Riding",
    image: "/images/season-autumn.jpg",
    desc: "Camels are brilliant and photogenic animals. Bactrian camels are especially great due to their 2 humps. Riding a two-humped camel across the snowy Gobi is surprisingly comfortable and utterly memorable.",
  },
  {
    title: "Traditional Costume Photo Shoot",
    image: "/images/culture-deel.jpg",
    desc: "Dress in a beautiful traditional deel and fur hat, and have your photo taken against the sparkling winter landscape — a perfect keepsake from your trip.",
  },
  {
    title: "Tsagaan Sar (Lunar New Year)",
    image: "/images/culture-tsagaan-sar.jpg",
    desc: "Join Mongolia's biggest holiday. Share the zolgokh greeting with a nomadic family, taste the festival foods, and welcome the new year the Mongolian way.",
  },
];

export default function WinterTop10() {
  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-[900px] px-6">
        {/* Intro */}
        <p className="text-base leading-[1.9] text-muted-foreground mb-14 max-w-[720px]">
          With one of the most extreme climates on earth (-40°C to +40°C), you would
          imagine that visiting Mongolia in winter would be madness. But for the
          adventurous traveler, winter reveals a quieter, more magical Mongolia. We
          have assembled 10 activities that will occupy you during your winter trip.
        </p>

        {/* Numbered activities */}
        <div className="flex flex-col gap-10">
          {activities.map((activity, i) => (
            <div
              key={activity.title}
              className={`flex flex-col ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 items-center rounded-[20px] bg-white border border-border p-6 lg:p-8`}
            >
              {/* Image with number badge */}
              <div className="relative w-full md:w-[45%] shrink-0">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
                  <Image
                    src={activity.image}
                    alt={activity.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-primary text-white font-display text-lg flex items-center justify-center shadow-lg">
                  {i + 1}
                </span>
              </div>

              <div>
                <h3 className="font-display text-2xl text-foreground mb-3">
                  {activity.title}
                </h3>
                <p className="text-sm leading-[1.8] text-muted-foreground">
                  {activity.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
