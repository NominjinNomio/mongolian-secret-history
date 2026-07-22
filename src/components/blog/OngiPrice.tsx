interface RoomRow {
  name: string;
  deluxeGer: string;
  standardGer: string;
}

interface ServiceRow {
  name: string;
  price: string;
  duration?: string;
}

const roomRates: RoomRow[] = [
  { name: "Twin/Double", deluxeGer: "₮400,000", standardGer: "₮300,000" },
  { name: "Triple", deluxeGer: "₮500,000", standardGer: "₮400,000" },
  { name: "Quad", deluxeGer: "—", standardGer: "₮450,000" },
];

const services: ServiceRow[] = [
  { name: "Sauna (6–11 years old)", price: "₮35,000", duration: "1 hour" },
  { name: "Full body massage", price: "₮110,000", duration: "1 hour" },
  { name: "Foot massage", price: "₮90,000" },
  { name: "Head and shoulder massage", price: "₮70,000", duration: "30 minutes" },
  { name: "Laundry", price: "By special rate" },
  { name: "Photo with Mongolian traditional costume", price: "₮25,000" },
  { name: "Shower", price: "₮15,000" },
];

const notes = [
  "Breakfast included according to number of beds in ger/room.",
  "₮50,000 per child under 12 years old (additional breakfast cost).",
  "Free breakfast for child under 4 years old.",
  "Rates valid for 2026 season.",
];

function VerticalLabel({ text }: { text: string }) {
  return (
    <div className="flex items-start">
      <span className="bg-[#B08D57] text-white text-[11px] tracking-[0.3em] uppercase px-2.5 py-4 [writing-mode:vertical-rl] rotate-180">
        {text}
      </span>
    </div>
  );
}

export default function OngiPrice() {
  return (
    <section className="bg-[#FAF6F1] py-16 lg:py-24">
      <div className="mx-auto max-w-[820px] px-6">
        {/* Title */}
        <div className="flex justify-center mb-6">
          <h2 className="border border-[#C8A24A]/60 px-12 py-4 font-elegant text-2xl md:text-3xl tracking-[0.35em] text-[#5A4A3A]">
            PRICE LIST
          </h2>
        </div>
        <p className="text-center font-elegant text-lg italic text-[#B08D57] mb-16">
          Secret of Ongi Tourist Camp
        </p>

        <div className="flex flex-col gap-14">
          {/* Accommodation */}
          <div className="flex gap-6 md:gap-10">
            <VerticalLabel text="Accommodation" />
            <div className="flex-1">
              <div className="grid grid-cols-[1fr_auto_auto] gap-x-8 pb-3 mb-2 border-b border-[#C8A24A]/40 text-xs uppercase tracking-[0.15em] text-[#B08D57]">
                <span />
                <span className="text-right">Deluxe Ger</span>
                <span className="text-right">Standard Ger</span>
              </div>
              <div className="flex flex-col gap-4">
                {roomRates.map((row) => (
                  <div key={row.name} className="grid grid-cols-[1fr_auto_auto] gap-x-8 items-baseline">
                    <span className="text-[15px] text-[#5A4A3A]">{row.name}</span>
                    <span className="text-[15px] font-medium text-[#5A4A3A] text-right">{row.deluxeGer}</span>
                    <span className="text-[15px] font-medium text-[#5A4A3A] text-right">{row.standardGer}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="flex gap-6 md:gap-10">
            <VerticalLabel text="Services" />
            <div className="flex-1">
              <div className="grid grid-cols-[1fr_auto_auto] gap-x-8 pb-3 mb-2 border-b border-[#C8A24A]/40 text-xs uppercase tracking-[0.15em] text-[#B08D57]">
                <span>Service</span>
                <span className="text-right">Rate</span>
                <span className="text-right">Duration</span>
              </div>
              <div className="flex flex-col gap-4">
                {services.map((row) => (
                  <div key={row.name} className="grid grid-cols-[1fr_auto_auto] gap-x-8 items-baseline">
                    <span className="text-[15px] text-[#5A4A3A]">{row.name}</span>
                    <span className="text-[15px] font-medium text-[#5A4A3A] text-right">{row.price}</span>
                    <span className="text-[15px] text-[#8A7A6A] text-right">{row.duration ?? ""}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Notes */}
        <div className="mt-16 border-t border-[#C8A24A]/40 pt-8 flex flex-col gap-3">
          {notes.map((note, i) => (
            <p key={i} className="text-[13px] leading-relaxed text-[#8A7A6A]">
              * {note}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
