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
}

export default actions
