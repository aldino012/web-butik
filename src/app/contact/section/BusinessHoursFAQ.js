// src/app/contact/section/BusinessHoursFAQ.js
"use client";

import { useState } from "react";
import { HiClock, HiChevronDown } from "react-icons/hi2";

const businessHours = [
  { day: "Monday - Friday", hours: "09:00 - 17:00 WIB", isOpen: true },
  { day: "Saturday", hours: "10:00 - 15:00 WIB", isOpen: true },
  { day: "Sunday", hours: "Closed", isOpen: false },
  { day: "Public Holidays", hours: "Closed", isOpen: false },
];

const faqData = [
  {
    question: "How long does it take to get a response?",
    answer:
      "We typically respond to all inquiries within 24 hours during business days. For urgent matters, please contact us directly via WhatsApp for faster assistance.",
  },
  {
    question: "Do you accept custom orders?",
    answer:
      "Yes, we specialize in custom batik orders. Custom pieces typically take 4-8 weeks to complete depending on the complexity of the design. Please contact us to discuss your requirements.",
  },
  {
    question: "Can I visit the workshop without an appointment?",
    answer:
      "Walk-in visitors are welcome during our business hours. However, for group visits (5+ people) or if you'd like a guided tour, we recommend booking an appointment in advance.",
  },
  {
    question: "Do you ship internationally?",
    answer:
      "Yes, we ship worldwide. International shipping typically takes 7-14 business days. Shipping costs are calculated at checkout based on your location and order weight.",
  },
  {
    question: "What is your return policy?",
    answer:
      "We accept returns within 14 days of delivery for unused items in original condition. Custom orders are non-refundable unless there is a defect in craftsmanship.",
  },
  {
    question: "Do you offer wholesale pricing?",
    answer:
      "Yes, we offer wholesale pricing for orders of 20+ pieces. Please contact our wholesale team at wholesale@batikheritage.id for pricing and catalog information.",
  },
];

export default function BusinessHoursFAQ() {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-px bg-[#9C6644]" />
            <p className="text-xs font-medium text-[#9C6644] tracking-[0.3em] uppercase">
              Information & Support
            </p>
            <div className="w-12 h-px bg-[#9C6644]" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#1A1816] mb-4">
            Business Hours & <span className="font-medium italic">FAQ</span>
          </h2>
          <p className="text-sm md:text-base text-[#1A1816]/60 font-light leading-relaxed">
            Find answers to common questions and learn about our operating
            hours. We're here to make your experience as smooth as possible.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 max-w-7xl mx-auto">
          {/* Left: Business Hours */}
          <div className="lg:col-span-5">
            <div className="bg-[#FCFAF8] rounded-sm p-8 md:p-10 border border-[#EAE5DF] sticky top-32">
              <div className="flex items-center gap-3 mb-6">
                <HiClock className="w-6 h-6 text-[#9C6644]" />
                <h3 className="text-xl font-medium text-[#1A1816]">
                  Business Hours
                </h3>
              </div>

              <div className="space-y-4">
                {businessHours.map((schedule, index) => (
                  <div
                    key={index}
                    className={`flex items-center justify-between py-3 border-b border-[#EAE5DF] last:border-b-0 ${
                      !schedule.isOpen ? "opacity-60" : ""
                    }`}
                  >
                    <div>
                      <p className="text-sm font-medium text-[#1A1816]">
                        {schedule.day}
                      </p>
                      {!schedule.isOpen && (
                        <p className="text-[10px] text-[#9C6644] uppercase tracking-wider mt-0.5">
                          Closed
                        </p>
                      )}
                    </div>
                    <p
                      className={`text-sm font-medium ${schedule.isOpen ? "text-[#1A1816]" : "text-[#1A1816]/50 line-through"}`}
                    >
                      {schedule.hours}
                    </p>
                  </div>
                ))}
              </div>

              {/* Current Status Indicator */}
              <div className="mt-8 pt-6 border-t border-[#EAE5DF]">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <p className="text-xs text-[#1A1816]/70 font-light">
                    We're currently open and ready to assist you
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: FAQ Accordion */}
          <div className="lg:col-span-7">
            <div className="mb-8">
              <p className="text-xs font-medium text-[#9C6644] tracking-[0.2em] uppercase mb-3">
                Frequently Asked Questions
              </p>
              <h3 className="text-2xl md:text-3xl font-light text-[#1A1816]">
                Got Questions?{" "}
                <span className="font-medium italic">We've Got Answers</span>
              </h3>
            </div>

            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <div
                  key={index}
                  className="border border-[#EAE5DF] rounded-sm overflow-hidden hover:border-[#9C6644]/30 transition-colors duration-300"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-[#FCFAF8] transition-colors duration-300"
                  >
                    <h4 className="text-sm md:text-base font-medium text-[#1A1816] pr-4">
                      {faq.question}
                    </h4>
                    <HiChevronDown
                      className={`w-5 h-5 text-[#9C6644] flex-shrink-0 transition-transform duration-300 ${
                        openFAQ === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      openFAQ === index ? "max-h-96" : "max-h-0"
                    }`}
                  >
                    <div className="p-6 pt-0 bg-white">
                      <p className="text-sm text-[#1A1816]/70 font-light leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Still Have Questions CTA */}
            <div className="mt-12 p-8 bg-[#FCFAF8] rounded-sm border border-[#EAE5DF] text-center">
              <p className="text-sm text-[#1A1816]/70 font-light mb-4">
                Still have questions that aren't answered here?
              </p>
              <p className="text-xs text-[#1A1816]/50">
                Don't hesitate to reach out to us directly. Our team is always
                happy to help.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
