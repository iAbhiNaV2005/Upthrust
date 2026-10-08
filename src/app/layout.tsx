import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat, Anton } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  style: ["normal", "italic"],
});

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Upthrust — Bold Design That Performs",
  description: "Identity, Experience, Motion. Strategy is cheaper, comfortable is expensive.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} ${anton.variable}`}
    >
      <body className="antialiased selection:bg-[#FF3B00] selection:text-white">{children}</body>
    </html>
  );
}
