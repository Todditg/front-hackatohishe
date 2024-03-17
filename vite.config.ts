import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/x`
export default defineConfig({
  plugins: [react()]
  // server: {
  //   proxy: {
  //     "stenagrafist/api/v1":"http://158.160.17.242:8011/"
  //   }
  // }
});
