// src/app/collections/section/EditorialBanner.js
"use client";

import Link from "next/link";
import Image from "next/image";
import Button from "@/components/Button";
import { HiArrowRight, HiPlay } from "react-icons/hi2";
import { productImages } from "@/data/images";

export default function EditorialBanner() {
  return (
    <section className="relative bg-[#1A1816] overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0">
        <Image
          src={productImages.batikShirts[6]}
          alt="Batik Heritage Editorial"
          width={1920}
          height={1080}
          className="w-full h-full object-cover opacity-40"
          priority
        />
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A1816] via-[#1A1816]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1816] via-transparent to-[#1A1816]/50" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
        <div className="max-w-3xl">
          {/* Season Label */}
          <div className="inline-flex items-center gap-3 mb-8">
            <div className="w-12 h-px bg-[#9C6644]" />
            <p className="text-xs font-medium text-[#9C6644] tracking-[0.3em] uppercase">
              The Art of Batik
            </p>
          </div>

          {/* Main Headline */}
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-light text-[#FCFAF8] mb-6 leading-[1.1]">
            Where Tradition
            <br />
            Meets{" "}
            <span className="italic font-medium text-[#9C6644]">Tomorrow</span>
          </h2>

          {/* Editorial Description */}
          <p className="text-base md:text-lg text-[#FCFAF8]/70 font-light leading-relaxed mb-4 max-w-2xl">
            Each piece in our collection is a testament to centuries of
            Indonesian craftsmanship. From the intricate hand-drawn patterns to
            the natural dyes sourced from local forests, we preserve heritage
            while embracing modern elegance.
          </p>

          <p className="text-sm text-[#FCFAF8]/50 font-light leading-relaxed mb-10 max-w-xl">
            Our artisans spend up to 3 months creating a single batik piece,
            ensuring every motif carries the soul of Indonesian culture.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Link href="/about">
              <Button
                variant="primary"
                size="lg"
                className="!bg-[#FCFAF8] !text-[#1A1816] !border-[#FCFAF8] hover:!bg-white hover:!border-white"
                rightIcon={<HiArrowRight className="w-4 h-4" />}
              >
                Discover Our Story
              </Button>
            </Link>
            <Link href="/catalog">
              <Button
                variant="secondary"
                size="lg"
                className="!text-[#FCFAF8] !border-[#FCFAF8]/30 hover:!bg-[#FCFAF8] hover:!text-[#1A1816]"
                leftIcon={<HiPlay className="w-4 h-4" />}
              >
                Watch Film
              </Button>
            </Link>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-3 gap-8 pt-8 border-t border-[#FCFAF8]/20">
            <div>
              <p className="text-3xl md:text-4xl font-light text-[#FCFAF8] mb-2">
                150<span className="text-[#9C6644]">+</span>
              </p>
              <p className="text-xs text-[#FCFAF8]/60 uppercase tracking-wider">
                Years of Heritage
              </p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-light text-[#FCFAF8] mb-2">
                50<span className="text-[#9C6644]">+</span>
              </p>
              <p className="text-xs text-[#FCFAF8]/60 uppercase tracking-wider">
                Master Artisans
              </p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-light text-[#FCFAF8] mb-2">
                12<span className="text-[#9C6644]">K</span>
              </p>
              <p className="text-xs text-[#FCFAF8]/60 uppercase tracking-wider">
                Happy Customers
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/2 right-12 -translate-y-1/2 hidden lg:block">
        <div className="text-[200px] font-light text-[#FCFAF8]/5 leading-none select-none">
          04
        </div>
      </div>

      {/* Bottom Accent Line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#9C6644] to-transparent" />
    </section>
  );
}
