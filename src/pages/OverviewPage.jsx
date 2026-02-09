import { Welcome } from "../components/Overview/Welcome.jsx";
import { TechStack } from "../components/Overview/TechStack.jsx";
import { CurrentFocus } from "../components/Overview/CurrentFocus.jsx";
import { AboutMe } from "../components/Overview/AboutMe.jsx";
import { LetsConnect } from "../components/Overview/LetsConnect.jsx";
import { PinnedProject } from "../components/Overview/PinnedProject.jsx";
import { Outlet } from "react-router-dom";

export const OverviewPage = () => {
  return (
    <>
      <div className="min-w-0 max-w-4xl flex-1 2xl:mr-32 xl:mr-12 lg:mr-8 md:mr-4 sm:mr-4 mr-4 xl:ml-8 lg:ml-4 md:ml-4 sm:ml-4 ml-4 transition-ease-in-out duration-300 dark:text-[#E4E4E7]">
        <div className="overview-container border mt-4 md:mt-7 w-full py-3 px-4 rounded-lg mb-10 border-[#D4D4D8] dark:border-[#52525C]">
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
