import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const PrimaryButton = ({ text, colour, hoverColour }) => {
  return (
    <div>
      <button
        className={`relative overflow-hidden px-6 py-3 font-semibold bg-${colour} text-white border-transparent rounded-md group`}
      >
        <span
          className={`absolute inset-0 w-0 h-full group-hover:bg-${hoverColour} group-hover:w-full transition-all duration-500 ease-out`}
        ></span>
        <div className="flex gap-2 place-items-center relative z-10">
          <span className="relative">{text}</span>
          <span className="relative z-10 group-hover:text-white transition-colors duration-500">
            <IoIosArrowForward />
          </span>
        </div>
      </button>
    </div>
  );
};

export default PrimaryButton;
