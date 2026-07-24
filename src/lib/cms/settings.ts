import { getCmsPage } from "@/lib/cms/page";

export interface SiteSettings {
  address: string;
  phone: string;
  email: string;
  hours: string;
  brandText: string;
  social: {
    facebook?: string;
    x?: string;
    youtube?: string;
    pinterest?: string;
  };
}

export const defaultSettings: SiteSettings = {
  address: "Akuma center and Workers street, Ulaanbaatar",
  phone: "+976 70000450",
  email: "info@mongoliansecrethistory.mn",
  hours: "Mon–Fri, 9:00 AM – 6:00 PM (GMT+8)",
  brandText:
    "Authentic Mongolian heritage, timeless cuisine, and warm hospitality in an elegant setting.",
  social: {
    facebook: "https://www.facebook.com/mongoliansecrethistory/",
    x: "https://twitter.com/MSHTravel",
    youtube: "https://www.youtube.com/user/Monsecrethistory",
    pinterest: "https://gb.pinterest.com/travelmongolia/",
  },
};

export async function getSiteSettings(locale: string): Promise<SiteSettings> {
  try {
    const page = await getCmsPage(locale, "settings");
    if (!page?.content) return defaultSettings;
    const parsed = JSON.parse(page.content) as Partial<SiteSettings>;
    return {
      ...defaultSettings,
      ...parsed,
      social: { ...defaultSettings.social, ...parsed.social },
    };
  } catch {
    return defaultSettings;
  }
}
