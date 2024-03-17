import { ReactElement } from "react";
import { StyledEntry } from "./style.ts";
import { H, ITheme } from "@quark-uilib/components";
import { useTheme } from "styled-components";
export const Entry = (): ReactElement => {
  const theme = useTheme() as ITheme;

  return (
    <StyledEntry>
      <H color={theme.colors.textColoredJotunheim} size={64}>
        Всем привет - это цифровой стенографист
      </H>
    </StyledEntry>
  );
};
