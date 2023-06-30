"use client";
import { Image } from "@chakra-ui/react";
import React from "react";

const Profile = () => {
  return (
    <div className="flex flex-col items-center ">
      <div>
        <Image
          className="w-28 h-28 rounded-full object-cover "
          src="/me.jpg"
          alt="me"
        />
      </div>
      <div className="mt-5 font-bold text-lg">Tarık Değirmenci</div>
      <div className="mt-2 text-sm font-medium text-[#FEAF00] ">Admin</div>
    </div>
  );
};

export default Profile;
