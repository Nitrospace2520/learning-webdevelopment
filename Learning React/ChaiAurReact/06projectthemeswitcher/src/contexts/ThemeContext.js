import React, { useContext } from "react";

export const ThemeContext = React.createContext({
  themeMode: "light",
  setLightTheme: () => {},
  setDarkTheme: () => {},
});

export const ThemeProvider = ThemeContext.Provider;

export const useTheme = () => {
  return useContext(ThemeContext);
};
