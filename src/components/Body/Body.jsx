import { About } from "./About.jsx";
import { Outlet } from "react-router-dom";

export const Body = () => {
  return (
    <>
      <div className="flex">
        <About />
        <Outlet />
      </div>
    </>
  );
};
