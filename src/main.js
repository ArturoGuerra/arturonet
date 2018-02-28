import Vue from 'vue'
import App from './App'
import router from './router'

import HeroFoot from '@/components/HeroFoot'
import NavMenu from '@/components/NavMenu'
import Footer from '@/components/Footer'

import '@/assets/css/bulma.css'
import '@/assets/css/hero.css'
import '@/assets/css/gradients.css'
import '@/assets/css/bodystyling.css'

import '@/assets/media/webicon.png'
import '@/assets/media/myface.jpg'

import '@/assets/js/projects.js'
import '@/assets/js/burger.js'

Vue.component('NavMenu', NavMenu)
Vue.component('Footer', Footer)
Vue.component('HeroFoot', HeroFoot)

Vue.config.productionTip = true

var app = new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

app.$mount('#app')
