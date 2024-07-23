import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { setupBuild } from "./build/index";
import path from 'path'

const resolve = (dir: string) => path.resolve(process.cwd(), dir)


export default defineConfig(({ mode }) => ({
  base: './',
  publicPath:'/github_map_project/',
  baseUrl:'/github_map_project/',
  build:setupBuild(),
  injectFile: resolve('src/main.ts'),
  plugins: [
    vue(),
  ]
}))