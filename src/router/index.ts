
import { createRouter, createWebHistory } from 'vue-router';


export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      meta: {
        requiresAuth: true
      },
      redirect: '/task',
      component: () => import('@/layouts/Layout.vue'),
      children: [
        {
          path: '/task',
          name: 'task',
          component: () => import('@/views/tasks/index.vue')
        },
        {
          path: '/message',
          name: 'message',
          component: () => import('@/views/message/index.vue')
        },
        {
          path: '/setting',
          name: 'setting',
          component: () => import('@/views/setting/index.vue')
        }
      ]
    }
  ]
})

