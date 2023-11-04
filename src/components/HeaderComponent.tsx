import React from "react";
import {
  githubProfile,
  images,
  linkedInProfile,
  navItems,
} from "../utils/constants";
import { Link } from "react-router-dom";
export const Header = () => {
  const openGithubProfile = () => {
    window.open(githubProfile);
  };
  const openLinkedInProfile = () => {
    window.open(linkedInProfile);
  };
  return (
    <div className="justify-between items-center py-5 flex cursor-pointer sticky top-0 z-50 bg-slate-900 ">
      <div className="bg-gradient-to-r from-purple-500 to-green-400 inline-block text-transparent bg-clip-text text-4xl ">
        {navItems.heading}
      </div>
      <div className="flex">
        <Link to={"/"}>
          <div className="text-base mr-16 font-light cursor-pointer">
            {navItems.home}
          </div>
        </Link>
        <Link to={"/about"}>
          <div className="text-base mr-16 font-light cursor-pointer">
            {navItems.about}
          </div>
        </Link>
        <Link to={"/techStack"}>
          <div className="text-base mr-16 font-light cursor-pointer">
            {navItems.techStack}
          </div>
        </Link>
        <Link to={"/contact"}>
          <div className="text-base mr-16 font-light cursor-pointer">
            {navItems.contact}
          </div>
        </Link>

        <img
          className="h-7 w-7 mx-5"
          src={images.githubHeader}
          onClick={openGithubProfile}
        />
        <img
          className="h-7 w-7 mx-5"
          src={images.linkedin}
          onClick={openLinkedInProfile}
        />
      </div>
    </div>
  );
};
