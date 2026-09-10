import type { Metadata } from "next";
// Import Plus Jakarta Sans dari Google Fonts
import { Plus_Jakarta_Sans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta", 
  display: 'swap',
});

const clashDisplay = localFont({
  src: "./fonts/ClashDisplay-Variable.woff2", 
  variable: "--font-clash-display", 
  display: 'swap',
});

export const metadata: Metadata = {
  title: "ThorWorks | Creative Designer & Fullstack Developer",
  description: "Cinematic Visuals backed by Robust Code. Portfolio of Nazheef Thareq Asywal.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Masukkan variabel font baru ke dalam tag html
    <html lang="en" className={`${plusJakarta.variable} ${clashDisplay.variable}`}>
      <body className="antialiased selection:bg-brand-white selection:text-brand-black">
        <Navbar />
        <div className="pt-24">
          {children}
        </div>
      </body>
    </html>
  );
}