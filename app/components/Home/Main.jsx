import React from "react";
import Navbar from "../Navbar";

const Main = () => {
  return (
    <div className="flex min-h-screen w-full">
      <div className="w-1/3 bg-red-800">
        <Navbar />
      </div>
      <div className="w-2/3 bg-yellow-500">Main</div>
    </div>
  );
};

export default Main;
