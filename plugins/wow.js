import { WOW } from 'wowjs'

export default (_, inject) => {
  let wow = new WOW({ mobile: false })
  wow.init()
  inject("wow", wow)
}
