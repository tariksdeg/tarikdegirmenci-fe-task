"use client";
import React from "react";
// import Logo from "./components/custom/Logo";
// import { Image } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const NotFound = () => {
  const router = useRouter();
  return (
    <div className="h-[75vh] w-full flex flex-col items-center justify-center">
      {/* <Logo /> */}
      <div className="flex items-end mt-24">
        <img className="w-[35%]" src="/4.svg" />
        <img className="mb-5 mx-4" src="/0.svg" />
        <img className="w-[35%]" src="/4.svg" />
      </div>
      <p className="text-[#AFADB5] text-3xl mt-6">
        Aradığın Sayfayı Bulamadık...
      </p>
      <a
        href="/"
        className="mt-6 border border-1 border-[#FFB23F] px-14 py-3 text-sm text text-[#FFB23F] rounded-xl hover:bg-[#FFB23F] hover:text-white duration-500"
      >
        Geri Dön
      </a>
    </div>
  );
};

export default NotFound;
