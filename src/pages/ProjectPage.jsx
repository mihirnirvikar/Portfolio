import { Filter } from "../components/Project/Filter";
import { useState } from "react";
import { ProjectTitle } from "../components/Project/ProjectTitle";

export const ProjectPage = () => {
  const [isFilterOpen, setIsFilterOpen] = useState("list");
  const [isSelect, setIsSelect] = useState("All");

  return (
    <>
      <div className="min-w-0 max-w-4xl flex-1 2xl:mr-32 xl:mr-12 lg:mr-8 md:mr-4 sm:mr-2 xl:ml-10 lg:ml-6 md:ml-4 sm:ml-2 transition-ease-in-out duration-300 dark:text-[#E4E4E7] text-[#2a2a2c] ">
        <div className="project-container mt-4 w-full py-3 px-4 rounded-lg mb-10  min-h-0 max-h-screen">
          <Filter
            isFilterOpen={isFilterOpen}
            setIsFilterOpen={setIsFilterOpen}
            isSelect={isSelect}
            setIsSelect={setIsSelect}
          />

          <ProjectTitle
            projectName="Nestinn"
            description="description My name is mihir"
            techStack="Node.js + Express.js + MongoDB + passport.js + Bootstrap"
            externalLink="https://github.com/mihirnirvikar/nestinn"
            github="https://github.com/mihirnirvikar/nestinn"
          />
          <hr className="mt-4 mb-4 border-[#D4D4D8] dark:border-[#52525C]" />

          <ProjectTitle
            projectName="Nestinn"
            description="description My name is mihir"
            techStack="Node.js + Express.js + MongoDB + passport.js + Bootstrap"
          />
          <hr className="mt-4 mb-4 border-[#D4D4D8] dark:border-[#52525C]" />

          <ProjectTitle
            projectName="PurpleGPT"
            description="An AI powered chat application, inspired bt chatGPT and designed by me."
          />
          <hr className="mt-4 mb-4 border-[#D4D4D8] dark:border-[#52525C]" />
        </div>
      </div>
    </>
  );
};
