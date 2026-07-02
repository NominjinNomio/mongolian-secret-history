import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "mn", "zh"],
  defaultLocale: "en",
});
