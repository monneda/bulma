import { createRouter, createWebHashHistory } from 'vue-router'

import UserGuard from './guard.user'
import OwnerGuard from './guard.owner'
import CallbackGuard from './guard.callback'

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
    path: '/c',
    name: 'Carteras',
    component: () => import('@/views/Carteras')
  },
  {
    path: '/c/create',
    name: 'CarteraNew',
    component: () => import('@/views/CarteraCreate')
  },
  {
    props: true,
    path: '/c/:id/edit',
    name: 'CarteraEdit',
    component: () => import('@/views/CarteraEdit')
  },
  {
    props: true,
    path: '/c/:id',
    name: 'Cartera',
    component: () => import('@/views/Cartera')
  },
  {
    path: '/notifications',
    name: 'Notifications',
    component: () => import('@/views/Notifications')
  },
  {
    props: true,
    name: 'Profile',
    path: '/u/:username',
    component: () => import('@/views/Profile')
  },
  {
    props: true,
    name: 'ProfileEdit',
    path: '/u/:username/edit',
    beforeEnter: OwnerGuard,
    component: () => import('@/views/ProfileEdit')
  },
  {
    props: true,
    name: 'Following',
    path: '/u/:username/following',
    meta: { page: 'following' },
    component: () => import('@/views/Follows')
  },
  {
    props: true,
    name: 'Followers',
    path: '/u/:username/followers',
    meta: { page: 'followers' },
    component: () => import('@/views/Follows')
  },
  {
    props: true,
    name: 'Suggestions',
    path: '/suggestions',
    meta: { page: 'suggestions' },
    component: () => import('@/views/Follows')
  },
  {
    props: true,
    name: 'Post',
    path: '/p/:id',
    component: () => import('@/views/Post')
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
    path: '/ui',
    name: 'Ui',
    component: () => import('@/views/Ui')
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
