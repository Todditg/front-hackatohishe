import { ITheme } from "@quark-uilib/components";

export interface TThemeContext {
  theme: ITheme;
  toggleTheme: () => void;
}

export type TGetSavedTheme = ITheme;
