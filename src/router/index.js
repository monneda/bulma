import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: () => import('@/views/Landing')
  },
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home')
  },
  {
    path: '/c/:id',
    name: 'Portfolio',
    props: true,
    component: () => import('@/views/Portfolio')
  },
  {
    path: '/u/:id',
    name: 'Profile',
    props: true,
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

export default createRouter({
  history: createWebHashHistory(),
  routes
})
