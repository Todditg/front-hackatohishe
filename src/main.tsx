import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeContext } from "styled-components";
import { DARK_THEME } from "@quark-uilib/components";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeContext.Provider value={DARK_THEME}>
      <App />
    </ThemeContext.Provider>
  </React.StrictMode>
);
