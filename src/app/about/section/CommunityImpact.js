// src/app/about/section/CommunityImpact.js
"use client";

import Image from "next/image";
import Button from "@/components/Button";
import {
  HiArrowRight,
  HiGlobeAlt,
  HiUsers,
  HiSun,
  HiHeart,
} from "react-icons/hi2"; // ✅ Ganti HiLeaf dengan HiSun
import { productImages } from "@/data/images";

const impactStats = [
  {
    icon: HiUsers,
    value: "500+",
    label: "Local Artisans Empowered",
    description: "Providing fair wages and sustainable livelihoods.",
  },
  {
    icon: HiSun, // ✅ Ganti HiLeaf dengan HiSun
    value: "10K+",
    label: "Trees Planted",
    description: "Restoring natural dye forests in Java.",
  },
  {
    icon: HiGlobeAlt,
    value: "100%",
    label: "Natural Dyes Used",
    description: "Zero toxic chemicals in our production.",
  },
  {
    icon: HiHeart,
    value: "5",
    label: "Villages Supported",
    description: "Building schools and healthcare facilities.",
  },
];

const initiatives = [
  {
    id: 1,
    title: "Eco-Friendly Dyeing",
    description:
      "We source all our dyes from local plants like indigo, soga, and tingi, ensuring zero water pollution and supporting local farmers.",
    image: productImages.batikShirts[15] || productImages.batikShirts[0],
  },
  {
    id: 2,
    title: "Women Empowerment",
    description:
      "Over 70% of our artisans are women. We provide flexible working conditions and education programs for their children.",
    image: productImages.batikShirts[16] || productImages.batikShirts[1],
  },
  {
    id: 3,
    title: "Zero-Waste Production",
    description:
      "Fabric scraps are upcycled into accessories, and our packaging is 100% biodegradable and plastic-free.",
    image: productImages.batikShirts[17] || productImages.batikShirts[2],
  },
];

export default function CommunityImpact() {
  return (
    <section className="py-20 md:py-32 bg-[#F5F0EB]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-px bg-[#9C6644]" />
            <p className="text-xs font-medium text-[#9C6644] tracking-[0.3em] uppercase">
              Sustainability & Impact
            </p>
            <div className="w-12 h-px bg-[#9C6644]" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#1A1816] mb-4">
            Crafting a{" "}
            <span className="font-medium italic">Better Tomorrow</span>
          </h2>
          <p className="text-sm md:text-base text-[#1A1816]/60 font-light leading-relaxed">
            Our commitment goes beyond creating beautiful batik. We are
            dedicated to preserving the environment and uplifting the
            communities that make our craft possible.
          </p>
        </div>

        {/* Impact Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-24 md:mb-32">
          {impactStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-sm p-6 md:p-8 text-center hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-14 h-14 mx-auto rounded-full bg-[#9C6644]/10 flex items-center justify-center mb-6 group-hover:bg-[#9C6644] transition-colors duration-300">
                  <Icon className="w-7 h-7 text-[#9C6644] group-hover:text-[#FCFAF8] transition-colors duration-300" />
                </div>
                <p className="text-3xl md:text-4xl font-light text-[#1A1816] mb-2">
                  {stat.value}
                </p>
                <p className="text-sm font-medium text-[#1A1816] mb-2">
                  {stat.label}
                </p>
                <p className="text-xs text-[#1A1816]/60 font-light leading-relaxed">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Initiatives Section */}
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <p className="text-xs font-medium text-[#9C6644] tracking-[0.2em] uppercase mb-3">
              Our Core Initiatives
            </p>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-light text-[#1A1816]">
              How We Make a{" "}
              <span className="font-medium italic">Difference</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {initiatives.map((item) => (
              <div
                key={item.id}
                className="group bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={500}
                    height={375}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[#1A1816]/20 group-hover:bg-[#1A1816]/0 transition-colors duration-300" />
                </div>

                {/* Content */}
                <div className="p-6 md:p-8">
                  <h4 className="text-xl font-medium text-[#1A1816] mb-3 group-hover:text-[#9C6644] transition-colors duration-300">
                    {item.title}
                  </h4>
                  <p className="text-sm text-[#1A1816]/70 font-light leading-relaxed mb-6">
                    {item.description}
                  </p>
                  <div className="w-12 h-px bg-[#9C6644]/30 group-hover:w-24 transition-all duration-500" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20 md:mt-32">
          <p className="text-sm text-[#1A1816]/60 font-light mb-6">
            Want to know more about our sustainable practices?
          </p>
          <Button
            variant="secondary"
            size="md"
            rightIcon={<HiArrowRight className="w-4 h-4" />}
          >
            Read Our Sustainability Report
          </Button>
        </div>
      </div>
    </section>
  );
}
