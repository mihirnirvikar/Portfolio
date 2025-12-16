import { Body } from "./components/Body/Body.jsx";
import { Outlet } from "react-router-dom";

export const App = () => {
  return <>
    <Body />
    <Outlet />
  </>;
};
