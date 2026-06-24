// src/components/Pagination.js
"use client";

import Button from "@/components/Button";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi2";

export default function Pagination({
  currentPage,
  totalPages,
  totalItems,
  itemsPerPage,
  onPageChange,
}) {
  if (totalPages <= 1) return null;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);

  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = 5;

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) pages.push(i);
        pages.push("...");
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push("...");
        for (let i = totalPages - 3; i <= totalPages; i++) pages.push(i);
      } else {
        pages.push(1);
        pages.push("...");
        for (let i = currentPage - 1; i <= currentPage + 1; i++) pages.push(i);
        pages.push("...");
        pages.push(totalPages);
      }
    }
    return pages;
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mt-12 pt-8 border-t border-[#EAE5DF]">
      {/* Results Info */}
      <p className="text-sm text-[#1A1816]/60 font-light">
        Showing{" "}
        <span className="font-medium text-[#1A1816]">{startIndex + 1}</span> to{" "}
        <span className="font-medium text-[#1A1816]">{endIndex}</span> of{" "}
        <span className="font-medium text-[#1A1816]">{totalItems}</span>{" "}
        products
      </p>

      {/* Pagination Controls */}
      <div className="flex items-center gap-1 sm:gap-2">
        {/* Previous Button - Compact & Elegant */}
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="!px-3 !py-2 min-w-[40px] h-10"
          aria-label="Previous page"
        >
          <HiArrowLeft className="w-4 h-4" />
        </Button>

        {/* Page Numbers */}
        <div className="hidden sm:flex items-center gap-1">
          {getPageNumbers().map((page, index) =>
            page === "..." ? (
              <span
                key={`ellipsis-${index}`}
                className="w-10 h-10 flex items-center justify-center text-[#1A1816]/40 text-xs font-medium"
              >
                ...
              </span>
            ) : (
              <Button
                key={page}
                variant={currentPage === page ? "primary" : "ghost"}
                size="sm"
                onClick={() => onPageChange(page)}
                className="!px-0 !py-2 min-w-[40px] h-10"
              >
                {page}
              </Button>
            ),
          )}
        </div>

        {/* Mobile Page Indicator */}
        <span className="sm:hidden text-sm font-medium text-[#1A1816]">
          Page {currentPage} of {totalPages}
        </span>

        {/* Next Button - Compact & Elegant */}
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="!px-3 !py-2 min-w-[40px] h-10"
          aria-label="Next page"
        >
          <HiArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}