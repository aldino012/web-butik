// src/app/catalog/section/ProductGrid.js
"use client";

import { useState, useRef } from "react";
import Card from "@/components/Card";
import Pagination from "@/components/Pagination"; // Import komponen universal
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { productImages } from "@/data/images";

// Generate dummy products
const generateProducts = (count) => {
  const products = [];
  const categories = [
    "Batik Tulis",
    "Wear Batik",
    "Men",
    "Women",
    "Accessories",
  ];
  const badges = [null, "New", "Sale", "Best Seller", "Limited"];

  for (let i = 1; i <= count; i++) {
    const category = categories[i % categories.length];
    const badge = badges[i % badges.length];
    const hasDiscount = i % 5 === 0;
    const basePrice = 500000 + i * 50000;
    const price = hasDiscount ? basePrice * 0.8 : basePrice;

    products.push({
      id: `product-${i}`,
      title: `${category} Premium ${i}`,
      category: category,
      price: `Rp ${price.toLocaleString("id-ID")}`,
      originalPrice: hasDiscount
        ? `Rp ${basePrice.toLocaleString("id-ID")}`
        : null,
      image: productImages.batikShirts[i % productImages.batikShirts.length],
      badge: badge,
      href: `/detail/${i}`,
      isSoldOut: i % 20 === 0,
    });
  }
  return products;
};

const allProducts = generateProducts(48);
const PRODUCTS_PER_PAGE = 12;

export default function ProductGrid({ filters = {}, sortBy = "newest" }) {
  const [currentPage, setCurrentPage] = useState(1);
  const gridRef = useRef(null);

  // Apply filters (simplified logic)
  const filteredProducts = allProducts.filter((product) => {
    if (filters.category && filters.category !== "all") {
      const categoryMap = {
        "batik-tulis": "Batik Tulis",
        "wear-batik": "Wear Batik",
        men: "Men",
        women: "Women",
        accessories: "Accessories",
      };
      if (product.category !== categoryMap[filters.category]) return false;
    }
    return true;
  });

  // Apply sorting
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "name":
        return a.title.localeCompare(b.title);
      default:
        return 0;
    }
  });

  // Pagination logic
  const totalPages = Math.ceil(sortedProducts.length / PRODUCTS_PER_PAGE);
  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const endIndex = startIndex + PRODUCTS_PER_PAGE;
  const currentProducts = sortedProducts.slice(startIndex, endIndex);

  // Logic Scroll ke atas grid saat ganti halaman
  const handlePageChange = (page) => {
    setCurrentPage(page);
    if (gridRef.current) {
      const yOffset = -120;
      const y =
        gridRef.current.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section ref={gridRef} className="py-12 md:py-16 bg-[#FCFAF8] scroll-mt-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Products Grid */}
        {currentProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {currentProducts.map((product) => (
              <Card
                key={product.id}
                title={product.title}
                category={product.category}
                price={product.price}
                originalPrice={product.originalPrice}
                image={product.image}
                badge={product.badge}
                href={product.href}
                isSoldOut={product.isSoldOut}
              />
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <HiOutlineShoppingBag className="w-16 h-16 text-[#1A1816]/20 mb-4" />
            <h3 className="text-xl font-light text-[#1A1816] mb-2">
              No products found
            </h3>
            <p className="text-sm text-[#1A1816]/60 max-w-md">
              We couldn't find any products matching your filters. Try adjusting
              your criteria.
            </p>
          </div>
        )}

        {/* Panggil Komponen Universal Pagination */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          totalItems={sortedProducts.length}
          itemsPerPage={PRODUCTS_PER_PAGE}
          onPageChange={handlePageChange}
        />
      </div>
    </section>
  );
}
