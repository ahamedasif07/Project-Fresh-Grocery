import React from "react";
import SectionContainer from "../SectionContainer/SectionContainer";
import categoryBg from "../../../public/assets/category-section-background.webp";
import SectionTitle from "../SectionTitle/SectionTitle";
import ProductCard from "../ProductCard/PeoductCard";

const DriankJucies = () => {
  const products = [
    {
      id: 1,
      name: "Fresh Red Tomatos",
      oldPrice: 12.99,
      newPrice: 6.99,
      rating: 5,
      image: "https://i.ibb.co.com/jZT6XFy8/p-img-1.webp", // Replace with your actual image path
      buttonText: "Add To Cart",
    },
    {
      id: 2,
      name: "Chicken Eggs",
      oldPrice: 10.99,
      newPrice: 5.99,
      rating: 3,
      image: "https://i.ibb.co.com/qY0LJXMv/p-img-2.webp", // Replace with your actual image path
      buttonText: "Add To Cart",
    },
    {
      id: 3,
      name: "Fresh Watermelon",
      oldPrice: 15.99,
      newPrice: 8.99,
      rating: 4,
      image: "https://i.ibb.co.com/TxjTJ5Zj/p-img-3.webp", // Replace with your actual image path
      buttonText: "Add To Cart",
    },
    {
      id: 4,
      name: "Beef Steak",
      oldPrice: 20.99,
      newPrice: 12.99,
      rating: 5,
      image: "https://i.ibb.co.com/gFcdCHMg/p-img-4.webp", // Replace with your actual image path
      buttonText: "Add To Cart",
    },
  ];
  return (
    <div>
      <div
        className="min-h-[600px] py-[50px]"
        style={{
          backgroundImage: `url(${categoryBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <SectionContainer>
          <SectionTitle title="Drinks Juice"></SectionTitle>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-[26px]">
            {products.map((product) => (
              <ProductCard key={product.id} product={product}></ProductCard>
            ))}
          </div>
        </SectionContainer>
      </div>
    </div>
  );
};

export default DriankJucies;
