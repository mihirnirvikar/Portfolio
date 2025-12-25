import React from "react";
import { HeaderInfo } from "./HeaderInfo.jsx";
import { Navbar } from "./Navbar.jsx";

export const Header = () => {
  return (
    <>
      <div className="bg-white text-black dark:bg-[#010409] dark:text-white">
        <HeaderInfo />
        <Navbar />
        <hr />
      </div>
    </>
  );
};
