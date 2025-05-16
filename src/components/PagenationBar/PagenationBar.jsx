import React from "react";

const PaginationBar = () => {
  return (
    <div className="flex justify-between w-full  items-center px-6 py-[30px] bg-white shadow-md rounded-md text-sm">
      <div>Showing 1 – 16 of 66 results</div>
      <div className="flex items-center space-x-2">
        <span className="text-gray-600">Sort by:</span>
        <select className="bg-transparent text-blue-600 font-medium focus:outline-none">
          <option value="juice">Juice</option>
          <option value="price">Price</option>
          <option value="rating">Rating</option>
        </select>
      </div>
    </div>
  );
};

export default PaginationBar;
