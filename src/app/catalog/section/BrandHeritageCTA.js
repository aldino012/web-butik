"use client";

import Image from "next/image";
import Button from "@/components/Button";
import {
  HiArrowRight,
  HiOutlineSparkles,
  HiOutlineShieldCheck,
  HiOutlineTruck,
} from "react-icons/hi2";
import { lifestyleImages } from "@/data/images";

export default function BrandHeritageCTA() {
  return (
    <section className="py-16 md:py-24 bg-[#FCFAF8]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* LEFT: Image Composition */}
          <div className="relative order-2 lg:order-1">
            {/* Main Image */}
            <div className="relative aspect-[4/5] max-w-md mx-auto lg:mx-0 overflow-hidden rounded-sm bg-[#F0EBE6] shadow-xl shadow-[#1A1816]/10">
              <Image
                src={lifestyleImages[1]} // Elegant woman / Craftsmanship vibe
                alt="Maison Batik Craftsmanship"
                fill
                sizes="(max-width: 1024px) 90vw, 40vw"
                className="object-cover transition-transform duration-700 ease-out hover:scale-105"
              />
            </div>

            {/* Floating Accent Image (Bottom Right) */}
            <div className="absolute -bottom-6 -right-6 w-32 h-40 md:w-40 md:h-48 rounded-sm overflow-hidden shadow-2xl border-4 border-[#FCFAF8] hidden sm:block">
              <Image
                src={lifestyleImages[4]} // Close up fabric detail
                alt="Fabric Detail"
                fill
                sizes="150px"
                className="object-cover"
              />
            </div>

            {/* Decorative Element (Top Left) */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border border-[#D4AF37]/30 rounded-sm pointer-events-none hidden lg:block" />
          </div>

          {/* RIGHT: Text Content */}
          <div className="flex flex-col gap-6 order-1 lg:order-2 lg:pl-8">
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <HiOutlineSparkles className="w-4 h-4 text-[#9C6644]" />
              <p className="text-[10px] sm:text-xs font-medium text-[#9C6644] tracking-[0.3em] uppercase">
                The Maison Promise
              </p>
            </div>

            {/* Title */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#1A1816] tracking-tight leading-[1.1]">
              Crafted with <br />
              <span className="italic font-normal text-[#9C6644]">
                Passion & Purpose
              </span>
            </h2>

            {/* Description */}
            <p className="text-sm md:text-base text-[#1A1816]/70 leading-relaxed max-w-lg">
              Every piece in our collection is a testament to the enduring
              legacy of Indonesian artisans. We are committed to sustainable
              practices, ethical sourcing, and preserving the ancient art of
              batik for future generations.
            </p>

            {/* Feature Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#EAE5DF]">
              <div className="flex items-start gap-3">
                <HiOutlineShieldCheck className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-[#1A1816]">
                    Authentic Guarantee
                  </p>
                  <p className="text-xs text-[#1A1816]/60 mt-0.5">
                    100% genuine handmade batik.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <HiOutlineTruck className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-[#1A1816]">
                    Global Shipping
                  </p>
                  <p className="text-xs text-[#1A1816]/60 mt-0.5">
                    Complimentary on orders over Rp 2jt.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-4">
              <Button
                variant="primary"
                size="lg"
                href="/about"
                rightIcon={<HiArrowRight className="w-4 h-4" />}
              >
                Discover Our Story
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
