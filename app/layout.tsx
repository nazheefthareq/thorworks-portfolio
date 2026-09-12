import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"; // 1. Import Footer

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
    <html lang="en" className={`${plusJakarta.variable} ${clashDisplay.variable}`}>
      {/* 2. Tambahkan flex, flex-col, dan min-h-screen pada body */}
      <body className="antialiased selection:bg-brand-white selection:text-brand-black flex flex-col min-h-screen">
        <Navbar />
        
        {/* 3. Bungkus children dengan flex-grow agar mendorong footer ke bawah */}
        <div className="pt-24 flex-grow">
          {children}
        </div>

        {/* 4. Render Footer di paling bawah */}
        <Footer />
      </body>
    </html>
  );
}