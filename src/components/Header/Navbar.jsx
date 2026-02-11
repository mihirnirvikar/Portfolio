import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
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
import { useState, useEffect, useRef, useContext } from "react";
import { ButtonComponent } from "../Common/ButtonComponent";
import { AppContext } from "../../context/AppContext";

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
  const [isMoreDisplay, setIsMoreDisplay] = useState(false);
  const [isMoreActive, setIsMoreActive] = useState(false);
  const moreRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { isNavItemSelected, setIsNavItemSelected } = useContext(AppContext);

  useEffect(() => {
    setIsNavItemSelected(location.pathname);
  }, [location]);

  // Click outside dropdown close
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (moreRef.current && !moreRef.current.contains(e.target)) {
        setIsMoreActive(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  // handle responsiveness
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 200) {
        setVisibleCount(0);
        setIsMoreDisplay(true);
      } else if (window.innerWidth < 310) {
        setVisibleCount(1);
        setIsMoreDisplay(true);
      } else if (window.innerWidth < 460) {
        setVisibleCount(2);
        setIsMoreDisplay(true);
      } else if (window.innerWidth < 590) {
        setVisibleCount(3);
        setIsMoreDisplay(true);
      } else if (window.innerWidth < 710) {
        setVisibleCount(4);
        setIsMoreDisplay(true);
      } else if (window.innerWidth < 830) {
        setVisibleCount(5);
        setIsMoreDisplay(true);
      } else if (window.innerWidth < 900) {
        setVisibleCount(6);
        setIsMoreDisplay(true);
      } else {
        setVisibleCount(7);
        setIsMoreDisplay(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [visibleCount]);

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
      <nav className="navbar w-full flex justify-between items-center  font-semibold text-[15px] duration-200 transition-ease-in-out sticky top-0 z-50 px-2 ">
        <ul className="flex w-full lg:px-6 px-2 dark:text-[#E4E4E7] text-[#2a2a2c] gap-2 mt-1">
          {/* Nav Items */}
          {visibleItems.map((item, index) => {
            return (
              <NavLink to={item.to} key={index}>
                {({ isActive }) => (
                  <li
                    className={`h-10 ${
                      isActive
                        ? "border-b-2 border-orange-500 font-bold "
                        : "font-normal"
                    }`}
                    onClick={() => {
                      setIsNavItemSelected(item.to);
                    }}
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

        {/* More Button */}
        {
          <div ref={moreRef} className={`${isMoreDisplay ? "flex" : "hidden"}`}>
            <ButtonComponent
              className={`mb-2 ${isMoreActive ? "dark:bg-[#2e2e31] bg-[#E4E4E7] " : "dark:bg-zinc-900 "} hover:bg-[#E4E4E7] dark:hover:bg-[#2e2e31]`}
              icon={<Ellipsis className="size-5 stroke-2" />}
              onClick={(e) => {
                setIsMoreActive(!isMoreActive);
                e.stopPropagation();
              }}
            />

            {isMoreActive && (
              <div
                className={`mt-10 -ml-33 transition-all duration-200 w-42 absolute rounded-md flex flex-col gap-1 justify-center items-center border border-[#D4D4D8] dark:border-[#52525C] dark:text-[#E4E4E7] text-[#2a2a2c] ${isMoreActive ? "dark:bg-[#010409] bg-[#F6F8FA] " : ""}`}
              >
                <div className="flex flex-col p-2 justify-center items-center w-full  text-center">
                  {hiddenItems.map((item, index) => {
                    return (
                      <p
                        className="hover:bg-[#E4E4E7] dark:hover:bg-[#27272a] w-full rounded h-8 flex justify-between items-center cursor-pointer gap-2 px-2"
                        onClick={() => {
                          setIsMoreActive(false);
                          navigate(item.to);
                          setIsNavItemSelected(item.to);
                        }}
                        key={index}
                      >
                        <span className="flex items-center gap-2">
                          <item.icon className="size-4 stroke-2" />
                          {item.label}
                        </span>
                        <span
                          className={`w-2.5 h-2.5 rounded-full ${isNavItemSelected === item.to ? "bg-green-400" : ""}`}
                        ></span>
                      </p>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        }
      </nav>
    </>
  );
};
