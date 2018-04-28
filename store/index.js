export const state = () => ({
  user: null,
  token: null,
  admin: false
})

export const mutations = {
  SET_USER (state, user) {
    state.user = user || null
  },
  SET_TOKEN (state, token) {
    state.token = token || null
  },
  SET_ADMIN (state, value) {
    state.admin = value || null
  }
}

export const getters = {
  isAuthenticated (state) {
    return !!state.user
  },
  loggedUser (state) {
    return state.user
  },
  admin (state) {
    return state.admin
  }
}
