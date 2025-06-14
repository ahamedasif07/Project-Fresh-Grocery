import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import ContactForm from "../ContactFrom/ContactFrom";

const ContactInfo = () => {
  return (
    <div className="flex md:flex-row flex-col  gap-5 items-start  py-[50px]">
      <div className="max-w-5xl mx-auto px-4 py-10 space-y-8">
        {/* Section Title */}
        <div>
          <h2 className="text-2xl font-bold mb-2">Contact Information</h2>
          <p className="text-gray-600">
            Fill the form below or write us. We will help you as soon as
            possible.
          </p>
        </div>

        {/* Phone & Email Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Phone */}
          <div className="border border-green-500 rounded p-6 text-center hover:bg-green-50 transition">
            <div className="flex justify-center mb-4">
              <FaPhoneAlt className="text-3xl text-green-500" />
            </div>
            <h3 className="text-lg font-semibold mb-1">Phone</h3>
            <p className="text-gray-700">+1347-430-9510</p>
          </div>

          {/* Email */}
          <div className="border border-green-500 rounded p-6 text-center hover:bg-green-50 transition">
            <div className="flex justify-center mb-4">
              <FaEnvelope className="text-3xl text-green-500" />
            </div>
            <h3 className="text-lg font-semibold mb-1">Email</h3>
            <p className="text-gray-700">abdur.rohman2003@gmail.com</p>
          </div>
        </div>

        {/* Address with Map */}
        <div className="bg-green-50 p-6 rounded shadow">
          <div className="flex items-start gap-3 mb-3">
            <FaMapMarkerAlt className="text-2xl text-green-500 mt-1" />
            <div>
              <h3 className="text-lg font-semibold">Address</h3>
              <p className="text-gray-700">
                2140 W Thunderbird Rd, Phoenix, Arkansas 85023, United States
              </p>
            </div>
          </div>

          <iframe
            title="Google Map"
            src="https://www.google.com/maps?q=2140%20W%20Thunderbird%20Rd,%20Phoenix,%20Arkansas%2085023&output=embed"
            className="w-full h-64 border mt-4"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <ContactForm />
    </div>
  );
};

export default ContactInfo;
