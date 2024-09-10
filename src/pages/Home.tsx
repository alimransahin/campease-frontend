import React from "react";
import HeroSection from "../components/homePage/Hero";
import FAQ from "../components/homePage/Faq";
import BestSellingProducts from "../components/homePage/BestSelling";
import CategoriesSection from "../components/homePage/category/Category";
import FeaturedProducts from "../components/homePage/FeaturedProsucts";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <BestSellingProducts />
      <CategoriesSection />
      <FeaturedProducts />
      <FAQ />
    </div>
  );
};

export default Home;
