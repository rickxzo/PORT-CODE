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
    {
      path: '/certifications',
      name: 'certifications',
      component: () => import('../views/Certifications.vue'),
    },
    {
      path: '/background',
      name: 'background',
      component: () => import('../views/Background.vue'),
    }
  ],
})

export default router
