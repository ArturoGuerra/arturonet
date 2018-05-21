import { isAdmin, getUserFromCookie, getAccessTokenFromCookie, getTokenFromCookie } from '~/utils/auth'

export const state = () => ({
  user: null,
  token: null,
  atoken: null,
  admin: false,
  active: false
})

export const mutations = {
  SET_AUTH (state, { token, atoken, user, admin }) {
    if (token) state.token = token
    if (atoken) state.atoken = atoken
    if (user) state.user = user
    if (admin) state.admin = admin
  },
  NAV_STATE (state, active) {
    state.active = active
  }
}

export const getters = {
  isAuthenticated (state) {
    return !!state.user
  }
}

export const actions = {
  async nuxtServerInit ({ commit }, { store, req }) {
    const token = getTokenFromCookie(req)
    const user = getUserFromCookie(req)
    const atoken = getAccessTokenFromCookie(req)
    let admin = false
    if (isAdmin(user)) {
      admin = true
    }
    return commit('SET_AUTH', { token, atoken, user, admin })
  }
}
