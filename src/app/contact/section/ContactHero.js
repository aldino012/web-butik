// src/app/contact/section/ContactHero.js
"use client";

import Link from "next/link";
import Button from "@/components/Button";
import {
  HiEnvelope,
  HiPhone,
  HiChatBubbleLeftRight,
  HiArrowDown,
} from "react-icons/hi2";

const quickContacts = [
  {
    icon: HiEnvelope,
    label: "Email Us",
    value: "hello@batikheritage.id",
    href: "mailto:hello@batikheritage.id",
    description: "We'll respond within 24 hours",
  },
  {
    icon: HiPhone,
    label: "Call Us",
    value: "+62 274 123 456",
    href: "tel:+62274123456",
    description: "Mon-Fri from 9am to 5pm",
  },
  {
    icon: HiChatBubbleLeftRight,
    label: "WhatsApp",
    value: "+62 812 3456 7890",
    href: "https://wa.me/6281234567890",
    description: "Chat with us instantly",
  },
];

export default function ContactHero() {
  const scrollToForm = () => {
    const formSection = document.getElementById("contact-form");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 md:py-28 bg-[#FCFAF8] relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg
          className="w-full h-full text-[#9C6644]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="contactPattern"
              x="0"
              y="0"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="20" cy="20" r="1" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#contactPattern)" />
        </svg>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Content */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-px bg-[#9C6644]" />
            <p className="text-xs font-medium text-[#9C6644] tracking-[0.3em] uppercase">
              Get In Touch
            </p>
            <div className="w-12 h-px bg-[#9C6644]" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#1A1816] mb-6 leading-tight">
            We'd Love to{" "}
            <span className="font-medium italic text-[#9C6644]">
              Hear From You
            </span>
          </h1>
          <p className="text-base md:text-lg text-[#1A1816]/70 font-light max-w-2xl mx-auto leading-relaxed">
            Whether you have a question about our collections, need assistance
            with a custom order, or simply want to say hello, our team is here
            to help.
          </p>
        </div>

        {/* Quick Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
          {quickContacts.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <Link
                key={index}
                href={contact.href}
                className="group bg-white p-8 rounded-sm shadow-sm hover:shadow-xl transition-all duration-300 text-center border border-transparent hover:border-[#9C6644]/20"
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-[#9C6644]/10 flex items-center justify-center mb-6 group-hover:bg-[#9C6644] transition-colors duration-300">
                  <Icon className="w-7 h-7 text-[#9C6644] group-hover:text-[#FCFAF8] transition-colors duration-300" />
                </div>
                <p className="text-xs text-[#1A1816]/50 uppercase tracking-wider mb-2">
                  {contact.label}
                </p>
                <p className="text-lg font-medium text-[#1A1816] mb-3 group-hover:text-[#9C6644] transition-colors duration-300">
                  {contact.value}
                </p>
                <p className="text-xs text-[#1A1816]/60 font-light">
                  {contact.description}
                </p>
              </Link>
            );
          })}
        </div>

        {/* Scroll Down Indicator */}
        <div className="text-center">
          <button
            onClick={scrollToForm}
            className="inline-flex flex-col items-center gap-2 text-[#1A1816]/40 hover:text-[#9C6644] transition-colors duration-300 group"
          >
            <p className="text-[10px] uppercase tracking-[0.2em] font-medium">
              Send a Message
            </p>
            <HiArrowDown className="w-5 h-5 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
}
