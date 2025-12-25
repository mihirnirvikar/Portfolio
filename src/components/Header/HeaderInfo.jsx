import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

export const HeaderInfo = () => {
  const { theme, setTheme, toggleTheme } = useContext(ThemeContext);

  const themeBtnHandler = () => {
    toggleTheme();
  }

  return (
    <>
      <div className="header px-2 pt-2 pb-1 flex items-center justify-between ">
        <div className="header-logo mr-1 flex items-center ">
          <svg
            width="60"
            height="36"
            viewBox="0 0 180 110"
            xmlns="http://www.w3.org/2000/svg"
            className=""

          >
            <path
              {...theme === "dark" ? { fill: "white" } : { fill: "black" }}
              
              d="M30 90 V30 C30 26 34 26 36 30 L60 66 L84 30 C86 26 90 26 90 30 V90
          H78 V54 L60 78 L42 54 V90 Z M142 90 V30 C142 26 138 26 136 30 L108 74
          V30 H96 V90 C96 94 100 94 102 90 L130 46 V90 Z"
            />
          </svg>
          {/* <p className="text-xl font-bold mt-0.5">Mihir Nirvikar</p> */}
          <Link to="/" className="text-xl font-bold mt-0.5">
            Mihir Nirvikar
          </Link>
        </div>

        <div className="header-search-bar flex items-center gap-2 mt-0.5">
          <button className="border rounded-lg cursor-pointer  h-9.5 w-72 p-2 border-gray-400 flex items-center hover:shadow-md transition-shadow duration-100 ">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              class="size-5 mr-2"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M443.5 420.2L336.7 312.4c20.9-26.2 33.5-59.4 33.5-95.5 0-84.5-68.5-153-153.1-153S64 132.5 64 217s68.5 153 153.1 153c36.6 0 70.1-12.8 96.5-34.2l106.1 107.1c3.2 3.4 7.6 5.1 11.9 5.1 4.1 0 8.2-1.5 11.3-4.5 6.6-6.3 6.8-16.7.6-23.3zm-226.4-83.1c-32.1 0-62.3-12.5-85-35.2-22.7-22.7-35.2-52.9-35.2-84.9 0-32.1 12.5-62.3 35.2-84.9 22.7-22.7 52.9-35.2 85-35.2s62.3 12.5 85 35.2c22.7 22.7 35.2 52.9 35.2 84.9 0 32.1-12.5 62.3-35.2 84.9-22.7 22.7-52.9 35.2-85 35.2z"></path>
            </svg>

            <p className=" text-center mb-0.5">
              <span className="font-semibold">Type</span>{" "}
              <span className="border-2 rounded-lg px-2 py-0.5 text-sm mx-0.5 font-normal bg-gray-200 ">
                Shift + /
              </span>
              <span className="font-semibold"> to search</span>
            </p>
            <p></p>
          </button>

          <div className="border h-6 mx-2"></div>

          <button
            className="theme-toggle cursor-pointer mr-2 p-1.5 rounded-lg hover:bg-gray-200 border transition-colors duration-100"
            onClick={themeBtnHandler}
          >
            {theme === "dark" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-sun size-5 transition-colors duration-100"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="4"></circle>
                <path d="M12 2v2"></path>
                <path d="M12 20v2"></path>
                <path d="m4.93 4.93 1.41 1.41"></path>
                <path d="m17.66 17.66 1.41 1.41"></path>
                <path d="M2 12h2"></path>
                <path d="M20 12h2"></path>
                <path d="m6.34 17.66-1.41 1.41"></path>
                <path d="m19.07 4.93-1.41 1.41"></path>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-moon size-5 transition-colors duration-100"
                aria-hidden="true"
              >
                <path
                  d="M20.985 12.486a9 9 0 1 
              1-9.473-9.472c.405-.022.617.46.402.803a6 6 0
               0 0 8.268 8.268c.344-.215.825-.004.803.401"
                ></path>
              </svg>
            )}
          </button>

          <button className="theme-toggle mr-6 cursor-pointer p-1.5 rounded-lg hover:bg-gray-200 border transition-colors duration-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-menu size-5 transition-colors duration-100"
              aria-hidden="true"
            >
              <path d="M4 5h16"></path>
              <path d="M4 12h16"></path>
              <path d="M4 19h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};
