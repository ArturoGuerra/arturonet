import { isAdmin, getUserFromLocalStorage, getUserFromCookie, getTokenFromLocalStorage, getTokenFromCookie, getAccessTokenFromLocalStorage, getAccessTokenFromCookie, isValid, deleteSession } from '~/utils/auth'
import { logout } from '~/utils/lock'

export default function ({ server, store, req }) {
  // If nuxt generate, pass this middleware
  if (server && !req) return
  const valid = server ? true : isValid()

  if (!valid) {
    deleteSession()
    logout()
    return
  }

  const user = server ? getUserFromCookie(req) : getUserFromLocalStorage()
  const token = server ? getTokenFromCookie(req) : getTokenFromLocalStorage()
  const atoken = server ? getAccessTokenFromCookie(req) : getAccessTokenFromLocalStorage()
  let admin = false
  if (isAdmin(user)) {
    admin = true
  }
  store.commit('SET_AUTH', { token, atoken, user, admin })
}
