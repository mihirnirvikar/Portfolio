import { Header } from "./components/Header/Header.jsx";
import { Outlet } from "react-router-dom";

export const App = () => {
  return (
    <>
      <div className="min-h-screen w-full ">
        <Header />
        <Outlet />
      </div>
    </>
  );
};
