"use client";

import Image from "next/image";
import Button from "@/components/Button";
import { lifestyleImages } from "@/data/images";

export default function EditorialBanner() {
  return (
    <section className="relative w-full h-[80vh] min-h-[500px] overflow-hidden group">
      {/* Background Image with Cinematic Slow-Zoom */}
      <div className="absolute inset-0">
        <Image
          src={lifestyleImages[2]} // Gambar lifestyle/model yang elegan
          alt="Editorial Fashion Shoot"
          fill
          sizes="100vw"
          className="object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-105"
          priority={false}
        />
      </div>

      {/* Dark Gradient Overlay for Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#1A1816]/90 via-[#1A1816]/40 to-[#1A1816]/20" />

      {/* Content Container */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-3xl mx-auto flex flex-col items-center gap-6">
          {/* Eyebrow */}
          <p className="text-[10px] sm:text-xs font-medium text-[#D4AF37] tracking-[0.3em] uppercase">
            The Editorial
          </p>

          {/* Main Title - High Fashion Typography */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-white tracking-tight leading-[1.1]">
            Wear Your{" "}
            <span className="italic font-normal text-[#D4AF37]">Story</span>
          </h2>

          {/* Description */}
          <p className="text-sm md:text-base text-white/80 leading-relaxed max-w-xl">
            Fashion is more than fabric; it is an expression of identity.
            Discover pieces that resonate with your personal narrative and
            heritage.
          </p>

          {/* CTA Button (Adapted for Dark Background) */}
          <div className="mt-4">
            <Button
              variant="secondary"
              size="lg"
              href="/catalog/editorial"
              // Custom override agar tombol terlihat menonjol di atas background gelap
              className="border-white text-white hover:bg-white hover:text-[#1A1816]"
            >
              View The Collection
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
