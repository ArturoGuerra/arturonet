import { WOW } from 'wowjs'

export default ({ app }, inject) => {
  let wow = new WOW({ mobile: false })
  wow.init()
  inject("wow", wow)
}
