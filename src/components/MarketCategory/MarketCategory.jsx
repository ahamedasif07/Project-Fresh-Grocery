import React from "react";
import SectionContainer from "../SectionContainer/SectionContainer";

const MarketCategory = () => {
  const categories = [
    {
      id: 1,
      name: "Fruits",
      image: "/path-to-images/fruits.png",
    },
    {
      id: 2,
      name: "Vegetable",
      image: "/path-to-images/vegetable.png",
    },
    {
      id: 3,
      name: "Juice",
      image: "/path-to-images/juice.png",
    },
    {
      id: 4,
      name: "Meat",
      image: "/path-to-images/meat.png",
    },
    {
      id: 5,
      name: "Cold Drinks",
      image: "/path-to-images/cold-drinks.png",
    },
    {
      id: 6,
      name: "Breads",
      image: "/path-to-images/breads.png",
    },
  ];

  return (
    <div>
      <SectionContainer>
        <div className="flex place-items-center justify-between">
          <h2 className="text-[28px] text-black font-semibold">
            Market Categorys
          </h2>
          <div className="group">
            <h2 className="text-[16px] text-black font-semibold">View All</h2>
            <p className="h-[2px] w-0 group-hover:w-[65px] transition-all duration-300 ease-in-out bg-black"></p>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
};

export default MarketCategory;
