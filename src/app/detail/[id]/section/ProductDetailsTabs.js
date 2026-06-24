// src/app/detail/[id]/section/ProductDetailsTabs.js
"use client";

import { useState } from "react";
import Button from "@/components/Button";
import {
  HiInformationCircle,
  HiClipboardDocumentList, // ✅ Ganti HiClipboardList dengan HiClipboardDocumentList
  HiTruck,
  HiCheck,
  HiXMark,
} from "react-icons/hi2";

const tabs = [
  {
    id: "description",
    label: "Description",
    icon: HiInformationCircle,
  },
  {
    id: "details",
    label: "Details & Care",
    icon: HiClipboardDocumentList, // ✅ Ganti di sini juga
  },
  {
    id: "shipping",
    label: "Shipping & Returns",
    icon: HiTruck,
  },
];

const careInstructions = [
  { text: "Hand wash in cold water", allowed: true },
  { text: "Use mild, natural soap", allowed: true },
  { text: "Do not bleach or soak", allowed: false },
  { text: "Dry flat in the shade", allowed: true },
  { text: "Iron on low heat (reverse side)", allowed: true },
  { text: "Do not tumble dry", allowed: false },
];

export default function ProductDetailsTabs() {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <section className="py-16 md:py-24 bg-[#FCFAF8]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Tabs Navigation */}
          <div className="border-b border-[#EAE5DF] mb-8 md:mb-12 overflow-x-auto scrollbar-hide">
            <div className="flex items-center gap-8 min-w-max">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`
                      flex items-center gap-2 pb-4 text-sm font-medium tracking-wide uppercase transition-all duration-300 whitespace-nowrap
                      ${
                        activeTab === tab.id
                          ? "text-[#1A1816] border-b-2 border-[#9C6644]"
                          : "text-[#1A1816]/50 hover:text-[#1A1816] border-b-2 border-transparent"
                      }
                    `}
                  >
                    <Icon className="w-4 h-4" />
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Tab Contents */}
          <div className="min-h-[300px]">
            {/* Description Tab */}
            {activeTab === "description" && (
              <div className="animate-fadeIn">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                  <div>
                    <h3 className="text-2xl font-light text-[#1A1816] mb-4">
                      The Philosophy of{" "}
                      <span className="font-medium italic">Parang Rusak</span>
                    </h3>
                    <p className="text-sm text-[#1A1816]/70 font-light leading-relaxed mb-6">
                      The Parang Rusak motif is one of the oldest and most
                      sacred patterns in Javanese batik. Historically reserved
                      for royalty, the continuous, unbroken diagonal lines
                      symbolize an unceasing struggle for self-improvement and
                      the power to overcome obstacles.
                    </p>
                    <p className="text-sm text-[#1A1816]/70 font-light leading-relaxed">
                      Each piece in this collection is meticulously hand-drawn
                      using the traditional canting technique, a process that
                      requires immense patience and precision. The natural soga
                      dye gives it a warm, earthy tone that deepens beautifully
                      with age.
                    </p>
                  </div>
                  <div className="bg-white p-8 rounded-sm border border-[#EAE5DF]">
                    <h4 className="text-sm font-medium text-[#1A1816] uppercase tracking-wider mb-4">
                      Why Choose Heritage Signature?
                    </h4>
                    <ul className="space-y-3">
                      {[
                        "Hand-drawn by master artisans with 20+ years of experience",
                        "100% natural dyes sourced from local Indonesian forests",
                        "Certified authentic by the Indonesian Batik Foundation",
                        "Every purchase supports the preservation of traditional crafts",
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <HiCheck className="w-5 h-5 text-[#9C6644] flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-[#1A1816]/80 font-light">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* Details & Care Tab */}
            {activeTab === "details" && (
              <div className="animate-fadeIn">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  {/* Product Specifications */}
                  <div>
                    <h3 className="text-xl font-medium text-[#1A1816] mb-6">
                      Product Specifications
                    </h3>
                    <div className="space-y-4">
                      {[
                        {
                          label: "Material",
                          value: "100% Premium Organic Cotton",
                        },
                        { label: "Dye Type", value: "Natural Soga & Indigo" },
                        {
                          label: "Technique",
                          value: "Batik Tulis (Hand-drawn)",
                        },
                        { label: "Origin", value: "Yogyakarta, Indonesia" },
                        { label: "Weight", value: "Approx. 350 grams" },
                      ].map((spec, index) => (
                        <div
                          key={index}
                          className="flex justify-between py-3 border-b border-[#EAE5DF] last:border-b-0"
                        >
                          <span className="text-sm text-[#1A1816]/60">
                            {spec.label}
                          </span>
                          <span className="text-sm font-medium text-[#1A1816]">
                            {spec.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Care Instructions */}
                  <div>
                    <h3 className="text-xl font-medium text-[#1A1816] mb-6">
                      Care Instructions
                    </h3>
                    <div className="bg-white p-6 rounded-sm border border-[#EAE5DF]">
                      <ul className="space-y-4">
                        {careInstructions.map((instruction, index) => (
                          <li key={index} className="flex items-center gap-3">
                            <div
                              className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                                instruction.allowed
                                  ? "bg-[#9C6644]/10 text-[#9C6644]"
                                  : "bg-[#1A1816]/5 text-[#1A1816]/40"
                              }`}
                            >
                              {instruction.allowed ? (
                                <HiCheck className="w-4 h-4" />
                              ) : (
                                <HiXMark className="w-4 h-4" />
                              )}
                            </div>
                            <span
                              className={`text-sm ${
                                instruction.allowed
                                  ? "text-[#1A1816]/80"
                                  : "text-[#1A1816]/40 line-through"
                              }`}
                            >
                              {instruction.text}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Shipping & Returns Tab */}
            {activeTab === "shipping" && (
              <div className="animate-fadeIn">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  {/* Shipping Info */}
                  <div>
                    <h3 className="text-xl font-medium text-[#1A1816] mb-6">
                      Shipping Information
                    </h3>
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-sm bg-[#9C6644]/10 flex items-center justify-center flex-shrink-0">
                          <HiTruck className="w-5 h-5 text-[#9C6644]" />
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-[#1A1816] mb-1">
                            Domestic (Indonesia)
                          </h4>
                          <p className="text-sm text-[#1A1816]/70 font-light leading-relaxed">
                            Free shipping for orders over Rp 1.000.000. Standard
                            delivery takes 3-5 business days via JNE/J&T.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-sm bg-[#9C6644]/10 flex items-center justify-center flex-shrink-0">
                          <HiTruck className="w-5 h-5 text-[#9C6644]" />
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-[#1A1816] mb-1">
                            International
                          </h4>
                          <p className="text-sm text-[#1A1816]/70 font-light leading-relaxed">
                            We ship worldwide via DHL Express. Delivery takes
                            7-14 business days. Customs fees may apply.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Return Policy */}
                  <div>
                    <h3 className="text-xl font-medium text-[#1A1816] mb-6">
                      Return Policy
                    </h3>
                    <div className="bg-white p-6 rounded-sm border border-[#EAE5DF]">
                      <p className="text-sm text-[#1A1816]/70 font-light leading-relaxed mb-4">
                        We want you to be completely satisfied with your
                        purchase. If you're not, we offer a
                        <span className="font-medium text-[#1A1816]">
                          {" "}
                          14-day return policy
                        </span>{" "}
                        for unused items in their original condition.
                      </p>
                      <ul className="space-y-2 mb-6">
                        {[
                          "Items must be unworn and unwashed",
                          "Original tags and packaging must be intact",
                          "Custom or made-to-order items are non-refundable",
                        ].map((item, index) => (
                          <li
                            key={index}
                            className="flex items-start gap-2 text-sm text-[#1A1816]/70 font-light"
                          >
                            <HiCheck className="w-4 h-4 text-[#9C6644] mt-0.5 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                      <Button variant="secondary" size="sm">
                        Request a Return
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}