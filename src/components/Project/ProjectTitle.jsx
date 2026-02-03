import { Layers, ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";

export const ProjectTitle = ({
  projectName,
  description,
  techStack,
  externalLink,
  github,
  isFilterOpen,
  projectImage,
}) => {
  return (
    <>
      {isFilterOpen === "list" ? (
        <div className="flex flex-col gap-2 dark:text-[#9F9FA9] text-[#404040]">
          {/* Project Name */}
          <div className="flex gap-4  items-center">
            <p className="text-xl font-semibold text-[#39A2FF] hover:underline">
              {projectName}
            </p>
            <div className="border border-[#D4D4D8] dark:border-[#52525C] w-14 px-1 py-0.5 rounded-2xl flex items-center justify-center font-semibold">
              <p className="text-xs text-gray-700 dark:text-gray-400">Public</p>
            </div>
          </div>

          {/* Description */}
          <div className=" leading-5">{description}</div>

          {/* Links */}
          <div className="mt-4 flex gap-8 items-center ">
            <div className="flex gap-2 items-center">
              <Layers className="size-4 text-[#39A2FF]" />
              <p className="text-sm">{techStack}</p>
            </div>

            <div className="flex gap-2 items-center  hover:text-[#39A2FF] text-sm">
              <ExternalLink className="size-4" />
              <a href={externalLink} target="_blank" rel="noreferrer">
                {externalLink}
              </a>
            </div>

            <div className="flex gap-2 items-center justify-center ">
              <Github className="size-5" />
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[#D4D4D8] dark:border-[#52525C] px-2 py-0.5 pb-1 text-sm rounded-lg flex items-center justify-center hover:bg-[#E4E4E7] dark:hover:bg-[#27272A]"
              >
                Code
              </a>
            </div>
          </div>
          <hr className="mt-4 mb-4 border-[#D4D4D8] dark:border-[#52525C]" />
        </div>
      ) : (
        <div className="shrink-0 w-70">
          <div className="w-70 h-92 border border-[#D4D4D8] dark:border-[#52525C] rounded-lg flex flex-col dark:bg-[#18181B] overflow-hidden bg-[#ffffffb1] shadow-sm hover:shadow-md">
            <div className="flex justify-center items-center w-full ">
              <img
                src={projectImage}
                alt="PurpleGPT Image"
                className="hover:scale-110 duration-300"
              />
            </div>

            <div className="px-4 py-4 h-full flex flex-col justify-between">
              {/* Project Name */}
              <div className="flex gap-4  items-center">
                <p className="text-xl font-semibold text-[#39A2FF] hover:underline">
                  {projectName}
                </p>
                <div className="border border-[#D4D4D8] dark:border-[#52525C] w-14 px-1 py-0.5 rounded-2xl flex items-center justify-center font-semibold">
                  <p className="text-xs text-gray-700 dark:text-gray-400">
                    Public
                  </p>
                </div>
              </div>

              {/* Description */}
              <div className=" leading-5 mt-2 text-sm text-[#9F9FA9] flex-1 line-clamp-4">
                {description}
              </div>

              {/* Links */}
              <div className="flex flex-col gap-2 mt-2">
                <div className="flex gap-2 items-center">
                  <Layers className="size-4 text-[#39A2FF]" />
                  <p className="text-xs">{techStack}</p>
                </div>

                <div className="flex gap-2 justify-center mt-1">
                  <div className="flex gap-2 items-center justify-center text-center px-9 py-1.5  text-xs rounded-md hover:bg-[#1041d2e1] bg-[#265cfc] text-white">
                    <ExternalLink className="size-3" />
                    <a
                      href={externalLink}
                      target="_blank"
                      rel="noreferrer"
                      className=""
                    >
                      Link
                    </a>
                  </div>

                  <div className="flex gap-2 items-center justify-center border border-[#D4D4D8] dark:border-[#52525C] px-9 py-1.5  text-xs rounded-md bg-[#e4e4e7a4] dark:bg-[#27272A] hover:bg-[#E4E4E7] dark:hover:bg-[#3f3f46c3]">
                    <Github className="size-3" />
                    <a
                      href={github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className=""
                    >
                      Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
