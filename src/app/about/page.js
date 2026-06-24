// src/app/about/page.js
import Hero from "@/components/Hero";
import HeritageTimeline from "./section/HeritageTimeline";
import BrandValues from "./section/BrandValues";
import ArtisanSpotlight from "./section/ArtisanSpotlight";
import CommunityImpact from "./section/CommunityImpact";
import MeetTheTeam from "./section/MeetTheTeam";
import { images } from "@/data/images";

export const metadata = {
  title: "About Us | Batik Heritage",
  description:
    "Discover the story behind Batik Heritage - preserving Indonesian batik tradition for over 30 years",
};

export default function AboutPage() {
  return (
    <main>
      {/* Section 1: Hero (Paling Atas) */}
      <Hero
        fullHeight={true}
        eyebrow="Our Story"
        title="Preserving Heritage, Embracing Tomorrow"
        description="For over three decades, we have been dedicated to preserving the ancient art of Indonesian batik while bringing it to the modern world. Each piece tells a story of craftsmanship, culture, and passion passed down through generations."
        image={images.hero[1] || images.hero[0]}
        ctaText="Discover Our Heritage"
        ctaHref="#heritage"
        secondaryCtaText="Watch Our Journey"
        secondaryCtaHref="#video"
        badge="Since 1994"
        batikMotif="kawung"
      />

      {/* Section 2: Heritage Timeline */}
      <HeritageTimeline />

      {/* Section 3: Brand Values */}
      <BrandValues />

      {/* Section 4: Artisan Spotlight */}
      <ArtisanSpotlight />

      {/* Section 5: Community & Impact */}
      <CommunityImpact />

      {/* Section 6: Meet The Team & Final CTA (Paling Bawah) */}
      <MeetTheTeam />
    </main>
  );
}
