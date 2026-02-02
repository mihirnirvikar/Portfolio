import { LayoutGrid, List, ChevronDown } from "lucide-react";
import { useState } from "react";

export const Filter = ({ props }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <div className="flex justify-between items-center dark:text-[#E4E4E7] gap-3">
        <div className="min-w-0 max-w-full h-9 flex-1 justify-center items-center">
          <input
            type="text"
            placeholder="Search project"
            className="w-full h-full px-3 border border-[#D4D4D8] dark:border-[#52525C] rounded-md text-[14px] focus:outline-none focus:border-2  focus:border-[#39A2FF] dark:text-gray-200 text-gray-800 "
          />
        </div>
        <div className="h-8 border border-[#D4D4D8] dark:border-[#52525C] dark:bg-[#27272A] rounded-md"></div>
        <div className="flex gap-1">
          <button
            className={`w-9 h-9 border border-[#D4D4D8] dark:border-[#52525C] rounded-md flex justify-center items-center hover:bg-[#E4E4E7] dark:hover:bg-[#27272A] ${props.isFilterOpen === "grid" ? "text-[#39A2FF]" : ""}`}
            onClick={(e) => {
              props.setIsFilterOpen("grid");
              e.stopPropagation();
            }}
          >
            <LayoutGrid className="size-5 stroke-2" />
          </button>
          <button
            className={`w-9 h-9 border border-[#D4D4D8] dark:border-[#52525C] rounded-md flex justify-center items-center hover:bg-[#E4E4E7] dark:hover:bg-[#27272A] ${props.isFilterOpen === "list" ? "text-[#39A2FF]" : ""}`}
            onClick={(e) => {
              props.setIsFilterOpen("list");
              e.stopPropagation();
            }}
          >
            <List className="size-5 stroke-3" />
          </button>

          <button
            className={`w-16 h-9 ml-2 flex items-center justify-center border border-[#D4D4D8] dark:border-[#52525C] rounded-md text-sm hover:bg-[#E4E4E7] dark:hover:bg-[#2e2e31] relative ${isActive ? "dark:bg-[#2e2e31] bg-[#E4E4E7] " : "dark:bg-zinc-900"}`}
            onClick={(e) => {
              setIsActive(!isActive);
              e.stopPropagation();
            }}
          >
            All
            <ChevronDown className="size-4 ml-2 mt-1" />
          </button>

          {isActive && (
            <div
              className={`mt-9 ml-20 absolute z-10 w-26 rounded-lg flex flex-col gap-1  justify-center items-center border border-[#D4D4D8] dark:border-[#52525C] ${isActive ? "dark:bg-zinc-800 bg-white " : ""}`}
            >
              <span className="text-[10px] text-gray-400">
                Select TechStack
              </span>
              <div className="flex flex-col pb-1 justify-center items-center w-full px-1 text-center">
                <p className="hover:bg-gray-200 hover:text-[#39A2FF] dark:hover:bg-zinc-700 w-full rounded py-0.5">
                  All
                </p>
                <p className="hover:bg-gray-200 hover:text-[#39A2FF] dark:hover:bg-zinc-700 w-full rounded py-0.5">
                  Web
                </p>
                <p className="hover:bg-gray-200 hover:text-[#39A2FF] dark:hover:bg-zinc-700 w-full rounded py-0.5">
                  App
                </p>
                <p className="hover:bg-gray-200 dark:hover:bg-zinc-700 hover:text-[#39A2FF] w-full rounded py-0.5">
                  Desktop
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      <hr className="mt-4 mb-4 border-[#D4D4D8] dark:border-[#52525C]" />
    </>
  );
};
