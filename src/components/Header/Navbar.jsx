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
} from "lucide-react";

export const Navbar = () => {
  return (
    <>
      <nav className="navbar flex items-center justify- font-semibold mt-1 px-6 pb-0.5">
        <ul className="flex gap-1 dark:text-[#E4E4E7] text-[#2a2a2c]">
          <NavLink to="/" end>
            {({ isActive }) => (
              <li
                className={`h-10 ${
                  isActive
                    ? "border-b-2 border-orange-500 font-bold"
                    : "font-normal"
                }`}
              >
                <div className="flex items-center gap-1 cursor-pointer hover:bg-[#E4E4E7] dark:hover:bg-[#27272A] rounded-md w-28 h-8 justify-center transition-ease-in-out duration-200">
                  <BookOpen className="size-5 stroke-2" />
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
                <div className="flex items-center gap-1 cursor-pointer hover:bg-[#E4E4E7] dark:hover:bg-[#27272A] rounded-md w-28 h-8 justify-center transition-ease-in-out duration-200">
                  <FolderKanban className="size-5 stroke-2" />
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
                <div className="flex items-center gap-1 cursor-pointer hover:bg-[#E4E4E7] dark:hover:bg-[#27272A] rounded-md w-35 h-8 justify-center transition-ease-in-out duration-200">
                  <Award className="size-5 stroke-2" />

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
                <div className="flex items-center gap-1 cursor-pointer hover:bg-[#E4E4E7] dark:hover:bg-[#27272A] rounded-md w-32 h-8 justify-center transition-ease-in-out duration-200">
                  <IdCardLanyard className="size-5 stroke-2" />

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
                <div className="flex items-center gap-1 cursor-pointer hover:bg-[#E4E4E7] dark:hover:bg-[#27272A] rounded-md w-28 h-8 justify-center transition-ease-in-out duration-200">
                  <GraduationCap className="size-5 stroke-2" />

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
                <div className="flex items-center gap-1 cursor-pointer hover:bg-[#E4E4E7] dark:hover:bg-[#27272A] rounded-md w-28 h-8 justify-center transition-ease-in-out duration-200">
                  <FileText className="size-5 stroke-2" />
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
                <div className="flex items-center gap-1 cursor-pointer hover:bg-[#E4E4E7] dark:hover:bg-[#27272A] rounded-md w-28 h-8 justify-center transition-ease-in-out duration-200">
                  <MessageSquareMore className="size-5 stroke-2" />

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
