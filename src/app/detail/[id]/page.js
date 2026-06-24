// src/app/detail/[id]/page.js
import ProductOverview from "./section/ProductOverview";
import ProductDetailsTabs from "./section/ProductDetailsTabs";
import SizeGuide from "./section/SizeGuide";
import ReviewsRatings from "./section/ReviewsRatings";
import RelatedProducts from "./section/RelatedProducts";
import EditorialNewsletter from "./section/EditorialNewsletter";

export const metadata = {
  title: "Product Detail | Batik Heritage",
  description:
    "Discover our premium batik collection with authentic craftsmanship",
};

export default function DetailPage() {
  return (
    <main>
      {/* Section 1: Product Overview (Hero, Gallery, Add to Cart) */}
      <ProductOverview />

      {/* Section 2: Product Details Tabs (Description, Care, Shipping) */}
      <ProductDetailsTabs />

      {/* Section 3: Size Guide & Fit (Chart, Measurements) */}
      <SizeGuide />

      {/* Section 4: Reviews & Ratings (Social Proof) */}
      <ReviewsRatings />

      {/* Section 5: Related Products (Cross-sell) */}
      <RelatedProducts />

      {/* Section 6: Editorial Inspiration & Newsletter (Final CTA & Retention) */}
      <EditorialNewsletter />
    </main>
  );
}
