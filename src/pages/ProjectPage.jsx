import { Filter } from "../components/Project/Filter";
import { useState } from "react";
import { ProjectTitle } from "../components/Project/ProjectTitle";
import { Nestinn, PurpleGPT, PurpleGPT1 } from "../assets/projectImages";

export const ProjectPage = () => {
  const [isFilterOpen, setIsFilterOpen] = useState("list");
  const [isSelect, setIsSelect] = useState("All");
  const [search, setSearch] = useState("");

  const projects = [
    {
      id: 1,
      projectName: "Nestinn",
      description: "description My name is mihir",
      techStack: "MERN Stack",
      externalLink: "https://nestinn-production.up.railway.app/listings",
      github: "https://github.com/mihirnirvikar/nestinn",
      projectImage: Nestinn,
      type: ["fullstack", "frontend", "backend"],
    },
    {
      id: 2,
      projectName: "PurpleGPT",
      description: "description My name is mihir",
      techStack: "MERN Stack",
      externalLink: "https://purplegpt.netlify.app/",
      github: "https://github.com/mihirnirvikar/PurpleGPT",
      projectImage: PurpleGPT1,
      type: ["fullstack", "frontend", "backend"],
    },
    {
      id: 3,
      projectName: "Nestinn",
      description: "description My name is mihir",
      techStack: "MERN Stack",
      externalLink: "https://github.com/mihirnirvikar/nestinn",
      github: "https://github.com/mihirnirvikar/nestinn",
      projectImage: Nestinn,
      type: ["backend"],
    },

    {
      id: 4,
      projectName: "Nestinn",
      description: "description My name is mihir",
      techStack: "MERN Stack",
      externalLink: "https://github.com/mihirnirvikar/nestinn",
      github: "https://github.com/mihirnirvikar/nestinn",
      projectImage: Nestinn,
      type: ["frontend"],
    },
  ];

  const filteredProjects = projects.filter((item) => {
    if (isSelect !== "All") {
      const selected = isSelect.toLowerCase();

      const hasType = item.type.some((t) => t.toLowerCase() === selected);

      if (!hasType) return false;
    }

    if (search.trim() !== "") {
      const query = search.toLowerCase();

      const matchesSearch =
        item.projectName.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query);

      if (!matchesSearch) return false;
    }

    return true;
  });

  return (
    <>
      <div className="min-w-0 max-w-4xl flex-1 2xl:mr-32 xl:mr-12 lg:mr-8 md:mr-4 sm:mr-4 mr-2 xl:ml-8 lg:ml-4 md:ml-4 sm:ml-4 ml-2 transition-ease-in-out duration-300 dark:text-[#E4E4E7] text-[#2a2a2c]">
        <div className="project-container mt-1 md:mt-4 w-full py-3 rounded-lg mb-10 ">
          <Filter
            isFilterOpen={isFilterOpen}
            setIsFilterOpen={setIsFilterOpen}
            isSelect={isSelect}
            setIsSelect={setIsSelect}
            search={search}
            setSearch={setSearch}
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
