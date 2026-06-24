// src/app/collections/section/FeaturedCollection.js
"use client";

import Link from "next/link";
import Image from "next/image";
import Button from "@/components/Button";
import { HiArrowRight, HiSparkles } from "react-icons/hi2";
import { productImages } from "@/data/images";

export default function FeaturedCollection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Label */}
        <div className="flex items-center gap-3 mb-8 md:mb-12">
          <HiSparkles className="w-5 h-5 text-[#9C6644]" />
          <p className="text-xs font-medium text-[#9C6644] tracking-[0.2em] uppercase">
            Featured Collection
          </p>
          <div className="flex-1 h-px bg-[#EAE5DF]" />
        </div>

        {/* Featured Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Image Side */}
          <div className="lg:col-span-7 relative">
            <div className="relative aspect-[4/3] md:aspect-[16/10] overflow-hidden rounded-sm bg-[#F5F0EB]">
              <Image
                src={productImages.batikShirts[4]}
                alt="Heritage Signature Collection"
                width={1200}
                height={800}
                className="w-full h-full object-cover"
                priority
              />

              {/* Badge */}
              <div className="absolute top-6 left-6 md:top-8 md:left-8">
                <div className="inline-flex items-center gap-2 bg-[#1A1816] text-[#FCFAF8] px-4 py-2 text-[10px] font-medium tracking-[0.15em] uppercase rounded-sm">
                  <span className="w-1.5 h-1.5 bg-[#9C6644] rounded-full animate-pulse" />
                  Limited Edition
                </div>
              </div>

              {/* Price Tag */}
              <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 bg-white/95 backdrop-blur-sm px-5 py-3 rounded-sm shadow-lg">
                <p className="text-[10px] text-[#1A1816]/60 uppercase tracking-wider mb-1">
                  Starting from
                </p>
                <p className="text-lg md:text-xl font-medium text-[#1A1816]">
                  Rp 2.500.000
                </p>
              </div>
            </div>

            {/* Thumbnail Gallery */}
            <div className="hidden md:flex gap-3 mt-4">
              {[0, 1, 2].map((idx) => (
                <div
                  key={idx}
                  className="w-20 h-20 rounded-sm overflow-hidden border-2 border-transparent hover:border-[#9C6644] transition-colors cursor-pointer"
                >
                  <Image
                    src={productImages.batikShirts[4 + idx]}
                    alt={`View ${idx + 1}`}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Content Side */}
          <div className="lg:col-span-5 lg:pl-8">
            <div className="sticky top-32">
              {/* Collection Info */}
              <p className="text-xs text-[#9C6644] tracking-[0.2em] uppercase mb-3">
                Spring / Summer 2025
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#1A1816] mb-2 leading-tight">
                Heritage
              </h2>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium italic text-[#9C6644] mb-6 leading-tight">
                Signature
              </h2>

              <p className="text-sm md:text-base text-[#1A1816]/70 font-light leading-relaxed mb-6">
                A curated selection of our finest batik pieces, each handcrafted
                by master artisans using centuries-old techniques. This
                exclusive collection features rare motifs inspired by royal
                Javanese heritage.
              </p>

              {/* Features List */}
              <div className="space-y-3 mb-8">
                {[
                  "Hand-drawn by 7 master artisans",
                  "Premium silk & organic cotton",
                  "Natural indigo & soga dyes",
                  "Certificate of authenticity included",
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-[#9C6644] rounded-full mt-2 flex-shrink-0" />
                    <p className="text-sm text-[#1A1816]/80 font-light">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 py-6 border-y border-[#EAE5DF] mb-8">
                <div>
                  <p className="text-2xl md:text-3xl font-medium text-[#1A1816]">
                    24
                  </p>
                  <p className="text-xs text-[#1A1816]/60 uppercase tracking-wider mt-1">
                    Pieces
                  </p>
                </div>
                <div>
                  <p className="text-2xl md:text-3xl font-medium text-[#1A1816]">
                    7
                  </p>
                  <p className="text-xs text-[#1A1816]/60 uppercase tracking-wider mt-1">
                    Artisans
                  </p>
                </div>
                <div>
                  <p className="text-2xl md:text-3xl font-medium text-[#1A1816]">
                    12
                  </p>
                  <p className="text-xs text-[#1A1816]/60 uppercase tracking-wider mt-1">
                    Motifs
                  </p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/catalog?collection=heritage-signature"
                  className="flex-1"
                >
                  <Button
                    variant="primary"
                    size="md"
                    fullWidth
                    rightIcon={<HiArrowRight className="w-4 h-4" />}
                  >
                    Shop Collection
                  </Button>
                </Link>
                <Link href="/detail/heritage-story">
                  <Button variant="secondary" size="md">
                    Learn More
                  </Button>
                </Link>
              </div>

              {/* Availability Note */}
              <p className="text-xs text-[#1A1816]/50 mt-6 flex items-center gap-2">
                <span className="w-2 h-2 bg-green-600 rounded-full" />
                Only 8 pieces remaining in stock
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
