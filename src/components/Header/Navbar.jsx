import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <nav className="navbar flex items-center mx-7 font-medium mt-2">
        <ul className="flex gap-4">
          <NavLink to="/" end>
            {({ isActive }) => (
              <li
                className={`h-10 ${
                  isActive
                    ? "border-b-2 border-orange-500 font-bold "
                    : "border-b-2 border-transparent"
                }`}
              >
                <div className="flex items-center gap-1 cursor-pointer hover:bg-gray-300 rounded-md w-28 h-8 justify-center">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 512 512"
                    class="size-4"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="32"
                      d="M256 160c16-63.16 76.43-95.41 208-96a15.94 15.94 0 0 1 16 16v288a16 16 0 0 1-16 16c-128 0-177.45 25.81-208 64-30.37-38-80-64-208-64-9.88 0-16-8.05-16-17.93V80a15.94 15.94 0 0 1 16-16c131.57.59 192 32.84 208 96zm0 0v288"
                    ></path>
                  </svg>

                  <span>Overview</span>
                </div>
              </li>
            )}
          </NavLink>

          <NavLink to="/projects">
            {({ isActive }) => (
              <li
                className={`h-10 ${
                  isActive
                    ? "border-b-2 border-orange-500 font-bold"
                    : "border-b-2 border-transparent"
                }`}
              >
                <div className="flex items-center gap-1 cursor-pointer hover:bg-gray-300 rounded-md w-28 h-8 justify-center">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 16 16"
                    class="size-4"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M14 10V1.5l-.5-.5H3.74a1.9 1.9 0 0 0-.67.13 1.77 1.77 0 0 0-.94 1 1.7 1.7 0 0 0-.13.62v9.5a1.7 1.7 0 0 0 .13.67c.177.427.515.768.94.95a1.9 1.9 0 0 0 .67.13H4v-1h-.26a.72.72 0 0 1-.29-.06.74.74 0 0 1-.4-.4.93.93 0 0 1-.05-.29v-.5a.93.93 0 0 1 .05-.29.74.74 0 0 1 .4-.4.72.72 0 0 1 .286-.06H13v2H9v1h4.5l.5-.5V10zM4 10V2h9v8H4zm1-7h1v1H5V3zm0 2h1v1H5V5zm1 2H5v1h1V7zm.5 6.49L5.28 15H5v-3h3v3h-.28L6.5 13.49z"
                    ></path>
                  </svg>

                  <span>Projects</span>
                </div>
              </li>
            )}
          </NavLink>

          <NavLink to="/achievements">
            {({ isActive }) => (
              <li
                className={`h-10 ${
                  isActive
                    ? "border-b-2 border-orange-500 font-bold"
                    : "border-b-2 border-transparent"
                }`}
              >
                <div className="flex items-center gap-1 cursor-pointer hover:bg-gray-300 rounded-md w-35 h-8 justify-center ">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    class="size-4"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8.75 19.25a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0ZM15 4.75a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0Zm-12.5 0a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0ZM5.75 6.5a1.75 1.75 0 1 0-.001-3.501A1.75 1.75 0 0 0 5.75 6.5ZM12 21a1.75 1.75 0 1 0-.001-3.501A1.75 1.75 0 0 0 12 21Zm6.25-14.5a1.75 1.75 0 1 0-.001-3.501A1.75 1.75 0 0 0 18.25 6.5Z"></path>
                    <path d="M6.5 7.75v1A2.25 2.25 0 0 0 8.75 11h6.5a2.25 2.25 0 0 0 2.25-2.25v-1H19v1a3.75 3.75 0 0 1-3.75 3.75h-6.5A3.75 3.75 0 0 1 5 8.75v-1Z"></path>
                    <path d="M11.25 16.25v-5h1.5v5h-1.5Z"></path>
                  </svg>

                  <span>Achievement</span>
                </div>
              </li>
            )}
          </NavLink>

          <NavLink to="/experience">
            {({ isActive }) => (
              <li
                className={`h-10 ${
                  isActive
                    ? "border-b-2 border-orange-500 font-bold"
                    : "border-b-2 border-transparent"
                }`}
              >
                <div className="flex items-center gap-1 cursor-pointer hover:bg-gray-300 rounded-md w-32 h-8 justify-center ">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    class="size-4"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M14 12h4v1.5h-4zM14 15h4v1.5h-4z"></path>
                    <path d="M20 7h-5V4c0-1.1-.9-2-2-2h-2c-1.1 0-2 .9-2 2v3H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm-9 0V4h2v5h-2V7zm9 13H4V9h5c0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2h5v11z"></path>
                    <circle cx="9" cy="13.5" r="1.5"></circle>
                    <path d="M11.08 16.18c-.64-.28-1.34-.43-2.08-.43s-1.44.15-2.08.43c-.56.24-.92.78-.92 1.39V18h6v-.43c0-.61-.36-1.15-.92-1.39z"></path>
                  </svg>

                  <span>Experience</span>
                </div>
              </li>
            )}
          </NavLink>

          <NavLink to="/educations">
            {({ isActive }) => (
              <li
                className={`h-10 ${
                  isActive
                    ? "border-b-2 border-orange-500 font-bold"
                    : "border-b-2 border-transparent"
                }`}
              >
                <div className="flex items-center gap-1 cursor-pointer hover:bg-gray-300 rounded-md w-28 h-8 justify-center">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    stroke-width="7"
                    viewBox="0 0 122.88 73.27"
                    class="size-4"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M104.27 58.88l-.54-19.99-32.85 9.49c-2.96.65-5.88.96-8.74.97-3.07.01-6.09-.32-9.06-.97L21.7 38.79v20.27c.9 10.53 31.11 13.75 40.38 14.19 7.43.36 36.78-3.52 40.64-9.57.83-1.32 1.35-2.92 1.55-4.8z M117.58 24.5v24.43h.77c.53 0 .96.43.96.96v6.57c0 .52-.43.96-.96.96h-.77v2.3c.98.18 1.73 1.05 1.73 2.08 0 1.16-.96 2.12-2.12 2.12h-3.79c-1.16 0-2.12-.95-2.12-2.12 0-1.03.75-1.9 1.73-2.08v-2.3h-.77c-.52 0-.96-.43-.96-.96v-6.57c0-.53.43-.96.96-.96h.77v-23L73.03 38.35c-7.24 1.72-14.48 1.84-21.72 0L7.18 25.18l-3.99-1.19c-4.97-2.03-3.73-6.8.9-7.9L54 1.19c5.15-1.47 10.29-1.7 15.44 0l49.01 14.72c5.33 1.3 6.38 6.23.18 8.26l-1.05.33z"
                    />
                  </svg>

                  <span>Education</span>
                </div>
              </li>
            )}
          </NavLink>

          <NavLink to="/resume">
            {({ isActive }) => (
              <li
                className={`h-10 ${
                  isActive
                    ? "border-b-2 border-orange-500 font-bold"
                    : "border-b-2 border-transparent"
                }`}
              >
                <div className="flex items-center gap-1 cursor-pointer hover:bg-gray-300 rounded-md w-28 h-8 justify-center">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    class="size-4"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path>
                    <path d="M14 17H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"></path>
                  </svg>

                  <span>Resume</span>
                </div>
              </li>
            )}
          </NavLink>

          <NavLink to="/contact">
            {({ isActive }) => (
              <li
                className={`h-10 ${
                  isActive
                    ? "border-b-2 border-orange-500 font-bold"
                    : "border-b-2 border-transparent"
                }`}
              >
                <div className="flex items-center gap-1 cursor-pointer hover:bg-gray-300 rounded-md w-28 h-8 justify-center">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    class="size-4"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M6.45455 19L2 22.5V4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V18C22 18.5523 21.5523 19 21 19H6.45455ZM5.76282 17H20V5H4V18.3851L5.76282 17ZM11 10H13V12H11V10ZM7 10H9V12H7V10ZM15 10H17V12H15V10Z"></path>
                  </svg>

                  <span>Contact</span>
                </div>
              </li>
            )}
          </NavLink>
        </ul>
      </nav>
    </>
  );
};
