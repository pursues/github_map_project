import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { setupBuild } from "./build/index.ts"


export default defineConfig(({ mode }) => ({
  base: './',
  publicPath:'/github_map_project/',
  baseUrl:'/github_map_project/',
  build:setupBuild(),
  plugins: [
    vue(),]
}))