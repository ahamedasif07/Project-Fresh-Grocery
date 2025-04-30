import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const MainLayOut = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: false, // Animation runs only once
      easing: "ease-in-out", // Easing style
    });
  }, []);
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainLayOut;
