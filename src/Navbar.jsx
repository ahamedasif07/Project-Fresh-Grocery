import React, { useState } from "react";
import SectionContainer from "./components/SectionContainer/SectionContainer";
import { BsTelephonePlus } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import navlogo from "../public/assets/logo.webp";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  const [category, setCategory] = useState("All Categories");
  return (
    <div>
      {/* top navbar start */}
      <div className="bg-[#F3FAF5] py-4 ">
        <SectionContainer>
          <div className="flex  justify-between place-items-center">
            <div className="flex place-items-center gap-7 ">
              <h3 className="md:text-[15px] text-[13px]">Account</h3>
              <h3 className="md:text-[15px] text-[13px]">Track Order</h3>
              <h3 className="md:text-[15px] text-[13px]">Support</h3>
            </div>
            {/* contact section */}
            <div className="md:block hidden">
              <div className="flex place-items-center gap-7">
                <h3 className="flex place-items-center gap-2">
                  <p className="text-[18px] text-green-600">
                    <BsTelephonePlus></BsTelephonePlus>
                  </p>
                  + 00645 4568
                </h3>

                <h3 className="flex place-items-center gap-2">
                  <p className="text-[18px] text-green-600">
                    <MdOutlineEmail />
                  </p>
                  Youremai@gmail.com
                </h3>
              </div>
            </div>
          </div>
        </SectionContainer>
      </div>
      {/* top navbar end */}

      {/* middel nav section start */}
      <SectionContainer>
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
      </SectionContainer>
      {/* middel nav section end */}
    </div>
  );
};

export default Navbar;
