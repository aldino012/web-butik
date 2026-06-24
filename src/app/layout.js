// src/app/layout.js
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Maison Batik - Premium Heritage Fashion",
  description:
    "Discover the perfect blend of traditional craftsmanship and modern elegance.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased bg-[#FCFAF8] text-[#1A1816] flex flex-col min-h-screen">
        {/* Navbar - Selalu Solid */}
        <Navbar />

        <main className="flex-grow pt-16 lg:pt-20">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
