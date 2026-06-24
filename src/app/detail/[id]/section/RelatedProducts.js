// src/app/detail/[id]/section/RelatedProducts.js
"use client";

import Link from "next/link";
import Card from "@/components/Card";
import Button from "@/components/Button";
import { HiArrowRight } from "react-icons/hi2";
import { productImages } from "@/data/images";

// Helper function untuk mendapatkan gambar dengan aman
const getSafeImage = (index) => {
  const images = productImages.batikShirts;
  if (!images || images.length === 0) return null;
  return images[index % images.length];
};

// Dummy Data for Related Products
const relatedProducts = [
  {
    id: "rel-1",
    title: "Kawung Classic Premium",
    category: "Batik Tulis",
    price: "Rp 2.650.000",
    originalPrice: null,
    image: getSafeImage(10),
    badge: "New",
    href: "/detail/rel-1",
    isSoldOut: false,
  },
  {
    id: "rel-2",
    title: "Mega Mendung Silk",
    category: "Batik Tulis",
    price: "Rp 3.200.000",
    originalPrice: "Rp 3.800.000",
    image: getSafeImage(11),
    badge: "Sale",
    href: "/detail/rel-2",
    isSoldOut: false,
  },
  {
    id: "rel-3",
    title: "Sido Mukti Heritage",
    category: "Batik Tulis",
    price: "Rp 2.950.000",
    originalPrice: null,
    image: getSafeImage(12),
    badge: null,
    href: "/detail/rel-3",
    isSoldOut: false,
  },
  {
    id: "rel-4",
    title: "Truntum Royal Edition",
    category: "Batik Tulis",
    price: "Rp 3.500.000",
    originalPrice: null,
    image: getSafeImage(13),
    badge: "Limited",
    href: "/detail/rel-4",
    isSoldOut: true, // Menampilkan state sold out
  },
];

export default function RelatedProducts() {
  return (
    <section className="py-16 md:py-24 bg-[#FCFAF8]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Action */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 md:mb-14">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-px bg-[#9C6644]" />
              <p className="text-xs font-medium text-[#9C6644] tracking-[0.2em] uppercase">
                Complete Your Collection
              </p>
            </div>
            <h2 className="text-3xl md:text-4xl font-light text-[#1A1816]">
              You Might Also <span className="font-medium italic">Like</span>
            </h2>
          </div>

          <Link href="/catalog?category=batik-tulis">
            <Button
              variant="ghost"
              size="md"
              rightIcon={<HiArrowRight className="w-4 h-4" />}
              className="!border-[#1A1816] !text-[#1A1816] hover:!bg-[#1A1816] hover:!text-[#FCFAF8]"
            >
              View All Batik Tulis
            </Button>
          </Link>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {relatedProducts.map((product) => (
            <Card
              key={product.id}
              title={product.title}
              category={product.category}
              price={product.price}
              originalPrice={product.originalPrice}
              image={product.image}
              badge={product.badge}
              href={product.href}
              isSoldOut={product.isSoldOut}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
