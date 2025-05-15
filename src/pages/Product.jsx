import React from "react";

import ProductSideBar from "../components/productSideBar/ProductSideBar";
import SectionContainer from "../components/SectionContainer/SectionContainer";

const Product = () => {
  return (
    <div>
      <h2 className="text-7xl font bold">product page </h2>
      <SectionContainer>
        <ProductSideBar />
      </SectionContainer>
    </div>
  );
};

export default Product;
