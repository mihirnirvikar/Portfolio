import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useState } from "react";
import { DrawerItemComponent } from "./DrawerItemComponent";

export const DrawerContentComponent = () => {
  const [input, setInput] = useState("");

  const drawerItems = [
    {
      label: "Projects",
      items: [
        { name: "Nestinn", to: "/projects/nestinn" },
        { name: "PurpleGPT", to: "/projects/purpleGPT" },
      ],
      tag: "Jump",
    },
    {
      label: "Pages",
      items: [
        { name: "Overview", to: "/" },
        { name: "Projects", to: "/projects" },
        { name: "Achievements", to: "/achievements" },
        { name: "Experience", to: "/experience" },
        { name: "Educations", to: "/educations" },
        { name: "Resume", to: "/resume" },
        { name: "Contact", to: "/contact" },
      ],
      tag: "Visit",
    },
  ];

  const filterDrawerItems = drawerItems.map((ele) => {
    const filteredProjects = ele.items.filter((project) =>
      project.name.toLowerCase().includes(input.toLowerCase()),
    );

    if (filteredProjects.length > 0) {
      return {
        ...ele,
        items: filteredProjects,
      };
    }

    return null;
  });

  const filteredDrawerItems = filterDrawerItems.filter((item) => item !== null);

  console.log(filteredDrawerItems);
  return (
    <>
      <SheetContent side="top" className="">
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
        <div className="overflow-y-auto no-scrollbar scroll-smooth h-[39vh] md:h-[44vh]">
          <hr className="mt-2" />

          {filteredDrawerItems.length === 0 ? (
            <div className="mt-4 px-2">
              <p className="mb-1 text-[14px] font-semibold dark:text-[#d6d6d6] text-[#52525C]">
                😔 Oops! No results found
              </p>
            </div>
          ) : (
            filteredDrawerItems.map((ele, index) => {
              return (
                <div className="mt-1 ml-2" key={index}>
                  <p className="mb-1 text-[16px] font-semibold dark:text-[#d6d6d6] text-[#52525C]">
                    {ele.label}
                  </p>

                  <div>
                    {ele.items.map((project, index) => {
                      return (
                        <DrawerItemComponent
                          key={index}
                          projectTo={project.to}
                          projectName={project.name}
                          tag={ele.tag}
                        />
                      );
                    })}
                  </div>
                </div>
              );
            })
          )}
        </div>
      </SheetContent>
    </>
  );
};
