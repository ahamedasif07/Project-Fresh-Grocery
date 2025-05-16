import React from "react";

import ProductSideBar from "../components/productSideBar/ProductSideBar";
import SectionContainer from "../components/SectionContainer/SectionContainer";
import PaginationBar from "../components/PagenationBar/PagenationBar";

const Product = () => {
  return (
    <div className="mt-[50px]">
      <SectionContainer>
        <div className="flex flex-col md:flex-row items-start gap-2 md:gap-22">
          <div>
            <ProductSideBar />
          </div>
          <div className="w-full">
            <PaginationBar />
          </div>
        </div>
      </SectionContainer>
    </div>
  );
};

export default Product;
