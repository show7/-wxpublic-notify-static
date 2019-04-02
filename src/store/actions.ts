import { ActionTree } from 'vuex'
// import * as RequestUrl from '../requestUrl';
import TYPES from './types'
interface Params{
  headers?: string,
  
}
const actions: ActionTree<any, any> = {
  // async getHome({ commit }, params?: any) {
  //   const res: Ajax.AjaxResponse = await RequestUrl.getData()
  //   if (res && res.code == 200) commit(TYPES.SET_ACTIVITIES, res.result.list)
  // }
}

export default actions
