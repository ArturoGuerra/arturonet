import { WOW } from 'wowjs'
import Vue from 'vue'

export default ({ app }, inject) => {
  let wow = new WOW({ mobile: false })
  app.wow = wow.init()
  Vue.prototype.$wow = wow
}
