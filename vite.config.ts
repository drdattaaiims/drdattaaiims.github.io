import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
import { fileURLToPath } from "node:url";

// ESM-safe __dirname
const __dirname = fileURLToPath(new URL(".", import.meta.url));

export default defineConfig({
  root: ".",          // build from repo root (where index.html lives)
  base: "/",          // correct for drdattaaiims.github.io
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "."),                // maps "@/..." -> project root
      "@shared": path.resolve(__dirname, "shared"),
      "@assets": path.resolve(__dirname, "attached_assets"),
    },
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
    rollupOptions: { input: "index.html" },            // force the root index.html
  },
});
