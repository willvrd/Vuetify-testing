import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/grid',
      name: 'grid',
      component: () => import('./views/Grid.vue')
    },
    {
      path: '/buttons',
      name: 'buttons',
      component: () => import('./views/Buttons.vue')
    },
    {
      path: '/activities',
      name: 'activities',
      component: () => import('./views/Activities.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    }
  ]
})
