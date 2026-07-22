import Image from "@/components/common/Image";
import { Check, X } from "lucide-react";

const buildSteps = [
  "Set a floor first, then put large furniture onto the floor to keep it in place",
  "Circle the wooden walls (khana) from the right",
  "Raise up the roof (toono) with 2 people on each side",
  "Put up pillars supporting the roof (toono)",
  "Connect the roof and the walls with the rafters (uni)",
  "Put the felt cover (burees) on the outside of the ger",
  "Assemble the stove and chimney",
  "Place the furniture",
];

const dos = [
  "Approach a Mongolian ger from the southwest if possible",
  "Open the door with your left hand and take the first step with your right leg over the doorstep (bosgo)",
  "Bend down slightly to avoid hitting your head on the doorframe (totgo)",
  "Say hello to the people inside as soon as you enter",
  "Men usually sit on the left side, women on the right side of the ger",
  "The oldest or leader of the group usually sits on the north side",
  "Hold a snuff bottle gently with both hands, take a small sniff, and give it back",
];

const donts = [
  "Never step on the doorstep or hold the wooden doorframe with your right hand — it is a bad omen",
  "Do not refuse tea or airag when offered — if you don't like it, take a small sip or bite and put it down on the table",
  "Do not put a cup of tea or airag on the floor",
];

export default function GerGuide() {
  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-[900px] px-6">
        {/* Hero image */}
        <div className="relative w-full aspect-[16/9] rounded-[20px] overflow-hidden border border-border mb-12">
          <Image
            src="/images/culture-ger.jpg"
            alt="Mongolian ger on the steppe"
            fill
            className="object-cover"
          />
        </div>

        {/* History */}
        <div className="flex flex-col gap-5 mb-14">
          <p className="text-base leading-[1.9] text-muted-foreground">
            The Mongolian ger was used even before the time of the Hunnu Empire, and
            its features have been evolving constantly to find its current shape. Ger
            is the most suitable dwelling for extreme weather changes and the nomadic
            way of life — easy to collapse or build, and light enough to move from
            place to place by ox and camel carts.
          </p>
          <p className="text-base leading-[1.9] text-muted-foreground">
            The ger's cover and mats are made of felt, which is good for human health —
            Mongolians are called the Felt Nation. The look of the ger changed greatly
            when the iron stove and chimney were introduced around 1919, and felt
            covering and a glass window on the top (toono) were introduced in the
            1940s. Even now, half of Mongolia's population lives in a ger, and most
            tourist accommodation in the countryside uses gers.
          </p>
        </div>

        {/* Build steps */}
        <div className="mb-14">
          <h3 className="font-display text-2xl text-foreground mb-8">
            How to build a Mongolian ger
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {buildSteps.map((step, i) => (
              <div
                key={i}
                className="flex items-start gap-4 rounded-2xl bg-white border border-border p-5"
              >
                <span className="w-9 h-9 rounded-full bg-primary text-white font-display text-sm flex items-center justify-center shrink-0">
                  {i + 1}
                </span>
                <p className="text-sm leading-relaxed text-muted-foreground">{step}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Etiquette */}
        <div className="mb-4">
          <h3 className="font-display text-2xl text-foreground mb-3">
            Things to know before visiting Mongolian herders in a ger
          </h3>
          <p className="text-base text-muted-foreground mb-8">
            There are certain dos and don'ts when you visit a nomadic family in a ger.
            Mongolians have been following these unwritten rules for centuries.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Dos */}
            <div className="rounded-[20px] bg-white border border-border p-7">
              <h4 className="font-display text-lg text-primary mb-5">Do</h4>
              <div className="flex flex-col gap-4">
                {dos.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary-light flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={13} className="text-primary" />
                    </span>
                    <p className="text-sm leading-relaxed text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Don'ts */}
            <div className="rounded-[20px] bg-white border border-border p-7">
              <h4 className="font-display text-lg text-[#C0392B] mb-5">Don't</h4>
              <div className="flex flex-col gap-4">
                {donts.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#C0392B]/10 flex items-center justify-center shrink-0 mt-0.5">
                      <X size={13} className="text-[#C0392B]" />
                    </span>
                    <p className="text-sm leading-relaxed text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
