import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import path from "path"; // 1. Importe o path

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      // 2. Configure o @ para apontar para a pasta src
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
