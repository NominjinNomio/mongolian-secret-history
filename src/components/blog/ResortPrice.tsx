interface RoomRow {
  name: string;
  deluxeRoom: string;
  deluxeGer: string;
  standardGer: string;
}

interface ServiceRow {
  name: string;
  price: string;
  duration?: string;
}

const roomRates: RoomRow[] = [
  { name: "Twin/Double", deluxeRoom: "₮600,000", deluxeGer: "₮500,000", standardGer: "₮400,000" },
  { name: "Triple", deluxeRoom: "₮650,000", deluxeGer: "₮600,000", standardGer: "₮500,000" },
  { name: "Quad", deluxeRoom: "₮700,000", deluxeGer: "—", standardGer: "₮500,000" },
];

const spaServices: ServiceRow[] = [
  { name: "Cupping Therapy", price: "₮25,000", duration: "15 min" },
  { name: "Head & Shoulder Massage", price: "₮80,000", duration: "30 min" },
  { name: "Full Body Oil Massage", price: "₮120,000", duration: "1 hour" },
  { name: "Foot Massage", price: "₮100,000", duration: "50 min" },
  { name: "Sauna (12 years old and above)", price: "₮55,000" },
  { name: "Sauna (6–11 years old)", price: "₮35,000" },
];

const eventsServices: ServiceRow[] = [
  { name: "Fire Festival (5–10 people)", price: "₮200,000" },
  { name: "Fire Festival (11–20 people)", price: "₮500,000" },
  { name: "Fire Festival (21–50 people)", price: "₮800,000" },
  { name: "Laundry Service", price: "By special rate" },
  { name: "Bicycle Rental", price: "₮30,000", duration: "1 hour" },
  { name: "Photo with Traditional Costume", price: "₮30,000" },
  { name: "Karaoke", price: "₮70,000" },
  { name: "Archery", price: "₮30,000", duration: "30 min" },
  { name: "Conference Hall", price: "₮800,000–2,000,000" },
];

const freeActivities: string[] = [
  "Stargazing",
  "Practice Archery",
  "Shagai (Traditional Ankle Bone Game)",
  "Watch Historical Documentary about Mongolia",
  "Historical Presentation about Tumen Amgalant Palace",
  "Reading at the Resort Library Corner",
];

const notes = [
  "Breakfast included according to number of beds in gers/room.",
  "₮50,000 per child under 12 years old.",
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

export default function ResortPrice() {
  return (
    <section className="bg-[#FAF6F1] py-16 lg:py-24">
      <div className="mx-auto max-w-[900px] px-6">
        {/* Title */}
        <div className="flex justify-center mb-6">
          <h2 className="border border-[#C8A24A]/60 px-12 py-4 font-elegant text-2xl md:text-3xl tracking-[0.35em] text-[#5A4A3A]">
            PRICE LIST
          </h2>
        </div>
        <p className="text-center font-elegant text-lg italic text-[#B08D57] mb-16">
          Secret of the Silk Road Resort
        </p>

        <div className="flex flex-col gap-14">
          {/* Accommodation */}
          <div className="flex gap-6 md:gap-10">
            <VerticalLabel text="Accommodation" />
            <div className="flex-1">
              <div className="grid grid-cols-[1fr_auto_auto_auto] gap-x-6 pb-3 mb-2 border-b border-[#C8A24A]/40 text-xs uppercase tracking-[0.12em] text-[#B08D57]">
                <span />
                <span className="text-right">Deluxe Room</span>
                <span className="text-right">Deluxe Ger</span>
                <span className="text-right">Standard Ger</span>
              </div>
              <div className="flex flex-col gap-4">
                {roomRates.map((row) => (
                  <div key={row.name} className="grid grid-cols-[1fr_auto_auto_auto] gap-x-6 items-baseline">
                    <span className="text-[15px] text-[#5A4A3A]">{row.name}</span>
                    <span className="text-[15px] font-medium text-[#5A4A3A] text-right">{row.deluxeRoom}</span>
                    <span className="text-[15px] font-medium text-[#5A4A3A] text-right">{row.deluxeGer}</span>
                    <span className="text-[15px] font-medium text-[#5A4A3A] text-right">{row.standardGer}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Spa & Massage */}
          <div className="flex gap-6 md:gap-10">
            <VerticalLabel text="Spa & Massage" />
            <div className="flex-1">
              <div className="grid grid-cols-[1fr_auto_auto] gap-x-8 pb-3 mb-2 border-b border-[#C8A24A]/40 text-xs uppercase tracking-[0.15em] text-[#B08D57]">
                <span>Service</span>
                <span className="text-right">Price</span>
                <span className="text-right">Duration</span>
              </div>
              <div className="flex flex-col gap-4">
                {spaServices.map((row) => (
                  <div key={row.name} className="grid grid-cols-[1fr_auto_auto] gap-x-8 items-baseline">
                    <span className="text-[15px] text-[#5A4A3A]">{row.name}</span>
                    <span className="text-[15px] font-medium text-[#5A4A3A] text-right">{row.price}</span>
                    <span className="text-[15px] text-[#8A7A6A] text-right">{row.duration ?? ""}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Events & Services */}
          <div className="flex gap-6 md:gap-10">
            <VerticalLabel text="Events" />
            <div className="flex-1">
              <div className="grid grid-cols-[1fr_auto_auto] gap-x-8 pb-3 mb-2 border-b border-[#C8A24A]/40 text-xs uppercase tracking-[0.15em] text-[#B08D57]">
                <span>Service</span>
                <span className="text-right">Price</span>
                <span className="text-right">Duration</span>
              </div>
              <div className="flex flex-col gap-4">
                {eventsServices.map((row) => (
                  <div key={row.name} className="grid grid-cols-[1fr_auto_auto] gap-x-8 items-baseline">
                    <span className="text-[15px] text-[#5A4A3A]">{row.name}</span>
                    <span className="text-[15px] font-medium text-[#5A4A3A] text-right">{row.price}</span>
                    <span className="text-[15px] text-[#8A7A6A] text-right">{row.duration ?? ""}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Free activities */}
          <div className="flex gap-6 md:gap-10">
            <VerticalLabel text="Free" />
            <div className="flex-1">
              <div className="flex flex-col gap-4">
                {freeActivities.map((activity) => (
                  <div key={activity} className="grid grid-cols-[1fr_auto] gap-x-8 items-baseline">
                    <span className="text-[15px] text-[#5A4A3A]">{activity}</span>
                    <span className="text-[15px] font-medium text-[#B08D57] text-right">Free</span>
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
