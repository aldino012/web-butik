"use client";

import Image from "next/image";
import Button from "@/components/Button";
import { HiOutlineSparkles } from "react-icons/hi2";
import { lifestyleImages, textureImages } from "@/data/images";

export default function HeritageStory() {
  return (
    <section className="py-20 md:py-32 bg-[#F0EBE6] overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* LEFT: Images Composition (5 columns) */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] max-w-md mx-auto lg:mx-0">
              {/* Main Large Image */}
              <div className="relative w-full h-full rounded-sm overflow-hidden shadow-2xl shadow-[#1A1816]/20">
                <Image
                  src={lifestyleImages[0]}
                  alt="Batik Craftsman at Work"
                  fill
                  sizes="(max-width: 1024px) 80vw, 40vw"
                  className="object-cover"
                  priority
                />
              </div>

              {/* Small Overlapping Image (Bottom Right) */}
              <div className="absolute -bottom-8 -right-8 w-40 h-48 md:w-48 md:h-56 rounded-sm overflow-hidden shadow-xl border-4 border-[#F0EBE6] hidden sm:block">
                <Image
                  src={textureImages[0]}
                  alt="Batik Texture Detail"
                  fill
                  sizes="200px"
                  className="object-cover"
                />
              </div>

              {/* Decorative Number (Editorial Style) */}
              <div className="absolute -top-6 -left-6 text-8xl md:text-9xl font-light text-[#9C6644]/20 leading-none select-none pointer-events-none">
                01
              </div>
            </div>
          </div>

          {/* RIGHT: Editorial Content (7 columns) */}
          <div className="lg:col-span-7 lg:pl-8">
            {/* Eyebrow with Icon */}
            <div className="flex items-center gap-3 mb-6">
              <HiOutlineSparkles className="w-4 h-4 text-[#9C6644]" />
              <p className="text-[10px] sm:text-xs font-medium text-[#9C6644] tracking-[0.3em] uppercase">
                Our Heritage
              </p>
            </div>

            {/* Main Title - Editorial Typography */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#1A1816] tracking-tight leading-[1.1] mb-8">
              Where Tradition <br />
              Meets{" "}
              <span className="italic font-normal text-[#9C6644]">
                Contemporary
              </span>{" "}
              <br />
              Elegance
            </h2>

            {/* Story Paragraph */}
            <div className="space-y-5 text-sm md:text-base text-[#1A1816]/70 leading-relaxed max-w-xl mb-8">
              <p>
                For centuries, Indonesian batik has been more than just fabric —
                it is a
                <span className="text-[#1A1816] font-medium">
                  {" "}
                  canvas of stories
                </span>
                , a language of symbols passed down through generations of
                master artisans.
              </p>
              <p>
                At Maison Batik, we honor this legacy by collaborating with
                heritage craftsmen from Solo, Yogyakarta, and Pekalongan. Each
                piece in our collection is meticulously hand-drawn using
                traditional <em>canting</em> techniques, then reimagined with
                modern silhouettes for today's discerning wardrobe.
              </p>
            </div>

            {/* Quote / Testimony */}
            <blockquote className="border-l-2 border-[#D4AF37] pl-6 mb-10 max-w-lg">
              <p className="text-base md:text-lg italic text-[#1A1816] font-light leading-relaxed mb-2">
                "Every stroke of the canting carries the soul of Java, every
                color tells a story of the earth."
              </p>
              <footer className="text-xs text-[#9C6644] tracking-[0.15em] uppercase">
                — Master Batik Artisan, Solo
              </footer>
            </blockquote>

            {/* Stats / Highlights */}
            <div className="grid grid-cols-3 gap-6 mb-10 max-w-lg border-t border-b border-[#1A1816]/10 py-6">
              <div>
                <p className="text-2xl md:text-3xl font-light text-[#1A1816] mb-1">
                  25+
                </p>
                <p className="text-[10px] text-[#1A1816]/60 tracking-[0.15em] uppercase">
                  Master Artisans
                </p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-light text-[#1A1816] mb-1">
                  100%
                </p>
                <p className="text-[10px] text-[#1A1816]/60 tracking-[0.15em] uppercase">
                  Handcrafted
                </p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-light text-[#1A1816] mb-1">
                  500+
                </p>
                <p className="text-[10px] text-[#1A1816]/60 tracking-[0.15em] uppercase">
                  Unique Pieces
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <Button variant="secondary" size="lg" href="/about">
              Discover Our Story
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
