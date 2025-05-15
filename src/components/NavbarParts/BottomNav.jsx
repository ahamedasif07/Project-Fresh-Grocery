import React, { useState } from "react";
import SectionContainer from "../SectionContainer/SectionContainer";
import { FaAngleRight, FaBars } from "react-icons/fa";
import dropdowenImg from "../../../public/assets/empty-wishlist.webp";
import { Link } from "react-router-dom";

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
                  <li className="cursor-pointer">
                    <Link to="/">Home</Link>
                  </li>
                  {/* shop drop dowen stsrt */}
                  <li className="relative group   text-center cursor-pointer transition-all duration-200  border-orange-400 hover:border-[#91d36b]  text-white group">
                    <span>Shop</span>
                    <ul
                      className="absolute -left-35 z-[1000] px-[70px] w-[850px] top-full py-2 rounded-sm mt-[20px]  bg-white text-gray-400 shadow-lg 
                opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-300 flex flex-col items-start "
                    >
                      <div className="flex items-center justify-around w-[850px]">
                        <div>
                          <h2 className="text-black">Dresses</h2>
                          <ul>
                            <li>
                              <Link
                                to="/product"
                                className="block px-4 py-2 text-[15px] font-medium text-gray-500 hover:text-green-600"
                              >
                                Shirt
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/product"
                                className="block px-4 py-2 text-[15px] font-medium text-gray-500 hover:text-green-600"
                              >
                                Skart
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/product"
                                className="block px-4 py-2 text-[15px] font-medium text-gray-500 hover:text-green-600"
                              >
                                T-Shirt
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h2 className="text-black">Bags</h2>
                          <ul>
                            <li>
                              <Link
                                to="/product"
                                className="block px-4 py-2 text-[15px] font-medium text-gray-500 hover:text-green-600"
                              >
                                HandBags
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/product"
                                className="block px-4 py-2 text-[15px] font-medium text-gray-500 hover:text-green-600"
                              >
                                Mobile Bags
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/product"
                                className="block px-4 py-2 text-[15px] font-medium text-gray-500 hover:text-green-600"
                              >
                                School Bags
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h2 className="text-black">Cosmetics</h2>
                          <ul>
                            <li>
                              <Link
                                to="/product"
                                className="block px-4 py-2 text-[15px] font-medium text-gray-500 hover:text-green-600"
                              >
                                Liptics
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/product"
                                className="block px-4 py-2 text-[15px] font-medium text-gray-500 hover:text-green-600"
                              >
                                Foundation
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/product"
                                className="block px-4 py-2 text-[15px] font-medium text-gray-500 hover:text-green-600"
                              >
                                Eye Liner
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="max-h-[300px] max-w-[300px]">
                          <img
                            className="h-full w-full"
                            src={dropdowenImg}
                            alt=""
                          />
                        </div>
                      </div>
                    </ul>
                  </li>
                  {/* shop drop dowen end */}

                  {/* Pages Dropdown start*/}
                  <li className="relative group  text-center cursor-pointer transition-all duration-200  border-orange-400 hover:border-[#91d36b]  text-white group">
                    <span>Pages +</span>
                    <ul
                      className="absolute left-0 z-[1000] top-full py-2 rounded-sm mt-[20px] w-56 bg-white text-gray-400 shadow-lg 
                opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-300 flex flex-col items-start "
                    >
                      <li className="px-4  py-2 text-[15px] font-medium text-gray-500 hover:text-green-600">
                        Product-details
                      </li>
                      <li className="px-4 py-2 text-[15px] font-medium text-gray-500 hover:text-green-600">
                        Privacy Policy
                      </li>
                      <li className="px-4 py-2 text-[15px] font-medium text-gray-500 hover:text-green-600">
                        Terms & Condition
                      </li>
                      <li className="px-4 py-2 text-[15px] font-medium text-gray-500 hover:text-green-600">
                        FAQ
                      </li>
                      <li className="px-4 py-2 text-[15px] font-medium text-gray-500 hover:text-green-600">
                        Shop Category Icon
                      </li>
                      <li className="px-4 py-2 text-[15px] font-medium text-gray-500 hover:text-green-600">
                        Shop List View
                      </li>
                    </ul>
                  </li>
                  {/* Pages Dropdown end*/}

                  <li className="cursor-pointer">About</li>
                  {/* blog drop dowen start  */}
                  <li className="relative group  text-center cursor-pointer transition-all duration-200  border-orange-400 hover:border-[#91d36b]  text-white group">
                    <span>Blog</span>
                    <ul
                      className="absolute left-0 z-[1000] top-full py-2 rounded-sm mt-[20px] w-56 bg-white text-gray-400 shadow-lg 
                opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-300 flex flex-col items-start "
                    >
                      <li className="px-4  py-2 text-[15px] font-medium text-gray-500 hover:text-green-600">
                        Blog Details
                      </li>
                    </ul>
                  </li>
                  {/* blog drop dowen end  */}
                  <li className="cursor-pointer">User Dashboard</li>
                  <li className="cursor-pointer">Contact</li>
                </ul>
              </div>
              {/* munu item end */}
            </div>
            {/* button start */}
            <div>
              <button className="relative overflow-hidden px-[28px] py-[12px] font-semibold text-white bg-[#FFBB38] border-transparent rounded-md group">
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
