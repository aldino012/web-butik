// src/app/contact/section/LocationVisit.js
"use client";

import Link from "next/link";
import Image from "next/image";
import Button from "@/components/Button";
import {
  HiMapPin,
  HiArrowRight,
  HiTruck,
  HiBuildingOffice,
} from "react-icons/hi2"; // ✅ Ganti HiBus dengan HiBuildingOffice
import { productImages } from "@/data/images";

// Helper function untuk mendapatkan gambar dengan aman
const getSafeImage = (index) => {
  const images = productImages.batikShirts;
  if (!images || images.length === 0) return null;
  return images[index % images.length];
};

const transportOptions = [
  {
    icon: HiTruck,
    title: "By Car",
    description:
      "Free parking available for up to 10 cars at the back of the workshop.",
  },
  {
    icon: HiBuildingOffice, // ✅ Ganti HiBus dengan HiBuildingOffice (merepresentasikan stasiun/terminal)
    title: "By Public Transport",
    description:
      "5 minutes walk from Tugu Railway Station or Malioboro Bus Stop.",
  },
];

export default function LocationVisit() {
  return (
    <section className="py-20 md:py-28 bg-[#FCFAF8]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-px bg-[#9C6644]" />
            <p className="text-xs font-medium text-[#9C6644] tracking-[0.3em] uppercase">
              Visit Our Workshop
            </p>
            <div className="w-12 h-px bg-[#9C6644]" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#1A1816] mb-4">
            Experience Batik{" "}
            <span className="font-medium italic">Firsthand</span>
          </h2>
          <p className="text-sm md:text-base text-[#1A1816]/60 font-light leading-relaxed">
            We warmly invite you to visit our workshop in the heart of
            Yogyakarta. See our artisans at work, touch the fabrics, and immerse
            yourself in the world of traditional batik.
          </p>
        </div>

        {/* Location Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 max-w-7xl mx-auto items-center">
          {/* Left: Visual/Map Representation */}
          <div className="lg:col-span-7 relative group">
            <div className="relative aspect-[16/10] overflow-hidden rounded-sm shadow-xl bg-[#EAE5DF]">
              {getSafeImage(4) && (
                <Image
                  src={getSafeImage(4)}
                  alt="Batik Heritage Workshop Exterior"
                  width={1200}
                  height={750}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              )}
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1816]/60 via-transparent to-transparent" />

              {/* Address Pin Overlay */}
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <div className="bg-white/95 backdrop-blur-sm px-5 py-3 rounded-sm shadow-lg max-w-xs">
                  <div className="flex items-center gap-2 mb-1">
                    <HiMapPin className="w-4 h-4 text-[#9C6644]" />
                    <p className="text-[10px] text-[#1A1816]/60 uppercase tracking-wider font-medium">
                      Our Location
                    </p>
                  </div>
                  <p className="text-sm font-medium text-[#1A1816] leading-tight">
                    Jl. Malioboro No. 88, Yogyakarta, Indonesia 55213
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Details & Directions */}
          <div className="lg:col-span-5 lg:pl-4">
            <div className="space-y-8">
              {/* Main Address Block */}
              <div>
                <h3 className="text-2xl font-medium text-[#1A1816] mb-4">
                  Workshop & Showroom
                </h3>
                <p className="text-sm text-[#1A1816]/70 font-light leading-relaxed mb-6">
                  Located in the cultural center of Yogyakarta, our workshop is
                  easily accessible and open for public visits. Come and explore
                  our latest collections in person.
                </p>

                <Link
                  href="https://maps.google.com/?q=Malioboro+Yogyakarta"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="primary"
                    size="md"
                    rightIcon={<HiArrowRight className="w-4 h-4" />}
                  >
                    Get Directions
                  </Button>
                </Link>
              </div>

              {/* Divider */}
              <div className="h-px bg-[#EAE5DF]" />

              {/* Transport Options */}
              <div>
                <p className="text-xs font-medium text-[#9C6644] tracking-[0.2em] uppercase mb-6">
                  How to Get Here
                </p>
                <div className="space-y-6">
                  {transportOptions.map((option, index) => {
                    const Icon = option.icon;
                    return (
                      <div key={index} className="flex items-start gap-4 group">
                        <div className="w-12 h-12 rounded-sm bg-white border border-[#EAE5DF] flex items-center justify-center flex-shrink-0 group-hover:border-[#9C6644] group-hover:text-[#9C6644] transition-colors duration-300 text-[#1A1816]/60">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-[#1A1816] mb-1">
                            {option.title}
                          </h4>
                          <p className="text-xs text-[#1A1816]/60 font-light leading-relaxed">
                            {option.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}