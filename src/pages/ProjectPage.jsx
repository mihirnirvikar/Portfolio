import { Filter } from "../components/Project/Filter";
import { useState } from "react";
import { ProjectTitle } from "../components/Project/ProjectTitle";
import { Nestinn, PurpleGPT, PurpleGPT1, PortFolio } from "../assets/projectImages";

export const ProjectPage = () => {
  const [isFilterOpen, setIsFilterOpen] = useState("list");
  const [isSelect, setIsSelect] = useState("All");
  const [search, setSearch] = useState("");

  const projects = [
    {
      id: 1,
      projectName: "Nestinn",
      description:
        "NestInn is a MERN-based property listing app that enables users to discover and explore a wide range of rental properties. It stays while allowing owners to manage and showcase their properties.",
      techStack: "Node.js, Express.js, MongoDB, Ejs, BootstrapCSS.",
      externalLink: "https://nestinn-production.up.railway.app/listings",
      github: "https://github.com/mihirnirvikar/nestinn",
      projectImage: Nestinn,
      type: ["fullstack", "frontend", "backend"],
    },
    {
      id: 2,
      projectName: "PurpleGPT",
      description:
        "PurpleGPT is an AI chat web app that delivers real-time intelligent conversations with a customizable themed interface and responsive user experience.",
      techStack: "MERN Stack, TailwindCSS",
      externalLink: "https://purplegpt.netlify.app/",
      github: "https://github.com/mihirnirvikar/PurpleGPT",
      projectImage: PurpleGPT1,
      type: ["fullstack", "frontend", "backend"],
    },
    {
      id: 3,
      projectName: "PortFolio",
      description:
        "Built a GitHub-inspired portfolio website to showcase projects and skills with repository-style layouts, theme toggle, and responsive design.",
      techStack: "React.js, JavaScript",
      externalLink: "https://mihir-portfolio-website-flame.vercel.app/",
      github: "https://github.com/mihirnirvikar/portfolio",
      projectImage: PortFolio,
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
      const query = search.trim().toLowerCase();

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
            {filteredProjects.length === 0 && (
              <div className=" px-2">
                <p className="mb-1 text-[14px] font-semibold dark:text-[#d6d6d6] text-[#52525C]">
                  😔 Oops! No results found
                </p>
              </div>
            )}

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
