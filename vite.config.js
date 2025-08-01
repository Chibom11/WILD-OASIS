import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  server: {
  port:5173,
  proxy: {
    '/api': 'http://localhost:8000', // Or whatever port your backend runs on
  },
}
 
})
