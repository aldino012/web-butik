// src/app/detail/[id]/section/ReviewsRatings.js
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/Button";
import {
  HiStar,
  HiHandThumbUp, // ✅ Ganti HiThumbUp dengan HiHandThumbUp
  HiPhoto,
  HiPencilSquare,
  HiCheckBadge,
} from "react-icons/hi2";
import { productImages } from "@/data/images";

// Helper function untuk mendapatkan gambar dengan aman
const getSafeImage = (index) => {
  const images = productImages.batikShirts;
  if (!images || images.length === 0) return null;
  return images[index % images.length];
};

// Dummy Reviews Data
const reviewsData = [
  {
    id: 1,
    name: "Budi Santoso",
    date: "2 weeks ago",
    rating: 5,
    title: "Kualitas luar biasa, sangat puas!",
    comment:
      "Batiknya halus, warnanya sesuai foto, dan packingnya sangat aman. Motif parangnya detail banget. Pasti akan beli lagi di sini.",
    hasPhoto: true,
    photos: [getSafeImage(7), getSafeImage(8)],
    helpful: 12,
    verified: true,
  },
  {
    id: 2,
    name: "Siti Aminah",
    date: "1 month ago",
    rating: 5,
    title: "Cocok untuk hadiah",
    comment:
      "Saya beli ini untuk kado ulang tahun suami. Dia sangat suka! Bahannya adem dan nyaman dipakai seharian. Recommended seller.",
    hasPhoto: false,
    photos: [],
    helpful: 8,
    verified: true,
  },
  {
    id: 3,
    name: "Andi Pratama",
    date: "2 months ago",
    rating: 4,
    title: "Bagus, tapi agak lama pengirimannya",
    comment:
      "Produknya sangat bagus dan autentik. Hanya saja pengiriman ke luar Jawa memakan waktu sekitar 5 hari. Tapi worth it untuk kualitasnya.",
    hasPhoto: true,
    photos: [getSafeImage(9)],
    helpful: 5,
    verified: true,
  },
];

// Rating Distribution
const ratingDistribution = [
  { stars: 5, count: 98, percentage: 85 },
  { stars: 4, count: 15, percentage: 13 },
  { stars: 3, count: 2, percentage: 2 },
  { stars: 2, count: 0, percentage: 0 },
  { stars: 1, count: 0, percentage: 0 },
];

