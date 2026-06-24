// src/app/home/section/FeaturedCategories.jsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";
import { categoryImages } from "@/data/images";

// Data kategori dengan gambar dari images.js
const categories = [
  {
    id: 1,
    name: "Batik Tulis",
    subtitle: "Handcrafted Heritage",
    description: "Premium hand-drawn batik by master artisans",
    image: categoryImages.batikTulis,
    href: "/catalog/batik-tulis",
    size: "large", // Takes 2 columns
  },
  {
    id: 2,
    name: "Wear Batik",
    subtitle: "Modern Silhouettes",
    description: "Contemporary designs with traditional roots",
    image: categoryImages.wearBatik,
    href: "/catalog/wear-batik",
    size: "small",
  },
  {
    id: 3,
    name: "Men",
    subtitle: "Gentleman's Edit",
    description: "Refined pieces for the modern man",
    image: categoryImages.pria,
    href: "/catalog/men",
    size: "small",
  },
  {
    id: 4,
    name: "Women",
    subtitle: "Elegance Redefined",
    description: "Sophisticated styles for every occasion",
    image: categoryImages.wanita,
    href: "/catalog/women",
    size: "large", // Takes 2 columns
  },
  {
    id: 5,
    name: "Accessories",
    subtitle: "Perfect Details",
    description: "Complete your look with curated accessories",
    image: categoryImages.accessories,
    href: "/catalog/accessories",
    size: "small",
  },
  {
    id: 6,
    name: "New Collection",
    subtitle: "Just Arrived",
    description: "Latest designs from our heritage collection",
    image: categoryImages.newCollection,
    href: "/catalog/new",
    size: "small",
  },
];

export default function FeaturedCategories() {
  return (
    <section className="py-16 md:py-24 bg-[#FCFAF8]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-[10px] sm:text-xs font-medium text-[#9C6644] tracking-[0.3em] uppercase mb-3">
            Explore Our Collections
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#1A1816] tracking-tight">
            Shop by{" "}
            <span className="font-normal italic text-[#9C6644]">Category</span>
          </h2>
        </div>

        {/* Grid Layout - LAYOUT BARU YANG LEBIH BAIK */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-12">
          <Link
            href="/catalog"
            className="inline-flex items-center gap-2 text-xs font-medium text-[#1A1816] tracking-[0.15em] uppercase hover:text-[#9C6644] transition-colors duration-300 group"
          >
            View All Collections
            <HiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
}

// Sub-component: Category Card
function CategoryCard({ category }) {
  const isLarge = category.size === "large";

  return (
    <Link
      href={category.href}
      className={`
        group relative overflow-hidden rounded-sm bg-[#F0EBE6]
        ${isLarge ? "md:col-span-2 aspect-[4/3] lg:aspect-[16/9]" : "aspect-[3/4]"}
      `}
    >
      {/* Image */}
      <Image
        src={category.image}
        alt={category.name}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        priority={category.id <= 2}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#1A1816]/90 via-[#1A1816]/40 to-transparent" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
        {/* Subtitle */}
        <p className="text-[10px] font-medium text-[#D4AF37] tracking-[0.2em] uppercase mb-2">
          {category.subtitle}
        </p>

        {/* Name */}
        <h3 className="text-xl md:text-2xl lg:text-3xl font-light text-white tracking-wide mb-2">
          {category.name}
        </h3>

        {/* Description - Only show on large cards */}
        {isLarge && (
          <p className="text-xs text-white/70 mb-4 max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            {category.description}
          </p>
        )}

        {/* Explore Button */}
        <div className="flex items-center gap-2 text-xs font-medium text-white tracking-[0.15em] uppercase group-hover:text-[#D4AF37] transition-colors duration-300">
          <span>Explore</span>
          <HiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
        </div>
      </div>

      {/* Decorative Border */}
      <div className="absolute inset-4 border border-white/0 group-hover:border-white/20 transition-all duration-500 pointer-events-none" />
    </Link>
  );
}