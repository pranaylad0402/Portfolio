import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  githubProfile,
  images,
  linkedInProfile,
  navItems,
} from "../utils/constants";
export const Header = () => {
  const [path, setPath] = useState("/");
  const [isOpen, setIsOpen] = useState(false);

  let location = useLocation();
  useEffect(() => {
    setPath(location.pathname);
  }, []);

  return (
    <div className="justify-between items-center py-5 md:flex cursor-pointer sticky top-0 z-50 bg-slate-900 ">
      <div className="bg-gradient-to-r from-purple-500 to-green-400 inline-block text-transparent bg-clip-text text-2xl sm:text-4xl ">
        {navItems.heading}
      </div>
      <h1
        className="absolute text-white right-0 text-2xl mt-[-32px] block md:hidden"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        {!isOpen ? "☰" : "X"}
      </h1>
      <div
        className={`md:flex bg-slate-800 md:bg-slate-900 w-screen md:w-auto ml-[-32px] md:ml-auto  px-8 py-2 mt-4 absolute sm:relative  ${
          isOpen ? "top-[50px] sm:top-0" : "top-[-500px] sm:top-0"
        }`}
      >
        <Link
          to={"/"}
          onClick={() => {
            setPath("/");
            setIsOpen(false);
          }}
        >
          <div
            className={
              path !== "/"
                ? "text-base mr-16 font-light cursor-pointer my-2 sm:my-0"
                : "text-base mr-16 font-light cursor-pointer text-purple-400 my-2 sm:my-0"
            }
          >
            {navItems.home}
          </div>
        </Link>
        <Link
          to={"/about"}
          onClick={() => {
            setPath("/about");
            setIsOpen(false);
          }}
        >
          <div
            className={
              path !== "/about"
                ? "text-base mr-16 font-light cursor-pointer my-2 sm:my-0"
                : "text-base mr-16 font-light cursor-pointer text-purple-400 my-2 sm:my-0"
            }
          >
            {navItems.about}
          </div>
        </Link>
        <Link
          to={"/techStack"}
          onClick={() => {
            setPath("/techStack");
            setIsOpen(false);
          }}
        >
          <div
            className={
              path !== "/techStack"
                ? "text-base mr-16 font-light cursor-pointer my-2 sm:my-0"
                : "text-base mr-16 font-light cursor-pointer text-purple-400 my-2 sm:my-0"
            }
          >
            {navItems.techStack}
          </div>
        </Link>
        <Link
          to={"/contact"}
          onClick={() => {
            setPath("/contact");
            setIsOpen(false);
          }}
        >
          <div
            className={
              path !== "/contact"
                ? "text-base mr-16 font-light cursor-pointer my-2 sm:my-0"
                : "text-base mr-16 font-light cursor-pointer text-purple-400 my-2 sm:my-0"
            }
          >
            {navItems.contact}
          </div>
        </Link>
        <div className="hidden md:block">
          <SocialIcons />
        </div>
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
        className="h-4 w-4 mx-2 sm:h-7 sm:w-7 sm:mx-5 "
        src={images.githubHeader}
        onClick={openGithubProfile}
      />
      <img
        className="h-4 w-4 mx-2 sm:h-7 sm:w-7 sm:mx-5"
        src={images.linkedin}
        onClick={openLinkedInProfile}
      />
    </div>
  );
};
