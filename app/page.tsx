import Hero from "@/components/sections/Hero";
import FeaturedCategories from "@/components/sections/FeaturedCategories";
import BestSellers from "@/components/sections/BestSellers";
import NewArrivals from "@/components/sections/NewArrivals";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Reviews from "@/components/sections/Reviews";
import Newsletter from "@/components/sections/Newsletter";
import InstagramGallery from "@/components/sections/InstagramGallery";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedCategories />
      <BestSellers />
      <NewArrivals />
      <WhyChooseUs />
      <Reviews />
      <Newsletter />
      <InstagramGallery />
    </>
  );
}
