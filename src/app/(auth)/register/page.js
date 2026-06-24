// src/app/(auth)/register/page.js
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/Button";
import {
  HiEnvelope,
  HiLockClosed,
  HiUser,
  HiEye,
  HiEyeSlash,
} from "react-icons/hi2";
import { images } from "@/data/images";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    agreeTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Register:", formData);
  };

  return (
    <div className="min-h-screen flex">
      {/* Left: Visual Panel */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        <Image
          src={images.hero[1] || images.hero[0]}
          alt="Batik Heritage"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A1816]/80 via-[#1A1816]/60 to-[#9C6644]/40" />

        <div className="relative z-10 flex flex-col justify-between p-12 text-[#FCFAF8]">
          <Link href="/" className="text-2xl font-light tracking-wider">
            Batik{" "}
            <span className="font-medium italic text-[#9C6644]">Heritage</span>
          </Link>

          <div className="max-w-md">
            <div className="w-12 h-px bg-[#9C6644] mb-6" />
            <h2 className="text-4xl font-light leading-tight mb-4">
              Join the{" "}
              <span className="font-medium italic">Heritage Circle</span>
            </h2>
            <p className="text-sm text-[#FCFAF8]/80 font-light leading-relaxed">
              Become part of our community and enjoy exclusive access to limited
              collections, artisan stories, and member-only privileges.
            </p>
          </div>

          <p className="text-xs text-[#FCFAF8]/50">
            © 2026 Batik Heritage. Preserving tradition since 1994.
          </p>
        </div>
      </div>

      {/* Right: Register Form */}
      <div className="flex-1 flex items-center justify-center p-6 sm:p-12 bg-[#FCFAF8]">
        <div className="w-full max-w-md">
          <Link
            href="/"
            className="lg:hidden inline-block text-2xl font-light tracking-wider text-[#1A1816] mb-12"
          >
            Batik{" "}
            <span className="font-medium italic text-[#9C6644]">Heritage</span>
          </Link>

          <div className="mb-10">
            <p className="text-xs font-medium text-[#9C6644] tracking-[0.2em] uppercase mb-3">
              Create Account
            </p>
            <h1 className="text-3xl md:text-4xl font-light text-[#1A1816] mb-3">
              Sign <span className="font-medium italic">Up</span>
            </h1>
            <p className="text-sm text-[#1A1816]/60 font-light">
              Start your journey with authentic Indonesian batik.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Full Name */}
            <div>
              <label className="block text-xs font-medium text-[#1A1816] uppercase tracking-wider mb-2">
                Full Name
              </label>
              <div className="relative">
                <HiUser className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#1A1816]/40" />
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full bg-white border border-[#EAE5DF] rounded-sm pl-11 pr-4 py-3 text-sm text-[#1A1816] placeholder-[#1A1816]/40 focus:outline-none focus:border-[#9C6644] transition-colors duration-300"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-xs font-medium text-[#1A1816] uppercase tracking-wider mb-2">
                Email Address
              </label>
              <div className="relative">
                <HiEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#1A1816]/40" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                  className="w-full bg-white border border-[#EAE5DF] rounded-sm pl-11 pr-4 py-3 text-sm text-[#1A1816] placeholder-[#1A1816]/40 focus:outline-none focus:border-[#9C6644] transition-colors duration-300"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-xs font-medium text-[#1A1816] uppercase tracking-wider mb-2">
                Password
              </label>
              <div className="relative">
                <HiLockClosed className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#1A1816]/40" />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  placeholder="Min. 8 characters"
                  className="w-full bg-white border border-[#EAE5DF] rounded-sm pl-11 pr-11 py-3 text-sm text-[#1A1816] placeholder-[#1A1816]/40 focus:outline-none focus:border-[#9C6644] transition-colors duration-300"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#1A1816]/40 hover:text-[#9C6644] transition-colors"
                >
                  {showPassword ? (
                    <HiEyeSlash className="w-4 h-4" />
                  ) : (
                    <HiEye className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Terms */}
            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                name="agreeTerms"
                id="agreeTerms"
                checked={formData.agreeTerms}
                onChange={handleChange}
                required
                className="w-4 h-4 mt-0.5 rounded-sm border-[#EAE5DF] text-[#9C6644] focus:ring-[#9C6644]"
              />
              <label
                htmlFor="agreeTerms"
                className="text-xs text-[#1A1816]/70 cursor-pointer leading-relaxed"
              >
                I agree to the{" "}
                <Link href="/terms" className="text-[#9C6644] hover:underline">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link
                  href="/privacy"
                  className="text-[#9C6644] hover:underline"
                >
                  Privacy Policy
                </Link>
              </label>
            </div>

            <Button type="submit" variant="primary" size="lg" fullWidth>
              Create Account
            </Button>
          </form>

          <p className="text-center text-sm text-[#1A1816]/70 font-light mt-10">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-[#9C6644] font-medium hover:underline"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
