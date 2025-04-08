import React from "react";
import SectionContainer from "../SectionContainer/SectionContainer";
import PrimaryButton from "../PrymaryButton/PrimaryButton";
import SectionTitle from "../SectionTitle/SectionTitle";

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
        <SectionTitle title="Market Category"></SectionTitle>

        {/* catagory images */}
        <div className="flex flex-wrap items-center justify-between mt-[40px]">
          {categories.map((category, index) => (
            <div key={category.id}>
              <div
                data-aos="fade-right"
                data-aos-delay={`${index * 100}`}
                data-aos-duration="200"
              >
                <div className="bg-[#F3FAF5] group border-transparent hover:border-[1px] transition-all duration-300 ease-in-out  hover:border-green-600 h-[200px] w-[200px] flex justify-center items-center rounded-xl">
                  <img
                    className="group-hover:scale-110 duration-300 ease-in-out"
                    src={category.image}
                  ></img>
                </div>
                <p className="text-[18px] text-gray-600 font-semibold text-center mt-[13px] pb-[4px]">
                  {category.name}
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* market msin 3 categoty */}
        <div>
          <div></div>
        </div>
      </SectionContainer>
    </div>
  );
};

export default MarketCategory;
