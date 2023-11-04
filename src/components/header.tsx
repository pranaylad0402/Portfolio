import React from "react";
import { GITHUB_LOGO, LINKEDIN_LOGO, navItems } from "../utils/constants";
export const Header = () => {
  // Add a header
  return (
    <div className="justify-between items-center py-5 flex">
      <div className="bg-gradient-to-r from-purple-500 to-green-400 inline-block text-transparent bg-clip-text text-4xl cursor-pointer">
        {navItems.heading}
      </div>
      <div className="flex">
        <div className="text-base mr-16 font-light cursor-pointer">
          {navItems.home}
        </div>
        <div className="text-base mr-16 font-light cursor-pointer">
          {navItems.about}
        </div>
        <div className="text-base mr-16 font-light cursor-pointer">
          {navItems.techStack}
        </div>
        <div className="text-base mr-16 font-light cursor-pointer">
          {navItems.contact}
        </div>
        <img className="h-7 w-7 mx-5" src={GITHUB_LOGO} />
        <img className="h-7 w-7 mx-5" src={LINKEDIN_LOGO} />
      </div>
    </div>
  );
};
