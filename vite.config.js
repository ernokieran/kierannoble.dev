import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'

let _now = new Date();
let _date = `${_now.getFullYear()}${(_now.getMonth() + 1).toString().padStart(2, '0')}${_now.getDate().toString().padStart(2, '0')}`;
let _time = `${_now.getHours().toString().padStart(2, '0')}${_now.getMinutes().toString().padStart(2, '0')}${_now.getSeconds().toString().padStart(2, '0')}`;

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  build: {
    assetsInlineLimit: 4096, // 4kb
    rollupOptions: {
      output: {
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`
      }
    },
  },
  define: {
    '__APP_VERSION__': JSON.stringify(`v${process.env.npm_package_version}-${_date}-${_time}`),
  },
  resolve: {
    alias: {
      '~': resolve(__dirname, './src'),
      '@': resolve(__dirname, './src/assets'),
    },
  },
  plugins: [react()],
})
