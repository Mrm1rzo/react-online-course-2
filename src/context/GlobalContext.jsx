import { createContext } from "react";

export const GlobalContext = createContext();

let navbarBgColor = ["#ECDFCC", "#697565", "#3C3D37", "#181C14"];

export function GlobalContextProvider({ children }) {
  return (
    <GlobalContext.Provider value={[ navbarBgColor ]}>
      {children}
    </GlobalContext.Provider>
  );
}
