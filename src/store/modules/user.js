const state = () => ({
  toastText: '',
  loadingVisible: false
})

const getters = {
  loadingVisible: state => state.loadingVisible
}

const mutations = {
  increment(state) {
    state.count++
  },
  loading(state, loadingVisible) {
      state.loadingVisible = loadingVisible
  }
}

const actions = {}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
