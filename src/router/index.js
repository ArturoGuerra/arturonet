import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'

import Home from '@/pages/Home'
import Projects from '@/pages/Projects'
import Social from '@/pages/Social'

Vue.use(Router)
Vue.use(Meta)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/social',
      name: 'Social',
      component: Social
    },
    {
      path: '/projects',
      name: 'Projects',
      component: Projects
    }
  ],
  linkActiveClass: 'is-active',
  linkExactActiveClass: 'is-active'
})
