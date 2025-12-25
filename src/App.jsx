import { Header } from "./components/Header/Header.jsx";
import { Body } from "./components/Body/Body.jsx";
import { Outlet } from "react-router-dom";

export const App = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
