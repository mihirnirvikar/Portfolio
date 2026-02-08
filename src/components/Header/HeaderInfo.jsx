import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { Search, Sun, Moon, Menu } from "lucide-react";

export const HeaderInfo = () => {
  const { theme, setTheme, toggleTheme } = useContext(ThemeContext);

  const themeBtnHandler = () => {
    toggleTheme();
  };

  return (
    <>
      <div className=" header px-2 pt-1 flex items-center justify-between ">
        <div className="header-logo">
          <Link
            to="/"
            className="text-xl flex items-center font-semibold justify-center gap-2 dark:text-white text-[#3F3F46] "
          >
            <img
              className={`w-14 h-14 overflow-hidden`}
              src={`${theme === "dark" ? "/logo2.svg" : "/logo.svg"}`}
              alt="Logo Image"
            />
            Mihir Nirvikar
          </Link>
        </div>

        <div className="header-search-bar flex items-center gap-4 dark:text-[#E4E4E7] text-[#3F3F46]">
          {/* Search bar */}

          <button className="border rounded-md cursor-pointer  h-9 w-72 border-[#D4D4D8] dark:border-[#52525C] flex items-center text-center hover:shadow-md hover:bg-gray-200 transition-shadow dark:hover:bg-[#27272A] dark:bg-[#010409] bg-white duration-100 gap-4">
            <Search className="size-5 ml-4" />

            <p className="flex justify-center items-center  text-[14px] gap-1">
              <span className="font-">Type</span>{" "}
              <span className="border-2 text-[12px]  dark:border-[#52525C] border-[#D4D4D8] rounded-lg px-2 font-semibold dark:bg-[#27272A] bg-[#F4F4F5]">
                Shift + /
              </span>
              <span className=""> to search</span>
            </p>
          </button>

          {/* vertical line */}
          <div className="border h-7 rounded dark:border-[#52525C] border-[#D4D4D8]"></div>

          {/* Theme Toggle button */}

          <div className="flex gap-2">
            <button
              className="theme-toggle cursor-pointer h-8.5 w-8.5 flex justify-center items-center rounded-md border-[#D4D4D8] dark:border-[#52525C] hover:bg-[#E4E4E7] dark:hover:bg-[#27272A] border transition-colors duration-100"
              onClick={themeBtnHandler}
            >
              {theme === "dark" ? (
                <Sun className="size-5 " />
              ) : (
                <Moon className="size-5" />
              )}
            </button>

            <button className="theme-toggle cursor-pointer p-1.5 rounded-md hover:bg-gray-200 border border-[#D4D4D8] dark:border-[#52525C] dark:hover:bg-[#27272A] transition-colors duration-100">
              <Menu className="size-5 " />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
