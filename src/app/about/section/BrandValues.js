// src/app/about/section/BrandValues.js
"use client";

import Image from "next/image";
import {
  HiSparkles,
  HiHandRaised,
  HiHeart,
  HiLightBulb,
} from "react-icons/hi2";
import { productImages } from "@/data/images";

// ✅ Helper function untuk mendapatkan gambar dengan aman
const getSafeImage = (index) => {
  const images = productImages.batikShirts;
  if (!images || images.length === 0) return null;
  return images[index % images.length]; // Modulo untuk wrap around
};

const brandValues = [
  {
    id: 1,
    icon: HiSparkles,
    title: "Authenticity",
    subtitle: "Warisan Asli Nusantara",
    description:
      "Setiap motif batik kami berasal dari warisan budaya yang telah berusia ratusan tahun. Kami tidak pernah mengkompromikan keaslian desain, memastikan setiap piece membawa jiwa dan cerita dari leluhur kita.",
    image: getSafeImage(8), // ✅ Menggunakan helper
    stats: "100% Traditional Motifs",
  },
  {
    id: 2,
    icon: HiHandRaised,
    title: "Craftsmanship",
    subtitle: "Ketangangan Tangan Maestro",
    description:
      "Dikerjakan oleh lebih dari 50 pengrajin master yang telah mendedikasikan hidup mereka untuk seni batik. Setiap piece membutuhkan waktu 2-3 bulan untuk diselesaikan dengan teknik canting tradisional.",
    image: getSafeImage(9),
    stats: "2-3 Months per Piece",
  },
  {
    id: 3,
    icon: HiHeart,
    title: "Sustainability",
    subtitle: "Ramah Lingkungan & Berkelanjutan",
    description:
      "Kami menggunakan pewarna alami dari tumbuhan lokal dan proses ramah lingkungan. Setiap pembelian mendukung penghidupan pengrajin lokal dan pelestarian hutan pewarna alami di Jawa.",
    image: getSafeImage(10),
    stats: "100% Natural Dyes",
  },
  {
    id: 4,
    icon: HiLightBulb,
    title: "Innovation",
    subtitle: "Tradisi Bertemu Modernitas",
    description:
      "Meski berakar pada tradisi, kami terus berinovasi dengan mengadaptasi motif klasik ke dalam desain kontemporer yang relevan dengan gaya hidup modern tanpa kehilangan esensi budaya.",
    image: getSafeImage(11),
    stats: "50+ Contemporary Designs",
  },
];

export default function BrandValues() {
  return (
    <section className="py-20 md:py-32 bg-[#FCFAF8] relative overflow-hidden">
      {/* Decorative Background Pattern */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-5 hidden lg:block">
        <svg
          className="w-full h-full text-[#9C6644]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="valuesPattern"
              x="0"
              y="0"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="30" cy="30" r="2" fill="currentColor" />
              <circle cx="5" cy="5" r="1" fill="currentColor" />
              <circle cx="55" cy="55" r="1" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#valuesPattern)" />
        </svg>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-px bg-[#9C6644]" />
            <p className="text-xs font-medium text-[#9C6644] tracking-[0.3em] uppercase">
              Our Philosophy
            </p>
            <div className="w-12 h-px bg-[#9C6644]" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#1A1816] mb-4">
            The Pillars of <span className="font-medium italic">Our Craft</span>
          </h2>
          <p className="text-sm md:text-base text-[#1A1816]/60 font-light leading-relaxed">
            Every piece we create is guided by four fundamental principles that
            define who we are and what we stand for. These values are woven into
            every thread of our batik.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto">
          {brandValues.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={value.id}
                className="group relative bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
              >
                <div className="grid grid-cols-1 lg:grid-cols-5">
                  {/* Image Side */}
                  <div
                    className={`lg:col-span-2 relative aspect-[4/3] lg:aspect-auto overflow-hidden ${index % 2 === 0 ? "lg:order-1" : "lg:order-2"}`}
                  >
                    {value.image && (
                      <Image
                        src={value.image}
                        alt={value.title}
                        width={400}
                        height={500}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A1816]/60 via-transparent to-transparent" />

                    {/* Stats Badge */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="bg-white/95 backdrop-blur-sm px-4 py-2 rounded-sm">
                        <p className="text-xs font-medium text-[#9C6644] uppercase tracking-wider">
                          {value.stats}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Content Side */}
                  <div
                    className={`lg:col-span-3 p-6 md:p-8 lg:p-10 ${index % 2 === 0 ? "lg:order-2" : "lg:order-1"}`}
                  >
                    {/* Icon & Number */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="w-14 h-14 rounded-sm bg-[#9C6644]/10 flex items-center justify-center group-hover:bg-[#9C6644] transition-colors duration-300">
                        <Icon className="w-7 h-7 text-[#9C6644] group-hover:text-[#FCFAF8] transition-colors duration-300" />
                      </div>
                      <span className="text-5xl font-light text-[#EAE5DF] group-hover:text-[#9C6644]/20 transition-colors duration-300">
                        0{value.id}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl md:text-3xl font-medium text-[#1A1816] mb-2">
                      {value.title}
                    </h3>
                    <p className="text-sm text-[#9C6644] font-light italic mb-4">
                      {value.subtitle}
                    </p>

                    {/* Description */}
                    <p className="text-sm md:text-base text-[#1A1816]/70 font-light leading-relaxed">
                      {value.description}
                    </p>

                    {/* Decorative Line */}
                    <div className="mt-6 w-12 h-px bg-[#9C6644]/30 group-hover:w-24 transition-all duration-500" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Quote */}
        <div className="mt-20 md:mt-32 text-center max-w-3xl mx-auto">
          <div className="text-6xl text-[#9C6644]/20 font-serif leading-none mb-4">
            "
          </div>
          <blockquote className="text-xl md:text-2xl font-light text-[#1A1816] leading-relaxed italic mb-6">
            Batik is not just fabric; it is a language of symbols, a testament
            to patience, and a bridge between generations.
          </blockquote>
          <div className="flex items-center justify-center gap-3">
            <div className="w-8 h-px bg-[#9C6644]" />
            <p className="text-xs text-[#9C6644] tracking-[0.2em] uppercase font-medium">
              Our Founding Principle
            </p>
            <div className="w-8 h-px bg-[#9C6644]" />
          </div>
        </div>
      </div>
    </section>
  );
}