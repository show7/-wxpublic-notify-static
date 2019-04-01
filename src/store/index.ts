import Vue from 'vue'
import Vuex, { ActionTree, MutationTree } from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'
// import 'babel-polyfill'

Vue.use(Vuex)

interface State {
  login: boolean,
  activities: any[]
}

let state: State = {
  login: false,
  activities: []
}

export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations
})
