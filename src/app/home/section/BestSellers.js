"use client";

import Card from "@/components/Card";
import Button from "@/components/Button";
import { HiArrowRight } from "react-icons/hi2";
import { productImages } from "@/data/images";

// Dummy data produk terlaris
const bestSellersData = [
  {
    id: "bs-1",
    title: "Kemeja Batik Tulis Parang Rusak",
    category: "Batik Tulis Pria",
    price: "Rp 1.450.000",
    image: productImages.batikShirts[3],
    badge: "Best Seller",
    href: "/detail/5",
  },
  {
    id: "bs-2",
    title: "Dress Sutera Motif Mega Mendung",
    category: "Wear Batik Wanita",
    price: "Rp 1.250.000",
    image: productImages.dresses[4],
    href: "/detail/6",
  },
  {
    id: "bs-3",
    title: "Kain Batik Tulis Kawung Sogan",
    category: "Batik Tulis Premium",
    price: "Rp 1.850.000",
    originalPrice: "Rp 2.200.000",
    image: productImages.batikShirts[5],
    badge: "Limited",
    href: "/detail/7",
  },
  {
    id: "bs-4",
    title: "Blouse Modern Motif Lereng",
    category: "Wear Batik Wanita",
    price: "Rp 850.000",
    image: productImages.dresses[6],
    href: "/detail/8",
  },
];

export default function BestSellers() {
  return (
    <section className="py-16 md:py-24 bg-[#F0EBE6]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* LEFT: Editorial Content (4 columns) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {/* Eyebrow */}
            <p className="text-[10px] sm:text-xs font-medium text-[#9C6644] tracking-[0.3em] uppercase">
              Customer Favorites
            </p>

            {/* Title */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#1A1816] tracking-tight leading-[1.1]">
              The{" "}
              <span className="font-normal italic text-[#9C6644]">Icons</span>
            </h2>

            {/* Description */}
            <p className="text-sm md:text-base text-[#1A1816]/70 leading-relaxed max-w-md">
              Timeless pieces that have captured the hearts of our community.
              Meticulously crafted to perfection, these are the designs that
              define modern heritage and remain perpetually in style.
            </p>

            {/* CTA Button */}
            <div className="mt-2">
              <Button
                variant="primary"
                size="lg"
                href="/catalog/best-sellers"
                rightIcon={<HiArrowRight className="w-4 h-4" />}
              >
                Shop Best Sellers
              </Button>
            </div>
          </div>

          {/* RIGHT: Products Grid (8 columns) */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {bestSellersData.map((product) => (
                <Card
                  key={product.id}
                  title={product.title}
                  category={product.category}
                  price={product.price}
                  originalPrice={product.originalPrice}
                  image={product.image}
                  badge={product.badge}
                  href={product.href}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
