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
    "you know what you like. you just don't know it yet. closeted finds your taste in everything that keeps pulling you back.",
  openGraph: {
    title: "closeted",
    description: "style discovery, without the gatekeeping.",
    siteName: "closeted",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "closeted",
    description: "style discovery, without the gatekeeping.",
    images: ["/og-image.png"],
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
