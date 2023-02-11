import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    '__APP_VERSION__': JSON.stringify(`v${process.env.npm_package_version}`),
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src/assets'),
    },
  },
  plugins: [react()],
})
