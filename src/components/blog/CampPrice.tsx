interface PriceRow {
  name: string;
  price1: string;
  price2?: string;
}

interface PriceCategory {
  title: string;
  twoColumns?: boolean;
  rows: PriceRow[];
}

const categories: PriceCategory[] = [
  {
    title: "Accommodation",
    twoColumns: true,
    rows: [
      { name: "Lux ger", price1: "₮500,000", price2: "₮600,000" },
      { name: "Lux room", price1: "₮400,000", price2: "₮500,000" },
      { name: "Standard single-bed room", price1: "₮300,000", price2: "₮400,000" },
      { name: "Standard bunk-bed room", price1: "₮200,000", price2: "₮300,000" },
    ],
  },
  {
    title: "Meals",
    rows: [
      { name: "Breakfast", price1: "Included" },
      { name: "Lunch", price1: "₮25,000" },
      { name: "Dinner", price1: "₮35,000" },
      { name: "Full board package", price1: "Discounted" },
    ],
  },
  {
    title: "Activities",
    rows: [
      { name: "Horseback riding (per hour)", price1: "₮30,000" },
      { name: "Guided historic site tour", price1: "₮50,000" },
      { name: "Game room, billiards, tennis, karaoke", price1: "Included" },
      { name: "Folk music evening (full-board guests)", price1: "Free" },
    ],
  },
  {
    title: "Transfers",
    rows: [
      { name: "Round-trip from Ulaanbaatar (up to 4 pax)", price1: "₮250,000" },
    ],
  },
];

const notes = [
  "Children aged 0–6 stay free with breakfast included. All other ages are charged at the listed rates.",
  "The price includes breakfast and additional services (game room, billiards, tennis, karaoke).",
  "Guests may not bring outside alcohol into the restaurant area. Loud noise is not permitted after 22:00 out of respect for other guests.",
  "Check-in is available after 14:00. On departure day, please return your key to reception by 12:00.",
];

export default function CampPrice() {
  return (
    <section className="bg-[#FAF6F1] py-16 lg:py-24">
      <div className="mx-auto max-w-[820px] px-6">
        {/* Title */}
        <div className="flex justify-center mb-16">
          <h2 className="border border-[#C8A24A]/60 px-12 py-4 font-elegant text-2xl md:text-3xl tracking-[0.35em] text-[#5A4A3A]">
            PRICE LIST
          </h2>
        </div>

        <div className="flex flex-col gap-14">
          {categories.map((category) => (
            <div key={category.title} className="flex gap-6 md:gap-10">
              {/* Vertical label */}
              <div className="flex items-start">
                <span className="bg-[#B08D57] text-white text-[11px] tracking-[0.3em] uppercase px-2.5 py-4 [writing-mode:vertical-rl] rotate-180">
                  {category.title}
                </span>
              </div>

              {/* Rows */}
              <div className="flex-1">
                {category.twoColumns && (
                  <div className="grid grid-cols-[1fr_auto_auto] gap-x-8 pb-3 mb-2 border-b border-[#C8A24A]/40 text-xs uppercase tracking-[0.15em] text-[#B08D57]">
                    <span />
                    <span className="text-right">1–2 people</span>
                    <span className="text-right">3–4 people</span>
                  </div>
                )}
                <div className="flex flex-col gap-4">
                  {category.rows.map((row) => (
                    <div
                      key={row.name}
                      className={`grid ${category.twoColumns ? "grid-cols-[1fr_auto_auto] gap-x-8" : "grid-cols-[1fr_auto] gap-x-8"} items-baseline`}
                    >
                      <span className="text-[15px] text-[#5A4A3A]">{row.name}</span>
                      <span className="text-[15px] font-medium text-[#5A4A3A] text-right">
                        {row.price1}
                      </span>
                      {category.twoColumns && (
                        <span className="text-[15px] font-medium text-[#5A4A3A] text-right">
                          {row.price2}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
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
