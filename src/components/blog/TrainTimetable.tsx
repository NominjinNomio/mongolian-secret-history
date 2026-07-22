import { TrainFront, Info } from "lucide-react";

interface Stop {
  station: string;
  arrive: string;
  depart: string;
  km: string;
}

interface Route {
  train: string;
  title: string;
  days: string;
  stops: Stop[];
}

const routes: Route[] = [
  {
    train: "003",
    title: "Beijing → Moscow (transfer onwards from Novosibirsk)",
    days: "Departs Thursday",
    stops: [
      { station: "Beijing", arrive: "—", depart: "07:27", km: "0" },
      { station: "Jining South (Ulangab)", arrive: "15:27", depart: "15:43", km: "503" },
      { station: "Erlian / Erenhot", arrive: "20:18", depart: "00:59", km: "833" },
      { station: "Zamyn Uud", arrive: "01:25", depart: "02:40", km: "839" },
      { station: "Sainshand", arrive: "06:15", depart: "06:50", km: "1074" },
      { station: "Choir", arrive: "10:13", depart: "10:30", km: "1301" },
      { station: "Ulaanbaatar", arrive: "14:35", depart: "15:22", km: "1547" },
      { station: "Darkhan", arrive: "19:54", depart: "20:24", km: "1827" },
      { station: "Sukhbaatar", arrive: "21:50", depart: "23:29", km: "1943" },
      { station: "Irkutsk", arrive: "09:52", depart: "10:22", km: "2666" },
      { station: "Novosibirsk", arrive: "15:51", depart: "16:09", km: "4514" },
    ],
  },
  {
    train: "004",
    title: "Moscow → Beijing",
    days: "Departs Sunday",
    stops: [
      { station: "Moscow", arrive: "—", depart: "23:55", km: "0" },
      { station: "Irkutsk", arrive: "02:50", depart: "03:20", km: "5153" },
      { station: "Ulan Ude", arrive: "10:02", depart: "10:47", km: "5609" },
      { station: "Sukhbaatar", arrive: "22:29", depart: "00:14", km: "5892" },
      { station: "Darkhan", arrive: "01:41", depart: "01:54", km: "5991" },
      { station: "Ulaanbaatar", arrive: "06:50", depart: "07:30", km: "6271" },
      { station: "Choir", arrive: "11:22", depart: "11:37", km: "6518" },
      { station: "Sainshand", arrive: "14:49", depart: "15:20", km: "6745" },
      { station: "Zamyn Uud", arrive: "18:50", depart: "20:35", km: "6980" },
      { station: "Erlian / Erenhot", arrive: "21:00", depart: "02:00", km: "6986" },
      { station: "Jining South (Ulangab)", arrive: "06:37", depart: "06:55", km: "7318" },
      { station: "Beijing", arrive: "14:35", depart: "—", km: "7817" },
    ],
  },
  {
    train: "005",
    title: "Ulaanbaatar → Moscow",
    days: "Departs Tuesday and Wednesday",
    stops: [
      { station: "Ulaanbaatar", arrive: "—", depart: "15:22", km: "0" },
      { station: "Zuunkharaa", arrive: "17:59", depart: "18:14", km: "171" },
      { station: "Darkhan", arrive: "19:54", depart: "20:24", km: "280" },
      { station: "Sukhbaatar", arrive: "21:50", depart: "23:29", km: "379" },
      { station: "Naushki", arrive: "19:14", depart: "21:04", km: "402" },
      { station: "Irkutsk", arrive: "09:52", depart: "10:22", km: "1114" },
      { station: "Novosibirsk", arrive: "15:51", depart: "16:09", km: "2962" },
      { station: "Ekaterinburg", arrive: "11:28", depart: "11:58", km: "4487" },
    ],
  },
  {
    train: "022",
    title: "Ulaanbaatar → Erenhot / Erlian",
    days: "Departs Sunday, Tuesday and Thursday",
    stops: [
      { station: "Ulaanbaatar", arrive: "—", depart: "20:45", km: "0" },
      { station: "Choir", arrive: "00:55", depart: "01:13", km: "247" },
      { station: "Sainshand", arrive: "04:26", depart: "04:56", km: "474" },
      { station: "Zamyn Uud", arrive: "08:30", depart: "10:00", km: "709" },
      { station: "Erlian / Erenhot", arrive: "10:25", depart: "—", km: "715" },
    ],
  },
  {
    train: "024",
    title: "Ulaanbaatar → Beijing",
    days: "Mongolian train departs Tuesday and Saturday · Chinese train departs Thursday",
    stops: [
      { station: "Ulaanbaatar", arrive: "—", depart: "07:30", km: "0" },
      { station: "Choir", arrive: "11:22", depart: "11:37", km: "247" },
      { station: "Sainshand", arrive: "14:49", depart: "15:20", km: "474" },
      { station: "Zamyn Uud", arrive: "18:50", depart: "20:35", km: "709" },
      { station: "Erlian / Erenhot", arrive: "21:00", depart: "02:00", km: "715" },
      { station: "Jining South (Ulangab)", arrive: "06:37", depart: "06:55", km: "1053" },
      { station: "Beijing", arrive: "14:34", depart: "—", km: "1427" },
    ],
  },
  {
    train: "014",
    title: "Ulaanbaatar → Hohhot",
    days: "Mongolian train departs Friday · Chinese train departs Monday",
    stops: [
      { station: "Ulaanbaatar", arrive: "—", depart: "20:45", km: "0" },
      { station: "Choir", arrive: "00:55", depart: "01:13", km: "247" },
      { station: "Sainshand", arrive: "04:26", depart: "04:56", km: "474" },
      { station: "Zamyn Uud", arrive: "08:30", depart: "10:00", km: "709" },
      { station: "Erlian / Erenhot", arrive: "10:25", depart: "13:45", km: "715" },
      { station: "Jining South (Ulangab)", arrive: "19:28", depart: "19:53", km: "1047" },
      { station: "Hohhot", arrive: "21:39", depart: "—", km: "1205" },
    ],
  },
  {
    train: "305",
    title: "Ulaanbaatar → Irkutsk",
    days: "Mongolian train departs Sunday · Russian train departs Tuesday and Saturday",
    stops: [
      { station: "Ulaanbaatar", arrive: "—", depart: "15:22", km: "0" },
      { station: "Zuunkharaa", arrive: "17:59", depart: "18:14", km: "171" },
      { station: "Darkhan", arrive: "19:54", depart: "20:24", km: "280" },
      { station: "Sukhbaatar", arrive: "21:50", depart: "23:29", km: "379" },
      { station: "Naushki", arrive: "19:14", depart: "21:04", km: "402" },
      { station: "Ulan Ude", arrive: "01:20", depart: "02:05", km: "657" },
      { station: "Irkutsk", arrive: "09:52", depart: "—", km: "1114" },
    ],
  },
];

