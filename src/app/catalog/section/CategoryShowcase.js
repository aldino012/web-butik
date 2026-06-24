"use client";

import Image from "next/image";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";
import { categoryImages } from "@/data/images";

// Data showcase kategori
const showcaseCategories = [
  {
    id: "batik-tulis",
    name: "Batik Tulis",
    subtitle: "Heritage Collection",
    description: "Authentic hand-drawn motifs by master artisans.",
    image: categoryImages.batikTulis,
    href: "/catalog/batik-tulis",
  },
  {
    id: "modern-wear",
    name: "Modern Wear",
    subtitle: "Contemporary Edit",
    description: "Fusion of traditional patterns with modern silhouettes.",
    image: categoryImages.wearBatik,
    href: "/catalog/wear-batik",
  },
  {
    id: "accessories",
    name: "Accessories",
    subtitle: "Finishing Touches",
    description: "Curated details to complete your elegant look.",
    image: categoryImages.accessories,
    href: "/catalog/accessories",
  },
];

export default function CategoryShowcase() {
  return (
    <section className="py-16 md:py-24 bg-[#F9F7F4]">
      {" "}
      {/* Warna sedikit lebih gelap dari background utama untuk kontras halus */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-[10px] sm:text-xs font-medium text-[#9C6644] tracking-[0.3em] uppercase mb-3">
            Curated For You
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#1A1816] tracking-tight">
            Explore More{" "}
            <span className="font-normal italic text-[#9C6644]">
              Collections
            </span>
          </h2>
        </div>

        {/* Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {showcaseCategories.map((category) => (
            <Link
              key={category.id}
              href={category.href}
              className="group relative block aspect-[4/5] overflow-hidden rounded-sm bg-[#F0EBE6]"
            >
              {/* Image */}
              <Image
                src={category.image}
                alt={category.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1816]/90 via-[#1A1816]/30 to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                {/* Subtitle */}
                <p className="text-[10px] font-medium text-[#D4AF37] tracking-[0.2em] uppercase mb-2">
                  {category.subtitle}
                </p>

                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-light text-white tracking-wide mb-2">
                  {category.name}
                </h3>

                {/* Description (Reveal on Hover) */}
                <p className="text-xs text-white/70 leading-relaxed mb-4 max-w-xs opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  {category.description}
                </p>

                {/* Explore Link */}
                <div className="flex items-center gap-2 text-xs font-medium text-white tracking-[0.15em] uppercase group-hover:text-[#D4AF37] transition-colors duration-300">
                  <span>Shop Now</span>
                  <HiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>

              {/* Decorative Border (Reveal on Hover) */}
              <div className="absolute inset-4 border border-white/0 group-hover:border-white/20 transition-all duration-500 pointer-events-none rounded-sm" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
