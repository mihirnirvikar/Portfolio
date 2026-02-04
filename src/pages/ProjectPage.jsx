import { Filter } from "../components/Project/Filter";
import { useState } from "react";
import { ProjectTitle } from "../components/Project/ProjectTitle";

export const ProjectPage = () => {
  const [isFilterOpen, setIsFilterOpen] = useState("list");
  const [isSelect, setIsSelect] = useState("All");

  const projects = [
    {
      id: 1,
      projectName: "Nestinn",
      description: "description My name is mihir",
      techStack: "MERN Stack",
      externalLink: "https://nestinn-production.up.railway.app/listings",
      github: "https://github.com/mihirnirvikar/nestinn",
      projectImage: "/project/Nestinn.png",
      type: ["fullstack", "frontend", "backend"],
    },
    {
      id: 2,
      projectName: "PurpleGPT",
      description: "description My name is mihir",
      techStack: "MERN Stack",
      externalLink: "https://purplegpt.netlify.app/",
      github: "https://github.com/mihirnirvikar/PurpleGPT",
      projectImage: "/project/PurpleGPT1.png",
      type: ["fullstack", "frontend", "backend"],
    },
    {
      id: 3,
      projectName: "Nestinn",
      description: "description My name is mihir",
      techStack: "MERN Stack",
      externalLink: "https://github.com/mihirnirvikar/nestinn",
      github: "https://github.com/mihirnirvikar/nestinn",
      projectImage: "/project/Nestinn.png",
      type: ["backend"],
    },

    {
      id: 3,
      projectName: "Nestinn",
      description: "description My name is mihir",
      techStack: "MERN Stack",
      externalLink: "https://github.com/mihirnirvikar/nestinn",
      github: "https://github.com/mihirnirvikar/nestinn",
      projectImage: "/project/Nestinn.png",
      type: ["frontend"],
    },
  ];

  const filteredProjects = projects.filter((item) => {
    
    if (isSelect === "All"){
      return true
    } 

    const selected = isSelect.toLowerCase();

    return item.type.some((t) => t.toLowerCase() === selected);
  });

  console.log(filteredProjects);

  return (
    <>
      <div className="min-w-0 max-w-4xl flex-1 2xl:mr-32 xl:mr-12 lg:mr-8 md:mr-4 sm:mr-2 xl:ml-10 lg:ml-6 md:ml-4 sm:ml-2 transition-ease-in-out duration-300 dark:text-[#E4E4E7] text-[#2a2a2c]">
        <div className="project-container mt-4 w-full py-3 rounded-lg mb-10 ">
          <Filter
            isFilterOpen={isFilterOpen}
            setIsFilterOpen={setIsFilterOpen}
            isSelect={isSelect}
            setIsSelect={setIsSelect}
          />

          <div
            className={`${isFilterOpen === "list" ? "flex flex-col" : "flex flex-wrap gap-6 justify-start"} min-h-0 max-h-full`}
          >
            {filteredProjects.map((item) => {
              return (
                <ProjectTitle
                  projectName={item.projectName}
                  description={item.description}
                  techStack={item.techStack}
                  externalLink={item.externalLink}
                  github={item.github}
                  isFilterOpen={isFilterOpen}
                  isSelect={isSelect}
                  key={item.id}
                  projectImage={item.projectImage}
                />
              );
            })}
          </div>

          {/* <ProjectTitle
            projectName="Nestinn"
            description="description My name is mihir"
            techStack="Node.js + Express.js + MongoDB + passport.js + Bootstrap"
            externalLink="https://github.com/mihirnirvikar/nestinn"
            github="https://github.com/mihirnirvikar/nestinn"
            isFilterOpen={isFilterOpen}
          /> */}
          {/* <hr className="mt-4 mb-4 border-[#D4D4D8] dark:border-[#52525C]" /> */}
        </div>
      </div>
    </>
  );
};
