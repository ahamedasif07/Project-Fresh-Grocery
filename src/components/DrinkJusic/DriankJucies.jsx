import React from "react";
import SectionContainer from "../SectionContainer/SectionContainer";
import categoryBg from "../../../public/assets/category-section-background.webp";
import SectionTitle from "../SectionTitle/SectionTitle";
import ProductCard from "../ProductCard/PeoductCard";
import bestDealImage from "../../../public/assets/best-deal-bg.webp";
import PrimaryButton from "../PrymaryButton/PrimaryButton";

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
  // new araible data
  const newProducts = [
    {
      name: "Fresh Red Tomatos",
      category: "Vegetable",
      oldPrice: 12.0,
      newPrice: 6.99,
      image: "https://i.ibb.co.com/4ZMH5j8V/p-img-15.webp",
      buttonText: "Add To Cart",
    },
    {
      name: "Chicken Eggs",
      category: "Poultry",
      oldPrice: 10.0,
      newPrice: 5.99,
      image: "https://i.ibb.co.com/1tWXP8C4/p-img-16.webp",
      buttonText: "Add To Cart",
    },
    {
      name: "Fresh Watermelon",
      category: "Fruit",
      oldPrice: 15.0,
      newPrice: 8.99,
      image: "https://i.ibb.co.com/b5Jf7DwW/p-img-17.webp",
      buttonText: "Add To Cart",
    },
    {
      name: "Beef Steak",
      category: "Meat",
      oldPrice: 20.0,
      newPrice: 12.99,
      image: "https://i.ibb.co.com/RknK53dC/p-img-18.webp",
      buttonText: "Add To Cart",
    },
    {
      name: "Fresh Red Tomatos",
      category: "Vegetable",
      oldPrice: 12.0,
      newPrice: 6.99,
      image: "https://i.ibb.co.com/rRkR4XW3/p-img-19.webp",
      buttonText: "Add To Cart",
    },
    {
      name: "Chicken Eggs",
      category: "Poultry",
      oldPrice: 10.0,
      newPrice: 5.99,
      image: "https://i.ibb.co.com/BxQgrvF/p-img-20.webp",
      buttonText: "Add To Cart",
    },
    {
      name: "Fresh Watermelon",
      category: "Fruit",
      oldPrice: 15.0,
      newPrice: 8.99,
      image: "https://i.ibb.co.com/nsm1CqmM/p-img-21.webp",
      buttonText: "Add To Cart",
    },
    {
      name: "Beef Steak",
      category: "Meat",
      oldPrice: 20.0,
      newPrice: 12.99,
      image: "https://i.ibb.co.com/nsm1CqmM/p-img-21.webp",
      buttonText: "Add To Cart",
    },
    {
      name: "Fresh Red Tomatos",
      category: "Vegetable",
      oldPrice: 12.0,
      newPrice: 6.99,
      image: "https://i.ibb.co.com/T9gSdX8/p-img-22.webp",
      buttonText: "Add To Cart",
    },
    {
      name: "Chicken Eggs",
      category: "Poultry",
      oldPrice: 10.0,
      newPrice: 5.99,
      image: "https://i.ibb.co.com/d4x0zg9t/p-img-23.webp",
      buttonText: "Add To Cart",
    },
    {
      name: "Fresh Watermelon",
      category: "Fruit",
      oldPrice: 15.0,
      newPrice: 8.99,
      image: "https://i.ibb.co.com/d4x0zg9t/p-img-23.webp",
      buttonText: "Add To Cart",
    },
    {
      name: "Beef Steak",
      category: "Meat",
      oldPrice: 20.0,
      newPrice: 12.99,
      image: "https://i.ibb.co.com/9Hv0NYdx/p-img-24.webp",
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
        {/* best deal section */}
        <div className="pt-[70px]">
          <div
            className="h-[370px] "
            style={{
              backgroundImage: `url(${bestDealImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="p-6  ">
              <h2 className="text-center font-bold text-[50px] mt-[40px]">
                Get the best deal for Grocery
              </h2>
              <p className="text-center text-[18px]">
                You get into the 2k+ best Products in Flash offer with as into
                the find to <br /> makein shaped sofa for sale.
              </p>
              <div className="mt-[10px] flex justify-center">
                <PrimaryButton
                  text="Shop Now"
                  colour="#34A853"
                  hoverColour="#0A0A0A"
                ></PrimaryButton>
              </div>
            </div>
          </div>
        </div>
        {/* new araivle product start */}

        <div className="my-[50px]">
          <SectionContainer>
            <SectionTitle title="New  Arrivals"></SectionTitle>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-[26px]">
              {newProducts.map((product) => (
                <ProductCard key={product.id} product={product}></ProductCard>
              ))}
            </div>
          </SectionContainer>
        </div>
      </div>
    </div>
  );
};

export default DriankJucies;
