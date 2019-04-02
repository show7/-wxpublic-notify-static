import { ActionTree } from 'vuex'
import {home} from '../request'
import TYPES from './types'
interface Params{
  headers?: string,
  
}
const actions: ActionTree<any, any> = {
  async getData({ commit }, params?: any) {
    const res: any = await home.getData()
    commit(TYPES.SET_ACTIVITIES, res.result.list)
  }
}

export default actions
