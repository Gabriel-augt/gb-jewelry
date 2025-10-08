import type { Metadata } from "next";
import { EB_Garamond, Inter, Cormorant_Upright } from "next/font/google";
import "./globals.css";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${garamond.variable} ${inter.variable}`}>
        {children}
      </body>
    </html>
  );
}
