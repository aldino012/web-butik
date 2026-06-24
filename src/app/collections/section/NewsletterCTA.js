// src/app/collections/section/NewsletterCTA.js
"use client";

import { useState } from "react";
import Image from "next/image";
import Button from "@/components/Button";
import { HiEnvelope, HiArrowRight, HiCheckCircle } from "react-icons/hi2";
import { productImages } from "@/data/images";

export default function NewsletterCTA() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      // Simulasi subscribe
      setIsSubscribed(true);
      setTimeout(() => setIsSubscribed(false), 3000);
      setEmail("");
    }
  };

  return (
    <section className="relative py-16 md:py-24 bg-[#1A1816] overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 hidden lg:block">
        <Image
          src={productImages.batikShirts[14] || productImages.batikShirts[0]}
          alt="Background Pattern"
          width={800}
          height={1000}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#1A1816] via-[#1A1816]/95 to-[#1A1816]/80" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content: Copy & Form */}
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-6">
              <HiEnvelope className="w-5 h-5 text-[#9C6644]" />
              <p className="text-xs font-medium text-[#9C6644] tracking-[0.2em] uppercase">
                The Heritage Circle
              </p>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#FCFAF8] mb-4 leading-tight">
              Stay Connected with <br />
              <span className="font-medium italic text-[#9C6644]">
                Our Artisans
              </span>
            </h2>

            <p className="text-sm md:text-base text-[#FCFAF8]/70 font-light leading-relaxed mb-8">
              Join our exclusive community to receive early access to new
              collections, behind-the-scenes stories from our master artisans,
              and special privileges reserved only for our inner circle.
            </p>

            {/* Subscription Form */}
            {isSubscribed ? (
              <div className="flex items-center gap-3 p-4 bg-[#9C6644]/10 border border-[#9C6644]/30 rounded-sm">
                <HiCheckCircle className="w-5 h-5 text-[#9C6644]" />
                <p className="text-sm text-[#FCFAF8]">
                  Welcome to the Heritage Circle! Check your inbox for a special
                  gift.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-3"
              >
                <div className="relative flex-1">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="
                      w-full bg-transparent border-b border-[#FCFAF8]/30 
                      py-3 px-1 text-sm text-[#FCFAF8] placeholder-[#FCFAF8]/40 
                      focus:outline-none focus:border-[#9C6644] transition-colors duration-300
                    "
                  />
                </div>
                <Button
                  type="submit"
                  variant="primary"
                  size="md"
                  className="!bg-[#FCFAF8] !text-[#1A1816] !border-[#FCFAF8] hover:!bg-[#9C6644] hover:!border-[#9C6644] hover:!text-[#FCFAF8]"
                  rightIcon={<HiArrowRight className="w-4 h-4" />}
                >
                  Subscribe
                </Button>
              </form>
            )}

            <p className="text-[10px] text-[#FCFAF8]/40 mt-4 font-light">
              By subscribing, you agree to our Privacy Policy. Unsubscribe
              anytime.
            </p>
          </div>

          {/* Right Content: Visual & Secondary CTA */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-sm overflow-hidden border border-[#FCFAF8]/10">
              <Image
                src={
                  productImages.batikShirts[15] || productImages.batikShirts[2]
                }
                alt="Exclusive Collection Preview"
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
              {/* Overlay Content */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1816] via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <p className="text-xs text-[#9C6644] tracking-wider uppercase mb-2">
                  Members Only
                </p>
                <h3 className="text-xl md:text-2xl font-light text-[#FCFAF8] mb-4">
                  Unlock 10% off your first heritage piece
                </h3>
                <Button
                  variant="secondary"
                  size="sm"
                  className="!text-[#FCFAF8] !border-[#FCFAF8]/50 hover:!bg-[#FCFAF8] hover:!text-[#1A1816]"
                  rightIcon={<HiArrowRight className="w-4 h-4" />}
                >
                  Claim Your Reward
                </Button>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -top-4 -right-4 md:top-6 md:-right-6 bg-[#9C6644] text-[#FCFAF8] p-4 md:p-6 rounded-sm shadow-2xl hidden sm:block">
              <p className="text-2xl md:text-3xl font-medium">10%</p>
              <p className="text-[10px] uppercase tracking-wider text-center">
                OFF
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
