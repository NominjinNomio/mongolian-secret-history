import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import ApolloClientProvider from "@/lib/apollo/provider";
import { getCmsMenus } from "@/lib/cms/menus";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "../globals.css";

export const metadata: Metadata = {
  title: "Mongolian Secret History | Tours & Travel in Mongolia",
  description:
    "Authentic, immersive journeys across Mongolia. Group tours, private adventures, and tailor-made itineraries across the steppe, desert, and nomadic heartland.",
};

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "mn" }];
}

export default async function LocaleLayout({
  children,
  params,
}: LayoutProps<"/[locale]">) {
  const { locale } = await params;
  const messages = await getMessages();
  const { header, footer } = await getCmsMenus(locale);

  return (
    <html lang={locale} className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <NextIntlClientProvider messages={messages}>
          <ApolloClientProvider>
            <Header navItems={header} />
            <main className="flex-1">{children}</main>
            <Footer />
          </ApolloClientProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
