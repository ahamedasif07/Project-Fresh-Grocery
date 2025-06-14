import React from "react";
import { FaShoppingCart, FaTruck, FaHeadset } from "react-icons/fa";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="py-[50px]">
      <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row ">
        {/* Sidebar */}
        <div className="w-64 bg-white border-r p-6 space-y-6">
          <h2 className="text-xl font-semibold">Change Password</h2>
          <ul className="space-y-2 text-gray-600">
            {[
              { name: "Dashboard", path: "/dashboard" },
              { name: "Personal Info", path: "/personal-info" },
              { name: "Payment Method", path: "/payment-method" },
              { name: "Order", path: "/order" },
              { name: "Wishlist", path: "/wishlist" },
              { name: "Address", path: "/address" },
              { name: "Reviews", path: "/reviews" },
              { name: "Change Password", path: "/change-password" },
              { name: "Support Ticket", path: "/support-ticket" },
              { name: "Logout", path: "/logout" },
            ].map((item, idx) => (
              <li key={idx}>
                <Link
                  to={item.path}
                  className={`block px-3 py-2 rounded hover:bg-gray-100 hover:text-black transition-all duration-300 ${
                    item.name === "Dashboard"
                      ? "text-green-600 font-semibold bg-gray-100"
                      : ""
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg">
              Hello, <strong>Sajjad</strong>
            </h3>
            <label className="flex items-center gap-2">
              <span>Switch Dashboard</span>
              <input type="checkbox" className="toggle" />
            </label>
          </div>

          <h1 className="text-2xl font-bold mb-6">Welcome to your Profile</h1>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-black text-white p-6 rounded shadow">
              <div className="flex items-center gap-4 mb-4">
                <FaShoppingCart className="text-yellow-400 text-3xl" />
                <span className="text-lg">New Orders</span>
              </div>
              <p className="text-3xl font-bold">656</p>
            </div>

            <div className="bg-black text-white p-6 rounded shadow">
              <div className="flex items-center gap-4 mb-4">
                <FaTruck className="text-yellow-400 text-3xl" />
                <span className="text-lg">Delivery Completed</span>
              </div>
              <p className="text-3xl font-bold">99783</p>
            </div>

            <div className="bg-black text-white p-6 rounded shadow">
              <div className="flex items-center gap-4 mb-4">
                <FaHeadset className="text-yellow-400 text-3xl" />
                <span className="text-lg">Support Tickets</span>
              </div>
              <p className="text-3xl font-bold">09</p>
            </div>
          </div>

          {/* Info Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-6 rounded shadow">
            {/* Personal Info */}
            <div>
              <h3 className="text-lg font-bold mb-4">Personal Information</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <strong>Name:</strong> Sajjad
                </li>
                <li>
                  <strong>Email:</strong> demoemail@gmail.com
                </li>
                <li>
                  <strong>Phone:</strong> 023 434 54354
                </li>
                <li>
                  <strong>City:</strong> Haydarabad, Rord 34
                </li>
                <li>
                  <strong>Zip:</strong> 3454
                </li>
              </ul>
            </div>

            {/* Shop Info */}
            <div>
              <h3 className="text-lg font-bold mb-4">Shop Information</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <strong>Name:</strong> EcoShop Super-Shop
                </li>
                <li>
                  <strong>Email:</strong> demoemail@gmail.com
                </li>
                <li>
                  <strong>Phone:</strong> 023 434 54354
                </li>
                <li>
                  <strong>City:</strong> Haydarabad, Rord 34
                </li>
                <li>
                  <strong>Zip:</strong> 3454
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
