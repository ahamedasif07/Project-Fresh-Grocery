import React, { useState } from "react";
import { FaHeadset, FaShoppingCart, FaTruck } from "react-icons/fa";

const DashboardPage = () => {
  const [activeTab, setActiveTab] = useState("Dashboard");

  const menuItems = [
    "Dashboard",
    "Personal Info",
    "Payment Method",
    "Order",
    "Wishlist",
    "Address",
    "Reviews",
    "Change Password",
    "Support Ticket",
    "Logout",
  ];

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r p-6">
        <h2 className="text-xl font-semibold mb-4">My Account</h2>
        <ul className="space-y-2 text-gray-600">
          {menuItems.map((item, idx) => (
            <li
              key={idx}
              onClick={() => setActiveTab(item)}
              className={`cursor-pointer block px-3 py-2 rounded hover:bg-gray-100 hover:text-black transition-all duration-300 ${
                activeTab === item
                  ? "text-green-600 font-semibold bg-gray-100"
                  : ""
              }`}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Content */}
      <div className="flex-1 p-6 bg-gray-50">
        <h1 className="text-2xl font-bold mb-4">{activeTab}</h1>
        <div className="bg-white p-6 rounded shadow">
          {/* Simple conditional rendering */}
          {activeTab === "Dashboard" && (
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

              <h1 className="text-2xl font-bold mb-6">
                Welcome to your Profile
              </h1>

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
                  <h3 className="text-lg font-bold mb-4">
                    Personal Information
                  </h3>
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
          )}

          {activeTab === "Personal Info" && (
            <p>Update your personal details here.</p>
          )}
          {activeTab === "Payment Method" && (
            <p>Manage your credit cards or payment options.</p>
          )}
          {activeTab === "Order" && (
            <p>See your past and current orders here.</p>
          )}
          {activeTab === "Wishlist" && (
            <p>Items you’ve added to your wishlist will appear here.</p>
          )}
          {activeTab === "Address" && (
            <p>Add or edit your shipping addresses.</p>
          )}
          {activeTab === "Reviews" && <p>See your submitted reviews here.</p>}
          {activeTab === "Change Password" && (
            <p>Change your account password here.</p>
          )}
          {activeTab === "Support Ticket" && (
            <p>Submit or review support tickets here.</p>
          )}
          {activeTab === "Logout" && (
            <p>You have been logged out (just a placeholder).</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
