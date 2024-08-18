import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { registerMicroApps, start } from 'qiankun'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ElementPlus)

app.mount('#app')

// 注册微应用
registerMicroApps([
  {
    name: 'sub-vue',
    entry: '//localhost:3001',
    container: '#container',
    activeRule: '/sub-vue'
  },
  {
    name: 'sub-react',
    entry: '//localhost:3002',
    container: '#container',
    activeRule: '/sub-react'
  }
])
// 启动 qiankun
start()
