export const regions = [
  { id: "western", slug: "western-region", nameKey: "westernRegion", fill: "#123FAE", viewBox: "0 90 675 675" },
  { id: "khangai", slug: "khangai-region", nameKey: "khangaiRegion", fill: "#4A7FE8", viewBox: "480 0 450 750" },
  { id: "central", slug: "central-region", nameKey: "centralRegion", fill: "#0A2C7A", viewBox: "860 120 300 340" },
  { id: "southern", slug: "gobi-region", nameKey: "gobiRegion", fill: "#C8A24A", viewBox: "620 380 700 440" },
  { id: "eastern", slug: "eastern-region", nameKey: "easternRegion", fill: "#6B9BFF", viewBox: "1100 135 650 480" },
] as const;

export type RegionId = (typeof regions)[number]["id"];

export const regionBySlug = (slug: string) =>
  regions.find((r) => r.slug === slug);

export const regionById = (id: string) =>
  regions.find((r) => r.id === id);
