import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'


export default defineConfig(({ mode }) => ({
  base: '/github_map_project/',
  publicPath:'/github_map_project/',
  build:{
    outDir:'dist'
  },
  plugins: [
    vue(),]
}))