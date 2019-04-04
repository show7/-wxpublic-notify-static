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
  noviceGuideState:0,
  noviceState:false,
  login: false,
  mySubscribe: {
    publicList: [],
    totalSubscribeCount: 0,
    totalUnReadCount: 0,
    unReadArticles: []
  },
  typelist:[],
  allList:{
    content: [],
    isEnd: false,
    totalCount: 0
  },
  listParams:[{
    category:1,
    page:1
  }],
  activeIndex: 0,
  loading: true,
  finished: false,
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
  gettoggleNight: false
}

export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations
})
