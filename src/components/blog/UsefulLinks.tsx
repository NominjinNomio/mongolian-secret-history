"use client";

import { ArrowUpRight, Globe, Plane } from "lucide-react";

const links = [
  { icon: "🇺🇸", title: "U.S. Embassy in Mongolia", url: "https://mn.usembassy.gov" },
  { icon: "🇬🇧", title: "UK Embassy in Mongolia", url: "https://www.gov.uk/world/organisations/british-embassy-ulaanbaatar" },
  { icon: "🇦🇺", title: "Australian Consulate in Mongolia", url: "https://www.dfat.gov.au" },
  { icon: "🌍", title: "Mongolian Tourism Association", url: "https://www.travelmongolia.org" },
  { icon: "🌐", title: "UK Travel Advice for Mongolia", url: "https://www.gov.uk/foreign-travel-advice/mongolia" },
  { icon: "✈", title: "MIAT Mongolian Airlines", url: "https://www.miat.com" },
  { icon: "✈", title: "Aero Mongolia", url: "https://www.aeromongolia.mn" },
  { icon: "✈", title: "Hunnu Air", url: "https://www.hunnuair.com" },
];

export default function UsefulLinks() {
  return (
    <section className="bg-white py-20 lg:py-[120px]">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-0">
        <hr className="border-border mb-14" />

        <h2 className="font-display text-center text-3xl md:text-4xl lg:text-[36px] leading-[1.15] mb-12">
          Useful Links
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-7">
          {links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start justify-between gap-4 rounded-2xl bg-[#F7F7F7] p-6 lg:p-7 transition-shadow hover:shadow-[0_4px_20px_rgba(0,0,0,0.10)]"
            >
              <div className="flex items-start gap-4">
                <span className="text-2xl leading-none mt-0.5">{link.icon}</span>
                <div className="flex flex-col gap-1">
                  <span className="font-sans font-bold text-[18px] lg:text-[20px] text-foreground leading-tight">
                    {link.title}
                  </span>
                  <span className="text-[14px] lg:text-[15px] text-blue-600 group-hover:text-blue-700 group-hover:underline break-all">
                    {link.url}
                  </span>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-1 transition-colors group-hover:text-foreground" />
            </a>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-muted-foreground">
          Official resources that may be helpful before and during your visit to Mongolia.
        </p>
      </div>
    </section>
  );
}
