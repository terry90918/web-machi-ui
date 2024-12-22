import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/home-view.vue'),
    },
    {
      path: '/components',
      name: 'components',
      component: () => import('../views/components-view.vue'),
    },
  ],
})

export default router
