import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
    proxy: {
      // Proxy Roblox Thumbnails API to avoid CORS
      '/api/roblox/thumbnails': {
        target: 'https://thumbnails.roblox.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/roblox\/thumbnails/, ''),
        secure: true,
      },
      // Proxy Roblox Games API to avoid CORS
      '/api/roblox/games': {
        target: 'https://games.roblox.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/roblox\/games/, ''),
        secure: true,
      },
    },
  },
})
