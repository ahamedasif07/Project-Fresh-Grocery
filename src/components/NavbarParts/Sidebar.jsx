/* eslint-disable no-unused-vars */
import { useState } from "react";
import { BsArrowRepeat } from "react-icons/bs";
import { MdFavoriteBorder } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { IoSearch } from "react-icons/io5";

const Sidebar = ({ setMenuOpen }) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isFooterExpanded, setIsFooterExpanded] = useState(false);

  return (
    <div
      className={`absolute top-0 h-full bg-[#FFFFFF] text-black font-sans flex flex-col overflow-hidden transition-all duration-200 ${
        isExpanded ? "w-64" : "w-20"
      }`}
    >
      {/* Header */}
      <div className="relative w-full min-h-20  flex items-center px-4 transition-all duration-200">
        <div className="flex place-items-center gap-4">
          <h4 className="text-[24px] relative text-gray-800 ">
            <BsArrowRepeat />
            <p className="bg-green-600 absolute bottom-[13px] left-[12px] inline-block text-[10px] text-white rounded-full px-[4px] ">
              0
            </p>
          </h4>
          <h4 className="text-[24px] relative text-gray-800 ">
            <MdFavoriteBorder />
            <p className="bg-green-600 absolute bottom-[13px] left-[12px] inline-block text-[10px] text-white rounded-full px-[4px] ">
              0
            </p>
          </h4>
        </div>
        <button
          className="absolute right-4 p-2 bg-[#34A853] text-gray-200 rounded-full"
          onClick={() => setMenuOpen(false)}
        >
          <RxCross2 />
        </button>
      </div>

      {/* Scarch filde start */}
      <div className="px-4 mx-auto flex place-items-center  ">
        <input
          className="outline-0 border-[2px] px-1 border-gray-400 py-[5px]"
          type="scarch"
          placeholder="scarch"
        />
        <button
          className="px-1 rounded-r-md py-2 bg-[#34A853] text-white text-[22px] "
          type="button"
        >
          <IoSearch />
        </button>
      </div>
      {/* Scarch filde end */}

      {/* Nav Items */}
      <nav className="flex-1 overflow-y-scroll px-2 space-y-2 py-4">
        {[
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
        ].map((item, index) => (
          <div
            key={index}
            className="flex items-center space-x-3 p-3 rounded-lg hover:bg-[#2c3e50] transition-all"
          >
            <span className="text-lg">📌</span>
            <span
              className={`transition-opacity font-semibold duration-100 ${
                isExpanded ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            >
              {item}
            </span>
          </div>
        ))}
      </nav>

      {/* Footer */}
      <div
        className={`relative w-full h-14  flex items-center transition-all duration-200 ${
          isFooterExpanded ? "h-24" : "h-14"
        }`}
      >
        <div className="flex items-center px-4">
          <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
          <div
            className={`ml-3 transition-opacity duration-100 ${
              isExpanded ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <p className="text-sm">User Name</p>
            <p className="text-xs text-gray-400">@username</p>
          </div>
        </div>
        <button
          className="absolute right-4 p-2 text-gray-400 hover:text-white transition"
          onClick={() => setIsFooterExpanded(!isFooterExpanded)}
        >
          ⌄
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
