import React from "react";
import { navItems } from "../utils/constants";
import { SocialIcons } from "./HeaderComponent";

export const Footer = () => {
  return (
    <div>
      <div className="flex py-12 mt-9 justify-between items-center">
        <h1 className="text-4xl">{navItems.heading}</h1>
        <div className="flex">
          <div className="flex">
            <h1 className="text-base px-8">+91 9769723850</h1>
            <h1 className="text-base px-8">pranayladofficial@gmail.com</h1>
          </div>
          <SocialIcons />
        </div>
      </div>

      <div className="flex-grow border-t border-gray-600" />

      <div className="text-xl text-center m-4">
        Designed and Developed By {" , "}
        <h1 className="bg-gradient-to-r from-sky-400 to-purple-600 inline-block text-transparent bg-clip-text text-xl  py-4">
          Pranay Lad
        </h1>
      </div>
    </div>
  );
};
