import Vue from 'vue'
import Vuex, { ActionTree, MutationTree } from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'
// import 'babel-polyfill'

Vue.use(Vuex)

interface State {
  
}

let state: State = {
  login: false,
  modules: [],
  headline: [],
  activities: [],
  superSales: [],
  shops: [],
  searchVal: ''
}

export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations
})
