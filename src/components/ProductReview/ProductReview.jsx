import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import ProductCard from "../ProductCard/PeoductCard";
import SectionTitle from "../SectionTitle/SectionTitle";
// Make sure this import matches your icon library

const ProductReview = () => {
  const [isActiveTab, setIsActiveTab] = useState("Description");

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

  return (
    <div className="py-[70px]">
      {/* Tabs */}
      <div className="flex gap-8  items-center mb-4 border-b border-gray-200">
        {["Description", "Reviews", "Seller Info"].map((tab) => (
          <button
            key={tab}
            onClick={() => setIsActiveTab(tab)}
            className={`text-[18px] cursor-pointer border-b ${
              isActiveTab === tab
                ? "text-black border-green-600"
                : "text-green-600 border-transparent"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="mt-4">
        {isActiveTab === "Description" && (
          <div className="bg-white p-6">
            <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
            <p className="text-gray-700 mb-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries but also the leap into electronic
              typesetting, remaining essentially unchanged.
            </p>

            <h3 className="text-xl font-semibold mb-3">Features:</h3>
            <ul className="list-disc list-inside text-gray-800 space-y-2">
              <li>Slim body with metal cover</li>
              <li>
                Latest Intel Core i5-1135G7 processor (4 cores / 8 threads)
              </li>
              <li>8GB DDR4 RAM and fast 512GB PCIe SSD</li>
              <li>NVIDIA GeForce MX350 2GB GDDR5 graphics card</li>
              <li>Backlit keyboard, touchpad with gesture support</li>
            </ul>
          </div>
        )}

        {isActiveTab === "Reviews" && (
          <div className="bg-white  ">
            <div className="flex items-start space-x-4">
              <img
                src="https://via.placeholder.com/64"
                alt="User avatar"
                className="w-16 h-16 rounded-full"
              />
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="text-lg font-semibold">Sajjad Hossain</h4>
                    <p className="text-gray-500">London, UK</p>
                  </div>
                  <div className="flex items-center space-x-1 text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        size={16}
                        fill="currentColor"
                        strokeWidth={0}
                      />
                    ))}
                    <span className="ml-1 text-sm text-gray-600">(5.0)</span>
                  </div>
                </div>
                <p className="text-gray-700 mt-3">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s.
                </p>
              </div>
            </div>
          </div>
        )}

        {isActiveTab === "Seller Info" && (
          <div className="bg-white ">
            <p className="text-gray-700">
              This section contains information about the seller including
              contact details, policies, and more.
            </p>
          </div>
        )}
      </div>
      <div className="py-[30px] mt-[20px]">
        <SectionTitle title="Best Sell in this Week"></SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4    gap-4 mt-[26px]">
          {products.map((product) => (
            <ProductCard key={product.id} product={product}></ProductCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductReview;
