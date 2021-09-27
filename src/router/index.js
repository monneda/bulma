import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '@/views/Home'
import Test from '@/views/Test'
import Profile from '@/views/Profile'
import Landing from '@/views/Landing'
import Portfolio from '@/views/Portfolio'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/c/:id',
    name: 'Portfolio',
    props: true,
    component: Portfolio
  },
  {
    path: '/u/:id',
    name: 'Profile',
    props: true,
    component: Profile
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/l',
    name: 'Landing page',
    component: Landing
  },
  {
    path: '/t',
    name: 'Test',
    component: Test
  }
]

export default createRouter({
  history: createWebHashHistory(),
  routes
})
