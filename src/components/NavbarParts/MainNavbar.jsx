import React, { useState } from "react";
import navlogo from "../../../public/assets/logo.webp";
import { BsArrowRepeat } from "react-icons/bs";
import { MdFavoriteBorder } from "react-icons/md";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { FaRegUser } from "react-icons/fa6";
import SectionContainer from "../SectionContainer/SectionContainer";

const MainNav = () => {
  const [category, setCategory] = useState("all");

  return (
    <div className="py-2 mt-[14px] relative z-[10000]">
      {" "}
      {/* Ensures navbar is always on top */}
      <SectionContainer>
        <div className="flex justify-between items-center relative z-[10000]">
          {/* Logo */}
          <img src={navlogo} alt="navlogo" />

          {/* Search Bar and Dropdown */}
          <div className="flex items-center border border-gray-300 rounded-md w-full max-w-md relative overflow-visible z-[10000]">
            <input
              type="text"
              placeholder="Search Product..."
              className="py-2 px-3 w-full outline-none"
            />

            {/* Dropdown Wrapper */}
            <div className="relative w-[450px] ">
              <select
                className="w-full bg-white border-l focus:outline-none focus:ring-0  text-gray-400 py-2 px-3 border-gray-300 cursor-pointer  absolute z-[10010] bottom-[-18px]" // Ensures dropdown stays on top
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option className="text-gray-400" value="all">
                  All Categories
                </option>
                <option className="text-gray-400" value="vegetable">
                  Vegetable
                </option>
                <option className="text-gray-400" value="fruits">
                  Fruits
                </option>
                <option className="text-gray-400" value="juice">
                  Juice
                </option>
                <option className="text-gray-400" value="meat">
                  Meat
                </option>
              </select>
            </div>

            <button className="bg-[#34A853] hover:bg-green-600 py-[10px] px-3 text-white rounded-r-md">
              Search
            </button>
          </div>

          {/* Icons Section */}
          <div className="flex gap-4 items-center">
            <h4 className="text-[22px] relative text-gray-800">
              <BsArrowRepeat />
              <p className="bg-green-600 absolute bottom-[13px] left-[12px] inline-block text-[10px] text-white rounded-full px-[4px]">
                0
              </p>
            </h4>
            <h4 className="text-[22px] relative text-gray-800">
              <MdFavoriteBorder />
              <p className="bg-green-600 absolute bottom-[13px] left-[12px] inline-block text-[10px] text-white rounded-full px-[4px]">
                0
              </p>
            </h4>
            <h4 className="text-[22px] relative text-gray-800">
              <HiOutlineShoppingBag />
              <p className="bg-green-600 absolute bottom-[13px] left-[12px] inline-block text-[10px] text-white rounded-full px-[4px]">
                0
              </p>
            </h4>
            <h4 className="text-[22px] relative text-gray-800">
              <FaRegUser />
            </h4>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
};

export default MainNav;
