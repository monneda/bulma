import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '@/views/Home.vue'
import Test from '@/views/Test.vue'
import Profile from '@/views/Profile.vue'
import Homepage from '@/views/Homepage'
import Portfolio from '@/views/Portfolio.vue'

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
    component: Homepage
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
