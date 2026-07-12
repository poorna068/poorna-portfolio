import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Poorna Chandrika Velikinti — Frontend Developer",
  description:
    "Frontend Developer specializing in React.js, React Native and Next.js — building offline-first, accessible, high-performance apps used by 50,000+ people.",
  openGraph: {
    title: "Poorna Chandrika Velikinti — Frontend Developer",
    description:
      "3+ years building production-grade React, React Native and Next.js apps for 50,000+ users across EdTech and ecommerce.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-bg text-text antialiased">{children}</body>
    </html>
  );
}
