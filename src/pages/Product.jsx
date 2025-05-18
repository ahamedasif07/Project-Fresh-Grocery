import React from "react";

import ProductSideBar from "../components/productSideBar/ProductSideBar";
import SectionContainer from "../components/SectionContainer/SectionContainer";
import PaginationBar from "../components/PagenationBar/PagenationBar";
import ProductCard from "../components/ProductCard/PeoductCard";
import godoryBg from "../../public/assets/grocery-bg-2.webp";
import PrimaryButton from "../components/PrymaryButton/PrimaryButton";

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
  {
    id: 5,
    name: "Fresh Red Tomatos",
    oldPrice: 12.99,
    newPrice: 6.99,
    rating: 5,
    image: "https://i.ibb.co.com/jZT6XFy8/p-img-1.webp", // Replace with your actual image path
    buttonText: "Add To Cart",
  },
  {
    id: 6,
    name: "Chicken Eggs",
    oldPrice: 10.99,
    newPrice: 5.99,
    rating: 3,
    image: "https://i.ibb.co.com/qY0LJXMv/p-img-2.webp", // Replace with your actual image path
    buttonText: "Add To Cart",
  },
];

const Product = () => {
  return (
    <div className="py-[50px]">
      <SectionContainer>
        <div className="flex flex-col md:flex-row items-start gap-2 md:gap-22">
          <div className="w-full lg:w-1/4">
            <ProductSideBar />
          </div>
          <div className="w-full lg:w-3/4">
            <PaginationBar />
            <div className="mt-[30px]">
              <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3  gap-4 mt-[26px]">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product}></ProductCard>
                ))}
              </div>

              <div
                className="w-full my-[30px] h-[250px] flex items-center justify-center bg-cover bg-center"
                style={{
                  backgroundImage: `url(${godoryBg})`,
                }}
              >
                <div className="">
                  <h2 className="text-center text-[30px] text-white ">
                    Get the best deal for Grocery Items
                  </h2>
                  <div className="flex flex-col justify-center items-center">
                    <PrimaryButton
                      text="Shop Now"
                      colour="#FFBB38"
                      hoverColour="black"
                    />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 mt-[26px]">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product}></ProductCard>
                ))}
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
};

export default Product;
