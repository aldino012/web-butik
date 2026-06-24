"use client";

import { useState } from "react";
import {
  HiOutlineFunnel,
  HiOutlineXMark,
  HiOutlineArrowsUpDown,
  HiOutlineViewColumns,
  HiOutlineSquaresPlus,
  HiCheck,
} from "react-icons/hi2";

// Filter data
const categories = [
  { id: "all", name: "All Categories", count: 156 },
  { id: "batik-tulis", name: "Batik Tulis", count: 48 },
  { id: "wear-batik", name: "Wear Batik", count: 42 },
  { id: "men", name: "Men", count: 35 },
  { id: "women", name: "Women", count: 67 },
  { id: "accessories", name: "Accessories", count: 28 },
];

const priceRanges = [
  { id: "all", name: "All Prices", min: 0, max: Infinity },
  { id: "0-500", name: "Under Rp 500.000", min: 0, max: 500000 },
  { id: "500-1000", name: "Rp 500.000 - 1.000.000", min: 500000, max: 1000000 },
  {
    id: "1000-2000",
    name: "Rp 1.000.000 - 2.000.000",
    min: 1000000,
    max: 2000000,
  },
  { id: "2000+", name: "Above Rp 2.000.000", min: 2000000, max: Infinity },
];

const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

const colors = [
  { id: "brown", name: "Brown", value: "#8B4513" },
  { id: "navy", name: "Navy", value: "#1B3A5F" },
  { id: "cream", name: "Cream", value: "#F5F5DC" },
  { id: "black", name: "Black", value: "#1A1816" },
  { id: "gold", name: "Gold", value: "#D4AF37" },
  { id: "maroon", name: "Maroon", value: "#800000" },
];

const sortOptions = [
  { value: "newest", label: "Newest Arrivals" },
  { value: "price-low", label: "Price: Low to High" },
  { value: "price-high", label: "Price: High to Low" },
  { value: "popular", label: "Most Popular" },
  { value: "name", label: "Name: A-Z" },
];