export default function TrainTimetable() {
  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-[900px] px-6">
        {/* Intro note */}
        <div className="flex items-start gap-4 rounded-2xl bg-primary-light border border-primary/20 p-6 mb-12">
          <Info size={22} className="text-primary shrink-0 mt-0.5" />
          <p className="text-sm leading-relaxed text-primary-dark">
            Source: eticket.ubtz.mn — times are correct as of September 2019. You can
            purchase tickets directly from the ticket office, but if you would prefer
            us to pick them up on your behalf just let us know and we can do so for a
            small fee. We can also post them to you by secure delivery for an
            additional charge.
          </p>
        </div>

        {/* Route cards */}
        <div className="flex flex-col gap-10">
          {routes.map((route) => (
            <div
              key={route.train}
              className="rounded-[20px] bg-white border border-border overflow-hidden"
            >
              {/* Route header */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 bg-primary px-6 py-5">
                <span className="inline-flex items-center gap-2 rounded-full bg-gold px-4 py-1.5 text-sm font-bold text-white shrink-0">
                  <TrainFront size={16} />
                  Train {route.train}
                </span>
                <div>
                  <h3 className="font-display text-lg text-white leading-snug">
                    {route.title}
                  </h3>
                  <p className="text-xs text-white/75 mt-0.5">{route.days}</p>
                </div>
              </div>

              {/* Stops table */}
              <div className="grid grid-cols-[1fr_auto_auto_auto] gap-x-6 px-6 py-3 border-b border-border text-xs uppercase tracking-[0.12em] text-muted-foreground">
                <span>Station</span>
                <span className="text-right w-[64px]">Arrive</span>
                <span className="text-right w-[64px]">Depart</span>
                <span className="text-right w-[64px]">KM</span>
              </div>
              {route.stops.map((stop, i) => (
                <div
                  key={stop.station}
                  className={`grid grid-cols-[1fr_auto_auto_auto] gap-x-6 px-6 py-3 text-sm ${
                    i % 2 === 0 ? "bg-white" : "bg-[#F5F8FF]"
                  }`}
                >
                  <span className="text-foreground font-medium">{stop.station}</span>
                  <span className="text-right text-muted-foreground w-[64px]">{stop.arrive}</span>
                  <span className="text-right text-muted-foreground w-[64px]">{stop.depart}</span>
                  <span className="text-right text-foreground font-medium w-[64px]">{stop.km}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
