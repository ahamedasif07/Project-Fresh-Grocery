import React from "react";
import flashSale from "../../../public/assets/flash_sale.webp";
import SectionContainer from "../SectionContainer/SectionContainer";

const FlashSale = () => {
  return (
    <div className="py-[70px]">
      <SectionContainer>
        <img src={flashSale}></img>
      </SectionContainer>
    </div>
  );
};

export default FlashSale;
