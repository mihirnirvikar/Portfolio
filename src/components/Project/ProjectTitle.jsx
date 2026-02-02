import { Layers, ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";

export const ProjectTitle = ({
  projectName,
  description,
  techStack,
  externalLink,
  github,
}) => {
  return (
    <>
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
        <div className="mt-4 flex gap-6 items-center ">
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
            <Github className="size-4" />
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#D4D4D8] dark:border-[#52525C] px-1 py-0.5 text-sm rounded-lg flex items-center justify-center hover:bg-[#E4E4E7] dark:hover:bg-[#27272A]"
            >
              Code
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
