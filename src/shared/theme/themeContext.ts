import { createContext } from "react";
import { lightTheme } from "./constants";
import { TThemeContext } from "./types";

export const ThemeContext = createContext<TThemeContext>({
  theme: lightTheme,
  toggleTheme: () => null
});
