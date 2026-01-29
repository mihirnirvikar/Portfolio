import React from "react";
import { HeaderInfo } from "./HeaderInfo.jsx";
import { Navbar } from "./Navbar.jsx";
import { useState } from "react";

export const Header = () => {
  const [isFixed, setIsFixed] = useState(false);
  return (
    <>
      <div className="bg-[#F6F8FA] w-full h-25 text-black dark:bg-[#010409] dark:text-white border-b border-gray-300 dark:border-gray-700">
        <HeaderInfo />
        <div
          className={`${
            isFixed ? "fixed top-0 left-0 right-0 pt-2 backdrop-blur-3xl " : "relative"
          } transition-all duration-300`}
        >
          <Navbar props={setIsFixed} />
        </div>
      </div>
    </>
  );
};
