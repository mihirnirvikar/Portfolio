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
import { useState, useEffect } from "react";
import { ButtonComponent } from "../Common/ButtonComponent";

export const Navbar = ({ setIsFixed }) => {
  const navItems = [
    { to: "/", label: "Overview", icon: BookOpen },
    { to: "/projects", label: "Projects", icon: FolderKanban },
    { to: "/achievements", label: "Achievement", icon: Award },
    { to: "/experience", label: "Experience", icon: IdCardLanyard },
    { to: "/educations", label: "Education", icon: GraduationCap },
    { to: "/resume", label: "Resume", icon: FileText },
    { to: "/contact", label: "Contact", icon: MessageSquareMore },
  ];

  const [visibleCount, setVisibleCount] = useState(7);
  const [isOpenMore, setIsOpenMore] = useState(false);

  // handle responsiveness
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 200) {
        setVisibleCount(0);
        setIsOpenMore(true);
      } else if (window.innerWidth < 310) {
        setVisibleCount(1);
        setIsOpenMore(true);
      } else if (window.innerWidth < 460) {
        setVisibleCount(2);
        setIsOpenMore(true);
      } else if (window.innerWidth < 590) {
        setVisibleCount(3);
        setIsOpenMore(true);
      } else if (window.innerWidth < 710) {
        setVisibleCount(4);
        setIsOpenMore(true);
      } else if (window.innerWidth < 830) {
        setVisibleCount(5);
        setIsOpenMore(true);
      } else if (window.innerWidth < 900) {
        setVisibleCount(6);
        setIsOpenMore(true);
      } else {
        setVisibleCount(7);
        setIsOpenMore(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const visibleItems = navItems.slice(0, visibleCount);
  const hiddenItems = navItems.slice(visibleCount);

  // handle scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setIsFixed]);

  return (
    <>
      {/* <nav className="navbar flex justify-between items-center  font-semibold text-[15px] duration-200 transition-ease-in-out sticky top-0 z-50 px-2 ">
        <ul className="flex px-2 lg:px-6 dark:text-[#E4E4E7] text-[#2a2a2c] mt-1 ">
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
        </ul>
        {
          <div className="flex md:hidden">
            <ButtonComponent
              className="mb-2"
              icon={<Ellipsis className="size-5 stroke-2" />}
            />
          </div>
        }
      </nav> */}

      <nav className="navbar w-full flex justify-between items-center  font-semibold text-[15px] duration-200 transition-ease-in-out sticky top-0 z-50 px-2 ">
        <ul className="flex w-full lg:px-6 px-2 dark:text-[#E4E4E7] text-[#2a2a2c] gap-2 mt-1">
          {visibleItems.map((item) => {
            return (
              <NavLink to={item.to}>
                {({ isActive }) => (
                  <li
                    className={`h-10 ${
                      isActive
                        ? "border-b-2 border-orange-500 font-bold "
                        : "font-normal"
                    }`}
                  >
                    <div
                      className={`flex items-center gap-1 cursor-pointer hover:bg-[#E4E4E7] dark:hover:bg-[#27272a] rounded-sm h-8 justify-center transition-ease-in-out duration-200 px-4`}
                    >
                      <item.icon className="size-4 stroke-2" />
                      <span>{item.label}</span>
                    </div>
                  </li>
                )}
              </NavLink>
            );
          })}
        </ul>
        {
          <div className={`${isOpenMore ? "flex" : "hidden"}`}>
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
