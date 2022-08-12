import React from "react";
import { Link } from "react-router-dom";
import DrowDown from "../components/DrowDown";

const MainNavbar = () => {
  return (
    <div className="flex flex-wrap items-center justify-between w-full h-20 bg-black p-5">
      <div className="logo w-64">
        <Link to="/">
          <img src="/assets/main-logo.png" alt="logo" />
        </Link>
      </div>
      <DrowDown />
    </div>
  );
};

export default MainNavbar;
