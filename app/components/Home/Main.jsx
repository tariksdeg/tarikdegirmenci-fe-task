"use client";
import React from "react";

const Main = () => {
  return (
    <div className=" flex flex-col items-center lg:items-start lg:flex-row min-h-screen bg-white w-1/2 lg:w-full pl-14 pr-10 ">
      <div className="bg-[#F0F9FF] lg:w-[24%] w-full sm:w-1/2 h-1/5 rounded-lg lg:mr-10 ">
        <img src="graduation.svg" alt="graduation" className="my-3 mx-4" />
        <p className="text-[#6C6C6C] font-medium text-sm mx-4 ">Students</p>
        <p className="font-bold text-3xl my-3 flex justify-end mr-3 pb-2 ">
          243
        </p>
      </div>
      <div className="bg-[#FEF6FB] lg:w-[24%] sm:w-1/2 h-1/5 rounded-lg mt-5 lg:mt-0 lg:mr-10 ">
        <img src="courses.svg" alt="graduation" className="my-3 mx-4" />
        <p className="text-[#6C6C6C] font-medium text-sm mx-4 ">Course</p>
        <p className="font-bold text-3xl my-3 flex justify-end mr-3 pb-2 ">
          13
        </p>
      </div>
      <div className="bg-[#FEFBEC] lg:w-[24%] w-1/2 h-1/5 rounded-lg mt-5 lg:mt-0  lg:mr-10 ">
        <img src="payments.svg" alt="graduation" className="my-3 mx-4" />
        <p className="text-[#6C6C6C] font-medium text-sm mx-4 ">Payments</p>
        <p className="font-bold text-3xl my-3 flex justify-end mr-3 pb-2 ">
          556,000<span className="text-base flex items-end">₺</span>
        </p>
      </div>
      <div className="bg-gradient-to-r from-[#FEAF00] to-[#F8D442] mt-5 lg:mt-0  lg:w-[24%] w-1/2 h-1/5 rounded-lg ">
        <img src="users.svg" alt="graduation" className="my-3 mx-4" />
        <p className="text-white font-medium text-sm mx-4 ">Users</p>
        <p className="font-bold text-3xl my-3 flex justify-end mr-3 pb-2 ">3</p>
      </div>
    </div>
  );
};

export default Main;
