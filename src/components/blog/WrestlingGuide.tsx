import Image from "@/components/common/Image";
import { Trophy, Medal, Bird, Award, Crown } from "lucide-react";

const features = [
  "There are no weight classifications",
  "There is no set ring size for the wrestling match",
  "A large number of wrestlers compete at the same time on the same field",
  "Each wrestler has a zasuul who acts as both coach and herald",
  "The special clothing is called umsgul — tight briefs (shuudag) and an open-fronted jacket (zodog)",
  "Matches are won when any part of the opponent's body above the knee touches the ground",
];

const titles = [
  {
    icon: Bird,
    title: "Falcon (nachin)",
    desc: "Awarded to a wrestler who wins five matches in the same competition",
  },
  {
    icon: Medal,
    title: "Elephant (zaan)",
    desc: "Given for seven successive match wins in one competition",
  },
  {
    icon: Award,
    title: "Lion (arslan)",
    desc: "The title earned by the overall competition winner",
  },
  {
    icon: Crown,
    title: "Champion (avarga)",
    desc: "The most grand title, given to a two-time whole competition winner",
  },
];

export default function WrestlingGuide() {
  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-[900px] px-6">
        {/* Intro */}
        <div className="flex flex-col gap-5 mb-12">
          <p className="text-base leading-[1.9] text-muted-foreground">
            Bokh, Mongolian traditional wrestling, is the most ancient sporting event
            in Mongolia and one of the Three Manly Games of the Naadam festival. All
            titles signify the strength of various animals and are given out mostly
            during the Naadam ceremony, where there are usually 6 to 9 matches in a
            competition.
          </p>
        </div>

        {/* Hero image */}
        <div className="relative w-full aspect-[16/9] rounded-[20px] overflow-hidden border border-border mb-12">
          <Image
            src="/images/culture-wrestling.jpg"
            alt="Mongolian wrestlers competing at Naadam"
            fill
            className="object-cover"
          />
        </div>

        {/* Features */}
        <div className="mb-14">
          <h3 className="font-display text-2xl text-foreground mb-8">
            Features of Mongolian wrestling
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((feature, i) => (
              <div
                key={i}
                className="flex items-start gap-3 rounded-2xl bg-white border border-border p-5"
              >
                <Trophy size={18} className="text-primary shrink-0 mt-0.5" />
                <p className="text-sm leading-relaxed text-muted-foreground">{feature}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Titles ladder */}
        <div className="mb-14">
          <h3 className="font-display text-2xl text-foreground mb-8">
            Wrestlers' titles
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {titles.map((title) => (
              <div
                key={title.title}
                className="rounded-2xl bg-white border border-border p-6 text-center"
              >
                <span className="w-12 h-12 rounded-full bg-gold/15 flex items-center justify-center mx-auto mb-4">
                  <title.icon size={22} className="text-gold-dark" />
                </span>
                <h4 className="font-display text-base text-foreground mb-2">
                  {title.title}
                </h4>
                <p className="text-xs leading-relaxed text-muted-foreground">
                  {title.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Eagle dance + CTA */}
        <div className="rounded-[20px] bg-primary p-8 lg:p-10 text-white">
          <h3 className="font-display text-xl mb-3">The eagle dance (devekh)</h3>
          <p className="text-white/85 leading-[1.9] text-sm md:text-base mb-6">
            Before each match, wrestlers perform the devekh — flapping their arms like
            the great eagles of the steppe. It is one of the most iconic sights of
            Naadam.
          </p>
          <p className="text-white/90 text-sm md:text-base">
            If you wish to see Mongolian wrestling in action, join our{" "}
            <span className="font-semibold text-gold">Naadam festival tour</span>{" "}
            every July.
          </p>
        </div>
      </div>
    </section>
  );
}
