"use client";

import Image from "next/image";
import Link from "next/link";
import { HiOutlineHeart, HiHeart } from "react-icons/hi2";

export default function Card({
  title = "Batik Tulis Premium",
  category = "Koleksi Eksklusif",
  price = "Rp 850.000",
  originalPrice = null,
  image = "/images/placeholder-batik.jpg",
  alt = "Premium Batik Shirt",
  badge = null,
  href = "/detail/1",
  isSoldOut = false,
  isWishlisted = false,
  onWishlistClick = () => {},
}) {
  return (
    <div className="group relative flex flex-col bg-[#FCFAF8] border border-[#EAE5DF] rounded-sm overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-[#1A1816]/5">
      {/* Image Section */}
      <Link
        href={href}
        className="relative block w-full aspect-[3/4] overflow-hidden bg-[#F0EBE6]"
      >
        <Image
          src={image}
          alt={alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className={`object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${
            isSoldOut ? "opacity-50 grayscale-[20%]" : ""
          }`}
        />

        {/* Sold Out Overlay */}
        {isSoldOut && (
          <div className="absolute inset-0 flex items-center justify-center bg-[#1A1816]/10 backdrop-blur-[1px]">
            <span className="px-4 py-2 bg-[#FCFAF8] text-[#1A1816] text-[10px] font-bold tracking-[0.2em] uppercase border border-[#1A1816]">
              Sold Out
            </span>
          </div>
        )}

        {/* Badge */}
        {badge && !isSoldOut && (
          <div className="absolute top-3 left-3 px-2.5 py-1 bg-[#1A1816] text-[#D4AF37] text-[10px] font-bold tracking-[0.15em] uppercase shadow-sm">
            {badge}
          </div>
        )}

        {/* Wishlist Button (Updated with react-icons) */}
        <button
          onClick={(e) => {
            e.preventDefault();
            onWishlistClick();
          }}
          className="absolute top-3 right-3 p-2 bg-[#FCFAF8]/90 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-[#FCFAF8] hover:scale-110"
          aria-label="Add to wishlist"
        >
          {isWishlisted ? (
            <HiHeart className="w-4 h-4 text-[#9C6644] transition-colors duration-200" />
          ) : (
            <HiOutlineHeart className="w-4 h-4 text-[#1A1816] transition-colors duration-200" />
          )}
        </button>
      </Link>

      {/* Content Section */}
      <div className="p-4 flex flex-col gap-1.5 flex-grow">
        <p className="text-[10px] font-medium text-[#9C6644] tracking-[0.2em] uppercase">
          {category}
        </p>

        <Link href={href} className="group/title">
          <h3 className="text-sm font-medium text-[#1A1816] tracking-wide leading-tight line-clamp-2 group-hover/title:text-[#9C6644] transition-colors duration-200">
            {title}
          </h3>
        </Link>

        <div className="flex items-center gap-2 mt-auto pt-2">
          <span
            className={`text-sm font-semibold ${isSoldOut ? "text-[#A39E99]" : "text-[#1A1816]"}`}
          >
            {price}
          </span>
          {originalPrice && !isSoldOut && (
            <span className="text-xs text-[#A39E99] line-through">
              {originalPrice}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}