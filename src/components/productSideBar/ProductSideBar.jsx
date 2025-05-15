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

  const brands = [
    "Refined Threads",
    "Ethereal Chic",
    "Yellow",
    "Ecstasy",
    "Urban Hive",
    "Velvet Vista",
    "Boldly Blue",
    "Minted Mode",
    "Eclectic Ensemble",
    "BraveAlchemy Attire",
    "Cascade Couture",
  ];

  const weights = ["500gm", "1kg", "2kg", "5kg", "10kg"];

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
      <div className="pt-[20px]">
        <h2 className="font-semibold text-[18px] mb-2">Brands</h2>
        <div className="space-y-2">
          {brands.map((brand, idx) => (
            <label key={idx} className="flex items-center  space-x-2">
              <input type="checkbox" className="accent-green-500  my-[23px]" />
              <span>{brand}</span>
            </label>
          ))}
        </div>
      </div>
      {/* weights */}
      <div className="pt-[20px]">
        <h2 className="font-semibold text-[18px] mb-2">Weights</h2>
        <div className="space-y-2">
          {weights.map((weight, idx) => (
            <label key={idx} className="flex items-center  space-x-2">
              <input type="checkbox" className="accent-green-500  my-[23px]" />
              <span>{weight}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductSideBar;
