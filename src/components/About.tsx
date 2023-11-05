import React from "react";
import { images } from "../utils/constants";
export const About = () => {
  return (
    <div className="mt-16 sm:mt-32">
      <div>
        <h1 className="text-2xl sm:text-4xl">About Me</h1>
        <p className="text-base sm-text-lg mt-8 text-gray-400">
          With a passion for innovation and a relentless drive for excellence, I
          am a seasoned Mobile App Developer specializing in React Native. With
          over 3.2 years of full-time and 1.5 years of part-time experience, I
          have honed my skills in creating seamless, user-friendly applications
          that push the boundaries of what is possible in the realm of mobile
          technology.
          <br /> My expertise lies in leveraging React and React Native to
          develop intuitive and responsive mobile applications that cater to
          diverse user needs. Through a deep understanding of frontend
          technologies, I bring a holistic approach to my development process,
          ensuring that each project I undertake is not just functional, but
          also aesthetically appealing and engaging.
          <br /> Driven by a commitment to staying at the forefront of
          technological advancements, I continuously strive to expand my
          knowledge and refine my skills, keeping up with the dynamic landscape
          of mobile app development. With a keen eye for detail and a focus on
          delivering results that exceed expectations, I am dedicated to
          creating cutting-edge solutions that leave a lasting impact.
        </p>
      </div>
      <div>
        <h1 className="text-2xl sm:text-4xl mt-12">Work Experience</h1>
        <WorkExperienceItem
          jobTitle={"SDE - 2 (React Native)"}
          companyName={"MPL"}
          location={"Bengaluru , India"}
          tenure={"Jul 2023 - Present"}
          jobType={"Full Time"}
        />
        <WorkExperienceItem
          jobTitle={"SDE - 1 (React Native)"}
          companyName={"MPL"}
          location={"Bengaluru , India"}
          tenure={"Jan 2022 - Jul 2023"}
          jobType={"Full Time"}
        />
        <WorkExperienceItem
          jobTitle={"Software Engineer"}
          companyName={"Pakkaprofile"}
          location={"Remote"}
          tenure={"Sep 2020 - Jan 2022"}
          jobType={"Full Time"}
        />
        <WorkExperienceItem
          jobTitle={"Mobile Application Developer"}
          companyName={"Xygen Pvt Ltd"}
          location={"Remote"}
          tenure={"Apr 2019 - Aug 2020"}
          jobType={"Part Time"}
        />
      </div>
      <div>
        <h1 className="text-4xl mt-12">Education</h1>
        <WorkExperienceItem
          jobTitle={"Bachelor Of Engineering"}
          companyName={"Mumbai University"}
          location={"Mumbai"}
          tenure={"Jul 2017 - Jul 2021"}
          jobType={"Full Time"}
        />
      </div>
    </div>
  );
};

const WorkExperienceItem = ({
  jobTitle = "",
  companyName = "",
  tenure = "",
  location = "",
  jobType = "",
}) => {
  return (
    <div>
      <div className="flex justify-between items-center mt-2 sm:mt-4">
        <h1 className="text-base sm:text-2xl text-gray-200">{jobTitle}</h1>
        <h1 className="text-xs sm:text-lg text-black   bg-green-400 rounded-lg px-2 py-1 sm:px-4 sm:py-2">
          {jobType}
        </h1>
      </div>
      <div className="flex justify-between items-center mt-4">
        <div className="flex">
          <div className="flex items-center">
            <img src={images.org} className="h-2 w-2 sm:h-3 sm:w-3" />
            <h1 className="text-xs sm:text-lg text-gray-400 ml-1 sm:ml-2">
              {companyName}
            </h1>
          </div>
          <div className="flex items-center ml-1 sm:ml-4">
            <img src={images.location} className="h-2 w-2 sm:h-3 sm:w-3" />
            <h1 className="text-xs sm:text-lg text-gray-400 ml-1 sm:ml-2">
              {location}
            </h1>
          </div>
        </div>
        <div className="flex items-center">
          <img src={images.org} className="h-2 w-2 sm:h-3 sm:w-3" />
          <h1 className="text-xs sm:text-lg text-gray-400 ml-1 sm:ml-2">
            {tenure}
          </h1>
        </div>
      </div>
      <div className="flex-grow border-t border-gray-800 my-4 sm:my-6" />
    </div>
  );
};
