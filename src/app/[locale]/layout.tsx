import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import ApolloClientProvider from "@/lib/apollo/provider";
import ThemeProvider from "@/components/common/ThemeProvider";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "../globals.css";

export const metadata: Metadata = {
  title: "Mongolian Secret History Restaurant | Authentic Mongolian Cuisine",
  description:
    "Experience authentic Mongolian cuisine in an elegant setting. Premium dining inspired by centuries of heritage, tradition, and the timeless flavors of the steppe.",
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

  return (
    <html lang={locale} className="h-full antialiased" suppressHydrationWarning>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <NextIntlClientProvider messages={messages}>
          <ApolloClientProvider>
            <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
            </ThemeProvider>
          </ApolloClientProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
