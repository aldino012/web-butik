// src/app/detail/[id]/section/ProductOverview.js
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/Button";
import {
  HiStar,
  HiHeart,
  HiShare,
  HiMinus,
  HiPlus,
  HiCheck,
  HiTruck,
  HiShieldCheck,
  HiArrowPath,
  HiChevronRight,
} from "react-icons/hi2";
import { productImages } from "@/data/images";

// Helper function untuk mendapatkan gambar dengan aman
const getSafeImage = (index) => {
  const images = productImages.batikShirts;
  if (!images || images.length === 0) return null;
  return images[index % images.length];
};

// Dummy product data
const productData = {
  id: "product-1",
  title: "Parang Rusak Premium Batik Tulis",
  category: "Batik Tulis",
  brand: "Heritage Signature",
  rating: 4.8,
  reviewCount: 128,
  price: 2850000,
  originalPrice: 3500000,
  discount: 19,
  description:
    "Batik tulis premium dengan motif Parang Rusak yang melambangkan kekuatan dan keberanian. Dikerjakan oleh master artisan dengan teknik tradisional yang telah diwariskan selama berabad-abad.",
  colors: [
    { name: "Sogan Classic", value: "#8B4513", image: getSafeImage(0) },
    { name: "Indigo Blue", value: "#1E3A5F", image: getSafeImage(1) },
    { name: "Black Premium", value: "#1A1816", image: getSafeImage(2) },
  ],
  sizes: ["S", "M", "L", "XL", "XXL"],
  images: [getSafeImage(3), getSafeImage(4), getSafeImage(5), getSafeImage(6)],
  inStock: true,
  stockCount: 8,
};

