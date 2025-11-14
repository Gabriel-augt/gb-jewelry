import type { Metadata } from "next";
import { EB_Garamond, Inter, Cormorant_Upright } from "next/font/google";
import "./globals.css";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { NextIntlClientProvider, hasLocale } from "next-intl";

const cormorant = Cormorant_Upright({
  subsets: ["latin"],
  weight: ["300", "400","500","600","700"],
  variable: "--font-cormorant-upright",
});

const garamond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400","500","600","700","800"],
  variable: "--font-eb-garamond",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["100","200","300","400","500","600","700","800","900"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "GB Jewelry",
  description: "Jewelry website",
  icons: {
    icon: "/gb.png",
  },
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);

  return (
    <html lang={locale}>
      <body className={`${cormorant.variable} ${garamond.variable} ${inter.variable}`}>
          <NextIntlClientProvider>
            {children}
          </NextIntlClientProvider>
      </body>
    </html>
  );
}
