// src/app/about/section/ArtisanSpotlight.js
"use client";

import Image from "next/image";
import Button from "@/components/Button";
import {
  HiArrowRight,
  HiUser,
  HiPaintBrush,
  HiFire,
  HiSparkles,
} from "react-icons/hi2";
import { productImages } from "@/data/images";

// ✅ Helper function untuk mendapatkan gambar dengan aman
const getSafeImage = (index) => {
  const images = productImages.batikShirts;
  if (!images || images.length === 0) return null;
  return images[index % images.length];
};

const artisans = [
  {
    id: 1,
    name: "Pak Suryadi",
    role: "Master Batik Tulis",
    experience: "35 Years",
    specialty: "Parang & Kawung Motifs",
    image: getSafeImage(12), // ✅ Menggunakan helper
    quote:
      "Setiap goresan canting adalah doa dan harapan. Saya tidak hanya membuat batik, tapi mewariskan jiwa leluhur.",
  },
  {
    id: 2,
    name: "Bu Ratna",
    role: "Natural Dye Expert",
    experience: "28 Years",
    specialty: "Indigo & Soga Dyes",
    image: getSafeImage(13),
    quote:
      "Warna dari alam memiliki kehidupan sendiri. Setiap batch pewarnaan unik seperti sidik jari.",
  },
  {
    id: 3,
    name: "Mas Andi",
    role: "Contemporary Designer",
    experience: "12 Years",
    specialty: "Modern Pattern Fusion",
    image: getSafeImage(14),
    quote:
      "Tantangan saya adalah membuat batik relevan untuk generasi muda tanpa kehilangan esensi tradisional.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Design & Pattern Making",
    description:
      "Motif digambar tangan di atas kertas, kemudian ditransfer ke kain menggunakan pensil atau arang.",
    icon: HiPaintBrush,
    duration: "1-2 Days",
  },
  {
    step: "02",
    title: "Wax Application (Membatik)",
    description:
      "Lilin panas diaplikasikan menggunakan canting tradisional untuk menciptakan resist pattern.",
    icon: HiFire,
    duration: "7-14 Days",
  },
  {
    step: "03",
    title: "Natural Dyeing",
    description:
      "Kain dicelupkan ke pewarna alami dari tumbuhan seperti indigo, soga, dan tingi.",
    icon: HiSparkles,
    duration: "3-5 Days",
  },
  {
    step: "04",
    title: "Wax Removal & Finishing",
    description:
      "Lilin direbus dan dihilangkan, kemudian kain dicuci dan dijemur di bawah sinar matahari.",
    icon: HiUser,
    duration: "2-3 Days",
  },
];

