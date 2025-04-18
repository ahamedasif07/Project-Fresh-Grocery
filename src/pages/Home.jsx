import React from "react";
import CarouselSlider from "../components/Slider/CarouselSlider";
import SectionContainer from "../components/SectionContainer/SectionContainer";
import FeaturesSection from "../components/FetureSections/FetureSection";
import bgImage from "../../public/assets/new-arrival-bg.webp";
import MarketCategory from "../components/MarketCategory/MarketCategory";
import MainCategory from "../components/MainCategory/MainCategory";
import FreshVegetables from "../components/Fresh Vegetables/FreshVegetables";

const Home = () => {
  return (
    <div>
      <div
        className="h-full opacity-100 w-full bg-cover bg-center"
        style={{ backgroundImage: `url('/assets/new-arrival-bg.webp')` }}
      >
        <div>
          <CarouselSlider />
        </div>
      </div>
      <FeaturesSection />

      <MarketCategory />
      <MainCategory />
      <FreshVegetables />
    </div>
  );
};

export default Home;
