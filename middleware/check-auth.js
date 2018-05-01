import { isAdmin, getUserFromLocalStorage, getUserFromCookie, getTokenFromLocalStorage, getTokenFromCookie, getAccessTokenFromLocalStorage, getAccessTokenFromCookie } from '~/utils/auth'

export default function ({ server, store, req }) {
  // If nuxt generate, pass this middleware
  // if (server && !req) return
  const loggedUser = server ? getUserFromCookie(req) : getUserFromLocalStorage()
  store.commit('SET_USER', loggedUser)
  const token = server ? getTokenFromCookie(req) : getTokenFromLocalStorage()
  store.commit('SET_TOKEN', token)
  const access_token = server ? getAccessTokenFromCookie(req) : getAccessTokenFromLocalStorage()
  store.commit('SET_ACCESS_TOKEN', access_token)
  if (isAdmin(loggedUser)) {
    store.commit('SET_ADMIN', true)
  } else {
    store.commit('SET_ADMIN', false)
  }
}
