import { createRouter, createWebHashHistory } from 'vue-router'

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
    path: '/wallets/new',
    name: 'WalletsNew',
    component: () => import('@/views/WalletsNew')
  },
  {
    path: '/notifications',
    name: 'Notifications',
    component: () => import('@/views/Notifications')
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
    props: true,
    name: 'Asset',
    path: '/a/:ticker',
    component: () => import('@/views/Asset')
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
  history: createWebHashHistory(),
  routes
})

router.beforeEach(UserGuard)
router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0)
  next()
})

export default router
