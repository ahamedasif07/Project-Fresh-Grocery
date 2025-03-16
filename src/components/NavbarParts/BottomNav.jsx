import React, { useState } from "react";
import SectionContainer from "../SectionContainer/SectionContainer";
import { FaAngleRight, FaBars } from "react-icons/fa";

const BottomNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const categories = [
    { name: "Vegetable", icon: "⚓" },
    { name: "Fruits", icon: "🎮" },
    { name: "Juice", icon: "📱" },
    { name: "Meat", icon: "🏠" },
    { name: "Smoothie", icon: "🏀" },
    { name: "Bread", icon: "🚴" },
    { name: "Sea Food", icon: "⚓" },
    { name: "Pet Food", icon: "🤖" },
    { name: "Milk & Drinks", icon: "⚫" },
    { name: "Protein", icon: "⚫" },
  ];

  return (
    <div>
      <div className="bg-[#34A853] py-[35px] mt-4">
        <SectionContainer>
          <div>
            <div className="relative w-64">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-between w-full px-4 py-[16px] bg-white rounded-t-md"
              >
                <div className="flex items-center gap-2">
                  <FaBars />
                  <span>All Categories</span>
                </div>
                <FaAngleRight
                  className={`${
                    isOpen ? "rotate-90" : ""
                  } transition-transform`}
                />
              </button>

              {isOpen && (
                <div
                  className={`absolute left-0 w-full  bg-white  shadow-md overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  {categories.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    >
                      <span className="flex items-center gap-2">
                        <span className="text-lg">{item.icon}</span>
                        {item.name}
                      </span>
                      <FaAngleRight />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </SectionContainer>
      </div>
    </div>
  );
};

export default BottomNav;
