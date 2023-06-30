"use client";
import React from "react";
import Profile from "./NavBar/Profile";
import NavList from "./NavBar/NavList";
import Cookies from "js-cookie";
const Navbar = () => {
  return (
    <div className="fixed w-[20%]">
      <div className="flex right-0 top-0 left-0 flex-col items-center bg-[#F2EAE1] min-h-screen pt-5">
        <div>
          <div className="text-xl font-bold border-l-[4px] border-[#F8D442] px-2 ">
            MANAGE COURSES
          </div>
        </div>
        <div className="mt-12">
          <Profile />
        </div>
        <div className="mt-32">
          <NavList />
        </div>
        <div
          onClick={() => {
            Cookies.remove("login");
            window.location.reload();
          }}
          className="mt-28 flex items-center justify-center cursor-pointer"
        >
          <p className=" text-sm font-medium ">Logout</p>
          <img className="w-4 h-4 ml-5 " src="/logout.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
