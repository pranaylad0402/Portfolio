import React from "react";
import { techStacks } from "../utils/constants";
export const TechStack = () => {
  return (
    <div className="mt-12 sm:mt-36 items-center">
      <h1 className="text-2xl sm:text-5xl">My Tech Stack</h1>
      <h1 className="text-lg sm:text-3xl font-light mt-6 text-gray-400">
        Technologies I’ve been working with recently
      </h1>
      <div className="flex flex-wrap justify-center">
        {techStacks.map((item) => {
          return (
            <img
              src={item}
              className="h-24 w-24 sm:h-32 sm:w-32 mx-2 sm:mx-8 my-12"
            />
          );
        })}
      </div>
    </div>
  );
};
