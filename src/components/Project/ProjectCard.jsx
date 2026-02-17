import { Layers, ExternalLink, Github } from "lucide-react";
import { PublicBadge } from "../Common/PublicBadge";

export const ProjectCard = ({
  projectName,
  description,
  techStack,
  externalLink,
  github,
  projectImage,
}) => {
  return (
    <>
      <div className="shrink-0 w-70 px-2">
        <div className="w-70 h-92 border border-[#D4D4D8] dark:border-[#52525C] rounded-lg flex flex-col dark:bg-[#18181B] overflow-hidden bg-[#ffffffb1] shadow-sm hover:shadow-md">
          {/* Project Image */}

          <div className="w-70 h-42  rounded overflow-hidden">
            <img
              src={projectImage}
              alt=""
              className="w-full h-full object-cover hover:scale-103 transition-ease-in-out duration-300"
            />
          </div>

          <div className="px-4 py-4 h-50 flex flex-col justify-between w-full ">
            {/* Project Name */}
            <div className="flex gap-4  items-center">
              <p className="text-xl font-semibold text-[#39A2FF] hover:underline cursor-pointer">
                {projectName}
              </p>
              <PublicBadge />
            </div>

            {/* Description */}
            <div className=" leading-5 mt-1 text-xs dark:text-[#9F9FA9] text-[#404040] flex-1 line-clamp-3 ">
              {description} 
            </div>

            {/* Links */}
            <div className="flex flex-col gap-2 mt-2">
              <div className="flex gap-2 items-center">
                <Layers className="size-4 text-[#39A2FF]" />
                <p className="text-xs">{techStack}</p>
              </div>

              <div className="flex gap-2 justify-center">
                <a
                  className="flex gap-2 items-center justify-center text-center px-9 py-1.5  text-xs rounded-md hover:bg-[#1041d2e1] bg-[#265cfc] text-white"
                  href={externalLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  <ExternalLink className="size-3" />
                  Link
                </a>

                <a
                  className="flex gap-2 items-center justify-center border border-[#D4D4D8] dark:border-[#52525C] px-9 py-1.5  text-xs rounded-md bg-[#e4e4e7a4] dark:bg-[#27272A] hover:bg-[#E4E4E7] dark:hover:bg-[#3f3f46c3]"
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="size-3" />
                  Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