export default function ProductOverview() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size");
      return;
    }
    console.log("Added to cart:", {
      product: productData.title,
      color: productData.colors[selectedColor].name,
      size: selectedSize,
      quantity: quantity,
    });
  };

  return (
    <section className="py-8 md:py-12 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-[#1A1816]/60 mb-8">
          <Link href="/" className="hover:text-[#9C6644] transition-colors">
            Home
          </Link>
          <HiChevronRight className="w-3 h-3" />
          <Link
            href="/catalog"
            className="hover:text-[#9C6644] transition-colors"
          >
            Catalog
          </Link>
          <HiChevronRight className="w-3 h-3" />
          <Link
            href="/catalog?category=batik-tulis"
            className="hover:text-[#9C6644] transition-colors"
          >
            Batik Tulis
          </Link>
          <HiChevronRight className="w-3 h-3" />
          <span className="text-[#1A1816] font-medium truncate">
            {productData.title}
          </span>
        </nav>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left: Image Gallery (7 columns) */}
          <div className="lg:col-span-7">
            <div className="sticky top-24">
              {/* Main Image */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-[#F5F0EB] mb-4 group">
                <Image
                  src={productData.images[selectedImage]}
                  alt={productData.title}
                  width={800}
                  height={1000}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  priority
                />

                {/* Discount Badge */}
                {productData.discount && (
                  <div className="absolute top-4 left-4 bg-[#9C6644] text-[#FCFAF8] px-3 py-1.5 rounded-sm">
                    <p className="text-xs font-medium">
                      -{productData.discount}%
                    </p>
                  </div>
                )}

                {/* Stock Indicator */}
                {productData.stockCount <= 10 && (
                  <div className="absolute top-4 right-4 bg-[#1A1816]/90 backdrop-blur-sm text-[#FCFAF8] px-3 py-1.5 rounded-sm">
                    <p className="text-xs font-medium">
                      Only {productData.stockCount} left
                    </p>
                  </div>
                )}
              </div>

              {/* Thumbnail Grid */}
              <div className="grid grid-cols-4 gap-3">
                {productData.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`
                      relative aspect-square overflow-hidden rounded-sm border-2 transition-all duration-300
                      ${
                        selectedImage === index
                          ? "border-[#9C6644] shadow-lg"
                          : "border-transparent hover:border-[#EAE5DF]"
                      }
                    `}
                  >
                    <Image
                      src={image}
                      alt={`${productData.title} view ${index + 1}`}
                      width={200}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Product Info (5 columns) */}
          <div className="lg:col-span-5">
            <div className="sticky top-24 space-y-6">
              {/* Brand & Category */}
              <div>
                <p className="text-xs text-[#9C6644] uppercase tracking-wider font-medium mb-2">
                  {productData.brand}
                </p>
                <p className="text-xs text-[#1A1816]/60 uppercase tracking-wider">
                  {productData.category}
                </p>
              </div>

              {/* Title */}
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-light text-[#1A1816] leading-tight">
                {productData.title}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <HiStar
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(productData.rating)
                          ? "text-[#9C6644] fill-[#9C6644]"
                          : "text-[#EAE5DF]"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-sm text-[#1A1816]/70">
                  <span className="font-medium">{productData.rating}</span>
                  <span className="mx-1">•</span>
                  <Link
                    href="#reviews"
                    className="hover:text-[#9C6644] transition-colors"
                  >
                    {productData.reviewCount} reviews
                  </Link>
                </p>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-3">
                <p className="text-3xl font-medium text-[#1A1816]">
                  Rp {productData.price.toLocaleString("id-ID")}
                </p>
                {productData.originalPrice && (
                  <>
                    <p className="text-lg text-[#1A1816]/40 line-through">
                      Rp {productData.originalPrice.toLocaleString("id-ID")}
                    </p>
                    <p className="text-sm text-[#9C6644] font-medium">
                      Save {productData.discount}%
                    </p>
                  </>
                )}
              </div>

              {/* Short Description */}
              <p className="text-sm text-[#1A1816]/70 font-light leading-relaxed">
                {productData.description}
              </p>

              {/* Divider */}
              <div className="h-px bg-[#EAE5DF]" />

              {/* Color Selector */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <p className="text-sm font-medium text-[#1A1816]">
                    Color:{" "}
                    <span className="font-normal text-[#1A1816]/70">
                      {productData.colors[selectedColor].name}
                    </span>
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  {productData.colors.map((color, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setSelectedColor(index);
                        setSelectedImage(0); // Reset to first image when color changes
                      }}
                      className={`
                        relative w-12 h-12 rounded-sm border-2 transition-all duration-300 overflow-hidden
                        ${
                          selectedColor === index
                            ? "border-[#9C6644] shadow-md"
                            : "border-[#EAE5DF] hover:border-[#9C6644]/50"
                        }
                      `}
                      title={color.name}
                    >
                      <Image
                        src={color.image}
                        alt={color.name}
                        width={48}
                        height={48}
                        className="w-full h-full object-cover"
                      />
                      {selectedColor === index && (
                        <div className="absolute inset-0 bg-[#9C6644]/20 flex items-center justify-center">
                          <HiCheck className="w-5 h-5 text-[#FCFAF8]" />
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Size Selector */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <p className="text-sm font-medium text-[#1A1816]">
                    Size:{" "}
                    {selectedSize && (
                      <span className="font-normal text-[#1A1816]/70">
                        {selectedSize}
                      </span>
                    )}
                  </p>
                  <button className="text-xs text-[#9C6644] hover:underline">
                    Size Guide
                  </button>
                </div>
                <div className="grid grid-cols-5 gap-2">
                  {productData.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`
                        py-3 text-sm font-medium rounded-sm border-2 transition-all duration-300
                        ${
                          selectedSize === size
                            ? "border-[#9C6644] bg-[#9C6644] text-[#FCFAF8]"
                            : "border-[#EAE5DF] text-[#1A1816] hover:border-[#9C6644]/50"
                        }
                      `}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity Selector */}
              <div>
                <p className="text-sm font-medium text-[#1A1816] mb-3">
                  Quantity:
                </p>
                <div className="flex items-center gap-3">
                  <div className="flex items-center border border-[#EAE5DF] rounded-sm">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-4 py-2 hover:bg-[#FCFAF8] transition-colors"
                    >
                      <HiMinus className="w-4 h-4" />
                    </button>
                    <span className="px-6 py-2 text-sm font-medium border-x border-[#EAE5DF]">
                      {quantity}
                    </span>
                    <button
                      onClick={() =>
                        setQuantity(
                          Math.min(productData.stockCount, quantity + 1),
                        )
                      }
                      className="px-4 py-2 hover:bg-[#FCFAF8] transition-colors"
                    >
                      <HiPlus className="w-4 h-4" />
                    </button>
                  </div>
                  <p className="text-xs text-[#1A1816]/60">
                    {productData.stockCount} items available
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <Button
                  variant="primary"
                  size="lg"
                  fullWidth
                  onClick={handleAddToCart}
                  rightIcon={<HiCheck className="w-4 h-4" />}
                >
                  Add to Cart
                </Button>
                <button
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className={`
                    w-12 h-12 flex items-center justify-center border-2 rounded-sm transition-all duration-300
                    ${
                      isWishlisted
                        ? "border-[#9C6644] bg-[#9C6644] text-[#FCFAF8]"
                        : "border-[#EAE5DF] text-[#1A1816] hover:border-[#9C6644]/50"
                    }
                  `}
                >
                  <HiHeart
                    className={`w-5 h-5 ${isWishlisted ? "fill-current" : ""}`}
                  />
                </button>
              </div>

              {/* Share Button */}
              <button className="flex items-center gap-2 text-sm text-[#1A1816]/70 hover:text-[#9C6644] transition-colors">
                <HiShare className="w-4 h-4" />
                <span>Share this product</span>
              </button>

              {/* Divider */}
              <div className="h-px bg-[#EAE5DF]" />

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <HiShieldCheck className="w-6 h-6 text-[#9C6644] mx-auto mb-2" />
                  <p className="text-xs text-[#1A1816]/70 font-light">
                    100% Authentic
                  </p>
                </div>
                <div className="text-center">
                  <HiTruck className="w-6 h-6 text-[#9C6644] mx-auto mb-2" />
                  <p className="text-xs text-[#1A1816]/70 font-light">
                    Free Shipping
                  </p>
                </div>
                <div className="text-center">
                  <HiArrowPath className="w-6 h-6 text-[#9C6644] mx-auto mb-2" />
                  <p className="text-xs text-[#1A1816]/70 font-light">
                    30 Days Return
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
