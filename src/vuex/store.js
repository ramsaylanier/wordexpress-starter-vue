import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'

Vue.use(Vuex)

const state = {
  activeMenuName: null
}

const mutations = {
  ACTIVE_MENU_NAME: (state, name) => {
    state.activeMenuName = name
  }
}

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})
