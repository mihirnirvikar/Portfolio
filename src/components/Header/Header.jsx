import React from "react";
import { HeaderInfo } from "./HeaderInfo.jsx";
import { Navbar } from "./Navbar.jsx";
import { useState } from "react";

export const Header = () => {
  const [isFixed, setIsFixed] = useState(false);
  return (
    <>
      <div className="flex-1 flex flex-col justify-center dark:bg-[#010409] bg-[#F6F8FA] h-25 border-b border-gray-300 dark:border-gray-700 z-1 relative min-w-0 max-w-full">
        <HeaderInfo />
        <div
          className={`${
            isFixed
              ? "fixed top-0 left-0 right-0 pt-2 backdrop-blur-3xl "
              : "relative"
          } transition-all duration-300`}
        >
          <Navbar setIsFixed={setIsFixed} />
        </div>
      </div>
    </>
  );
};
