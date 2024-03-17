import { PropsWithChildren, ReactElement, useState } from "react";
import { ITheme, ThemeProvider } from "@quark-uilib/components";
import { ThemeContext } from "./themeContext";
import { SELECTED_THEME_STORE_KEY, darkTheme, lightTheme } from "./constants";
import { getSavedTheme } from "./helpers";

const savedTheme = getSavedTheme();

export const AppTheme = ({ children }: PropsWithChildren): ReactElement => {
  const [theme, setTheme] = useState<ITheme>(savedTheme);

  const toggleTheme = (): void => {
    if (theme.name === lightTheme.name) {
      setTheme(darkTheme);
      localStorage.setItem(SELECTED_THEME_STORE_KEY, darkTheme.name);
    }
    if (theme.name === darkTheme.name) {
      setTheme(lightTheme);
      localStorage.setItem(SELECTED_THEME_STORE_KEY, lightTheme.name);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
