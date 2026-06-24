// src/app/detail/[id]/section/EditorialNewsletter.js
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/Button";
import { HiArrowRight, HiEnvelope, HiCheckCircle } from "react-icons/hi2";
import { productImages } from "@/data/images";

// Helper function untuk mendapatkan gambar dengan aman
const getSafeImage = (index) => {
  const images = productImages.batikShirts;
  if (!images || images.length === 0) return null;
  return images[index % images.length];
};

export default function EditorialNewsletter() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => setIsSubscribed(false), 4000);
      setEmail("");
    }
  };

  return (
    <section className="py-16 md:py-24 bg-[#1A1816] relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg
          className="w-full h-full text-[#9C6644]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="editorialPattern"
              x="0"
              y="0"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="30" cy="30" r="1.5" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#editorialPattern)" />
        </svg>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-7xl mx-auto">
          {/* Left: Editorial / Styling Tips */}
          <div className="order-2 lg:order-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-px bg-[#9C6644]" />
              <p className="text-xs font-medium text-[#9C6644] tracking-[0.3em] uppercase">
                Style Guide
              </p>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#FCFAF8] mb-6 leading-tight">
              How to Wear <br />
              <span className="font-medium italic text-[#9C6644]">
                This Masterpiece
              </span>
            </h2>

            <p className="text-sm md:text-base text-[#FCFAF8]/70 font-light leading-relaxed mb-8">
              The Parang Rusak motif is versatile and powerful. For a formal
              look, pair it with tailored dark trousers and leather loafers. For
              a smart-casual vibe, tuck it into premium denim and finish with
              minimalist sneakers.
            </p>

            <ul className="space-y-4 mb-10">
              {[
                "Pair with solid colors to let the motif shine",
                "Tuck in for formal events, leave out for casual outings",
                "Accessorize with a simple leather watch or bracelet",
              ].map((tip, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-[#9C6644] rounded-full mt-2 flex-shrink-0" />
                  <p className="text-sm text-[#FCFAF8]/80 font-light">{tip}</p>
                </li>
              ))}
            </ul>

            <Link href="/catalog?category=wear-batik">
              <Button
                variant="secondary"
                size="md"
                className="!text-[#FCFAF8] !border-[#FCFAF8]/30 hover:!bg-[#FCFAF8] hover:!text-[#1A1816]"
                rightIcon={<HiArrowRight className="w-4 h-4" />}
              >
                Explore Styling Options
              </Button>
            </Link>
          </div>

          {/* Right: Newsletter Signup */}
          <div className="order-1 lg:order-2">
            <div className="bg-[#FCFAF8] rounded-sm p-8 md:p-12 shadow-2xl">
              <div className="w-14 h-14 rounded-full bg-[#9C6644]/10 flex items-center justify-center mb-6">
                <HiEnvelope className="w-7 h-7 text-[#9C6644]" />
              </div>

              <h3 className="text-2xl md:text-3xl font-light text-[#1A1816] mb-3">
                Join the{" "}
                <span className="font-medium italic">Heritage Circle</span>
              </h3>
              <p className="text-sm text-[#1A1816]/70 font-light leading-relaxed mb-8">
                Subscribe to receive exclusive styling guides, early access to
                new collections, and a special{" "}
                <span className="font-medium text-[#9C6644]">10% discount</span>{" "}
                on your next purchase.
              </p>

              {isSubscribed ? (
                <div className="flex items-center gap-3 p-4 bg-[#9C6644]/10 border border-[#9C6644]/20 rounded-sm animate-fadeIn">
                  <HiCheckCircle className="w-5 h-5 text-[#9C6644]" />
                  <p className="text-sm text-[#1A1816] font-medium">
                    Welcome to the circle! Check your email for your discount
                    code.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="relative">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      required
                      className="w-full bg-transparent border-b-2 border-[#EAE5DF] py-3 px-1 text-sm text-[#1A1816] placeholder-[#1A1816]/40 focus:outline-none focus:border-[#9C6644] transition-colors duration-300"
                    />
                  </div>
                  <Button
                    type="submit"
                    variant="primary"
                    size="md"
                    fullWidth
                    rightIcon={<HiArrowRight className="w-4 h-4" />}
                  >
                    Get My 10% Discount
                  </Button>
                </form>
              )}

              <p className="text-[10px] text-[#1A1816]/40 mt-6 text-center font-light">
                By subscribing, you agree to our Privacy Policy. Unsubscribe
                anytime.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
