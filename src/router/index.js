import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Landing.vue'),
    },
    {
      path: '/info',
      name: 'info',
      component: () => import('../views/About.vue'),
    },
    {
      path: '/work',
      name: 'work',
      component: () => import('../views/Work.vue'),
    },
  ],
})

export default router
