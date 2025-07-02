import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.mov', '**/*.mp4', '**/*.avi', '**/*.mkv', '**/*.webm'],
  server: {
    proxy: {
      '/api': {
        target: 'https://api.onaksfitness.com',
        changeOrigin: true,
        secure: false,
      }
    }
  },
  define: {
    __API_URL__: JSON.stringify(
      process.env.NODE_ENV === 'production' 
        ? 'https://api.onaksfitness.com' 
        : 'http://localhost:3001'
    )
  }
}) 