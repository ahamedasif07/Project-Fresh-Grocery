import React from "react";
import SectionContainer from "../SectionContainer/SectionContainer";
import SectionTitle from "../SectionTitle/SectionTitle";
import PopularProductCard from "./PopularProductCard/PopularProductCard";

const PopolurSelles = () => {
  const products = [
    {
      name: "Fresh Red Tomatos",
      originalPrice: 12.99,
      discountedPrice: 6.99,
      image: "https://i.ibb.co.com/XZYFHLmP/p-img-26.webp",
    },
    {
      name: "Fresh Red Tomatos",
      originalPrice: 12.99,
      discountedPrice: 6.99,
      image: "https://i.ibb.co.com/zW5SjsM7/p-img-27.webp",
    },
    {
      name: "Fresh Red Tomatos",
      originalPrice: 12.99,
      discountedPrice: 6.99,
      image: "https://i.ibb.co.com/B5hR34GC/p-img-28.webp",
    },
    {
      name: "Fresh Red Tomatos",
      originalPrice: 12.99,
      discountedPrice: 6.99,
      image: "https://i.ibb.co.com/YTBQBV84/p-img-30.webp",
    },
    {
      name: "Fresh Red Tomatos",
      originalPrice: 12.99,
      discountedPrice: 6.99,
      image: "https://i.ibb.co.com/YTBQBV84/p-img-30.webp",
    },
    {
      name: "Fresh Red Tomatos",
      originalPrice: 12.99,
      discountedPrice: 6.99,
      image: "https://i.ibb.co.com/TMgMsyTT/p-img-31.webp",
    },
    {
      name: "Fresh Red Tomatos",
      originalPrice: 12.99,
      discountedPrice: 6.99,
      image: "https://i.ibb.co.com/YTBQBV84/p-img-30.webp",
    },

    {
      name: "Fresh Red Tomatos",
      originalPrice: 12.99,
      discountedPrice: 6.99,
      image: "https://i.ibb.co.com/XZYFHLmP/p-img-26.webp",
    },
    {
      name: "Fresh Red Tomatos",
      originalPrice: 12.99,
      discountedPrice: 6.99,
      image: "https://i.ibb.co.com/XZYFHLmP/p-img-26.webp",
    },
    {
      name: "Fresh Red Tomatos",
      originalPrice: 12.99,
      discountedPrice: 6.99,
      image: "https://i.ibb.co.com/XZYFHLmP/p-img-26.webp",
    },
    {
      name: "Fresh Red Tomatos",
      originalPrice: 12.99,
      discountedPrice: 6.99,
      image: "https://i.ibb.co.com/YTBQBV84/p-img-30.webp",
    },
    {
      name: "Fresh Red Tomatos",
      originalPrice: 12.99,
      discountedPrice: 6.99,
      image: "https://i.ibb.co.com/YTBQBV84/p-img-30.webp",
    },
  ];

  return (
    <div>
      <SectionContainer>
        <div className="py-[40px]">
          <SectionTitle title="Popular Sales"></SectionTitle>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-x-10 py-[30px]">
            {products.map((product) => (
              <PopularProductCard
                key={product.image}
                product={product}
              ></PopularProductCard>
            ))}
          </div>
        </div>
      </SectionContainer>
    </div>
  );
};

export default PopolurSelles;
