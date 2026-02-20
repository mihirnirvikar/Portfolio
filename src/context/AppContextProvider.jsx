import { AppContext } from "./AppContext.jsx";
import { useState, useEffect } from "react";

export const AppContextProvider = ({ children }) => {
  const [isNavItemSelected, setIsNavItemSelected] = useState("overview");
  const [showSearchDrawer, setShowSearchDrawer] = useState(false);

  const values = {
    isNavItemSelected,
    setIsNavItemSelected,
    showSearchDrawer,
    setShowSearchDrawer,
  };

  return (
    <>
      <AppContext.Provider value={values}>{children}</AppContext.Provider>
    </>
  );
};
