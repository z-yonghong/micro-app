import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { renderWithQiankun, qiankunWindow } from 'vite-plugin-qiankun/dist/helper'

import App from './App.vue'
import router from './router'

let app: any

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  app = createApp(App)
  app.use(createPinia())
  app.use(router)
  app.use(ElementPlus)
  app.mount('#app')
} else {
  renderWithQiankun({
    mount(props) {
      app = createApp(App)
      app.use(createPinia())
      app.use(router)
      app.use(ElementPlus)
      app.mount(props.container?.querySelector('#app'))
    },
    bootstrap() {},
    update() {},
    unmount() {
      app?.unmount()
    }
  })
}
