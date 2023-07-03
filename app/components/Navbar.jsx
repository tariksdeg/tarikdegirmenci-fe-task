"use client";
import React from "react";
import Profile from "./NavBar/Profile";
import NavList from "./NavBar/NavList";
import Cookies from "js-cookie";
const Navbar = () => {
  return (
    <div className="lg:fixed lg:w-[20%]">
      <div className="flex  lg:flex-col lg:items-center lg:justify-start justify-between bg-[#F2EAE1] lg:min-h-screen lg:pt-5">
        <div className="flex items-center justify-center ">
          <div className="text-xl font-bold border-l-[4px] border-[#F8D442] px-2 lg:ml-0 sm:ml-7">
            MANAGE COURSES
          </div>
          {/* <div className="lg:hidden mt-5">
            <Profile />
          </div> */}
        </div>
        <div className=" mt-5 lg:mt-12">
          <Profile />
        </div>
        <div className="flex  lg:mt-32">
          <NavList />
        </div>
        <div
          onClick={() => {
            Cookies.remove("login");
            window.location.reload();
          }}
          className="lg:ml-0 ml-5 lg:mt-28 lg:mr-0 mr-7 flex items-center justify-center cursor-pointer"
        >
          <p className=" text-sm font-medium ">Logout</p>
          <img className="w-4 h-4 ml-5 " src="/logout.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
