import { AppContext } from "./AppContext.jsx";
import { useState, useEffect } from "react";

export const AppContextProvider = ({ children }) => {
  const [isNavItemSelected, setIsNavItemSelected] = useState("overview");

  const values = { isNavItemSelected, setIsNavItemSelected };
  return (
    <>
      <AppContext.Provider value={values}>{children}</AppContext.Provider>
    </>
  );
};
