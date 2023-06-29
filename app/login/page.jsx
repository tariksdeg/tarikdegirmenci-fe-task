"use client";
import React from "react";
import cookie from "js-cookie";
const Login = () => {
  const onSubmit = () => {
    cookie.set("login", "login");
  };

  return (
    <div className="bg-gradient-to-r from-[#FEAF00] to-[#F8D442] w-full min-h-screen">
      <div className=" flex flex-col justify-between  container rounded-lg bg-white my-44 w-1/4  py-7 px-5">
        <div className="flex items-center justify-center">
          <div className="text-3xl font-bold border-l-[6px] border-[#F8D442] px-2 leading-10">
            MANAGE COURSES
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center">
          <div className="text-[22px] font-semibold leading-6">SIGN IN</div>
          <div className="text-sm text-[#6C6C6C] mt-2">
            Enter your credentials to access your account
          </div>
        </div>
        <div className="mt-5">
          <form className="flex flex-col" onSubmit={onSubmit}>
            <label
              htmlFor="email"
              className="text-[#6C6C6C] text-sm font-medium mb-1 "
            >
              Email
            </label>
            <input
              type="text"
              className="border border-[#E5E5E5] rounded-md mb-5 text-xs p-3 "
              placeholder="Enter your email"
              name="email"
            />
            <label
              htmlFor="password"
              className="text-[#6C6C6C] text-sm font-medium mb-1 "
            >
              Password
            </label>
            <input
              type="text"
              className="border border-[#E5E5E5] rounded-md mb-5 text-xs p-3"
              placeholder="Enter your password"
              name="password"
            />
            <input
              type="submit"
              value="SIGN IN"
              className="w-full bg-[#FEAF00] text-white py-3 rounded-md hover:bg-[#e79f02] cursor-pointer"
            />
          </form>
        </div>
        <div className="mt-5 flex items-center justify-center">
          <div className="text-[#6C6C6C] text-sm ">Forgot your password?</div>
          <a className="text-[#FEAF00] text-sm  font-medium ml-2 cursor-pointer">
            Reset Password
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
