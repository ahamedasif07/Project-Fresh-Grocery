import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simulate a form submission
    try {
      const response = await fetch("https://formspree.io/f/your-form-id", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setStatus("Failed to send message.");
      }
    } catch (error) {
      setStatus("Something went wrong.");
    }
  };

  return (
    <div className="md:w-1/2 w-full  p-6 shadow-md rounded bg-white mt-10">
      <h2 className="text-2xl font-bold text-center mb-4 relative">
        Have Any Question
        <span className="block w-32 h-1 bg-green-500 absolute bottom-[-5px] left-1/2 transform -translate-x-1/2 rounded-full"></span>
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4 ">
        <div>
          <label className="block mb-1 font-medium">Name*</label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="w-full border border-green-300 p-2 rounded outline-none"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Email*</label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="user@gmail.com"
            className="w-full border border-green-300 p-2 rounded outline-none"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Subject*</label>
          <input
            type="text"
            name="subject"
            required
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            className="w-full border border-green-300 p-2 rounded outline-none"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Message*</label>
          <textarea
            name="message"
            required
            value={formData.message}
            onChange={handleChange}
            placeholder="Write Message.........."
            rows="4"
            className="w-full border border-green-300 p-2 rounded outline-none"
          />
        </div>
        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white w-full py-2 rounded"
        >
          Send Now
        </button>
      </form>

      {status && <p className="text-center mt-4 text-green-600">{status}</p>}
    </div>
  );
};

export default ContactForm;
