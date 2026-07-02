import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import ApolloClientProvider from "@/lib/apollo/provider";
import "../globals.css";

export const metadata: Metadata = {
  title: "Mongolian Secret History | Tours & Travel in Mongolia",
  description:
    "Authentic, immersive journeys across Mongolia. Group tours, private adventures, and tailor-made itineraries across the steppe, desert, and nomadic heartland.",
};

export function generateStaticParams() {
  return [{ locale: "mn" }, { locale: "en" }];
}

export default async function LocaleLayout({
  children,
  params,
}: LayoutProps<"/[locale]">) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html lang={locale} className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <NextIntlClientProvider messages={messages}>
          <ApolloClientProvider>{children}</ApolloClientProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
