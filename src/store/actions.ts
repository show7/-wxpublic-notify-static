import { ActionTree } from 'vuex'
import {home} from '../request'
import TYPES from './types'
interface Params{
  headers?: string,
  
}
const actions: ActionTree<any, any> = {
  async home.getData({ commit }, params?: any) {
    const res: Ajax.AjaxResponse = await RequestUrl.getData()
    if (res && res.code == 200) commit(TYPES.SET_ACTIVITIES, res.result.list)
  }
}

export default actions
