import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'


export default defineConfig(({ mode }) => ({
  base:'/',
  plugins: [
    vue(),
  ],
build:{
  outDir:"dist"
},
lib:{
  entry:"./src/main.ts"
}
}))
