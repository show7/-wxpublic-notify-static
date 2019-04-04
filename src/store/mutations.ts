import TYPES from './types'
import { MutationTree } from 'vuex'

const mutations: MutationTree<any> = {
  [TYPES.SET_PUBLICE](state, mySubscribe): void {
    state.mySubscribe = mySubscribe
  },
  [TYPES.SET_ARTICLELIST](state, articleList): void {
    state.articleList = {
      content: state.articleList.content.concat(articleList.content),
      ...articleList
    }
  },
  [TYPES.SET_INPUTTEXT](state, inputSearch): void {
    state.inputSearch = inputSearch
  },
  [TYPES.SET_PUBLICLIST](state, publicList): void {
    state.publicList = {
      content: state.publicList.content.concat(publicList.content),
      ...publicList
    }
  },
  [TYPES.SET_TYPELIST](state,typelist):void{
    state.typelist = typelist
  },
  [TYPES.SET_ALL_LIST](state,allList):void{
    state.allList = {
      content: state.publicList.content.concat(allList.content),
      ...allList
    }
  },
  [TYPES.LOAD_MORE_ALL_LIST](state,parmas){
    console.log(parmas)
    // const {allList,category}=parmas
    // state.allList[category] = { content:state.allList[category].concat(allList.content),...allList }
  },
  [TYPES.SET_CANCLICK](state, params): void {
    state.canClick = params
  },
  [TYPES.SET_TOGGLENIGHT](state, params): void {
    state.toggleNight = params
  },
  [TYPES.SET_GETTOGGLENIGHT](state, params): void {
    state.gettoggleNight = params
  },
  [TYPES.SET_SUBSCRIBE](state, params): void {
    state.gettoggleNight = params
  },
}
export default mutations
