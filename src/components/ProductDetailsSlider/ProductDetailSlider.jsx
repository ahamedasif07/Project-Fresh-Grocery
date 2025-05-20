// ImageSlider.jsx
import React, { useState } from "react";
import eggplant from "../../../public/assets/p-img-14.webp";
import fruits from "../../../public/assets/p-img-15.webp";
import Juces from "../../../public/assets/p-img-16.webp";
import {
  FaFacebookF,
  FaHeart,
  FaPinterestP,
  FaStar,
  FaTwitter,
} from "react-icons/fa";
import ReportToast from "../ReportTost/ReportTost";
import ProductReview from "../ProductReview/ProductReview";

const images = [
  { src: eggplant, alt: "Eggplant" },
  { src: fruits, alt: "Fruits" },
  { src: Juces, alt: "Juces" },
];

const ProductDetailSlider = () => {
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [quantity, setQuantity] = useState(1);
  const [weight, setWeight] = useState("");
  const [report, setRepot] = useState(false);

  const increment = () => setQuantity((prev) => prev + 1);
  const decrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleWeightChange = (e) => {
    setWeight(e.target.value);
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 py-[30px]">
        {/* slider part start */}
        <div className="w-full md:w-1/2  p-2 md:p-4">
          {/* Main image container */}
          <div className="relative  border border-gray-200 rounded-sm p-4 bg-white">
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-full object-contain"
            />
            {/* Discount Badge */}
            <div className="absolute top-2 left-2 bg-yellow-400 text-black font-bold rounded-full px-4 py-6 text-sm">
              -50%
            </div>
          </div>

          {/* Thumbnails */}
          <div className="flex justify-start gap-4 mt-4">
            {images.map((img, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(img)}
                className="border border-gray-200 rounded-lg p-1 "
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-[150px] h-[80px] object-contain"
                />
              </button>
            ))}
          </div>
        </div>
        {/* slider part end */}

        {/* product details part start */}
        <div className="w-full md:w-1/2 ">
          <div className="max-w-xl mx-auto p-6 bg-white ">
            {/* Title and Category */}
            <p className="text-sm text-gray-600 uppercase mb-3">Vegetable</p>
            <h2 className="text-2xl font-semibold mb-2">
              Eggplant fruit Leucinodes orbonalis
            </h2>

            {/* Reviews */}
            <div className="flex items-center text-yellow-500 text-sm mb-2">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
              <span className="text-gray-600 ml-2">6 Reviews</span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-3 mb-3">
              <span className="line-through text-gray-500 text-lg">$9.99</span>
              <span className="text-red-600 text-xl font-bold">$6.99</span>
            </div>

            {/* Description */}
            <p className="text-gray-600 mb-4">
              It is a long established fact that a reader will be distracted by
              the readable there content of a page.
            </p>

            {/* Availability */}
            <div className="mb-4">
              <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm">
                Availability: <strong>132 Products Available</strong>
              </span>
            </div>

            {/* Weight Selector */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Weight
              </label>
              <select
                value={weight}
                onChange={handleWeightChange}
                className="w-full border text-gray-500 text-[15px] border-gray-200 rounded px-4 py-2"
              >
                <option value="" className="text-gray-400">
                  Select Weight
                </option>
                <option value="250g">250g</option>
                <option value="500g">500g</option>
                <option value="1kg">1kg</option>
              </select>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center border border-gray-200 rounded overflow-hidden">
                <button onClick={decrement} className="px-3 py-2 text-lg">
                  -
                </button>
                <span className="px-4">
                  {quantity.toString().padStart(2, "0")}
                </span>
                <button onClick={increment} className="px-3 py-2  text-lg">
                  +
                </button>
              </div>
              <button className="p-3 border rounded text-gray-200 hover:text-green-600">
                <FaHeart />
              </button>
              <button className="bg-green-600 group hover:bg-green-700 text-white px-6 py-3 rounded font-medium overflow-hidden relative transition-all duration-300">
                <span className="inline-block transform transition-transform duration-300 group-hover:translate-x-1 mr-3">
                  +
                </span>
                Add to Cart
              </button>
            </div>

            {/* Meta Info */}
            <div className="text-sm text-gray-600 space-y-1 mb-4">
              <p>
                Category: <span className="text-green-600">Kitchen</span>
              </p>
              <p>
                Tags: <span className="text-green-600">Beer, Foamer</span>
              </p>
              <p>
                SKU: <span className="text-green-600">KE-91039</span>
              </p>
            </div>

            {/* Report + Share */}
            <div className="flex items-center justify-between text-sm">
              <button
                onClick={() => setRepot(true)}
                className="text-red-500 font-semibold hover:underline"
              >
                🚩 Report This Item
              </button>
              <div className="flex gap-3 text-gray-600">
                <span>Share This:</span>
                <FaFacebookF className="hover:text-blue-600 cursor-pointer" />
                <FaPinterestP className="hover:text-red-600 cursor-pointer" />
                <FaTwitter className="hover:text-blue-400 cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
        {/* product details part  end*/}
      </div>
      <div>
        <ReportToast report={report} setRepot={setRepot} />
      </div>
      <div>
        <ProductReview />
      </div>
    </div>
  );
};

export default ProductDetailSlider;
