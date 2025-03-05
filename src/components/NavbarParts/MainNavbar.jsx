import React, { useState } from "react";

import { BsTelephonePlus } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import navlogo from "../../../public/assets/logo.webp";
import { BsArrowRepeat } from "react-icons/bs";
import { MdFavoriteBorder } from "react-icons/md";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { FaRegUser } from "react-icons/fa6";
import SectionContainer from "../SectionContainer/SectionContainer";

const MainNav = () => {
  const [category, setCategory] = useState("All Categories");
  return (
    <div>
      {/* middel nav section start */}
      <SectionContainer>
        <div className="flex justify-between place-items-center">
          <img src={navlogo} alt="navlogo" />
          <div className="flex items-center border border-gray-300 rounded-md overflow-hidden w-full max-w-md">
            <input
              type="text"
              placeholder="Search Product..."
              className="py-2 px-3 w-full outline-none"
            />

            {/* Select Dropdown */}
            <select
              className="py-2 px-3 bg-white text-gray-600 border-l border-gray-300 cursor-pointer"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option>All Categories</option>
              <option>Vegetable</option>
              <option>Fruits</option>
              <option>Juice</option>
              <option>Meat</option>
            </select>

            <button className="bg-[#34A853] py-[10px] px-3 text-white rounded-r-md">
              Scarch
            </button>
          </div>
          {/* icons start */}
          <div className="flex gap-4 place-items-center">
            <h4 className="text-[22px] relative text-gray-800 ">
              <BsArrowRepeat />
              <p className="bg-green-600 absolute bottom-[13px] left-[12px] inline-block text-[10px] text-white rounded-full px-[4px] ">
                0
              </p>
            </h4>
            <h4 className="text-[22px] relative text-gray-800 ">
              <MdFavoriteBorder />
              <p className="bg-green-600 absolute bottom-[13px] left-[12px] inline-block text-[10px] text-white rounded-full px-[4px] ">
                0
              </p>
            </h4>
            <h4 className="text-[22px] relative text-gray-800 ">
              <HiOutlineShoppingBag />
              <p className="bg-green-600 absolute bottom-[13px] left-[12px] inline-block text-[10px] text-white rounded-full px-[4px] ">
                0
              </p>
            </h4>
            <h4 className="text-[22px] relative text-gray-800 ">
              <FaRegUser />
            </h4>
          </div>
          {/* icons end*/}
        </div>
      </SectionContainer>
      {/* middel nav section end */}
    </div>
  );
};

export default MainNav;
