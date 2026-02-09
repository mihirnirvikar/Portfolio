import { About } from "../components/Body/About.jsx";
import { Outlet } from "react-router-dom";

export const BodyPage = () => {
  return (
    <>
      <div className="flex flex-col bg-white text-black dark:bg-[#0D1117] dark:text-white justify-center sm:flex-col md:flex-row lg:flex-row xl:flex-row">
        <About />
        <Outlet />
      </div>
    </>
  );
};
