// src/app/collections/section/NewArrivals.js
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/Button";
import Card from "@/components/Card";
import { HiArrowRight, HiFire, HiClock } from "react-icons/hi2";
import { productImages } from "@/data/images";

// Generate new arrivals data
const newArrivals = [
  {
    id: "new-1",
    title: "Parang Rusak Modern",
    category: "Batik Tulis",
    price: "Rp 2.850.000",
    originalPrice: null,
    image: productImages.batikShirts[0],
    badge: "New",
    href: "/detail/new-1",
    isSoldOut: false,
    arrivalDate: "2 days ago",
  },
  {
    id: "new-2",
    title: "Kawung Contemporary",
    category: "Wear Batik",
    price: "Rp 1.950.000",
    originalPrice: "Rp 2.450.000",
    image: productImages.batikShirts[1],
    badge: "Sale",
    href: "/detail/new-2",
    isSoldOut: false,
    arrivalDate: "3 days ago",
  },
  {
    id: "new-3",
    title: "Mega Mendung Silk",
    category: "Men",
    price: "Rp 3.200.000",
    originalPrice: null,
    image: productImages.batikShirts[2],
    badge: "New",
    href: "/detail/new-3",
    isSoldOut: false,
    arrivalDate: "5 days ago",
  },
  {
    id: "new-4",
    title: "Sido Mukti Premium",
    category: "Women",
    price: "Rp 2.650.000",
    originalPrice: null,
    image: productImages.batikShirts[3],
    badge: "Hot",
    href: "/detail/new-4",
    isSoldOut: false,
    arrivalDate: "1 week ago",
  },
  {
    id: "new-5",
    title: "Truntum Elegance",
    category: "Accessories",
    price: "Rp 1.450.000",
    originalPrice: null,
    image: productImages.batikShirts[4],
    badge: "New",
    href: "/detail/new-5",
    isSoldOut: false,
    arrivalDate: "1 week ago",
  },
  {
    id: "new-6",
    title: "Semen Rama Classic",
    category: "Batik Tulis",
    price: "Rp 3.850.000",
    originalPrice: null,
    image: productImages.batikShirts[5],
    badge: "Limited",
    href: "/detail/new-6",
    isSoldOut: false,
    arrivalDate: "2 weeks ago",
  },
];

const filterTabs = [
  { id: "all", label: "All New" },
  { id: "batik-tulis", label: "Batik Tulis" },
  { id: "wear-batik", label: "Wear Batik" },
  { id: "accessories", label: "Accessories" },
];

export default function NewArrivals() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProducts =
    activeFilter === "all"
      ? newArrivals
      : newArrivals.filter((product) => {
          const categoryMap = {
            "batik-tulis": "Batik Tulis",
            "wear-batik": "Wear Batik",
            accessories: "Accessories",
          };
          return product.category === categoryMap[activeFilter];
        });

  return (
    <section className="py-16 md:py-24 bg-[#FCFAF8]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
              <HiClock className="w-5 h-5 text-[#9C6644]" />
              <p className="text-xs font-medium text-[#9C6644] tracking-[0.2em] uppercase">
                Just Arrived
              </p>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#1A1816] mb-3">
              New <span className="font-medium italic">Arrivals</span>
            </h2>
            <p className="text-sm md:text-base text-[#1A1816]/60 font-light max-w-xl">
              Discover our latest additions, featuring fresh designs and
              contemporary interpretations of traditional batik
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`
                  px-4 py-2 text-xs font-medium tracking-[0.1em] uppercase 
                  whitespace-nowrap rounded-sm transition-all duration-300
                  ${
                    activeFilter === tab.id
                      ? "bg-[#1A1816] text-[#FCFAF8]"
                      : "bg-white text-[#1A1816]/70 hover:bg-[#1A1816]/5 hover:text-[#1A1816]"
                  }
                `}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mb-12">
          {filteredProducts.map((product) => (
            <div key={product.id} className="relative group">
              <Card
                title={product.title}
                category={product.category}
                price={product.price}
                originalPrice={product.originalPrice}
                image={product.image}
                badge={product.badge}
                href={product.href}
                isSoldOut={product.isSoldOut}
              />
              {/* Arrival Time Badge */}
              <div className="absolute top-2 right-2 z-10">
                <div className="bg-white/95 backdrop-blur-sm px-2 py-1 rounded-sm shadow-md">
                  <p className="text-[10px] text-[#1A1816]/60 font-medium">
                    {product.arrivalDate}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-[#EAE5DF]">
          <div className="flex items-center gap-3">
            <HiFire className="w-5 h-5 text-[#9C6644]" />
            <p className="text-sm text-[#1A1816]/70 font-light">
              <span className="font-medium text-[#1A1816]">
                {newArrivals.length} new products
              </span>{" "}
              added this month
            </p>
          </div>
          <Link href="/catalog?sort=newest">
            <Button
              variant="secondary"
              size="md"
              rightIcon={<HiArrowRight className="w-4 h-4" />}
            >
              View All New Arrivals
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
