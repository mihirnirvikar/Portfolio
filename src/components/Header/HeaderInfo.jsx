import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { Search, Sun, Moon, Menu, Activity } from "lucide-react";
import { ButtonComponent } from "../Common/ButtonComponent";
import { useState, useEffect } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Switch } from "@/components/ui/switch";

export const HeaderInfo = () => {
  const { theme, setTheme, toggleTheme } = useContext(ThemeContext);

  const [isSearch, setIsSearch] = useState(false);

  // handle responsiveness
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 375) {
        setIsSearch(true);
      } else {
        setIsSearch(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const themeBtnHandler = () => {
    toggleTheme();
  };

  return (
    <>
      <div className=" header px-2 mt-1 flex items-center justify-between ">
        <div className="header-logo">
          <Link
            to="/"
            className="text-[24px] flex items-center font-semibold justify-center gap-4 dark:text-white text-[#3F3F46] "
          >
            <img
              className={`w-14 h-13 overflow-hidden object-cover`}
              src={`${theme === "dark" ? "/logo2.svg" : "/logo.svg"}`}
              alt="Logo Image"
            />
            <p className="hidden sm:block">Mihir Nirvikar</p>
          </Link>
        </div>

        <div className="header-search-bar flex items-center gap-1 sm:gap-4 dark:text-[#E4E4E7] text-[#3F3F46]">
          {/* Search bar */}

          <button
            className={`border rounded-md cursor-pointer h-9 ${isSearch ? "w-9 transition-ease-in-out duration-300" : "w-50 transition-ease-in-out duration-300"} sm:w-64 md:w-72 border-[#D4D4D8] dark:border-[#52525C] flex  items-center text-center hover:shadow-md hover:bg-gray-200 transition-shadow dark:hover:bg-[#27272A] dark:bg-[#010409] bg-white duration-100 gap-1 sm:gap-4`}
          >
            <Search className="size-5 ml-2 sm:ml-4" />

            {isSearch ? (
              " "
            ) : (
              <p className="justify-center items-center  text-[14px] gap-1 ">
                <span className="font-">Type</span>{" "}
                <span className="border-2 text-[12px]  dark:border-[#52525C] border-[#D4D4D8] rounded-lg px-2 font-semibold dark:bg-[#27272A] bg-[#F4F4F5]">
                  Shift + /
                </span>
                <span className=""> to search</span>
              </p>
            )}
          </button>

          {/* vertical line */}
          <div className="border h-7 rounded dark:border-[#52525C] border-[#D4D4D8] hidden sm:block"></div>

          {/* Theme Toggle button */}

          <div className="flex gap-1 sm:gap-2">
            <ButtonComponent
              onClick={themeBtnHandler}
              icon={
                theme === "dark" ? (
                  <Sun className="size-5 " />
                ) : (
                  <Moon className="size-5" />
                )
              }
            />

            <Sheet>
              <SheetTrigger>
                <ButtonComponent icon={<Menu className="size-5 " />} />
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>
                    <div className="flex gap-3 items-center">
                      <img
                        src={"/icon_mihir.jpg"}
                        alt=""
                        className="w-18 h-18 sm:w-20 sm:h-20 rounded-full object-cover"
                      />
                      <div>
                        <p className="text-[18px]">Mihir Nirvikar</p>
                        <p className="text-[#39A2FF] text-[15px]">
                          Frontend Engineer
                        </p>
                      </div>
                    </div>
                  </SheetTitle>
                  <SheetDescription>
                    <p className="text-[12px]">
                      🌱 Learning, building, and growing - one project at a
                      time.
                    </p>

                    <div className="border border-[#D4D4D8] dark:border-[#323238] mt-4 bg-zinc-50 dark:bg-[#161B22] p-3 rounded-sm flex flex-col gap-2 duration-200">
                      <div className="flex gap-2 items-center">
                        <Activity className="size-4 text-green-400" />
                        <p className="dark:text-[#EBF1F7] text-[#3c3c3f] font-semibold">
                          Currently working on
                        </p>
                      </div>
                      <p className="text-[12px] text-[#8B949E]">
                        Exploring the world of web development
                      </p>
                    </div>

                    <div className="mt-4 font-semibold text-[16px]">
                      <p>Settings</p>

                      <div className="flex mt-4 gap-2 justify-between px-2 items-center">
                        <div className="flex items-center gap-1">
                          <Sun className="size-4" />
                          <p>Light</p>
                        </div>
                        <div className="">
                          <Switch onClick={themeBtnHandler} />
                        </div>
                        <div className="flex items-center gap-1">
                          <Moon className="size-4" />
                          <p>Dark</p>
                        </div>
                      </div>
                    </div>
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </>
  );
};
