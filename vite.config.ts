import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: "/",
  build: {
    outDir: "dist",
    assetsInlineLimit: 0, // Don't inline videos - keeps them as separate files
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
