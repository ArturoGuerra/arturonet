import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/pages/Index'
import Projects from '@/pages/Projects'
import Social from '@/pages/Social'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
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
