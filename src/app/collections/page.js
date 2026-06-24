// src/app/collections/page.js
import CategoryShowcase from "./section/CategoryShowcase";
import FeaturedCollection from "./section/FeaturedCollection";
import NewArrivals from "./section/NewArrivals";
import EditorialBanner from "./section/EditorialBanner";
import BestSellers from "./section/BestSellers";
import Testimonials from "./section/Testimonials";
import NewsletterCTA from "./section/NewsletterCTA";

export const metadata = {
  title: "Collections | Batik Heritage",
  description: "Explore our curated collections of authentic Indonesian batik",
};

export default function CollectionsPage() {
  return (
    <main>
      <CategoryShowcase />
      <FeaturedCollection />
      <NewArrivals />
      <EditorialBanner />
      <BestSellers />
      <Testimonials />
      <NewsletterCTA />
    </main>
  );
}
