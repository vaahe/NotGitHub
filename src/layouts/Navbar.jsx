import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../style/Navbar.css";
import MainNavbar from "./MainNavbar";

const Navbar = () => {
const {pathname} = useLocation()
const auth = pathname.startsWith('/main')

  return (
    <div>
      {auth ? <MainNavbar /> : (
        <div className="flex flex-wrap items-center justify-between w-full h-20 bg-black p-5">
          <div className="logo w-10 h-10">
            <Link to="/">
              <img src="/assets/logo_dog_white.png" alt="logo" />
            </Link>
          </div>
          <div className="text-white flex">
            <Link to="/auth/signin" className="border-r-2 mr-4 pr-4 lnk">
              SIGN IN
            </Link>
            <Link to="auth/signup" className="lnk">
              SIGN UP
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
