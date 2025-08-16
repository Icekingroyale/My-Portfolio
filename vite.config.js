import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-icons/di',
      'react-icons/si'
    ],
    exclude: ['@fullpage/react-fullpage']
  },
  server: {
    watch: {
      usePolling: true,
    },
    hmr: {
      overlay: false
    }
  }
})
