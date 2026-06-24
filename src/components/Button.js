// src/components/Button.js
"use client";

import React from "react";
import Link from "next/link";
import { HiArrowPath } from "react-icons/hi2";

// Simple function untuk menggabungkan class tanpa tailwind-merge
const cn = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  isLoading = false,
  isDisabled = false,
  fullWidth = false,
  leftIcon = null,
  rightIcon = null,
  className = "",
  type = "button",
  href,
  ...props
}) {
  const baseStyles = `
    relative inline-flex items-center justify-center 
    font-medium uppercase tracking-[0.15em] 
    transition-all duration-300 ease-out 
    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#9C6644]/50
    disabled:cursor-not-allowed disabled:opacity-60
    rounded-sm
  `;

  const variants = {
    primary: `bg-[#1A1816] text-[#FCFAF8] border border-[#1A1816] hover:bg-[#2A2522] hover:border-[#2A2522] active:bg-[#0F0D0C] active:scale-[0.98]`,
    secondary: `bg-transparent text-[#1A1816] border border-[#1A1816] hover:bg-[#1A1816] hover:text-[#FCFAF8] active:bg-[#0F0D0C] active:scale-[0.98]`,
    tertiary: `bg-transparent text-[#9C6644] border border-transparent hover:text-[#1A1816] hover:bg-[#1A1816]/5 active:bg-[#1A1816]/10`,
    accent: `bg-[#9C6644] text-[#FCFAF8] border border-[#9C6644] hover:bg-[#855537] hover:border-[#855537] active:bg-[#6E452D] active:scale-[0.98]`,
    ghost: `bg-transparent text-[#1A1816] border border-[#EAE5DF] hover:border-[#9C6644] hover:text-[#9C6644] active:scale-[0.98]`,
  };

  const sizes = {
    sm: "px-3 py-1.5 text-[10px] gap-1.5",
    md: "px-5 py-2.5 text-xs gap-2",
    lg: "px-8 py-3.5 text-sm gap-2.5",
  };

  const widthStyle = fullWidth ? "w-full" : "";

  // Gabungkan semua classes dengan cn function
  const buttonClasses = cn(
    baseStyles,
    variants[variant],
    sizes[size],
    widthStyle,
    className,
  )
    .replace(/\s+/g, " ")
    .trim();

  const Spinner = () => (
    <HiArrowPath className="animate-spin h-4 w-4 text-current" />
  );

  const content = isLoading ? (
    <>
      <Spinner />
      <span className="ml-2">Processing...</span>
    </>
  ) : (
    <>
      {leftIcon && <span className="flex-shrink-0">{leftIcon}</span>}
      <span>{children}</span>
      {rightIcon && <span className="flex-shrink-0">{rightIcon}</span>}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={buttonClasses} {...props}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={buttonClasses}
      disabled={isDisabled || isLoading}
      {...props}
    >
      {content}
    </button>
  );
}
