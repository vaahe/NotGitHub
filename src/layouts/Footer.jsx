import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex justify-between p-4 bg-black text-gray-400">
      <div className="w-1/6 flex justify-between">
        <Link to="/terms-of-use" className="hover:text-white transition duration-300 ease-in">Terms of Use</Link>
        <Link to="/privacy-policy" className="hover:text-white transition duration-300 ease-in">Privacy Policy</Link>
      </div>
      <div className="w-1/5  flex justify-between">
        <Link to="/faq" className="hover:text-white transition duration-300 ease-in">FAQ</Link>
        <Link to="/about-us" className="hover:text-white transition duration-300 ease-in">About Us</Link>
        <Link to="/contact-us" className="hover:text-white transition duration-300 ease-in">Contact Us</Link>
      </div>
    </div>
  );
};

export default Footer;
