import React from "react";
import SectionContainer from "../SectionContainer/SectionContainer";
import SectionTitle from "../SectionTitle/SectionTitle";
import TopSellingPRoductCard from "../TopSellingProductCard/TopSellingPRoductCard";

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
        </div>
      </SectionContainer>
    </div>
  );
};

export default TopSellProducts;
