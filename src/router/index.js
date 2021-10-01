import { createRouter, createWebHistory } from 'vue-router'

import UserGuard from '@/router/guard.user'
import CallbackGuard from '@/router/guard.callback'

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: () => import('@/views/Landing')
  },
  {
    path: '/callback',
    name: 'Callback',
    beforeEnter: CallbackGuard
  },
  {
    path: '/feed',
    name: 'Feed',
    component: () => import('@/views/Feed')
  },
  {
    props: true,
    path: '/c/:id',
    name: 'Portfolio',
    component: () => import('@/views/Portfolio')
  },
  {
    props: true,
    name: 'Profile',
    path: '/u/:username',
    component: () => import('@/views/Profile')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About')
  },
  {
    path: '/t',
    name: 'Test',
    component: () => import('@/views/Test')
  },
  {
    // Adapted from:
    //  https://next.router.vuejs.org/guide/essentials/dynamic-matching.html
    path: '/:pathMatch(.*)*',
    name: '404',
    component: () => import('@/views/NotFound')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach(UserGuard)

export default router
