import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'

let _now = new Date();
let _date = `${_now.getFullYear()}${(_now.getMonth() + 1).toString().padStart(2, '0')}${_now.getDate().toString().padStart(2, '0')}`;
let _time = `${_now.getHours().toString().padStart(2, '0')}${_now.getMinutes().toString().padStart(2, '0')}${_now.getSeconds().toString().padStart(2, '0')}`;
let _version = `v${process.env.npm_package_version}-${_date}-${_time}`;

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  build: {
    assetsInlineLimit: 1024 * 20, // 20kb
    rollupOptions: {
      output: {
        entryFileNames: `assets/${_version}/[name].js`,
        chunkFileNames: `assets/${_version}/[name].js`,
        assetFileNames: `assets/${_version}/[name].[ext]`,
      }
    },
  },
  define: {
    '__APP_VERSION__': JSON.stringify(`${_version}`),
  },
  resolve: {
    alias: {
      '~': resolve(__dirname, './src'),
      '@': resolve(__dirname, './src/assets'),
    },
  },
  plugins: [react()],
})
