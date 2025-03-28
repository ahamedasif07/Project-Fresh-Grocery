import React, { useState } from "react";
import SectionContainer from "../SectionContainer/SectionContainer";
import { FaAngleRight, FaBars } from "react-icons/fa";

const BottomNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const categories = [
    { name: "Vegetable", icon: "🥦" },
    { name: "Fruits", icon: "🍎" },
    { name: "Juice", icon: "🧃" },
    { name: "Meat", icon: "🥩" },
    { name: "Smoothie", icon: "🍹" },
    { name: "Bread", icon: "🍞" },
    { name: "Sea Food", icon: "🐟" },
    { name: "Pet Food", icon: "🐶" },
    { name: "Milk & Drinks", icon: "🥛" },
    { name: "Protein", icon: "💪" },
  ];

  return (
    <div>
      <div className="bg-[#34A853] py-3 mt-4">
        <SectionContainer>
          <div className="flex place-items-center justify-between">
            <div className="flex place-items-center gap-[55px]">
              {/* drop dowen start */}
              <div className="relative w-64">
                {/* Dropdown Button */}
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="flex items-center justify-between w-full px-4 py-[16px] bg-white rounded-t-md"
                >
                  <div className="flex items-center gap-2">
                    <FaBars />
                    <span>All Categories</span>
                  </div>
                  <FaAngleRight
                    className={`transition-transform duration-300 ${
                      isOpen ? "rotate-90" : ""
                    }`}
                  />
                </button>

                {/* Dropdown Menu */}
                <div
                  className={`absolute z-[1000] left-0 w-full bg-white shadow-md overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen
                      ? "max-h-[500px] opacity-100 py-2"
                      : "max-h-0 opacity-0 py-0"
                  }`}
                >
                  {categories.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between px-4 py-2 hover:bg-gray-100 cursor-pointer transition-all duration-300"
                    >
                      <span className="flex items-center gap-2 ">
                        <span className="text-lg">{item.icon}</span>
                        {item.name}
                      </span>
                      <FaAngleRight />
                    </div>
                  ))}
                </div>
              </div>
              {/* drop dowen end */}

              {/* munu item start */}
              <div className="px-2">
                <ul className="flex justify-center space-x-6 text-white font-semibold">
                  {[
                    "Home",
                    "Shop +",
                    "Pages +",
                    "About",
                    "Blog",
                    "User Dashboard",
                    "Contact",
                  ].map((item, index) => (
                    <li key={index} className="cursor-pointer ">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              {/* munu item end */}
            </div>
            {/* button start */}
            <div>
              <button className="relative overflow-hidden px-[20px] py-[13px] font-semibold text-white bg-[#FFBB38] border-transparent rounded-md group">
                <span className="absolute inset-0 w-0 h-full  group-hover:bg-black group-hover:w-full transition-all duration-500 ease-out"></span>
                <span className="relative text-black group-hover:text-white">
                  Seller Login
                </span>
              </button>
            </div>
            {/* button end */}
          </div>
        </SectionContainer>
      </div>
    </div>
  );
};

export default BottomNav;
