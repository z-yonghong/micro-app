import { createRouter, createWebHistory } from 'vue-router'
import TableView from '@/views/TableView.vue'
import ListView from '@/views/ListView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/table'
    },
    {
      path: '/table',
      name: 'table',
      component: TableView
    },
    {
      path: '/list',
      name: 'list',
      component: ListView
    }
  ]
})

export default router
