import { ReactElement } from "react";
import { SideBar } from "../SideBar/SideBar.tsx";
import { ActionField } from "../Orders";
import { MainPageStyle } from "./style.ts";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FileLoader } from "../FileLoader";
import { Entry } from "../EntryPoint";

export const MainPage = (): ReactElement => (
  <MainPageStyle style={{ color: "red" }}>
    <BrowserRouter>
      <SideBar />
      <Routes>
        <Route path="/" element={<Entry />} />
        <Route path="/action1" element={<ActionField />} />
        <Route path="/action2" element={<FileLoader />} />
      </Routes>
    </BrowserRouter>
  </MainPageStyle>
);
