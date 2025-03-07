import React from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import logoImage from "../../../public/assets/logo.webp";
import SectionContainer from "../SectionContainer/SectionContainer";
import { HiOutlineShoppingBag } from "react-icons/hi2";

const MiniDeviceNav = () => {
  return (
    <div>
      <SectionContainer>
        <div className="flex justify-between place-items-center  py-2 ">
          <h2>
            <HiMenuAlt2 />
          </h2>
          <img src={logoImage}></img>
          <h4 className="text-[22px] relative text-gray-800 ">
            <HiOutlineShoppingBag />
            <p className="bg-green-600 absolute bottom-[13px] left-[12px] inline-block text-[10px] text-white rounded-full px-[4px] ">
              0
            </p>
          </h4>
        </div>
      </SectionContainer>
    </div>
  );
};

export default MiniDeviceNav;
