import { Bookmark, Layers } from "lucide-react";

export const ProjectComponent = ({ projectName, projectDesc, skills }) => {
  return (
    <>
      <div className="border border-gray-700 xl:w-1/2 lg:w-1/2 md:w-full sm:w-full w-full flex flex-col justify-between rounded-lg px-4 py-2">
        {/* Project Name */}
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Bookmark className="size-4" />
            <p className="ml-1 text-blue-600 font-semibold">{projectName}</p>
          </div>

          <div className="border border-gray-400 w-14 px-1 py-0.5 rounded-2xl flex items-center justify-center font-semibold">
            <p className="text-xs text-gray-900 dark:text-gray-300">Public</p>
          </div>
        </div>

        {/* Description */}
        <div className="text-sm mt-2 leading-5 flex-1 min-h-0 max-h-40 overflow-y-auto">
          <p>{projectDesc}</p>
        </div>

        {/* Technologies used */}
        <div className="mt-4 flex gap-2 items-center ">
          <Layers className="size-4 text-yellow-500" />
          <p className="text-sm text-gray-600 ">{skills}</p>
        </div>
      </div>
    </>
  );
};
