import { ActionTree } from 'vuex'
import {
  home,
  wxSdk,
  article,
  articleList,
  searchPublic,
  publicList,
  unsubscribe,
  toggleNight,
  getToggleNight,
  subscribe
} from '../request'
import TYPES from './types'
import mark from '../utils/mark'
import { Loading } from 'vant';
const actions: ActionTree<any, any> = {
  // async getData({ commit }, params?: any) {
  //   const res: Ajax.AxiosResponse | any = await home.getData()
  //   if (res.code && res.code === 200) commit(TYPES.SET_ACTIVITIES, res.msg)
  // },
  async getArticle({ commit }, params?: any) {
    const res: Ajax.AxiosResponse | any = await article.article()
    const publicList= res.msg.publicList
    if(!!publicList && !publicList.length){
      commit(TYPES.SET_NOVICE_STATE, true)
    }
    console.log(res.msg)
    commit(TYPES.SET_PUBLICE, res.msg)
  },
  async ArticleList({ commit }, params: any) {
    const res: Ajax.AxiosResponse | any = await articleList.articleList(params)
    commit(TYPES.SET_ARTICLELIST, res.msg)
  },
  async changeInputText({commit}, text: string) {
    const res: Ajax.AxiosResponse | any = await searchPublic.searchPublic(text)
    commit(TYPES.SET_INPUTTEXT, res.msg)
  },
  async PublicList({ commit }, params: any) {
    const res: Ajax.AxiosResponse | any = await publicList.publicList(params)
    commit(TYPES.SET_PUBLICLIST, res.msg)
  },
  async ToggleNight({ commit }, params: any) {
    const res: Ajax.AxiosResponse | any = await toggleNight.toggleNight(params)
    commit(TYPES.SET_TOGGLENIGHT)
  },
  async GetToggleNight({ commit }) {
    const res: Ajax.AxiosResponse | any = await getToggleNight.getToggleNight()
    commit(TYPES.SET_GETTOGGLENIGHT, res.msg)
  },
  CanClick({ commit }) {
    commit(TYPES.SET_CANCLICK, false)
  },
  async getTypelist({commit},params:any){
    const res : Ajax.AxiosResponse | any = await home.getTypelist(params)
    commit(TYPES.SET_TYPELIST, res.msg)
  },
  async setAllList({commit},params:any){
    const res : Ajax.AxiosResponse | any = await home.getAllList(params)
    commit(TYPES.SET_ALL_LIST, res.msg)
  },
  async loadMore({commit},params:any){
    const res : Ajax.AxiosResponse | any = await home.getAllList(params)
    commit(TYPES.LOAD_MORE_ALL_LIST, Object.assign(res.msg, params))
  },
  // async searchPublic({commit},params:any){
  //   const res : Ajax.AxiosResponse | any = await searchPublic.recommandPublic(params)
  //   commit(TYPES.LOAD_MORE_ALL_LIST, res.msg)
  // },
  setNoviceGuideState({commit},params:any){
    mark({
      module: '打点',
      function: '使用攻略',
      action: '点击使用攻略',
      memo: params
    })
    commit(TYPES.SET_NOVICE_GUIDE_STATE,params)
  },
  setNoviceState({commit},params:any){
    commit(TYPES.SET_NOVICE_STATE, params)
  }
}

export default actions
