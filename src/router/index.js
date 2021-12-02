import { createRouter, createWebHashHistory } from 'vue-router'

import UserGuard from './guard.user'
import OwnerGuard from './guard.owner'
import FeedGuard from './guard.feed'
import LandingGuard from './guard.landing'
import CallbackGuard from './guard.callback'

const routes = [
  {
    path: '/',
    name: 'Landing',
    beforeEnter: FeedGuard,
    component: () => import(/* webpackChunkName: "group-landing" */ '@/views/Landing')
  },
  {
    path: '/callback',
    name: 'Callback',
    beforeEnter: CallbackGuard
  },
  {
    path: '/feed',
    name: 'Feed',
    beforeEnter: LandingGuard,
    component: () => import(/* webpackChunkName: "group-feed" */ '@/views/Feed')
  },
  {
    path: '/c',
    name: 'Carteras',
    component: () => import(/* webpackChunkName: "group-cartera" */ '@/views/Carteras')
  },
  {
    path: '/c/create',
    name: 'CarteraNew',
    component: () => import(/* webpackChunkName: "group-cartera" */ '@/views/CarteraCreate')
  },
  {
    props: true,
    path: '/c/:id/edit',
    name: 'CarteraEdit',
    component: () => import(/* webpackChunkName: "group-cartera" */ '@/views/CarteraEdit')
  },
  {
    props: true,
    path: '/c/:id',
    name: 'Cartera',
    component: () => import(/* webpackChunkName: "group-cartera" */ '@/views/Cartera')
  },
  {
    path: '/notifications',
    name: 'Notifications',
    component: () => import(/* webpackChunkName: "group-notifications" */ '@/views/Notifications')
  },
  {
    props: true,
    name: 'Profile',
    path: '/u/:username',
    component: () => import(/* webpackChunkName: "group-profile" */ '@/views/Profile')
  },
  {
    props: true,
    name: 'ProfileEdit',
    path: '/u/:username/edit',
    beforeEnter: OwnerGuard,
    component: () => import(/* webpackChunkName: "group-profile" */ '@/views/ProfileEdit')
  },
  {
    props: true,
    name: 'Following',
    path: '/u/:username/following',
    meta: { page: 'following' },
    component: () => import(/* webpackChunkName: "group-profile" */ '@/views/Follows')
  },
  {
    props: true,
    name: 'Followers',
    path: '/u/:username/followers',
    meta: { page: 'followers' },
    component: () => import(/* webpackChunkName: "group-profile" */ '@/views/Follows')
  },
  {
    props: true,
    name: 'Suggestions',
    path: '/suggestions',
    meta: { page: 'suggestions' },
    component: () => import(/* webpackChunkName: "group-profile" */ '@/views/Follows')
  },
  {
    props: true,
    name: 'Post',
    path: '/p/:id',
    component: () => import(/* webpackChunkName: "group-feed" */ '@/views/Post')
  },
  {
    props: true,
    name: 'Asset',
    path: '/a/:ticker',
    component: () => import(/* webpackChunkName: "group-asset" */ '@/views/Asset')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "group-about" */ '@/views/About')
  },
  {
    path: '/settings',
    name: 'Settings',
    component: () => import(/* webpackChunkName: "group-about" */ '@/views/legal/Legal')
  },
  {
    path: '/t',
    name: 'Test',
    component: () => import(/* webpackChunkName: "group-debug" */ '@/views/Test')
  },
  {
    path: '/ui',
    name: 'Ui',
    component: () => import(/* webpackChunkName: "group-debug" */ '@/views/Ui')
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

router.afterEach((to, from) => {
  window.scrollTo(0, 0)
})

export default router
