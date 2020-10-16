import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getter'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: []
  },
  mutations: {
    setUser (state, data) {
      state.user.push(data)
    }
  },
  actions: {
    setAccount ({ commit }, data) {
      commit('setUser', data)
    }
  },
  modules: {
  },
  getters
})
