import FAQSection from "@/section/Faqs";
import FeaturedTours from "@/section/FeaturedTours";
import HeroSection from "@/section/hero";
import RecommendedTours from "@/section/Recommended";
import SupportSection from "@/section/Support";
import TestimonialSection from "@/section/Testimonials";
import TopCategories from "@/section/TopCategories";
import TrendingDestinations from "@/section/TrendingDestination";
// import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main>
        <HeroSection/>
        <TrendingDestinations/>
        <FeaturedTours/>
        <TopCategories/>
        <RecommendedTours/>
        <SupportSection/>
        <FAQSection/>
        <TestimonialSection/>
      </main>
    </div>
  );
}
