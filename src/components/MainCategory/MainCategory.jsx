import React from "react";
import mainCategoryOne from "../../../public/assets/c-bg-img-1.webp";
import mainCategoryTow from "../../../public/assets/c-bg-img-2.webp";
import mainCategoryThree from "../../../public/assets/c-bg-img-3.webp";
import SectionContainer from "../SectionContainer/SectionContainer";
import mainCategoryItemOne from "../../../public/assets/c-shop-img-1.webp";
import mainCategoryItemTwo from "../../../public/assets/c-img-2.webp";
import mainCategoryItemTheree from "../../../public/assets/c-img-3.webp";

const MainCategory = () => {
  return (
    <div>
      <SectionContainer>
        <div>
          <div className="relative border-2 border-yellow-300">
            <img src={mainCategoryOne}></img>

            <div className="absolute bottom-1">
              <div className="">
                <div>
                  <h4>FRUITS</h4>
                  <h3>Healthy & Goods Fruits</h3>
                </div>
                <img src={mainCategoryItemOne}></img>
              </div>
            </div>
          </div>
          <img src={mainCategoryTow}></img>
          <img src={mainCategoryThree}></img>
        </div>
      </SectionContainer>
    </div>
  );
};

export default MainCategory;
