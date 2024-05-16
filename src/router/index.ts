
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
        }
      ]
    }
  ]
})

