import type { NextPage } from "next";
import HeroSection from "../components/HeroSection";
// import StatsSection from "../components/StatsSection";
import FeaturesSection from "../components/FeaturesSection";
import FeaturedCoursesSection from "../components/FeaturedCoursesSection";
import CTASection from "../components/CTASection";

const Home: NextPage = () => {
  // You can manage any page-level state here if needed.
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <FeaturedCoursesSection />
      <CTASection />
    </>
  );
};

export default Home;