export default function ArtisanSpotlight() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-px bg-[#9C6644]" />
            <p className="text-xs font-medium text-[#9C6644] tracking-[0.3em] uppercase">
              The Hands Behind The Art
            </p>
            <div className="w-12 h-px bg-[#9C6644]" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#1A1816] mb-4">
            Meet Our <span className="font-medium italic">Master Artisans</span>
          </h2>
          <p className="text-sm md:text-base text-[#1A1816]/60 font-light leading-relaxed">
            Behind every exquisite piece of batik lies the dedication, skill,
            and passion of our master artisans. Their hands have perfected this
            craft over decades.
          </p>
        </div>

        {/* Artisan Profiles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-24 md:mb-32">
          {artisans.map((artisan) => (
            <div
              key={artisan.id}
              className="group relative bg-[#FCFAF8] rounded-sm overflow-hidden hover:shadow-xl transition-all duration-500"
            >
              {/* Image */}
              <div className="relative aspect-[3/4] overflow-hidden">
                {artisan.image && (
                  <Image
                    src={artisan.image}
                    alt={artisan.name}
                    width={400}
                    height={533}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1816]/80 via-[#1A1816]/20 to-transparent" />

                {/* Experience Badge */}
                <div className="absolute top-4 right-4 bg-[#9C6644] text-[#FCFAF8] px-3 py-1.5 rounded-sm">
                  <p className="text-xs font-medium">{artisan.experience}</p>
                </div>

                {/* Name & Role Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-medium text-[#FCFAF8] mb-1">
                    {artisan.name}
                  </h3>
                  <p className="text-sm text-[#FCFAF8]/80 font-light">
                    {artisan.role}
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Specialty */}
                <div className="mb-4">
                  <p className="text-[10px] text-[#9C6644] uppercase tracking-wider mb-1">
                    Specialty
                  </p>
                  <p className="text-sm font-medium text-[#1A1816]">
                    {artisan.specialty}
                  </p>
                </div>

                {/* Quote */}
                <blockquote className="text-sm text-[#1A1816]/70 font-light italic leading-relaxed border-l-2 border-[#9C6644]/30 pl-4">
                  "{artisan.quote}"
                </blockquote>
              </div>
            </div>
          ))}
        </div>

        {/* Craftsmanship Process */}
        <div className="max-w-6xl mx-auto">
          {/* Process Header */}
          <div className="text-center mb-12 md:mb-16">
            <p className="text-xs font-medium text-[#9C6644] tracking-[0.2em] uppercase mb-3">
              The Journey of Creation
            </p>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-light text-[#1A1816] mb-3">
              Our{" "}
              <span className="font-medium italic">Craftsmanship Process</span>
            </h3>
            <p className="text-sm text-[#1A1816]/60 font-light max-w-2xl mx-auto">
              From raw cotton to finished masterpiece, each piece undergoes a
              meticulous 4-stage process that takes 2-3 months to complete.
            </p>
          </div>

          {/* Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.step} className="relative group">
                  {/* Connector Line (Desktop) */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-[#EAE5DF] -translate-x-1/2 z-0" />
                  )}

                  {/* Step Card */}
                  <div className="relative bg-[#FCFAF8] rounded-sm p-6 md:p-8 hover:shadow-lg transition-all duration-300 h-full">
                    {/* Step Number */}
                    <div className="absolute -top-3 -right-3 w-12 h-12 bg-[#9C6644] text-[#FCFAF8] rounded-sm flex items-center justify-center text-sm font-medium shadow-md">
                      {step.step}
                    </div>

                    {/* Icon */}
                    <div className="w-16 h-16 rounded-sm bg-[#9C6644]/10 flex items-center justify-center mb-6 group-hover:bg-[#9C6644] transition-colors duration-300">
                      <Icon className="w-8 h-8 text-[#9C6644] group-hover:text-[#FCFAF8] transition-colors duration-300" />
                    </div>

                    {/* Title */}
                    <h4 className="text-lg font-medium text-[#1A1816] mb-3">
                      {step.title}
                    </h4>

                    {/* Description */}
                    <p className="text-sm text-[#1A1816]/70 font-light leading-relaxed mb-4">
                      {step.description}
                    </p>

                    {/* Duration */}
                    <div className="flex items-center gap-2 pt-4 border-t border-[#EAE5DF]">
                      <div className="w-1.5 h-1.5 bg-[#9C6644] rounded-full" />
                      <p className="text-xs text-[#9C6644] font-medium uppercase tracking-wider">
                        {step.duration}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Total Time Badge */}
          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-3 bg-[#1A1816] text-[#FCFAF8] px-6 py-3 rounded-sm">
              <p className="text-sm font-light">Total Creation Time:</p>
              <p className="text-lg font-medium text-[#9C6644]">2-3 Months</p>
              <p className="text-sm font-light">per piece</p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20 md:mt-32">
          <p className="text-sm text-[#1A1816]/60 font-light mb-6">
            Experience the artistry firsthand
          </p>
          <Button
            variant="secondary"
            size="md"
            rightIcon={<HiArrowRight className="w-4 h-4" />}
          >
            Visit Our Workshop
          </Button>
        </div>
      </div>
    </section>
  );
}