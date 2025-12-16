import React from "react";

export const Header = () => {
  return (
    <>
      <div className="header px-2 py-1 flex items-center justify-between">
        <div className="header-logo mr-1 flex items-center ">
          <svg
            width="60"
            height="36"
            viewBox="0 0 180 110"
            xmlns="http://www.w3.org/2000/svg"
            className=""
          >
            <path
              fill="#0000000"
              d="M30 90 V30 C30 26 34 26 36 30 L60 66 L84 30 C86 26 90 26 90 30 V90
          H78 V54 L60 78 L42 54 V90 Z M142 90 V30 C142 26 138 26 136 30 L108 74
          V30 H96 V90 C96 94 100 94 102 90 L130 46 V90 Z"
            />
          </svg>
          <p className="text-lg font-bold mt-0.5">Mihir Nirvikar</p>
        </div>

        <div className="header-search-bar flex items-center gap-2 mt-0.5">
          <input type="text" className="border border-gray-400 rounded h-7" />

          <div className="border h-4.5 mx-2"></div>

          <button className="theme-toggle cursor-pointer p-1 rounded hover:bg-gray-200 border transition-colors duration-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height=""
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
          </button>

          <button className="theme-toggle cursor-pointer p-1 rounded hover:bg-gray-200 border transition-colors duration-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
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
