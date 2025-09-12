import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  root: ".",          // use the repo root (where your index.html lives)
  base: "/",          // for user site drdattaaiims.github.io
  plugins: [
    react()
    // exclude replit-only plugins in production
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@shared": path.resolve(__dirname, "shared"),
      "@assets": path.resolve(__dirname, "attached_assets"),
    },
  },
  build: {
    outDir: "dist",   // default dist folder, Pages workflow expects this
    emptyOutDir: true,
    rollupOptions: {
      input: "index.html",   // force root index.html as entry
    },
  },
});
