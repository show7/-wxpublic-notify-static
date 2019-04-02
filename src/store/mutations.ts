import TYPES from './types'
import { MutationTree } from 'vuex'

const mutations: MutationTree<any> = {
  [TYPES.SET_PUBLICE](state, mySubscribe): void {
    state.mySubscribe = mySubscribe
  },
  [TYPES.SET_ARTICLELIST](state, articleList): void {
    state.articleList = articleList
  },
  [TYPES.SET_INPUTTEXT](state, inputSearch): void {
    state.inputSearch = inputSearch
  },
}
export default mutations
