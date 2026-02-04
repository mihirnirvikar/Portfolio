import { LayoutGrid, List, ChevronDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export const Filter = ({
  isFilterOpen,
  setIsFilterOpen,
  isSelect,
  setIsSelect,
}) => {
  const [isActive, setIsActive] = useState(false);
  const dropdownRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsActive(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

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
            className={`w-9 h-9 border border-[#D4D4D8] dark:border-[#52525C] rounded-md flex justify-center items-center hover:bg-[#E4E4E7] dark:hover:bg-[#27272A] ${isFilterOpen === "grid" ? "text-[#39A2FF]" : ""}`}
            onClick={(e) => {
              setIsFilterOpen("grid");
              e.stopPropagation();
            }}
          >
            <LayoutGrid className="size-5 stroke-2" />
          </button>
          <button
            className={`w-9 h-9 border border-[#D4D4D8] dark:border-[#52525C] rounded-md flex justify-center items-center hover:bg-[#E4E4E7] dark:hover:bg-[#27272A] ${isFilterOpen === "list" ? "text-[#39A2FF]" : ""}`}
            onClick={(e) => {
              setIsFilterOpen("list");
              e.stopPropagation();
            }}
          >
            <List className="size-5 stroke-3" />
          </button>

          <div ref={dropdownRef} className="">
            <button
              className={`h-9 ml-2 z-20 px-3 py-1 flex items-center justify-center border border-[#D4D4D8] dark:border-[#52525C] rounded-md text-sm hover:bg-[#E4E4E7] dark:hover:bg-[#2e2e31] ${isActive ? "dark:bg-[#2e2e31] bg-[#E4E4E7] " : "dark:bg-zinc-900 "}`}
              onClick={(e) => {
                setIsActive(!isActive);
                e.stopPropagation();
              }}
            >
              {isSelect}
              <ChevronDown className="size-4 ml-2 mt-1" />
            </button>

            {isActive && (
              <div
                className={`mt-1 ml-2 w-26  absolute rounded-lg flex flex-col gap-1 justify-center items-center border border-[#D4D4D8] dark:border-[#52525C] ${isActive ? "dark:bg-zinc-800 bg-white " : ""}`}
              >
                <span className="text-[10px] text-gray-400">
                  Select TechStack
                </span>
                <div className="flex flex-col pb-1 justify-center items-center w-full px-1 text-center">
                  <p
                    className="hover:bg-gray-200 hover:text-[#39A2FF] dark:hover:bg-zinc-700 w-full rounded py-0.5"
                    onClick={() => {
                      setIsSelect("All");
                      setIsActive(false);
                    }}
                  >
                    All
                  </p>
                  <p
                    className="hover:bg-gray-200 hover:text-[#39A2FF] dark:hover:bg-zinc-700 w-full rounded py-0.5"
                    onClick={() => {
                      setIsSelect("Fullstack");
                      setIsActive(false);
                    }}
                  >
                    Fullstack
                  </p>
                  <p
                    className="hover:bg-gray-200 hover:text-[#39A2FF] dark:hover:bg-zinc-700 w-full rounded py-0.5"
                    onClick={() => {
                      setIsSelect("Backend");
                      setIsActive(false);
                    }}
                  >
                    Backend
                  </p>
                  <p
                    className="hover:bg-gray-200 dark:hover:bg-zinc-700 hover:text-[#39A2FF] w-full rounded py-0.5"
                    onClick={() => {
                      setIsSelect("Frontend");
                      setIsActive(false);
                    }}
                  >
                    Frontend
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <hr className="mt-4 mb-4 border-[#D4D4D8] dark:border-[#52525C]" />
    </>
  );
};
