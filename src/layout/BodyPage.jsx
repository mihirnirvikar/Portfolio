import { About } from "../components/Body/About.jsx";
import { Outlet } from "react-router-dom";

export const BodyPage = () => {
  return (
    <>
      <div className="flex bg-white text-black dark:bg-[#0D1117] dark:text-white justify-center">
        <About />
        <Outlet />
      </div>
    </>
  );
};
