"use client";

import { createContext, useContext } from "react";


const defaultTheme = {
  colors: {
    primary: "#007bff",
    secondary: "#6c757d",
  },
};

const ThemeContext = createContext(defaultTheme);

export const ThemeProvider = ({ children }) => {
  return (
    <ThemeContext.Provider value={defaultTheme}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);