"use client";

import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";

/**
 * Universal Modal Component for Batik/Boutique E-commerce
 * Uses Portal to prevent z-index issues.
 */
export default function Modal({
  isOpen = false,
  onClose = () => {},
  title = "",
  children,
  size = "md", // sm, md, lg, xl
  showCloseButton = true,
}) {
  const [isMounted, setIsMounted] = useState(false);

  // Handle Portal mounting for Next.js App Router
  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Handle Escape key to close
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && isOpen) onClose();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  if (!isMounted || !isOpen) return null;

  const sizes = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-2xl",
    xl: "max-w-4xl",
  };

  const modalContent = (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center p-4 transition-opacity duration-300 ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-[#1A1816]/60 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div
        className={`
          relative w-full ${sizes[size]} bg-[#FCFAF8] border border-[#EAE5DF] rounded-sm 
          shadow-2xl shadow-[#1A1816]/10 overflow-hidden
          transition-all duration-300 transform
          ${isOpen ? "scale-100 opacity-100 translate-y-0" : "scale-95 opacity-0 translate-y-4"}
        `}
      >
        {/* Header */}
        {title && (
          <div className="flex items-center justify-between px-6 py-4 border-b border-[#EAE5DF]">
            <h2 className="text-xs font-semibold text-[#1A1816] tracking-[0.2em] uppercase">
              {title}
            </h2>
            {showCloseButton && (
              <button
                onClick={onClose}
                className="p-1.5 text-[#1A1816] hover:text-[#9C6644] hover:bg-[#1A1816]/5 rounded-sm transition-colors duration-200"
                aria-label="Close modal"
              >
                <HiXMark className="w-5 h-5" />
              </button>
            )}
          </div>
        )}

        {/* Body */}
        <div className="p-6 max-h-[70vh] overflow-y-auto custom-scrollbar">
          {children}
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}
