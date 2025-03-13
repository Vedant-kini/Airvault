import React from "react";
import logo from "../assets/logo.png"; // Adjust path if needed

const Navbar = () => {
  return (
    <nav className="w-full flex items-center px-8 py-4 bg-white">

      <img src={logo} alt="AirVault Logo" className="h-8 mr-2" />
      <span className="text-black font-bold text-lg">AIRVAULT</span>
    </nav>
  );
};

export default Navbar;






