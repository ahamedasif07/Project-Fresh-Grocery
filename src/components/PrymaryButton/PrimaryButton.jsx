import React from "react";

const PrimaryButton = () => {
  return (
    <div>
      <button className="relative overflow-hidden px-6 py-2 font-semibold text-white bg-[#FFBB38] border-transparent rounded-md group">
        <span className="absolute inset-0 w-0 h-full  group-hover:bg-black group-hover:w-full transition-all duration-500 ease-out"></span>
        <span className="relative">Hover Me</span>
      </button>
    </div>
  );
};

export default PrimaryButton;
