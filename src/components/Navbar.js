"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  HiOutlineBars3,
  HiOutlineMagnifyingGlass,
  HiOutlineHeart,
  HiOutlineShoppingBag,
  HiOutlineUser,
  HiXMark,
  HiArrowRight,
} from "react-icons/hi2";
import Modal from "./Modal";

// Data navigasi (bisa dipisah ke file constants jika banyak)
const navLinks = [
  { name: "Home", href: "/" },
  { name: "Catalog", href: "/catalog" },
  { name: "Collections", href: "/collections" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

/**
 * Universal Navbar Component for Batik/Boutique E-commerce
 * Features: Transparent-to-solid scroll effect, mobile drawer, search modal.
 */
export default function Navbar({ transparent = false }) {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Dummy data untuk badge (nanti bisa diganti dengan Context/State global)
  const cartCount = 2;
  const wishlistCount = 0;

  // Handle Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll saat mobile menu terbuka
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  // Logika warna dinamis berdasarkan scroll dan prop transparent
  const isDarkMode = transparent && !isScrolled;
  const textColor = isDarkMode ? "text-white" : "text-[#1A1816]";
  const hoverColor = isDarkMode
    ? "hover:text-[#D4AF37]"
    : "hover:text-[#9C6644]";
  const bgColor = isScrolled
    ? "bg-[#FCFAF8]/95 backdrop-blur-md border-b border-[#EAE5DF] shadow-sm"
    : transparent
      ? "bg-transparent"
      : "bg-[#FCFAF8]/95 backdrop-blur-md";

  return (
    <>
      {/* MAIN NAVBAR */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${bgColor}`}
      >
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* KIRI: Mobile Menu Toggle & Desktop Links */}
            <div className="flex items-center gap-8">
              {/* Tombol Hamburger (Mobile) */}
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className={`lg:hidden p-2 -ml-2 transition-colors ${textColor} ${hoverColor}`}
                aria-label="Open menu"
              >
                <HiOutlineBars3 className="w-6 h-6" />
              </button>

              {/* Link Navigasi (Desktop) */}
              <div className="hidden lg:flex items-center gap-8">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={`
                        text-[11px] font-medium tracking-[0.2em] uppercase transition-colors duration-200
                        ${isActive ? "text-[#9C6644]" : `${textColor} ${hoverColor}`}
                        ${isDarkMode && isActive ? "text-[#D4AF37]" : ""}
                      `}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* TENGAH: Logo */}
            <Link
              href="/"
              className={`absolute left-1/2 -translate-x-1/2 transition-colors ${textColor}`}
            >
              <h1 className="text-xl font-light tracking-[0.3em] uppercase">
                Maison <span className="font-normal">Batik</span>
              </h1>
            </Link>

            {/* KANAN: Utility Icons */}
            <div
              className={`flex items-center gap-4 sm:gap-6 transition-colors ${textColor}`}
            >
              {/* Search (Membuka Modal) */}
              <button
                onClick={() => setIsSearchOpen(true)}
                className={`p-2 transition-colors ${hoverColor}`}
                aria-label="Search"
              >
                <HiOutlineMagnifyingGlass className="w-5 h-5" />
              </button>

              {/* Wishlist (Tersembunyi di layar sangat kecil) */}
              <Link
                href="/wishlist"
                className={`relative p-2 transition-colors ${hoverColor} hidden sm:block`}
              >
                <HiOutlineHeart className="w-5 h-5" />
                {wishlistCount > 0 && (
                  <span className="absolute top-0.5 right-0.5 w-4 h-4 bg-[#9C6644] text-white text-[9px] font-bold flex items-center justify-center rounded-full">
                    {wishlistCount}
                  </span>
                )}
              </Link>

              {/* Cart */}
              <Link
                href="/cart"
                className={`relative p-2 transition-colors ${hoverColor}`}
              >
                <HiOutlineShoppingBag className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute top-0.5 right-0.5 w-4 h-4 bg-[#9C6644] text-white text-[9px] font-bold flex items-center justify-center rounded-full">
                    {cartCount}
                  </span>
                )}
              </Link>

              {/* Account (Tersembunyi di layar sangat kecil) */}
              <Link
                href="/profile"
                className={`p-2 transition-colors ${hoverColor} hidden sm:block`}
              >
                <HiOutlineUser className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* MOBILE MENU DRAWER */}
      <div
        className={`
        fixed inset-0 z-[60] transition-opacity duration-300 lg:hidden
        ${isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
      `}
      >
        {/* Backdrop Overlay */}
        <div
          className="absolute inset-0 bg-[#1A1816]/60 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Drawer Panel */}
        <div
          className={`
          absolute top-0 left-0 h-full w-80 max-w-[85vw] bg-[#FCFAF8] shadow-2xl
          transition-transform duration-300 ease-out
          ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}
        `}
        >
          <div className="flex items-center justify-between p-4 border-b border-[#EAE5DF]">
            <h2 className="text-sm font-light tracking-[0.2em] uppercase text-[#1A1816]">
              Menu
            </h2>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 text-[#1A1816] hover:text-[#9C6644] transition-colors"
              aria-label="Close menu"
            >
              <HiXMark className="w-5 h-5" />
            </button>
          </div>

          <div className="p-6 flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`
                    flex items-center justify-between py-3 border-b border-[#EAE5DF]/50
                    text-sm font-medium tracking-[0.15em] uppercase transition-colors
                    ${isActive ? "text-[#9C6644]" : "text-[#1A1816] hover:text-[#9C6644]"}
                  `}
                >
                  {link.name}
                  <HiArrowRight className="w-4 h-4 opacity-50" />
                </Link>
              );
            })}

            {/* Utility Links di Mobile */}
            <div className="mt-8 pt-6 border-t border-[#EAE5DF] flex flex-col gap-4">
              <Link
                href="/profile"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-3 text-sm text-[#1A1816] hover:text-[#9C6644] transition-colors"
              >
                <HiOutlineUser className="w-5 h-5" /> My Account
              </Link>
              <Link
                href="/wishlist"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-3 text-sm text-[#1A1816] hover:text-[#9C6644] transition-colors"
              >
                <HiOutlineHeart className="w-5 h-5" /> Wishlist
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* SEARCH MODAL (Reuse Komponen Modal) */}
      <Modal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        size="lg"
        title="Search Collection"
      >
        <div className="flex flex-col gap-6">
          {/* Input Pencarian */}
          <div className="relative">
            <HiOutlineMagnifyingGlass className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#9C6644]" />
            <input
              type="text"
              placeholder="Search for batik, shirts, dresses..."
              className="w-full pl-12 pr-4 py-3 bg-[#F0EBE6] border border-[#EAE5DF] rounded-sm text-sm text-[#1A1816] placeholder-[#A39E99] focus:outline-none focus:border-[#9C6644] transition-colors"
              autoFocus
            />
          </div>

          {/* Popular Searches */}
          <div>
            <p className="text-[10px] font-medium text-[#9C6644] tracking-[0.2em] uppercase mb-3">
              Popular Searches
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                "Batik Tulis",
                "Mega Mendung",
                "Kemeja Pria",
                "Dress Wanita",
                "Parang",
              ].map((tag) => (
                <button
                  key={tag}
                  onClick={() => setIsSearchOpen(false)}
                  className="px-3 py-1.5 bg-[#FCFAF8] border border-[#EAE5DF] text-[11px] font-medium text-[#1A1816] tracking-wide uppercase hover:border-[#9C6644] hover:text-[#9C6644] transition-colors rounded-sm"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}