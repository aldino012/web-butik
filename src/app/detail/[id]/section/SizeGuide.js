// src/app/detail/[id]/section/SizeGuide.js
"use client";

import { useState } from "react";
import Link from "next/link";
import Button from "@/components/Button";
import {
  HiAdjustmentsHorizontal, // ✅ Ganti HiRuler dengan HiAdjustmentsHorizontal
  HiQuestionMarkCircle,
  HiChatBubbleLeftRight,
  HiCheck,
  HiArrowRight,
} from "react-icons/hi2";

const sizeChartData = [
  { size: "S", chest: 96, length: 68, sleeve: 60 },
  { size: "M", chest: 100, length: 70, sleeve: 61 },
  { size: "L", chest: 104, length: 72, sleeve: 62 },
  { size: "XL", chest: 108, length: 74, sleeve: 63 },
  { size: "XXL", chest: 112, length: 76, sleeve: 64 },
];

const measurementSteps = [
  {
    step: "01",
    title: "Chest (Dada)",
    desc: "Ukur melingkar di bagian dada terlebar, tepat di bawah ketiak.",
  },
  {
    step: "02",
    title: "Length (Panjang)",
    desc: "Ukur dari bahu tertinggi hingga ke bawah hem baju.",
  },
  {
    step: "03",
    title: "Sleeve (Lengan)",
    desc: "Ukur dari bahu hingga ke ujung manset lengan.",
  },
];

export default function SizeGuide() {
  const [unit, setUnit] = useState("cm"); // 'cm' or 'inch'

  const convert = (val) => (unit === "inch" ? (val / 2.54).toFixed(1) : val);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <HiAdjustmentsHorizontal className="w-5 h-5 text-[#9C6644]" />
              <p className="text-xs font-medium text-[#9C6644] tracking-[0.2em] uppercase">
                Find Your Perfect Fit
              </p>
            </div>
            <h2 className="text-3xl md:text-4xl font-light text-[#1A1816] mb-4">
              Size Guide &{" "}
              <span className="font-medium italic">Measurements</span>
            </h2>
            <p className="text-sm text-[#1A1816]/60 font-light max-w-2xl mx-auto">
              Our garments are designed with a relaxed, modern fit. Use the
              chart below to find your ideal size based on your body
              measurements.
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Left: Size Chart Table (7 cols) */}
            <div className="lg:col-span-7">
              {/* Unit Toggle */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-medium text-[#1A1816]">
                  Men's Shirt Size Chart
                </h3>
                <div className="flex items-center bg-[#FCFAF8] border border-[#EAE5DF] rounded-sm p-1">
                  <button
                    onClick={() => setUnit("cm")}
                    className={`px-4 py-1.5 text-xs font-medium uppercase tracking-wider rounded-sm transition-all duration-300 ${
                      unit === "cm"
                        ? "bg-[#1A1816] text-[#FCFAF8]"
                        : "text-[#1A1816]/60 hover:text-[#1A1816]"
                    }`}
                  >
                    CM
                  </button>
                  <button
                    onClick={() => setUnit("inch")}
                    className={`px-4 py-1.5 text-xs font-medium uppercase tracking-wider rounded-sm transition-all duration-300 ${
                      unit === "inch"
                        ? "bg-[#1A1816] text-[#FCFAF8]"
                        : "text-[#1A1816]/60 hover:text-[#1A1816]"
                    }`}
                  >
                    INCH
                  </button>
                </div>
              </div>

              {/* Responsive Table */}
              <div className="overflow-x-auto border border-[#EAE5DF] rounded-sm">
                <table className="w-full text-sm text-left">
                  <thead className="bg-[#FCFAF8] text-[#1A1816] uppercase tracking-wider text-xs">
                    <tr>
                      <th className="px-6 py-4 font-medium">Size</th>
                      <th className="px-6 py-4 font-medium">Chest</th>
                      <th className="px-6 py-4 font-medium">Length</th>
                      <th className="px-6 py-4 font-medium">Sleeve</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#EAE5DF]">
                    {sizeChartData.map((row) => (
                      <tr
                        key={row.size}
                        className="hover:bg-[#FCFAF8]/50 transition-colors"
                      >
                        <td className="px-6 py-4 font-medium text-[#1A1816]">
                          {row.size}
                        </td>
                        <td className="px-6 py-4 text-[#1A1816]/80">
                          {convert(row.chest)} {unit}
                        </td>
                        <td className="px-6 py-4 text-[#1A1816]/80">
                          {convert(row.length)} {unit}
                        </td>
                        <td className="px-6 py-4 text-[#1A1816]/80">
                          {convert(row.sleeve)} {unit}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Fit Note */}
              <div className="mt-6 flex items-start gap-3 bg-[#9C6644]/5 border border-[#9C6644]/20 p-4 rounded-sm">
                <HiQuestionMarkCircle className="w-5 h-5 text-[#9C6644] flex-shrink-0 mt-0.5" />
                <p className="text-xs text-[#1A1816]/80 font-light leading-relaxed">
                  <span className="font-medium">Fit Note:</span> This garment
                  has a regular fit. If you prefer a looser, oversized look, we
                  recommend sizing up. All measurements are approximate and may
                  vary by 1-2 cm due to the handcrafted nature of batik.
                </p>
              </div>
            </div>

            {/* Right: How to Measure & CTA (5 cols) */}
            <div className="lg:col-span-5 space-y-8">
              {/* How to Measure */}
              <div className="bg-[#FCFAF8] rounded-sm p-8 border border-[#EAE5DF]">
                <h3 className="text-lg font-medium text-[#1A1816] mb-6 flex items-center gap-2">
                  <HiAdjustmentsHorizontal className="w-5 h-5 text-[#9C6644]" />
                  How to Measure
                </h3>
                <div className="space-y-6">
                  {measurementSteps.map((step) => (
                    <div key={step.step} className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#1A1816] text-[#FCFAF8] flex items-center justify-center text-xs font-medium">
                        {step.step}
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-[#1A1816] mb-1">
                          {step.title}
                        </h4>
                        <p className="text-xs text-[#1A1816]/70 font-light leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Need Help CTA */}
              <div className="bg-[#1A1816] rounded-sm p-8 text-center">
                <HiChatBubbleLeftRight className="w-8 h-8 text-[#9C6644] mx-auto mb-4" />
                <h3 className="text-lg font-medium text-[#FCFAF8] mb-2">
                  Not Sure About Your Size?
                </h3>
                <p className="text-xs text-[#FCFAF8]/70 font-light leading-relaxed mb-6">
                  Our style experts are here to help you find the perfect fit.
                  Chat with us on WhatsApp for personalized advice.
                </p>
                <Link
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="primary"
                    size="md"
                    className="!bg-[#FCFAF8] !text-[#1A1816] !border-[#FCFAF8] hover:!bg-[#9C6644] hover:!border-[#9C6644] hover:!text-[#FCFAF8]"
                    rightIcon={<HiArrowRight className="w-4 h-4" />}
                  >
                    Chat with Expert
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}