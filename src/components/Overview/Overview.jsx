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
      <div className="w-full lg:mr-24 md:mr-5 lg:ml-10 md:ml-5">
        <div className="overview-container border mt-8 w-full py-3 px-4 rounded-lg mb-10">
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
