import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "FitElite Chennai | Transform Your Body. Transform Your Life.",
  description:
    "Chennai's premier fitness destination. Expert certified trainers, modern equipment, and result-driven programs. Start your 3-day free trial today.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.variable} font-outfit antialiased bg-[#0B0B0B] text-white`}
      >
        {children}
      </body>
    </html>
  );
}
