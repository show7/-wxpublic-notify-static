import { ActionTree } from 'vuex'
import {home,wxSdk,article,articleList,searchPublic,publicList} from '../request'
import TYPES from './types'
import { Loading } from 'vant';
const actions: ActionTree<any, any> = {
  // async getData({ commit }, params?: any) {
  //   const res: Ajax.AxiosResponse | any = await home.getData()
  //   if (res.code && res.code === 200) commit(TYPES.SET_ACTIVITIES, res.msg)
  // },
  async getArticle({ commit }, params?: any) {
    const res: Ajax.AxiosResponse | any = await article.article()
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
    commit(TYPES.SET_ARTICLELIST, res.msg)
  },
  async getTypelist({commit},params:any){
    const res : Ajax.AxiosResponse | any = await home.getTypelist(params)
    commit(TYPES.SET_TYPELIST, res.msg)
  },
  async setAllList({commit},params:any){
    const res : Ajax.AxiosResponse | any = await home.getAllList(params)
    commit(TYPES.SET_ALL_LIST, Object.assign(res.msg, params))
  },
  async loadMore({commit},params:any){
    const res : Ajax.AxiosResponse | any = await home.getAllList(params)
    commit(TYPES.LOAD_MORE_ALL_LIST, Object.assign(res.msg, params))
  }

}

export default actions
