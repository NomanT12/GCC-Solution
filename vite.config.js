import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
const fileNames = [
  "src",
  "components",
  "utils",
  "assets",
  "constants",
  "pages",
];
const filePaths = fileNames.reduce((acc, cur) => ({
  ...acc,
  [cur]: `/${cur === "src" ? cur : "src/" + cur}`,
}));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      App: "./App.jsx",
      "global-styles": "./global-styles.jsx",
      ...filePaths,
    },
  },
});
