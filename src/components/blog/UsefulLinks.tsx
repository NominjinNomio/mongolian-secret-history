"use client";

import { ArrowUpRight, Plane } from "lucide-react";

const embassyLinks = [
  { icon: "🇺🇸", title: "US Embassy", url: "https://mn.usembassy.gov" },
  { icon: "🇦🇺", title: "Australian Embassy", url: "https://www.dfat.gov.au" },
  { icon: "🇬🇧", title: "UK Embassy", url: "https://www.gov.uk/world/organisations/british-embassy-ulaanbaatar" },
];

const infoLinks = [
  { icon: "🌍", title: "Tourism Association", url: "https://www.travelmongolia.org", label: "Official Website" },
  { icon: "🇬🇧", title: "UK Travel Advice", url: "https://www.gov.uk/foreign-travel-advice/mongolia", label: "GOV.UK" },
];

const airlines = [
  { name: "MIAT", url: "https://www.miat.com" },
  { name: "Aero Mongolia", url: "https://www.aeromongolia.mn" },
  { name: "Hunnu Air", url: "https://www.hunnuair.com" },
];

function LinkCard({
  icon,
  title,
  url,
  label,
}: {
  icon: string | React.ReactNode;
  title: string;
  url: string;
  label?: React.ReactNode;
}) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col justify-between h-full min-h-[120px] rounded-2xl bg-[#F7F7F7] p-5 lg:p-6 transition-shadow hover:shadow-[0_4px_20px_rgba(0,0,0,0.10)]"
    >
      <div className="flex items-center gap-2.5">
        <span className="text-xl leading-none">{icon}</span>
        <span className="font-sans font-bold text-[17px] lg:text-[18px] text-foreground">
          {title}
        </span>
      </div>
      <div className="flex items-center gap-1 text-[14px] lg:text-[15px] text-blue-600 mt-4">
        <span className="group-hover:underline">{label ?? "Official Website"}</span>
        <ArrowUpRight className="w-3.5 h-3.5" />
      </div>
    </a>
  );
}

export default function UsefulLinks() {
  return (
    <section className="bg-white py-20 lg:py-[120px]">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-0">
        <hr className="border-border mb-14" />

        <h2 className="font-display text-center text-3xl md:text-4xl lg:text-[36px] leading-[1.15] mb-12">
          Useful Links
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-7">
          {embassyLinks.map((link) => (
            <LinkCard key={link.url} icon={link.icon} title={link.title} url={link.url} />
          ))}

          {infoLinks.map((link) => (
            <LinkCard
              key={link.url}
              icon={link.icon}
              title={link.title}
              url={link.url}
              label={link.label}
            />
          ))}

          <div className="flex flex-col justify-between h-full min-h-[120px] rounded-2xl bg-[#F7F7F7] p-5 lg:p-6 transition-shadow hover:shadow-[0_4px_20px_rgba(0,0,0,0.10)]">
            <div className="flex items-center gap-2.5">
              <Plane className="w-5 h-5 text-foreground" />
              <span className="font-sans font-bold text-[17px] lg:text-[18px] text-foreground">
                Airlines
              </span>
            </div>
            <div className="flex flex-col gap-1 mt-4">
              {airlines.map((airline) => (
                <a
                  key={airline.url}
                  href={airline.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[14px] lg:text-[15px] text-blue-600 hover:underline"
                >
                  {airline.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        <p className="mt-10 text-center text-sm text-muted-foreground">
          Official resources that may be helpful before and during your visit to Mongolia.
        </p>
      </div>
    </section>
  );
}
