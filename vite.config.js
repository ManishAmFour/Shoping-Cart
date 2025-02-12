import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./tests/setup.js",
  },
  server: {
    hmr: {
      overlay: false,
    }, // Ensure HMR is enabled
    watch: {
      usePolling: true, // Polling can help on some file systems
      interval: 100,
    },
  },
});
