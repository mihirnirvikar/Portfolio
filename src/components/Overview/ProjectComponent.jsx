import { Bookmark, Layers } from "lucide-react";
import { PublicBadge } from "../Common/PublicBadge";
import { Link } from "react-router-dom";

export const ProjectComponent = ({ projectName, projectDesc, skills }) => {
  return (
    <>
      <div className="border border-[#D4D4D8] dark:border-[#52525C] xl:w-1/2 lg:w-1/2 md:w-full sm:w-full w-full flex flex-col justify-between rounded-lg px-4 py-2">
        {/* Project Name */}
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Bookmark className="size-4 dark:text-[#E4E4E7] text-[#3F3F46]" />
            <Link
              to="/projects"
              className="ml-1 text-[#39A2FF] font-semibold hover:underline"
            >
              {projectName}
            </Link>
          </div>

          <PublicBadge />
        </div>

        {/* Description */}
        <div className="text-sm mt-2 leading-5 flex-1 min-h-0 max-h-24 overflow-y-auto no-scrollbar scroll-smooth">
          <p>{projectDesc}</p>
        </div>

        {/* Technologies used */}
        <div className="mt-4 flex gap-2 items-center ">
          <Layers className="size-4 text-yellow-500" />
          <p className="text-sm text-gray-400 ">{skills}</p>
        </div>
      </div>
    </>
  );
};
