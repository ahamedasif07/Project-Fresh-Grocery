// ImageSlider.jsx
import React, { useState } from "react";
import eggplant from "../../../public/assets/p-img-14.webp";
import fruits from "../../../public/assets/p-img-15.webp";
import Juces from "../../../public/assets/p-img-16.webp";

const images = [
  { src: eggplant, alt: "Eggplant" },
  { src: fruits, alt: "Fruits" },
  { src: Juces, alt: "Juces" },
];

const ProductDetailSlider = () => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="max-w-[700px] max-h-[700px] p-2 md:p-4">
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
  );
};

export default ProductDetailSlider;
