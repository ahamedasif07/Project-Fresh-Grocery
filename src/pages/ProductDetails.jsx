import React from "react";
import SectionContainer from "../components/SectionContainer/SectionContainer";
import ProductDetailSlider from "../components/ProductDetailsSlider/ProductDetailSlider";

const ProductDetails = () => {
  return (
    <div>
      <SectionContainer>
        <div>
          <h2 className="py-[60px] text-gray-700">
            Home / pages / Product Details
          </h2>
          <div>
            <ProductDetailSlider />
          </div>
        </div>
      </SectionContainer>
    </div>
  );
};

export default ProductDetails;
