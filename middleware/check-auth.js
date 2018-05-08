import { isAdmin, getUserFromLocalStorage, getUserFromCookie, getTokenFromLocalStorage, getTokenFromCookie, getAccessTokenFromLocalStorage, getAccessTokenFromCookie, isValid, isValidServer } from '~/utils/auth'

export default function ({ server, store, req, redirect }) {
  // If nuxt generate, pass this middleware
  if (server && !req) return
  const valid = server ? isValidServer(req) : isValid()
  const user = server ? getUserFromCookie(req) : getUserFromLocalStorage()
  const token = server ? getTokenFromCookie(req) : getTokenFromLocalStorage()
  const atoken = server ? getAccessTokenFromCookie(req) : getAccessTokenFromLocalStorage()
  let admin = false

  if (isAdmin(user)) {
    admin = true
  }

  if (!valid && atoken) {
    redirect('/auth/logout')
  }

  store.commit('SET_AUTH', { token, atoken, user, admin })
}
