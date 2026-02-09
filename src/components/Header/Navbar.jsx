import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import {
  BookOpen,
  FolderKanban,
  Award,
  IdCardLanyard,
  GraduationCap,
  FileText,
  MessageSquareMore,
  Ellipsis,
} from "lucide-react";
import { useEffect } from "react";
import { ButtonComponent } from "../Common/ButtonComponent";

export const Navbar = ({ setIsFixed }) => {
  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > 80) {
  //       setIsFixed(true);
  //     } else {
  //       setIsFixed(false);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setIsFixed]);

  return (
    <>
      <nav className="navbar flex justify-between items-center  font-semibold text-[15px] duration-200 transition-ease-in-out sticky top-0 z-50 px-2 ">
        <ul className="flex px-2 lg:px-6 dark:text-[#E4E4E7] text-[#2a2a2c] mt-1 ">
          <div className="hidden md:flex gap-0 md:gap-1 lg:gap-2 ">
            <NavLink to="/">
              {({ isActive }) => (
                <li
                  className={`h-10 ${
                    isActive
                      ? "border-b-2 border-orange-500 font-bold"
                      : "font-normal"
                  }`}
                >
                  <div className="flex items-center gap-1 cursor-pointer hover:bg-[#E4E4E7] dark:hover:bg-[#27272a] rounded-sm w-28 md:w-26 lg:w-28 h-8 justify-center transition-ease-in-out duration-200">
                    <BookOpen className="size-4 stroke-2" />
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
                      : "font-normal"
                  }`}
                >
                  <div className="flex items-center gap-1 cursor-pointer hover:bg-[#E4E4E7] dark:hover:bg-[#27272A] rounded-sm w-28 md:w-24 lg:w-28 h-8 justify-center transition-ease-in-out duration-200">
                    <FolderKanban className="size-4 stroke-2" />
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
                      : "font-normal"
                  }`}
                >
                  <div className="flex items-center gap-1 cursor-pointer hover:bg-[#E4E4E7] dark:hover:bg-[#27272A] rounded-sm w-35 md:w-32 lg:w-35 h-8 justify-center transition-ease-in-out duration-200">
                    <Award className="size-4 stroke-2" />

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
                      : "font-normal"
                  }`}
                >
                  <div className="flex items-center gap-1 cursor-pointer hover:bg-[#E4E4E7] dark:hover:bg-[#27272A] rounded-sm w-32 md:w-28 lg:w-32 h-8 justify-center transition-ease-in-out duration-200">
                    <IdCardLanyard className="size-4 stroke-2" />

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
                      : "font-normal"
                  }`}
                >
                  <div className="flex items-center gap-1 cursor-pointer hover:bg-[#E4E4E7] dark:hover:bg-[#27272A] rounded-sm w-28 md:w-26 lg:w-28 h-8 justify-center transition-ease-in-out duration-200">
                    <GraduationCap className="size-4 stroke-2" />

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
                      : "font-normal"
                  }`}
                >
                  <div className="flex items-center gap-1 cursor-pointer hover:bg-[#E4E4E7] dark:hover:bg-[#27272A] rounded-sm w-28 md:w-22 lg:w-28 h-8 justify-center transition-ease-in-out duration-200">
                    <FileText className="size-4 stroke-2" />
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
                      : "font-normal"
                  }`}
                >
                  <div className="flex items-center gap-1 cursor-pointer hover:bg-[#E4E4E7] dark:hover:bg-[#27272A] rounded-sm w-28 md:w-22 lg:w-28 h-8 justify-center transition-ease-in-out duration-200">
                    <MessageSquareMore className="size-4 stroke-2" />

                    <span>Contact</span>
                  </div>
                </li>
              )}
            </NavLink>
          </div>
        </ul>
        {
          <div className="flex md:hidden">
            <ButtonComponent
              className="mb-2"
              icon={<Ellipsis className="size-5 stroke-2" />}
            />
          </div>
        }
      </nav>
    </>
  );
};
