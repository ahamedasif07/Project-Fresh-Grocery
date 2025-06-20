import React, { useState } from "react";
import { FaEdit, FaHeadset, FaShoppingCart, FaTruck } from "react-icons/fa";
import profileImage from "../../../public/assets/hero-img-2.webp";

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
          {/* dashbord path randaring */}
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
          {/* personal info */}
          {activeTab === "Personal Info" && (
            <div className="min-h-screen bg-white p-4 md:p-10 flex items-start gap-8 justify-between">
              <form className="w-2/3 max-w-3xl space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* First Row */}
                  <div>
                    <label className="block mb-1 font-medium">
                      First Name<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="First Name"
                      className="w-full border border-green-200 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-300"
                      required
                    />
                  </div>
                  <div>
                    <label className="block mb-1 font-medium">
                      Last Name<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="w-full border border-green-200 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-300"
                      required
                    />
                  </div>

                  {/* Second Row */}
                  <div>
                    <label className="block mb-1 font-medium">
                      Email<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="user@gmail.com"
                      className="w-full border border-green-200 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-300"
                      required
                    />
                  </div>
                  <div>
                    <label className="block mb-1 font-medium">
                      Phone<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="+880388**0899"
                      className="w-full border border-green-200 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-300"
                      required
                    />
                  </div>

                  {/* Country */}
                  <div className="md:col-span-2">
                    <label className="block mb-1 font-medium">
                      Country<span className="text-red-500">*</span>
                    </label>
                    <select
                      className="w-full border border-green-200 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-300"
                      required
                    >
                      <option>Choose...</option>
                      <option>Bangladesh</option>
                      <option>UK</option>
                      <option>USA</option>
                    </select>
                  </div>

                  {/* Address */}
                  <div className="md:col-span-2">
                    <label className="block mb-1 font-medium">
                      Address<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your Address"
                      className="w-full border border-green-200 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-300"
                      required
                    />
                  </div>

                  {/* City and Postcode */}
                  <div>
                    <label className="block mb-1 font-medium">
                      Town / City<span className="text-red-500">*</span>
                    </label>
                    <select className="w-full border border-green-200 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-300">
                      <option>London</option>
                      <option>Dhaka</option>
                      <option>New York</option>
                    </select>
                  </div>
                  <div>
                    <label className="block mb-1 font-medium">
                      Postcode / ZIP<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="0000"
                      className="w-full border border-green-200 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-300"
                      required
                    />
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex justify-center items-center gap-6 pt-2">
                  <button
                    type="button"
                    className="text-red-600 font-medium hover:underline"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition-all duration-300"
                  >
                    Update Profile
                  </button>
                </div>
              </form>
              {/* Profile Image with Edit Icon */}
              <div className="relative w-1/3  h-[120px]">
                <div className="flex flex-col  items-center">
                  <p className="text-[18px] font-bold">Update Logo</p>
                  <p className="text-[10px] text-gray-600 py-2">
                    Size300x300. Gifs work too.Max 5mb.
                  </p>
                  <img
                    src={profileImage}
                    alt="profile"
                    className="rounded-full w-[100px] h-[100px] object-cover border-2 border-gray-300"
                  />
                  <div className="absolute -bottom-[26px] right-[90px] bg-green-500 text-white rounded-full p-1 cursor-pointer">
                    <FaEdit size={14} />
                  </div>
                </div>
              </div>
            </div>
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
