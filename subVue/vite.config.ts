import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import qiankun from 'vite-plugin-qiankun'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/sub-vue',
  server: {
    port: 3001,
    cors: true,
    origin: 'http://localhost:3001'
  },
  plugins: [
    vue(),
    qiankun('sub-vue', {
      useDevMode: true
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
