import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteSingleFile } from 'vite-plugin-singlefile'
import path from "node:path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), viteSingleFile()],
  build: {
    outDir: path.resolve(__dirname, '../native/assets/web'),
    assetsDir: "assets",
    sourcemap: false, // singlefile 不支持 sourcemap
  },
})
