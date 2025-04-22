import React from "react";
import flashSale from "../../../public/assets/flash_sale.webp";
import SectionContainer from "../SectionContainer/SectionContainer";

const FlashSale = () => {
  return (
    <div className="py-[70px]">
      <SectionContainer>
        <div
          className="w-full h-[500px] bg-cover bg-center"
          style={{
            backgroundImage: `url(${flashSale})`,
          }}
        ></div>
      </SectionContainer>
    </div>
  );
};

export default FlashSale;
