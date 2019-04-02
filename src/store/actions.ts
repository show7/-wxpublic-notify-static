import { ActionTree } from 'vuex'
import {home,wxSdk,article,articleList,searchPublic} from '../request'
import TYPES from './types'
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
  }
}

export default actions
