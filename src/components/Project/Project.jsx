import { Filter } from "./Filter";
import { useState } from "react";

export const Project = () => {
  const [isFilterOpen, setIsFilterOpen] = useState("list");
  const [isSelect, setIsSelect] = useState("All");
  return (
    <>
      <div className="min-w-0 max-w-4xl flex-1 2xl:mr-32 xl:mr-12 lg:mr-8 md:mr-4 sm:mr-2 xl:ml-10 lg:ml-6 md:ml-4 sm:ml-2 transition-ease-in-out duration-300 dark:text-[#E4E4E7] text-[#2a2a2c]">
        <div className="overview-container mt-4 w-full py-3 px-4 rounded-lg mb-10  min-h-0 h-screen">
          <Filter
            props={{ isFilterOpen, setIsFilterOpen, isSelect, setIsSelect }}
          />
        </div>
      </div>
    </>
  );
};