export default function FilterToolbar({
  totalProducts = 156,
  onFilterChange,
  onSortChange,
}) {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [viewMode, setViewMode] = useState("grid"); // 'grid' | 'list'
  const [activeFilters, setActiveFilters] = useState({
    category: "all",
    price: "all",
    sizes: [],
    colors: [],
  });
  const [sortBy, setSortBy] = useState("newest");

  // Handle filter changes
  const handleCategoryChange = (categoryId) => {
    const newFilters = { ...activeFilters, category: categoryId };
    setActiveFilters(newFilters);
    onFilterChange?.(newFilters);
  };

  const handlePriceChange = (priceId) => {
    const newFilters = { ...activeFilters, price: priceId };
    setActiveFilters(newFilters);
    onFilterChange?.(newFilters);
  };

  const handleSizeToggle = (size) => {
    const newSizes = activeFilters.sizes.includes(size)
      ? activeFilters.sizes.filter((s) => s !== size)
      : [...activeFilters.sizes, size];

    const newFilters = { ...activeFilters, sizes: newSizes };
    setActiveFilters(newFilters);
    onFilterChange?.(newFilters);
  };

  const handleColorToggle = (colorId) => {
    const newColors = activeFilters.colors.includes(colorId)
      ? activeFilters.colors.filter((c) => c !== colorId)
      : [...activeFilters.colors, colorId];

    const newFilters = { ...activeFilters, colors: newColors };
    setActiveFilters(newFilters);
    onFilterChange?.(newFilters);
  };

  const handleSortChange = (e) => {
    const value = e.target.value;
    setSortBy(value);
    onSortChange?.(value);
  };

  const clearAllFilters = () => {
    const clearedFilters = {
      category: "all",
      price: "all",
      sizes: [],
      colors: [],
    };
    setActiveFilters(clearedFilters);
    onFilterChange?.(clearedFilters);
  };

  const hasActiveFilters =
    activeFilters.category !== "all" ||
    activeFilters.price !== "all" ||
    activeFilters.sizes.length > 0 ||
    activeFilters.colors.length > 0;

  // Filter Sidebar Content (Reusable)
  const FilterSidebar = () => (
    <div className="flex flex-col gap-8">
      {/* Categories */}
      <div>
        <h3 className="text-xs font-semibold text-[#1A1816] tracking-[0.15em] uppercase mb-4">
          Categories
        </h3>
        <div className="space-y-2">
          {categories.map((cat) => (
            <label
              key={cat.id}
              className="flex items-center justify-between cursor-pointer group"
            >
              <div className="flex items-center gap-3">
                <input
                  type="radio"
                  name="category"
                  checked={activeFilters.category === cat.id}
                  onChange={() => handleCategoryChange(cat.id)}
                  className="w-4 h-4 border-[#9C6644] text-[#9C6644] focus:ring-[#9C6644]"
                />
                <span
                  className={`text-sm transition-colors ${
                    activeFilters.category === cat.id
                      ? "text-[#9C6644] font-medium"
                      : "text-[#1A1816]/70 group-hover:text-[#1A1816]"
                  }`}
                >
                  {cat.name}
                </span>
              </div>
              <span className="text-xs text-[#1A1816]/40">({cat.count})</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h3 className="text-xs font-semibold text-[#1A1816] tracking-[0.15em] uppercase mb-4">
          Price Range
        </h3>
        <div className="space-y-2">
          {priceRanges.map((range) => (
            <label
              key={range.id}
              className="flex items-center cursor-pointer group"
            >
              <input
                type="radio"
                name="price"
                checked={activeFilters.price === range.id}
                onChange={() => handlePriceChange(range.id)}
                className="w-4 h-4 border-[#9C6644] text-[#9C6644] focus:ring-[#9C6644]"
              />
              <span
                className={`ml-3 text-sm transition-colors ${
                  activeFilters.price === range.id
                    ? "text-[#9C6644] font-medium"
                    : "text-[#1A1816]/70 group-hover:text-[#1A1816]"
                }`}
              >
                {range.name}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Sizes */}
      <div>
        <h3 className="text-xs font-semibold text-[#1A1816] tracking-[0.15em] uppercase mb-4">
          Size
        </h3>
        <div className="flex flex-wrap gap-2">
          {sizes.map((size) => (
            <button
              key={size}
              onClick={() => handleSizeToggle(size)}
              className={`
                w-10 h-10 flex items-center justify-center text-xs font-medium
                border rounded-sm transition-all duration-200
                ${
                  activeFilters.sizes.includes(size)
                    ? "bg-[#1A1816] text-[#FCFAF8] border-[#1A1816]"
                    : "bg-transparent text-[#1A1816] border-[#EAE5DF] hover:border-[#9C6644]"
                }
              `}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Colors */}
      <div>
        <h3 className="text-xs font-semibold text-[#1A1816] tracking-[0.15em] uppercase mb-4">
          Color
        </h3>
        <div className="flex flex-wrap gap-3">
          {colors.map((color) => (
            <button
              key={color.id}
              onClick={() => handleColorToggle(color.id)}
              className={`
                relative w-8 h-8 rounded-full border-2 transition-all duration-200
                ${
                  activeFilters.colors.includes(color.id)
                    ? "border-[#1A1816] scale-110"
                    : "border-transparent hover:scale-105"
                }
              `}
              style={{ backgroundColor: color.value }}
              title={color.name}
            >
              {activeFilters.colors.includes(color.id) && (
                <HiCheck className="absolute inset-0 m-auto w-4 h-4 text-white" />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar + Toolbar */}
      <section className="sticky top-20 z-30 bg-[#FCFAF8] border-b border-[#EAE5DF]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-stretch gap-6 py-4">
            {/* Filter Button (Desktop) */}
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className={`
                hidden lg:flex items-center gap-2 px-4 py-2 text-xs font-medium
                tracking-[0.15em] uppercase border rounded-sm transition-all duration-200
                ${
                  isFilterOpen || hasActiveFilters
                    ? "bg-[#1A1816] text-[#FCFAF8] border-[#1A1816]"
                    : "bg-transparent text-[#1A1816] border-[#EAE5DF] hover:border-[#9C6644]"
                }
              `}
            >
              <HiOutlineFunnel className="w-4 h-4" />
              Filters
              {hasActiveFilters && (
                <span className="w-5 h-5 flex items-center justify-center bg-[#9C6644] text-white text-[10px] rounded-full">
                  {activeFilters.sizes.length +
                    activeFilters.colors.length +
                    (activeFilters.category !== "all" ? 1 : 0) +
                    (activeFilters.price !== "all" ? 1 : 0)}
                </span>
              )}
            </button>

            {/* Mobile Filter Button */}
            <button
              onClick={() => setIsFilterOpen(true)}
              className="lg:hidden flex items-center gap-2 px-4 py-2 text-xs font-medium
                tracking-[0.15em] uppercase border border-[#EAE5DF] rounded-sm
                text-[#1A1816] hover:border-[#9C6644] transition-colors"
            >
              <HiOutlineFunnel className="w-4 h-4" />
              Filters
            </button>

            {/* Results Count */}
            <div className="flex-1 flex items-center">
              <p className="text-sm text-[#1A1816]/70">
                Showing{" "}
                <span className="font-semibold text-[#1A1816]">
                  {totalProducts}
                </span>{" "}
                products
              </p>
            </div>

            {/* Sort Dropdown */}
            <div className="hidden sm:flex items-center gap-2">
              <HiOutlineArrowsUpDown className="w-4 h-4 text-[#1A1816]/60" />
              <select
                value={sortBy}
                onChange={handleSortChange}
                className="appearance-none bg-transparent text-sm text-[#1A1816] font-medium
                  border-none focus:outline-none focus:ring-0 cursor-pointer
                  pr-8 py-2 hover:text-[#9C6644] transition-colors"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* View Toggle */}
            <div className="hidden md:flex items-center gap-1 pl-4 border-l border-[#EAE5DF]">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-sm transition-colors ${
                  viewMode === "grid"
                    ? "text-[#9C6644] bg-[#9C6644]/10"
                    : "text-[#1A1816]/60 hover:text-[#1A1816]"
                }`}
                title="Grid View"
              >
                <HiOutlineSquaresPlus className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded-sm transition-colors ${
                  viewMode === "list"
                    ? "text-[#9C6644] bg-[#9C6644]/10"
                    : "text-[#1A1816]/60 hover:text-[#1A1816]"
                }`}
                title="List View"
              >
                <HiOutlineViewColumns className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Active Filters Tags */}
          {hasActiveFilters && (
            <div className="flex flex-wrap items-center gap-2 pb-4">
              <span className="text-xs text-[#1A1816]/60">Active filters:</span>

              {activeFilters.category !== "all" && (
                <FilterTag
                  label={
                    categories.find((c) => c.id === activeFilters.category)
                      ?.name
                  }
                  onRemove={() => handleCategoryChange("all")}
                />
              )}

              {activeFilters.price !== "all" && (
                <FilterTag
                  label={
                    priceRanges.find((p) => p.id === activeFilters.price)?.name
                  }
                  onRemove={() => handlePriceChange("all")}
                />
              )}

              {activeFilters.sizes.map((size) => (
                <FilterTag
                  key={size}
                  label={`Size: ${size}`}
                  onRemove={() => handleSizeToggle(size)}
                />
              ))}

              {activeFilters.colors.map((colorId) => (
                <FilterTag
                  key={colorId}
                  label={`Color: ${colors.find((c) => c.id === colorId)?.name}`}
                  onRemove={() => handleColorToggle(colorId)}
                />
              ))}

              <button
                onClick={clearAllFilters}
                className="text-xs text-[#9C6644] hover:text-[#1A1816] transition-colors ml-2"
              >
                Clear all
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Filter Sidebar (Desktop - Collapsible) */}
      {isFilterOpen && (
        <div className="hidden lg:block border-b border-[#EAE5DF] bg-[#FCFAF8]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <FilterSidebar />
            </div>
          </div>
        </div>
      )}

      {/* Mobile Filter Drawer */}
      {isFilterOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-[#1A1816]/60 backdrop-blur-sm"
            onClick={() => setIsFilterOpen(false)}
          />

          {/* Drawer Panel */}
          <div className="absolute right-0 top-0 h-full w-full max-w-sm bg-[#FCFAF8] shadow-2xl overflow-y-auto">
            {/* Header */}
            <div className="sticky top-0 bg-[#FCFAF8] border-b border-[#EAE5DF] px-6 py-4 flex items-center justify-between">
              <h2 className="text-sm font-semibold text-[#1A1816] tracking-[0.15em] uppercase">
                Filters
              </h2>
              <button
                onClick={() => setIsFilterOpen(false)}
                className="p-2 text-[#1A1816] hover:text-[#9C6644] transition-colors"
              >
                <HiOutlineXMark className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6">
              <FilterSidebar />
            </div>

            {/* Footer */}
            <div className="sticky bottom-0 bg-[#FCFAF8] border-t border-[#EAE5DF] px-6 py-4">
              <button
                onClick={() => setIsFilterOpen(false)}
                className="w-full py-3 bg-[#1A1816] text-[#FCFAF8] text-xs font-medium
                  tracking-[0.15em] uppercase rounded-sm hover:bg-[#2A2522] transition-colors"
              >
                Show {totalProducts} Products
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// Filter Tag Component
function FilterTag({ label, onRemove }) {
  return (
    <span
      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#F0EBE6] text-[#1A1816] 
      text-xs font-medium rounded-sm border border-[#EAE5DF]"
    >
      {label}
      <button
        onClick={onRemove}
        className="hover:text-[#9C6644] transition-colors"
      >
        <HiOutlineXMark className="w-3.5 h-3.5" />
      </button>
    </span>
  );
}
