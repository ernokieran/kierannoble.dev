// vite.config.js
import { defineConfig } from "file:///C:/Source/kierannoble.dev/node_modules/vite/dist/node/index.js";
import { resolve } from "path";
import react from "file:///C:/Source/kierannoble.dev/node_modules/@vitejs/plugin-react/dist/index.mjs";
var __vite_injected_original_dirname = "C:\\Source\\kierannoble.dev";
var _now = /* @__PURE__ */ new Date();
var _date = `${_now.getFullYear()}${(_now.getMonth() + 1).toString().padStart(2, "0")}${_now.getDate().toString().padStart(2, "0")}`;
var _time = `${_now.getHours().toString().padStart(2, "0")}${_now.getMinutes().toString().padStart(2, "0")}${_now.getSeconds().toString().padStart(2, "0")}`;
var vite_config_default = defineConfig({
  base: "/",
  build: {
    assetsInlineLimit: 4096,
    // 4kb
    rollupOptions: {
      output: {
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`
      }
    }
  },
  define: {
    "__APP_VERSION__": JSON.stringify(`v${process.env.npm_package_version}-${_date}-${_time}`)
  },
  resolve: {
    alias: {
      "~": resolve(__vite_injected_original_dirname, "./src"),
      "@": resolve(__vite_injected_original_dirname, "./src/assets")
    }
  },
  plugins: [react()]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxTb3VyY2VcXFxca2llcmFubm9ibGUuZGV2XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxTb3VyY2VcXFxca2llcmFubm9ibGUuZGV2XFxcXHZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Tb3VyY2Uva2llcmFubm9ibGUuZGV2L3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcclxuaW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gJ3BhdGgnXHJcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCdcclxuXHJcbmxldCBfbm93ID0gbmV3IERhdGUoKTtcclxubGV0IF9kYXRlID0gYCR7X25vdy5nZXRGdWxsWWVhcigpfSR7KF9ub3cuZ2V0TW9udGgoKSArIDEpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKX0ke19ub3cuZ2V0RGF0ZSgpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKX1gO1xyXG5sZXQgX3RpbWUgPSBgJHtfbm93LmdldEhvdXJzKCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpfSR7X25vdy5nZXRNaW51dGVzKCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpfSR7X25vdy5nZXRTZWNvbmRzKCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpfWA7XHJcblxyXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIGJhc2U6IFwiL1wiLFxyXG4gIGJ1aWxkOiB7XHJcbiAgICBhc3NldHNJbmxpbmVMaW1pdDogNDA5NiwgLy8gNGtiXHJcbiAgICByb2xsdXBPcHRpb25zOiB7XHJcbiAgICAgIG91dHB1dDoge1xyXG4gICAgICAgIGVudHJ5RmlsZU5hbWVzOiBgYXNzZXRzL1tuYW1lXS5qc2AsXHJcbiAgICAgICAgY2h1bmtGaWxlTmFtZXM6IGBhc3NldHMvW25hbWVdLmpzYCxcclxuICAgICAgICBhc3NldEZpbGVOYW1lczogYGFzc2V0cy9bbmFtZV0uW2V4dF1gXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgfSxcclxuICBkZWZpbmU6IHtcclxuICAgICdfX0FQUF9WRVJTSU9OX18nOiBKU09OLnN0cmluZ2lmeShgdiR7cHJvY2Vzcy5lbnYubnBtX3BhY2thZ2VfdmVyc2lvbn0tJHtfZGF0ZX0tJHtfdGltZX1gKSxcclxuICB9LFxyXG4gIHJlc29sdmU6IHtcclxuICAgIGFsaWFzOiB7XHJcbiAgICAgICd+JzogcmVzb2x2ZShfX2Rpcm5hbWUsICcuL3NyYycpLFxyXG4gICAgICAnQCc6IHJlc29sdmUoX19kaXJuYW1lLCAnLi9zcmMvYXNzZXRzJyksXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgcGx1Z2luczogW3JlYWN0KCldLFxyXG59KVxyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQW1RLFNBQVMsb0JBQW9CO0FBQ2hTLFNBQVMsZUFBZTtBQUN4QixPQUFPLFdBQVc7QUFGbEIsSUFBTSxtQ0FBbUM7QUFJekMsSUFBSSxPQUFPLG9CQUFJLEtBQUs7QUFDcEIsSUFBSSxRQUFRLEdBQUcsS0FBSyxZQUFZLEtBQUssS0FBSyxTQUFTLElBQUksR0FBRyxTQUFTLEVBQUUsU0FBUyxHQUFHLEdBQUcsSUFBSSxLQUFLLFFBQVEsRUFBRSxTQUFTLEVBQUUsU0FBUyxHQUFHLEdBQUc7QUFDakksSUFBSSxRQUFRLEdBQUcsS0FBSyxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsR0FBRyxHQUFHLElBQUksS0FBSyxXQUFXLEVBQUUsU0FBUyxFQUFFLFNBQVMsR0FBRyxHQUFHLElBQUksS0FBSyxXQUFXLEVBQUUsU0FBUyxFQUFFLFNBQVMsR0FBRyxHQUFHO0FBR3pKLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLE1BQU07QUFBQSxFQUNOLE9BQU87QUFBQSxJQUNMLG1CQUFtQjtBQUFBO0FBQUEsSUFDbkIsZUFBZTtBQUFBLE1BQ2IsUUFBUTtBQUFBLFFBQ04sZ0JBQWdCO0FBQUEsUUFDaEIsZ0JBQWdCO0FBQUEsUUFDaEIsZ0JBQWdCO0FBQUEsTUFDbEI7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ04sbUJBQW1CLEtBQUssVUFBVSxJQUFJLFFBQVEsSUFBSSx1QkFBdUIsU0FBUyxPQUFPO0FBQUEsRUFDM0Y7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQUssUUFBUSxrQ0FBVyxPQUFPO0FBQUEsTUFDL0IsS0FBSyxRQUFRLGtDQUFXLGNBQWM7QUFBQSxJQUN4QztBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVMsQ0FBQyxNQUFNLENBQUM7QUFDbkIsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
