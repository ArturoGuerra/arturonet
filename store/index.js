
export const state = () => ({
  active: false
})

export const mutations = {
  NAV_STATE (state, active) {
    state.active = active
  }
}
