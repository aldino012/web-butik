"use client";

import Card from "@/components/Card";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";
import { productImages } from "@/data/images";

// Dummy data produk terbaru (Nanti bisa diganti dengan fetch dari API/Database)
const newArrivalsData = [
  {
    id: "na-1",
    title: "Kemeja Batik Tulis Parang Klasik",
    category: "Batik Tulis Pria",
    price: "Rp 1.250.000",
    image: productImages.batikShirts[0],
    badge: "New",
    href: "/detail/1",
  },
  {
    id: "na-2",
    title: "Dress Modern Mega Mendung",
    category: "Wear Batik Wanita",
    price: "Rp 850.000",
    originalPrice: "Rp 1.100.000",
    image: productImages.dresses[0],
    badge: "Sale",
    href: "/detail/2",
  },
  {
    id: "na-3",
    title: "Kain Batik Tulis Kawung Premium",
    category: "Batik Tulis",
    price: "Rp 1.500.000",
    image: productImages.batikShirts[2],
    badge: "Exclusive",
    href: "/detail/3",
  },
  {
    id: "na-4",
    title: "Blouse Sutra Motif Lereng",
    category: "Wear Batik Wanita",
    price: "Rp 950.000",
    image: productImages.dresses[2],
    href: "/detail/4",
  },
];

export default function NewArrivals() {
  return (
    <section className="py-16 md:py-24 bg-[#FCFAF8]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header (Split Layout) */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 md:mb-14 gap-4">
          <div>
            <p className="text-[10px] sm:text-xs font-medium text-[#9C6644] tracking-[0.3em] uppercase mb-3">
              Just Dropped
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#1A1816] tracking-tight">
              New{" "}
              <span className="font-normal italic text-[#9C6644]">
                Arrivals
              </span>
            </h2>
          </div>

          <Link
            href="/catalog/new"
            className="inline-flex items-center gap-2 text-xs font-medium text-[#1A1816] tracking-[0.15em] uppercase hover:text-[#9C6644] transition-colors duration-300 group self-start md:self-auto"
          >
            View All New Arrivals
            <HiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {newArrivalsData.map((product) => (
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
    </section>
  );
}
