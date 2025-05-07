import React from "react";

const PopularProductCard = ({ product }) => {
  const { name, originalPrice, discountedPrice, image } = product;
  return (
    <div>
      <div className="py-2 px-6 shadow-lg rounded-md flex items-center gap-[20px]">
        <img
          className="flex justify-start hover:scale-105 transition-all duration-300 ease-in-out border-[1px] border-gray-200"
          src={image}
          alt=""
        />
        <div>
          <h2 className="text-[22px] font-bold">{name}</h2>
          <div className="flex gap-5 items-center">
            <h3 className="text-[20px] font-semibold line-through">
              ${originalPrice}
            </h3>
            <h3 className="text-[20px] font-semibold text-red-600">
              ${discountedPrice}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularProductCard;
