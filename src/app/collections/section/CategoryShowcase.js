// src/app/collections/section/CategoryShowcase.js
"use client";

import Link from "next/link";
import Image from "next/image";
import Button from "@/components/Button";
import { HiArrowRight } from "react-icons/hi2";
import { productImages } from "@/data/images";

const categories = [
  {
    id: "batik-tulis",
    title: "Batik Tulis",
    description: "Handcrafted traditional batik with intricate patterns",
    image: productImages.batikShirts[0],
    itemCount: "120+ Products",
    href: "/catalog?category=batik-tulis",
  },
  {
    id: "wear-batik",
    title: "Wear Batik",
    description: "Modern fashion with authentic batik elements",
    image: productImages.batikShirts[1],
    itemCount: "85+ Products",
    href: "/catalog?category=wear-batik",
  },
  {
    id: "men",
    title: "Men Collection",
    description: "Sophisticated batik for the modern gentleman",
    image: productImages.batikShirts[2],
    itemCount: "95+ Products",
    href: "/catalog?category=men",
  },
  {
    id: "women",
    title: "Women Collection",
    description: "Elegant batik designs for every occasion",
    image: productImages.batikShirts[3],
    itemCount: "110+ Products",
    href: "/catalog?category=women",
  },
];

export default function CategoryShowcase() {
  return (
    <section className="py-16 md:py-24 bg-[#FCFAF8]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs font-medium text-[#9C6644] tracking-[0.2em] uppercase mb-3">
            Curated Collections
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#1A1816] mb-4">
            Explore Our <span className="font-medium italic">Categories</span>
          </h2>
          <p className="text-sm md:text-base text-[#1A1816]/60 max-w-2xl mx-auto font-light">
            Discover our carefully curated collections, each telling a unique
            story of Indonesian heritage and craftsmanship
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {categories.map((category, index) => (
            <Link
              key={category.id}
              href={category.href}
              className={`group relative overflow-hidden rounded-sm bg-white ${
                index === 0 || index === 3 ? "md:col-span-1" : ""
              }`}
            >
              <div className="aspect-[16/9] md:aspect-[21/9] overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.title}
                  width={800}
                  height={450}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1816]/90 via-[#1A1816]/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                  <p className="text-xs text-[#FCFAF8]/70 mb-1 font-medium tracking-wider uppercase">
                    {category.itemCount}
                  </p>
                  <h3 className="text-2xl md:text-3xl font-medium text-[#FCFAF8] mb-2">
                    {category.title}
                  </h3>
                  <p className="text-sm text-[#FCFAF8]/80 font-light mb-4 line-clamp-2">
                    {category.description}
                  </p>
                  <Button
                    variant="tertiary"
                    size="sm"
                    className="self-start !text-[#FCFAF8] hover:!text-[#FCFAF8] hover:!bg-[#FCFAF8]/20"
                    rightIcon={<HiArrowRight className="w-4 h-4" />}
                  >
                    Explore
                  </Button>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-12">
          <Link href="/catalog">
            <Button
              variant="secondary"
              size="md"
              rightIcon={<HiArrowRight className="w-4 h-4" />}
            >
              View All Collections
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
