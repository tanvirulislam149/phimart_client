import React from "react";
import HeroCarousel from "../components/Home/Carousel/HeroCarousel";
import Category from "../components/Home/Categories/Category";
import Features from "../components/Features";
import Product from "../components/Products/Product";
import DiscountSection from "../components/Home/Discount/DiscountSection";

const Home = () => {
  return (
    <div>
      <HeroCarousel />
      <Features />
      <Category />
      <Product />
      <DiscountSection />
    </div>
  );
};

export default Home;
