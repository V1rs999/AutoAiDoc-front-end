import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import basicSSL from "@vitejs/plugin-basic-ssl";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), basicSSL()],
  server: {
    // Інші налаштування сервера...
    open: "/", // Шлях до сторінки, яку ви хочете відкрити
  },
  preview: {
    open: true, // Чи можливість автоматичного відкриття в браузері
  },
});
