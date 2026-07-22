import Image from "@/components/common/Image";
import { AlertTriangle, Thermometer, Wind, Sun, Snowflake, CloudRain } from "lucide-react";

interface MonthWeather {
  month: string;
  temp: number;
  tempLabel: string;
  conditions: string;
}

const months: MonthWeather[] = [
  { month: "January", temp: -23, tempLabel: "-23°C", conditions: "Wind and light snow. Clear skies" },
  { month: "February", temp: -23, tempLabel: "-23°C", conditions: "Wind and moderate snow. Clear skies" },
  { month: "March", temp: -10, tempLabel: "-10°C", conditions: "Snow, rain, high winds and mostly cloudy" },
  { month: "April", temp: 11, tempLabel: "11°C", conditions: "Sleet and rain. Mostly cloudy" },
  { month: "May", temp: 16, tempLabel: "16°C", conditions: "Windy with some snow and rain. Some sunny days" },
  { month: "June", temp: 24, tempLabel: "24°C", conditions: "Heavy rain and intermittent sunny days" },
  { month: "July", temp: 25, tempLabel: "25°C", conditions: "Mostly dry sunny days with occasional rain" },
  { month: "August", temp: 22, tempLabel: "22°C", conditions: "Mostly dry sunny days with occasional rain" },
  { month: "September", temp: 3, tempLabel: "3°C", conditions: "Dry and overcast with some wind" },
  { month: "October", temp: -3, tempLabel: "-3°C", conditions: "Snow and overcast" },
  { month: "November", temp: -14, tempLabel: "-14°C", conditions: "Heavy snow and cloudy" },
  { month: "December", temp: -25, tempLabel: "-25°C", conditions: "Snow with some sunny days" },
];

function tempStyle(temp: number): string {
  if (temp <= -20) return "bg-[#0A2C7A] text-white";
  if (temp <= -10) return "bg-[#2E5BC7] text-white";
  if (temp <= 0) return "bg-[#6C93E8] text-white";
  if (temp <= 10) return "bg-[#A8C3F2] text-[#0A2C7A]";
  if (temp <= 18) return "bg-[#E8C87A] text-[#5A4A1A]";
  return "bg-[#C8A24A] text-white";
}

function tempIcon(temp: number) {
  if (temp <= -10) return <Snowflake size={16} />;
  if (temp <= 5) return <Wind size={16} />;
  if (temp <= 18) return <CloudRain size={16} />;
  return <Sun size={16} />;
}

export default function WeatherGuide() {
  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-[1000px] px-6">
        {/* Intro */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-14">
          <div className="rounded-2xl bg-white border border-border p-6">
            <Thermometer size={22} className="text-primary mb-3" />
            <h3 className="font-display text-base text-foreground mb-2">Dress in layers</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              In winter Mongolia is very cold. Locals dress in layers of thermal clothing with warm jackets and snow trousers, or traditional fur Mongolian deels.
            </p>
          </div>
          <div className="rounded-2xl bg-white border border-border p-6">
            <Sun size={22} className="text-primary mb-3" />
            <h3 className="font-display text-base text-foreground mb-2">Dry cold is bearable</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Whilst -40°C may sound ominous, the almost total lack of humidity means you will not lose much body heat with a couple of good layers.
            </p>
          </div>
          <div className="rounded-2xl bg-white border border-border p-6">
            <Wind size={22} className="text-primary mb-3" />
            <h3 className="font-display text-base text-foreground mb-2">North vs South</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              The south is generally about 10 degrees warmer than the north, with noticeably more snowfall the further north you travel. Values below are for Ulaanbaatar.
            </p>
          </div>
        </div>

        {/* Month grid */}
        <h3 className="font-display text-2xl text-foreground text-center mb-2">
          Month-by-Month Weather
        </h3>
        <p className="text-center text-sm text-muted-foreground mb-10">
          Average temperatures and expected conditions (as of last year)
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-14">
          {months.map((m) => (
            <div
              key={m.month}
              className="flex items-stretch overflow-hidden rounded-2xl bg-white border border-border"
            >
              <div className={`flex flex-col items-center justify-center gap-1 px-4 py-4 w-[92px] shrink-0 ${tempStyle(m.temp)}`}>
                {tempIcon(m.temp)}
                <span className="font-display text-lg leading-none">{m.tempLabel}</span>
              </div>
              <div className="flex flex-col justify-center px-4 py-3">
                <span className="font-display text-base text-foreground">{m.month}</span>
                <span className="text-[13px] leading-snug text-muted-foreground mt-1">
                  {m.conditions}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Warning */}
        <div className="rounded-2xl bg-[#FFF7E8] border border-[#C8A24A]/50 p-6 lg:p-8 mb-14 flex gap-4">
          <AlertTriangle size={24} className="text-[#C8A24A] shrink-0 mt-0.5" />
          <div className="flex flex-col gap-3">
            <p className="text-sm leading-relaxed text-[#5A4A1A]">
              The previous 2 years have been very mild by Mongolian standards, which have historically been much harsher — use the information above as a guide only.
            </p>
            <p className="text-sm leading-relaxed text-[#5A4A1A]">
              During winter it is best to avoid solo travel unless you are an experienced outdoors person. Sudden snowstorms can appear from nowhere — always let people know where you are going and when you should arrive, so they will be aware if you go missing.
            </p>
          </div>
        </div>

        {/* Photo */}
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl">
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
