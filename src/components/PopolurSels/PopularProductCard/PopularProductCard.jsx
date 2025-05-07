import React from "react";

const PopularProductCard = ({ product }) => {
  const { name, originalPrice, discountedPrice, image } = product;
  return (
    <div>
      <div className="py-2 px-6 shadow-lg rounded-md flex items-center gap-[20px]">
        <img className="flex justify-start" src={image} alt="" />
        <div>
          <h2 className="text-[22px] font-bold">{name}</h2>
          <div className="flex gap-5 items-center">
            <h3 className="text-[20px] font-semibold">{originalPrice}</h3>
            <h3 className="text-[20px] font-semibold">{discountedPrice}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularProductCard;
