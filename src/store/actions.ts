import { ActionTree } from 'vuex'
import {home,wxSdk,article} from '../request'
import TYPES from './types'
interface Params{
  headers?: string,
  
}
const actions: ActionTree<any, any> = {
<<<<<<< HEAD
  // async aa({ commit }, params?: any) {
  //   const res: Ajax.AjaxResponse = await home.getData()
  //   if (res && res.code == 200) commit(TYPES.SET_ACTIVITIES, res.result.list)
  // }
=======
  // async getData({ commit }, params?: any) {
  //   const res: Ajax.AxiosResponse | any = await home.getData()
  //   if (res.code && res.code === 200) commit(TYPES.SET_ACTIVITIES, res.msg)
  // },
  async getArticle({ commit }, params?: any) {
    const res: Ajax.AxiosResponse | any = await article.article()
    commit(TYPES.SET_ACTIVITIES, res.msg)
  }
>>>>>>> 0b59ee389596f9401eb306ad0ec917c5767ebf1e
}

export default actions
