"use client";

import { HiOutlineStar } from "react-icons/hi2";

// Dummy data testimoni
const testimonials = [
  {
    id: 1,
    quote:
      "The craftsmanship is unparalleled. You can feel the history and the soul in every stitch of the batik. It's not just clothing; it's art.",
    author: "Sarah Wijaya",
    title: "Fashion Enthusiast, Jakarta",
    rating: 5,
  },
  {
    id: 2,
    quote:
      "I've never found a brand that balances tradition and modernity this perfectly. The fit is impeccable, and the fabric breathes beautifully.",
    author: "Michael Tan",
    title: "Creative Director, Singapore",
    rating: 5,
  },
  {
    id: 3,
    quote:
      "Maison Batik has redefined how I wear heritage. The pieces are versatile enough for the office yet distinct enough for special occasions.",
    author: "Ayumi Sato",
    title: "Architect, Tokyo",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-[#FCFAF8]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <p className="text-[10px] sm:text-xs font-medium text-[#9C6644] tracking-[0.3em] uppercase mb-3">
            Client Voices
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#1A1816] tracking-tight">
            Words from Our{" "}
            <span className="italic font-normal text-[#9C6644]">Community</span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="flex flex-col p-8 bg-white border border-[#EAE5DF] rounded-sm hover:shadow-lg hover:shadow-[#1A1816]/5 transition-all duration-300"
            >
              {/* Rating Stars (Subtle Gold) */}
              <div className="flex gap-1 mb-6">
                {[...Array(item.rating)].map((_, i) => (
                  <HiOutlineStar
                    key={i}
                    className="w-4 h-4 text-[#D4AF37] fill-[#D4AF37]"
                  />
                ))}
              </div>

              {/* Quote Text */}
              <p className="text-base md:text-lg text-[#1A1816]/80 leading-relaxed italic font-light mb-8 flex-grow">
                "{item.quote}"
              </p>

              {/* Divider */}
              <div className="w-12 h-[1px] bg-[#9C6644]/30 mb-4" />

              {/* Author Info */}
              <div>
                <p className="text-sm font-medium text-[#1A1816] tracking-wide">
                  {item.author}
                </p>
                <p className="text-xs text-[#1A1816]/50 tracking-[0.1em] uppercase mt-1">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA / Trust Badge */}
        <div className="mt-16 text-center">
          <p className="text-xs text-[#1A1816]/40 tracking-[0.2em] uppercase">
            Trusted by over 10,000+ customers worldwide
          </p>
        </div>
      </div>
    </section>
  );
}
