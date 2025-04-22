import {
  BsArrowRepeat,
  BsArrowsFullscreen,
  BsArrowsMove,
} from "react-icons/bs";
import { FaStar, FaPlus } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";

const ProductCard = ({ product }) => {
  const { id, name, oldPrice, newPrice, rating, image, buttonText } = product;
  return (
    <div>
      <div className="relative group border-[2px] border-transparent hover:border-[1px] hover:border-green-600 overflow-hidden bg-white w-full  rounded-lg shadow-md p-4 py-[30px] text-center hover:shadow-lg transition-all duration-300">
        <img
          src={image}
          alt={name}
          className="w-full  h-40 hover:scale-110 duration-300 transform ease-out object-contain mb-4"
        />

        {/* Rating */}
        <div className="flex justify-center mb-2">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <FaStar key={i} className="text-yellow-400" />
            ))}
        </div>

        {/* Title */}
        <h2 className="text-lg font-semibold mb-2">{name}</h2>

        {/* Price */}
        <div className="mb-4">
          <span className="text-gray-500 line-through mr-2">${oldPrice}</span>
          <span className="text-red-500 font-bold">${newPrice}</span>
        </div>

        {/* Add to cart button */}
        <button className="flex items-center justify-center gap-2 bg-green-100 text-green-600 font-semibold py-2 w-full rounded-md hover:bg-green-600 transition-all duration-300 ease-in-out hover:text-white ">
          <FaPlus /> {buttonText}
        </button>
        {/* icons  */}
        <div className="absolute top-4 right-4 transform translate-x-10 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
          <div className="flex flex-col gap-3">
            <p className="text-[22px] p-[6px] bg-green-200 hover:bg-green-600 hover:text-white text-gray-800 rounded-sm transition-all duration-300 ease-in-out w-fit">
              <BsArrowsMove />
            </p>
            <p className="text-[22px] p-[6px] bg-green-200 hover:bg-green-600 hover:text-white text-gray-800 rounded-sm transition-all duration-300 ease-in-out w-fit">
              <BsArrowRepeat />
            </p>
            <p className="text-[22px] p-[6px] bg-green-200 hover:bg-green-600 hover:text-white text-gray-800 rounded-sm transition-all duration-300 ease-in-out w-fit">
              <MdFavoriteBorder />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
