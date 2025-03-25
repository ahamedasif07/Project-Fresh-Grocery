import React from "react";
import SectionContainer from "../SectionContainer/SectionContainer";

const MarketCategory = () => {
  const categories = [
    {
      id: 1,
      name: "Fruits",
      image: "https://i.ibb.co.com/VYmbyDp3/c-img-1.webp",
    },
    {
      id: 2,
      name: "Vegetable",
      image: "https://i.ibb.co.com/tM516Bt1/c-img-2.webp",
    },
    {
      id: 3,
      name: "Juice",
      image: "https://i.ibb.co.com/ZR5M1Gbr/c-img-3.webp",
    },
    {
      id: 4,
      name: "Meat",
      image: "https://i.ibb.co.com/27KzjwBj/c-img-4.webp",
    },
    {
      id: 5,
      name: "Cold Drinks",
      image: "https://i.ibb.co.com/yBSXhHbk/c-img-5.webp",
    },
    {
      id: 6,
      name: "Breads",
      image: "https://i.ibb.co.com/MvKHvNt/c-img-6.webp",
    },
  ];

  return (
    <div>
      <SectionContainer>
        {/* titel */}
        <div className="flex place-items-center justify-between">
          <h2 className="text-[28px] text-black font-semibold">
            Market Categorys
          </h2>
          <div className="group">
            <h2 className="text-[16px] text-black font-semibold">View All</h2>
            <p className="h-[2px] w-0 group-hover:w-[65px] transition-all duration-300 ease-in-out bg-black"></p>
          </div>
        </div>
        {/* catagory images */}
        <div className="flex flex-wrap items-center justify-around mt-[40px]">
          {categories.map((category) => (
            <div key={category.id}>
              <div>
                <div className="bg-[#F3FAF5] border-transparent hover:border-[1px] transition-all duration-300 ease-in-out  hover:border-green-600 h-[200px] w-[200px] flex justify-center items-center rounded-xl">
                  <img src={category.image}></img>
                </div>
                <p className="text-[20px] text-gray-600 font-semibold text-center mt-[15px]">
                  {category.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </SectionContainer>
    </div>
  );
};

export default MarketCategory;
