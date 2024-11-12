"use client";

import Live from "@/components/Live";
import React from "react";

const page = () => {
  return (
    <div className="h-[100vh] w-full flex justify-center items-center text-center">
      <h1 className="text-5xl text-white">Liveblocks figma clone</h1>
      <Live />
    </div>
  );
};

export default page;
