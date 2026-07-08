export const regions = [
  { id: "western", slug: "western-region", nameKey: "westernRegion", fill: "#3B99D9" },
  { id: "khangai", slug: "khangai-region", nameKey: "khangaiRegion", fill: "#2ECC71" },
  { id: "central", slug: "central-region", nameKey: "centralRegion", fill: "#9B59B6" },
  { id: "southern", slug: "gobi-region", nameKey: "gobiRegion", fill: "#F39C12" },
  { id: "eastern", slug: "eastern-region", nameKey: "easternRegion", fill: "#1ABC9C" },
] as const;

export type RegionId = (typeof regions)[number]["id"];

export const regionBySlug = (slug: string) =>
  regions.find((r) => r.slug === slug);

export const regionById = (id: string) =>
  regions.find((r) => r.id === id);
