import { WOW } from 'wowjs'
import Vue from 'vue'

export default ({ app }, inject) => {
  let wow = new WOW()
  app.wow = wow.init()
  Vue.prototype.$wow = wow
}
