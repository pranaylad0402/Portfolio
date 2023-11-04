import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  githubProfile,
  images,
  linkedInProfile,
  navItems,
} from "../utils/constants";
export const Header = () => {
  const [path, setPath] = useState("/");
  return (
    <div className="justify-between items-center py-5 flex cursor-pointer sticky top-0 z-50 bg-slate-900 ">
      <div className="bg-gradient-to-r from-purple-500 to-green-400 inline-block text-transparent bg-clip-text text-4xl ">
        {navItems.heading}
      </div>
      <div className="flex">
        <Link
          to={"/"}
          onClick={() => {
            setPath("/");
          }}
        >
          <div
            className={
              path !== "/"
                ? "text-base mr-16 font-light cursor-pointer"
                : "text-base mr-16 font-light cursor-pointer text-purple-400"
            }
          >
            {navItems.home}
          </div>
        </Link>
        <Link
          to={"/about"}
          onClick={() => {
            setPath("/about");
          }}
        >
          <div
            className={
              path !== "/about"
                ? "text-base mr-16 font-light cursor-pointer"
                : "text-base mr-16 font-light cursor-pointer text-purple-400"
            }
          >
            {navItems.about}
          </div>
        </Link>
        <Link
          to={"/techStack"}
          onClick={() => {
            setPath("/techStack");
          }}
        >
          <div
            className={
              path !== "/techStack"
                ? "text-base mr-16 font-light cursor-pointer"
                : "text-base mr-16 font-light cursor-pointer text-purple-400"
            }
          >
            {navItems.techStack}
          </div>
        </Link>
        <Link
          to={"/contact"}
          onClick={() => {
            setPath("/contact");
          }}
        >
          <div
            className={
              path !== "/contact"
                ? "text-base mr-16 font-light cursor-pointer"
                : "text-base mr-16 font-light cursor-pointer text-purple-400"
            }
          >
            {navItems.contact}
          </div>
        </Link>
        <SocialIcons />
      </div>
    </div>
  );
};

export const SocialIcons = () => {
  const openGithubProfile = () => {
    window.open(githubProfile);
  };
  const openLinkedInProfile = () => {
    window.open(linkedInProfile);
  };
  return (
    <div className="flex">
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
  );
};
