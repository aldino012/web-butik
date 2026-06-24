// src/app/page.js
import Hero from "@/components/Hero";
import FeaturedCategories from "@/app/home/section/FeaturedCategories";
import NewArrivals from "@/app/home/section/NewArrivals";
import HeritageStory from "@/app/home/section/HeritageStory";
import BestSellers from "@/app/home/section/BestSellers";
import EditorialBanner from "@/app/home/section/EditorialBanner";
import Testimonials from "@/app/home/section/Testimonials";
import { images } from "@/data/images";

export default function Home() {
  return (
    <>
      {/* Hero dengan motif Parang (default) */}
      <Hero
        fullHeight={true}
        eyebrow="Exclusive Collection 2026"
        title="The Art of Batik"
        description="Discover our latest collection of hand-drawn batik, where every stroke tells a centuries-old story reimagined for the modern wardrobe."
        image={images.hero[0]}
        ctaText="Shop The Collection"
        ctaHref="/catalog"
        secondaryCtaText="Our Story"
        secondaryCtaHref="/about"
        badge="New Season"
        batikMotif="parang" // Bisa diganti: 'kawung', 'megamendung', 'truntum', 'sidomukti'
      />

      <FeaturedCategories />
      <NewArrivals />
      <HeritageStory />
      <BestSellers />
      <EditorialBanner />
      <Testimonials />
    </>
  );
}
