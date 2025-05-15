import React, { useState } from "react";
import DualRangeSlider from "../DuleRangSlider/DuleRangeSlider";

const ProductSideBar = () => {
  const [price, setPrice] = useState(400);

  const categories = [
    "Vegetable",
    "Fruits",
    "Juice",
    "Meat",
    "Smoothie",
    "Bread",
    "Sea Foods",
    "Pet Foods",
    "Milk & Drinks",
    "Drinks",
    "Protein",
  ];

  const brands = ["Refined Threads", "Ethereal Chic", "Yellow"];

  return (
    <div className="w-65 p-4 bg-white shadow rounded space-y-6 text-sm">
      {/* Categories */}
      <div>
        <h2 className="font-semibold text-[18px] mb-2">Product Categories</h2>
        <div className="space-y-2">
          {categories.map((cat, idx) => (
            <label key={idx} className="flex items-center space-x-2 ">
              <input type="checkbox" className="accent-green-600 my-[23px]" />
              <span>{cat}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <DualRangeSlider />

      {/* Brands */}
      <div>
        <h2 className="font-semibold text-[18px] mb-2">Brands</h2>
        <div className="space-y-2">
          {brands.map((brand, idx) => (
            <label key={idx} className="flex items-center space-x-2">
              <input type="checkbox" className="accent-green-500" />
              <span>{brand}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductSideBar;
