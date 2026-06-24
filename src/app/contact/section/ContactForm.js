// src/app/contact/section/ContactForm.js
"use client";

import { useState } from "react";
import Button from "@/components/Button";
import {
  HiMapPin,
  HiEnvelope,
  HiPhone,
  HiClock,
  HiCheckCircle,
} from "react-icons/hi2";

const contactDetails = [
  {
    icon: HiMapPin,
    title: "Visit Our Workshop",
    value: "Jl. Malioboro No. 88, Yogyakarta, Indonesia 55213",
  },
  {
    icon: HiEnvelope,
    title: "Email Us",
    value: "hello@batikheritage.id",
    href: "mailto:hello@batikheritage.id",
  },
  {
    icon: HiPhone,
    title: "Call Us",
    value: "+62 274 123 456",
    href: "tel:+62274123456",
  },
  {
    icon: HiClock,
    title: "Working Hours",
    value: "Mon - Fri: 09:00 - 17:00 WIB",
  },
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulasi pengiriman form
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Reset pesan sukses setelah 5 detik
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact-form" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 max-w-7xl mx-auto">
          {/* Left Side: Contact Form */}
          <div className="lg:col-span-7">
            <div className="mb-10">
              <p className="text-xs font-medium text-[#9C6644] tracking-[0.2em] uppercase mb-3">
                Send a Message
              </p>
              <h2 className="text-3xl md:text-4xl font-light text-[#1A1816] mb-4">
                How can we <span className="font-medium italic">help you?</span>
              </h2>
              <p className="text-sm text-[#1A1816]/60 font-light max-w-xl">
                Fill out the form below and our team will get back to you within
                24 hours. For urgent inquiries, please contact us directly via
                WhatsApp.
              </p>
            </div>

            {isSuccess ? (
              <div className="bg-[#9C6644]/10 border border-[#9C6644]/20 rounded-sm p-8 text-center">
                <HiCheckCircle className="w-12 h-12 text-[#9C6644] mx-auto mb-4" />
                <h3 className="text-xl font-medium text-[#1A1816] mb-2">
                  Message Sent Successfully!
                </h3>
                <p className="text-sm text-[#1A1816]/70 font-light">
                  Thank you for reaching out. We will get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Name Input */}
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-transparent border-b border-[#EAE5DF] py-3 text-sm text-[#1A1816] placeholder-[#1A1816]/40 focus:outline-none focus:border-[#9C6644] transition-colors duration-300 peer"
                      placeholder="Your Name"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-transparent border-b border-[#EAE5DF] py-3 text-sm text-[#1A1816] placeholder-[#1A1816]/40 focus:outline-none focus:border-[#9C6644] transition-colors duration-300 peer"
                      placeholder="Email Address"
                    />
                  </div>
                </div>

                {/* Subject Input */}
                <div className="relative">
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b border-[#EAE5DF] py-3 text-sm text-[#1A1816] placeholder-[#1A1816]/40 focus:outline-none focus:border-[#9C6644] transition-colors duration-300 peer"
                    placeholder="Subject (e.g., Custom Order, Wholesale)"
                  />
                </div>

                {/* Message Textarea */}
                <div className="relative">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full bg-transparent border-b border-[#EAE5DF] py-3 text-sm text-[#1A1816] placeholder-[#1A1816]/40 focus:outline-none focus:border-[#9C6644] transition-colors duration-300 peer resize-none"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    isLoading={isSubmitting}
                    rightIcon={
                      !isSubmitting && <HiCheckCircle className="w-4 h-4" />
                    }
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </div>
              </form>
            )}
          </div>

          {/* Right Side: Contact Information */}
          <div className="lg:col-span-5 lg:pl-8">
            <div className="sticky top-32">
              <div className="bg-[#FCFAF8] rounded-sm p-8 md:p-10 border border-[#EAE5DF]">
                <h3 className="text-xl font-medium text-[#1A1816] mb-2">
                  Contact Information
                </h3>
                <p className="text-sm text-[#1A1816]/60 font-light mb-8">
                  Reach out to us through any of these channels.
                </p>

                <div className="space-y-6">
                  {contactDetails.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <div key={index} className="flex items-start gap-4 group">
                        <div className="w-10 h-10 rounded-sm bg-white border border-[#EAE5DF] flex items-center justify-center flex-shrink-0 group-hover:border-[#9C6644] group-hover:text-[#9C6644] transition-colors duration-300 text-[#1A1816]/60">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-[10px] text-[#1A1816]/50 uppercase tracking-wider mb-1">
                            {item.title}
                          </p>
                          {item.href ? (
                            <a
                              href={item.href}
                              className="text-sm font-medium text-[#1A1816] hover:text-[#9C6644] transition-colors duration-300"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <p className="text-sm font-medium text-[#1A1816]">
                              {item.value}
                            </p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Decorative Divider */}
                <div className="my-8 h-px bg-[#EAE5DF]" />

                {/* Social Proof / Trust Badge */}
                <div className="text-center">
                  <p className="text-xs text-[#1A1816]/50 mb-3">
                    Trusted by 12,000+ customers worldwide
                  </p>
                  <div className="flex justify-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 text-[#9C6644] fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
