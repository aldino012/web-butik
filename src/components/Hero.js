// src/components/Hero.jsx
"use client";

import Image from "next/image";
import Button from "./Button";
import BatikPattern from "./BatikPattern";
import { HiArrowRight } from "react-icons/hi2";

export default function Hero({
  eyebrow = "New Collection",
  title = "The Heritage Series",
  description = "Experience the perfect blend of traditional craftsmanship and modern elegance.",
  image = "/images/hero-batik.jpg",
  alt = "Hero Image",
  ctaText = "Discover Now",
  ctaHref = "/catalog",
  secondaryCtaText = "",
  secondaryCtaHref = "",
  imagePosition = "right",
  badge = null,
  fullHeight = false,
  batikMotif = "parang",
}) {
  const isImageLeft = imagePosition === "left";

  return (
    <section
      className={`
        relative w-full bg-[#FCFAF8] overflow-hidden
        ${fullHeight ? "min-h-screen flex items-center" : "py-16 md:py-24 lg:py-32"}
      `}
    >
      {/* Batik Pattern Background */}
      <BatikPattern motif={batikMotif} opacity={5} />

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`
          grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center
          ${fullHeight ? "min-h-[85vh]" : ""}
        `}
        >
          {/* Text Content */}
          <div
            className={`
            flex flex-col gap-6 
            ${isImageLeft ? "lg:order-2 lg:pl-8" : "lg:order-1 lg:pr-8"}
          `}
          >
            {eyebrow && (
              <div className="flex items-center gap-3">
                <div className="h-[1px] w-8 bg-[#9C6644]" />
                <p className="text-[10px] sm:text-xs font-medium text-[#9C6644] tracking-[0.3em] uppercase">
                  {eyebrow}
                </p>
              </div>
            )}

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-[#1A1816] tracking-tight leading-[1.1]">
              {title}
            </h1>

            {description && (
              <p className="text-sm sm:text-base text-[#1A1816]/70 leading-relaxed max-w-md">
                {description}
              </p>
            )}

            <div className="flex flex-wrap gap-4 mt-2">
              {ctaText && (
                <Button
                  variant="primary"
                  size="lg"
                  href={ctaHref}
                  rightIcon={<HiArrowRight className="w-4 h-4" />}
                >
                  {ctaText}
                </Button>
              )}
              {secondaryCtaText && (
                <Button variant="secondary" size="lg" href={secondaryCtaHref}>
                  {secondaryCtaText}
                </Button>
              )}
            </div>
          </div>

          {/* Image Content - LEBIH BESAR & MENARIK */}
          <div
            className={`
            relative group
            ${isImageLeft ? "lg:order-1" : "lg:order-2"}
          `}
          >
            {/* Decorative Elements Behind Image */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-[#D4AF37]/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-[#9C6644]/10 rounded-full blur-3xl" />

            {/* Main Image Container - Aspect Ratio Lebih Besar */}
            <div
              className={`
              relative overflow-hidden rounded-sm bg-[#F0EBE6]
              shadow-2xl shadow-[#1A1816]/10
              ${fullHeight ? "h-[60vh] lg:h-[70vh] min-h-[450px]" : "aspect-[4/3] lg:aspect-[3/2]"}
            `}
            >
              <Image
                src={image}
                alt={alt}
                fill
                sizes="(max-width: 1024px) 90vw, 50vw"
                className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                priority={fullHeight}
              />

              {/* Badge */}
              {badge && (
                <div className="absolute top-6 left-6 px-4 py-2 bg-[#FCFAF8]/95 backdrop-blur-sm border border-[#EAE5DF] rounded-sm shadow-lg">
                  <span className="text-[10px] font-bold text-[#1A1816] tracking-[0.2em] uppercase">
                    {badge}
                  </span>
                </div>
              )}

              {/* Hover Overlay Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1816]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Decorative Frame Lines */}
            <div className="absolute -inset-3 border border-[#9C6644]/10 rounded-sm pointer-events-none" />
            <div className="absolute -inset-6 border border-[#D4AF37]/5 rounded-sm pointer-events-none hidden lg:block" />
          </div>
        </div>
      </div>
    </section>
  );
}