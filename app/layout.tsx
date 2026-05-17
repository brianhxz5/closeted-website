import type { Metadata } from "next";
import { Inter, Space_Mono, Newsreader } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  weight: ["400", "700"],
  subsets: ["latin"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  weight: ["400", "600"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "closeted — find your style",
  description:
    "you know what you like. you just can't say it yet. closeted finds your taste in everything that keeps pulling you back.",
  openGraph: {
    title: "closeted",
    description: "style discovery, without the gatekeeping.",
    siteName: "closeted",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceMono.variable} ${newsreader.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
