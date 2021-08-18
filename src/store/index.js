import Vue from "vue"
import Vuex from "vuex"
// import * as modules from "./modules"
// import createLogger from "vuex/dist/logger"

Vue.use(Vuex)

// const debug = process.env.NODE_ENV !== "production"

// const store = new Vuex.Store({
//   modules
//   // strict: debug,
//   // plugins: debug ? [createLogger()] : []
// })
const store = new Vuex.Store({
  state: {
      loadingVisible: false
  },
  mutations: {
      increment(state) {
          state.count++
      },
      loading(state, loadingVisible) {
          state.loadingVisible = loadingVisible
      }
  }
})

export const useStore = () => store

export default store
