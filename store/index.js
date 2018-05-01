import { isAdmin, getUserFromCookie, getAccessTokenFromCookie, getTokenFromCookie } from '~/utils/auth'

export const state = () => ({
  user: null,
  token: null,
  atoken: null,
  admin: false
})

export const mutations = {
  SET_USER (state, user) {
    state.user = user || null
  },
  SET_TOKEN (state, token) {
    state.token = token || null
  },
  SET_ACCESS_TOKEN (state, token) {
    state.atoken = token || null
  },
  SET_ADMIN (state, value) {
    state.admin = value || null
  }
}

export const getters = {
  isAuthenticated (state) {
    return !!state.user
  }
}

export const actions = {
  nuxtServerInit ({ commit }, { store, req }) {
    const token = getTokenFromCookie(req)
    const loggedUser = getUserFromCookie(req)
    const access_token = getAccessTokenFromCookie(req) // eslint-disable-line camelcase
    commit('SET_TOKEN', token)
    commit('SET_USER', loggedUser)
    commit('SET_ACCESS_TOKEN', access_token)
    if (isAdmin(loggedUser)) {
      commit('SET_ADMIN', true)
    } else {
      commit('SET_ADMIN', false)
    }
  }
}
