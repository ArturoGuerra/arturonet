import { isAdmin, getUserFromLocalStorage, getUserFromCookie, getTokenFromLocalStorage, getTokenFromCookie } from '~/utils/auth'

export default function ({ server, store, req }) {
  // If nuxt generate, pass this middleware
  if (server && !req) return
  const loggedUser = server ? getUserFromCookie(req) : getUserFromLocalStorage()
  store.commit('SET_USER', loggedUser)
  const token = server ? getTokenFromCookie(req) : getTokenFromLocalStorage()
  store.commit('SET_TOKEN', token)
  if (isAdmin(loggedUser)) {
    store.commit('SET_ADMIN', true)
  } else {
    store.commit('SET_ADMIN', false)
  }
}
