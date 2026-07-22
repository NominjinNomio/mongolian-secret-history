import Image from "@/components/common/Image";
import { AlertTriangle, Thermometer, Wind } from "lucide-react";

const months = [
  { month: "January", temp: "-23°C", conditions: "Wind and light snow. Clear skies", cold: true },
  { month: "February", temp: "-23°C", conditions: "Wind and moderate snow. Clear skies", cold: true },
  { month: "March", temp: "-10°C", conditions: "Snow, rain, high winds and mostly cloudy", cold: true },
  { month: "April", temp: "11°C", conditions: "Sleet and rain. Mostly cloudy", cold: false },
  { month: "May", temp: "16°C", conditions: "Windy with some snow and rain. Some sunny days", cold: false },
  { month: "June", temp: "24°C", conditions: "Heavy rain and intermittent sunny days", cold: false },
  { month: "July", temp: "25°C", conditions: "Mostly dry sunny days with occasional rain", cold: false },
  { month: "August", temp: "22°C", conditions: "Mostly dry sunny days with occasional rain", cold: false },
  { month: "September", temp: "3°C", conditions: "Dry and overcast with some wind", cold: true },
  { month: "October", temp: "-3°C", conditions: "Snow and overcast", cold: true },
  { month: "November", temp: "-14°C", conditions: "Heavy snow and cloudy", cold: true },
  { month: "December", temp: "-25°C", conditions: "Snow with some sunny days", cold: true },
];

export default function WinterWeatherGuide() {
  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-[900px] px-6">
        {/* Intro */}
        <div className="flex flex-col gap-5 mb-12">
          <p className="text-base leading-[1.9] text-muted-foreground">
            In winter Mongolia is very cold. Locals dress in layers of thermal clothing
            with warm jackets and snow trousers over the top or traditional fur
            Mongolian deels (long jackets).
          </p>
          <p className="text-base leading-[1.9] text-muted-foreground">
            Despite being very cold the weather can be quite bearable with the right
            preparation. Whilst -40 degrees may sound ominous, the almost total lack of
            humidity means that as long as you protect your skin with a couple of good
            layers you will not lose much body heat whilst outside.
          </p>
          <p className="text-base leading-[1.9] text-muted-foreground">
            The weather across Mongolia is generally about 10 degrees warmer in the
            south than the north, and visitors will notice a lot more snowfall the
            further north they travel. Temperatures and general weather advice given
            below is specific to Ulaanbaatar, which is where most people use as a base
            whilst travelling in Mongolia.
          </p>
        </div>

        {/* Monthly table */}
        <div className="rounded-[20px] bg-white border border-border overflow-hidden mb-10">
          <div className="grid grid-cols-[130px_110px_1fr] bg-primary text-white text-sm font-medium">
            <span className="px-5 py-4">Month</span>
            <span className="px-5 py-4">Avg. Temp</span>
            <span className="px-5 py-4">Expected Weather Conditions</span>
          </div>
          {months.map((row, i) => (
            <div
              key={row.month}
              className={`grid grid-cols-[130px_110px_1fr] text-sm ${
                i % 2 === 0 ? "bg-white" : "bg-[#F5F8FF]"
              }`}
            >
              <span className="px-5 py-3.5 font-medium text-foreground">{row.month}</span>
              <span
                className={`px-5 py-3.5 font-semibold ${
                  row.cold ? "text-primary" : "text-gold-dark"
                }`}
              >
                {row.temp}
              </span>
              <span className="px-5 py-3.5 text-muted-foreground">{row.conditions}</span>
            </div>
          ))}
        </div>

        {/* Quick stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
          <div className="flex items-start gap-4 rounded-2xl bg-white border border-border p-6">
            <Thermometer size={26} className="text-primary shrink-0 mt-1" />
            <div>
              <h4 className="font-display text-base text-foreground mb-1">South vs North</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Southern Mongolia is generally about 10 degrees warmer than the north,
                with far less snowfall.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 rounded-2xl bg-white border border-border p-6">
            <Wind size={26} className="text-primary shrink-0 mt-1" />
            <div>
              <h4 className="font-display text-base text-foreground mb-1">Dry cold</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The almost total lack of humidity means -40°C is more bearable than it
                sounds — with the right layers.
              </p>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="rounded-2xl bg-primary-light border border-primary/20 p-6 mb-6">
          <p className="text-sm leading-relaxed text-primary-dark">
            The previous 2 years have been very mild by Mongolian standards, which have
            historically been much harsher. It is advised that you do not rely too
            heavily on the above information and use it as a guide only.
          </p>
        </div>

        {/* Safety warning */}
        <div className="flex items-start gap-4 rounded-2xl bg-[#FFF7ED] border border-[#E8912D]/40 p-6 mb-12">
          <AlertTriangle size={26} className="text-[#E8912D] shrink-0 mt-1" />
          <div>
            <h4 className="font-display text-base text-foreground mb-2">Winter travel safety</h4>
            <p className="text-sm leading-relaxed text-muted-foreground">
              During winter it really is best to avoid solo travel unless you are an
              experienced outdoors person. Even travelling in a group outside of the
              city can be dangerous as sudden snowstorms can appear from nowhere,
              halting your journey until someone comes to rescue you. At the very
              least, let people know where you are going and when you should arrive,
              so they will be aware if you go missing — and never put anyone else at
              risk if they have to come and rescue you.
            </p>
          </div>
        </div>

        {/* Winter image */}
        <div className="relative w-full aspect-[16/9] rounded-[20px] overflow-hidden border border-border">
          <Image
            src="/images/season-winter.jpg"
            alt="Mongolian winter landscape"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
