// src/app/about/section/MeetTheTeam.js
"use client";

import Link from "next/link";
import Image from "next/image";
import Button from "@/components/Button";
import { HiArrowRight, HiEnvelope, HiPhone, HiMapPin } from "react-icons/hi2";
import { productImages } from "@/data/images";

// ✅ Helper function untuk mendapatkan gambar dengan aman
const getSafeImage = (index) => {
  const images = productImages.batikShirts;
  if (!images || images.length === 0) return null;
  return images[index % images.length];
};

const teamMembers = [
  {
    id: 1,
    name: "Pak Hartono Wijaya",
    role: "Founder & CEO",
    bio: "Visioner di balik Batik Heritage. Dengan passion mendalam terhadap warisan budaya Indonesia, beliau mendirikan brand ini pada tahun 1994 dengan misi melestarikan seni batik tradisional.",
    image: getSafeImage(18), // ✅ Menggunakan helper
  },
  {
    id: 2,
    name: "Bu Sri Mulyani",
    role: "Creative Director",
    bio: "Desainer berbakat yang berhasil memadukan motif tradisional dengan estetika modern. Karya-karyanya telah dipamerkan di berbagai fashion show internasional.",
    image: getSafeImage(19),
  },
  {
    id: 3,
    name: "Mas Dimas Prakoso",
    role: "Head of Sustainability",
    bio: "Ahli lingkungan yang memastikan setiap proses produksi kami ramah lingkungan. Beliau memimpin inisiatif zero-waste dan penggunaan pewarna alami 100%.",
    image: getSafeImage(20),
  },
];

const contactInfo = [
  {
    icon: HiEnvelope,
    label: "Email Us",
    value: "hello@batikheritage.id",
    href: "mailto:hello@batikheritage.id",
  },
  {
    icon: HiPhone,
    label: "Call Us",
    value: "+62 274 123 456",
    href: "tel:+62274123456",
  },
  {
    icon: HiMapPin,
    label: "Visit Us",
    value: "Jl. Malioboro No. 88, Yogyakarta",
    href: "/contact",
  },
];

export default function MeetTheTeam() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-px bg-[#9C6644]" />
            <p className="text-xs font-medium text-[#9C6644] tracking-[0.3em] uppercase">
              Our Leadership
            </p>
            <div className="w-12 h-px bg-[#9C6644]" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#1A1816] mb-4">
            Meet The <span className="font-medium italic">Visionaries</span>
          </h2>
          <p className="text-sm md:text-base text-[#1A1816]/60 font-light leading-relaxed">
            The passionate individuals who lead our mission to preserve and
            innovate Indonesian batik heritage for generations to come.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-24 md:mb-32 max-w-6xl mx-auto">
          {teamMembers.map((member) => (
            <div key={member.id} className="group text-center">
              {/* Image */}
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm mb-6 bg-[#F5F0EB]">
                {member.image && (
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={400}
                    height={533}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1816]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-medium text-[#1A1816] mb-1">
                {member.name}
              </h3>
              <p className="text-sm text-[#9C6644] font-medium mb-4">
                {member.role}
              </p>
              <p className="text-sm text-[#1A1816]/70 font-light leading-relaxed">
                {member.bio}
              </p>
            </div>
          ))}
        </div>

        {/* Vision Statement */}
        <div className="max-w-4xl mx-auto text-center mb-24 md:mb-32 py-12 md:py-16 border-t border-b border-[#EAE5DF]">
          <p className="text-xs font-medium text-[#9C6644] tracking-[0.2em] uppercase mb-6">
            Our Vision
          </p>
          <blockquote className="text-2xl md:text-3xl lg:text-4xl font-light text-[#1A1816] leading-relaxed italic mb-6">
            "To be the global ambassador of Indonesian batik heritage, where
            every piece tells a story of craftsmanship, culture, and sustainable
            innovation."
          </blockquote>
          <div className="flex items-center justify-center gap-3">
            <div className="w-8 h-px bg-[#9C6644]" />
            <p className="text-sm text-[#9C6644] font-medium">
              — Pak Hartono Wijaya, Founder
            </p>
            <div className="w-8 h-px bg-[#9C6644]" />
          </div>
        </div>

        {/* Contact & CTA Section */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left: Contact Info */}
            <div>
              <p className="text-xs font-medium text-[#9C6644] tracking-[0.2em] uppercase mb-4">
                Get In Touch
              </p>
              <h3 className="text-2xl md:text-3xl font-light text-[#1A1816] mb-8">
                We'd Love to{" "}
                <span className="font-medium italic">Hear From You</span>
              </h3>

              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <Link
                      key={index}
                      href={info.href}
                      className="flex items-start gap-4 group"
                    >
                      <div className="w-12 h-12 rounded-sm bg-[#9C6644]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#9C6644] transition-colors duration-300">
                        <Icon className="w-5 h-5 text-[#9C6644] group-hover:text-[#FCFAF8] transition-colors duration-300" />
                      </div>
                      <div>
                        <p className="text-xs text-[#1A1816]/60 uppercase tracking-wider mb-1">
                          {info.label}
                        </p>
                        <p className="text-sm md:text-base text-[#1A1816] font-medium group-hover:text-[#9C6644] transition-colors duration-300">
                          {info.value}
                        </p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Right: Final CTA */}
            <div className="bg-[#FCFAF8] rounded-sm p-8 md:p-12 flex flex-col justify-center">
              <p className="text-xs font-medium text-[#9C6644] tracking-[0.2em] uppercase mb-4">
                Ready to Explore?
              </p>
              <h3 className="text-2xl md:text-3xl font-light text-[#1A1816] mb-4">
                Discover Our{" "}
                <span className="font-medium italic">Collections</span>
              </h3>
              <p className="text-sm text-[#1A1816]/70 font-light leading-relaxed mb-8">
                Experience the beauty of authentic Indonesian batik. Each piece
                is a masterpiece crafted with love, tradition, and sustainable
                practices.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/catalog" className="flex-1">
                  <Button
                    variant="primary"
                    size="md"
                    fullWidth
                    rightIcon={<HiArrowRight className="w-4 h-4" />}
                  >
                    Shop Collection
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="secondary" size="md">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Awards & Recognition */}
        <div className="mt-24 md:mt-32 pt-12 border-t border-[#EAE5DF]">
          <p className="text-center text-xs text-[#1A1816]/40 uppercase tracking-wider mb-8">
            Recognized By
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-40">
            {["Forbes Indonesia", "Vogue", "Elle", "GQ", "Harper's Bazaar"].map(
              (brand, index) => (
                <p
                  key={index}
                  className="text-lg md:text-xl font-medium text-[#1A1816]"
                >
                  {brand}
                </p>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}