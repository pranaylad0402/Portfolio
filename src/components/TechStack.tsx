import React from "react";
import { techStacks } from "../utils/constants";
export const TechStack = () => {
  return (
    <div className="mt-36">
      <h1 className="text-5xl">My Tech Stack</h1>
      <h1 className="text-3xl font-light mt-6">
        Technologies I’ve been working with recently
      </h1>
      <div className="flex flex-wrap   items-center ">
        {techStacks.map((item) => {
          return <img src={item} className="h-32 w-32 mx-12 my-12" />;
        })}
      </div>
    </div>
  );
};
