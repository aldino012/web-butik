"use client";

import Link from "next/link";
import Image from "next/image";
import { HiChevronRight, HiHome } from "react-icons/hi2";
import { categoryImages } from "@/data/images";

// Breadcrumb items
const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Catalog", href: "/catalog" },
  { name: "All Products", href: "/catalog", current: true },
];

export default function PageHeader({
  title = "All Collections",
  description = "Discover our complete range of premium batik and contemporary fashion pieces, crafted with tradition and designed for modern elegance.",
  category = "all", // 'all', 'batik-tulis', 'wear-batik', 'men', 'women', 'accessories'
  totalProducts = 156,
}) {
  // Get category image
  const getCategoryImage = () => {
    const imageMap = {
      all: categoryImages.newCollection,
      "batik-tulis": categoryImages.batikTulis,
      "wear-batik": categoryImages.wearBatik,
      men: categoryImages.pria,
      women: categoryImages.wanita,
      accessories: categoryImages.accessories,
    };
    return imageMap[category] || categoryImages.newCollection;
  };

  return (
    <section className="relative bg-[#FCFAF8] overflow-hidden">
      {/* Background Pattern (Subtle) */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="catalog-pattern"
              x="0"
              y="0"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M0,50 Q25,25 50,50 T100,50"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
              />
              <path
                d="M0,75 Q25,50 50,75 T100,75"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
              />
            </pattern>
          </defs>
          <rect
            width="100%"
            height="100%"
            fill="url(#catalog-pattern)"
            className="text-[#9C6644]"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumb */}
        <nav className="py-4 flex items-center gap-2 text-xs text-[#1A1816]/60">
          <Link
            href="/"
            className="hover:text-[#9C6644] transition-colors flex items-center gap-1"
          >
            <HiHome className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>

          {breadcrumbItems.slice(1).map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <HiChevronRight className="w-3 h-3" />
              {item.current ? (
                <span className="text-[#1A1816] font-medium">{item.name}</span>
              ) : (
                <Link
                  href={item.href}
                  className="hover:text-[#9C6644] transition-colors"
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* Main Header Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center py-8 lg:py-12">
          {/* Left: Text Content */}
          <div className="flex flex-col gap-4">
            {/* Category Badge */}
            <div className="flex items-center gap-3">
              <div className="h-[1px] w-8 bg-[#9C6644]" />
              <p className="text-[10px] sm:text-xs font-medium text-[#9C6644] tracking-[0.3em] uppercase">
                {category === "all"
                  ? "Complete Collection"
                  : `${category.replace("-", " ")} Collection`}
              </p>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#1A1816] tracking-tight leading-[1.1]">
              {title}
            </h1>

            {/* Description */}
            <p className="text-sm md:text-base text-[#1A1816]/70 leading-relaxed max-w-lg">
              {description}
            </p>

            {/* Stats */}
            <div className="flex items-center gap-6 pt-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#9C6644] rounded-full" />
                <p className="text-xs text-[#1A1816]/60 tracking-wide">
                  <span className="font-semibold text-[#1A1816]">
                    {totalProducts}
                  </span>{" "}
                  Products
                </p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#D4AF37] rounded-full" />
                <p className="text-xs text-[#1A1816]/60 tracking-wide">
                  <span className="font-semibold text-[#1A1816]">Free</span>{" "}
                  Shipping
                </p>
              </div>
            </div>
          </div>

          {/* Right: Category Image */}
          <div className="relative group hidden lg:block">
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-[#F0EBE6] shadow-xl shadow-[#1A1816]/10">
              <Image
                src={getCategoryImage()}
                alt={title}
                fill
                sizes="50vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                priority
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1816]/40 via-transparent to-transparent" />
            </div>

            {/* Decorative Frame */}
            <div className="absolute -inset-3 border border-[#9C6644]/10 rounded-sm pointer-events-none" />
          </div>
        </div>

        {/* Bottom Divider */}
        <div className="h-[1px] bg-gradient-to-r from-transparent via-[#9C6644]/20 to-transparent" />
      </div>
    </section>
  );
}
