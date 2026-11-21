import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  // Relative URLs let the same build work at a GitHub Pages project path.
  base: './',
  plugins: [react(), tailwindcss(),],
})
