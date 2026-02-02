import { Header } from "./components/Header/Header.jsx";
import { Outlet } from "react-router-dom";

export const App = () => {
  return (
    <>
      <div className="min-h-screen w-full overflow-y-auto no-scrollbar scroll-smooth">
        <Header />
        <Outlet />
      </div>
    </>
  );
};
