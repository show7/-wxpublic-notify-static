import Vue from 'vue'
import Vuex, { ActionTree, MutationTree } from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'
// import 'babel-polyfill'

Vue.use(Vuex)

// interface State {
//   login: boolean,
//   publicList: any[]
// }

let state = {
  inputSearch: {
    ownerList: [],
    searchList: []
  },
  login: false,
  mySubscribe: {
    publicList: [],
    totalSubscribeCount: 0,
    totalUnReadCount: 0,
    unReadArticles: []
  },
  articleList:{
    content: [],
    isEnd: true,
    totalCount: 0
  },
  publicList:{
    content: [],
    isEnd: true,
    totalCount: 0
  }
}

export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations
})
