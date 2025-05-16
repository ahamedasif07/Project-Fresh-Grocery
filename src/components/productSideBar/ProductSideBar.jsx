import DualRangeSlider from "../DuleRangSlider/DuleRangeSlider";
import PrimaryButton from "../PrymaryButton/PrimaryButton";
import sidebarImage from "../../../public/assets/grocery-bg-2.webp";

const ProductSideBar = () => {
  const categories = [
    "Vegetable",
    "Fruits",
    "Juice",
    "Meat",
    "Smoothie",
    "Bread",
    "Sea Foods",
    "Pet Foods",
    "Milk & Drinks",
    "Drinks",
    "Protein",
  ];

  const brands = [
    "Refined Threads",
    "Ethereal Chic",
    "Yellow",
    "Ecstasy",
    "Urban Hive",
    "Velvet Vista",
    "Boldly Blue",
    "Minted Mode",
    "Eclectic Ensemble",
    "BraveAlchemy Attire",
    "Cascade Couture",
  ];

  const weights = ["500gm", "1kg", "2kg", "5kg", "10kg"];

  return (
    <div className="w-65 mx-auto max-w-7xl px-0 pb-[40px]">
      <div className="w-full p-4  bg-white shadow rounded space-y-6 text-sm">
        {/* Categories */}
        <div>
          <h2 className="font-semibold text-[18px] mb-2">Product Categories</h2>
          <div className="space-y-2">
            {categories.map((cat, idx) => (
              <label key={idx} className="flex items-center space-x-2 ">
                <input type="checkbox" className="accent-green-600 my-[15px]" />
                <span>{cat}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Price Range */}
        <DualRangeSlider />

        {/* Brands */}
        <div className="pt-[20px]">
          <h2 className="font-semibold text-[18px] mb-2">Brands</h2>
          <div className="space-y-2">
            {brands.map((brand, idx) => (
              <label key={idx} className="flex items-center  space-x-2">
                <input
                  type="checkbox"
                  className="accent-green-500  my-[15px]"
                />
                <span>{brand}</span>
              </label>
            ))}
          </div>
        </div>
        {/* weights */}
        <div className="pt-[20px]">
          <h2 className="font-semibold text-[18px] mb-2">Weights</h2>
          <div className="space-y-2">
            {weights.map((weight, idx) => (
              <label key={idx} className="flex items-center  space-x-2">
                <input
                  type="checkbox"
                  className="accent-green-500  my-[15px]"
                />
                <span>{weight}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
      {/* side bar image */}
      <div
        data-aos="fade-up"
        className="mt-[20px] rounded-sm p-4 bg-center bg-cover h-[250px] w-65 "
        style={{ backgroundImage: `url(${sidebarImage})` }}
      >
        <div className="p-5">
          <p className="text-[14px] text-white  uppercase ">TRENDY</p>
          <h3 className="text-[20px] text-white font-bold py-5">
            Best wireless Shoes
          </h3>
          <div className="mt-[10px]">
            <PrimaryButton
              text="Shop Now"
              colour="#34A853"
              hoverColour="#0A0A0A"
            ></PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSideBar;
