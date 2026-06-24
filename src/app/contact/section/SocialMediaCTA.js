// src/app/contact/section/SocialMediaCTA.js
"use client";

import Link from "next/link";
import Button from "@/components/Button";
import { HiArrowRight, HiHeart } from "react-icons/hi2";

const socialLinks = [
  {
    name: "Instagram",
    handle: "@batikheritage",
    url: "https://instagram.com/batikheritage",
    followers: "45.2K",
    description: "Behind-the-scenes & daily inspiration",
  },
  {
    name: "Facebook",
    handle: "Batik Heritage Official",
    url: "https://facebook.com/batikheritage",
    followers: "32.8K",
    description: "Community updates & events",
  },
  {
    name: "TikTok",
    handle: "@batikheritage.id",
    url: "https://tiktok.com/@batikheritage.id",
    followers: "128.5K",
    description: "Process videos & artisan stories",
  },
  {
    name: "YouTube",
    handle: "Batik Heritage Channel",
    url: "https://youtube.com/@batikheritage",
    followers: "18.3K",
    description: "Documentaries & tutorials",
  },
];

export default function SocialMediaCTA() {
  return (
    <section className="py-20 md:py-28 bg-[#1A1816] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg
          className="w-full h-full text-[#9C6644]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="socialPattern"
              x="0"
              y="0"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="30" cy="30" r="2" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#socialPattern)" />
        </svg>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-px bg-[#9C6644]" />
            <p className="text-xs font-medium text-[#9C6644] tracking-[0.3em] uppercase">
              Stay Connected
            </p>
            <div className="w-12 h-px bg-[#9C6644]" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#FCFAF8] mb-4">
            Follow Our{" "}
            <span className="font-medium italic text-[#9C6644]">Journey</span>
          </h2>
          <p className="text-sm md:text-base text-[#FCFAF8]/70 font-light leading-relaxed">
            Join our growing community of batik enthusiasts. Get exclusive
            content, early access to new collections, and behind-the-scenes
            stories from our artisans.
          </p>
        </div>

        {/* Social Media Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-20">
          {socialLinks.map((social, index) => (
            <Link
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-sm p-6 hover:bg-white/10 hover:border-[#9C6644]/50 transition-all duration-300"
            >
              {/* Platform Name */}
              <p className="text-xs text-[#9C6644] uppercase tracking-wider mb-2">
                {social.name}
              </p>

              {/* Handle */}
              <h3 className="text-lg font-medium text-[#FCFAF8] mb-3 group-hover:text-[#9C6644] transition-colors duration-300">
                {social.handle}
              </h3>

              {/* Followers Count */}
              <p className="text-2xl font-light text-[#FCFAF8] mb-3">
                {social.followers}
                <span className="text-xs text-[#FCFAF8]/50 ml-1">
                  followers
                </span>
              </p>

              {/* Description */}
              <p className="text-xs text-[#FCFAF8]/60 font-light leading-relaxed">
                {social.description}
              </p>

              {/* Arrow Icon */}
              <div className="mt-4 flex items-center gap-2 text-[#9C6644] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-xs font-medium uppercase tracking-wider">
                  Follow
                </span>
                <HiArrowRight className="w-4 h-4" />
              </div>
            </Link>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#9C6644]/30 to-transparent mb-20" />

        {/* Final CTA Section */}
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <HiHeart className="w-6 h-6 text-[#9C6644]" />
            <p className="text-xs font-medium text-[#9C6644] tracking-[0.2em] uppercase">
              Thank You for Your Interest
            </p>
          </div>

          <h3 className="text-2xl md:text-3xl lg:text-4xl font-light text-[#FCFAF8] mb-6 leading-tight">
            Ready to Experience the{" "}
            <span className="font-medium italic text-[#9C6644]">
              Art of Batik?
            </span>
          </h3>

          <p className="text-sm md:text-base text-[#FCFAF8]/70 font-light leading-relaxed mb-10 max-w-2xl mx-auto">
            Whether you're looking for a timeless piece for your wardrobe, a
            meaningful gift, or a custom creation for a special occasion, we're
            here to help you find the perfect batik.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/catalog">
              <Button
                variant="primary"
                size="lg"
                className="!bg-[#FCFAF8] !text-[#1A1816] !border-[#FCFAF8] hover:!bg-[#9C6644] hover:!border-[#9C6644] hover:!text-[#FCFAF8]"
                rightIcon={<HiArrowRight className="w-4 h-4" />}
              >
                Explore Collections
              </Button>
            </Link>
            <Link href="/about">
              <Button
                variant="secondary"
                size="lg"
                className="!text-[#FCFAF8] !border-[#FCFAF8]/30 hover:!bg-[#FCFAF8] hover:!text-[#1A1816]"
              >
                Our Story
              </Button>
            </Link>
          </div>

          {/* Trust Badge */}
          <div className="mt-16 pt-8 border-t border-white/10">
            <p className="text-xs text-[#FCFAF8]/40 mb-4">
              Trusted by customers worldwide
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
              {[
                "Free Shipping",
                "Secure Payment",
                "Quality Guarantee",
                "24/7 Support",
              ].map((badge, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#9C6644] rounded-full" />
                  <p className="text-xs text-[#FCFAF8]/60 font-light">
                    {badge}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
