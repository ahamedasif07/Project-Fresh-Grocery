import FooterTop from "../FooterTop/FooterTop";

const Footer = () => {
  return (
    <div className="relative mt-[330px]">
      <div className="absolute top-[-380px] md:top-[-380px] right-0 w-full">
        <FooterTop />
      </div>
      <footer className="bg-[#111] text-white px-6 pb-[40px] pt-[70px]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 justify-around gap-[45px] border-b border-gray-700 pb-8">
          {/* Logo & Links */}
          <div>
            <div className="flex items-center mb-4">
              <i className="text-green-500 text-3xl mr-2">🛒</i>
              <h1 className="text-2xl font-bold">
                Eco<span className="text-white">Shop</span>
              </h1>
            </div>
            <ul>
              <li className="mb-2 text-gray-400">Track Order</li>
              <li className="mb-2 text-gray-400">Delivery & Returns</li>
              <li className="mb-2 text-gray-400">Warranty</li>
            </ul>
          </div>

          {/* About Us */}
          <div>
            <h2 className="text-lg font-semibold mb-3">About Us</h2>
            <ul>
              <li className="mb-2 text-gray-400">Rave’s Story</li>
              <li className="mb-2 text-gray-400">Work With Us</li>
              <li className="mb-2 text-gray-400">Corporate News</li>
              <li className="mb-2 text-gray-400">Investors</li>
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h2 className="text-lg font-semibold mb-3">Useful Links</h2>
            <ul>
              <li className="mb-2 text-gray-400">Secure Payment</li>
              <li className="mb-2 text-gray-400">Privacy Policy</li>
              <li className="mb-2 text-gray-400">Terms of Use</li>
              <li className="mb-2 text-gray-400">Archived Products</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1 md:col-span-2 lg:col-span-2">
            <h2 className="text-lg font-semibold mb-4">Contact Info</h2>
            <div className="flex items-start mb-3">
              <span className="mr-2">📍</span>
              <div>
                <p className="font-semibold">Address:</p>
                <p>4517 Washington Ave. Manchester, Kentucky 39495</p>
              </div>
            </div>
            <div className="flex items-start mb-3">
              <span className="mr-2">📞</span>
              <div>
                <p className="font-semibold">Phone:</p>
                <p>+880171889547</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="mr-2">✉️</span>
              <div>
                <p className="font-semibold">Email:</p>
                <p>Demo@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        <p className="text-center text-sm text-gray-400 mt-6">
          © 2025 EcoShop. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Footer;
