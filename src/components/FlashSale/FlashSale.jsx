import React from "react";
import flashSale from "../../../public/assets/flash_sale.webp";
import SectionContainer from "../SectionContainer/SectionContainer";
import PrimaryButton from "../PrymaryButton/PrimaryButton";

const FlashSale = () => {
  return (
    <div className="py-[70px]">
      <SectionContainer>
        <div
          className="w-full h-[500px] bg-cover bg-center"
          style={{
            backgroundImage: `url(${flashSale})`,
          }}
        >
          <div className="  py-10 px-4 md:px-[60px] ">
            <div className="flex  gap-6 mb-8 flex-wrap">
              {["Days", "Hours", "Minutes", "Seconds"].map((label, index) => {
                const colors = [
                  "text-red-500",
                  "text-sky-500",
                  "text-green-500",
                  "text-red-500",
                ];
                return (
                  <div
                    key={label}
                    className="bg-white w-24 h-24 rounded-full flex flex-col justify-center items-center shadow"
                  >
                    <span className={`text-3xl font-bold ${colors[index]}`}>
                      0
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="py-[20px]">
              <h2 className="text-5xl font-extrabold text-gray-900 my-4">
                WOO! Flash Sale
              </h2>
              <p className="text-gray-900 max-w-xl text-[18px] my-[20px]">
                You get into the 2k+ best Products in <br />
                Flash offer with as in shaped sofa for sale.
              </p>
              <div>
                <PrimaryButton
                  text="Shop Now"
                  colour="#34A853"
                  hoverColour="#1D1D1D"
                ></PrimaryButton>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
};

export default FlashSale;
