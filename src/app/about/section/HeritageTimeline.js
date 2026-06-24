// src/app/about/section/HeritageTimeline.js
"use client";

import Image from "next/image";
import { productImages } from "@/data/images";

const timelineData = [
  {
    year: "1994",
    title: "The Beginning",
    description:
      "Founded in the heart of Yogyakarta by a family of batik artisans with a vision to preserve traditional craftsmanship.",
    image: productImages.batikShirts[3],
    highlight: "First workshop established",
  },
  {
    year: "2002",
    title: "National Recognition",
    description:
      "Received the prestigious Indonesian Heritage Award for excellence in traditional batik preservation and innovation.",
    image: productImages.batikShirts[4],
    highlight: "Indonesian Heritage Award",
  },
  {
    year: "2010",
    title: "Modern Evolution",
    description:
      "Launched our contemporary wear line, bridging traditional batik with modern fashion sensibilities for the younger generation.",
    image: productImages.batikShirts[5],
    highlight: "Contemporary line launched",
  },
  {
    year: "2018",
    title: "Global Expansion",
    description:
      "Expanded our reach to international markets, bringing Indonesian batik to fashion capitals across Asia, Europe, and America.",
    image: productImages.batikShirts[6],
    highlight: "Present in 15+ countries",
  },
  {
    year: "2024",
    title: "Sustainable Future",
    description:
      "Committed to 100% sustainable practices, using natural dyes and eco-friendly processes while maintaining authentic craftsmanship.",
    image: productImages.batikShirts[7],
    highlight: "100% sustainable practices",
  },
];

export default function HeritageTimeline() {
  return (
    <section id="heritage" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-px bg-[#9C6644]" />
            <p className="text-xs font-medium text-[#9C6644] tracking-[0.3em] uppercase">
              Our Journey
            </p>
            <div className="w-12 h-px bg-[#9C6644]" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#1A1816] mb-4">
            Three Decades of{" "}
            <span className="font-medium italic">Excellence</span>
          </h2>
          <p className="text-sm md:text-base text-[#1A1816]/60 font-light max-w-2xl mx-auto">
            From a small workshop in Yogyakarta to a globally recognized brand,
            our journey is marked by passion, innovation, and unwavering
            commitment to preserving Indonesian heritage.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-6xl mx-auto">
          {/* Vertical Line (Desktop) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-[#EAE5DF] -translate-x-1/2" />

          {/* Timeline Items */}
          <div className="space-y-12 md:space-y-24">
            {timelineData.map((item, index) => (
              <div
                key={item.year}
                className={`
                  relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center
                  ${index % 2 === 0 ? "" : "md:direction-rtl"}
                `}
              >
                {/* Content Side */}
                <div
                  className={`${index % 2 === 0 ? "md:order-1" : "md:order-2"}`}
                >
                  <div
                    className={`${index % 2 === 0 ? "md:text-right md:pr-16" : "md:text-left md:pl-16"}`}
                  >
                    {/* Year Badge */}
                    <div
                      className={`inline-flex items-center gap-3 mb-4 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                    >
                      <div className="w-12 h-px bg-[#9C6644]" />
                      <p className="text-4xl md:text-5xl font-light text-[#9C6644]">
                        {item.year}
                      </p>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl md:text-3xl font-medium text-[#1A1816] mb-4">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm md:text-base text-[#1A1816]/70 font-light leading-relaxed mb-6">
                      {item.description}
                    </p>

                    {/* Highlight Badge */}
                    <div
                      className={`inline-flex items-center gap-2 bg-[#9C6644]/10 px-4 py-2 rounded-sm ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                    >
                      <div className="w-1.5 h-1.5 bg-[#9C6644] rounded-full" />
                      <p className="text-xs font-medium text-[#9C6644] uppercase tracking-wider">
                        {item.highlight}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Image Side */}
                <div
                  className={`${index % 2 === 0 ? "md:order-2" : "md:order-1"}`}
                >
                  <div
                    className={`${index % 2 === 0 ? "md:pl-16" : "md:pr-16"}`}
                  >
                    <div className="relative aspect-[4/3] overflow-hidden rounded-sm shadow-lg group">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={600}
                        height={450}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1A1816]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                </div>

                {/* Timeline Dot (Desktop) */}
                <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                  <div className="w-4 h-4 bg-[#9C6644] rounded-full border-4 border-white shadow-lg" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20 md:mt-32">
          <p className="text-sm text-[#1A1816]/60 font-light mb-6">
            Our story continues with every piece we create
          </p>
          <div className="inline-flex items-center gap-4">
            <div className="w-16 h-px bg-[#EAE5DF]" />
            <p className="text-xs text-[#9C6644] tracking-[0.2em] uppercase font-medium">
              And the journey continues...
            </p>
            <div className="w-16 h-px bg-[#EAE5DF]" />
          </div>
        </div>
      </div>
    </section>
  );
}