export default function ReviewsRatings() {
  const [activeFilter, setActiveFilter] = useState("all"); // all, photos
  const [sortBy, setSortBy] = useState("newest"); // newest, highest, lowest

  return (
    <section id="reviews" className="py-16 md:py-24 bg-[#FCFAF8]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-[#1A1816] mb-4">
              Customer <span className="font-medium italic">Reviews</span>
            </h2>
            <p className="text-sm text-[#1A1816]/60 font-light">
              See what our customers are saying about this product.
            </p>
          </div>

          {/* Rating Summary & Distribution */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12 bg-white p-8 md:p-12 rounded-sm border border-[#EAE5DF]">
            {/* Overall Rating (Left) */}
            <div className="md:col-span-4 flex flex-col items-center justify-center text-center md:border-r md:border-[#EAE5DF] md:pr-8">
              <p className="text-6xl font-light text-[#1A1816] mb-2">4.8</p>
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <HiStar
                    key={i}
                    className="w-5 h-5 text-[#9C6644] fill-[#9C6644]"
                  />
                ))}
              </div>
              <p className="text-sm text-[#1A1816]/60">Based on 115 reviews</p>
              <Button
                variant="secondary"
                size="sm"
                className="mt-6 !border-[#1A1816] !text-[#1A1816] hover:!bg-[#1A1816] hover:!text-[#FCFAF8]"
                leftIcon={<HiPencilSquare className="w-4 h-4" />}
              >
                Write a Review
              </Button>
            </div>

            {/* Distribution Bars (Right) */}
            <div className="md:col-span-8 flex flex-col justify-center space-y-3">
              {ratingDistribution.map((item) => (
                <div
                  key={item.stars}
                  className="flex items-center gap-4 text-sm"
                >
                  <span className="w-12 text-[#1A1816]/70 font-medium flex items-center gap-1">
                    {item.stars} <HiStar className="w-3 h-3 fill-current" />
                  </span>
                  <div className="flex-1 h-2 bg-[#EAE5DF] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#9C6644] rounded-full transition-all duration-500"
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                  <span className="w-10 text-right text-[#1A1816]/50 text-xs">
                    {item.count}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Filters & Sorting */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveFilter("all")}
                className={`px-4 py-2 text-xs font-medium uppercase tracking-wider rounded-sm border transition-all duration-300 ${
                  activeFilter === "all"
                    ? "bg-[#1A1816] text-[#FCFAF8] border-[#1A1816]"
                    : "bg-white text-[#1A1816]/70 border-[#EAE5DF] hover:border-[#9C6644]"
                }`}
              >
                All Reviews
              </button>
              <button
                onClick={() => setActiveFilter("photos")}
                className={`px-4 py-2 text-xs font-medium uppercase tracking-wider rounded-sm border transition-all duration-300 flex items-center gap-2 ${
                  activeFilter === "photos"
                    ? "bg-[#1A1816] text-[#FCFAF8] border-[#1A1816]"
                    : "bg-white text-[#1A1816]/70 border-[#EAE5DF] hover:border-[#9C6644]"
                }`}
              >
                <HiPhoto className="w-4 h-4" /> With Photos
              </button>
            </div>

            <div className="flex items-center gap-2 text-sm text-[#1A1816]/60">
              <span>Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-transparent border-b border-[#EAE5DF] py-1 text-[#1A1816] focus:outline-none focus:border-[#9C6644] cursor-pointer"
              >
                <option value="newest">Newest First</option>
                <option value="highest">Highest Rating</option>
                <option value="lowest">Lowest Rating</option>
              </select>
            </div>
          </div>

          {/* Reviews List */}
          <div className="space-y-6">
            {reviewsData
              .filter(
                (review) =>
                  activeFilter === "all" ||
                  (activeFilter === "photos" && review.hasPhoto),
              )
              .map((review) => (
                <div
                  key={review.id}
                  className="bg-white p-6 md:p-8 rounded-sm border border-[#EAE5DF] hover:shadow-md transition-shadow duration-300"
                >
                  {/* Review Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#9C6644]/10 flex items-center justify-center text-[#9C6644] font-medium text-sm">
                        {review.name.charAt(0)}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="text-sm font-medium text-[#1A1816]">
                            {review.name}
                          </h4>
                          {review.verified && (
                            <HiCheckBadge
                              className="w-4 h-4 text-[#9C6644]"
                              title="Verified Buyer"
                            />
                          )}
                        </div>
                        <p className="text-xs text-[#1A1816]/50">
                          {review.date}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <HiStar
                          key={i}
                          className={`w-4 h-4 ${i < review.rating ? "text-[#9C6644] fill-[#9C6644]" : "text-[#EAE5DF]"}`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Review Content */}
                  <h5 className="text-base font-medium text-[#1A1816] mb-2">
                    {review.title}
                  </h5>
                  <p className="text-sm text-[#1A1816]/70 font-light leading-relaxed mb-4">
                    {review.comment}
                  </p>

                  {/* Review Photos */}
                  {review.hasPhoto && review.photos.length > 0 && (
                    <div className="flex gap-2 mb-4">
                      {review.photos.map((photo, idx) => (
                        <div
                          key={idx}
                          className="w-16 h-16 rounded-sm overflow-hidden border border-[#EAE5DF]"
                        >
                          <Image
                            src={photo}
                            alt={`Review photo ${idx + 1}`}
                            width={64}
                            height={64}
                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-300 cursor-pointer"
                          />
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Review Footer (Helpful) */}
                  <div className="flex items-center justify-between pt-4 border-t border-[#EAE5DF]">
                    <p className="text-xs text-[#1A1816]/50">
                      Was this review helpful?
                    </p>
                    <button className="flex items-center gap-2 text-xs text-[#1A1816]/60 hover:text-[#9C6644] transition-colors">
                      <HiHandThumbUp className="w-4 h-4" />{" "}
                      {/* ✅ Ganti di sini juga */}
                      Yes ({review.helpful})
                    </button>
                  </div>
                </div>
              ))}
          </div>

          {/* Load More / Pagination */}
          <div className="text-center mt-12">
            <Button variant="secondary" size="md">
              Load More Reviews
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}