// src/app/contact/page.js
import ContactHero from "./section/ContactHero";
import ContactForm from "./section/ContactForm";
import LocationVisit from "./section/LocationVisit";
import BusinessHoursFAQ from "./section/BusinessHoursFAQ";
import SocialMediaCTA from "./section/SocialMediaCTA";

export const metadata = {
  title: "Contact Us | Batik Heritage",
  description:
    "Get in touch with Batik Heritage. We are here to help with your inquiries, custom orders, and more.",
};

export default function ContactPage() {
  return (
    <main>
      {/* Section 1: Contact Hero & Quick Actions */}
      <ContactHero />

      {/* Section 2: Contact Form & Information */}
      <ContactForm />

      {/* Section 3: Location & Visit Us */}
      <LocationVisit />

      {/* Section 4: Business Hours & FAQ */}
      <BusinessHoursFAQ />

      {/* Section 5: Social Media & Final CTA */}
      <SocialMediaCTA />
    </main>
  );
}
