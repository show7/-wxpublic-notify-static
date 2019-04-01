import { ActionTree } from 'vuex'
import * as Request from '../request';
import TYPES from './types'

const actions: ActionTree<any, any> = {
  async getHome({ commit }, params?: any) {
    const res: Ajax.AjaxResponse = await Request.ajaxGet('/home')
    if (res && res.code == 200) commit(TYPES.SET_ACTIVITIES, res.result.list)
  }
}

export default actions
