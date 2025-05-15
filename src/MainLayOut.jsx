import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "./components/Footer/Footer";

const MainLayOut = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false, easing: "ease-in-out" });
  }, []);

  return (
    <div className="overflow-hidden">
      <Navbar />
      <Outlet /> {/* ✅ must be here to render children like Home or Product */}
      <Footer />
    </div>
  );
};

export default MainLayOut;
