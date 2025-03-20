import React from "react";
import CarouselSlider from "../components/Slider/CarouselSlider";
import SectionContainer from "../components/SectionContainer/SectionContainer";
import FeaturesSection from "../components/FetureSections/FetureSection";

const Home = () => {
  return (
    <div>
      <SectionContainer>
        <CarouselSlider />
      </SectionContainer>
      <FeaturesSection />
    </div>
  );
};

export default Home;
