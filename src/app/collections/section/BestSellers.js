// src/app/collections/section/BestSellers.js
"use client";

import Link from "next/link";
import Image from "next/image";
import Button from "@/components/Button";
import { HiArrowRight, HiStar } from "react-icons/hi2";
import { productImages } from "@/data/images";

const bestSellers = [
  {
    id: "best-1",
    title: "Sogan Classic Heritage",
    category: "Batik Tulis",
    price: "Rp 3.450.000",
    image: productImages.batikShirts[7],
    rating: 4.9,
    reviews: 128,
    href: "/detail/best-1",
  },
  {
    id: "best-2",
    title: "Indigo Modern Slim",
    category: "Wear Batik",
    price: "Rp 2.150.000",
    image: productImages.batikShirts[8],
    rating: 4.8,
    reviews: 96,
    href: "/detail/best-2",
  },
  {
    id: "best-3",
    title: "Royal Parang Silk",
    category: "Men",
    price: "Rp 4.200.000",
    image: productImages.batikShirts[9],
    rating: 5.0,
    reviews: 84,
    href: "/detail/best-3",
  },
];

export default function BestSellers() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-3">
              <HiStar className="w-5 h-5 text-[#9C6644]" />
              <p className="text-xs font-medium text-[#9C6644] tracking-[0.2em] uppercase">
                Most Loved
              </p>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#1A1816] mb-3">
              Best <span className="font-medium italic">Sellers</span>
            </h2>
            <p className="text-sm md:text-base text-[#1A1816]/60 font-light">
              Our most cherished pieces, loved by thousands for their timeless
              elegance and exceptional craftsmanship.
            </p>
          </div>
          <Link href="/catalog?sort=popular">
            <Button
              variant="ghost"
              size="md"
              rightIcon={<HiArrowRight className="w-4 h-4" />}
              className="!border-[#1A1816] !text-[#1A1816] hover:!bg-[#1A1816] hover:!text-[#FCFAF8]"
            >
              View All Best Sellers
            </Button>
          </Link>
        </div>

        {/* Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-10">
          {bestSellers.map((product) => (
            <Link key={product.id} href={product.href} className="group block">
              {/* Image Container */}
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-[#F5F0EB] mb-6">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={600}
                  height={800}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Quick Action Overlay (Optional hover effect) */}
                <div className="absolute inset-0 bg-[#1A1816]/0 group-hover:bg-[#1A1816]/10 transition-colors duration-300" />

                {/* Rating Badge */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-sm flex items-center gap-1.5 shadow-sm">
                  <HiStar className="w-3.5 h-3.5 text-[#9C6644] fill-[#9C6644]" />
                  <span className="text-xs font-medium text-[#1A1816]">
                    {product.rating}
                  </span>
                  <span className="text-[10px] text-[#1A1816]/50">
                    ({product.reviews})
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-2">
                <p className="text-[10px] font-medium text-[#9C6644] tracking-[0.15em] uppercase">
                  {product.category}
                </p>
                <h3 className="text-lg md:text-xl font-medium text-[#1A1816] group-hover:text-[#9C6644] transition-colors duration-300">
                  {product.title}
                </h3>
                <p className="text-sm text-[#1A1816]/80 font-light">
                  {product.price}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
