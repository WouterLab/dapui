import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import linaria from "@linaria/vite";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    linaria({
      include: ["**/*.{ts,tsx}"],
      babelOptions: {
        presets: ["@babel/preset-typescript", "@babel/preset-react"],
      },
    }),
  ],
  build: {
    lib: {
      entry: resolve("src", "index.ts"),
      name: "ponikit",
      formats: ["es", "cjs"],
      fileName: (format) => `ponikit.${format === "cjs" ? "cjs" : "es.js"}`,
    },
  },
});
