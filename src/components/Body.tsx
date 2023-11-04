import React from "react";
import { images } from "../utils/constants";
export const Body = () => {
  return (
    <div className="flex justify-between my-48 items-center ">
      <div>
        <h1 className="text-7xl py-4">Hi 👋,</h1>
        <h1 className="text-7xl  py-4">My name is </h1>
        <h1 className="bg-gradient-to-r from-sky-400 to-purple-600 inline-block text-transparent bg-clip-text text-7xl  py-4">
          Pranay Lad
        </h1>
        <h1 className="text-7xl  py-4">I build things for web and mobile</h1>
      </div>
      <img src={images.user} className="h-[350px] w-[350px]" />
    </div>
  );
};
