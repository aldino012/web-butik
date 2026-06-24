// src/app/collections/section/Testimonials.js
"use client";

import { useState } from "react";
import Image from "next/image";
import Button from "@/components/Button";
import {
  HiStar,
  HiArrowLeft,
  HiArrowRight,
  HiChatBubbleLeftRight,
} from "react-icons/hi2";
import { productImages } from "@/data/images";

// Fallback avatar jika gambar tidak tersedia
const defaultAvatar = "/images/default-avatar.jpg"; // Atau gunakan gambar placeholder

const testimonials = [
  {
    id: 1,
    name: "Sarah Wijaya",
    location: "Jakarta",
    role: "Fashion Enthusiast",
    // Gunakan index yang ada (0-6 misalnya) atau modulo untuk wrap around
    avatar: productImages.batikShirts[0] || null,
    rating: 5,
    title: "Kualitas yang Tak Tertandingi",
    quote:
      "Batik tulis dari koleksi Heritage Signature benar-benar luar biasa. Detail motifnya sangat halus dan bahannya nyaman dipakai seharian. Ini adalah investasi fashion terbaik yang pernah saya buat.",
    product: "Sogan Classic Heritage",
    date: "2 weeks ago",
  },
  {
    id: 2,
    name: "Budi Santoso",
    location: "Surabaya",
    role: "Business Professional",
    avatar: productImages.batikShirts[1] || null,
    rating: 5,
    title: "Sempurna untuk Acara Formal",
    quote:
      "Saya membeli Royal Parang Silk untuk acara pernikahan dan mendapat banyak pujian. Cutting-nya modern tapi tetap mempertahankan esensi batik tradisional. Highly recommended!",
    product: "Royal Parang Silk",
    date: "1 month ago",
  },
  {
    id: 3,
    name: "Dewi Lestari",
    location: "Bandung",
    role: "Art Collector",
    avatar: productImages.batikShirts[2] || null,
    rating: 5,
    title: "Seni yang Bisa Dipakai",
    quote:
      "Setiap piece dari Batik Heritage adalah karya seni. Saya mengoleksi 5 piece berbeda dan semuanya memiliki karakter unik. Packaging-nya juga sangat premium, cocok untuk hadiah.",
    product: "Mega Mendung Silk",
    date: "3 weeks ago",
  },
  {
    id: 4,
    name: "Andi Pratama",
    location: "Yogyakarta",
    role: "Cultural Advocate",
    avatar: productImages.batikShirts[3] || null,
    rating: 5,
    title: "Melestarikan Warisan Budaya",
    quote:
      "Saya appreciate banget komitmen brand ini dalam melestarikan batik tradisional. Setiap pembelian berarti mendukung pengrajin lokal. Kualitasnya juga tidak perlu diragukan lagi.",
    product: "Truntum Elegance",
    date: "1 week ago",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const activeTestimonial = testimonials[activeIndex];

  return (
    <section className="py-16 md:py-24 bg-[#F5F0EB]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="flex items-center justify-center gap-3 mb-3">
            <HiChatBubbleLeftRight className="w-5 h-5 text-[#9C6644]" />
            <p className="text-xs font-medium text-[#9C6644] tracking-[0.2em] uppercase">
              Customer Stories
            </p>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#1A1816] mb-3">
            Loved by <span className="font-medium italic">Thousands</span>
          </h2>
          <p className="text-sm md:text-base text-[#1A1816]/60 font-light max-w-2xl mx-auto">
            Don't just take our word for it. Hear from our community of batik
            enthusiasts who have made our pieces part of their story.
          </p>
        </div>

        {/* Main Testimonial Display */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: Large Quote Display */}
            <div className="lg:col-span-7 bg-white rounded-sm p-8 md:p-12 shadow-sm">
              {/* Quote Icon */}
              <div className="text-6xl text-[#9C6644]/20 font-serif leading-none mb-4">
                "
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(activeTestimonial.rating)].map((_, i) => (
                  <HiStar
                    key={i}
                    className="w-5 h-5 text-[#9C6644] fill-[#9C6644]"
                  />
                ))}
              </div>

              {/* Quote Text */}
              <blockquote className="text-lg md:text-xl lg:text-2xl font-light text-[#1A1816] leading-relaxed mb-8 italic">
                {activeTestimonial.quote}
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center gap-4 pt-6 border-t border-[#EAE5DF]">
                <div className="w-14 h-14 rounded-full overflow-hidden bg-[#F5F0EB]">
                  {activeTestimonial.avatar ? (
                    <Image
                      src={activeTestimonial.avatar}
                      alt={activeTestimonial.name}
                      width={56}
                      height={56}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    // Fallback avatar dengan inisial nama
                    <div className="w-full h-full flex items-center justify-center bg-[#9C6644]/20 text-[#9C6644] font-medium text-sm">
                      {activeTestimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                  )}
                </div>
                <div className="flex-1">
                  <h4 className="text-base font-medium text-[#1A1816]">
                    {activeTestimonial.name}
                  </h4>
                  <p className="text-xs text-[#1A1816]/60">
                    {activeTestimonial.role} • {activeTestimonial.location}
                  </p>
                </div>
                <div className="text-right hidden sm:block">
                  <p className="text-[10px] text-[#1A1816]/40 uppercase tracking-wider">
                    Purchased
                  </p>
                  <p className="text-xs font-medium text-[#9C6644]">
                    {activeTestimonial.product}
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Thumbnail List & Navigation */}
            <div className="lg:col-span-5 space-y-4">
              {/* Testimonial Thumbnails */}
              <div className="space-y-3">
                {testimonials.map((testimonial, index) => (
                  <button
                    key={testimonial.id}
                    onClick={() => setActiveIndex(index)}
                    className={`
                      w-full text-left p-4 rounded-sm transition-all duration-300
                      ${
                        activeIndex === index
                          ? "bg-white shadow-md border-l-4 border-[#9C6644]"
                          : "bg-white/50 hover:bg-white border-l-4 border-transparent"
                      }
                    `}
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full overflow-hidden bg-[#F5F0EB] flex-shrink-0">
                        {testimonial.avatar ? (
                          <Image
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            width={40}
                            height={40}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-[#9C6644]/20 text-[#9C6644] font-medium text-xs">
                            {testimonial.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </div>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h5 className="text-sm font-medium text-[#1A1816] truncate">
                          {testimonial.name}
                        </h5>
                        <p className="text-xs text-[#1A1816]/60 truncate">
                          {testimonial.title}
                        </p>
                        <div className="flex items-center gap-1 mt-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <HiStar
                              key={i}
                              className="w-3 h-3 text-[#9C6644] fill-[#9C6644]"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              {/* Navigation Arrows */}
              <div className="flex items-center justify-between pt-4">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handlePrev}
                  className="!border-[#1A1816]/20"
                >
                  <HiArrowLeft className="w-4 h-4" />
                  <span className="hidden sm:inline ml-2">Previous</span>
                </Button>

                {/* Dots Indicator */}
                <div className="flex items-center gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveIndex(index)}
                      className={`
                        transition-all duration-300 rounded-full
                        ${
                          activeIndex === index
                            ? "w-8 h-2 bg-[#9C6644]"
                            : "w-2 h-2 bg-[#1A1816]/20 hover:bg-[#1A1816]/40"
                        }
                      `}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>

                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleNext}
                  className="!border-[#1A1816]/20"
                >
                  <span className="hidden sm:inline mr-2">Next</span>
                  <HiArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-12 border-t border-[#EAE5DF]">
          {[
            { value: "12K+", label: "Happy Customers" },
            { value: "4.9/5", label: "Average Rating" },
            { value: "98%", label: "Would Recommend" },
            { value: "50+", label: "Cities Served" },
          ].map((stat, idx) => (
            <div key={idx} className="text-center">
              <p className="text-2xl md:text-3xl font-light text-[#1A1816] mb-1">
                {stat.value}
              </p>
              <p className="text-xs text-[#1A1816]/60 uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}