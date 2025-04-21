import React from "react";
import HeroCarousel from "../../components/Carousel/HeroCarousel";
import Features from "../../components/Features";
import Product from "../../components/Products/Product";
import DiscountSection from "../../components/Discount/DiscountSection";

const Home = () => {
  return (
    <div>
      <HeroCarousel />
      <Features />
      <Product />
      <DiscountSection />
    </div>
  );
};

export default Home;
