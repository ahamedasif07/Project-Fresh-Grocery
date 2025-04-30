import React from "react";
import SectionContainer from "../SectionContainer/SectionContainer";
import SectionTitle from "../SectionTitle/SectionTitle";
import TopSellingPRoductCard from "../TopSellingProductCard/TopSellingPRoductCard";
import BanerOne from "../../../public/assets/grocery-bg.webp";
import BanerTow from "../../../public/assets/grocery-bg-1.webp";
import PrimaryButton from "../PrymaryButton/PrimaryButton";

const TopSellProducts = () => {
  const products = [
    {
      name: "White Eggplant",
      oldPrice: 12.99,
      newPrice: 6.99,
      rating: 5,
      image: "https://i.ibb.co.com/XRs6qhb/p-img-5.webp",
    },
    {
      name: "Fresh Mashroom",
      oldPrice: 10.99,
      newPrice: 5.99,
      rating: 5,
      image: "https://i.ibb.co.com/MxWg1SLV/p-img-6.webp",
    },
    {
      name: "Hot Patties",
      oldPrice: 5.99,
      newPrice: 3.99,
      rating: 5,
      image: "https://i.ibb.co.com/KjDgzfC1/p-img-7.webp",
    },
    {
      name: "Fresh Bananas",
      oldPrice: 8.99,
      newPrice: 4.99,
      rating: 4,
      image: "https://i.ibb.co.com/bjxt9WWc/p-img-8.webp",
    },
    {
      name: "Terraorganics",
      oldPrice: 12.99,
      newPrice: 6.99,
      rating: 5,
      image: "https://i.ibb.co.com/v2JMNHK/p-img-9.webp",
    },
    {
      name: "Orange Fruit",
      oldPrice: 15.99,
      newPrice: 8.99,
      rating: 5,
      image: "https://i.ibb.co.com/vxGLymR8/p-img-10.webp",
    },
  ];

  return (
    <div>
      <SectionContainer>
        <SectionTitle title="Top Selling Prodcuts"></SectionTitle>
        <div>
          <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto gap-4 mt-[26px]">
            {products.map((product) => (
              <TopSellingPRoductCard
                key={product.id}
                product={product}
              ></TopSellingPRoductCard>
            ))}
          </div>
          {/* top selling product baners  start*/}
          <div className="flex justify-between items-center gap-10 py-[60px] ">
            <div
              data-aos="fade-right"
              className="rounded-md bg-center bg-cover h-[300px] w-full"
              style={{ backgroundImage: `url(${BanerOne})` }}
            >
              <div className="p-5">
                <p className="text-[14px]  uppercase ">Fresh Vegetables</p>
                <h3 className="text-4xl font-bold text-gray-900 py-5">
                  The 14 Most Nutrient- Dense Vegetables
                </h3>
                <div className="mt-[30px]">
                  <PrimaryButton
                    text="Shop Now"
                    colour="#FFBB38"
                    hoverColour="#0A0A0A"
                  ></PrimaryButton>
                </div>
              </div>
            </div>

            <div
              data-aos="fade-left"
              className="rounded-md bg-center bg-cover h-[300px] w-full "
              style={{ backgroundImage: `url(${BanerTow})` }}
            >
              <div className="p-5">
                <p className="text-[14px]  uppercase ">Fresh Fruits</p>
                <h3 className="text-4xl font-bold text-gray-900 py-5">
                  Healthy & Goods <br /> Fruits
                </h3>
                <div className="mt-[30px]">
                  <PrimaryButton
                    text="Shop Now"
                    colour="#34A853"
                    hoverColour="#0A0A0A"
                  ></PrimaryButton>
                </div>
              </div>
            </div>
          </div>
          {/* top selling product baners  end*/}
        </div>
      </SectionContainer>
    </div>
  );
};

export default TopSellProducts;
