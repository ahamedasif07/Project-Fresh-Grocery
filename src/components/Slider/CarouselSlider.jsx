import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import heroImgOne from "../../../public/assets/hero-img-1.webp";
import heroImgTwo from "../../../public/assets/hero-img-2.webp";
import heroImgTheree from "../../../public/assets/hero-img-3.webp";
import PrimaryButton from "../PrymaryButton/PrimaryButton";

const CarouselSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className=" py-10 ">
      <Slider {...settings}>
        {/* Slide 1 */}
        <div className="!flex flex-col-reverse md:flex-row p-6 place-items-center w-full overflow-hidden ">
          <div className="md:w-1/2 mt-[50px] md:mt-0 flex-grow text-center md:text-left">
            <h3 className="text-green-600 text-[30px] font-semibold">
              FRESH GROCERY
            </h3>
            <h2 className=" text-3xl md:text-4xl lg:text-6xl  font-extrabold my-2 leading-[1.5] -tracking-wide">
              There's you can Buy your all of Grocery Products.
            </h2>
            <button className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded">
              Shop Now
            </button>
          </div>
          <div className="md:w-1/2 mx-auto  flex justify-center place-content-center place-items-center">
            <div className="h-[450px]  mx-auto w-[450px]">
              <img src={heroImgOne} alt="Grocery" className=" " />
            </div>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="!flex flex-col-reverse md:flex-row  place-items-center w-full  p-6  overflow-hidden">
          <div className="md:w-1/2 mt-[50px] md:mt-0 text-center md:text-left">
            <h3 className="text-green-600 text-[30px] font-semibold">
              HEALTHY FOODS
            </h3>
            <h2 className=" text-3xl md:text-4xl lg:text-6xl  font-extrabold my-2 leading-[1.5] -tracking-wide">
              We Provide Fresh And Organic Food to Your Door.
            </h2>
            <button className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded">
              Shop Now
            </button>
          </div>
          <div className="md:w-1/2 flex  justify-center place-content-center place-items-center">
            <div className="max-h-[450px] mx-auto max-w-[450px]">
              <img src={heroImgTwo} alt="Grocery" className="w-full h-auto" />
            </div>
          </div>
        </div>
        {/* Slide 3 */}
        <div className="!flex flex-col-reverse md:flex-row  w-full place-items-center  overflow-hidden  p-6">
          <div className="md:w-1/2 mt-[50px]  md:mt-0 text-center md:text-left">
            <h3 className="text-green-600 text-[30px] font-semibold">
              HEALTHY FOODS
            </h3>
            <h2 className=" text-3xl md:text-4xl lg:text-6xl  font-extrabold my-2 leading-[1.5] -tracking-wide">
              You Can Buy All The Grocery Items HassleFree
            </h2>
            <PrimaryButton
              text="Shop Now"
              colour="[#FFBB38]"
              hoverColour="black"
            ></PrimaryButton>
          </div>
          <div className="md:w-1/2  flex justify-center place-content-center place-items-center">
            <div className="max-h-[450px]  overflow-hidden mx-auto max-w-[450px]">
              <img
                src={heroImgTheree}
                alt="Grocery"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default CarouselSlider;
