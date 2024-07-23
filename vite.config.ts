import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig(({ mode }) => ({
  base: './github_map_project',
  plugins: [
    vue(),
  ],
  // base: './',
  publicDir: 'public',
  cacheDir: 'node_modules/.vite',
  build: {
    outDir: './dist',
    target: 'modules',
    assetsDir: 'assets',
    assetsInlineLimit: 360000,
  }

}))