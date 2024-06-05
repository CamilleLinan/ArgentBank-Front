import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    define: {
      "process.env.REACT_APP_BASE_URL": JSON.stringify(env.REACT_APP_BASE_URL),
      "process.env.REACT_APP_ENV": JSON.stringify(env.REACT_APP_ENV),
    },
    plugins: [react()],
    resolve: {
      alias: {
        "@scss": new URL("src/styles/scss", import.meta.url).pathname,
      },
    },
  };
});
