import React from "react";

import ProductSideBar from "../components/productSideBar/ProductSideBar";
import SectionContainer from "../components/SectionContainer/SectionContainer";

const Product = () => {
  return (
    <div className="mt-[50px]">
      <SectionContainer>
        <ProductSideBar />
      </SectionContainer>
    </div>
  );
};

export default Product;
