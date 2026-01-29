import { Welcome } from "./Welcome.jsx";
import { TechStack } from "./TechStack.jsx";
import { CurrentFocus } from "./CurrentFocus.jsx";
import { AboutMe } from "./AboutMe.jsx";
import { LetsConnect } from "./LetsConnect.jsx";
import { PinnedProject } from "./PinnedProject.jsx";
import { Outlet } from "react-router-dom";

export const Overview = () => {
  return (
    <>
      <div className="min-w-0 max-w-5xl flex-1 2xl:mr-32 xl:mr-12 lg:mr-8 md:mr-4 sm:mr-2 xl:ml-10 lg:ml-6 md:ml-4 sm:ml-2 transition-ease-in-out duration-300 dark:text-[#E4E4E7]">
        <div className="overview-container border mt-8 w-full py-3 px-4 rounded-lg mb-10 border-gray-600">
          <Welcome />
          <TechStack />
          <CurrentFocus />
          <AboutMe />
          <LetsConnect />
        </div>

        <PinnedProject />
      </div>
    </>
  );
};
