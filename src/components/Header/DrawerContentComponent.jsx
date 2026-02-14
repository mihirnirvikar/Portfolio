import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useState } from "react";

export const DrawerContentComponent = () => {
  const [input, setInput] = useState("");

  const drawerItems = [
    {
      label: "Projects",
      projects: [
        { name: "Nestinn", to: "/projects/nestinn" },
        { name: "PurpleGPT", to: "/projects/purpleGPT" },
      ],
    },
    {
      label: "Pages",
      navbarItems: [
        { name: "Overview", to: "/" },
        { name: "Projects", to: "/projects" },
        { name: "Achievements", to: "/achievements" },
        { name: "Experience", to: "/experience" },
        { name: "Educations", to: "/educations" },
        { name: "Resume", to: "/resume" },
        { name: "Contact", to: "/contact" },
      ],
    },
  ];

  const filteredDrawerItems = drawerItems.map((item) => {
    if (item.projects) {
      const filteredProjects = item.projects.filter((project) =>
        project.name.toLowerCase().includes(input.toLowerCase()),
      );

      if (filteredProjects.length > 0) {
        return {
          ...item,
          projects: filteredProjects,
        };
      }
    }

    if (item.navbarItems) {
      const filteredNavbarItems = item.navbarItems.filter((navbarItem) =>
        navbarItem.name.toLowerCase().includes(input.toLowerCase()),
      );

      if (filteredNavbarItems.length > 0) {
        return {
          ...item,
          navbarItems: filteredNavbarItems,
        };
      }
    }

    return null;
  });

  console.log(filteredDrawerItems);

  return (
    <>
      <SheetContent
        side="top"
        className=""
      >
        <SheetHeader>
          <SheetTitle>
            <div className="w-[90%] md:w-[95%] rounded-md overflow-hidden h-10">
              <input
                type="text"
                className="w-full h-full px-3 border border-[#D4D4D8] dark:border-[#52525C] rounded-md text-[14px] focus:outline-none focus:border-2  focus:border-[#39A2FF] dark:text-gray-200 text-gray-800 "
                placeholder="Search"
                value={input}
                onChange={(e) => {
                  setInput(e.target.value);
                }}
              />
            </div>
          </SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        <div className="overflow-y-auto no-scrollbar scroll-smooth h-[39vh] md:h-[60vh]">
          <hr className="mt-2" />
          {filteredDrawerItems.map((item, index) => {
            return (
              <div className="mt-1 ml-2" key={index}>
                <p className="mb-1 text-[16px] font-semibold dark:text-[#d6d6d6] text-[#52525C]">
                  {item.label}
                </p>

                {item.projects ? (
                  <div>
                    {item.projects.map((project, index) => {
                      return (
                        <div
                          key={index}
                          className="flex h-8 w-full px-4 hover:bg-[#E4E4E7] dark:hover:bg-[#27272A] rounded-sm cursor-pointer items-center text-[14px] text-[#3F3F46] dark:text-[#E4E4E7] group"
                        >
                          <img
                            src={"/icon_mihir.jpg"}
                            alt=""
                            className="w-5 h-5 mr-2 rounded-full object-cover"
                          />
                          <p>MihirNirvikar/</p>
                          <a
                            href={project.to}
                            className="group-hover:text-[#39A2FF]"
                          >
                            {project.name}
                          </a>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div>
                    {item.navbarItems.map((navbarItem, index) => {
                      return (
                        <div
                          key={index}
                          className="flex h-8 w-full px-4 hover:bg-[#E4E4E7] dark:hover:bg-[#27272A] rounded-sm cursor-pointer items-center text-[14px] text-[#3F3F46] dark:text-[#E4E4E7] group "
                        >
                          <img
                            src={"/icon_mihir.jpg"}
                            alt=""
                            className="w-5 h-5 mr-2 rounded-full object-cover"
                          />
                          <p className="dark:text-gray-400 text-gray-500">
                            MihirNirvikar/
                          </p>
                          <a
                            href={navbarItem.to}
                            className="group-hover:text-[#39A2FF]"
                          >
                            {navbarItem.name}
                          </a>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </SheetContent>
    </>
  );
};
