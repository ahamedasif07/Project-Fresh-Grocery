import { FaStar, FaPlus } from "react-icons/fa";

const ProductCard = ({ product }) => {
  const { id, name, oldPrice, newPrice, rating, image, buttonText } = product;
  return (
    <div className="bg-white w-full  rounded-lg shadow-md p-4 py-[30px] text-center hover:shadow-lg transition-all duration-300">
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
    </div>
  );
};

export default ProductCard;
