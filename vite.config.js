import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "https://society-sphere-backend.onrender.com/api",
        changeOrigin: true,
      },
    },
  },
  plugins: [react()],
});
