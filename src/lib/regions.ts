export const regions = [
  { id: "western", slug: "western-region", nameKey: "westernRegion", fill: "#3B99D9", viewBox: "0 90 675 675" },
  { id: "khangai", slug: "khangai-region", nameKey: "khangaiRegion", fill: "#2ECC71", viewBox: "480 0 450 750" },
  { id: "central", slug: "central-region", nameKey: "centralRegion", fill: "#9B59B6", viewBox: "860 120 300 340" },
  { id: "southern", slug: "gobi-region", nameKey: "gobiRegion", fill: "#F39C12", viewBox: "620 380 700 440" },
  { id: "eastern", slug: "eastern-region", nameKey: "easternRegion", fill: "#1ABC9C", viewBox: "1100 135 650 480" },
] as const;

export type RegionId = (typeof regions)[number]["id"];

export const regionBySlug = (slug: string) =>
  regions.find((r) => r.slug === slug);

export const regionById = (id: string) =>
  regions.find((r) => r.id === id);
