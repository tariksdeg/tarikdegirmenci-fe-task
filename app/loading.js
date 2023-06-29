"use client";
import React from "react";
import { Spinner } from "@chakra-ui/react";

const Loading = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75">
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="yellow.500"
        size="xl"
      />
    </div>
  );
};

export default Loading;
