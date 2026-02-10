import { PublicBadge } from "../Common/PublicBadge";
import { Layers, ExternalLink, Github } from "lucide-react";

export const ProjectList = ({
  projectName,
  description,
  techStack,
  externalLink,
  github,
  projectImage,
}) => {
  return (
    <>
      <div className="flex flex-col gap-2 dark:text-[#9F9FA9] text-[#404040]">
        {/* Project Name */}
        <div className="flex gap-4  items-center px-2">
          <p className="text-xl font-semibold text-[#39A2FF] hover:underline">
            {projectName}
          </p>
          <PublicBadge />
        </div>

        {/* Description */}
        <div className=" leading-5 px-2 line-clamp-3 text-sm">
          {description} 
        </div>

        {/* Links */}
        <div className="mt-2 flex gap-2 flex-col md:flex-col md:gap-2 sm:flex-row sm:gap-6 lg:flex-row lg:gap-8 transition-ease-in-out duration-200 px-2">
          <div className="flex gap-2 items-center">
            <Layers className="size-4 text-[#39A2FF]" />
            <p className="text-sm">{techStack}</p>
          </div>

          <div className="flex gap-2 items-center  hover:text-[#39A2FF] text-xs">
            <ExternalLink className="size-4" />
            <a href={externalLink} target="_blank" rel="noreferrer">
              {externalLink}
            </a>
          </div>

          <div className="flex gap-2 items-center  ">
            <Github className="size-4" />
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#D4D4D8] dark:border-[#52525C] px-2 py-1 pb-1 text-xs rounded-md flex items-center justify-center hover:bg-[#E4E4E7] dark:hover:bg-[#27272A]"
            >
              Code
            </a>
          </div>
        </div>
        <hr className="mt-2 mb-4 border-[#D4D4D8] dark:border-[#52525C]" />
      </div>
    </>
  );
};
