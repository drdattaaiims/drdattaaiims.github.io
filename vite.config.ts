import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

export default defineConfig({
  root: ".",          // build from repo root (where index.html lives)
  base: "/",          // correct for user site drdattaaiims.github.io
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "."),               // "@/components/..." -> "./components/..."
      "@assets": path.resolve(__dirname, "attached_assets"),
    },
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
    manifest: true,
    rollupOptions: { input: "index.html" },            // force the root index.html
  },
});
