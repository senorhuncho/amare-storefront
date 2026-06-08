import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";

import "./globals.css";

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-amare-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const manrope = Manrope({
  variable: "--font-amare-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "AMARÉ Cosmetics | Soft Shine. Strong Presence.",
  description:
    "Discover AMARÉ lip glosses, oils, liners, lip care and giftable beauty sets designed for effortless everyday shine.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorantGaramond.variable} ${manrope.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-ivory text-espresso font-sans">
        <div className="flex min-h-full flex-col">{children}</div>
      </body>
    </html>
  );
}
