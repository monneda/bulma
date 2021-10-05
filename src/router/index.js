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
    path: '/wallets',
    name: 'Wallets',
    component: () => import('@/views/Wallets')
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
    props: true,
    name: 'Following',
    path: '/u/:username/following',
    meta: { followers: false },
    component: () => import('@/views/Follows')
  },
  {
    props: true,
    name: 'Followers',
    path: '/u/:username/followers',
    meta: { followers: true },
    component: () => import('@/views/Follows')
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
