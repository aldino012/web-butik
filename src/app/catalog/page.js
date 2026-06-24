// src/app/catalog/page.js
"use client";

import { useState } from "react";
import PageHeader from "./section/PageHeader";
import FilterToolbar from "./section/FilterToolbar";
import ProductGrid from "./section/ProductGrid";
import CategoryShowcase from "./section/CategoryShowcase";
import BrandHeritageCTA from "./section/BrandHeritageCTA";

export default function CatalogPage() {
  const [filters, setFilters] = useState({});
  const [sortBy, setSortBy] = useState("newest");

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const handleSortChange = (newSort) => {
    setSortBy(newSort);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Section 1: Header & Breadcrumb */}
      <PageHeader title="All Collections" category="all" totalProducts={48} />

      {/* Section 2: Filter & Sort (Sticky) */}
      <FilterToolbar
        totalProducts={48}
        onFilterChange={handleFilterChange}
        onSortChange={handleSortChange}
      />

      {/* Section 3: Product Grid & Pagination */}
      <ProductGrid filters={filters} sortBy={sortBy} />

      {/* Section 4: Category Showcase (Visual Break) */}
      <CategoryShowcase />

      {/* Section 5: Brand Heritage CTA (Closing) */}
      <BrandHeritageCTA />
    </div>
  );
}
