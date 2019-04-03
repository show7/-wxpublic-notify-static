import Vue from 'vue'
import Vuex, { ActionTree, MutationTree } from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'
// import 'babel-polyfill'

Vue.use(Vuex)

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
  typelist:[],
  allList:{},
  articleList:{
    content: [],
    isEnd: true,
    totalCount: 0
  },
  publicList:{
    content: [],
    isEnd: true,
    totalCount: 0
  },
  canClick: true,
  toggleNight: true,
  gettoggleNight: true
}

export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations
})
