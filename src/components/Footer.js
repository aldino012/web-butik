"use client";

import Link from "next/link";
import { useState } from "react";
import {
  HiOutlineEnvelope,
  HiOutlineMapPin,
  HiOutlinePhone,
  HiArrowRight,
} from "react-icons/hi2";
// Menggunakan Font Awesome 6 untuk ikon brand sosial media
import {
  FaInstagram,
  FaFacebookF,
  FaTiktok,
  FaPinterestP,
} from "react-icons/fa6";

// Data navigasi footer (bisa dipisah ke file constants)
const footerLinks = {
  shop: [
    { name: "New Arrivals", href: "/catalog/new" },
    { name: "Best Sellers", href: "/catalog/best-sellers" },
    { name: "Batik Tulis", href: "/catalog/batik-tulis" },
    { name: "Wear Batik", href: "/catalog/wear-batik" },
    { name: "Accessories", href: "/catalog/accessories" },
  ],
  help: [
    { name: "Contact Us", href: "/contact" },
    { name: "Shipping & Delivery", href: "/shipping" },
    { name: "Returns & Exchanges", href: "/returns" },
    { name: "Size Guide", href: "/size-guide" },
    { name: "FAQ", href: "/faq" },
  ],
  company: [
    { name: "Our Heritage", href: "/about" },
    { name: "Sustainability", href: "/sustainability" },
    { name: "Careers", href: "/careers" },
    { name: "Press", href: "/press" },
  ],
};

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      // Logika subscription ke backend/API bisa ditambahkan di sini
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 3000); // Reset pesan setelah 3 detik
    }
  };

  return (
    <footer className="bg-[#1A1816] text-[#FCFAF8] mt-20">
      {/* 1. Newsletter Section */}
      <div className="border-b border-[#FCFAF8]/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center">
          <h3 className="text-[10px] sm:text-xs font-medium text-[#D4AF37] tracking-[0.3em] uppercase mb-4">
            Join The Maison
          </h3>
          <h2 className="text-2xl md:text-3xl font-light tracking-tight mb-3 max-w-xl mx-auto">
            Subscribe to our newsletter
          </h2>
          <p className="text-sm text-[#FCFAF8]/60 mb-8 max-w-md mx-auto">
            Be the first to know about new collections, exclusive events, and
            special offers.
          </p>

          <form
            onSubmit={handleSubscribe}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <div className="relative flex-grow">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="w-full px-4 py-3 bg-transparent border border-[#FCFAF8]/20 rounded-sm text-sm text-[#FCFAF8] placeholder-[#FCFAF8]/40 focus:outline-none focus:border-[#D4AF37] transition-colors"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-3 bg-[#FCFAF8] text-[#1A1816] text-xs font-medium tracking-[0.15em] uppercase rounded-sm hover:bg-[#D4AF37] hover:text-[#1A1816] transition-colors duration-300 flex items-center justify-center gap-2"
            >
              Subscribe
              <HiArrowRight className="w-4 h-4" />
            </button>
          </form>
          {isSubscribed && (
            <p className="mt-4 text-sm text-[#D4AF37] animate-pulse">
              Thank you for subscribing!
            </p>
          )}
        </div>
      </div>

      {/* 2. Main Links Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand Info & Contact */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <Link href="/" className="inline-block">
              <h2 className="text-xl font-light tracking-[0.3em] uppercase text-[#FCFAF8]">
                Maison <span className="font-normal text-[#D4AF37]">Batik</span>
              </h2>
            </Link>
            <p className="text-sm text-[#FCFAF8]/60 leading-relaxed max-w-sm">
              Preserving the rich heritage of Indonesian batik through
              contemporary design and sustainable craftsmanship.
            </p>

            {/* Contact Details */}
            <div className="flex flex-col gap-3 mt-2">
              <a
                href="mailto:hello@maisonbatik.com"
                className="flex items-center gap-3 text-sm text-[#FCFAF8]/60 hover:text-[#D4AF37] transition-colors"
              >
                <HiOutlineEnvelope className="w-4 h-4 flex-shrink-0" />
                hello@maisonbatik.com
              </a>
              <a
                href="tel:+6281234567890"
                className="flex items-center gap-3 text-sm text-[#FCFAF8]/60 hover:text-[#D4AF37] transition-colors"
              >
                <HiOutlinePhone className="w-4 h-4 flex-shrink-0" />
                +62 812 3456 7890
              </a>
              <div className="flex items-start gap-3 text-sm text-[#FCFAF8]/60">
                <HiOutlineMapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>Jl. Kemang Raya No. 12, Jakarta Selatan, Indonesia</span>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="flex items-center gap-4 mt-4">
              {[
                { icon: FaInstagram, href: "#", label: "Instagram" },
                { icon: FaFacebookF, href: "#", label: "Facebook" },
                { icon: FaTiktok, href: "#", label: "TikTok" },
                { icon: FaPinterestP, href: "#", label: "Pinterest" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 flex items-center justify-center border border-[#FCFAF8]/20 rounded-full text-[#FCFAF8]/60 hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all duration-300"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="text-[11px] font-semibold text-[#D4AF37] tracking-[0.2em] uppercase mb-6">
              Shop
            </h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#FCFAF8]/60 hover:text-[#FCFAF8] transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Care Links */}
          <div>
            <h4 className="text-[11px] font-semibold text-[#D4AF37] tracking-[0.2em] uppercase mb-6">
              Customer Care
            </h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.help.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#FCFAF8]/60 hover:text-[#FCFAF8] transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-[11px] font-semibold text-[#D4AF37] tracking-[0.2em] uppercase mb-6">
              Maison
            </h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#FCFAF8]/60 hover:text-[#FCFAF8] transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* 3. Bottom Bar (Copyright, Payments, Legal) */}
      <div className="border-t border-[#FCFAF8]/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-xs text-[#FCFAF8]/40 text-center md:text-left order-2 md:order-1">
              &copy; {new Date().getFullYear()} Maison Batik. All rights
              reserved.
            </p>

            {/* Payment Methods (Minimalist Text Approach) */}
            <div className="flex items-center gap-4 text-[10px] font-medium text-[#FCFAF8]/40 tracking-wider uppercase order-1 md:order-2">
              <span>We Accept:</span>
              <div className="flex items-center gap-2">
                <span className="px-2 py-1 border border-[#FCFAF8]/20 rounded-sm">
                  Visa
                </span>
                <span className="px-2 py-1 border border-[#FCFAF8]/20 rounded-sm">
                  Mastercard
                </span>
                <span className="px-2 py-1 border border-[#FCFAF8]/20 rounded-sm">
                  BCA
                </span>
                <span className="px-2 py-1 border border-[#FCFAF8]/20 rounded-sm">
                  Mandiri
                </span>
              </div>
            </div>

            {/* Legal Links */}
            <div className="flex items-center gap-6 order-3">
              <Link
                href="/privacy"
                className="text-xs text-[#FCFAF8]/40 hover:text-[#FCFAF8] transition-colors"
              >
                Privacy
              </Link>
              <Link
                href="/terms"
                className="text-xs text-[#FCFAF8]/40 hover:text-[#FCFAF8] transition-colors"
              >
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}