import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// GitHub Pages note:
// - This repo uses a custom domain (see public/CNAME), so the site is served
//   from the domain root and `base` stays '/'.
// - If you ever deploy to https://<user>.github.io/<repo>/ instead, change
//   `base` to '/<repo>/' (or run `VITE_BASE=/<repo>/ npm run build`).
export default defineConfig({
  base: process.env.VITE_BASE || '/',
  plugins: [react(), tailwindcss()],
})
