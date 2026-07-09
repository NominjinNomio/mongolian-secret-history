"use client";

import { ExternalLink } from "lucide-react";

const links = [
  { label: "U.S. Embassy in Mongolia", url: "https://mn.usembassy.gov" },
  { label: "UK Embassy in Mongolia", url: "https://www.gov.uk/world/organisations/british-embassy-ulaanbaatar" },
  { label: "Australian Consulate in Mongolia", url: "https://www.dfat.gov.au" },
  { label: "Mongolian Tourism Association", url: "https://www.travelmongolia.org" },
  { label: "UK Travel Advice for Mongolia", url: "https://www.gov.uk/foreign-travel-advice/mongolia" },
  { label: "MIAT Mongolian Airlines", url: "https://www.miat.com" },
  { label: "Aero Mongolia", url: "https://www.aeromongolia.mn" },
  { label: "Hunnu Air", url: "https://www.hunnuair.com" },
];

export default function UsefulLinks() {
  return (
    <section className="bg-white py-20 lg:py-[120px]">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-0">
        <hr className="border-border mb-14" />

        <h2 className="font-display text-3xl md:text-[44px] leading-[1.15] mb-10">
          Useful Links
        </h2>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3">
          {links.map((link) => (
            <li key={link.url} className="flex items-start gap-2">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[15px] text-blue-600 hover:text-blue-700 hover:underline flex items-center gap-1"
              >
                {link.label}
                <ExternalLink className="w-3.5 h-3.5 text-muted-foreground" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
