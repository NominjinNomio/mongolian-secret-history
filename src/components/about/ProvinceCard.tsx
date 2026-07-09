"use client";

import { useTranslations } from "next-intl";
import { MapPin, Compass, Route } from "lucide-react";
import { Province } from "@/lib/provinces";

interface ProvinceCardProps {
  province: Province;
}

export default function ProvinceCard({ province }: ProvinceCardProps) {
  const t = useTranslations("about");

  return (
    <div className="bg-[#F8F6F1] rounded-2xl p-7 md:p-8">
      <h3 className="font-display text-2xl md:text-3xl text-foreground">
        {province.name} {province.mnName ? `(${province.mnName})` : ""}
      </h3>
      <p className="text-[15px] md:text-[17px] text-muted-foreground mt-3 leading-relaxed">
        {province.description}
      </p>

      {province.topAttractions && province.topAttractions.length > 0 && (
        <div className="mt-6">
          <div className="flex items-center gap-2 text-primary-dark font-semibold">
            <MapPin className="w-4 h-4" />
            <span>{t("topAttractions")}</span>
          </div>
          <ul className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2">
            {province.topAttractions.map((attr) => (
              <li key={attr} className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                <span>{attr}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {province.popularTours && province.popularTours.length > 0 && (
        <div className="mt-6">
          <div className="flex items-center gap-2 text-primary-dark font-semibold">
            <Route className="w-4 h-4" />
            <span>{t("popularTours")}</span>
          </div>
          <ul className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2">
            {province.popularTours.map((tour) => (
              <li key={tour} className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                <span>{tour}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
