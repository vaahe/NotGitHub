import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../Shared/Button";
import InputText from "../Shared/InputText";
import "../style/Authorize.css";

const Authorize = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const simulateID = () => Math.round(Math.random() * 100);
  const handleClick = () => {
    const id = simulateID();
    navigate(`/main/${id}`);
  };
  
  return (
    <div
      className={`${pathname} === ${
        "/auth/signin" ? "signin" : "signup"
      } h-screen`}
    >
      {pathname}
      <div className="flex justify-center items-center h-full">
        <div className="w-[400px] h-[500px] bg-[#141414] rounded-2xl drop-shadow-2xl shadow-authShadow">
          <h2 className="text-white my-10 text-3xl">
            {pathname === "/auth/signin" ? "SIGN IN" : "SIGN UP"}
          </h2>
          <InputText
            placeholder={
              pathname === "/auth/signin" ? "Email / Username" : "Email Address"
            }
            type="text"
          />
          {pathname === "/auth/signup" && <InputText placeholder="Username" />}
          <InputText placeholder="Password" type="password" />
          {pathname === "/auth/signin" ? (
            <div className="flex justify-center m-4 w-64">
              <input type="checkbox" id="remember-me" className="w-[20px] mr-2" />
              <label htmlFor="remember-me" className="text-white">Remember me</label>
            </div>
          ) : (
            <InputText placeholder="Confirm Password" type="password" />
          )}
          <Button handleClick={handleClick} />
        </div>
      </div>
    </div>
  );
};

export default Authorize;
