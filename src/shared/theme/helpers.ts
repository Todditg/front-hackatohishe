import { SELECTED_THEME_STORE_KEY, darkTheme, lightTheme } from "./constants";
import { TGetSavedTheme } from "./types";

export const getSavedTheme = (): TGetSavedTheme => {
  if (localStorage.getItem(SELECTED_THEME_STORE_KEY)) {
    if (localStorage.getItem(SELECTED_THEME_STORE_KEY) === darkTheme.name) {
      return darkTheme;
    } else {
      return lightTheme;
    }
  }
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    return darkTheme;
  }
  return lightTheme;
};
