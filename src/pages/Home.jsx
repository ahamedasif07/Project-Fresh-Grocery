import React from "react";
import CarouselSlider from "../components/Slider/CarouselSlider";
import SectionContainer from "../components/SectionContainer/SectionContainer";
import FeaturesSection from "../components/FetureSections/FetureSection";
import bgImage from "../../public/assets/new-arrival-bg.webp";
import MarketCategory from "../components/MarketCategory/MarketCategory";

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
    </div>
  );
};

export default Home;
