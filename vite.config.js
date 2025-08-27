import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: "src/mountWHC.jsx",
      name: "WHC",
      fileName: "whc-widgets",
      formats: ["umd"],
    },
    rollupOptions: {
      external: [],
    },
  },
});
